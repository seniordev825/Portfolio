"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_src_app_api_contact_route_ts";
exports.ids = ["_rsc_src_app_api_contact_route_ts"];
exports.modules = {

/***/ "(rsc)/./src/app/api/contact/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/contact/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _config_postmark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config/postmark */ \"(rsc)/./src/config/postmark.js\");\n\nasync function POST(request) {\n    const body = await request.json();\n    try {\n        await _config_postmark__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sendEmail({\n            From: process.env.EMAIL_FROM,\n            To: process.env.EMAIL_TO,\n            Subject: \"Porfolio Contact Form\",\n            HtmlBody: `\n        <h1>Portfolio Contact Form</h1>\n        <p><strong>Name:</strong> ${body.person_name}</p>\n        <p><strong>Company:</strong> ${body.company}</p>\n        <p><strong>Message:</strong> ${body.message}</p>\n      `,\n            ReplyTo: body.email\n        });\n        return new Response(\"ok\", {\n            status: 200\n        });\n    } catch (e) {\n        return new Response(\"error\", {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9jb250YWN0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVDO0FBRWhDLGVBQWVDLEtBQUtDLE9BQWdCO0lBQ3pDLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUUsSUFBSTtJQUMvQixJQUFJO1FBQ0YsTUFBTUosd0RBQU1BLENBQUNLLFNBQVMsQ0FBQztZQUNyQkMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1lBQzVCQyxJQUFJSCxRQUFRQyxHQUFHLENBQUNHLFFBQVE7WUFDeEJDLFNBQVM7WUFDVEMsVUFBVSxDQUFDOztrQ0FFaUIsRUFBRVYsS0FBS1csV0FBVyxDQUFDO3FDQUNoQixFQUFFWCxLQUFLWSxPQUFPLENBQUM7cUNBQ2YsRUFBRVosS0FBS2EsT0FBTyxDQUFDO01BQzlDLENBQUM7WUFDREMsU0FBU2QsS0FBS2UsS0FBSztRQUNyQjtRQUNBLE9BQU8sSUFBSUMsU0FBUyxNQUFNO1lBQUVDLFFBQVE7UUFBSTtJQUMxQyxFQUFFLE9BQU9DLEdBQUc7UUFDVixPQUFPLElBQUlGLFNBQVMsU0FBUztZQUFFQyxRQUFRO1FBQUk7SUFDN0M7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9hcHAvYXBpL2NvbnRhY3Qvcm91dGUudHM/MDIwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50IGZyb20gJ0AvY29uZmlnL3Bvc3RtYXJrJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gIHRyeSB7XG4gICAgYXdhaXQgY2xpZW50LnNlbmRFbWFpbCh7XG4gICAgICBGcm9tOiBwcm9jZXNzLmVudi5FTUFJTF9GUk9NLFxuICAgICAgVG86IHByb2Nlc3MuZW52LkVNQUlMX1RPLFxuICAgICAgU3ViamVjdDogJ1BvcmZvbGlvIENvbnRhY3QgRm9ybScsXG4gICAgICBIdG1sQm9keTogYFxuICAgICAgICA8aDE+UG9ydGZvbGlvIENvbnRhY3QgRm9ybTwvaDE+XG4gICAgICAgIDxwPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4gJHtib2R5LnBlcnNvbl9uYW1lfTwvcD5cbiAgICAgICAgPHA+PHN0cm9uZz5Db21wYW55Ojwvc3Ryb25nPiAke2JvZHkuY29tcGFueX08L3A+XG4gICAgICAgIDxwPjxzdHJvbmc+TWVzc2FnZTo8L3N0cm9uZz4gJHtib2R5Lm1lc3NhZ2V9PC9wPlxuICAgICAgYCxcbiAgICAgIFJlcGx5VG86IGJvZHkuZW1haWwsXG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnb2snLCB7IHN0YXR1czogMjAwIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnZXJyb3InLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY2xpZW50IiwiUE9TVCIsInJlcXVlc3QiLCJib2R5IiwianNvbiIsInNlbmRFbWFpbCIsIkZyb20iLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfRlJPTSIsIlRvIiwiRU1BSUxfVE8iLCJTdWJqZWN0IiwiSHRtbEJvZHkiLCJwZXJzb25fbmFtZSIsImNvbXBhbnkiLCJtZXNzYWdlIiwiUmVwbHlUbyIsImVtYWlsIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/contact/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/config/postmark.js":
/*!********************************!*\
  !*** ./src/config/postmark.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar postmark = __webpack_require__(/*! postmark */ \"(rsc)/./node_modules/postmark/dist/index.js\");\n// Send an email:\nvar client = new postmark.ServerClient(process.env.POSTMARK_SERVER_CLIENT);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvY29uZmlnL3Bvc3RtYXJrLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV2QixpQkFBaUI7QUFDakIsSUFBSUMsU0FBUyxJQUFJRixTQUFTRyxZQUFZLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0Msc0JBQXNCO0FBRXpFLGlFQUFlSixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2NvbmZpZy9wb3N0bWFyay5qcz9kY2JjIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBwb3N0bWFyayA9IHJlcXVpcmUoJ3Bvc3RtYXJrJyk7XG5cbi8vIFNlbmQgYW4gZW1haWw6XG52YXIgY2xpZW50ID0gbmV3IHBvc3RtYXJrLlNlcnZlckNsaWVudChwcm9jZXNzLmVudi5QT1NUTUFSS19TRVJWRVJfQ0xJRU5UKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xuIl0sIm5hbWVzIjpbInBvc3RtYXJrIiwicmVxdWlyZSIsImNsaWVudCIsIlNlcnZlckNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUTUFSS19TRVJWRVJfQ0xJRU5UIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/config/postmark.js\n");

/***/ })

};
;