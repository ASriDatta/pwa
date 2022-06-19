const cacheName = 'hitop';
const assets = [
  './index.html',
  './tables.html',
  './speak.html'
];

self.addEventListener('install', (e) => { 
    e.waitUntil( 
     caches.open(cacheName).then((cache) => cache.addAll(assets)), 
   ); 
 });

self.addEventListener('activate', e => {
    e.respondWith(cache.match('index.html'));
});



self.addEventListener('fetch', event => {
  event.respondWith(cache.match(event.request.url))
});
