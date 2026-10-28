(function () {
  'use strict';

  var MODS = (window.MECH && window.MECH.modules ? window.MECH.modules : []).slice().sort(function (a, b) { return a.n - b.n; });
  var BY = {}, QBY = {};
  MODS.forEach(function (m) {
    BY[m.id] = m;
    (m.quiz || []).forEach(function (q) { QBY[q.id] = { mod: m, q: q }; });
  });
  var GROUPS = ['Foundations', 'Mechanical', 'Electrical & Electronics', 'Fluid Power', 'Control & Automation', 'Systems & Maintenance'];
  var DAY = 86400000;
  var BOX_DAYS = [0, 0, 1, 3, 7, 16];
  var app = document.getElementById('app');

  /* ---------- storage ---------- */
  var KEY = 'mechatronics.v1';
  function blank() { return { v: 1, theme: 'auto', lessons: {}, quiz: {}, cards: {}, wrong: {}, exams: [], last: null }; }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { var o = JSON.parse(raw); return merge(blank(), o); }
    } catch (e) { /* storage unavailable: run in memory */ }
    return blank();
  }
  function merge(base, o) {
    if (!o || typeof o !== 'object') return base;
    ['lessons', 'quiz', 'cards', 'wrong'].forEach(function (k) { if (o[k] && typeof o[k] === 'object') base[k] = o[k]; });
    if (Array.isArray(o.exams)) base.exams = o.exams.slice(-50);
    if (o.theme === 'light' || o.theme === 'dark' || o.theme === 'auto') base.theme = o.theme;
    if (o.last && BY[o.last.mod]) base.last = o.last;
    return base;
  }
  var S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function fmt(s) {
    var t = esc(s);
    t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/\*([^*\s][^*]*)\*/g, '<em>$1</em>');
    return t;
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function toast(msg) {
    var t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('on');
    clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove('on'); }, 2400);
  }
  function lessonsDone(m) { return m.lessons.filter(function (l) { return S.lessons[l.id]; }).length; }
  function minutes(m) { return m.lessons.reduce(function (a, l) { return a + l.minutes; }, 0); }
  function figCount(m) { var n = 0; m.lessons.forEach(function (l) { l.body.forEach(function (b) { if (b.t === 'svg') n++; }); }); return n; }
  function bar(p, cls) { return '<div class="bar ' + (cls || '') + '" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p + '"><i style="width:' + p + '%"></i></div>'; }
  function href(h) { location.hash = h; }

  /* ---------- theme ---------- */
  function applyTheme() {
    var r = document.documentElement;
    if (S.theme === 'auto') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', S.theme);
    var dark = S.theme === 'dark' || (S.theme === 'auto' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var meta = document.querySelector('meta[name=theme-color]');
    if (meta) meta.setAttribute('content', dark ? '#171e29' : '#ffffff');
    var b = document.getElementById('theme');
    if (b) b.setAttribute('aria-label', 'Theme: ' + S.theme + '. Activate to change.');
  }
  document.getElementById('theme').addEventListener('click', function () {
    S.theme = S.theme === 'auto' ? 'light' : S.theme === 'light' ? 'dark' : 'auto';
    save(); applyTheme(); toast('Theme: ' + S.theme);
  });
  applyTheme();

  /* ---------- lesson block rendering ---------- */
  var CALLOUT = { note: 'Note', warn: 'Safety warning', tip: 'Tip', ghana: 'Ghana' };
  function block(b) {
    var i;
    switch (b.t) {
      case 'h': return '<h3>' + fmt(b.x) + '</h3>';
      case 'p': return '<p>' + fmt(b.x) + '</p>';
      case 'ul': return '<ul>' + b.items.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul>';
      case 'ol': return '<ol>' + b.items.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ol>';
      case 'table':
        return '<div class="tw" tabindex="0"><table>' + (b.cap ? '<caption>' + fmt(b.cap) + '</caption>' : '') +
          '<thead><tr>' + b.head.map(function (h) { return '<th scope="col">' + fmt(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          b.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + fmt(c) + '</td>'; }).join('') + '</tr>'; }).join('') +
          '</tbody></table></div>';
      case 'svg':
        var svg = b.svg.replace('<svg', '<svg aria-label="' + esc(b.alt) + '"');
        return '<figure class="fig"><div class="svgbox">' + svg + '</div><figcaption>' + fmt(b.cap) + '</figcaption></figure>';
      case 'note': case 'warn': case 'tip': case 'ghana':
        return '<div class="callout ' + b.t + '" role="note"><b class="k">' + CALLOUT[b.t] + '</b><p>' + fmt(b.x) + '</p></div>';
      case 'formula':
        return '<div class="formula"><div class="f">' + esc(b.x) + '</div>' + (b.where ? '<div class="w">' + fmt(b.where) + '</div>' : '') + '</div>';
      case 'worked':
        return '<section class="worked"><header>' + fmt(b.title) + '</header><div class="in"><p><strong>Problem.</strong> ' + fmt(b.problem) + '</p><ol>' +
          b.steps.map(function (s) { return '<li>' + fmt(s) + '</li>'; }).join('') + '</ol><div class="ans">Answer: ' + fmt(b.answer) + '</div></div></section>';
      case 'steps':
        return '<section class="steps"><header>' + fmt(b.title || 'Procedure') + '</header><div class="in"><ol>' +
          b.items.map(function (s) { return '<li>' + fmt(s) + '</li>'; }).join('') + '</ol></div></section>';
      case 'key':
        return '<aside class="key"><h3>Key points</h3><ul>' + b.items.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ul></aside>';
    }
    return '';
  }

  /* ---------- view plumbing ---------- */
  var clock = null;
  function setView(html, title, keep) {
    if (!keep && clock) { clearInterval(clock); clock = null; }
    app.innerHTML = html;
    document.title = (title ? title + ' · ' : '') + 'Mechatronics Technician Study';
    if (!keep) {
      window.scrollTo(0, 0);
      var h = app.querySelector('h1');
      if (h) { h.setAttribute('tabindex', '-1'); try { h.focus({ preventScroll: true }); } catch (e) { /* ignore */ } }
    }
  }
  function markNav(key) {
    var links = document.querySelectorAll('[data-nav]');
    for (var i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-nav') === key) links[i].setAttribute('aria-current', 'page'); else links[i].removeAttribute('aria-current');
    }
  }

  /* ---------- home ---------- */
  function totals() {
    var l = 0, ld = 0, qs = 0, qb = 0, qn = 0, mins = 0, minsDone = 0;
    MODS.forEach(function (m) {
      l += m.lessons.length; ld += lessonsDone(m); mins += minutes(m);
      m.lessons.forEach(function (x) { if (S.lessons[x.id]) minsDone += x.minutes; });
      var r = S.quiz[m.id]; if (r) { qb += r.best; qn++; }
    });
    return { lessons: l, done: ld, quizAvg: qn ? Math.round(qb / qn) : 0, quizDone: qn, mins: mins, minsDone: minsDone };
  }
  function viewHome() {
    markNav('home');
    if (!MODS.length) { setView('<h1>Mechatronics</h1><p class="empty">No modules are loaded.</p>', ''); return; }
    var t = totals(), p = pct(t.done, t.lessons);
    var cont = S.last && BY[S.last.mod] ? S.last : { mod: MODS[0].id, lesson: 1 };
    var cm = BY[cont.mod];
    var contLabel = t.done === 0 && !S.last ? 'Start Module 1' : 'Continue: ' + cm.short;
    var html = '<section class="hero"><div><h1>Mechatronics Technician</h1><p class="lead">Mechanical, electrical, electronics, fluid power and PLC control. ' + MODS.length + ' modules, works fully offline.</p>' +
      '<div class="row"><a class="btn pri" href="#/m/' + cm.id + '/l/' + cont.lesson + '">' + esc(contLabel) + '</a><a class="btn" href="#/exam">Practice exam</a></div></div>' +
      '<div class="card"><div class="row sp"><strong>Course progress</strong><span class="muted small">' + p + '%</span></div>' + bar(p) +
      '<div class="stats" style="margin-top:12px"><div class="stat"><b>' + t.done + '/' + t.lessons + '</b><span>lessons</span></div><div class="stat"><b>' + t.quizDone + '/' + MODS.length + '</b><span>quizzes</span></div><div class="stat"><b>' + (t.quizDone ? t.quizAvg + '%' : '–') + '</b><span>avg best</span></div></div></div></section>';
    GROUPS.forEach(function (g) {
      var ms = MODS.filter(function (m) { return m.group === g; });
      if (!ms.length) return;
      html += '<h2 class="gh">' + esc(g) + '</h2><div class="grid">';
      ms.forEach(function (m) {
        var d = lessonsDone(m), full = d === m.lessons.length;
        html += '<a class="mod' + (full ? ' done' : '') + '" href="#/m/' + m.id + '"><div class="num">' + (full ? '✓' : m.n) + '</div><div><h3>' + esc(m.title) + '</h3><p>' + esc(m.blurb) + '</p>' + bar(pct(d, m.lessons.length), full ? 'g' : '') +
          '<div class="meta"><span>' + d + '/' + m.lessons.length + ' lessons · ' + minutes(m) + ' min</span><span>' + (S.quiz[m.id] ? 'Quiz ' + S.quiz[m.id].best + '%' : 'No quiz yet') + '</span></div></div></a>';
      });
      html += '</div>';
    });
    setView(html, '');
  }

  /* ---------- module ---------- */
  function modTabs(m, cur) {
    var tabs = [['', 'Lessons'], ['terms', 'Terms'], ['formulas', 'Formulas']];
    return '<div class="tabs" role="navigation" aria-label="Module sections">' + tabs.map(function (t) {
      if (t[0] === 'formulas' && !(m.formulas && m.formulas.length)) return '';
      return '<a href="#/m/' + m.id + (t[0] ? '/' + t[0] : '') + '"' + (cur === t[0] ? ' aria-current="page"' : '') + '>' + t[1] + '</a>';
    }).join('') + '</div>';
  }
  function modHead(m) {
    return '<div class="crumb"><a href="#/">Modules</a> / Module ' + m.n + '</div><span class="tag">' + esc(m.group) + '</span><h1>' + m.n + '. ' + esc(m.title) + '</h1>';
  }
  function viewModule(m) {
    markNav('home');
    var d = lessonsDone(m);
    var html = modHead(m) + '<p class="lead">' + esc(m.blurb) + '</p>' +
      '<p class="muted small">' + m.lessons.length + ' lessons · ' + minutes(m) + ' min · ' + figCount(m) + ' diagrams · ' + m.quiz.length + ' questions · ' + m.cards.length + ' flashcards</p>' +
      '<div class="actions"><a class="btn pri" href="#/m/' + m.id + '/l/' + (nextLesson(m)) + '">' + (d ? 'Continue' : 'Start') + '</a><button class="btn" data-act="quiz" data-id="' + m.id + '">Take quiz</button><a class="btn" href="#/m/' + m.id + '/cards">Flashcards</a><a class="btn" href="#/m/' + m.id + '/terms">Glossary</a></div>' +
      modTabs(m, '') +
      '<h2>Lessons</h2><ol class="lessonlist">' + m.lessons.map(function (l, i) {
        var on = S.lessons[l.id];
        return '<li><a href="#/m/' + m.id + '/l/' + (i + 1) + '"><span class="dot' + (on ? ' on' : '') + '">' + (on ? '✓' : i + 1) + '</span><span>' + esc(l.title) + '</span><span class="muted small">' + l.minutes + ' min</span></a></li>';
      }).join('') + '</ol>' +
      '<h2>What you will be able to do</h2><div class="card"><ul class="outcomes">' + m.outcomes.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></div>' +
      (S.quiz[m.id] ? '<p class="muted small" style="margin-top:14px">Quiz best ' + S.quiz[m.id].best + '%, last ' + S.quiz[m.id].last + '%, ' + S.quiz[m.id].attempts + ' attempt(s).</p>' : '') +
      neighbours(m);
    setView(html, m.title);
  }
  function nextLesson(m) {
    for (var i = 0; i < m.lessons.length; i++) if (!S.lessons[m.lessons[i].id]) return i + 1;
    return 1;
  }
  function neighbours(m) {
    var i = MODS.indexOf(m), p = MODS[i - 1], n = MODS[i + 1];
    return '<div class="pager">' + (p ? '<a class="btn ghost" href="#/m/' + p.id + '">← ' + esc(p.short) + '</a>' : '<span></span>') + (n ? '<a class="btn ghost" href="#/m/' + n.id + '">' + esc(n.short) + ' →</a>' : '<span></span>') + '</div>';
  }
  function viewTerms(m) {
    markNav('home');
    var terms = m.terms.slice().sort(function (a, b) { return a.t.localeCompare(b.t); });
    setView(modHead(m) + modTabs(m, 'terms') + '<dl class="terms">' + terms.map(function (t) { return '<dt>' + esc(t.t) + '</dt><dd>' + esc(t.d) + '</dd>'; }).join('') + '</dl>', m.short + ' terms');
  }
  function fcards(list) {
    return list.map(function (f) { return '<div class="card fcard"><div class="n">' + esc(f.n) + (f.m ? ' <span class="muted small">Module ' + f.m.n + '</span>' : '') + '</div><div class="f">' + esc(f.f) + '</div><div class="v">' + esc(f.v) + '</div></div>'; }).join('');
  }
  function viewFormulas(m) {
    markNav('home');
    setView(modHead(m) + modTabs(m, 'formulas') + fcards(m.formulas || []), m.short + ' formulas');
  }

  /* ---------- lesson ---------- */
  function viewLesson(m, n) {
    markNav('home');
    var l = m.lessons[n - 1];
    if (!l) return notFound();
    S.last = { mod: m.id, lesson: n }; save();
    var done = !!S.lessons[l.id];
    var prev = n > 1 ? '#/m/' + m.id + '/l/' + (n - 1) : '#/m/' + m.id;
    var html = '<article class="lesson narrow"><div class="crumb"><a href="#/">Modules</a> / <a href="#/m/' + m.id + '">Module ' + m.n + ': ' + esc(m.short) + '</a> / Lesson ' + n + ' of ' + m.lessons.length + '</div>' +
      '<h1>' + esc(l.title) + '</h1><div class="minutes">' + l.minutes + ' min read</div>' + l.body.map(block).join('') +
      '<div class="pager"><a class="btn ghost" href="' + prev + '">← ' + (n > 1 ? 'Previous' : 'Module') + '</a>' +
      '<button class="btn' + (done ? '' : ' pri') + '" data-act="complete" data-id="' + m.id + '" data-n="' + n + '">' + (done ? 'Completed ✓ (tap to undo)' : (n < m.lessons.length ? 'Mark complete and continue' : 'Mark complete')) + '</button></div></article>';
    setView(html, l.title);
  }

  /* ---------- quiz engine ---------- */
  var Q = null;
  function startQuiz(opts) {
    // opts: {title, list:[{mod,q}], feedback, minutes, kind, modId}
    var list = opts.list.map(function (e) {
      var order = shuffle([0, 1, 2, 3]);
      return { mod: e.mod, q: e.q, order: order, pick: null };
    });
    Q = { title: opts.title, items: list, i: 0, feedback: opts.feedback, kind: opts.kind, modId: opts.modId, start: Date.now(), end: opts.minutes ? Date.now() + opts.minutes * 60000 : 0, done: false };
    href('#/quiz');
  }
  function moduleQuiz(id) {
    var m = BY[id];
    startQuiz({ title: m.title + ' quiz', list: shuffle(m.quiz).map(function (q) { return { mod: m, q: q }; }), feedback: true, kind: 'module', modId: id });
  }
  function mistakesQuiz() {
    var list = [];
    Object.keys(S.wrong).forEach(function (id) { if (QBY[id]) list.push(QBY[id]); });
    if (!list.length) { toast('No saved mistakes. Nice.'); return; }
    startQuiz({ title: 'Review mistakes', list: shuffle(list).slice(0, 30), feedback: true, kind: 'mistakes' });
  }
  function viewQuiz() {
    markNav(Q && Q.kind === 'exam' ? 'exam' : 'home');
    if (!Q) return href('#/');
    if (Q.done) return viewResults();
    var it = Q.items[Q.i], total = Q.items.length;
    var answered = it.pick !== null;
    var locked = Q.feedback && answered;
    var html = '<div class="narrow"><div class="crumb">' + esc(Q.title) + '</div>' +
      '<div class="qbar"><span>Question ' + (Q.i + 1) + ' of ' + total + '</span>' + (Q.end ? '<span id="clock" aria-label="Time left"></span>' : '<span>' + esc(it.mod.short) + '</span>') + '</div>' + bar(pct(Q.i + (answered ? 1 : 0), total)) +
      '<h1 class="qtext" style="font-size:1.15rem">' + fmt(it.q.q) + '</h1><div class="opts" role="group" aria-label="Answer options">' +
      it.order.map(function (oi, pos) {
        var cls = 'opt';
        if (locked) { if (oi === it.q.a) cls += ' ok'; else if (it.pick === oi) cls += ' bad'; }
        else if (it.pick === oi) cls += ' sel';
        return '<button class="' + cls + '" data-act="pick" data-oi="' + oi + '"' + (locked ? ' disabled' : '') + (it.pick === oi ? ' aria-pressed="true"' : '') + '><span class="l">' + 'ABCD'.charAt(pos) + '</span><span>' + fmt(it.q.opts[oi]) + '</span></button>';
      }).join('') + '</div>';
    if (locked) {
      var right = it.pick === it.q.a;
      html += '<div class="why" role="status"><b>' + (right ? 'Correct.' : 'Not quite.') + '</b>' + fmt(it.q.why) + '</div>';
    }
    html += '<div class="row sp">' + (!Q.feedback && Q.i > 0 ? '<button class="btn ghost" data-act="back">← Back</button>' : '<button class="btn ghost" data-act="quit">Quit</button>') +
      '<button class="btn pri" data-act="next"' + (answered ? '' : ' disabled') + '>' + (Q.i === total - 1 ? 'Finish' : 'Next →') + '</button></div></div>';
    setView(html, Q.title, true);
    if (Q.end) tick();
    if (Q._pos !== Q.i) { Q._pos = Q.i; window.scrollTo(0, 0); }
  }
  function tick() {
    if (clock) clearInterval(clock);
    var upd = function () {
      var el = document.getElementById('clock');
      var left = Math.max(0, Q.end - Date.now());
      if (el) el.textContent = Math.floor(left / 60000) + ':' + ('0' + Math.floor((left % 60000) / 1000)).slice(-2) + ' left';
      if (left <= 0 && Q && !Q.done) { clearInterval(clock); clock = null; finishQuiz(); }
    };
    upd(); clock = setInterval(upd, 1000);
  }
  function finishQuiz() {
    if (!Q || Q.done) return;
    Q.done = true;
    if (clock) { clearInterval(clock); clock = null; }
    var right = 0, byMod = {};
    Q.items.forEach(function (it) {
      var ok = it.pick === it.q.a;
      if (it.pick !== null) { if (ok) delete S.wrong[it.q.id]; else S.wrong[it.q.id] = 1; }
      else if (Q.kind === 'exam') { S.wrong[it.q.id] = 1; }
      if (ok) right++;
      var b = byMod[it.mod.id] || (byMod[it.mod.id] = { r: 0, n: 0 }); b.n++; if (ok) b.r++;
    });
    Q.right = right; Q.byMod = byMod;
    var p = pct(right, Q.items.length);
    if (Q.kind === 'module') {
      var r = S.quiz[Q.modId] || { best: 0, last: 0, attempts: 0 };
      r.best = Math.max(r.best, p); r.last = p; r.attempts++; S.quiz[Q.modId] = r;
    } else if (Q.kind === 'exam') {
      S.exams.push({ t: Date.now(), r: right, n: Q.items.length, p: p, min: Math.round((Date.now() - Q.start) / 60000) });
      S.exams = S.exams.slice(-50);
    }
    save();
    viewResults();
  }
  function viewResults() {
    var total = Q.items.length, p = pct(Q.right, total);
    var verdict = p >= 80 ? 'Strong result.' : p >= 60 ? 'Passing, with gaps to close.' : 'Needs more study. Review the lessons for the missed topics.';
    var html = '<div class="narrow"><div class="crumb">' + esc(Q.title) + '</div><h1>Results</h1><div class="card"><div class="score">' + p + '%</div><p class="lead" style="margin:6px 0 10px">' + Q.right + ' of ' + total + ' correct. ' + verdict + '</p>';
    var mk = Object.keys(Q.byMod);
    if (mk.length > 1) {
      html += '<h3>By module</h3>' + mk.map(function (id) { var b = Q.byMod[id]; return '<div class="row sp small"><span>' + esc(BY[id].short) + '</span><span>' + b.r + '/' + b.n + '</span></div>' + bar(pct(b.r, b.n), pct(b.r, b.n) >= 70 ? 'g' : ''); }).join('');
    }
    html += '</div><div class="row" style="margin:14px 0">' +
      (Q.kind === 'module' ? '<button class="btn pri" data-act="quiz" data-id="' + Q.modId + '">Try again</button><a class="btn" href="#/m/' + Q.modId + '">Back to module</a>' : '<a class="btn pri" href="#/exam">New exam</a><a class="btn" href="#/">Home</a>') +
      '<button class="btn" data-act="mistakes">Review mistakes</button></div><h2>Review</h2>';
    Q.items.forEach(function (it, i) {
      var ok = it.pick === it.q.a;
      html += '<div class="rev ' + (ok ? 'ok' : 'bad') + '"><p><strong>' + (i + 1) + '. ' + fmt(it.q.q) + '</strong></p><p class="small">' +
        (it.pick === null ? 'Not answered.' : 'Your answer: ' + fmt(it.q.opts[it.pick])) + (ok ? '' : '<br>Correct: ' + fmt(it.q.opts[it.q.a])) + '</p><p class="small muted">' + fmt(it.q.why) + '</p></div>';
    });
    setView(html + '</div>', 'Results');
  }

  /* ---------- exam setup ---------- */
  function viewExam() {
    markNav('exam');
    var all = 0; MODS.forEach(function (m) { all += m.quiz.length; });
    var past = S.exams.slice(-5).reverse();
    var html = '<div class="narrow"><h1>Practice exam</h1><p class="lead">Mixed questions from the modules you choose. No feedback until the end, like the real thing. ' + all + ' questions in the bank.</p>' +
      '<div class="card"><div class="field"><label for="ex-n">Number of questions</label><select id="ex-n"><option>20</option><option selected>40</option><option>60</option></select></div>' +
      '<div class="field"><label for="ex-t">Timer</label><select id="ex-t"><option value="0">No timer</option><option value="1" selected>Timed (1 minute per question)</option></select></div>' +
      '<div class="field"><label for="ex-g">Scope</label><select id="ex-g"><option value="all">All modules</option>' + GROUPS.map(function (g) { return MODS.some(function (m) { return m.group === g; }) ? '<option value="' + esc(g) + '">' + esc(g) + '</option>' : ''; }).join('') + '</select></div>' +
      '<button class="btn pri" data-act="exam">Start exam</button></div>' +
      '<h2>Revision</h2><div class="row"><button class="btn" data-act="mistakes">Review my mistakes (' + Object.keys(S.wrong).filter(function (k) { return QBY[k]; }).length + ')</button></div>';
    if (past.length) html += '<h2>Recent exams</h2>' + past.map(function (e) { return '<div class="row sp small card" style="margin-bottom:8px"><span>' + new Date(e.t).toLocaleDateString() + '</span><span>' + e.r + '/' + e.n + '</span><strong>' + e.p + '%</strong></div>'; }).join('');
    setView(html + '</div>', 'Practice exam');
  }
  function startExam() {
    var n = parseInt(document.getElementById('ex-n').value, 10), timed = document.getElementById('ex-t').value === '1', g = document.getElementById('ex-g').value;
    var pool = [];
    MODS.forEach(function (m) { if (g === 'all' || m.group === g) m.quiz.forEach(function (q) { pool.push({ mod: m, q: q }); }); });
    if (!pool.length) { toast('No questions in that scope.'); return; }
    var list = shuffle(pool).slice(0, n);
    startQuiz({ title: 'Practice exam', list: list, feedback: false, kind: 'exam', minutes: timed ? list.length : 0 });
  }

  /* ---------- flashcards ---------- */
  var C = null;
  function ckey(m, i) { return m.id + ':' + i; }
  function cardList(mods, mode) {
    var now = Date.now(), out = [];
    mods.forEach(function (m) {
      m.cards.forEach(function (c, i) {
        var r = S.cards[ckey(m, i)];
        if (mode === 'all' || !r || r.due <= now) out.push({ key: ckey(m, i), mod: m, c: c, isNew: !r });
      });
    });
    return out;
  }
  function cardCounts(mods) {
    var now = Date.now(), n = 0, due = 0, tot = 0, mastered = 0;
    mods.forEach(function (m) { m.cards.forEach(function (c, i) { tot++; var r = S.cards[ckey(m, i)]; if (!r) n++; else if (r.due <= now) due++; if (r && r.box >= 4) mastered++; }); });
    return { fresh: n, due: due, total: tot, mastered: mastered };
  }
  function viewCards(mods, title, back) {
    markNav(back ? 'home' : 'cards');
    var c = cardCounts(mods);
    var html = '<div class="narrow">' + (back ? '<div class="crumb"><a href="#/">Modules</a> / <a href="#/m/' + mods[0].id + '">Module ' + mods[0].n + '</a></div>' : '') + '<h1>' + esc(title) + '</h1>' +
      '<div class="card"><div class="stats"><div class="stat"><b>' + c.fresh + '</b><span>new</span></div><div class="stat"><b>' + c.due + '</b><span>due</span></div><div class="stat"><b>' + c.mastered + '/' + c.total + '</b><span>mastered</span></div></div>' + bar(pct(c.mastered, c.total), 'g') +
      '<p class="muted small" style="margin:12px 0">Rate each card Again, Good or Easy. Cards you know return later; cards you miss come back in this session. Spaced review: 1, 3, 7 and 16 days.</p>' +
      '<div class="row"><button class="btn pri" data-act="study" data-scope="' + (back ? mods[0].id : 'all') + '" data-mode="due"' + (c.fresh + c.due ? '' : ' disabled') + '>Study ' + (c.fresh + c.due) + ' due/new</button><button class="btn" data-act="study" data-scope="' + (back ? mods[0].id : 'all') + '" data-mode="all">Study all ' + c.total + '</button></div></div>';
    if (!back) {
      html += '<h2>By module</h2><div class="grid">' + MODS.map(function (m) { var k = cardCounts([m]); return '<a class="card hit" href="#/m/' + m.id + '/cards"><h3>' + m.n + '. ' + esc(m.short) + '</h3><p>' + (k.fresh + k.due) + ' due or new · ' + k.mastered + '/' + k.total + ' mastered</p></a>'; }).join('') + '</div>';
    }
    setView(html + '</div>', title);
  }
  function startStudy(scope, mode) {
    var mods = scope === 'all' ? MODS : [BY[scope]];
    var list = shuffle(cardList(mods, mode));
    if (!list.length) { toast('Nothing due. Come back later.'); return; }
    C = { list: list, i: 0, flipped: false, total: list.length, again: 0, back: scope === 'all' ? '#/cards' : '#/m/' + scope + '/cards' };
    href('#/study');
  }
  function viewStudy() {
    markNav('cards');
    if (!C) return href('#/cards');
    if (C.i >= C.list.length) {
      setView('<div class="narrow"><h1>Session complete</h1><div class="card"><p class="lead">' + C.total + ' cards reviewed, ' + C.again + ' marked Again.</p><div class="row"><a class="btn pri" href="' + C.back + '">Done</a></div></div></div>', 'Cards done');
      return;
    }
    var it = C.list[C.i];
    var html = '<div class="narrow"><div class="qbar"><span>' + esc(it.mod.short) + (it.isNew ? ' · new' : '') + '</span><span>' + (C.i + 1) + ' / ' + C.list.length + '</span></div>' + bar(pct(C.i, C.list.length)) +
      '<div style="margin-top:12px"><button class="flip' + (C.flipped ? ' back' : '') + '" data-act="flip" aria-label="' + (C.flipped ? 'Answer. Activate to hide.' : 'Question. Activate to show the answer.') + '"><span><small>' + (C.flipped ? 'Answer' : 'Question') + '</small>' + fmt(C.flipped ? it.c.b : it.c.f) + '</span></button></div>';
    if (C.flipped) html += '<div class="rate"><button class="btn again" data-act="rate" data-r="0">Again (1)</button><button class="btn good" data-act="rate" data-r="1">Good (2)</button><button class="btn easy" data-act="rate" data-r="2">Easy (3)</button></div>';
    else html += '<p class="muted small" style="text-align:center;margin-top:12px">Tap the card or press Space to reveal.</p>';
    html += '<div class="row" style="margin-top:14px"><a class="btn ghost" href="' + C.back + '">End session</a></div></div>';
    setView(html, 'Flashcards', true);
    if (C._pos !== C.i) { C._pos = C.i; window.scrollTo(0, 0); }
  }
  function rate(r) {
    var it = C.list[C.i], rec = S.cards[it.key] || { box: 0, due: 0 };
    if (r === 0) { rec.box = 1; rec.due = Date.now(); C.again++; C.list.push({ key: it.key, mod: it.mod, c: it.c, isNew: false }); }
    else { rec.box = Math.min(5, Math.max(rec.box, 1) + (r === 2 ? 2 : 1)); rec.due = Date.now() + BOX_DAYS[rec.box] * DAY; }
    S.cards[it.key] = rec; save();
    C.i++; C.flipped = false; viewStudy();
  }

  /* ---------- glossary, formulas, search, progress ---------- */
  function viewGlossary() {
    markNav('glossary');
    var all = [];
    MODS.forEach(function (m) { m.terms.forEach(function (t) { all.push({ t: t.t, d: t.d, m: m }); }); });
    all.sort(function (a, b) { return a.t.toLowerCase().localeCompare(b.t.toLowerCase()); });
    var html = '<h1>Glossary</h1><p class="lead">' + all.length + ' terms.</p><div class="field"><label for="gf">Filter</label><input id="gf" type="search" autocomplete="off" placeholder="Type to filter terms"></div><div id="gl">' + glossHtml(all, '') + '</div>';
    setView(html, 'Glossary');
    document.getElementById('gf').addEventListener('input', function (e) { document.getElementById('gl').innerHTML = glossHtml(all, e.target.value); });
  }
  function glossHtml(all, f) {
    f = f.trim().toLowerCase();
    var list = f ? all.filter(function (x) { return (x.t + ' ' + x.d).toLowerCase().indexOf(f) >= 0; }) : all;
    if (!list.length) return '<p class="empty">No matching terms.</p>';
    var out = '', cur = '';
    list.forEach(function (x) {
      var L = x.t.charAt(0).toUpperCase();
      if (L !== cur) { if (cur) out += '</dl>'; cur = L; out += '<div class="alpha" aria-hidden="true">' + esc(L) + '</div><dl class="terms">'; }
      out += '<dt>' + esc(x.t) + '<a class="m" href="#/m/' + x.m.id + '/terms">Module ' + x.m.n + '</a></dt><dd>' + esc(x.d) + '</dd>';
    });
    return out + '</dl>';
  }
  function viewAllFormulas() {
    markNav('formulas');
    var all = [];
    MODS.forEach(function (m) { (m.formulas || []).forEach(function (f) { all.push({ n: f.n, f: f.f, v: f.v, m: m }); }); });
    var html = '<h1>Formula sheet</h1><p class="lead">' + all.length + ' formulas from all modules.</p><div class="field"><label for="ff">Filter</label><input id="ff" type="search" autocomplete="off" placeholder="Type to filter formulas"></div><div id="fl">' + fcards(all) + '</div>';
    setView(html, 'Formulas');
    document.getElementById('ff').addEventListener('input', function (e) {
      var q = e.target.value.trim().toLowerCase();
      var l = q ? all.filter(function (x) { return (x.n + ' ' + x.f + ' ' + x.v).toLowerCase().indexOf(q) >= 0; }) : all;
      document.getElementById('fl').innerHTML = l.length ? fcards(l) : '<p class="empty">No matching formulas.</p>';
    });
  }

  var IDX = null;
  function strings(b) {
    switch (b.t) {
      case 'h': case 'p': case 'note': case 'warn': case 'tip': case 'ghana': return [b.x];
      case 'ul': case 'ol': case 'key': return b.items;
      case 'table': return b.head.concat([].concat.apply([], b.rows));
      case 'formula': return [b.x, b.where || ''];
      case 'worked': return [b.title, b.problem, b.answer].concat(b.steps);
      case 'steps': return [b.title || ''].concat(b.items);
    }
    return [];
  }
  function buildIndex() {
    IDX = [];
    MODS.forEach(function (m) {
      m.lessons.forEach(function (l, li) {
        var txt = [l.title];
        l.body.forEach(function (b) { txt = txt.concat(strings(b)); });
        IDX.push({ k: 'Lesson', title: l.title, sub: 'Module ' + m.n + ': ' + m.short, href: '#/m/' + m.id + '/l/' + (li + 1), text: txt.join(' ').replace(/[*`]/g, '') });
      });
      m.terms.forEach(function (t) { IDX.push({ k: 'Term', title: t.t, sub: 'Module ' + m.n, href: '#/m/' + m.id + '/terms', text: t.t + '. ' + t.d }); });
      (m.formulas || []).forEach(function (f) { IDX.push({ k: 'Formula', title: f.n, sub: 'Module ' + m.n, href: '#/m/' + m.id + '/formulas', text: f.n + ' ' + f.f + ' ' + f.v }); });
    });
  }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function viewSearch(q) {
    markNav('');
    if (!IDX) buildIndex();
    var toks = q.toLowerCase().split(/\s+/).filter(Boolean);
    var res = [];
    if (toks.length) IDX.forEach(function (e) {
      var low = e.text.toLowerCase(), tl = e.title.toLowerCase(), s = 0, ok = true;
      toks.forEach(function (t) {
        var at = low.indexOf(t);
        if (at < 0) { ok = false; return; }
        s += 1 + (tl.indexOf(t) >= 0 ? 6 : 0);
        var c = 0, p = at; while (p >= 0 && c < 5) { c++; p = low.indexOf(t, p + t.length); } s += c * 0.3;
      });
      if (ok) res.push({ e: e, s: s + (e.k === 'Term' ? 1 : 0) });
    });
    res.sort(function (a, b) { return b.s - a.s; });
    var html = '<div class="narrow"><h1>Search</h1><p class="lead">' + (toks.length ? res.length + ' result' + (res.length === 1 ? '' : 's') + ' for “' + esc(q) + '”' : 'Type a word in the search box.') + '</p>';
    res.slice(0, 40).forEach(function (r) {
      var e = r.e, low = e.text.toLowerCase(), at = low.indexOf(toks[0]);
      var a = Math.max(0, at - 60), snip = (a > 0 ? '…' : '') + e.text.slice(a, a + 170) + (a + 170 < e.text.length ? '…' : '');
      var h = esc(snip);
      toks.forEach(function (t) { h = h.replace(new RegExp('(' + escRe(esc(t)) + ')', 'gi'), '<mark>$1</mark>'); });
      html += '<a class="card hit" href="' + e.href + '"><span class="tag">' + e.k + '</span> <span class="muted small">' + esc(e.sub) + '</span><h3>' + esc(e.title) + '</h3><p>' + h + '</p></a>';
    });
    if (toks.length && !res.length) html += '<p class="empty">Nothing found. Try a shorter or different word.</p>';
    setView(html + '</div>', 'Search');
  }

  var installEvt = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); installEvt = e; });
  function viewProgress() {
    markNav('progress');
    var t = totals();
    var html = '<div class="narrow"><h1>Progress</h1><div class="card"><div class="stats"><div class="stat"><b>' + pct(t.done, t.lessons) + '%</b><span>lessons done</span></div><div class="stat"><b>' + Math.round(t.minsDone / 6) / 10 + ' h</b><span>of ' + Math.round(t.mins / 6) / 10 + ' h</span></div><div class="stat"><b>' + (t.quizDone ? t.quizAvg + '%' : '–') + '</b><span>avg quiz best</span></div></div></div><h2>By module</h2>';
    MODS.forEach(function (m) {
      var d = lessonsDone(m), q = S.quiz[m.id], c = cardCounts([m]);
      html += '<a class="card hit" href="#/m/' + m.id + '"><div class="row sp"><h3>' + m.n + '. ' + esc(m.short) + '</h3><span class="muted small">' + d + '/' + m.lessons.length + ' lessons</span></div>' + bar(pct(d, m.lessons.length), d === m.lessons.length ? 'g' : '') +
        '<p>Quiz ' + (q ? 'best ' + q.best + '% (' + q.attempts + ' tries)' : 'not taken') + ' · Cards ' + c.mastered + '/' + c.total + ' mastered</p></a>';
    });
    html += '<h2>Your data</h2><p class="muted small">Progress is stored only on this device. Export a backup before clearing browser data or changing phone.</p><div class="row">' +
      '<button class="btn" data-act="export">Export backup</button><label class="btn" for="imp" style="cursor:pointer">Import backup</label><input id="imp" type="file" accept="application/json,.json" class="sr">' +
      (installEvt ? '<button class="btn pri" data-act="install">Install app</button>' : '') + '<button class="btn" data-act="reset">Reset progress</button></div></div>';
    setView(html, 'Progress');
    document.getElementById('imp').addEventListener('change', importFile);
  }
  function exportData() {
    try {
      var blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'mechatronics-progress.json';
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      toast('Backup downloaded');
    } catch (e) { toast('Export not available here'); }
  }
  function importFile(ev) {
    var f = ev.target.files && ev.target.files[0]; if (!f) return;
    var rd = new FileReader();
    rd.onload = function () {
      try { var o = JSON.parse(rd.result); if (!o || typeof o !== 'object' || o.v !== 1) throw new Error('bad'); S = merge(blank(), o); save(); applyTheme(); toast('Backup restored'); viewProgress(); }
      catch (e) { toast('That file is not a valid backup'); }
    };
    rd.readAsText(f);
  }

  function notFound() { markNav(''); setView('<div class="narrow"><h1>Page not found</h1><p><a class="btn pri" href="#/">Back to modules</a></p></div>', 'Not found'); }

  /* ---------- router ---------- */
  function route() {
    var h = location.hash.replace(/^#\/?/, '');
    var p = h.split('/').map(function (x) { try { return decodeURIComponent(x); } catch (e) { return x; } });
    if (p[0] !== 'quiz' && p[0] !== 'study' && clock) { clearInterval(clock); clock = null; }
    if (!MODS.length) return viewHome();
    switch (p[0]) {
      case '': return viewHome();
      case 'm':
        var m = BY[p[1]]; if (!m) return notFound();
        if (!p[2]) return viewModule(m);
        if (p[2] === 'l') return viewLesson(m, parseInt(p[3], 10) || 1);
        if (p[2] === 'terms') return viewTerms(m);
        if (p[2] === 'formulas') return viewFormulas(m);
        if (p[2] === 'cards') return viewCards([m], m.short + ' flashcards', true);
        return notFound();
      case 'quiz': return viewQuiz();
      case 'exam': return viewExam();
      case 'cards': return viewCards(MODS, 'Flashcards', false);
      case 'study': return viewStudy();
      case 'glossary': return viewGlossary();
      case 'formulas': return viewAllFormulas();
      case 'search': return viewSearch(p.slice(1).join('/'));
      case 'progress': return viewProgress();
    }
    return notFound();
  }
  window.addEventListener('hashchange', route);

  /* ---------- events ---------- */
  app.addEventListener('click', function (e) {
    var b = e.target.closest('[data-act]'); if (!b || b.disabled) return;
    var act = b.getAttribute('data-act');
    switch (act) {
      case 'complete':
        var m = BY[b.getAttribute('data-id')], n = parseInt(b.getAttribute('data-n'), 10), l = m.lessons[n - 1];
        if (S.lessons[l.id]) { delete S.lessons[l.id]; save(); viewLesson(m, n); toast('Marked as not complete'); return; }
        S.lessons[l.id] = 1; save();
        if (n < m.lessons.length) href('#/m/' + m.id + '/l/' + (n + 1));
        else { toast('Module lessons complete. Try the quiz.'); href('#/m/' + m.id); }
        return;
      case 'quiz': return moduleQuiz(b.getAttribute('data-id'));
      case 'mistakes': return mistakesQuiz();
      case 'exam': return startExam();
      case 'pick':
        var it = Q.items[Q.i]; if (Q.feedback && it.pick !== null) return;
        it.pick = parseInt(b.getAttribute('data-oi'), 10); return viewQuiz();
      case 'next':
        if (Q.i === Q.items.length - 1) return finishQuiz();
        Q.i++; return viewQuiz();
      case 'back': if (Q.i > 0) { Q.i--; viewQuiz(); } return;
      case 'quit': if (Q.items.some(function (x) { return x.pick !== null; })) finishQuiz(); else { Q = null; history.back(); } return;
      case 'study': return startStudy(b.getAttribute('data-scope'), b.getAttribute('data-mode'));
      case 'flip': C.flipped = !C.flipped; return viewStudy();
      case 'rate': return rate(parseInt(b.getAttribute('data-r'), 10));
      case 'export': return exportData();
      case 'install': if (installEvt) { installEvt.prompt(); installEvt = null; } return;
      case 'reset':
        if (window.confirm('Reset all lessons, quiz scores and flashcard progress on this device?')) { S = blank(); save(); applyTheme(); toast('Progress reset'); viewProgress(); }
        return;
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var h = location.hash;
    if (h === '#/quiz' && Q && !Q.done) {
      var it = Q.items[Q.i];
      if (/^[1-4]$/.test(e.key)) { var oi = it.order[parseInt(e.key, 10) - 1]; if (!(Q.feedback && it.pick !== null)) { it.pick = oi; viewQuiz(); } }
      else if (e.key === 'Enter' && it.pick !== null && e.target.tagName !== 'BUTTON') { if (Q.i === Q.items.length - 1) finishQuiz(); else { Q.i++; viewQuiz(); } }
    } else if (h === '#/study' && C && C.i < C.list.length) {
      if (e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); C.flipped = !C.flipped; viewStudy(); }
      else if (C.flipped && /^[1-3]$/.test(e.key)) rate(parseInt(e.key, 10) - 1);
    }
  });
  document.getElementById('srch').addEventListener('submit', function (e) {
    e.preventDefault();
    var q = document.getElementById('q').value.trim();
    if (q) href('#/search/' + encodeURIComponent(q));
  });

  /* ---------- boot ---------- */
  route();
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { /* offline support unavailable */ }); });
  }
})();
