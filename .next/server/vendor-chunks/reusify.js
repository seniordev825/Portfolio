"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/reusify";
exports.ids = ["vendor-chunks/reusify"];
exports.modules = {

/***/ "(rsc)/./node_modules/reusify/reusify.js":
/*!*****************************************!*\
  !*** ./node_modules/reusify/reusify.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\nfunction reusify(Constructor) {\n    var head = new Constructor();\n    var tail = head;\n    function get() {\n        var current = head;\n        if (current.next) {\n            head = current.next;\n        } else {\n            head = new Constructor();\n            tail = head;\n        }\n        current.next = null;\n        return current;\n    }\n    function release(obj) {\n        tail.next = obj;\n        tail = obj;\n    }\n    return {\n        get: get,\n        release: release\n    };\n}\nmodule.exports = reusify;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmV1c2lmeS9yZXVzaWZ5LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsU0FBU0EsUUFBU0MsV0FBVztJQUMzQixJQUFJQyxPQUFPLElBQUlEO0lBQ2YsSUFBSUUsT0FBT0Q7SUFFWCxTQUFTRTtRQUNQLElBQUlDLFVBQVVIO1FBRWQsSUFBSUcsUUFBUUMsSUFBSSxFQUFFO1lBQ2hCSixPQUFPRyxRQUFRQyxJQUFJO1FBQ3JCLE9BQU87WUFDTEosT0FBTyxJQUFJRDtZQUNYRSxPQUFPRDtRQUNUO1FBRUFHLFFBQVFDLElBQUksR0FBRztRQUVmLE9BQU9EO0lBQ1Q7SUFFQSxTQUFTRSxRQUFTQyxHQUFHO1FBQ25CTCxLQUFLRyxJQUFJLEdBQUdFO1FBQ1pMLE9BQU9LO0lBQ1Q7SUFFQSxPQUFPO1FBQ0xKLEtBQUtBO1FBQ0xHLFNBQVNBO0lBQ1g7QUFDRjtBQUVBRSxPQUFPQyxPQUFPLEdBQUdWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3JldXNpZnkvcmV1c2lmeS5qcz9iMmU1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiByZXVzaWZ5IChDb25zdHJ1Y3Rvcikge1xuICB2YXIgaGVhZCA9IG5ldyBDb25zdHJ1Y3RvcigpXG4gIHZhciB0YWlsID0gaGVhZFxuXG4gIGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBoZWFkXG5cbiAgICBpZiAoY3VycmVudC5uZXh0KSB7XG4gICAgICBoZWFkID0gY3VycmVudC5uZXh0XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQgPSBuZXcgQ29uc3RydWN0b3IoKVxuICAgICAgdGFpbCA9IGhlYWRcbiAgICB9XG5cbiAgICBjdXJyZW50Lm5leHQgPSBudWxsXG5cbiAgICByZXR1cm4gY3VycmVudFxuICB9XG5cbiAgZnVuY3Rpb24gcmVsZWFzZSAob2JqKSB7XG4gICAgdGFpbC5uZXh0ID0gb2JqXG4gICAgdGFpbCA9IG9ialxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGdldCxcbiAgICByZWxlYXNlOiByZWxlYXNlXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXVzaWZ5XG4iXSwibmFtZXMiOlsicmV1c2lmeSIsIkNvbnN0cnVjdG9yIiwiaGVhZCIsInRhaWwiLCJnZXQiLCJjdXJyZW50IiwibmV4dCIsInJlbGVhc2UiLCJvYmoiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/reusify/reusify.js\n");

/***/ })

};
;