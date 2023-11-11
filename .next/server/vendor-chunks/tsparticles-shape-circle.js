"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/tsparticles-shape-circle";
exports.ids = ["vendor-chunks/tsparticles-shape-circle"];
exports.modules = {

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CircleDrawer = void 0;\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nclass CircleDrawer {\n    draw(context, particle, radius) {\n        if (!particle.circleRange) {\n            particle.circleRange = { min: 0, max: Math.PI * 2 };\n        }\n        const circleRange = particle.circleRange;\n        context.arc(0, 0, radius, circleRange.min, circleRange.max, false);\n    }\n    getSidesCount() {\n        return 12;\n    }\n    particleInit(container, particle) {\n        const shapeData = particle.shapeData, angle = shapeData?.angle ?? {\n            max: 360,\n            min: 0,\n        };\n        particle.circleRange = !(0, tsparticles_engine_1.isObject)(angle)\n            ? {\n                min: 0,\n                max: (angle * Math.PI) / 180,\n            }\n            : { min: (angle.min * Math.PI) / 180, max: (angle.max * Math.PI) / 180 };\n    }\n}\nexports.CircleDrawer = CircleDrawer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2Nqcy9DaXJjbGVEcmF3ZXIuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsb0JBQW9CO0FBQ3BCLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0Esb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3RzcGFydGljbGVzLXNoYXBlLWNpcmNsZS9janMvQ2lyY2xlRHJhd2VyLmpzP2M4NjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNpcmNsZURyYXdlciA9IHZvaWQgMDtcbmNvbnN0IHRzcGFydGljbGVzX2VuZ2luZV8xID0gcmVxdWlyZShcInRzcGFydGljbGVzLWVuZ2luZVwiKTtcbmNsYXNzIENpcmNsZURyYXdlciB7XG4gICAgZHJhdyhjb250ZXh0LCBwYXJ0aWNsZSwgcmFkaXVzKSB7XG4gICAgICAgIGlmICghcGFydGljbGUuY2lyY2xlUmFuZ2UpIHtcbiAgICAgICAgICAgIHBhcnRpY2xlLmNpcmNsZVJhbmdlID0geyBtaW46IDAsIG1heDogTWF0aC5QSSAqIDIgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaXJjbGVSYW5nZSA9IHBhcnRpY2xlLmNpcmNsZVJhbmdlO1xuICAgICAgICBjb250ZXh0LmFyYygwLCAwLCByYWRpdXMsIGNpcmNsZVJhbmdlLm1pbiwgY2lyY2xlUmFuZ2UubWF4LCBmYWxzZSk7XG4gICAgfVxuICAgIGdldFNpZGVzQ291bnQoKSB7XG4gICAgICAgIHJldHVybiAxMjtcbiAgICB9XG4gICAgcGFydGljbGVJbml0KGNvbnRhaW5lciwgcGFydGljbGUpIHtcbiAgICAgICAgY29uc3Qgc2hhcGVEYXRhID0gcGFydGljbGUuc2hhcGVEYXRhLCBhbmdsZSA9IHNoYXBlRGF0YT8uYW5nbGUgPz8ge1xuICAgICAgICAgICAgbWF4OiAzNjAsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgIH07XG4gICAgICAgIHBhcnRpY2xlLmNpcmNsZVJhbmdlID0gISgwLCB0c3BhcnRpY2xlc19lbmdpbmVfMS5pc09iamVjdCkoYW5nbGUpXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgbWF4OiAoYW5nbGUgKiBNYXRoLlBJKSAvIDE4MCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogeyBtaW46IChhbmdsZS5taW4gKiBNYXRoLlBJKSAvIDE4MCwgbWF4OiAoYW5nbGUubWF4ICogTWF0aC5QSSkgLyAxODAgfTtcbiAgICB9XG59XG5leHBvcnRzLkNpcmNsZURyYXdlciA9IENpcmNsZURyYXdlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/tsparticles-shape-circle/cjs/index.js":
/*!************************************************************!*\
  !*** ./node_modules/tsparticles-shape-circle/cjs/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.loadCircleShape = void 0;\nconst CircleDrawer_1 = __webpack_require__(/*! ./CircleDrawer */ \"(ssr)/./node_modules/tsparticles-shape-circle/cjs/CircleDrawer.js\");\nasync function loadCircleShape(engine, refresh = true) {\n    await engine.addShape(\"circle\", new CircleDrawer_1.CircleDrawer(), refresh);\n}\nexports.loadCircleShape = loadCircleShape;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHNwYXJ0aWNsZXMtc2hhcGUtY2lyY2xlL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx1QkFBdUI7QUFDdkIsdUJBQXVCLG1CQUFPLENBQUMseUZBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy90c3BhcnRpY2xlcy1zaGFwZS1jaXJjbGUvY2pzL2luZGV4LmpzP2QxYTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvYWRDaXJjbGVTaGFwZSA9IHZvaWQgMDtcbmNvbnN0IENpcmNsZURyYXdlcl8xID0gcmVxdWlyZShcIi4vQ2lyY2xlRHJhd2VyXCIpO1xuYXN5bmMgZnVuY3Rpb24gbG9hZENpcmNsZVNoYXBlKGVuZ2luZSwgcmVmcmVzaCA9IHRydWUpIHtcbiAgICBhd2FpdCBlbmdpbmUuYWRkU2hhcGUoXCJjaXJjbGVcIiwgbmV3IENpcmNsZURyYXdlcl8xLkNpcmNsZURyYXdlcigpLCByZWZyZXNoKTtcbn1cbmV4cG9ydHMubG9hZENpcmNsZVNoYXBlID0gbG9hZENpcmNsZVNoYXBlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/tsparticles-shape-circle/cjs/index.js\n");

/***/ })

};
;