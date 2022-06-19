self.addEventListener('install', (e) => { 
   e.waitUntil( 
     caches.open('pwa-tutorial').then((cache) => cache.addAll([
         './',
         './index.html',
         './tables.html',
         './speak.html'
     ])), 
   ); 
 }); 

self.addEventListener('activate', e => {
    e.respondWith('index.html');
});
  
self.addEventListener('fetch', (e) => { 
   console.log(e.request.url); 
   e.respondWith( 
     caches.match(e.request).then((response) => response || fetch(e.request)), 
   ); 
 });
