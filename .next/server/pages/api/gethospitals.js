"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/gethospitals";
exports.ids = ["pages/api/gethospitals"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/middleware/mongoose.js":
/*!************************************!*\
  !*** ./src/middleware/mongoose.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDb = (handler)=>async (req, res)=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n            return handler(req, res);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        return handler(req, res);\n    };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbWlkZGxld2FyZS9tb25nb29zZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxHQUFHQyxDQUFBQSxPQUFPLEdBQUksT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUc7UUFDM0MsSUFBSUosMkVBQWtDLEVBQUM7WUFDbkMsT0FBT0UsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQztTQUMzQjtRQUNELE1BQU1KLHVEQUFnQixDQUFDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO1FBQzdDLE9BQU9SLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztLQUM1QjtBQUVELGlFQUFlSCxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXltZW50Ly4vc3JjL21pZGRsZXdhcmUvbW9uZ29vc2UuanM/ZDcyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0RGIgPSBoYW5kbGVyID0+IGFzeW5jIChyZXEsIHJlcyk9PntcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKXtcclxuICAgICAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcylcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKVxyXG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0RGI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/middleware/mongoose.js\n");

/***/ }),

/***/ "(api)/./src/models/Hospital.js":
/*!********************************!*\
  !*** ./src/models/Hospital.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst HospitalSchema = new mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    desc: {\n        type: String,\n        required: true\n    },\n    img: {\n        type: String,\n        required: true\n    },\n    profile: {\n        type: String,\n        required: true\n    },\n    service1: {\n        type: String,\n        required: true\n    },\n    service2: {\n        type: String,\n        required: true\n    },\n    service3: {\n        type: String,\n        required: true\n    },\n    service4: {\n        type: String,\n        required: true\n    },\n    service5: {\n        type: String,\n        required: true\n    },\n    company: {\n        type: String,\n        required: true\n    },\n    locationimg: {\n        type: String,\n        required: true\n    },\n    place: {\n        type: String,\n        required: true\n    },\n    location: {\n        type: String,\n        required: true\n    },\n    category: {\n        type: String,\n        required: true\n    },\n    date: {\n        type: String,\n        required: true\n    },\n    slot: {\n        type: String,\n        required: true\n    },\n    price: {\n        type: Number,\n        required: true\n    },\n    availableQty: {\n        type: Number,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"Hospital\", HospitalSchema)); //export default mongoose.model.Hospital || mongoose.model(\"Hospital\", HospitalSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbW9kZWxzL0hvc3BpdGFsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQVUsQ0FBQztBQUVwQyxNQUFNQyxjQUFjLEdBQUcsSUFBSUYsUUFBUSxDQUFDRyxNQUFNLENBQUM7SUFDdkNDLEtBQUssRUFBRTtRQUFDQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztJQUNyQ0MsSUFBSSxFQUFFO1FBQUNILElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFRSxNQUFNLEVBQUUsSUFBSTtLQUFDO0lBQ2xEQyxJQUFJLEVBQUU7UUFBQ0wsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUM7SUFDcENJLEdBQUcsRUFBRTtRQUFDTixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztJQUNuQ0ssT0FBTyxFQUFFO1FBQUNQLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFDO0lBQ3ZDTSxRQUFRLEVBQUU7UUFBQ1IsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUM7SUFDeENPLFFBQVEsRUFBRTtRQUFDVCxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztJQUN4Q1EsUUFBUSxFQUFFO1FBQUNWLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFDO0lBQ3hDUyxRQUFRLEVBQUU7UUFBQ1gsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUM7SUFDeENVLFFBQVEsRUFBRTtRQUFDWixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztJQUN4Q1csT0FBTyxFQUFFO1FBQUNiLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFDO0lBQ3ZDWSxXQUFXLEVBQUU7UUFBQ2QsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUM7SUFDM0NhLEtBQUssRUFBRTtRQUFDZixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztJQUNyQ2MsUUFBUSxFQUFFO1FBQUNoQixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztJQUN4Q2UsUUFBUSxFQUFFO1FBQUNqQixJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBQztJQUN4Q2dCLElBQUksRUFBRTtRQUFDbEIsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUM7SUFDcENpQixJQUFJLEVBQUU7UUFBQ25CLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtLQUFDO0lBQ3BDa0IsS0FBSyxFQUFFO1FBQUNwQixJQUFJLEVBQUVxQixNQUFNO1FBQUVuQixRQUFRLEVBQUUsSUFBSTtLQUFDO0lBQ3JDb0IsWUFBWSxFQUFFO1FBQUN0QixJQUFJLEVBQUVxQixNQUFNO1FBQUVuQixRQUFRLEVBQUUsSUFBSTtLQUFDO0NBRS9DLEVBQUU7SUFBQ3FCLFVBQVUsRUFBRSxJQUFJO0NBQUMsQ0FBRTtBQUV2QjVCLFFBQVEsQ0FBQzZCLE1BQU0sR0FBRyxFQUFFO0FBQ3BCLGlFQUFlN0IsUUFBUSxDQUFDOEIsS0FBSyxDQUFDLFVBQVUsRUFBRTVCLGNBQWMsQ0FBQyxFQUFDLENBQzFELHVGQUF1RiIsInNvdXJjZXMiOlsid2VicGFjazovL3BheW1lbnQvLi9zcmMvbW9kZWxzL0hvc3BpdGFsLmpzPzNmMTgiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IEhvc3BpdGFsU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICB0aXRsZToge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgc2x1Zzoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZX0sXHJcbiAgICBkZXNjOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBpbWc6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHByb2ZpbGU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHNlcnZpY2UxOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBzZXJ2aWNlMjoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgc2VydmljZTM6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHNlcnZpY2U0OiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBzZXJ2aWNlNToge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgY29tcGFueToge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgbG9jYXRpb25pbWc6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHBsYWNlOiB7dHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBsb2NhdGlvbjoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxyXG4gICAgY2F0ZWdvcnk6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIGRhdGU6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHNsb3Q6IHt0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgIHByaWNlOiB7dHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZX0sXHJcbiAgICBhdmFpbGFibGVRdHk6IHt0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlfSxcclxuICAgXHJcbn0sIHt0aW1lc3RhbXBzOiB0cnVlfSApO1xyXG5cclxubW9uZ29vc2UubW9kZWxzID0ge31cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoXCJIb3NwaXRhbFwiLCBIb3NwaXRhbFNjaGVtYSk7XHJcbi8vZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwuSG9zcGl0YWwgfHwgbW9uZ29vc2UubW9kZWwoXCJIb3NwaXRhbFwiLCBIb3NwaXRhbFNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkhvc3BpdGFsU2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJzbHVnIiwidW5pcXVlIiwiZGVzYyIsImltZyIsInByb2ZpbGUiLCJzZXJ2aWNlMSIsInNlcnZpY2UyIiwic2VydmljZTMiLCJzZXJ2aWNlNCIsInNlcnZpY2U1IiwiY29tcGFueSIsImxvY2F0aW9uaW1nIiwicGxhY2UiLCJsb2NhdGlvbiIsImNhdGVnb3J5IiwiZGF0ZSIsInNsb3QiLCJwcmljZSIsIk51bWJlciIsImF2YWlsYWJsZVF0eSIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/models/Hospital.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/gethospitals.js":
/*!***************************************!*\
  !*** ./src/pages/api/gethospitals.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Hospital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/Hospital */ \"(api)/./src/models/Hospital.js\");\n/* harmony import */ var _middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../middleware/mongoose */ \"(api)/./src/middleware/mongoose.js\");\n\n\nconst handler = async (req, res)=>{\n    let hospitals = await _models_Hospital__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json({\n        hospitals\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_mongoose__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldGhvc3BpdGFscy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDSztBQUdqRCxNQUFNRSxPQUFPLEdBQUksT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUk7SUFDaEMsSUFBSUMsU0FBUyxHQUFHLE1BQU1MLDZEQUFhLEVBQUU7SUFJckNJLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0gsU0FBUztLQUFDLENBQUM7Q0FDcEM7QUFFRCxpRUFBZUosZ0VBQVMsQ0FBQ0MsT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXltZW50Ly4vc3JjL3BhZ2VzL2FwaS9nZXRob3NwaXRhbHMuanM/MGQyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9zcGl0YWwgZnJvbSBcIi4uLy4uL21vZGVscy9Ib3NwaXRhbFwiXHJcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIi4uLy4uL21pZGRsZXdhcmUvbW9uZ29vc2VcIlxyXG5cclxuXHJcbmNvbnN0IGhhbmRsZXIgPSAgYXN5bmMgKHJlcSwgcmVzKT0+IHtcclxuICAgIGxldCBob3NwaXRhbHMgPSBhd2FpdCBIb3NwaXRhbC5maW5kKClcclxuICAgIFxyXG4gICBcclxuICAgIFxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe2hvc3BpdGFsc30pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYihoYW5kbGVyKTsiXSwibmFtZXMiOlsiSG9zcGl0YWwiLCJjb25uZWN0RGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaG9zcGl0YWxzIiwiZmluZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/gethospitals.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/gethospitals.js"));
module.exports = __webpack_exports__;

})();