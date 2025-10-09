'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8f4f288539dc10da79cdc4fea21a24d5",
"version.json": "8e657de1dbdd0ad4853b34565605a05b",
"index.html": "3c9241ee8b78c46e52522f61ce443b07",
"/": "3c9241ee8b78c46e52522f61ce443b07",
"js/js_library.js": "bffbcddb5d14265428dd3ffa8ca31e7a",
"main.dart.js": "e49320b5708fc9f00887662ef0a5a3ea",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b1dfecdbbd236287794fe499ef8b745",
"assets/AssetManifest.json": "99e568bb65a475b32ec5452bd1a4588d",
"assets/NOTICES": "11264af9c842469660f24c9568d8ad46",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bfda9c61189738e5b14e23b13dd0bccb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "da01e81418c0eed945bf52577fe46169",
"assets/fonts/MaterialIcons-Regular.otf": "171fc2a0d0c85fb1cf25f1fc21740d2f",
"assets/assets/images/icSwitchOn.png": "68bc026f27c75c3b22602d97ef9b2633",
"assets/assets/images/logoVietNam.png": "c70a314225401a903eeadcc70280634c",
"assets/assets/images/icGiaoViec.png": "79fcc3a17c15c88d7a60d6a2f4da1001",
"assets/assets/images/icon_tick_circle.png": "4a730eabb221bab539e58b9f7c022b66",
"assets/assets/images/icAccepter.png": "ab89d556f6ded3ca092335c5b1624e9e",
"assets/assets/images/jwTime.png": "2cc7cd2c0bf5ce147fe12c5cb1cfcc18",
"assets/assets/images/icManyPeople.png": "35dce5807d250437adf56ed6051f39c6",
"assets/assets/images/icWorkingHour.png": "9cf6d67e08430f0a9a279b1473b45891",
"assets/assets/images/flag.png": "2fcb4b68d100277727c0be0360449380",
"assets/assets/images/icDeleteCircle.png": "c98c6814110c356fb1a5b1fa4dd1de86",
"assets/assets/images/ic_calendar.png": "571fa815b704b5a1b59647c14ff81371",
"assets/assets/images/icon_arrow_left.png": "bf221a69777b7df26a41070be834d9fb",
"assets/assets/images/icAddBlue.png": "5e23a050786d89e2c488154487b61de4",
"assets/assets/images/surprised.png": "b211052220925ed401872e39fc97f2ab",
"assets/assets/images/icToDay.png": "a7d292c06cd0cb3b9e212dea401c1207",
"assets/assets/images/ic_loading.png": "d694959df05526c33bd64e8580278f05",
"assets/assets/images/jwTinhTrang.png": "e6cf4654c29e5c017dcbcee7838c7487",
"assets/assets/images/icCheck.png": "f02e7eed3666509daf582bcd4189212e",
"assets/assets/images/icSearch.png": "c74c4ffbca41a4b8955d531ac30e61b0",
"assets/assets/images/icProject.png": "494807b70283284806aca89412940920",
"assets/assets/images/seen.png": "78e0dfad49039055638a50b35d306ac9",
"assets/assets/images/icSend.png": "6bb8865eebedd1d59770ec809faa9ae0",
"assets/assets/images/icCalendar.png": "6ac063f40648ee79f034abcacb821067",
"assets/assets/images/jwAddTime.png": "24fb67d002a5268ec417430b69275c24",
"assets/assets/images/icon_message.png": "17593bb1236edd477786c3d97fe9dae5",
"assets/assets/images/anxiety.png": "b558b2ed14e403714bc18cac67beb350",
"assets/assets/images/icChooseDate.png": "1a0e986e75b962e9e9dc70001b8188ad",
"assets/assets/images/icModel.png": "58d4e0ddef54c1f50d126199df4d2f1e",
"assets/assets/images/header_menu.png": "4f2a109287ccecc556519c326df64b99",
"assets/assets/images/icBookOpen.png": "2ab7cd0c09907fdaa3cd735789bd3536",
"assets/assets/images/icPiority.png": "c8fa8a51f2a135b9f0baa8eebcb4574a",
"assets/assets/images/icSwitchOff.png": "7bbc843b7d42452459cee863d0afe6a2",
"assets/assets/images/icTag.png": "64e6a84f865b3c71afd8db30e2ae8e5b",
"assets/assets/images/thumb-up.png": "27680132b2d148e403569e87adb0a006",
"assets/assets/images/icTouchChuaChon.png": "cf834ba7b6a9310ad9bec492547b6f16",
"assets/assets/images/icDelete.png": "c7ef2953353bb4297a00ca511e928e6f",
"assets/assets/images/heart.png": "93652e5b34f975344fdb29f43ec5294d",
"assets/assets/images/icEditFilter.png": "1cacef4274e51e794473ecec1900773f",
"assets/assets/images/icClock.png": "4fb0ef8c1fa9f312f10a7b44ada45aac",
"assets/assets/images/angry.png": "e6df7787b4f0e09d5dce61cc5b451fd8",
"assets/assets/images/icon_avt_assignTask.png": "8db7a5f88596646e1f0e58629b9dd1ba",
"assets/assets/images/icChooseFile.png": "9178b0497df9ac1428c7e5e3dc1acb33",
"assets/assets/images/icTouchDaChon.png": "a9aab9a8a0bb58840d5bbff4e81c6773",
"assets/assets/images/icChooseVideo.png": "ddeca2730782a437b510f096b09a65bc",
"assets/assets/images/manager.png": "59ce09e860276f2e98381b0fa245ff21",
"assets/assets/images/ic_search.png": "4c0218469fa0af29cb289d5a80841b71",
"assets/assets/images/calendar.png": "e4817305865108e319dd2b7f24752150",
"assets/assets/images/tag_task.png": "18c3994e4ed29f161bc1210834e3e618",
"assets/assets/images/icChevronRight.png": "612a921704566e810aa0f596eac271ec",
"assets/assets/images/icHeart.png": "df86d73ee1f81dcfacd050ab204a8a3e",
"assets/assets/images/icMoreVertical.png": "808df0fd87a9af8185701fc874bae0b6",
"assets/assets/images/icMan.png": "2c811b0b67fffcb9e95dd0ab06ca9fcd",
"assets/assets/images/eye.png": "7d81a90c9b3d844dfe3327e3ec9de4c1",
"assets/assets/images/LineTop.png": "8cb394038b8ece49de10eba26045e91a",
"assets/assets/images/icCloseModal.png": "5270fcd3767c64e8eed0b97f1af26d4a",
"assets/assets/images/icon_list.png": "b4ca82d82617895cd557c331705a3e36",
"assets/assets/images/icFlag.png": "de592c58513ae0b7a97a6c5f71e4130f",
"assets/assets/images/imgUserDefault.png": "b0db518dcc4f9cc195d85d97f97f69fa",
"assets/assets/images/icLoc.png": "603533c409a41ebf012caa4598fd2f14",
"assets/assets/images/icChooseImage.png": "a6adb73182b6fd0bf74fd54e7e603f95",
"assets/assets/images/ic_arrow_down.png": "cc68db1bcb79627b9ca3c9152300fdb1",
"assets/assets/images/icProjectS.png": "f444f5eecdbfa3f701c9ef49d9b5a5f6",
"assets/assets/images/icUser.png": "06c5c836cdef3dec2e8b07623065b021",
"assets/assets/images/icOClock.png": "d9ce3d0d65a18f442c62d0da6087fa7e",
"assets/assets/images/icHome.png": "c13ece4b9aece72228fe309264faf3fa",
"assets/assets/images/icList.png": "96df882247cea1c988f5671afed3ad67",
"assets/assets/images/jwMucDo.png": "fc42a0f7ce503e9cbaaa30ddbf907f89",
"assets/assets/images/icPinBold.png": "6c3c7675e6bd26cabb7582e237e7d27f",
"assets/assets/images/logoUnitedKingdom.png": "9af8c26db94489eab89d7ab69d5f5024",
"assets/assets/images/icNhacNho.png": "f90b1406061138957314d6fd7780c788",
"assets/assets/images/positive.png": "536880200a7d54dde0c84bc208cc93f4",
"assets/assets/images/icon_pin.png": "19eae55d0dd9df5d9f66a82351c1d3aa",
"assets/assets/images/icDocument.png": "e73c6859f4f19a06f000bda4702b6fb0",
"assets/assets/images/smile.png": "dd57e58f6f44a34f57dd50eb75c70f74",
"assets/assets/images/close.png": "1634d0a4a2c52e6dda4f9e89f7fec36c",
"assets/assets/lang/en.json": "14f0e83dd6b7bb80817384e46be218c4",
"assets/assets/lang/vi.json": "3ded77724a6cd03351547679c6d46b3d",
"assets/assets/lottie/Empty.json": "d03c5723bba3d069315f5d35f29cd917",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
