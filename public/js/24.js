(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./resources/js/Pages/Dashboard/Home.js":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Dashboard/Home.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/Layout */ \"./resources/js/Shared/Layout.js\");\n\n\n\n\n\nvar Home = function Home() {\n  var auth = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__[\"usePage\"])().props.auth;\n  console.log(auth.user);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Dashboard\")));\n}; // Persisten layout\n// Docs: https://inertiajs.com/pages#persistent-layouts\n\n\nHome.layout = function (page) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    children: page,\n    header: 'Dashboard'\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvRGFzaGJvYXJkL0hvbWUuanM/NzM0YyJdLCJuYW1lcyI6WyJIb21lIiwiYXV0aCIsInVzZVBhZ2UiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibGF5b3V0IiwicGFnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUEsTUFDTkMsSUFETSxHQUNHQyx3RUFBTyxHQUFHQyxLQURiLENBQ05GLElBRE07QUFFZEcsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQUksQ0FBQ0ssSUFBakI7QUFDQSxzQkFDSyxxRkFDSywyREFBQyxvREFBRCxxQkFDSyxzRkFETCxDQURMLENBREw7QUFRSixDQVhELEMsQ0FhQTtBQUNBOzs7QUFDQU4sSUFBSSxDQUFDTyxNQUFMLEdBQWMsVUFBQUMsSUFBSTtBQUFBLHNCQUFJLDJEQUFDLHNEQUFEO0FBQVEsWUFBUSxFQUFFQSxJQUFsQjtBQUF3QixVQUFNLEVBQUU7QUFBaEMsSUFBSjtBQUFBLENBQWxCOztBQUVlUixtRUFBZiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9QYWdlcy9EYXNoYm9hcmQvSG9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyBJbmVydGlhTGluaywgdXNlUGFnZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvU2hhcmVkL0xheW91dCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgIGNvbnN0IHsgYXV0aCB9ID0gdXNlUGFnZSgpLnByb3BzO1xuICAgICBjb25zb2xlLmxvZyhhdXRoLnVzZXIpO1xuICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+RGFzaGJvYXJkPC90aXRsZT5cbiAgICAgICAgICAgICAgIDwvSGVsbWV0PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICk7XG59O1xuXG4vLyBQZXJzaXN0ZW4gbGF5b3V0XG4vLyBEb2NzOiBodHRwczovL2luZXJ0aWFqcy5jb20vcGFnZXMjcGVyc2lzdGVudC1sYXlvdXRzXG5Ib21lLmxheW91dCA9IHBhZ2UgPT4gPExheW91dCBjaGlsZHJlbj17cGFnZX0gaGVhZGVyPXsnRGFzaGJvYXJkJ30gLz47XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Dashboard/Home.js\n");

/***/ })

}]);