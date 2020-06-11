/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/custom-console/lib/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/custom-console/lib/index.esm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar DEFAULT_CONFIG = {\n  silent: true,\n  splitter: ' >>>>>> '\n};\n\nfunction initGlobalAPI(ConsoleLog) {\n  var configDef = {};\n\n  configDef.get = function () {\n    return DEFAULT_CONFIG;\n  };\n\n  configDef.set = function () {\n    customConsole.warn('[ConsoleLog warn]: 不要直接替换ConsoleLog的全局配置对象，应该设置单个字段。');\n  };\n\n  Object.defineProperty(ConsoleLog, 'config', configDef);\n}\n\nfunction _toArray(arr) {\n  return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();\n}\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\n\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n\n  return arr2;\n}\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nvar log = console.log;\nvar error = console.error;\nvar warn = console.warn;\n\nfunction normalizedLogParams(params) {\n  if (params.length === 1) {\n    return {\n      markName: '',\n      values: params\n    };\n  }\n\n  var _params = _toArray(params),\n      markName = _params[0],\n      values = _params.slice(1);\n\n  return {\n    markName: markName,\n    values: values\n  };\n}\n\nfunction customConsoleMixin(ConsoleLog) {\n  ConsoleLog.prototype.log = function () {\n    if (!ConsoleLog.config.silent) {\n      return;\n    }\n\n    for (var _len = arguments.length, pryload = new Array(_len), _key = 0; _key < _len; _key++) {\n      pryload[_key] = arguments[_key];\n    }\n\n    var _normalizedLogParams = normalizedLogParams(pryload),\n        markName = _normalizedLogParams.markName,\n        values = _normalizedLogParams.values;\n\n    log.apply(void 0, [markName, ConsoleLog.config.splitter].concat(_toConsumableArray(values)));\n  };\n\n  ConsoleLog.prototype.error = function () {\n    if (!ConsoleLog.config.silent) {\n      return;\n    }\n\n    for (var _len2 = arguments.length, pryload = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      pryload[_key2] = arguments[_key2];\n    }\n\n    var _normalizedLogParams2 = normalizedLogParams(pryload),\n        markName = _normalizedLogParams2.markName,\n        values = _normalizedLogParams2.values;\n\n    error.apply(void 0, [markName, ConsoleLog.config.splitter].concat(_toConsumableArray(values)));\n  };\n\n  ConsoleLog.prototype.warn = function () {\n    if (!ConsoleLog.config.silent) {\n      return;\n    }\n\n    for (var _len3 = arguments.length, pryload = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      pryload[_key3] = arguments[_key3];\n    }\n\n    var _normalizedLogParams3 = normalizedLogParams(pryload),\n        markName = _normalizedLogParams3.markName,\n        values = _normalizedLogParams3.values;\n\n    warn.apply(void 0, [markName, ConsoleLog.config.splitter].concat(_toConsumableArray(values)));\n  };\n}\n\nvar customConsole = {\n  log: log,\n  error: error,\n  warn: warn\n};\n/**\n * 1、全局开启、关闭信息输出\n * 2、可以指定某一类的控制台信息输出\n */\n\nfunction ConsoleLog() {\n  if (!(this instanceof ConsoleLog)) {\n    customConsole.warn('[ConsoleLog warn]: ConsoleLog需要使用new关键字实例化');\n  }\n\n  return;\n}\n\ninitGlobalAPI(ConsoleLog);\ncustomConsoleMixin(ConsoleLog);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConsoleLog);\n\n//# sourceURL=webpack:///./node_modules/custom-console/lib/index.esm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var custom_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! custom-console */ \"./node_modules/custom-console/lib/index.esm.js\");\n\nconst customConsole = new custom_console__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });