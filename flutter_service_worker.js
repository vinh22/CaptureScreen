'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "e10f7b6d5f22b8edf374426713372cc7",
"index.html": "3c1df01e9162772b2abb203bd1cd49f0",
"/": "4d8e9af68c6eabf4f28ec0c09d507cdf",
"main.dart.js": "6154ca0b020649c29f8bd6d6f3f5e75a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/shaders/ink_sparkle.frag": "824196ad4fc54759c0eb4a7a1d18caef",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "fb9e9695eff13a72ecc9316559bef51f",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"work_tp/toplinksale/www/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"work_tp/toplinksale/www/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"work_tp/toplinksale/www/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"work_tp/toplinksale/www/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"work_tp/toplinksale/www/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"work_tp/toplinksale/www/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"work_tp/toplinksale/www/manifest.json": "1d21a390ac8efb04bb2c350761467514",
"work_tp/toplinksale/www/index.html": "cd32e8cbf9552f3e7cd576d80310e568",
"work_tp/toplinksale/www/main.dart.js": "97a4a45ae314e21cb4c9579fb738d3b7",
"work_tp/toplinksale/www/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"work_tp/toplinksale/www/assets/lib/assets/images/logo.png": "7efa7e87b42f3e4c6311753110758493",
"work_tp/toplinksale/www/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"work_tp/toplinksale/www/assets/shaders/ink_sparkle.frag": "824196ad4fc54759c0eb4a7a1d18caef",
"work_tp/toplinksale/www/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"work_tp/toplinksale/www/assets/NOTICES": "243c460924186536f983ca83ca68eff8",
"work_tp/toplinksale/www/assets/AssetManifest.json": "400e5eec8a8d67f0d1a2e899eec42e55",
"work_tp/toplinksale/www/version.json": "406a8a67fdd4699297c589c8b72e6a0e",
"work_tp/toplinksale/www/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"work_tp/toplinksale/www/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"work_tp/toplinksale/www/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"work_tp/toplinksale/www/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"work_tp/toplinksale/doc/api/index.json": "a507d26d309e56ef3bcebfd34e143f0e",
"work_tp/toplinksale/doc/api/static-assets/highlight.pack.js": "0b702d40cec1ad51762c48309da6eeab",
"work_tp/toplinksale/doc/api/static-assets/favicon.png": "35ac27af3a3d8917ff1c7d3bf7e57bdd",
"work_tp/toplinksale/doc/api/static-assets/styles.css": "1503446642b89152ab8c3453270460d2",
"work_tp/toplinksale/doc/api/static-assets/docs.dart.js.map": "2bc611e3161edfa0947a3817b73287fd",
"work_tp/toplinksale/doc/api/static-assets/github.css": "bf6c14925e66edb1526b6c9489b3c042",
"work_tp/toplinksale/doc/api/static-assets/readme.md": "c0ef60013e398d94367ca881c559a96a",
"work_tp/toplinksale/doc/api/static-assets/docs.dart.js": "0683e4214a21cfd7d7c35310fdda96aa",
"work_tp/toplinksale/doc/api/static-assets/play_button.svg": "bcb14c36edf9d4c36ecff6f4b16d0f45",
"work_tp/toplinksale/doc/api/__404error.html": "f66cf92ba6fdc0fb565644db5856bd0e",
"work_tp/toplinksale/doc/api/index.html": "4d8e9af68c6eabf4f28ec0c09d507cdf",
"work_tp/toplinksale/doc/api/categories.json": "58e0494c51d30eb3494f7c9198986bb9",
"work_tp/toplinksale/doc/api/main/MyApp-class.html": "e4e4fb8fbd4d904cd2db7c7fcc93603b",
"work_tp/toplinksale/doc/api/main/MyApp/MyApp.html": "82de814931ebd6b3e9b8b3709102975a",
"work_tp/toplinksale/doc/api/main/MyApp/build.html": "a515e541160b2193d1cccff2d4fc612e",
"work_tp/toplinksale/doc/api/main/MyHomePage-class.html": "e41ff4380b365ac22d0ae7c043b9bf17",
"work_tp/toplinksale/doc/api/main/main.html": "0c1410802f3bcf446e9ba94e74a3e9de",
"work_tp/toplinksale/doc/api/main/main-library.html": "fcf31f331968f382fbf0b9ab1b719345",
"work_tp/toplinksale/doc/api/main/MyHomePage/createState.html": "5c6f15c9f67268e9479b168fd89244e3",
"work_tp/toplinksale/doc/api/main/MyHomePage/MyHomePage.html": "cecc2dd7321d3917c975fbe9d20655a9",
"work_tp/toplinksale/doc/api/main/MyHomePage/title.html": "5cac123479f95c7275ab37d742d53d48",
"work_tp/mts/bank_callback.html": "8b1551cc220e9a3ba74c442432f57d7e",
"work_tp/mts/captchav3.html": "32f789047e53f9437a3b35cd13c372ac",
"work_tp/mts/chat_bot.html": "ab1e4d8332fb06b3910957f92c9dc209",
"work_tp/mts/mastercard_payment.html": "2ba7107bf2e573dacbe07f3b9361c50e",
"work_tp/mts/captcha.html": "690b93cc380397b72b2a1163c4154e6c",
"version.json": "584e0b2fb16ae04941658488cfdc8dab",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
