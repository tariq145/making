webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/service_worker.js":
/*!*********************************!*\
  !*** ./pages/service_worker.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CACHE_NAME = "simple-cache-v1";
var urlsToCache = ["/"];
self.addEventListener("install", function (event) {
  var preLoaded = caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll(urlsToCache);
  });
  event.waitUntil(preLoaded);
});
self.addEventListener("fetch", function (event) {
  var response = caches.match(event.request).then(function (match) {
    return match || fetch(event.request);
  });
  event.respondWith(response);
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/service_worker")
  

/***/ })

})
//# sourceMappingURL=index.js.c1a672f78607953bc1cd.hot-update.js.map