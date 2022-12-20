'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/256.png": "c9331de75ddf349c4d44ca99c9d423f0",
"icons/32.png": "185598c0e1e6105e6cec817d3838f26e",
"icons/29.png": "3ca6d2115b7ad23b755a67fe4dea9397",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/88.png": "fe595c8f7555f25e1fe71831b872de0a",
"icons/128.png": "dcb7988dffe8401813d16dcc261c1af0",
"icons/48.png": "0698a5ebc8f5ec50e0dc8cbf80a67a31",
"icons/60.png": "3af4ea978b7bfa0434c3550536308e26",
"icons/102.png": "ddff2a8192b87fec2257187d7bf22db4",
"icons/58.png": "87e7ec397c63a8e303fadaef1d21a2c0",
"icons/72.png": "3c8b02e801a95de291ee6c3abc3e99da",
"icons/172.png": "93df28d18095eab7c1ce8b2bf774b36c",
"icons/114.png": "5cdfee0ab21c5feda1cfa75c742f8311",
"icons/76.png": "eeb7560b2a070b976d9329fb86e196d0",
"icons/87.png": "9a91b057fb22d6b4098ab7393739d4c6",
"icons/64.png": "0519caeea15c878ae6541d09380a06a8",
"icons/120.png": "7075c003cfc606d266ef2a0aa876ddd8",
"icons/1024.png": "252e990f28d6e974b9a9061c11aec950",
"icons/167.png": "acf96fa49032b9523c97a283058cfb35",
"icons/92.png": "d7930d7dbff6898d78461531b5ec68a6",
"icons/512.png": "03954ed06c3ab5d1b2f097877da16655",
"icons/40.png": "4595a4e107113dd76366267bade2df5e",
"icons/100.png": "1ca7e51293a5bbe50c7f258d2bdb264e",
"icons/16.png": "e973d02ceda7a9973fa17019f9a0f158",
"icons/50.png": "aa0095fb7d7d6a002abaa9ffdaf35927",
"icons/152.png": "1de5cc356ed2b21b356ed6c923c73240",
"icons/196.png": "54f8239fb530c29bd66199a3c7cf8000",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/20.png": "04e9ae92e47f9a8a8b5130ba876bf3f9",
"icons/57.png": "933f7d408b6ed663a61e66519848099c",
"icons/55.png": "6374cd5cb6b801d410f75a66a3620175",
"icons/66.png": "cadcfd1228de596086575dc59a97b3b3",
"icons/144.png": "282b8842c8dade126e2da84676ff18b0",
"icons/80.png": "0040d300b127fb017b5ba70affb30294",
"icons/216.png": "6d30a123e81a541713958c65865e8186",
"icons/180.png": "8e189a407a72c8d0a359d205af21d81d",
"addon/screen-record/scripts/capture.js": "0929a9e8309a4c555909c8c532c1dd15",
"addon/screen-record/index.html": "0e51d370363a47bb2b90763f7ead92d1",
"/": "cd32e8cbf9552f3e7cd576d80310e568",
"addon/html-coverimage/index.html": "28b3e74c2a1dd365a6905064d51230fb",
"addon/html-coverimage/java-script/cover-images.js": "cb9f9e5cb114b2ddb70c65f6662cc932",
"addon/html-coverimage/images/megumin.jpg": "f525ef62e87bf9f9396e3abaf125955d",
"addon/html-coverimage/images/megumin2.png": "d7d08106970dc08772884f848244d118",
"favicon.png": "e973d02ceda7a9973fa17019f9a0f158",
"index.html": "84711d5dc778adb25580da32dc5c10c3",
"work_tp/toplinksale/www/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"work_tp/toplinksale/www/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"work_tp/toplinksale/www/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"work_tp/toplinksale/www/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"work_tp/toplinksale/www/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"work_tp/toplinksale/www/index.html": "cd32e8cbf9552f3e7cd576d80310e568",
"work_tp/toplinksale/www/version.json": "406a8a67fdd4699297c589c8b72e6a0e",
"work_tp/toplinksale/www/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"work_tp/toplinksale/www/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"work_tp/toplinksale/www/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"work_tp/toplinksale/www/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"work_tp/toplinksale/www/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"work_tp/toplinksale/www/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"work_tp/toplinksale/www/assets/AssetManifest.json": "400e5eec8a8d67f0d1a2e899eec42e55",
"work_tp/toplinksale/www/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"work_tp/toplinksale/www/assets/lib/assets/images/logo.png": "7efa7e87b42f3e4c6311753110758493",
"work_tp/toplinksale/www/assets/shaders/ink_sparkle.frag": "824196ad4fc54759c0eb4a7a1d18caef",
"work_tp/toplinksale/www/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"work_tp/toplinksale/www/assets/NOTICES": "243c460924186536f983ca83ca68eff8",
"work_tp/toplinksale/www/main.dart.js": "97a4a45ae314e21cb4c9579fb738d3b7",
"work_tp/toplinksale/www/manifest.json": "1d21a390ac8efb04bb2c350761467514",
"work_tp/toplinksale/map_index.html": "6760658049f7a6344e0c6119c0312309",
"work_tp/mts/bank_callback.html": "8b1551cc220e9a3ba74c442432f57d7e",
"work_tp/mts/captcha.html": "690b93cc380397b72b2a1163c4154e6c",
"work_tp/mts/captchav3.html": "32f789047e53f9437a3b35cd13c372ac",
"work_tp/mts/chat_bot.html": "ab1e4d8332fb06b3910957f92c9dc209",
"work_tp/mts/mastercard_payment.html": "2ba7107bf2e573dacbe07f3b9361c50e",
"firebase-messaging-sw.js": "595fd173b139615a9a84fada5898c75d",
"version.json": "584e0b2fb16ae04941658488cfdc8dab",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"wait.jpeg": "d73c497c2a75b90278013b2a9001f3a0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "3ba5d7b6e71fffcdebc5e83dc41587df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4bf9c21bdd54a21ca371a65664b0e2c7",
"assets/assets/fonts/CascadiaMonoPL.ttf": "ef6ad3147eb7345ef494203a0012679f",
"assets/assets/fonts/CascadiaMonoPLItalic.ttf": "eb50f42ed424ae992b4ab84be47f1465",
"assets/assets/json/configure.json": "efb8eadd38ad8214e6f501b60025de8b",
"assets/assets/images/icon_512.png": "03954ed06c3ab5d1b2f097877da16655",
"assets/assets/images/error.jpeg": "d73c497c2a75b90278013b2a9001f3a0",
"assets/FontManifest.json": "376e180111b6fb6ddaf90cfa4f85f7bf",
"assets/NOTICES": "72fa396b5dc31ff82a50b321782e2cfa",
"main.dart.js": "9eb697733974354e27452c9697a071fc",
"manifest.json": "b4d0427c2130631de0726737852e00d2"
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
