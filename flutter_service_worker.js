'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.svg": "918b01f74df97b65632157251befd87b",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"version.json": "584e0b2fb16ae04941658488cfdc8dab",
"google037d31e3522b9d4c.html": "16c5187edf54736a63f53c4e6a5c9aa8",
"addon/qr.html": "69143c9c4083f57e2605ddde7c58da96",
"addon/html-coverimage/java-script/cover-images.js": "cb9f9e5cb114b2ddb70c65f6662cc932",
"addon/html-coverimage/index.html": "28b3e74c2a1dd365a6905064d51230fb",
"/": "ccb208f4bff342b97c661c982c04fec2",
"addon/html-coverimage/images/megumin2.png": "d7d08106970dc08772884f848244d118",
"addon/html-coverimage/images/megumin.jpg": "f525ef62e87bf9f9396e3abaf125955d",
"addon/screen-record/scripts/capture.js": "0929a9e8309a4c555909c8c532c1dd15",
"addon/screen-record/index.html": "0e51d370363a47bb2b90763f7ead92d1",
"addon/teser_gif/index.html": "734451f8a3d08944495516be414e8dbb",
"addon/teser_gif/loading.gif": "7bb4affe0b1bfed78f954bf0fdd09559",
"addon/store-code-check/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"addon/store-code-check/version.json": "06e771d9795d8e2daabe7a548530d179",
"addon/store-code-check/main.dart.js": "b13a06834c8a0caf11b84cafc48b86b6",
"addon/store-code-check/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"addon/store-code-check/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"addon/store-code-check/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"addon/store-code-check/assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"addon/store-code-check/assets/shaders/ink_sparkle.frag": "824196ad4fc54759c0eb4a7a1d18caef",
"addon/store-code-check/assets/NOTICES": "118d043552f80832a7c739d84bfde518",
"addon/store-code-check/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"addon/store-code-check/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"addon/store-code-check/manifest.json": "aeb44567c94c5702b779f127f8c2ce1c",
"addon/store-code-check/index.html": "e013afc4c6a89860a6354db174116022",
"addon/store-code-check/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"addon/store-code-check/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"addon/store-code-check/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"addon/store-code-check/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"addon/store-code-check/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"addon/store-code-check/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"addon/store-code-check/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"addon/store-code-check/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"addon/store-code-check/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "15fe790d6ce92d7eb2443773134bd334",
"assets/packages/firebase_ui_auth/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/json/configure.json": "efb8eadd38ad8214e6f501b60025de8b",
"assets/assets/fonts/CascadiaMonoPLItalic.ttf": "eb50f42ed424ae992b4ab84be47f1465",
"assets/assets/fonts/CascadiaMonoPL.ttf": "ef6ad3147eb7345ef494203a0012679f",
"assets/assets/images/logo_full.png": "622ed31aed700d605a4132207bece8cc",
"assets/assets/images/loading.gif": "4e80f86919b04422d853db8acd99a063",
"assets/AssetManifest.json": "542378261c3b81bbaff2c0454a2782f9",
"assets/NOTICES": "4ca166382177f51e7d4dd9c85f8e57a2",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/FontManifest.json": "125864ff9501eed6694f4328b161bd96",
"manifest.json": "dfaf84737f772bd339a73ae3bbfa7b01",
"redirect.html": "84e12a34532e5e2eded366b66edac060",
"work_tp/mts/bank_callback.html": "8b1551cc220e9a3ba74c442432f57d7e",
"work_tp/mts/captchav3.html": "32f789047e53f9437a3b35cd13c372ac",
"work_tp/mts/captcha.html": "690b93cc380397b72b2a1163c4154e6c",
"work_tp/mts/chat_bot.html": "ab1e4d8332fb06b3910957f92c9dc209",
"work_tp/mts/mastercard_payment.html": "2ba7107bf2e573dacbe07f3b9361c50e",
"work_tp/toplinksale/map_index.html": "5b30471da714961278a5a33f55010683",
"work_tp/toplinksale/www/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"work_tp/toplinksale/www/version.json": "406a8a67fdd4699297c589c8b72e6a0e",
"work_tp/toplinksale/www/main.dart.js": "97a4a45ae314e21cb4c9579fb738d3b7",
"work_tp/toplinksale/www/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"work_tp/toplinksale/www/assets/AssetManifest.json": "400e5eec8a8d67f0d1a2e899eec42e55",
"work_tp/toplinksale/www/assets/shaders/ink_sparkle.frag": "824196ad4fc54759c0eb4a7a1d18caef",
"work_tp/toplinksale/www/assets/NOTICES": "243c460924186536f983ca83ca68eff8",
"work_tp/toplinksale/www/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"work_tp/toplinksale/www/assets/lib/assets/images/logo.png": "7efa7e87b42f3e4c6311753110758493",
"work_tp/toplinksale/www/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"work_tp/toplinksale/www/manifest.json": "1d21a390ac8efb04bb2c350761467514",
"work_tp/toplinksale/www/index.html": "cd32e8cbf9552f3e7cd576d80310e568",
"work_tp/toplinksale/www/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"work_tp/toplinksale/www/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"work_tp/toplinksale/www/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"work_tp/toplinksale/www/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"work_tp/toplinksale/www/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"work_tp/toplinksale/www/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"work_tp/toplinksale/www/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"work_tp/toplinksale/www/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"work_tp/toplinksale/www/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "ccb208f4bff342b97c661c982c04fec2",
"icons/128.png": "1caf07f8e1a8293b1abc8a47e2474177",
"icons/87.png": "607199f62eeb65813cbd6dbe9bd00471",
"icons/50.png": "782a21401fdca763a09c53bd4a2ae2a0",
"icons/55.png": "973b6eb809e40b0c5c8fa171997b35d3",
"icons/20.png": "d69dd888458577157c3bd81bfc1b9d8a",
"icons/16.png": "a3501aa7635e9e44b55d4b94d6ee75eb",
"icons/76.png": "628b8c1e2745365d31748c499db84639",
"icons/180.png": "70052d673feceb305e954b7b5f3d8384",
"icons/100.png": "bf518e136c28aed32278af4f829c588f",
"icons/152.png": "64bc1d32a73813b3a01d55d8da10f705",
"icons/60.png": "ed9244e5073df133488c5cb061fa1208",
"icons/256.png": "3bb18f2be64e39bf52e83ffa5013e091",
"icons/48.png": "86a52b9c107ce2537b27315e99bf3b59",
"icons/1024.png": "190658659cd7d3ececb6958991ac8ca6",
"icons/80.png": "6f2d30270623a1cfa5635650cd47813a",
"icons/196.png": "1930aa6b991754df6586c0dcb6eeae92",
"icons/57.png": "fb55bfe3609d2ce96d27257a8dfdef6f",
"icons/66.png": "abca2c21271bb8f83802908aa72828fc",
"icons/Icon-maskable-512.png": "457e12074599ae10fc5219b7d1639ac8",
"icons/72.png": "41c87f2d1fcfb7f53173e8bc484a3d8f",
"icons/64.png": "24daecce018ae5e7c5ad34beba6efc17",
"icons/32.png": "6b2dbb67d465e63393c6706d953bb8f6",
"icons/102.png": "8f11d45c79686593519d811d0e9915c5",
"icons/92.png": "b478a3ff398bbd4f06fd8c4cf2a06af1",
"icons/120.png": "fc3e6a91b409494fd6107fb0b3ef0406",
"icons/216.png": "75fbe83c864789fe761cfa4c91f08542",
"icons/29.png": "4fd36a5cf177ba73afb07fc68a116273",
"icons/114.png": "9e43369052156f9db0b08077a3a1c3bd",
"icons/88.png": "a82cf3aac9deb0924b04cefa417dcb0d",
"icons/Icon-maskable-196.png": "1930aa6b991754df6586c0dcb6eeae92",
"icons/40.png": "e925043f0784f9eb54033f0a552754e3",
"icons/144.png": "0e7ca23f5e3e37a904909a3f5e280b54",
"icons/512.png": "457e12074599ae10fc5219b7d1639ac8",
"icons/172.png": "63b6926ce8a0a28563dab6686f3a5504",
"icons/167.png": "1a159f921bc7869a36d9d99efc8d5e6f",
"icons/58.png": "08bdb6e45cf3128c132623204f1bc23f",
"wait.jpeg": "d73c497c2a75b90278013b2a9001f3a0",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"loading.gif": "a6cd4c512234b8b546bf806d19cbba5c",
"firebase-messaging-sw.js": "595fd173b139615a9a84fada5898c75d"
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
