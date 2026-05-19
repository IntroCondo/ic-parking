// IC Parking Service Worker — updated 20260519
// Bump this version to force cache refresh on all devices
const CACHE = 'ic-parking-v20260519';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

// On install: cache assets, skip waiting immediately
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(err => console.log('Cache fail:', err))
  );
  self.skipWaiting(); // activate immediately
});

// On activate: delete ALL old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => {
        console.log('Deleting old cache:', k);
        return caches.delete(k);
      }))
    )
  );
  self.clients.claim(); // take control of all open tabs immediately
});

// Fetch: network first for HTML (always fresh), cache first for assets
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  
  // For the main HTML — always try network first so login state is fresh
  if(url.pathname.endsWith('/') || url.pathname.endsWith('index.html')){
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request)) // fallback to cache if offline
    );
    return;
  }
  
  // For other assets — cache first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;
      return fetch(e.request).then(res => {
        if(!res || res.status !== 200 || res.type === 'opaque') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
