/* Mechatronics study app service worker: offline-first, versioned cache. */
var VERSION = 'mech-v1';
var ASSETS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/app.css",
  "css/diagram.css",
  "js/registry.js",
  "js/app.js",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-32.png",
  "data/m01.js",
  "data/m02.js",
  "data/m03.js",
  "data/m04.js",
  "data/m05.js",
  "data/m06.js",
  "data/m07.js",
  "data/m08.js",
  "data/m09.js",
  "data/m10.js",
  "data/m11.js",
  "data/m12.js",
  "data/m13.js",
  "data/m14.js",
  "data/m15.js",
  "data/m16.js",
  "data/m17.js",
  "data/m18.js",
  "data/m19.js",
  "data/m20.js"
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) {
    return Promise.all(ASSETS.map(function (a) { return c.add(a).catch(function () { /* skip missing */ }); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* stale-while-revalidate for same-origin GET requests; app shell fallback when offline */
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(VERSION).then(function (cache) {
    return cache.match(req, { ignoreSearch: true }).then(function (hit) {
      var net = fetch(req).then(function (res) {
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      }).catch(function () { return hit || (req.mode === 'navigate' ? cache.match('index.html') : undefined); });
      return hit || net;
    });
  }));
});
