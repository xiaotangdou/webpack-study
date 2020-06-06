### 知识点
1、webpack打包原理及实现  
2、自定义loader及实现  
3、自定义plugin及实现  

构建过程中如何处理循环依赖

4、cjs/ejs
__webpack_require__(/*! ./a */ \"./src/es-module/a.js\")
```js
// cjs
(function(module, exports, __webpack_require__) {
eval("\n\n__webpack_require__.e(/*! require.ensure */ 0).then(().bind(null, __webpack_require__)).catch(__webpack_require__.oe)\n\n\n//# sourceURL=webpack:///./src/common-js/index.js?");
})

// "./src/common-js/a.js"
(function(module, exports) {
// moduele是当前文件对外暴露的对象，exports是module的一个属性也是当前模块和外部交互的唯一出口，  exports.a = 'a' 在exports对象上添加了个a属性
eval("\n\nexports.a = 'a'\n\n// exports.b = b\n\n// a = 'aaa'\n// b.b = 'bbb'\n\n// module.exports = {c: 'ccc'}\n\n//# sourceURL=webpack:///./src/common-js/a.js?");
})
// "./src/common-js/index.js"
(function(module, exports, __webpack_require__) {
eval("const { a, b } = __webpack_require__(/*! ./a */ \"./src/common-js/a.js\")\n// const c = require('./a')\n\nconsole.log(a, b)\n\nconsole.log(c)\n\n// require.ensure(['./a'], (a) => {\n//     console.log(a)\n// })\n\n\n//# sourceURL=webpack:///./src/common-js/index.js?");
})

// ejs
// "./src/es-module/a.js":
// 在module.exports.a = function() { return a; } 保存a，建立引用关系而不是声明
(function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval(`
    __webpack_require__.r(__webpack_exports__); 
    __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });
    __webpack_require__.d(__webpack_exports__, \"b\", function() { return b; });
    let a = 'a'
    a = 'aaa'
    let b = {b: 'b'}
    b.b='bbb'
`);
})

// "./src/es-module/index.js":
(function(module, __webpack_exports__, __webpack_require__) {
"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ \"./src/es-module/a.js\");\n\n\nconsole.log(_a__WEBPACK_IMPORTED_MODULE_0__[\"a\"], _a__WEBPACK_IMPORTED_MODULE_0__[\"b\"])\n\n\n//# sourceURL=webpack:///./src/es-module/index.js?");
})
```