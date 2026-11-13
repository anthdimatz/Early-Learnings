/* Early Learnings offline support for newer devices (older iPads use play.appcache instead).
   Network first, so a new upload shows up straight away; the saved copy is used when offline. */
var CACHE = 'early-learnings-v10';
var FILES = ['play.html', 'play-icon.png', 'icon-192.png', 'icon-512.png', 'manifest.webmanifest', 'guide.html', 'sheets.html', 'privacy.html', 'terms.html', 'docs.css'];
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.map(function (k) { return k !== CACHE ? caches.delete(k) : null; }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(function (res) {
    if (res && res.ok) { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(req, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (hit) { return hit || caches.match('play.html'); });
  }));
});
