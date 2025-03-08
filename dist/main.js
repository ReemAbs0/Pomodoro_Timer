/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n \r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\ndocument.getElementById('start').addEventListener('click', _timer_js__WEBPACK_IMPORTED_MODULE_0__.startTimer);\r\ndocument.getElementById('pause').addEventListener('click', _timer_js__WEBPACK_IMPORTED_MODULE_0__.pauseTimer);\r\ndocument.getElementById('reset').addEventListener('click', _timer_js__WEBPACK_IMPORTED_MODULE_0__.resetTimer);\r\ndocument.getElementById('apply-settings').addEventListener('click', _timer_js__WEBPACK_IMPORTED_MODULE_0__.applySettings);\r\ndocument.getElementById('work-button').addEventListener('click',_timer_js__WEBPACK_IMPORTED_MODULE_0__.toWork); \r\ndocument.getElementById('break-button').addEventListener('click', _timer_js__WEBPACK_IMPORTED_MODULE_0__.toBreak);\r\n});\n\n//# sourceURL=webpack://pomodoro_timer/./src/index.js?");

/***/ }),

/***/ "./src/notificationSound.mp3":
/*!***********************************!*\
  !*** ./src/notificationSound.mp3 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e6277651eaa9acff7652e38a30606ab1.mp3\");\n\n//# sourceURL=webpack://pomodoro_timer/./src/notificationSound.mp3?");

/***/ }),

/***/ "./src/notifications.js":
/*!******************************!*\
  !*** ./src/notifications.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playNotification: () => (/* binding */ playNotification)\n/* harmony export */ });\n/* harmony import */ var _notificationSound_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notificationSound.mp3 */ \"./src/notificationSound.mp3\");\n\r\n\r\nfunction playNotification() {\r\n    const audio = new Audio(_notificationSound_mp3__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \r\n    audio.play().catch(error => console.error(\"Error playing audio:\", error)); \r\n}\r\n\n\n//# sourceURL=webpack://pomodoro_timer/./src/notifications.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSettings: () => (/* binding */ getSettings),\n/* harmony export */   saveSettings: () => (/* binding */ saveSettings)\n/* harmony export */ });\nfunction getSettings() {\r\n    return {\r\n        workDuration: localStorage.getItem('workDuration') ? parseInt(localStorage.getItem('workDuration'), 10) : 25,\r\n        breakDuration: localStorage.getItem('breakDuration') ? parseInt(localStorage.getItem('breakDuration'), 10) : 5,\r\n    };\r\n}\r\n\r\nfunction saveSettings(workDuration, breakDuration) {\r\n    localStorage.setItem('workDuration', workDuration);\r\n    localStorage.setItem('breakDuration', breakDuration);\r\n}\r\n\n\n//# sourceURL=webpack://pomodoro_timer/./src/settings.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://pomodoro_timer/./src/styles.css?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applySettings: () => (/* binding */ applySettings),\n/* harmony export */   pauseTimer: () => (/* binding */ pauseTimer),\n/* harmony export */   resetTimer: () => (/* binding */ resetTimer),\n/* harmony export */   startTimer: () => (/* binding */ startTimer),\n/* harmony export */   toBreak: () => (/* binding */ toBreak),\n/* harmony export */   toWork: () => (/* binding */ toWork)\n/* harmony export */ });\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _notifications_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.js */ \"./src/notifications.js\");\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.js */ \"./src/settings.js\");\n\r\n\r\n\r\n\r\nlet timer;\r\nlet isRunning = false;\r\nlet isBreak = false;\r\nlet { workDuration, breakDuration } = (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.getSettings)(); \r\nlet minutes = workDuration;\r\nlet seconds = 0;\r\n\r\nfunction startTimer() {\r\n    if (isRunning) return;\r\n    isRunning = true;\r\n    timer = setInterval(() => {\r\n        if (seconds === 0) {\r\n            if (minutes === 0) {\r\n                clearInterval(timer);\r\n                isRunning = false;\r\n                (0,_notifications_js__WEBPACK_IMPORTED_MODULE_1__.playNotification)();\r\n                return;\r\n            }\r\n            minutes--;\r\n            seconds = 59;\r\n        } else {\r\n            seconds--;\r\n        }\r\n        (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.updateUI)(minutes, seconds);\r\n    }, 1000);\r\n}\r\n\r\nfunction pauseTimer() {\r\n    clearInterval(timer);\r\n    isRunning = false;\r\n}\r\n\r\nfunction resetTimer() {\r\n    clearInterval(timer);\r\n    minutes = 25;\r\n    seconds = 0;\r\n    isRunning = false;\r\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.updateUI)(minutes, seconds);\r\n}\r\n\r\nfunction applySettings() {\r\n    const newWorkDuration = parseInt(document.getElementById('work-duration').value, 10);\r\n    const newBreakDuration = parseInt(document.getElementById('break-duration').value, 10);\r\n\r\n    if (newWorkDuration > 0 && newBreakDuration > 0) {\r\n        (0,_settings_js__WEBPACK_IMPORTED_MODULE_2__.saveSettings)(newWorkDuration, newBreakDuration);\r\n        workDuration = newWorkDuration;\r\n        breakDuration = newBreakDuration;\r\n        minutes = workDuration;\r\n        (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.updateUI)(minutes, seconds);\r\n    }\r\n}\r\n\r\nfunction toWork() {\r\n    isBreak = false;\r\n    minutes = workDuration;  // تعيين الوقت لفترة العمل\r\n    seconds = 0;\r\n    document.body.style.backgroundImage = \"linear-gradient(135deg, #be8284, rgb(153, 101, 86))\";  \r\n    document.getElementById('Wlabel').style.display='block';\r\n    document.getElementById('Blabel').style.display='none';\r\n    document.getElementById('work-button').style.background='white'; \r\n    document.getElementById('work-button').style.color='black'; \r\n    document.getElementById('break-button').style.background=''; \r\n    document.getElementById('break-button').style.color=''; \r\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.updateUI)(minutes, seconds);\r\n}\r\n\r\nfunction toBreak() {\r\n    isBreak = true;\r\n    minutes = breakDuration;  // تعيين الوقت لفترة البريك\r\n    seconds = 0;\r\n    document.body.style.backgroundImage = \"linear-gradient(135deg, #4f81bd, #78a3d2)\";\r\n    document.getElementById('break-button').style.background='white'; \r\n    document.getElementById('break-button').style.color='black'; \r\n    document.getElementById('Wlabel').style.display='none';\r\n    document.getElementById('Blabel').style.display='block';\r\n    document.getElementById('work-button').style.background=''; \r\n    document.getElementById('work-button').style.color=''; \r\n    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.updateUI)(minutes, seconds);\r\n}\r\n\n\n//# sourceURL=webpack://pomodoro_timer/./src/timer.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateUI: () => (/* binding */ updateUI)\n/* harmony export */ });\nfunction updateUI(minutes, seconds) {\r\n    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');\r\n    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');\r\n}\r\n\n\n//# sourceURL=webpack://pomodoro_timer/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;