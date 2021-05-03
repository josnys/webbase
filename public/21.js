(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/utils.js":
/*!*******************************!*\
  !*** ./resources/js/utils.js ***!
  \*******************************/
/*! exports provided: filesize, toFormData, createSlug, isPar, can */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filesize", function() { return filesize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFormData", function() { return toFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSlug", function() { return createSlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPar", function() { return isPar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "can", function() { return can; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function filesize(size) {
  var i = Math.floor(Math.log(size) / Math.log(1024));
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
} // Transforms key/value pairs to FormData() object

function toFormData() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
  var formData = new FormData();

  for (var _i = 0, _Object$keys = Object.keys(values); _i < _Object$keys.length; _i++) {
    var field = _Object$keys[_i];

    if (values[field] == 'true') {
      formData.append(field, 1);
    } else if (values[field] == 'false') {
      formData.append(field, 0);
    } else {
      formData.append(field, values[field]);
    }
  } // NOTE: When working with Laravel PUT/PATCH requests and FormData
  // you SHOULD send POST request and fake the PUT request like this.
  // More info: http://stackoverflow.com/q/50691938


  if (method.toUpperCase() === 'PUT') {
    formData.append('_method', 'PUT');
  }

  console.log('formData', formData);
  return formData;
}
function createSlug(string) {
  var _diactricMap;

  if (string.length == 0) {
    return "";
  }

  var diactricMap = (_diactricMap = {
    "á": "a",
    "à": "a",
    "ä": "a",
    "â": "a",
    "Á": "A",
    "À": "A",
    "Â": "A",
    "Ä": "A",
    "é": "e",
    "è": "e",
    "ë": "e",
    "ê": "e",
    "É": "E",
    "È": "E",
    "Ê": "E",
    "Ë": "E",
    "í": "i",
    "ì": "i",
    "ï": "i",
    "î": "i",
    "Í": "I",
    "Ì": "I",
    "Ï": "I",
    "Î": "I",
    "ö": "o",
    "ó": "o",
    "ò": "o",
    "ő": "o",
    "ô": "o"
  }, _defineProperty(_diactricMap, "\xF6", "o"), _defineProperty(_diactricMap, "Ö", "O"), _defineProperty(_diactricMap, "Ó", "O"), _defineProperty(_diactricMap, "Ő", "O"), _defineProperty(_diactricMap, "Ô", "O"), _defineProperty(_diactricMap, "\xD6", "O"), _defineProperty(_diactricMap, "ü", "u"), _defineProperty(_diactricMap, "ú", "u"), _defineProperty(_diactricMap, "ù", "u"), _defineProperty(_diactricMap, "ű", "u"), _defineProperty(_diactricMap, "\xFC", "u"), _defineProperty(_diactricMap, "û", "u"), _defineProperty(_diactricMap, "Ü", "U"), _defineProperty(_diactricMap, "Ú", "U"), _defineProperty(_diactricMap, "Ù", "U"), _defineProperty(_diactricMap, "Ű", "U"), _defineProperty(_diactricMap, "Û", "U"), _defineProperty(_diactricMap, "ç", "c"), _defineProperty(_diactricMap, "Ç", "C"), _defineProperty(_diactricMap, "'", ""), _defineProperty(_diactricMap, "’", ""), _defineProperty(_diactricMap, " ", "-"), _defineProperty(_diactricMap, ".", "-"), _diactricMap);
  var diactrics = Object.keys(diactricMap);

  for (var diactricIndex = 0; diactricIndex < diactrics.length; diactricIndex++) {
    var from = diactrics[diactricIndex];
    var to = diactricMap[from];
    string = string.replace(from, to);
  }

  return string.toLowerCase().replace(/[^a-z0-9_-]/gi, ''); // let accent = ['à', 'á', 'è', 'é', 'í', 'ì', 'ó', 'ò', 'ú', 'ù', 'ä', 'ë', 'ï', 'ö', 'ü', 'â', 'ê', 'î', 'ô', 'û', "'"];
  // let replace = ['a', 'a', 'e', 'e', 'i', 'i', 'o', 'o', 'u', 'u', 'a', 'e', 'i', 'i', 'u', 'a', 'e', 'i', 'o', 'u', ''];
  // let data = string.split('');
  // let result = '';
  // for(var i = 0; i < data.length; i++){
  //      if(accent.indexOf(data[i]) != -1){
  //           result += replace[accent.indexOf(data[i])];
  //      }else{
  //           result += data[i];
  //      }
  // }
  // return result.replace(' ', '-').toLowerCase();
}
function isPar(a) {
  var b = a % 2;

  if (b == 0) {
    return true;
  } else {
    return false;
  }
}
function can(user, permission) {
  if (user.can.indexOf(permission) > -1) {
    return true;
  }

  return false;
}

/***/ })

}]);