(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/Pages/Admin/User0/Index.js":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Admin/User0/Index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Layout */ "./resources/js/Shared/Layout.js");
/* harmony import */ var _Shared_DataContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/DataContainer */ "./resources/js/Shared/DataContainer.js");
/* harmony import */ var _Shared_DropdownButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Shared/DropdownButton */ "./resources/js/Shared/DropdownButton.js");
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/Icon */ "./resources/js/Shared/Icon.js");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Shared/Pagination */ "./resources/js/Shared/Pagination.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils.js");










var Index = function Index() {
  var _usePage$props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["usePage"])().props,
      auth = _usePage$props.auth,
      errors = _usePage$props.errors,
      data = _usePage$props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: "security-index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "max-w-7xl mx-auto p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    className: "font-semibold text-md text-gray-700 hover:text-gray-800 leading-tight",
    href: route('home')
  }, "Dashboard"), " | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-md text-gray-700 leading-tight"
  }, "Users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_DataContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-span-12"
  }, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["can"])(auth.user, 'create-user') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: route('user.create'),
    className: "bg-gray-300 hover:bg-gray-400 mr-2 text-gray-800 text-sm py-1 px-1 rounded inline-flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: 'plus',
    className: 'fill-current w-4 h-4 mr-2'
  }), "Add User"), Object(_utils__WEBPACK_IMPORTED_MODULE_8__["can"])(auth.user, 'read-role') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
    href: route('security.index'),
    className: "float-right bg-gray-300 hover:bg-gray-400 mr-2 text-gray-800 text-sm py-1 px-1 rounded inline-flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: 'key',
    className: 'fill-current w-4 h-4 mr-2'
  }), "Roles & Permissions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table-fixed col-span-12 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "bg-gray-300"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "px-4 py-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "px-4 py-2"
  }, "Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "px-4 py-2"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "px-4 py-2"
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "px-4 py-2"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "px-4 py-2"
  }, "Roles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "px-4 py-2"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data.data.map(function (_ref) {
    var id = _ref.id,
        code = _ref.code,
        name = _ref.name,
        username = _ref.username,
        email = _ref.email,
        avatar = _ref.avatar,
        roles = _ref.roles;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "border px-4 py-2"
    }, !avatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://ui-avatars.com/api/?name=".concat(name, "&amp;color=7F9CF5&amp;background=EBF4FF"),
      alt: name,
      className: "mx-auto h-8 w-8 rounded-full"
    }), avatar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: avatar,
      alt: name,
      className: "mx-auto h-8 w-8 rounded-full"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "border px-4 py-2"
    }, code), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "border px-4 py-2"
    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "border px-4 py-2"
    }, username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "border px-4 py-2"
    }, email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "border px-4 py-2"
    }, roles.join(', ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "border px-4 py-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_DropdownButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      caption: "Actions",
      color: "blue"
    }, Object(_utils__WEBPACK_IMPORTED_MODULE_8__["can"])(auth.user, 'update-user') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
      href: route('user.edit', id),
      className: "flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: 'edit',
      className: 'fill-current w-5 h-5 mr-2'
    }), "Edit"), Object(_utils__WEBPACK_IMPORTED_MODULE_8__["can"])(auth.user, 'change-password-user') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
      href: route('user.get.resetpassword', id),
      className: "flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: 'key',
      className: 'fill-current w-5 h-5 mr-2'
    }), "Change Password"), Object(_utils__WEBPACK_IMPORTED_MODULE_8__["can"])(auth.user, 'assign-role') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
      href: route('user.get.role', id),
      className: "flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: 'cheveron-right',
      className: 'fill-current w-5 h-5 mr-2'
    }), "Assign Role"), Object(_utils__WEBPACK_IMPORTED_MODULE_8__["can"])(auth.user, 'assign-role') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__["InertiaLink"], {
      href: route('user.get.store', id),
      className: "flex block px-6 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      name: 'office',
      className: 'fill-current w-5 h-5 mr-2'
    }), "Assign Store"))));
  }), !data.data.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "7",
    className: "p-4 bg-blue-100 text-blue-500 text-center"
  }, "No data found.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Pagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    links: data.links
  })));
}; // Persisten layout
// Docs: https://inertiajs.com/pages#persistent-layouts


Index.layout = function (page) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: page,
    header: 'Users'
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./resources/js/Shared/DataContainer.js":
/*!**********************************************!*\
  !*** ./resources/js/Shared/DataContainer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid grid-cols-3 gap-4 p-4 rounded bg-white shadow-md"
  }, children);
});

/***/ }),

/***/ "./resources/js/Shared/DropdownButton.js":
/*!***********************************************!*\
  !*** ./resources/js/Shared/DropdownButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var caption = _ref.caption,
      color = _ref.color,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["caption", "color", "children"]);

  var auth = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["usePage"])().props.auth;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpened = _useState2[0],
      setMenuOpened = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex items-center cursor-pointer select-none group",
    onClick: function onClick() {
      return setMenuOpened(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "inline-flex justify-center w-full rounded-md border border-".concat(color, "-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-").concat(color, "-700 hover:text-").concat(color, "-500 focus:outline-none focus:border-").concat(color, "-300 focus:ring-").concat(color, " active:bg-").concat(color, "-50 active:text-").concat(color, "-800 transition ease-in-out duration-150"),
    id: "options-menu",
    "aria-haspopup": "true",
    "aria-expanded": "true"
  }, caption, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "-mr-1 ml-2 h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: menuOpened ? '' : 'hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "whitespace-nowrap absolute z-20 mt-8 left-auto top-0 right-0 py-2 shadow-xl bg-white rounded text-sm"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: function onClick() {
      setMenuOpened(false);
    },
    className: "bg-black opacity-25 fixed inset-0 z-10"
  })));
});

/***/ }),

/***/ "./resources/js/Shared/Pagination.js":
/*!*******************************************!*\
  !*** ./resources/js/Shared/Pagination.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




var PageLink = function PageLink(_ref) {
  var active = _ref.active,
      label = _ref.label,
      url = _ref.url;
  var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(['mr-1 mb-1', 'px-4 py-3', 'border rounded', 'text-sm', 'hover:bg-white', 'focus:border-indigo-700 focus:text-indigo-700'], {
    'bg-white': active,
    'ml-auto': label === 'Next'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: className,
    href: url
  }, label);
}; // Previous, if on first page
// Next, if on last page
// and dots, if exists (...)


var PageInactive = function PageInactive(_ref2) {
  var label = _ref2.label;
  var className = classnames__WEBPACK_IMPORTED_MODULE_2___default()('mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray', {
    'ml-auto': label === 'Next'
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, label);
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var _ref3$links = _ref3.links,
      links = _ref3$links === void 0 ? [] : _ref3$links;
  // dont render, if there's only 1 page (previous, 1, next)
  if (links.length === 3) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-6 -mb-1 flex flex-wrap"
  }, links.map(function (_ref4) {
    var active = _ref4.active,
        label = _ref4.label,
        url = _ref4.url;
    return url === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageInactive, {
      key: label,
      label: label
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageLink, {
      key: label,
      label: label,
      active: active,
      url: url
    });
  }));
});

/***/ })

}]);