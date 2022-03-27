/*self.addEventListener("activate",(e)=>{
    self.clients.claim();
});
self.addEventListener("fetch",async e => {
  const req = e.request;
  const url = new URL(req.url);
  
  if (url.origin === location.origin) {
      e.respondWith(cacheFirst(req))
  }
  else{
      e.respondWith(networkAndCache(req))
  }
  /*event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );///////
});

async function cacheFirst(req) {
    const cache = await caches.open(staticCacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}
async function networkAndCache(req){
    const cache = await caches.open(staticCacheName);
    try{
        const fresh = await fetch(req);
        await cache.put(req,fresh.clone())
        return fresh;
    }catch (e){
        const cached = await cache.match(req);
        return cached;
    }
}*/
const cacheName = 'hitop';
const staticAssets = [
  './index.html',
  './tables.html',
  './speak.html'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  console.log("done");
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.respondWith(cache.match('index.html'));
});

/*self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});
*/

//start

/*self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
});*/

self.addEventListener('fetch', event => {
  event.respondWith(cache.match("index.html"))
});


/*async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
*/




