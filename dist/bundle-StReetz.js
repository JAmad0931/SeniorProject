/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascript/index.js":
/*!************************************!*\
  !*** ./public/javascript/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./public/javascript/ui.js\");\n/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app */ \"./public/node_modules/@firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"./public/node_modules/firebase/auth/dist/index.esm.js\");\n\r\n// Import the functions you need from the SDKs you need\r\n\r\n\r\n\r\n// TODO: Add SDKs for Firebase products that you want to use\r\n// https://firebase.google.com/docs/web/setup#available-libraries\r\n\r\n// Your web app's Firebase configuration\r\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyASUGgzfL-gg4ADwpC_itACWC20rWJkhg8\",\r\n  authDomain: \"seniorproject-e4cf0.firebaseapp.com\",\r\n  projectId: \"seniorproject-e4cf0\",\r\n  storageBucket: \"seniorproject-e4cf0.appspot.com\",\r\n  messagingSenderId: \"550383984809\",\r\n  appId: \"1:550383984809:web:b8ae4d506d159b1e9c09b8\",\r\n  measurementId: \"G-BNL2PXNHZM\"\r\n};\r\nif (!_firebase_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].apps.length) {\r\n  _firebase_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initializeApp(firebaseConfig);\r\n}\r\n\r\n// Initialize Firebase\r\nconst auth = _firebase_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].auth(firebaseConfig);\r\nconnectAuthEmulator(auth, \"http://localhost:9099\");\r\n\r\n// Login using email and password\r\nconst loginEmailPassword = async () => {\r\n  const loginEmail = _ui_js__WEBPACK_IMPORTED_MODULE_0__.txtEmail.value;\r\n  const loginPassword = _ui_js__WEBPACK_IMPORTED_MODULE_0__.txtPassword.value;\r\n\r\n    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);\r\n    console.log(userCredential.user);\r\n \r\n}\r\n_ui_js__WEBPACK_IMPORTED_MODULE_0__.btnLogin.addEventListener(\"click\", loginEmailPassword);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQThFO0FBQzlFO0FBQ3FDO0FBQ2Q7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxxREFBUTtBQUNiLEVBQUUscURBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHFEQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUFRO0FBQzdCLHdCQUF3QiwrQ0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW5pb3Jwcm9qZWN0Ly4vcHVibGljL2phdmFzY3JpcHQvaW5kZXguanM/ZGZiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2J0bkxvZ2luLCBidG5TaWdudXAsIGJ0bkxvZ291dCwgdHh0RW1haWwsIHR4dFBhc3N3b3JkfSBmcm9tICcuL3VpLmpzJztcclxuLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcIkBmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJztcclxuXHJcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxyXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBU1VHZ3pmTC1nZzRBRHdwQ19pdEFDV0MyMHJXSmtoZzhcIixcclxuICBhdXRoRG9tYWluOiBcInNlbmlvcnByb2plY3QtZTRjZjAuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInNlbmlvcnByb2plY3QtZTRjZjBcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInNlbmlvcnByb2plY3QtZTRjZjAuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI1NTAzODM5ODQ4MDlcIixcclxuICBhcHBJZDogXCIxOjU1MDM4Mzk4NDgwOTp3ZWI6YjhhZTRkNTA2ZDE1OWIxZTljMDliOFwiLFxyXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1CTkwyUFhOSFpNXCJcclxufTtcclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGF1dGggPSBmaXJlYmFzZS5hdXRoKGZpcmViYXNlQ29uZmlnKTtcclxuY29ubmVjdEF1dGhFbXVsYXRvcihhdXRoLCBcImh0dHA6Ly9sb2NhbGhvc3Q6OTA5OVwiKTtcclxuXHJcbi8vIExvZ2luIHVzaW5nIGVtYWlsIGFuZCBwYXNzd29yZFxyXG5jb25zdCBsb2dpbkVtYWlsUGFzc3dvcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgbG9naW5FbWFpbCA9IHR4dEVtYWlsLnZhbHVlO1xyXG4gIGNvbnN0IGxvZ2luUGFzc3dvcmQgPSB0eHRQYXNzd29yZC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCB1c2VyQ3JlZGVudGlhbCA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGxvZ2luRW1haWwsIGxvZ2luUGFzc3dvcmQpO1xyXG4gICAgY29uc29sZS5sb2codXNlckNyZWRlbnRpYWwudXNlcik7XHJcbiBcclxufVxyXG5idG5Mb2dpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9naW5FbWFpbFBhc3N3b3JkKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/javascript/index.js\n");

/***/ }),

/***/ "./public/javascript/ui.js":
/*!*********************************!*\
  !*** ./public/javascript/ui.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnLogin: () => (/* binding */ btnLogin),\n/* harmony export */   btnLogout: () => (/* binding */ btnLogout),\n/* harmony export */   btnSignup: () => (/* binding */ btnSignup),\n/* harmony export */   txtEmail: () => (/* binding */ txtEmail),\n/* harmony export */   txtPassword: () => (/* binding */ txtPassword)\n/* harmony export */ });\n\r\nconst txtEmail = document.querySelector('#email');\r\nconst txtPassword = document.querySelector('#pwd');\r\n\r\nconst btnLogin = document.querySelector('#btnLogin');\r\nconst btnSignup = document.querySelector('#btnSignup');\r\n\r\nconst btnLogout = document.querySelector('#btnlogout');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvamF2YXNjcmlwdC91aS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ087QUFDQTtBQUNQO0FBQ087QUFDQTtBQUNQO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZW5pb3Jwcm9qZWN0Ly4vcHVibGljL2phdmFzY3JpcHQvdWkuanM/ZTA1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNvbnN0IHR4dEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VtYWlsJyk7XHJcbmV4cG9ydCBjb25zdCB0eHRQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwd2QnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBidG5Mb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Mb2dpbicpO1xyXG5leHBvcnQgY29uc3QgYnRuU2lnbnVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blNpZ251cCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ0bkxvZ291dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5sb2dvdXQnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/javascript/ui.js\n");

/***/ }),

/***/ "./public/node_modules/@firebase/app/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./public/node_modules/@firebase/app/dist/index.esm.js ***!
  \*************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\josue\\OneDrive\\Documents\\SeniorProject\\public\\node_modules\\@firebase\\app\\dist\\index.esm.js'");

/***/ }),

/***/ "./public/node_modules/firebase/auth/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./public/node_modules/firebase/auth/dist/index.esm.js ***!
  \*************************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\josue\\OneDrive\\Documents\\SeniorProject\\public\\node_modules\\firebase\\auth\\dist\\index.esm.js'");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/javascript/index.js");
/******/ 	
/******/ })()
;