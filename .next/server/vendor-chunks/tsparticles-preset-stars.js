"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-preset-stars";
exports.ids = ["vendor-chunks/tsparticles-preset-stars"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-preset-stars/cjs/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-preset-stars/cjs/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadStarsPreset = void 0;\nconst tsparticles_basic_1 = __webpack_require__(/*! tsparticles-basic */ \"(ssr)/./node_modules/tsparticles-basic/cjs/index.js\");\nconst options_1 = __webpack_require__(/*! ./options */ \"(ssr)/./node_modules/tsparticles-preset-stars/cjs/options.js\");\nasync function loadStarsPreset(engine, refresh = true) {\n    await (0, tsparticles_basic_1.loadBasic)(engine, false);\n    await engine.addPreset(\"stars\", options_1.options, refresh);\n}\nexports.loadStarsPreset = loadStarsPreset;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtcHJlc2V0LXN0YXJzL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUI7QUFDdkIsNEJBQTRCLG1CQUFPLENBQUMsOEVBQW1CO0FBQ3ZELGtCQUFrQixtQkFBTyxDQUFDLCtFQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXByZXNldC1zdGFycy9janMvaW5kZXguanM/NzJhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubG9hZFN0YXJzUHJlc2V0ID0gdm9pZCAwO1xuY29uc3QgdHNwYXJ0aWNsZXNfYmFzaWNfMSA9IHJlcXVpcmUoXCJ0c3BhcnRpY2xlcy1iYXNpY1wiKTtcbmNvbnN0IG9wdGlvbnNfMSA9IHJlcXVpcmUoXCIuL29wdGlvbnNcIik7XG5hc3luYyBmdW5jdGlvbiBsb2FkU3RhcnNQcmVzZXQoZW5naW5lLCByZWZyZXNoID0gdHJ1ZSkge1xuICAgIGF3YWl0ICgwLCB0c3BhcnRpY2xlc19iYXNpY18xLmxvYWRCYXNpYykoZW5naW5lLCBmYWxzZSk7XG4gICAgYXdhaXQgZW5naW5lLmFkZFByZXNldChcInN0YXJzXCIsIG9wdGlvbnNfMS5vcHRpb25zLCByZWZyZXNoKTtcbn1cbmV4cG9ydHMubG9hZFN0YXJzUHJlc2V0ID0gbG9hZFN0YXJzUHJlc2V0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-preset-stars/cjs/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-preset-stars/cjs/options.js":
/*!**************************************************************!*\
  !*** ./node_modules/tsparticles-preset-stars/cjs/options.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.options = void 0;\nexports.options = {\n    background: {\n        color: \"#000\",\n    },\n    particles: {\n        number: {\n            value: 100,\n        },\n        move: {\n            direction: \"none\",\n            enable: true,\n            outModes: {\n                default: \"out\",\n            },\n            random: true,\n            speed: 0.1,\n            straight: false,\n        },\n        opacity: {\n            animation: {\n                enable: true,\n                speed: 1,\n                sync: false,\n            },\n            value: { min: 0, max: 1 },\n        },\n        size: {\n            value: { min: 1, max: 3 },\n        },\n    },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtcHJlc2V0LXN0YXJzL2Nqcy9vcHRpb25zLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWU7QUFDZixlQUFlO0FBQ2Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixxQkFBcUIsZ0JBQWdCO0FBQ3JDLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckMsU0FBUztBQUNULEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1wcmVzZXQtc3RhcnMvY2pzL29wdGlvbnMuanM/ODZmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMub3B0aW9ucyA9IHZvaWQgMDtcbmV4cG9ydHMub3B0aW9ucyA9IHtcbiAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICB9LFxuICAgIHBhcnRpY2xlczoge1xuICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgIHZhbHVlOiAxMDAsXG4gICAgICAgIH0sXG4gICAgICAgIG1vdmU6IHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICBvdXRNb2Rlczoge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFwib3V0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICAgICAgc3BlZWQ6IDAuMSxcbiAgICAgICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAxLFxuICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbHVlOiB7IG1pbjogMCwgbWF4OiAxIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7IG1pbjogMSwgbWF4OiAzIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-preset-stars/cjs/options.js\n");

/***/ })

};
;