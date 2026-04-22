const CACHE = 'krystallon-1776893433937';
const SHELL = ['./index.html', './manifest.json', './logo.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(c => c || fetch(e.request)).catch(() => caches.match('./index.html'))); });
self.addEventListener('message', e => { if(e.data && e.data.action === 'skipWaiting') self.skipWaiting(); });