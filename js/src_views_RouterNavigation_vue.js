"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_cli01"] = self["webpackChunkproject_cli01"] || []).push([["src_views_RouterNavigation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/RouterNavigation.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/RouterNavigation.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  methods: {\n    // 取得常用參數\n    getRoute() {\n      // 取得路由屬性\n      // this.$route\n      console.log('route', this.$route);\n\n      // 取得路由方法\n      // this.$router\n      console.log('router', this.$router);\n    },\n    // 以下都是 路由提供的方法\n    // 有歷史紀錄\n    push() {\n      // this.$router.push('dynamicrouter/e4732d57d6dbeaaf')\n\n      // 也可以用name\n      this.$router.push({\n        name: 'about'\n      });\n    },\n    // 無歷史紀錄\n    rplace() {\n      this.$router.replace({\n        name: 'about'\n      });\n    },\n    // 操作歷史紀錄，回上下一頁，帶入\n    // 負整數 -1 回上頁\n    // 正整數  1 下一頁\n    go() {\n      this.$router.go(-1);\n    },\n    // 延伸介紹\n    // 臨時要新增路由\n    addRoute() {\n      this.$router.addRoute({\n        path: '/newAbout',\n        name: 'newAbout',\n        component: () => __webpack_require__.e(/*! import() */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! ./AboutView.vue */ \"./src/views/AboutView.vue\"))\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack://project-cli01/./src/views/RouterNavigation.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/RouterNavigation.vue?vue&type=template&id=78441ff7":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/RouterNavigation.vue?vue&type=template&id=78441ff7 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"hr\", null, null, -1 /* HOISTED */);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"button\", {\n    type: \"button\",\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.getRoute && $options.getRoute(...args))\n  }, \"getRoute\"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"button\", {\n    type: \"button\",\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.push && $options.push(...args))\n  }, \"Push\"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"button\", {\n    type: \"button\",\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.rplace && $options.rplace(...args))\n  }, \"Rplace\"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"button\", {\n    type: \"button\",\n    onClick: _cache[3] || (_cache[3] = (...args) => $options.go && $options.go(...args))\n  }, \"Go\"), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"button\", {\n    type: \"button\",\n    onClick: _cache[4] || (_cache[4] = (...args) => $options.addRoute && $options.addRoute(...args))\n  }, \"新增路由\")], 64 /* STABLE_FRAGMENT */);\n}\n\n//# sourceURL=webpack://project-cli01/./src/views/RouterNavigation.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/RouterNavigation.vue":
/*!****************************************!*\
  !*** ./src/views/RouterNavigation.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RouterNavigation_vue_vue_type_template_id_78441ff7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RouterNavigation.vue?vue&type=template&id=78441ff7 */ \"./src/views/RouterNavigation.vue?vue&type=template&id=78441ff7\");\n/* harmony import */ var _RouterNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RouterNavigation.vue?vue&type=script&lang=js */ \"./src/views/RouterNavigation.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_RouterNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_RouterNavigation_vue_vue_type_template_id_78441ff7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/RouterNavigation.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://project-cli01/./src/views/RouterNavigation.vue?");

/***/ }),

/***/ "./src/views/RouterNavigation.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./src/views/RouterNavigation.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RouterNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RouterNavigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RouterNavigation.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/RouterNavigation.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://project-cli01/./src/views/RouterNavigation.vue?");

/***/ }),

/***/ "./src/views/RouterNavigation.vue?vue&type=template&id=78441ff7":
/*!**********************************************************************!*\
  !*** ./src/views/RouterNavigation.vue?vue&type=template&id=78441ff7 ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RouterNavigation_vue_vue_type_template_id_78441ff7__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RouterNavigation_vue_vue_type_template_id_78441ff7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RouterNavigation.vue?vue&type=template&id=78441ff7 */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/RouterNavigation.vue?vue&type=template&id=78441ff7\");\n\n\n//# sourceURL=webpack://project-cli01/./src/views/RouterNavigation.vue?");

/***/ })

}]);