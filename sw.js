const CACHE = 'mj-sprites-v4';
const CACHE_FILES = [
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CACHE_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  // Pages HTML : toujours depuis le réseau, jamais le cache HTTP
  if (e.request.mode === 'navigate' || e.request.url.match(/\.html(\?|$)/)) {
    e.respondWith(fetch(e.request, { cache: 'no-store' }));
    return;
  }

  // Sprites + icônes : cache-first
  if (e.request.url.includes('/Sprite/') || e.request.url.includes('/icons/')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        });
      })
    );
    return;
  }
  // Tout le reste : réseau direct
});
