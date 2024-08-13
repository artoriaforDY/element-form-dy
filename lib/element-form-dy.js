(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["element-form-dy"] = factory();
	else
		root["element-form-dy"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__packages_element_form_dy__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__packages_element_form_dy__["a" /* default */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_form_dy__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__element_form_dy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__element_form_dy__);


const install = (Vue) => {
  window.$vueApp.component(__WEBPACK_IMPORTED_MODULE_0__element_form_dy__["default"].name, __WEBPACK_IMPORTED_MODULE_0__element_form_dy__["default"])
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__element_form_dy__["default"]);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \n\nVue packages version mismatch:\n\n- vue@3.4.31 (F:\\newjob\\element-form-dy\\node_modules\\vue\\index.js)\n- vue-template-compiler@2.7.16 (F:\\newjob\\element-form-dy\\node_modules\\vue-template-compiler\\package.json)\n\nThis may cause things to work incorrectly. Make sure to use the same version for both.\nIf you are using vue-loader@>=10.0, simply update vue-template-compiler.\nIf you are using vue-loader@<10.0 or vueify, re-installing vue-loader/vueify should bump vue-template-compiler to the latest.\n\n    at Object.<anonymous> (F:\\newjob\\element-form-dy\\node_modules\\vue-template-compiler\\index.js:10:9)\n    at Module._compile (node:internal/modules/cjs/loader:1358:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)\n    at Module.load (node:internal/modules/cjs/loader:1208:32)\n    at Module._load (node:internal/modules/cjs/loader:1024:12)\n    at Module.require (node:internal/modules/cjs/loader:1233:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (F:\\newjob\\element-form-dy\\node_modules\\vue-loader\\lib\\parser.js:1:18)\n    at Module._compile (node:internal/modules/cjs/loader:1358:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)\n    at Module.load (node:internal/modules/cjs/loader:1208:32)\n    at Module._load (node:internal/modules/cjs/loader:1024:12)\n    at Module.require (node:internal/modules/cjs/loader:1233:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (F:\\newjob\\element-form-dy\\node_modules\\vue-loader\\lib\\loader.js:3:15)\n    at Module._compile (node:internal/modules/cjs/loader:1358:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)\n    at Module.load (node:internal/modules/cjs/loader:1208:32)\n    at Module._load (node:internal/modules/cjs/loader:1024:12)\n    at Module.require (node:internal/modules/cjs/loader:1233:19)\n    at require (node:internal/modules/helpers:179:18)\n    at Object.<anonymous> (F:\\newjob\\element-form-dy\\node_modules\\vue-loader\\index.js:1:18)\n    at Module._compile (node:internal/modules/cjs/loader:1358:14)\n    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)\n    at Module.load (node:internal/modules/cjs/loader:1208:32)\n    at Module._load (node:internal/modules/cjs/loader:1024:12)\n    at Module.require (node:internal/modules/cjs/loader:1233:19)\n    at require (node:internal/modules/helpers:179:18)\n    at loadLoader (F:\\newjob\\element-form-dy\\node_modules\\loader-runner\\lib\\loadLoader.js:18:17)\n    at iteratePitchingLoaders (F:\\newjob\\element-form-dy\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)");

/***/ })
/******/ ]);
});