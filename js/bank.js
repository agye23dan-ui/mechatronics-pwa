/* Extra practice questions built from each module's own glossary terms and formulas.
   Loaded after the module data and before app.js. Every question carries an explanation
   taken straight from the module text, so nothing here is invented. */
(function () {
  var mods = window.MECH && window.MECH.modules;
  if (!mods) return;

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pick(list, n, skip) {
    var out = [], pool = shuffle(list);
    for (var i = 0; i < pool.length && out.length < n; i++) { if (!skip(pool[i])) out.push(pool[i]); }
    return out;
  }
  function place(correct, wrong) {
    var opts = shuffle([correct].concat(wrong));
    return { opts: opts, a: opts.indexOf(correct) };
  }
  function firstWord(s) { return String(s).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').trim().split(/\s+/)[0]; }

  mods.forEach(function (m, mi) {
    var have = {};
    (m.quiz || []).forEach(function (q) { have[q.q] = 1; });
    var terms = (m.terms || []).filter(function (t) { return t && t.t && t.d; });
    var formulas = (m.formulas || []).filter(function (f) { return f && f.n && f.f; });
    var extra = [];

    // Terms: alternate between "which term fits this definition" and "which definition fits this term".
    terms.forEach(function (t, i) {
      var others = terms.filter(function (o) { return o !== t; });
      if (others.length < 3) return;
      var q, pack;
      var leaks = t.d.toLowerCase().indexOf(t.t.toLowerCase()) >= 0;
      if (i % 2 === 0 && !leaks) {
        var wrongT = pick(others, 3, function () { return false; }).map(function (o) { return o.t; });
        pack = place(t.t, wrongT);
        q = 'Which term is described here? ' + t.d;
      } else {
        var wrongD = pick(others, 3, function () { return false; }).map(function (o) { return o.d; });
        pack = place(t.d, wrongD);
        q = 'Which definition matches the term "' + t.t + '"?';
      }
      extra.push({ id: m.id + '-gt' + (i + 1), q: q, opts: pack.opts, a: pack.a, why: t.t + ': ' + t.d });
    });

    // Formulas: "which quantity or law does this expression describe".
    formulas.forEach(function (f, i) {
      var others = formulas.filter(function (o) { return o !== f && o.f !== f.f; });
      var wrong = pick(others, 3, function (o) { return firstWord(o.n) === firstWord(f.n); });
      if (wrong.length < 3) wrong = wrong.concat(pick(others.filter(function (o) { return wrong.indexOf(o) < 0; }), 3 - wrong.length, function () { return false; }));
      if (wrong.length < 3) return;
      var pack = place(f.n, wrong.map(function (o) { return o.n; }));
      extra.push({ id: m.id + '-gf' + (i + 1), q: 'Which quantity or law does this formula describe? ' + f.f, opts: pack.opts, a: pack.a, why: f.n + ': ' + f.f + (f.v ? ' (' + f.v + ')' : '') + '.' });
    });

    extra.forEach(function (q) { if (!have[q.q]) { m.quiz.push(q); have[q.q] = 1; } });
  });
})();
