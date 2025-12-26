/* Coherence.25-26 Service Worker
   - Precache core shell
   - Runtime cache for audio + assets
   - On-demand "Offline Pack" caching via postMessage
*/
const VERSION = "coherence-v1";
const CORE_CACHE = `${VERSION}-core`;
const RUNTIME_CACHE = `${VERSION}-runtime`;

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./pwa.js",
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
  "./icons/icon-192x192-maskable.png",
  "./icons/icon-512x512-maskable.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CORE_CACHE);
    await cache.addAll(CORE_ASSETS);
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => {
      if (k.startsWith("coherence-") && ![CORE_CACHE, RUNTIME_CACHE].includes(k)) {
        return caches.delete(k);
      }
    }));
    self.clients.claim();
  })());
});

async function cacheFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;

  const resp = await fetch(request);
  if (resp && resp.ok) cache.put(request, resp.clone());
  return resp;
}

async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  try {
    const resp = await fetch(request);
    if (resp && resp.ok) cache.put(request, resp.clone());
    return resp;
  } catch (e) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw e;
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (url.pathname.includes("/audio/") || url.pathname.endsWith(".mp3") || url.pathname.endsWith(".wav") || url.pathname.endsWith(".m4a")) {
    event.respondWith(cacheFirst(req));
    return;
  }

  if (req.headers.get("accept")?.includes("text/html")) {
    event.respondWith(networkFirst(req));
    return;
  }

  event.respondWith(cacheFirst(req));
});

async function cacheUrls(urls) {
  const cache = await caches.open(RUNTIME_CACHE);
  const results = { ok: 0, fail: 0 };
  for (const u of urls) {
    try {
      const req = new Request(u, { cache: "reload" });
      const resp = await fetch(req);
      if (resp && resp.ok) {
        await cache.put(req, resp.clone());
        results.ok++;
      } else {
        results.fail++;
      }
    } catch (e) {
      results.fail++;
    }
  }
  return results;
}

self.addEventListener("message", (event) => {
  const msg = event.data || {};
  if (msg.type === "CACHE_URLS" && Array.isArray(msg.urls)) {
    event.waitUntil((async () => {
      const results = await cacheUrls(msg.urls);
      event.source?.postMessage({ type: "CACHE_URLS_RESULT", results });
    })());
  }

  if (msg.type === "CLEAR_OFFLINE") {
    event.waitUntil((async () => {
      await caches.delete(RUNTIME_CACHE);
      event.source?.postMessage({ type: "CLEAR_OFFLINE_RESULT", ok: true });
    })());
  }
});
