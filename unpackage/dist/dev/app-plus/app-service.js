(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/main.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _index = _interopRequireDefault(__webpack_require__(/*! @/wxcomponents/wxml-to-canvas/index.vue */ 8));var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 21));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.component('wxml-to-canvas', _index.default);\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb21wb25lbnQiLCJXeG1sVG9DYW52YXMiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUIsMkdBQWdIO0FBQ25JLHdFLHduQ0FEc0ZBLGFBQUlDLFNBQUosQ0FBYyxnQkFBZCxFQUErQkMsY0FBL0I7O0FBR3RGRixhQUFJRyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7O0FBRUFDLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJUCxZQUFKO0FBQ0xLLFlBREssRUFBWjs7QUFHQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFd4bWxUb0NhbnZhcyBmcm9tICdAL3d4Y29tcG9uZW50cy93eG1sLXRvLWNhbnZhcy9pbmRleC52dWUnO1Z1ZS5jb21wb25lbnQoJ3d4bWwtdG8tY2FudmFzJyxXeG1sVG9DYW52YXMpO2ltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/pages.json ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!**************************************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/pages/index/index.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************************************************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yzw/my-projects/uniapp-wxml-to-canvas/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("image", { staticClass: _vm._$s(1, "sc", "logo"), attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "text-area"), attrs: { _i: 2 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(3, "sc", "title"), attrs: { _i: 3 } },
            [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.title)))]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**************************************************************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW90QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yzw/my-projects/uniapp-wxml-to-canvas/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello' };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ0aXRsZSIsIm9uTG9hZCIsIm1ldGhvZHMiXSwibWFwcGluZ3MiOiJ3RkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZEEsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTkMsV0FBSyxFQUFFLE9BREQsRUFBUDs7QUFHQSxHQUxhO0FBTWRDLFFBTmMsb0JBTUw7O0FBRVIsR0FSYTtBQVNkQyxTQUFPLEVBQUUsRUFUSyxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0dGl0bGU6ICdIZWxsbydcblx0XHR9XG5cdH0sXG5cdG9uTG9hZCgpIHtcblxuXHR9LFxuXHRtZXRob2RzOiB7XG5cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/*!******************************************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/wxcomponents/wxml-to-canvas/index.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2b96cacc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2b96cacc& */ 9);\n/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2b96cacc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2b96cacc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2b96cacc___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"wxcomponents/wxml-to-canvas/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0g7QUFDbEg7QUFDeUQ7QUFDTDs7O0FBR3BEO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiOTZjYWNjJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid3hjb21wb25lbnRzL3d4bWwtdG8tY2FudmFzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/wxcomponents/wxml-to-canvas/index.vue?vue&type=template&id=2b96cacc& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2b96cacc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2b96cacc& */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2b96cacc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2b96cacc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2b96cacc___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2b96cacc___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yzw/my-projects/uniapp-wxml-to-canvas/wxcomponents/wxml-to-canvas/index.vue?vue&type=template&id=2b96cacc& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "uni-shadow-root",
    { staticClass: _vm._$s(0, "sc", "wxml-to-canvas-index"), attrs: { _i: 0 } },
    [
      _c("canvas", {
        style: _vm._$s(
          1,
          "s",
          "width: " + _vm.width + "px; height: " + _vm.height + "px;"
        ),
        attrs: { id: "canvas", _i: 1 }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!*******************************************************************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/wxcomponents/wxml-to-canvas/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ 12);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlzQixDQUFnQiwyc0JBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yzw/my-projects/uniapp-wxml-to-canvas/wxcomponents/wxml-to-canvas/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global, Component, wx) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _inherits(subClass, superClass) {if (typeof superClass !== \"function\" && superClass !== null) {throw new TypeError(\"Super expression must either be null or a function\");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === \"object\" || typeof call === \"function\")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === \"function\") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n\n\nglobal['__wxVueOptions'] = { components: {} };\n\nglobal['__wxRoute'] = 'wxml-to-canvas/index'(\nfunction webpackUniversalModuleDefinition(root, factory) {\n  if (true)\n  module.exports = factory();else\n  { var i, a; }\n})(window, function () {\n  return (/******/function (modules) {// webpackBootstrap\n      /******/ // The module cache\n      /******/var installedModules = {};\n      /******/\n      /******/ // The require function\n      /******/function __webpack_require__(moduleId) {\n        /******/\n        /******/ // Check if module is in cache\n        /******/if (installedModules[moduleId]) {\n          /******/return installedModules[moduleId].exports;\n          /******/}\n        /******/ // Create a new module (and put it into the cache)\n        /******/var module = installedModules[moduleId] = {\n          /******/i: moduleId,\n          /******/l: false,\n          /******/exports: {}\n          /******/ };\n        /******/\n        /******/ // Execute the module function\n        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n        /******/\n        /******/ // Flag the module as loaded\n        /******/module.l = true;\n        /******/\n        /******/ // Return the exports of the module\n        /******/return module.exports;\n        /******/}\n      /******/\n      /******/\n      /******/ // expose the modules object (__webpack_modules__)\n      /******/__webpack_require__.m = modules;\n      /******/\n      /******/ // expose the module cache\n      /******/__webpack_require__.c = installedModules;\n      /******/\n      /******/ // define getter function for harmony exports\n      /******/__webpack_require__.d = function (exports, name, getter) {\n        /******/if (!__webpack_require__.o(exports, name)) {\n          /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });\n          /******/}\n        /******/};\n      /******/\n      /******/ // define __esModule on exports\n      /******/__webpack_require__.r = function (exports) {\n        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n          /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n          /******/}\n        /******/Object.defineProperty(exports, '__esModule', { value: true });\n        /******/};\n      /******/\n      /******/ // create a fake namespace object\n      /******/ // mode & 1: value is a module id, require it\n      /******/ // mode & 2: merge all properties of value into the ns\n      /******/ // mode & 4: return value when already ns object\n      /******/ // mode & 8|1: behave like require\n      /******/__webpack_require__.t = function (value, mode) {\n        /******/if (mode & 1) value = __webpack_require__(value);\n        /******/if (mode & 8) return value;\n        /******/if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;\n        /******/var ns = Object.create(null);\n        /******/__webpack_require__.r(ns);\n        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });\n        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {__webpack_require__.d(ns, key, function (key) {return value[key];}.bind(null, key));}\n        /******/return ns;\n        /******/};\n      /******/\n      /******/ // getDefaultExport function for compatibility with non-harmony modules\n      /******/__webpack_require__.n = function (module) {\n        /******/var getter = module && module.__esModule ?\n        /******/function getDefault() {return module['default'];} :\n        /******/function getModuleExports() {return module;};\n        /******/__webpack_require__.d(getter, 'a', getter);\n        /******/return getter;\n        /******/};\n      /******/\n      /******/ // Object.prototype.hasOwnProperty.call\n      /******/__webpack_require__.o = function (object, property) {return Object.prototype.hasOwnProperty.call(object, property);};\n      /******/\n      /******/ // __webpack_public_path__\n      /******/__webpack_require__.p = \"\";\n      /******/\n      /******/\n      /******/ // Load entry module and return exports\n      /******/return __webpack_require__(__webpack_require__.s = 0);\n      /******/}(\n    /************************************************************************/\n    /******/[\n    /* 0 */\n    /***/function (module, exports, __webpack_require__) {\n\n\n      var xmlParse = __webpack_require__(1);var _webpack_require__ =\n      __webpack_require__(2),Widget = _webpack_require__.Widget;var _webpack_require__2 =\n      __webpack_require__(5),Draw = _webpack_require__2.Draw;\n\n      Component({\n        properties: {\n          width: {\n            type: Number,\n            value: 400 },\n\n          height: {\n            type: Number,\n            value: 300 } },\n\n\n        lifetimes: {\n          attached: function attached() {var _this = this;\n            var dpr = wx.getSystemInfoSync().pixelRatio;\n            var query = this.createSelectorQuery();\n            this.dpr = dpr;\n            query.select('#canvas').\n            fields({ node: true, size: true }).\n            exec(function (res) {\n              var canvas = res[0].node;\n              var ctx = canvas.getContext('2d');\n              canvas.width = res[0].width * dpr;\n              canvas.height = res[0].height * dpr;\n              ctx.scale(dpr, dpr);\n              _this.ctx = ctx;\n              _this.canvas = canvas;\n            });\n          } },\n\n        methods: {\n          renderToCanvas: function renderToCanvas(args) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var wxml, style, ctx, canvas, _xmlParse, xom, widget, container, draw;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                      wxml = args.wxml, style = args.style;\n\n                      // 清空画布\n                      ctx = _this2.ctx;\n                      canvas = _this2.canvas;if (!(\n                      !ctx || !canvas)) {_context.next = 5;break;}return _context.abrupt(\"return\",\n                      Promise.reject(new Error('renderToCanvas: fail canvas has not been created')));case 5:\n\n\n                      ctx.clearRect(0, 0, _this2.data.width, _this2.data.height);_xmlParse =\n                      xmlParse(wxml), xom = _xmlParse.root;\n\n                      widget = new Widget(xom, style);\n                      container = widget.init();\n                      _this2.boundary = {\n                        top: container.layoutBox.top,\n                        left: container.layoutBox.left,\n                        width: container.computedStyle.width,\n                        height: container.computedStyle.height };\n\n                      draw = new Draw(canvas, ctx);_context.next = 13;return (\n                        draw.drawNode(container));case 13:return _context.abrupt(\"return\",\n                      Promise.resolve(container));case 14:case \"end\":return _context.stop();}}}, _callee);}))();\n          },\n\n          canvasToTempFilePath: function canvasToTempFilePath() {var _this3 = this;var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n            return new Promise(function (resolve, reject) {var _this3$boundary =\n\n\n              _this3.boundary,top = _this3$boundary.top,left = _this3$boundary.left,width = _this3$boundary.width,height = _this3$boundary.height;\n              wx.canvasToTempFilePath({\n                x: left,\n                y: top,\n                width: width,\n                height: height,\n                destWidth: width * _this3.dpr,\n                destHeight: height * _this3.dpr,\n                canvas: _this3.canvas,\n                fileType: args.fileType || 'png',\n                quality: args.quality || 1,\n                success: resolve,\n                fail: reject });\n\n            });\n          } } });\n\n\n\n\n      /***/},\n    /* 1 */\n    /***/function (module, exports) {\n\n\n      /**\n                                      * Module dependencies.\n                                      */\n\n\n      /**\n                                          * Expose `parse`.\n                                          */\n\n\n      /**\n                                              * Parse the given string of `xml`.\n                                              *\n                                              * @param {String} xml\n                                              * @return {Object}\n                                              * @api public\n                                              */\n\n      function parse(xml) {\n        xml = xml.trim();\n\n        // strip comments\n        xml = xml.replace(/<!--[\\s\\S]*?-->/g, '');\n\n        return document();\n\n        /**\n                            * XML document.\n                            */\n\n        function document() {\n          return {\n            declaration: declaration(),\n            root: tag() };\n\n        }\n\n        /**\n           * Declaration.\n           */\n\n        function declaration() {\n          var m = match(/^<\\?xml\\s*/);\n          if (!m) return;\n\n          // tag\n          var node = {\n            attributes: {} };\n\n\n          // attributes\n          while (!(eos() || is('?>'))) {\n            var attr = attribute();\n            if (!attr) return node;\n            node.attributes[attr.name] = attr.value;\n          }\n\n          match(/\\?>\\s*/);\n\n          return node;\n        }\n\n        /**\n           * Tag.\n           */\n\n        function tag() {\n          var m = match(/^<([\\w-:.]+)\\s*/);\n          if (!m) return;\n\n          // name\n          var node = {\n            name: m[1],\n            attributes: {},\n            children: [] };\n\n\n          // attributes\n          while (!(eos() || is('>') || is('?>') || is('/>'))) {\n            var attr = attribute();\n            if (!attr) return node;\n            node.attributes[attr.name] = attr.value;\n          }\n\n          // self closing tag\n          if (match(/^\\s*\\/>\\s*/)) {\n            return node;\n          }\n\n          match(/\\??>\\s*/);\n\n          // content\n          node.content = content();\n\n          // children\n          var child;\n          while (child = tag()) {\n            node.children.push(child);\n          }\n\n          // closing\n          match(/^<\\/[\\w-:.]+>\\s*/);\n\n          return node;\n        }\n\n        /**\n           * Text content.\n           */\n\n        function content() {\n          var m = match(/^([^<]*)/);\n          if (m) return m[1];\n          return '';\n        }\n\n        /**\n           * Attribute.\n           */\n\n        function attribute() {\n          var m = match(/([\\w:-]+)\\s*=\\s*(\"[^\"]*\"|'[^']*'|\\w+)\\s*/);\n          if (!m) return;\n          return { name: m[1], value: strip(m[2]) };\n        }\n\n        /**\n           * Strip quotes from `val`.\n           */\n\n        function strip(val) {\n          return val.replace(/^['\"]|['\"]$/g, '');\n        }\n\n        /**\n           * Match `re` and advance the string.\n           */\n\n        function match(re) {\n          var m = xml.match(re);\n          if (!m) return;\n          xml = xml.slice(m[0].length);\n          return m;\n        }\n\n        /**\n           * End-of-source.\n           */\n\n        function eos() {\n          return xml.length == 0;\n        }\n\n        /**\n           * Check for `prefix`.\n           */\n\n        function is(prefix) {\n          return xml.indexOf(prefix) == 0;\n        }\n      }\n\n      module.exports = parse;\n\n\n      /***/},\n    /* 2 */\n    /***/function (module, exports, __webpack_require__) {\n\n      var Block = __webpack_require__(3);var _webpack_require__3 =\n      __webpack_require__(4),splitLineToCamelCase = _webpack_require__3.splitLineToCamelCase;var\n\n      Element = /*#__PURE__*/function (_Block) {_inherits(Element, _Block);var _super = _createSuper(Element);\n        function Element(prop) {var _this4;_classCallCheck(this, Element);\n          _this4 = _super.call(this, prop.style);\n          _this4.name = prop.name;\n          _this4.attributes = prop.attributes;return _this4;\n        }return Element;}(Block);var\n\n\n\n      Widget = /*#__PURE__*/function () {\n        function Widget(xom, style) {_classCallCheck(this, Widget);\n          this.xom = xom;\n          this.style = style;\n\n          this.inheritProps = ['fontSize', 'lineHeight', 'textAlign', 'verticalAlign', 'color'];\n        }_createClass(Widget, [{ key: \"init\", value: function init()\n\n          {\n            this.container = this.create(this.xom);\n            this.container.layout();\n\n            this.inheritStyle(this.container);\n            return this.container;\n          }\n\n          // 继承父节点的样式\n        }, { key: \"inheritStyle\", value: function inheritStyle(node) {var _this5 = this;\n            var parent = node.parent || null;\n            var children = node.children || {};\n            var computedStyle = node.computedStyle;\n\n            if (parent) {\n              this.inheritProps.forEach(function (prop) {\n                computedStyle[prop] = computedStyle[prop] || parent.computedStyle[prop];\n              });\n            }\n\n            Object.values(children).forEach(function (child) {\n              _this5.inheritStyle(child);\n            });\n          } }, { key: \"create\", value: function create(\n\n          node) {var _this6 = this;\n            var classNames = (node.attributes.class || '').split(' ');\n            classNames = classNames.map(function (item) {return splitLineToCamelCase(item.trim());});\n            var style = {};\n            classNames.forEach(function (item) {\n              Object.assign(style, _this6.style[item] || {});\n            });\n\n            var args = { name: node.name, style: style };\n\n            var attrs = Object.keys(node.attributes);\n            var attributes = {};\n            for (var _i = 0, _attrs = attrs; _i < _attrs.length; _i++) {var attr = _attrs[_i];\n              var value = node.attributes[attr];\n              var CamelAttr = splitLineToCamelCase(attr);\n\n              if (value === '' || value === 'true') {\n                attributes[CamelAttr] = true;\n              } else if (value === 'false') {\n                attributes[CamelAttr] = false;\n              } else {\n                attributes[CamelAttr] = value;\n              }\n            }\n            attributes.text = node.content;\n            args.attributes = attributes;\n            var element = new Element(args);\n            node.children.forEach(function (childNode) {\n              var childElement = _this6.create(childNode);\n              element.add(childElement);\n            });\n            return element;\n          } }]);return Widget;}();\n\n\n      module.exports = { Widget: Widget };\n\n\n      /***/},\n    /* 3 */\n    /***/function (module, exports) {\n\n      module.exports = __webpack_require__(/*! ../widget-ui/index */ 19);\n\n      /***/},\n    /* 4 */\n    /***/function (module, exports) {\n\n      var hex = function hex(color) {\n        var result = null;\n\n        if (/^#/.test(color) && (color.length === 7 || color.length === 9)) {\n          return color;\n          // eslint-disable-next-line no-cond-assign\n        } else if ((result = /^(rgb|rgba)\\((.+)\\)/.exec(color)) !== null) {\n          return '#' + result[2].split(',').map(function (part, index) {\n            part = part.trim();\n            part = index === 3 ? Math.floor(parseFloat(part) * 255) : parseInt(part, 10);\n            part = part.toString(16);\n            if (part.length === 1) {\n              part = '0' + part;\n            }\n            return part;\n          }).join('');\n        } else {\n          return '#00000000';\n        }\n      };\n\n      var splitLineToCamelCase = function splitLineToCamelCase(str) {return str.split('-').map(function (part, index) {\n          if (index === 0) {\n            return part;\n          }\n          return part[0].toUpperCase() + part.slice(1);\n        }).join('');};\n\n      module.exports = {\n        hex: hex,\n        splitLineToCamelCase: splitLineToCamelCase };\n\n\n\n      /***/},\n    /* 5 */\n    /***/function (module, exports) {var\n\n      Draw = /*#__PURE__*/function () {\n        function Draw(canvas, context) {_classCallCheck(this, Draw);\n          this.canvas = canvas;\n          this.ctx = context;\n        }_createClass(Draw, [{ key: \"roundRect\", value: function roundRect(\n\n          x, y, w, h, r) {var fill = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;var stroke = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;\n            if (r < 0) return;\n            var ctx = this.ctx;\n\n            ctx.beginPath();\n            ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 3 / 2);\n            ctx.arc(x + w - r, y + r, r, Math.PI * 3 / 2, 0);\n            ctx.arc(x + w - r, y + h - r, r, 0, Math.PI / 2);\n            ctx.arc(x + r, y + h - r, r, Math.PI / 2, Math.PI);\n            ctx.lineTo(x, y + r);\n            if (stroke) ctx.stroke();\n            if (fill) ctx.fill();\n          } }, { key: \"drawView\", value: function drawView(\n\n          box, style) {\n            var ctx = this.ctx;var\n\n            x =\n            box.left,y = box.top,w = box.width,h = box.height;var _style$borderRadius =\n\n\n\n\n\n\n            style.borderRadius,borderRadius = _style$borderRadius === void 0 ? 0 : _style$borderRadius,_style$borderWidth = style.borderWidth,borderWidth = _style$borderWidth === void 0 ? 0 : _style$borderWidth,borderColor = style.borderColor,_style$color = style.color,color = _style$color === void 0 ? '#000' : _style$color,_style$backgroundColo = style.backgroundColor,backgroundColor = _style$backgroundColo === void 0 ? 'transparent' : _style$backgroundColo;\n            ctx.save();\n            // 外环\n            if (borderWidth > 0) {\n              ctx.fillStyle = borderColor || color;\n              this.roundRect(x, y, w, h, borderRadius);\n            }\n\n            // 内环\n            ctx.fillStyle = backgroundColor;\n            var innerWidth = w - 2 * borderWidth;\n            var innerHeight = h - 2 * borderWidth;\n            var innerRadius = borderRadius - borderWidth >= 0 ? borderRadius - borderWidth : 0;\n            this.roundRect(x + borderWidth, y + borderWidth, innerWidth, innerHeight, innerRadius);\n            ctx.restore();\n          } }, { key: \"drawImage\", value: function () {var _drawImage = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(\n\n            img, box, style) {var _this7 = this;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (\n                        new Promise(function (resolve, reject) {\n                          var ctx = _this7.ctx;\n                          var canvas = _this7.canvas;var _style$borderRadius2 =\n\n\n                          style.borderRadius,borderRadius = _style$borderRadius2 === void 0 ? 0 : _style$borderRadius2;var\n\n                          x =\n                          box.left,y = box.top,w = box.width,h = box.height;\n                          ctx.save();\n                          _this7.roundRect(x, y, w, h, borderRadius, false, false);\n                          ctx.clip();\n                          var Image = canvas.createImage();\n                          Image.onload = function () {\n                            ctx.drawImage(Image, x, y, w, h);\n                            ctx.restore();\n                            resolve();\n                          };\n                          Image.onerror = function () {reject();};\n                          Image.src = img;\n                        }));case 2:case \"end\":return _context2.stop();}}}, _callee2);}));function drawImage(_x, _x2, _x3) {return _drawImage.apply(this, arguments);}return drawImage;}()\n\n\n          // eslint-disable-next-line complexity\n        }, { key: \"drawText\", value: function drawText(text, box, style) {\n            var ctx = this.ctx;var\n\n            x =\n            box.left,y = box.top,w = box.width,h = box.height;var _style$color2 =\n\n\n\n\n\n\n\n            style.color,color = _style$color2 === void 0 ? '#000' : _style$color2,_style$lineHeight = style.lineHeight,lineHeight = _style$lineHeight === void 0 ? '1.4em' : _style$lineHeight,_style$fontSize = style.fontSize,fontSize = _style$fontSize === void 0 ? 14 : _style$fontSize,_style$textAlign = style.textAlign,textAlign = _style$textAlign === void 0 ? 'left' : _style$textAlign,_style$verticalAlign = style.verticalAlign,verticalAlign = _style$verticalAlign === void 0 ? 'top' : _style$verticalAlign,_style$backgroundColo2 = style.backgroundColor,backgroundColor = _style$backgroundColo2 === void 0 ? 'transparent' : _style$backgroundColo2;\n\n            if (!text || lineHeight > h) return;\n\n            ctx.save();\n            if (lineHeight) {// 2em\n              lineHeight = Math.ceil(parseFloat(lineHeight.replace('em')) * fontSize);\n            }\n            ctx.textBaseline = 'top';\n            ctx.font = \"\".concat(fontSize, \"px sans-serif\");\n            ctx.textAlign = textAlign;\n\n            // 背景色\n            ctx.fillStyle = backgroundColor;\n            this.roundRect(x, y, w, h, 0);\n\n            // 文字颜色\n            ctx.fillStyle = color;\n\n            // 水平布局\n            switch (textAlign) {\n              case 'left':\n                break;\n              case 'center':\n                x += 0.5 * w;\n                break;\n              case 'right':\n                x += w;\n                break;\n              default:break;}\n\n\n            var textWidth = ctx.measureText(text).width;\n            var actualHeight = Math.ceil(textWidth / w) * lineHeight;\n            var paddingTop = Math.ceil((h - actualHeight) / 2);\n            if (paddingTop < 0) paddingTop = 0;\n\n            // 垂直布局\n            switch (verticalAlign) {\n              case 'top':\n                break;\n              case 'middle':\n                y += paddingTop;\n                break;\n              case 'bottom':\n                y += 2 * paddingTop;\n                break;\n              default:break;}\n\n\n            var inlinePaddingTop = Math.ceil((lineHeight - fontSize) / 2);\n\n            // 不超过一行\n            if (textWidth <= w) {\n              ctx.fillText(text, x, y + inlinePaddingTop);\n              return;\n            }\n\n            // 多行文本\n            var chars = text.split('');\n            var _y = y;\n\n            // 逐行绘制\n            var line = '';var _iterator = _createForOfIteratorHelper(\n            chars),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var ch = _step.value;\n                var testLine = line + ch;\n                var testWidth = ctx.measureText(testLine).width;\n\n                if (testWidth > w) {\n                  ctx.fillText(line, x, y + inlinePaddingTop);\n                  y += lineHeight;\n                  line = ch;\n                  if (y + lineHeight > _y + h) break;\n                } else {\n                  line = testLine;\n                }\n              }\n\n              // 避免溢出\n            } catch (err) {_iterator.e(err);} finally {_iterator.f();}if (y + lineHeight <= _y + h) {\n              ctx.fillText(line, x, y + inlinePaddingTop);\n            }\n            ctx.restore();\n          } }, { key: \"drawNode\", value: function () {var _drawNode = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(\n\n            element) {var layoutBox, computedStyle, name, _element$attributes, src, text, childs, _i2, _childs, child;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:\n                      layoutBox = element.layoutBox, computedStyle = element.computedStyle, name = element.name;_element$attributes =\n                      element.attributes, src = _element$attributes.src, text = _element$attributes.text;if (!(\n                      name === 'view')) {_context3.next = 6;break;}\n                      this.drawView(layoutBox, computedStyle);_context3.next = 12;break;case 6:if (!(\n                      name === 'image')) {_context3.next = 11;break;}_context3.next = 9;return (\n                        this.drawImage(src, layoutBox, computedStyle));case 9:_context3.next = 12;break;case 11:\n                      if (name === 'text') {\n                        this.drawText(text, layoutBox, computedStyle);\n                      }case 12:\n                      childs = Object.values(element.children);_i2 = 0, _childs =\n                      childs;case 14:if (!(_i2 < _childs.length)) {_context3.next = 21;break;}child = _childs[_i2];_context3.next = 18;return (\n                        this.drawNode(child));case 18:_i2++;_context3.next = 14;break;case 21:case \"end\":return _context3.stop();}}}, _callee3, this);}));function drawNode(_x4) {return _drawNode.apply(this, arguments);}return drawNode;}() }]);return Draw;}();\n\n\n\n\n\n      module.exports = {\n        Draw: Draw };\n\n\n\n      /***/}\n    /******/]));\n});var _default =\nglobal['__wxComponents']['wxml-to-canvas/index'];exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/webpack/buildin/global.js */ 13), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 14)[\"Component\"], __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 14)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vd3hjb21wb25lbnRzL3d4bWwtdG8tY2FudmFzL2luZGV4LnZ1ZSJdLCJuYW1lcyI6WyJnbG9iYWwiLCJjb21wb25lbnRzIiwid2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJyb290IiwiZmFjdG9yeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ3aW5kb3ciLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwiZ2V0RGVmYXVsdCIsImdldE1vZHVsZUV4cG9ydHMiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJ4bWxQYXJzZSIsIldpZGdldCIsIkRyYXciLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwid2lkdGgiLCJ0eXBlIiwiTnVtYmVyIiwiaGVpZ2h0IiwibGlmZXRpbWVzIiwiYXR0YWNoZWQiLCJkcHIiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwicGl4ZWxSYXRpbyIsInF1ZXJ5IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImZpZWxkcyIsIm5vZGUiLCJzaXplIiwiZXhlYyIsInJlcyIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJzY2FsZSIsIm1ldGhvZHMiLCJyZW5kZXJUb0NhbnZhcyIsImFyZ3MiLCJ3eG1sIiwic3R5bGUiLCJQcm9taXNlIiwicmVqZWN0IiwiRXJyb3IiLCJjbGVhclJlY3QiLCJkYXRhIiwieG9tIiwid2lkZ2V0IiwiY29udGFpbmVyIiwiaW5pdCIsImJvdW5kYXJ5IiwidG9wIiwibGF5b3V0Qm94IiwibGVmdCIsImNvbXB1dGVkU3R5bGUiLCJkcmF3IiwiZHJhd05vZGUiLCJyZXNvbHZlIiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJ4IiwieSIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJmaWxlVHlwZSIsInF1YWxpdHkiLCJzdWNjZXNzIiwiZmFpbCIsInBhcnNlIiwieG1sIiwidHJpbSIsInJlcGxhY2UiLCJkb2N1bWVudCIsImRlY2xhcmF0aW9uIiwidGFnIiwibWF0Y2giLCJhdHRyaWJ1dGVzIiwiZW9zIiwiaXMiLCJhdHRyIiwiYXR0cmlidXRlIiwiY2hpbGRyZW4iLCJjb250ZW50IiwiY2hpbGQiLCJwdXNoIiwic3RyaXAiLCJ2YWwiLCJyZSIsInNsaWNlIiwibGVuZ3RoIiwicHJlZml4IiwiaW5kZXhPZiIsIkJsb2NrIiwic3BsaXRMaW5lVG9DYW1lbENhc2UiLCJFbGVtZW50IiwicHJvcCIsImluaGVyaXRQcm9wcyIsImxheW91dCIsImluaGVyaXRTdHlsZSIsInBhcmVudCIsImZvckVhY2giLCJ2YWx1ZXMiLCJjbGFzc05hbWVzIiwiY2xhc3MiLCJzcGxpdCIsIm1hcCIsIml0ZW0iLCJhc3NpZ24iLCJhdHRycyIsImtleXMiLCJDYW1lbEF0dHIiLCJ0ZXh0IiwiZWxlbWVudCIsImNoaWxkTm9kZSIsImNoaWxkRWxlbWVudCIsImFkZCIsInJlcXVpcmUiLCJoZXgiLCJjb2xvciIsInJlc3VsdCIsInRlc3QiLCJwYXJ0IiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUZsb2F0IiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsImpvaW4iLCJzdHIiLCJ0b1VwcGVyQ2FzZSIsImNvbnRleHQiLCJ3IiwiaCIsImZpbGwiLCJzdHJva2UiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsImxpbmVUbyIsImJveCIsImJvcmRlclJhZGl1cyIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzYXZlIiwiZmlsbFN0eWxlIiwicm91bmRSZWN0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiaW5uZXJSYWRpdXMiLCJyZXN0b3JlIiwiaW1nIiwiY2xpcCIsIkltYWdlIiwiY3JlYXRlSW1hZ2UiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJvbmVycm9yIiwic3JjIiwibGluZUhlaWdodCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwidmVydGljYWxBbGlnbiIsImNlaWwiLCJ0ZXh0QmFzZWxpbmUiLCJmb250IiwidGV4dFdpZHRoIiwibWVhc3VyZVRleHQiLCJhY3R1YWxIZWlnaHQiLCJwYWRkaW5nVG9wIiwiaW5saW5lUGFkZGluZ1RvcCIsImZpbGxUZXh0IiwiY2hhcnMiLCJfeSIsImxpbmUiLCJjaCIsInRlc3RMaW5lIiwidGVzdFdpZHRoIiwiZHJhd1ZpZXciLCJkcmF3VGV4dCIsImNoaWxkcyJdLCJtYXBwaW5ncyI6Im00SkFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0FBLE1BQU0sQ0FBQyxnQkFBRCxDQUFOLEdBQTJCLEVBQUNDLFVBQVUsRUFBQyxFQUFaLEVBQTNCOztBQUVBRCxNQUFNLENBQUMsV0FBRCxDQUFOLEdBQXNCO0FBQ3JCLFNBQVNFLGdDQUFULENBQTBDQyxJQUExQyxFQUFnREMsT0FBaEQsRUFBeUQ7QUFDekQsTUFBRyxJQUFIO0FBQ0NDLFFBQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsT0FBTyxFQUF4QixDQUREO0FBRUssZUFLSjtBQUNELENBVnFCLEVBVW5CRyxNQVZtQixFQVVYLFlBQVc7QUFDdEIsU0FBTyxTQUFVLFVBQVNDLE9BQVQsRUFBa0IsQ0FBRTtBQUNyQyxjQURtQyxDQUN6QjtBQUNWLGNBQVUsSUFBSUMsZ0JBQWdCLEdBQUcsRUFBdkI7QUFDVjtBQUNBLGNBSm1DLENBSXpCO0FBQ1YsY0FBVSxTQUFTQyxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBdUM7QUFDakQ7QUFDQSxnQkFGaUQsQ0FFdEM7QUFDWCxnQkFBVyxJQUFHRixnQkFBZ0IsQ0FBQ0UsUUFBRCxDQUFuQixF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QUNDLE9BQVAsR0FBaUI7QUFDZnlDLFlBQUksRUFBSkEsSUFEZSxFQUFqQjs7OztBQUtBLFdBQU87QUFDUCxZQTVrQlUsQ0F0Rk0sQ0FBaEI7QUFtcUJDLENBOXFCcUIsQ0FBdEIsQztBQStxQmUvQyxNQUFNLENBQUMsZ0JBQUQsQ0FBTixDQUF5QixzQkFBekIsQyIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG5cblxuZ2xvYmFsWydfX3d4VnVlT3B0aW9ucyddID0ge2NvbXBvbmVudHM6e319XG5cbmdsb2JhbFsnX193eFJvdXRlJ10gPSAnd3htbC10by1jYW52YXMvaW5kZXgnXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cbmNvbnN0IHhtbFBhcnNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKVxuY29uc3Qge1dpZGdldH0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpXG5jb25zdCB7RHJhd30gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpXG5cbkNvbXBvbmVudCh7XG4gIHByb3BlcnRpZXM6IHtcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDQwMFxuICAgIH0sXG4gICAgaGVpZ2h0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMzAwXG4gICAgfVxuICB9LFxuICBsaWZldGltZXM6IHtcbiAgICBhdHRhY2hlZCgpIHtcbiAgICAgIGNvbnN0IGRwciA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkucGl4ZWxSYXRpb1xuICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgdGhpcy5kcHIgPSBkcHJcbiAgICAgIHF1ZXJ5LnNlbGVjdCgnI2NhbnZhcycpXG4gICAgICAgIC5maWVsZHMoe25vZGU6IHRydWUsIHNpemU6IHRydWV9KVxuICAgICAgICAuZXhlYyhyZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IHJlc1swXS5ub2RlXG4gICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICAgICAgICBjYW52YXMud2lkdGggPSByZXNbMF0ud2lkdGggKiBkcHJcbiAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gcmVzWzBdLmhlaWdodCAqIGRwclxuICAgICAgICAgIGN0eC5zY2FsZShkcHIsIGRwcilcbiAgICAgICAgICB0aGlzLmN0eCA9IGN0eFxuICAgICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIH0pXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgcmVuZGVyVG9DYW52YXMoYXJncykge1xuICAgICAgY29uc3Qge3d4bWwsIHN0eWxlfSA9IGFyZ3NcblxuICAgICAgLy8g5riF56m655S75biDXG4gICAgICBjb25zdCBjdHggPSB0aGlzLmN0eFxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNcbiAgICAgIGlmICghY3R4IHx8ICFjYW52YXMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcigncmVuZGVyVG9DYW52YXM6IGZhaWwgY2FudmFzIGhhcyBub3QgYmVlbiBjcmVhdGVkJykpXG4gICAgICB9XG5cbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5kYXRhLndpZHRoLCB0aGlzLmRhdGEuaGVpZ2h0KVxuICAgICAgY29uc3Qge3Jvb3Q6IHhvbX0gPSB4bWxQYXJzZSh3eG1sKVxuXG4gICAgICBjb25zdCB3aWRnZXQgPSBuZXcgV2lkZ2V0KHhvbSwgc3R5bGUpXG4gICAgICBjb25zdCBjb250YWluZXIgPSB3aWRnZXQuaW5pdCgpXG4gICAgICB0aGlzLmJvdW5kYXJ5ID0ge1xuICAgICAgICB0b3A6IGNvbnRhaW5lci5sYXlvdXRCb3gudG9wLFxuICAgICAgICBsZWZ0OiBjb250YWluZXIubGF5b3V0Qm94LmxlZnQsXG4gICAgICAgIHdpZHRoOiBjb250YWluZXIuY29tcHV0ZWRTdHlsZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBjb250YWluZXIuY29tcHV0ZWRTdHlsZS5oZWlnaHQsXG4gICAgICB9XG4gICAgICBjb25zdCBkcmF3ID0gbmV3IERyYXcoY2FudmFzLCBjdHgpXG4gICAgICBhd2FpdCBkcmF3LmRyYXdOb2RlKGNvbnRhaW5lcilcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY29udGFpbmVyKVxuICAgIH0sXG5cbiAgICBjYW52YXNUb1RlbXBGaWxlUGF0aChhcmdzID0ge30pIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHRcbiAgICAgICAgfSA9IHRoaXMuYm91bmRhcnlcbiAgICAgICAgd3guY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgeTogdG9wLFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICBkZXN0V2lkdGg6IHdpZHRoICogdGhpcy5kcHIsXG4gICAgICAgICAgZGVzdEhlaWdodDogaGVpZ2h0ICogdGhpcy5kcHIsXG4gICAgICAgICAgY2FudmFzOiB0aGlzLmNhbnZhcyxcbiAgICAgICAgICBmaWxlVHlwZTogYXJncy5maWxlVHlwZSB8fCAncG5nJyxcbiAgICAgICAgICBxdWFsaXR5OiBhcmdzLnF1YWxpdHkgfHwgMSxcbiAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cblxuLyoqXG4gKiBFeHBvc2UgYHBhcnNlYC5cbiAqL1xuXG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBvZiBgeG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30geG1sXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHhtbCkge1xuICB4bWwgPSB4bWwudHJpbSgpXG5cbiAgLy8gc3RyaXAgY29tbWVudHNcbiAgeG1sID0geG1sLnJlcGxhY2UoLzwhLS1bXFxzXFxTXSo/LS0+L2csICcnKVxuXG4gIHJldHVybiBkb2N1bWVudCgpXG5cbiAgLyoqXG4gICAqIFhNTCBkb2N1bWVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZG9jdW1lbnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlY2xhcmF0aW9uOiBkZWNsYXJhdGlvbigpLFxuICAgICAgcm9vdDogdGFnKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVjbGFyYXRpb24uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGRlY2xhcmF0aW9uKCkge1xuICAgIGNvbnN0IG0gPSBtYXRjaCgvXjxcXD94bWxcXHMqLylcbiAgICBpZiAoIW0pIHJldHVyblxuXG4gICAgLy8gdGFnXG4gICAgY29uc3Qgbm9kZSA9IHtcbiAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgfVxuXG4gICAgLy8gYXR0cmlidXRlc1xuICAgIHdoaWxlICghKGVvcygpIHx8IGlzKCc/PicpKSkge1xuICAgICAgY29uc3QgYXR0ciA9IGF0dHJpYnV0ZSgpXG4gICAgICBpZiAoIWF0dHIpIHJldHVybiBub2RlXG4gICAgICBub2RlLmF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWVcbiAgICB9XG5cbiAgICBtYXRjaCgvXFw/PlxccyovKVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWcuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHRhZygpIHtcbiAgICBjb25zdCBtID0gbWF0Y2goL148KFtcXHctOi5dKylcXHMqLylcbiAgICBpZiAoIW0pIHJldHVyblxuXG4gICAgLy8gbmFtZVxuICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICBuYW1lOiBtWzFdLFxuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9XG5cbiAgICAvLyBhdHRyaWJ1dGVzXG4gICAgd2hpbGUgKCEoZW9zKCkgfHwgaXMoJz4nKSB8fCBpcygnPz4nKSB8fCBpcygnLz4nKSkpIHtcbiAgICAgIGNvbnN0IGF0dHIgPSBhdHRyaWJ1dGUoKVxuICAgICAgaWYgKCFhdHRyKSByZXR1cm4gbm9kZVxuICAgICAgbm9kZS5hdHRyaWJ1dGVzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlXG4gICAgfVxuXG4gICAgLy8gc2VsZiBjbG9zaW5nIHRhZ1xuICAgIGlmIChtYXRjaCgvXlxccypcXC8+XFxzKi8pKSB7XG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cblxuICAgIG1hdGNoKC9cXD8/PlxccyovKVxuXG4gICAgLy8gY29udGVudFxuICAgIG5vZGUuY29udGVudCA9IGNvbnRlbnQoKVxuXG4gICAgLy8gY2hpbGRyZW5cbiAgICBsZXQgY2hpbGRcbiAgICB3aGlsZSAoY2hpbGQgPSB0YWcoKSkge1xuICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKGNoaWxkKVxuICAgIH1cblxuICAgIC8vIGNsb3NpbmdcbiAgICBtYXRjaCgvXjxcXC9bXFx3LTouXSs+XFxzKi8pXG5cbiAgICByZXR1cm4gbm9kZVxuICB9XG5cbiAgLyoqXG4gICAqIFRleHQgY29udGVudC5cbiAgICovXG5cbiAgZnVuY3Rpb24gY29udGVudCgpIHtcbiAgICBjb25zdCBtID0gbWF0Y2goL14oW148XSopLylcbiAgICBpZiAobSkgcmV0dXJuIG1bMV1cbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGF0dHJpYnV0ZSgpIHtcbiAgICBjb25zdCBtID0gbWF0Y2goLyhbXFx3Oi1dKylcXHMqPVxccyooXCJbXlwiXSpcInwnW14nXSonfFxcdyspXFxzKi8pXG4gICAgaWYgKCFtKSByZXR1cm5cbiAgICByZXR1cm4ge25hbWU6IG1bMV0sIHZhbHVlOiBzdHJpcChtWzJdKX1cbiAgfVxuXG4gIC8qKlxuICAgKiBTdHJpcCBxdW90ZXMgZnJvbSBgdmFsYC5cbiAgICovXG5cbiAgZnVuY3Rpb24gc3RyaXAodmFsKSB7XG4gICAgcmV0dXJuIHZhbC5yZXBsYWNlKC9eWydcIl18WydcIl0kL2csICcnKVxuICB9XG5cbiAgLyoqXG4gICAqIE1hdGNoIGByZWAgYW5kIGFkdmFuY2UgdGhlIHN0cmluZy5cbiAgICovXG5cbiAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcbiAgICBjb25zdCBtID0geG1sLm1hdGNoKHJlKVxuICAgIGlmICghbSkgcmV0dXJuXG4gICAgeG1sID0geG1sLnNsaWNlKG1bMF0ubGVuZ3RoKVxuICAgIHJldHVybiBtXG4gIH1cblxuICAvKipcbiAgICogRW5kLW9mLXNvdXJjZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gZW9zKCkge1xuICAgIHJldHVybiB4bWwubGVuZ3RoID09IDBcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBmb3IgYHByZWZpeGAuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGlzKHByZWZpeCkge1xuICAgIHJldHVybiB4bWwuaW5kZXhPZihwcmVmaXgpID09IDBcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmNvbnN0IEJsb2NrID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKVxuY29uc3Qge3NwbGl0TGluZVRvQ2FtZWxDYXNlfSA9IF9fd2VicGFja19yZXF1aXJlX18oNClcblxuY2xhc3MgRWxlbWVudCBleHRlbmRzIEJsb2NrIHtcbiAgY29uc3RydWN0b3IocHJvcCkge1xuICAgIHN1cGVyKHByb3Auc3R5bGUpXG4gICAgdGhpcy5uYW1lID0gcHJvcC5uYW1lXG4gICAgdGhpcy5hdHRyaWJ1dGVzID0gcHJvcC5hdHRyaWJ1dGVzXG4gIH1cbn1cblxuXG5jbGFzcyBXaWRnZXQge1xuICBjb25zdHJ1Y3Rvcih4b20sIHN0eWxlKSB7XG4gICAgdGhpcy54b20gPSB4b21cbiAgICB0aGlzLnN0eWxlID0gc3R5bGVcblxuICAgIHRoaXMuaW5oZXJpdFByb3BzID0gWydmb250U2l6ZScsICdsaW5lSGVpZ2h0JywgJ3RleHRBbGlnbicsICd2ZXJ0aWNhbEFsaWduJywgJ2NvbG9yJ11cbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNyZWF0ZSh0aGlzLnhvbSlcbiAgICB0aGlzLmNvbnRhaW5lci5sYXlvdXQoKVxuXG4gICAgdGhpcy5pbmhlcml0U3R5bGUodGhpcy5jb250YWluZXIpXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyXG4gIH1cblxuICAvLyDnu6fmib/niLboioLngrnnmoTmoLflvI9cbiAgaW5oZXJpdFN0eWxlKG5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlLnBhcmVudCB8fCBudWxsXG4gICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuIHx8IHt9XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IG5vZGUuY29tcHV0ZWRTdHlsZVxuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhpcy5pbmhlcml0UHJvcHMuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgY29tcHV0ZWRTdHlsZVtwcm9wXSA9IGNvbXB1dGVkU3R5bGVbcHJvcF0gfHwgcGFyZW50LmNvbXB1dGVkU3R5bGVbcHJvcF1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgT2JqZWN0LnZhbHVlcyhjaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICB0aGlzLmluaGVyaXRTdHlsZShjaGlsZClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlKG5vZGUpIHtcbiAgICBsZXQgY2xhc3NOYW1lcyA9IChub2RlLmF0dHJpYnV0ZXMuY2xhc3MgfHwgJycpLnNwbGl0KCcgJylcbiAgICBjbGFzc05hbWVzID0gY2xhc3NOYW1lcy5tYXAoaXRlbSA9PiBzcGxpdExpbmVUb0NhbWVsQ2FzZShpdGVtLnRyaW0oKSkpXG4gICAgY29uc3Qgc3R5bGUgPSB7fVxuICAgIGNsYXNzTmFtZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHRoaXMuc3R5bGVbaXRlbV0gfHwge30pXG4gICAgfSlcblxuICAgIGNvbnN0IGFyZ3MgPSB7bmFtZTogbm9kZS5uYW1lLCBzdHlsZX1cblxuICAgIGNvbnN0IGF0dHJzID0gT2JqZWN0LmtleXMobm9kZS5hdHRyaWJ1dGVzKVxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuICAgIGZvciAoY29uc3QgYXR0ciBvZiBhdHRycykge1xuICAgICAgY29uc3QgdmFsdWUgPSBub2RlLmF0dHJpYnV0ZXNbYXR0cl1cbiAgICAgIGNvbnN0IENhbWVsQXR0ciA9IHNwbGl0TGluZVRvQ2FtZWxDYXNlKGF0dHIpXG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICd0cnVlJykge1xuICAgICAgICBhdHRyaWJ1dGVzW0NhbWVsQXR0cl0gPSB0cnVlXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICAgIGF0dHJpYnV0ZXNbQ2FtZWxBdHRyXSA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRyaWJ1dGVzW0NhbWVsQXR0cl0gPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgICBhdHRyaWJ1dGVzLnRleHQgPSBub2RlLmNvbnRlbnRcbiAgICBhcmdzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzXG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBFbGVtZW50KGFyZ3MpXG4gICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnQgPSB0aGlzLmNyZWF0ZShjaGlsZE5vZGUpXG4gICAgICBlbGVtZW50LmFkZChjaGlsZEVsZW1lbnQpXG4gICAgfSlcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1dpZGdldH1cblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vd2lkZ2V0LXVpL2luZGV4XCIpO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuY29uc3QgaGV4ID0gKGNvbG9yKSA9PiB7XG4gIGxldCByZXN1bHQgPSBudWxsXG5cbiAgaWYgKC9eIy8udGVzdChjb2xvcikgJiYgKGNvbG9yLmxlbmd0aCA9PT0gNyB8fCBjb2xvci5sZW5ndGggPT09IDkpKSB7XG4gICAgcmV0dXJuIGNvbG9yXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduXG4gIH0gZWxzZSBpZiAoKHJlc3VsdCA9IC9eKHJnYnxyZ2JhKVxcKCguKylcXCkvLmV4ZWMoY29sb3IpKSAhPT0gbnVsbCkge1xuICAgIHJldHVybiAnIycgKyByZXN1bHRbMl0uc3BsaXQoJywnKS5tYXAoKHBhcnQsIGluZGV4KSA9PiB7XG4gICAgICBwYXJ0ID0gcGFydC50cmltKClcbiAgICAgIHBhcnQgPSBpbmRleCA9PT0gMyA/IE1hdGguZmxvb3IocGFyc2VGbG9hdChwYXJ0KSAqIDI1NSkgOiBwYXJzZUludChwYXJ0LCAxMClcbiAgICAgIHBhcnQgPSBwYXJ0LnRvU3RyaW5nKDE2KVxuICAgICAgaWYgKHBhcnQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHBhcnQgPSAnMCcgKyBwYXJ0XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFydFxuICAgIH0pLmpvaW4oJycpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcjMDAwMDAwMDAnXG4gIH1cbn1cblxuY29uc3Qgc3BsaXRMaW5lVG9DYW1lbENhc2UgPSAoc3RyKSA9PiBzdHIuc3BsaXQoJy0nKS5tYXAoKHBhcnQsIGluZGV4KSA9PiB7XG4gIGlmIChpbmRleCA9PT0gMCkge1xuICAgIHJldHVybiBwYXJ0XG4gIH1cbiAgcmV0dXJuIHBhcnRbMF0udG9VcHBlckNhc2UoKSArIHBhcnQuc2xpY2UoMSlcbn0pLmpvaW4oJycpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoZXgsXG4gIHNwbGl0TGluZVRvQ2FtZWxDYXNlXG59XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbmNsYXNzIERyYXcge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgIHRoaXMuY3R4ID0gY29udGV4dFxuICB9XG5cbiAgcm91bmRSZWN0KHgsIHksIHcsIGgsIHIsIGZpbGwgPSB0cnVlLCBzdHJva2UgPSBmYWxzZSkge1xuICAgIGlmIChyIDwgMCkgcmV0dXJuXG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHhcblxuICAgIGN0eC5iZWdpblBhdGgoKVxuICAgIGN0eC5hcmMoeCArIHIsIHkgKyByLCByLCBNYXRoLlBJLCBNYXRoLlBJICogMyAvIDIpXG4gICAgY3R4LmFyYyh4ICsgdyAtIHIsIHkgKyByLCByLCBNYXRoLlBJICogMyAvIDIsIDApXG4gICAgY3R4LmFyYyh4ICsgdyAtIHIsIHkgKyBoIC0gciwgciwgMCwgTWF0aC5QSSAvIDIpXG4gICAgY3R4LmFyYyh4ICsgciwgeSArIGggLSByLCByLCBNYXRoLlBJIC8gMiwgTWF0aC5QSSlcbiAgICBjdHgubGluZVRvKHgsIHkgKyByKVxuICAgIGlmIChzdHJva2UpIGN0eC5zdHJva2UoKVxuICAgIGlmIChmaWxsKSBjdHguZmlsbCgpXG4gIH1cblxuICBkcmF3Vmlldyhib3gsIHN0eWxlKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5jdHhcbiAgICBjb25zdCB7XG4gICAgICBsZWZ0OiB4LCB0b3A6IHksIHdpZHRoOiB3LCBoZWlnaHQ6IGhcbiAgICB9ID0gYm94XG4gICAgY29uc3Qge1xuICAgICAgYm9yZGVyUmFkaXVzID0gMCxcbiAgICAgIGJvcmRlcldpZHRoID0gMCxcbiAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgY29sb3IgPSAnIzAwMCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnLFxuICAgIH0gPSBzdHlsZVxuICAgIGN0eC5zYXZlKClcbiAgICAvLyDlpJbnjq9cbiAgICBpZiAoYm9yZGVyV2lkdGggPiAwKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYm9yZGVyQ29sb3IgfHwgY29sb3JcbiAgICAgIHRoaXMucm91bmRSZWN0KHgsIHksIHcsIGgsIGJvcmRlclJhZGl1cylcbiAgICB9XG5cbiAgICAvLyDlhoXnjq9cbiAgICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHcgLSAyICogYm9yZGVyV2lkdGhcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IGggLSAyICogYm9yZGVyV2lkdGhcbiAgICBjb25zdCBpbm5lclJhZGl1cyA9IGJvcmRlclJhZGl1cyAtIGJvcmRlcldpZHRoID49IDAgPyBib3JkZXJSYWRpdXMgLSBib3JkZXJXaWR0aCA6IDBcbiAgICB0aGlzLnJvdW5kUmVjdCh4ICsgYm9yZGVyV2lkdGgsIHkgKyBib3JkZXJXaWR0aCwgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQsIGlubmVyUmFkaXVzKVxuICAgIGN0eC5yZXN0b3JlKClcbiAgfVxuXG4gIGFzeW5jIGRyYXdJbWFnZShpbWcsIGJveCwgc3R5bGUpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjdHggPSB0aGlzLmN0eFxuICAgICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzID0gMFxuICAgICAgfSA9IHN0eWxlXG4gICAgICBjb25zdCB7XG4gICAgICAgIGxlZnQ6IHgsIHRvcDogeSwgd2lkdGg6IHcsIGhlaWdodDogaFxuICAgICAgfSA9IGJveFxuICAgICAgY3R4LnNhdmUoKVxuICAgICAgdGhpcy5yb3VuZFJlY3QoeCwgeSwgdywgaCwgYm9yZGVyUmFkaXVzLCBmYWxzZSwgZmFsc2UpXG4gICAgICBjdHguY2xpcCgpXG4gICAgICBjb25zdCBJbWFnZSA9IGNhbnZhcy5jcmVhdGVJbWFnZSgpXG4gICAgICBJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoSW1hZ2UsIHgsIHksIHcsIGgpXG4gICAgICAgIGN0eC5yZXN0b3JlKClcbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICBJbWFnZS5vbmVycm9yID0gKCkgPT4geyByZWplY3QoKSB9XG4gICAgICBJbWFnZS5zcmMgPSBpbWdcbiAgICB9KVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgZHJhd1RleHQodGV4dCwgYm94LCBzdHlsZSkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuY3R4XG4gICAgbGV0IHtcbiAgICAgIGxlZnQ6IHgsIHRvcDogeSwgd2lkdGg6IHcsIGhlaWdodDogaFxuICAgIH0gPSBib3hcbiAgICBsZXQge1xuICAgICAgY29sb3IgPSAnIzAwMCcsXG4gICAgICBsaW5lSGVpZ2h0ID0gJzEuNGVtJyxcbiAgICAgIGZvbnRTaXplID0gMTQsXG4gICAgICB0ZXh0QWxpZ24gPSAnbGVmdCcsXG4gICAgICB2ZXJ0aWNhbEFsaWduID0gJ3RvcCcsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnXG4gICAgfSA9IHN0eWxlXG5cbiAgICBpZiAoIXRleHQgfHwgKGxpbmVIZWlnaHQgPiBoKSkgcmV0dXJuXG5cbiAgICBjdHguc2F2ZSgpXG4gICAgaWYgKGxpbmVIZWlnaHQpIHsgLy8gMmVtXG4gICAgICBsaW5lSGVpZ2h0ID0gTWF0aC5jZWlsKHBhcnNlRmxvYXQobGluZUhlaWdodC5yZXBsYWNlKCdlbScpKSAqIGZvbnRTaXplKVxuICAgIH1cbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ3RvcCdcbiAgICBjdHguZm9udCA9IGAke2ZvbnRTaXplfXB4IHNhbnMtc2VyaWZgXG4gICAgY3R4LnRleHRBbGlnbiA9IHRleHRBbGlnblxuXG4gICAgLy8g6IOM5pmv6ImyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvclxuICAgIHRoaXMucm91bmRSZWN0KHgsIHksIHcsIGgsIDApXG5cbiAgICAvLyDmloflrZfpopzoibJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3JcblxuICAgIC8vIOawtOW5s+W4g+WxgFxuICAgIHN3aXRjaCAodGV4dEFsaWduKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIHggKz0gMC41ICogd1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB4ICs9IHdcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuXG4gICAgY29uc3QgdGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoXG4gICAgY29uc3QgYWN0dWFsSGVpZ2h0ID0gTWF0aC5jZWlsKHRleHRXaWR0aCAvIHcpICogbGluZUhlaWdodFxuICAgIGxldCBwYWRkaW5nVG9wID0gTWF0aC5jZWlsKChoIC0gYWN0dWFsSGVpZ2h0KSAvIDIpXG4gICAgaWYgKHBhZGRpbmdUb3AgPCAwKSBwYWRkaW5nVG9wID0gMFxuXG4gICAgLy8g5Z6C55u05biD5bGAXG4gICAgc3dpdGNoICh2ZXJ0aWNhbEFsaWduKSB7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgICAgeSArPSBwYWRkaW5nVG9wXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB5ICs9IDIgKiBwYWRkaW5nVG9wXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OiBicmVha1xuICAgIH1cblxuICAgIGNvbnN0IGlubGluZVBhZGRpbmdUb3AgPSBNYXRoLmNlaWwoKGxpbmVIZWlnaHQgLSBmb250U2l6ZSkgLyAyKVxuXG4gICAgLy8g5LiN6LaF6L+H5LiA6KGMXG4gICAgaWYgKHRleHRXaWR0aCA8PSB3KSB7XG4gICAgICBjdHguZmlsbFRleHQodGV4dCwgeCwgeSArIGlubGluZVBhZGRpbmdUb3ApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyDlpJrooYzmlofmnKxcbiAgICBjb25zdCBjaGFycyA9IHRleHQuc3BsaXQoJycpXG4gICAgY29uc3QgX3kgPSB5XG5cbiAgICAvLyDpgJDooYznu5jliLZcbiAgICBsZXQgbGluZSA9ICcnXG4gICAgZm9yIChjb25zdCBjaCBvZiBjaGFycykge1xuICAgICAgY29uc3QgdGVzdExpbmUgPSBsaW5lICsgY2hcbiAgICAgIGNvbnN0IHRlc3RXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXN0TGluZSkud2lkdGhcblxuICAgICAgaWYgKHRlc3RXaWR0aCA+IHcpIHtcbiAgICAgICAgY3R4LmZpbGxUZXh0KGxpbmUsIHgsIHkgKyBpbmxpbmVQYWRkaW5nVG9wKVxuICAgICAgICB5ICs9IGxpbmVIZWlnaHRcbiAgICAgICAgbGluZSA9IGNoXG4gICAgICAgIGlmICgoeSArIGxpbmVIZWlnaHQpID4gKF95ICsgaCkpIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaW5lID0gdGVzdExpbmVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDpgb/lhY3muqLlh7pcbiAgICBpZiAoKHkgKyBsaW5lSGVpZ2h0KSA8PSAoX3kgKyBoKSkge1xuICAgICAgY3R4LmZpbGxUZXh0KGxpbmUsIHgsIHkgKyBpbmxpbmVQYWRkaW5nVG9wKVxuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpXG4gIH1cblxuICBhc3luYyBkcmF3Tm9kZShlbGVtZW50KSB7XG4gICAgY29uc3Qge2xheW91dEJveCwgY29tcHV0ZWRTdHlsZSwgbmFtZX0gPSBlbGVtZW50XG4gICAgY29uc3Qge3NyYywgdGV4dH0gPSBlbGVtZW50LmF0dHJpYnV0ZXNcbiAgICBpZiAobmFtZSA9PT0gJ3ZpZXcnKSB7XG4gICAgICB0aGlzLmRyYXdWaWV3KGxheW91dEJveCwgY29tcHV0ZWRTdHlsZSlcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdpbWFnZScpIHtcbiAgICAgIGF3YWl0IHRoaXMuZHJhd0ltYWdlKHNyYywgbGF5b3V0Qm94LCBjb21wdXRlZFN0eWxlKVxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3RleHQnKSB7XG4gICAgICB0aGlzLmRyYXdUZXh0KHRleHQsIGxheW91dEJveCwgY29tcHV0ZWRTdHlsZSlcbiAgICB9XG4gICAgY29uc3QgY2hpbGRzID0gT2JqZWN0LnZhbHVlcyhlbGVtZW50LmNoaWxkcmVuKVxuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgY2hpbGRzKSB7XG4gICAgICBhd2FpdCB0aGlzLmRyYXdOb2RlKGNoaWxkKVxuICAgIH1cbiAgfVxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBEcmF3XG59XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG5leHBvcnQgZGVmYXVsdCBnbG9iYWxbJ19fd3hDb21wb25lbnRzJ11bJ3d4bWwtdG8tY2FudmFzL2luZGV4J11cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 13)))

/***/ }),
/* 15 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 16 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 17);

/***/ }),
/* 17 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 18);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 18 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 19 */
/*!************************************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/wxcomponents/widget-ui/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;module.exports = function () {\n  var __MODS__ = {};\n  var __DEFINE__ = function __DEFINE__(modId, func, req) {var m = { exports: {} };__MODS__[modId] = { status: 0, func: func, req: req, m: m };};\n  var __REQUIRE__ = function __REQUIRE__(modId, source) {if (!__MODS__[modId]) return __webpack_require__(20)(source);if (!__MODS__[modId].status) {var m = { exports: {} };__MODS__[modId].status = 1;__MODS__[modId].func(__MODS__[modId].req, m, m.exports);if (typeof m.exports === \"object\") {__MODS__[modId].m.exports.__proto__ = m.exports.__proto__;Object.keys(m.exports).forEach(function (k) {__MODS__[modId].m.exports[k] = m.exports[k];var desp = Object.getOwnPropertyDescriptor(m.exports, k);if (desp && desp.configurable) Object.defineProperty(m.exports, k, { set: function set(val) {__MODS__[modId].m.exports[k] = val;}, get: function get() {return __MODS__[modId].m.exports[k];} });});if (m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, \"__esModule\", { value: true });} else {__MODS__[modId].m.exports = m.exports;}}return __MODS__[modId].m.exports;};\n  var __REQUIRE_WILDCARD__ = function __REQUIRE_WILDCARD__(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var k in obj) {if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k];}}newObj.default = obj;return newObj;}};\n  var __REQUIRE_DEFAULT__ = function __REQUIRE_DEFAULT__(obj) {return obj && obj.__esModule ? obj.default : obj;};\n  __DEFINE__(1572960819414, function (require, module, exports) {\n    !function (t, e) {if (\"object\" == typeof exports && \"object\" == typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var r, o; }}(this, function () {return function (t) {var e = {};function o(r) {if (e[r]) return e[r].exports;var i = e[r] = { i: r, l: !1, exports: {} };return t[r].call(i.exports, i, i.exports, o), i.l = !0, i.exports;}return o.m = t, o.c = e, o.d = function (t, e, r) {o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });}, o.r = function (t) {\"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: \"Module\" }), Object.defineProperty(t, \"__esModule\", { value: !0 });}, o.t = function (t, e) {if (1 & e && (t = o(t)), 8 & e) return t;if (4 & e && \"object\" == typeof t && t && t.__esModule) return t;var r = Object.create(null);if (o.r(r), Object.defineProperty(r, \"default\", { enumerable: !0, value: t }), 2 & e && \"string\" != typeof t) for (var i in t) {o.d(r, i, function (e) {return t[e];}.bind(null, i));}return r;}, o.n = function (t) {var e = t && t.__esModule ? function () {return t.default;} : function () {return t;};return o.d(e, \"a\", e), e;}, o.o = function (t, e) {return Object.prototype.hasOwnProperty.call(t, e);}, o.p = \"\", o(o.s = 0);}([function (t, e, o) {var r = this && this.__importDefault || function (t) {return t && t.__esModule ? t : { default: t };};Object.defineProperty(e, \"__esModule\", { value: !0 });var i = r(o(1)),l = o(2),n = 0,a = function () {function t(e) {var o = this;void 0 === e && (e = {}), this.parent = null, this.id = t.uuid(), this.style = {}, this.computedStyle = {}, this.lastComputedStyle = {}, this.children = {}, this.layoutBox = { left: 0, top: 0, width: 0, height: 0 }, e = Object.assign(l.getDefaultStyle(), e), this.computedStyle = Object.assign(l.getDefaultStyle(), e), this.lastComputedStyle = Object.assign(l.getDefaultStyle(), e), Object.keys(e).forEach(function (t) {Object.defineProperty(o.style, t, { configurable: !0, enumerable: !0, get: function get() {return e[t];}, set: function set(r) {r !== e[t] && void 0 !== r && (o.lastComputedStyle = o.computedStyle[t], e[t] = r, o.computedStyle[t] = r, l.scalableStyles.includes(t) && o.style.scale && (o.computedStyle[t] = r * o.style.scale), \"scale\" === t && l.scalableStyles.forEach(function (t) {e[t] && (o.computedStyle[t] = e[t] * r);}), \"hidden\" === t && (r ? l.layoutAffectedStyles.forEach(function (t) {o.computedStyle[t] = 0;}) : l.layoutAffectedStyles.forEach(function (t) {o.computedStyle[t] = o.lastComputedStyle[t];})));} });}), this.style.scale && l.scalableStyles.forEach(function (t) {if (o.style[t]) {var e = o.style[t] * o.style.scale;o.computedStyle[t] = e;}}), e.hidden && l.layoutAffectedStyles.forEach(function (t) {o.computedStyle[t] = 0;});}return t.uuid = function () {return n++;}, t.prototype.getAbsolutePosition = function (t) {if (!t) return this.getAbsolutePosition(this);if (!t.parent) return { left: 0, top: 0 };var e = this.getAbsolutePosition(t.parent),o = e.left,r = e.top;return { left: o + t.layoutBox.left, top: r + t.layoutBox.top };}, t.prototype.add = function (t) {t.parent = this, this.children[t.id] = t;}, t.prototype.remove = function (t) {var e = this;t ? this.children[t.id] && (t.remove(), delete this.children[t.id]) : Object.keys(this.children).forEach(function (t) {e.children[t].remove(), delete e.children[t];});}, t.prototype.getNodeTree = function () {var t = this;return { id: this.id, style: this.computedStyle, children: Object.keys(this.children).map(function (e) {return t.children[e].getNodeTree();}) };}, t.prototype.applyLayout = function (t) {var e = this;[\"left\", \"top\", \"width\", \"height\"].forEach(function (o) {t.layout && \"number\" == typeof t.layout[o] && (e.layoutBox[o] = t.layout[o], !e.parent || \"left\" !== o && \"top\" !== o || (e.layoutBox[o] += e.parent.layoutBox[o]));}), t.children.forEach(function (t) {e.children[t.id].applyLayout(t);});}, t.prototype.layout = function () {var t = this.getNodeTree();i.default(t), this.applyLayout(t);}, t;}();e.default = a;}, function (t, e, o) {o.r(e);var r = function () {var t,e = \"inherit\",o = \"ltr\",r = \"rtl\",i = \"row\",l = \"row-reverse\",n = \"column\",a = \"column-reverse\",u = \"flex-start\",d = \"center\",s = \"flex-end\",y = \"space-between\",c = \"space-around\",f = \"flex-start\",h = \"center\",p = \"flex-end\",g = \"stretch\",v = \"relative\",m = \"absolute\",b = { row: \"left\", \"row-reverse\": \"right\", column: \"top\", \"column-reverse\": \"bottom\" },x = { row: \"right\", \"row-reverse\": \"left\", column: \"bottom\", \"column-reverse\": \"top\" },w = { row: \"left\", \"row-reverse\": \"right\", column: \"top\", \"column-reverse\": \"bottom\" },S = { row: \"width\", \"row-reverse\": \"width\", column: \"height\", \"column-reverse\": \"height\" };function W(t) {return void 0 === t;}function L(t) {return t === i || t === l;}function k(t, e) {if (void 0 !== t.style.marginStart && L(e)) return t.style.marginStart;var o = null;switch (e) {case \"row\":o = t.style.marginLeft;break;case \"row-reverse\":o = t.style.marginRight;break;case \"column\":o = t.style.marginTop;break;case \"column-reverse\":o = t.style.marginBottom;}return void 0 !== o ? o : void 0 !== t.style.margin ? t.style.margin : 0;}function j(t, e) {if (void 0 !== t.style.marginEnd && L(e)) return t.style.marginEnd;var o = null;switch (e) {case \"row\":o = t.style.marginRight;break;case \"row-reverse\":o = t.style.marginLeft;break;case \"column\":o = t.style.marginBottom;break;case \"column-reverse\":o = t.style.marginTop;}return null != o ? o : void 0 !== t.style.margin ? t.style.margin : 0;}function B(t, e) {if (void 0 !== t.style.borderStartWidth && t.style.borderStartWidth >= 0 && L(e)) return t.style.borderStartWidth;var o = null;switch (e) {case \"row\":o = t.style.borderLeftWidth;break;case \"row-reverse\":o = t.style.borderRightWidth;break;case \"column\":o = t.style.borderTopWidth;break;case \"column-reverse\":o = t.style.borderBottomWidth;}return null != o && o >= 0 ? o : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0;}function E(t, e) {if (void 0 !== t.style.borderEndWidth && t.style.borderEndWidth >= 0 && L(e)) return t.style.borderEndWidth;var o = null;switch (e) {case \"row\":o = t.style.borderRightWidth;break;case \"row-reverse\":o = t.style.borderLeftWidth;break;case \"column\":o = t.style.borderBottomWidth;break;case \"column-reverse\":o = t.style.borderTopWidth;}return null != o && o >= 0 ? o : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0;}function C(t, e) {return function (t, e) {if (void 0 !== t.style.paddingStart && t.style.paddingStart >= 0 && L(e)) return t.style.paddingStart;var o = null;switch (e) {case \"row\":o = t.style.paddingLeft;break;case \"row-reverse\":o = t.style.paddingRight;break;case \"column\":o = t.style.paddingTop;break;case \"column-reverse\":o = t.style.paddingBottom;}return null != o && o >= 0 ? o : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0;}(t, e) + B(t, e);}function T(t, e) {return function (t, e) {if (void 0 !== t.style.paddingEnd && t.style.paddingEnd >= 0 && L(e)) return t.style.paddingEnd;var o = null;switch (e) {case \"row\":o = t.style.paddingRight;break;case \"row-reverse\":o = t.style.paddingLeft;break;case \"column\":o = t.style.paddingBottom;break;case \"column-reverse\":o = t.style.paddingTop;}return null != o && o >= 0 ? o : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0;}(t, e) + E(t, e);}function O(t, e) {return B(t, e) + E(t, e);}function _(t, e) {return k(t, e) + j(t, e);}function R(t, e) {return C(t, e) + T(t, e);}function A(t, e) {return e.style.alignSelf ? e.style.alignSelf : t.style.alignItems ? t.style.alignItems : \"stretch\";}function P(t, e) {if (e === r) {if (t === i) return l;if (t === l) return i;}return t;}function D(t, e) {return function (t) {return t === n || t === a;}(t) ? P(i, e) : n;}function H(t) {return t.style.position ? t.style.position : \"relative\";}function M(t) {return H(t) === v && t.style.flex > 0;}function I(t, e) {return t.layout[S[e]] + _(t, e);}function N(t, e) {return void 0 !== t.style[S[e]] && t.style[S[e]] >= 0;}function F(t, e) {return void 0 !== t.style[e];}function q(t, e) {return void 0 !== t.style[e] ? t.style[e] : 0;}function z(t, e, o) {var r = { row: t.style.minWidth, \"row-reverse\": t.style.minWidth, column: t.style.minHeight, \"column-reverse\": t.style.minHeight }[e],i = { row: t.style.maxWidth, \"row-reverse\": t.style.maxWidth, column: t.style.maxHeight, \"column-reverse\": t.style.maxHeight }[e],l = o;return void 0 !== i && i >= 0 && l > i && (l = i), void 0 !== r && r >= 0 && l < r && (l = r), l;}function U(t, e) {return t > e ? t : e;}function G(t, e) {void 0 === t.layout[S[e]] && N(t, e) && (t.layout[S[e]] = U(z(t, e, t.style[S[e]]), R(t, e)));}function J(t, e, o) {e.layout[x[o]] = t.layout[S[o]] - e.layout[S[o]] - e.layout[w[o]];}function K(t, e) {return void 0 !== t.style[b[e]] ? q(t, b[e]) : -q(t, x[e]);}function Q(r, E, Q) {var X = function (t, r) {var i;return (i = t.style.direction ? t.style.direction : e) === e && (i = void 0 === r ? o : r), i;}(r, Q),Y = P(function (t) {return t.style.flexDirection ? t.style.flexDirection : n;}(r), X),Z = D(Y, X),$ = P(i, X);G(r, Y), G(r, Z), r.layout.direction = X, r.layout[b[Y]] += k(r, Y) + K(r, Y), r.layout[x[Y]] += j(r, Y) + K(r, Y), r.layout[b[Z]] += k(r, Z) + K(r, Z), r.layout[x[Z]] += j(r, Z) + K(r, Z);var tt = r.children.length,et = R(r, $);if (function (t) {return void 0 !== t.style.measure;}(r)) {var ot = !W(r.layout[S[$]]),rt = t;rt = N(r, $) ? r.style.width : ot ? r.layout[S[$]] : E - _(r, $), rt -= et;var it = !N(r, $) && !ot,lt = !N(r, n) && W(r.layout[S[n]]);if (it || lt) {var nt = r.style.measure(rt);it && (r.layout.width = nt.width + et), lt && (r.layout.height = nt.height + R(r, n));}if (0 === tt) return;}var at,ut,dt,st,yt = function (t) {return \"wrap\" === t.style.flexWrap;}(r),ct = function (t) {return t.style.justifyContent ? t.style.justifyContent : \"flex-start\";}(r),ft = C(r, Y),ht = C(r, Z),pt = R(r, Y),gt = R(r, Z),vt = !W(r.layout[S[Y]]),mt = !W(r.layout[S[Z]]),bt = L(Y),xt = null,wt = null,St = t;vt && (St = r.layout[S[Y]] - pt);for (var Wt = 0, Lt = 0, kt = 0, jt = 0, Bt = 0, Et = 0; Lt < tt;) {var Ct,Tt = 0,Ot = 0,_t = 0,Rt = 0,At = vt && ct === u || !vt && ct !== d,Pt = At ? tt : Wt,Dt = !0,Ht = tt,Mt = null,It = null,Nt = ft,Ft = 0;for (at = Wt; at < tt; ++at) {if ((dt = r.children[at]).lineIndex = Et, dt.nextAbsoluteChild = null, dt.nextFlexChild = null, (Xt = A(r, dt)) === g && H(dt) === v && mt && !N(dt, Z)) dt.layout[S[Z]] = U(z(dt, Z, r.layout[S[Z]] - gt - _(dt, Z)), R(dt, Z));else if (H(dt) === m) for (null === xt && (xt = dt), null !== wt && (wt.nextAbsoluteChild = dt), wt = dt, ut = 0; ut < 2; ut++) {st = 0 !== ut ? i : n, !W(r.layout[S[st]]) && !N(dt, st) && F(dt, b[st]) && F(dt, x[st]) && (dt.layout[S[st]] = U(z(dt, st, r.layout[S[st]] - R(r, st) - _(dt, st) - q(dt, b[st]) - q(dt, x[st])), R(dt, st)));}var qt = 0;if (vt && M(dt) ? (Ot++, _t += dt.style.flex, null === Mt && (Mt = dt), null !== It && (It.nextFlexChild = dt), It = dt, qt = R(dt, Y) + _(dt, Y)) : (Ct = t, bt || (Ct = N(r, $) ? r.layout[S[$]] - et : E - _(r, $) - et), 0 === kt && V(dt, Ct, X), H(dt) === v && (Rt++, qt = I(dt, Y))), yt && vt && Tt + qt > St && at !== Wt) {Rt--, kt = 1;break;}At && (H(dt) !== v || M(dt)) && (At = !1, Pt = at), Dt && (H(dt) !== v || Xt !== g && Xt !== f || W(dt.layout[S[Z]])) && (Dt = !1, Ht = at), At && (dt.layout[w[Y]] += Nt, vt && J(r, dt, Y), Nt += I(dt, Y), Ft = U(Ft, z(dt, Z, I(dt, Z)))), Dt && (dt.layout[w[Z]] += jt + ht, mt && J(r, dt, Z)), kt = 0, Tt += qt, Lt = at + 1;}var zt = 0,Ut = 0,Gt = 0;if (Gt = vt ? St - Tt : U(Tt, 0) - Tt, 0 !== Ot) {var Jt,Kt,Qt = Gt / _t;for (It = Mt; null !== It;) {(Jt = Qt * It.style.flex + R(It, Y)) !== (Kt = z(It, Y, Jt)) && (Gt -= Kt, _t -= It.style.flex), It = It.nextFlexChild;}for ((Qt = Gt / _t) < 0 && (Qt = 0), It = Mt; null !== It;) {It.layout[S[Y]] = z(It, Y, Qt * It.style.flex + R(It, Y)), Ct = t, N(r, $) ? Ct = r.layout[S[$]] - et : bt || (Ct = E - _(r, $) - et), V(It, Ct, X), dt = It, It = It.nextFlexChild, dt.nextFlexChild = null;}} else ct !== u && (ct === d ? zt = Gt / 2 : ct === s ? zt = Gt : ct === y ? (Gt = U(Gt, 0), Ut = Ot + Rt - 1 != 0 ? Gt / (Ot + Rt - 1) : 0) : ct === c && (zt = (Ut = Gt / (Ot + Rt)) / 2));for (Nt += zt, at = Pt; at < Lt; ++at) {H(dt = r.children[at]) === m && F(dt, b[Y]) ? dt.layout[w[Y]] = q(dt, b[Y]) + B(r, Y) + k(dt, Y) : (dt.layout[w[Y]] += Nt, vt && J(r, dt, Y), H(dt) === v && (Nt += Ut + I(dt, Y), Ft = U(Ft, z(dt, Z, I(dt, Z)))));}var Vt = r.layout[S[Z]];for (mt || (Vt = U(z(r, Z, Ft + gt), gt)), at = Ht; at < Lt; ++at) {if (H(dt = r.children[at]) === m && F(dt, b[Z])) dt.layout[w[Z]] = q(dt, b[Z]) + B(r, Z) + k(dt, Z);else {var Xt,Yt = ht;if (H(dt) === v) if ((Xt = A(r, dt)) === g) W(dt.layout[S[Z]]) && (dt.layout[S[Z]] = U(z(dt, Z, Vt - gt - _(dt, Z)), R(dt, Z)));else if (Xt !== f) {var Zt = Vt - gt - I(dt, Z);Yt += Xt === h ? Zt / 2 : Zt;}dt.layout[w[Z]] += jt + Yt, mt && J(r, dt, Z);}}jt += Ft, Bt = U(Bt, Nt), Et += 1, Wt = Lt;}if (Et > 1 && mt) {var $t = r.layout[S[Z]] - gt,te = $t - jt,ee = 0,oe = ht,re = function (t) {return t.style.alignContent ? t.style.alignContent : \"flex-start\";}(r);re === p ? oe += te : re === h ? oe += te / 2 : re === g && $t > jt && (ee = te / Et);var ie = 0;for (at = 0; at < Et; ++at) {var le = ie,ne = 0;for (ut = le; ut < tt; ++ut) {if (H(dt = r.children[ut]) === v) {if (dt.lineIndex !== at) break;W(dt.layout[S[Z]]) || (ne = U(ne, dt.layout[S[Z]] + _(dt, Z)));}}for (ie = ut, ne += ee, ut = le; ut < ie; ++ut) {if (H(dt = r.children[ut]) === v) {var ae = A(r, dt);if (ae === f) dt.layout[w[Z]] = oe + k(dt, Z);else if (ae === p) dt.layout[w[Z]] = oe + ne - j(dt, Z) - dt.layout[S[Z]];else if (ae === h) {var ue = dt.layout[S[Z]];dt.layout[w[Z]] = oe + (ne - ue) / 2;} else ae === g && (dt.layout[w[Z]] = oe + k(dt, Z));}}oe += ne;}}var de = !1,se = !1;if (vt || (r.layout[S[Y]] = U(z(r, Y, Bt + T(r, Y)), pt), Y !== l && Y !== a || (de = !0)), mt || (r.layout[S[Z]] = U(z(r, Z, jt + gt), gt), Z !== l && Z !== a || (se = !0)), de || se) for (at = 0; at < tt; ++at) {dt = r.children[at], de && J(r, dt, Y), se && J(r, dt, Z);}for (wt = xt; null !== wt;) {for (ut = 0; ut < 2; ut++) {st = 0 !== ut ? i : n, !W(r.layout[S[st]]) && !N(wt, st) && F(wt, b[st]) && F(wt, x[st]) && (wt.layout[S[st]] = U(z(wt, st, r.layout[S[st]] - O(r, st) - _(wt, st) - q(wt, b[st]) - q(wt, x[st])), R(wt, st))), F(wt, x[st]) && !F(wt, b[st]) && (wt.layout[b[st]] = r.layout[S[st]] - wt.layout[S[st]] - q(wt, x[st]));}dt = wt, wt = wt.nextAbsoluteChild, dt.nextAbsoluteChild = null;}}function V(t, e, r) {t.shouldUpdate = !0;var i = t.style.direction || o;!t.isDirty && t.lastLayout && t.lastLayout.requestedHeight === t.layout.height && t.lastLayout.requestedWidth === t.layout.width && t.lastLayout.parentMaxWidth === e && t.lastLayout.direction === i ? (t.layout.width = t.lastLayout.width, t.layout.height = t.lastLayout.height, t.layout.top = t.lastLayout.top, t.layout.left = t.lastLayout.left) : (t.lastLayout || (t.lastLayout = {}), t.lastLayout.requestedWidth = t.layout.width, t.lastLayout.requestedHeight = t.layout.height, t.lastLayout.parentMaxWidth = e, t.lastLayout.direction = i, t.children.forEach(function (t) {t.layout.width = void 0, t.layout.height = void 0, t.layout.top = 0, t.layout.left = 0;}), Q(t, e, r), t.lastLayout.width = t.layout.width, t.lastLayout.height = t.layout.height, t.lastLayout.top = t.layout.top, t.lastLayout.left = t.layout.left);}return { layoutNodeImpl: Q, computeLayout: V, fillNodes: function t(e) {return e.layout && !e.isDirty || (e.layout = { width: void 0, height: void 0, top: 0, left: 0, right: 0, bottom: 0 }), e.style || (e.style = {}), e.children || (e.children = []), e.children.forEach(t), e;} };}();e.default = function (t) {r.fillNodes(t), r.computeLayout(t);};}, function (t, e, o) {Object.defineProperty(e, \"__esModule\", { value: !0 });e.textStyles = [\"color\", \"fontSize\", \"textAlign\", \"fontWeight\", \"lineHeight\", \"lineBreak\"];e.scalableStyles = [\"left\", \"top\", \"right\", \"bottom\", \"width\", \"height\", \"margin\", \"marginLeft\", \"marginRight\", \"marginTop\", \"marginBottom\", \"padding\", \"paddingLeft\", \"paddingRight\", \"paddingTop\", \"paddingBottom\", \"borderWidth\", \"borderLeftWidth\", \"borderRightWidth\", \"borderTopWidth\", \"borderBottomWidth\"];e.layoutAffectedStyles = [\"margin\", \"marginTop\", \"marginBottom\", \"marginLeft\", \"marginRight\", \"padding\", \"paddingTop\", \"paddingBottom\", \"paddingLeft\", \"paddingRight\", \"width\", \"height\"];e.getDefaultStyle = function () {return { left: void 0, top: void 0, right: void 0, bottom: void 0, width: void 0, height: void 0, maxWidth: void 0, maxHeight: void 0, minWidth: void 0, minHeight: void 0, margin: void 0, marginLeft: void 0, marginRight: void 0, marginTop: void 0, marginBottom: void 0, padding: void 0, paddingLeft: void 0, paddingRight: void 0, paddingTop: void 0, paddingBottom: void 0, borderWidth: void 0, flexDirection: void 0, justifyContent: void 0, alignItems: void 0, alignSelf: void 0, flex: void 0, flexWrap: void 0, position: void 0, hidden: !1, scale: 1 };};}]).default;});\n  }, function (modId) {var map = {};return __REQUIRE__(map[modId], modId);});\n  return __REQUIRE__(1572960819414);\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgbz1lKCk7Zm9yKHZhciByIGluIG8pKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM6dClbcl09b1tyXX19KHRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG8ocil7aWYoZVtyXSlyZXR1cm4gZVtyXS5leHBvcnRzO3ZhciBpPWVbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLG8pLGkubD0hMCxpLmV4cG9ydHN9cmV0dXJuIG8ubT10LG8uYz1lLG8uZD1mdW5jdGlvbih0LGUscil7by5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sby5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG8udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9byh0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG8ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIGkgaW4gdClvLmQocixpLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwsaSkpO3JldHVybiByfSxvLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG8uZChlLFwiYVwiLGUpLGV9LG8ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sby5wPVwiXCIsbyhvLnM9MCl9KFtmdW5jdGlvbih0LGUsbyl7dmFyIHI9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9cihvKDEpKSxsPW8oMiksbj0wLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUpe3ZhciBvPXRoaXM7dm9pZCAwPT09ZSYmKGU9e30pLHRoaXMucGFyZW50PW51bGwsdGhpcy5pZD10LnV1aWQoKSx0aGlzLnN0eWxlPXt9LHRoaXMuY29tcHV0ZWRTdHlsZT17fSx0aGlzLmxhc3RDb21wdXRlZFN0eWxlPXt9LHRoaXMuY2hpbGRyZW49e30sdGhpcy5sYXlvdXRCb3g9e2xlZnQ6MCx0b3A6MCx3aWR0aDowLGhlaWdodDowfSxlPU9iamVjdC5hc3NpZ24obC5nZXREZWZhdWx0U3R5bGUoKSxlKSx0aGlzLmNvbXB1dGVkU3R5bGU9T2JqZWN0LmFzc2lnbihsLmdldERlZmF1bHRTdHlsZSgpLGUpLHRoaXMubGFzdENvbXB1dGVkU3R5bGU9T2JqZWN0LmFzc2lnbihsLmdldERlZmF1bHRTdHlsZSgpLGUpLE9iamVjdC5rZXlzKGUpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShvLnN0eWxlLHQse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlW3RdfSxzZXQ6ZnVuY3Rpb24ocil7ciE9PWVbdF0mJnZvaWQgMCE9PXImJihvLmxhc3RDb21wdXRlZFN0eWxlPW8uY29tcHV0ZWRTdHlsZVt0XSxlW3RdPXIsby5jb21wdXRlZFN0eWxlW3RdPXIsbC5zY2FsYWJsZVN0eWxlcy5pbmNsdWRlcyh0KSYmby5zdHlsZS5zY2FsZSYmKG8uY29tcHV0ZWRTdHlsZVt0XT1yKm8uc3R5bGUuc2NhbGUpLFwic2NhbGVcIj09PXQmJmwuc2NhbGFibGVTdHlsZXMuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVt0XSYmKG8uY29tcHV0ZWRTdHlsZVt0XT1lW3RdKnIpfSkpLFwiaGlkZGVuXCI9PT10JiYocj9sLmxheW91dEFmZmVjdGVkU3R5bGVzLmZvckVhY2goKGZ1bmN0aW9uKHQpe28uY29tcHV0ZWRTdHlsZVt0XT0wfSkpOmwubGF5b3V0QWZmZWN0ZWRTdHlsZXMuZm9yRWFjaCgoZnVuY3Rpb24odCl7by5jb21wdXRlZFN0eWxlW3RdPW8ubGFzdENvbXB1dGVkU3R5bGVbdF19KSkpKX19KX0pKSx0aGlzLnN0eWxlLnNjYWxlJiZsLnNjYWxhYmxlU3R5bGVzLmZvckVhY2goKGZ1bmN0aW9uKHQpe2lmKG8uc3R5bGVbdF0pe3ZhciBlPW8uc3R5bGVbdF0qby5zdHlsZS5zY2FsZTtvLmNvbXB1dGVkU3R5bGVbdF09ZX19KSksZS5oaWRkZW4mJmwubGF5b3V0QWZmZWN0ZWRTdHlsZXMuZm9yRWFjaCgoZnVuY3Rpb24odCl7by5jb21wdXRlZFN0eWxlW3RdPTB9KSl9cmV0dXJuIHQudXVpZD1mdW5jdGlvbigpe3JldHVybiBuKyt9LHQucHJvdG90eXBlLmdldEFic29sdXRlUG9zaXRpb249ZnVuY3Rpb24odCl7aWYoIXQpcmV0dXJuIHRoaXMuZ2V0QWJzb2x1dGVQb3NpdGlvbih0aGlzKTtpZighdC5wYXJlbnQpcmV0dXJue2xlZnQ6MCx0b3A6MH07dmFyIGU9dGhpcy5nZXRBYnNvbHV0ZVBvc2l0aW9uKHQucGFyZW50KSxvPWUubGVmdCxyPWUudG9wO3JldHVybntsZWZ0Om8rdC5sYXlvdXRCb3gubGVmdCx0b3A6cit0LmxheW91dEJveC50b3B9fSx0LnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24odCl7dC5wYXJlbnQ9dGhpcyx0aGlzLmNoaWxkcmVuW3QuaWRdPXR9LHQucHJvdG90eXBlLnJlbW92ZT1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3Q/dGhpcy5jaGlsZHJlblt0LmlkXSYmKHQucmVtb3ZlKCksZGVsZXRlIHRoaXMuY2hpbGRyZW5bdC5pZF0pOk9iamVjdC5rZXlzKHRoaXMuY2hpbGRyZW4pLmZvckVhY2goKGZ1bmN0aW9uKHQpe2UuY2hpbGRyZW5bdF0ucmVtb3ZlKCksZGVsZXRlIGUuY2hpbGRyZW5bdF19KSl9LHQucHJvdG90eXBlLmdldE5vZGVUcmVlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm57aWQ6dGhpcy5pZCxzdHlsZTp0aGlzLmNvbXB1dGVkU3R5bGUsY2hpbGRyZW46T2JqZWN0LmtleXModGhpcy5jaGlsZHJlbikubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gdC5jaGlsZHJlbltlXS5nZXROb2RlVHJlZSgpfSkpfX0sdC5wcm90b3R5cGUuYXBwbHlMYXlvdXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztbXCJsZWZ0XCIsXCJ0b3BcIixcIndpZHRoXCIsXCJoZWlnaHRcIl0uZm9yRWFjaCgoZnVuY3Rpb24obyl7dC5sYXlvdXQmJlwibnVtYmVyXCI9PXR5cGVvZiB0LmxheW91dFtvXSYmKGUubGF5b3V0Qm94W29dPXQubGF5b3V0W29dLCFlLnBhcmVudHx8XCJsZWZ0XCIhPT1vJiZcInRvcFwiIT09b3x8KGUubGF5b3V0Qm94W29dKz1lLnBhcmVudC5sYXlvdXRCb3hbb10pKX0pKSx0LmNoaWxkcmVuLmZvckVhY2goKGZ1bmN0aW9uKHQpe2UuY2hpbGRyZW5bdC5pZF0uYXBwbHlMYXlvdXQodCl9KSl9LHQucHJvdG90eXBlLmxheW91dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0Tm9kZVRyZWUoKTtpLmRlZmF1bHQodCksdGhpcy5hcHBseUxheW91dCh0KX0sdH0oKTtlLmRlZmF1bHQ9YX0sZnVuY3Rpb24odCxlLG8pe28ucihlKTt2YXIgcj1mdW5jdGlvbigpe3ZhciB0LGU9XCJpbmhlcml0XCIsbz1cImx0clwiLHI9XCJydGxcIixpPVwicm93XCIsbD1cInJvdy1yZXZlcnNlXCIsbj1cImNvbHVtblwiLGE9XCJjb2x1bW4tcmV2ZXJzZVwiLHU9XCJmbGV4LXN0YXJ0XCIsZD1cImNlbnRlclwiLHM9XCJmbGV4LWVuZFwiLHk9XCJzcGFjZS1iZXR3ZWVuXCIsYz1cInNwYWNlLWFyb3VuZFwiLGY9XCJmbGV4LXN0YXJ0XCIsaD1cImNlbnRlclwiLHA9XCJmbGV4LWVuZFwiLGc9XCJzdHJldGNoXCIsdj1cInJlbGF0aXZlXCIsbT1cImFic29sdXRlXCIsYj17cm93OlwibGVmdFwiLFwicm93LXJldmVyc2VcIjpcInJpZ2h0XCIsY29sdW1uOlwidG9wXCIsXCJjb2x1bW4tcmV2ZXJzZVwiOlwiYm90dG9tXCJ9LHg9e3JvdzpcInJpZ2h0XCIsXCJyb3ctcmV2ZXJzZVwiOlwibGVmdFwiLGNvbHVtbjpcImJvdHRvbVwiLFwiY29sdW1uLXJldmVyc2VcIjpcInRvcFwifSx3PXtyb3c6XCJsZWZ0XCIsXCJyb3ctcmV2ZXJzZVwiOlwicmlnaHRcIixjb2x1bW46XCJ0b3BcIixcImNvbHVtbi1yZXZlcnNlXCI6XCJib3R0b21cIn0sUz17cm93Olwid2lkdGhcIixcInJvdy1yZXZlcnNlXCI6XCJ3aWR0aFwiLGNvbHVtbjpcImhlaWdodFwiLFwiY29sdW1uLXJldmVyc2VcIjpcImhlaWdodFwifTtmdW5jdGlvbiBXKHQpe3JldHVybiB2b2lkIDA9PT10fWZ1bmN0aW9uIEwodCl7cmV0dXJuIHQ9PT1pfHx0PT09bH1mdW5jdGlvbiBrKHQsZSl7aWYodm9pZCAwIT09dC5zdHlsZS5tYXJnaW5TdGFydCYmTChlKSlyZXR1cm4gdC5zdHlsZS5tYXJnaW5TdGFydDt2YXIgbz1udWxsO3N3aXRjaChlKXtjYXNlXCJyb3dcIjpvPXQuc3R5bGUubWFyZ2luTGVmdDticmVhaztjYXNlXCJyb3ctcmV2ZXJzZVwiOm89dC5zdHlsZS5tYXJnaW5SaWdodDticmVhaztjYXNlXCJjb2x1bW5cIjpvPXQuc3R5bGUubWFyZ2luVG9wO2JyZWFrO2Nhc2VcImNvbHVtbi1yZXZlcnNlXCI6bz10LnN0eWxlLm1hcmdpbkJvdHRvbX1yZXR1cm4gdm9pZCAwIT09bz9vOnZvaWQgMCE9PXQuc3R5bGUubWFyZ2luP3Quc3R5bGUubWFyZ2luOjB9ZnVuY3Rpb24gaih0LGUpe2lmKHZvaWQgMCE9PXQuc3R5bGUubWFyZ2luRW5kJiZMKGUpKXJldHVybiB0LnN0eWxlLm1hcmdpbkVuZDt2YXIgbz1udWxsO3N3aXRjaChlKXtjYXNlXCJyb3dcIjpvPXQuc3R5bGUubWFyZ2luUmlnaHQ7YnJlYWs7Y2FzZVwicm93LXJldmVyc2VcIjpvPXQuc3R5bGUubWFyZ2luTGVmdDticmVhaztjYXNlXCJjb2x1bW5cIjpvPXQuc3R5bGUubWFyZ2luQm90dG9tO2JyZWFrO2Nhc2VcImNvbHVtbi1yZXZlcnNlXCI6bz10LnN0eWxlLm1hcmdpblRvcH1yZXR1cm4gbnVsbCE9bz9vOnZvaWQgMCE9PXQuc3R5bGUubWFyZ2luP3Quc3R5bGUubWFyZ2luOjB9ZnVuY3Rpb24gQih0LGUpe2lmKHZvaWQgMCE9PXQuc3R5bGUuYm9yZGVyU3RhcnRXaWR0aCYmdC5zdHlsZS5ib3JkZXJTdGFydFdpZHRoPj0wJiZMKGUpKXJldHVybiB0LnN0eWxlLmJvcmRlclN0YXJ0V2lkdGg7dmFyIG89bnVsbDtzd2l0Y2goZSl7Y2FzZVwicm93XCI6bz10LnN0eWxlLmJvcmRlckxlZnRXaWR0aDticmVhaztjYXNlXCJyb3ctcmV2ZXJzZVwiOm89dC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoO2JyZWFrO2Nhc2VcImNvbHVtblwiOm89dC5zdHlsZS5ib3JkZXJUb3BXaWR0aDticmVhaztjYXNlXCJjb2x1bW4tcmV2ZXJzZVwiOm89dC5zdHlsZS5ib3JkZXJCb3R0b21XaWR0aH1yZXR1cm4gbnVsbCE9byYmbz49MD9vOnZvaWQgMCE9PXQuc3R5bGUuYm9yZGVyV2lkdGgmJnQuc3R5bGUuYm9yZGVyV2lkdGg+PTA/dC5zdHlsZS5ib3JkZXJXaWR0aDowfWZ1bmN0aW9uIEUodCxlKXtpZih2b2lkIDAhPT10LnN0eWxlLmJvcmRlckVuZFdpZHRoJiZ0LnN0eWxlLmJvcmRlckVuZFdpZHRoPj0wJiZMKGUpKXJldHVybiB0LnN0eWxlLmJvcmRlckVuZFdpZHRoO3ZhciBvPW51bGw7c3dpdGNoKGUpe2Nhc2VcInJvd1wiOm89dC5zdHlsZS5ib3JkZXJSaWdodFdpZHRoO2JyZWFrO2Nhc2VcInJvdy1yZXZlcnNlXCI6bz10LnN0eWxlLmJvcmRlckxlZnRXaWR0aDticmVhaztjYXNlXCJjb2x1bW5cIjpvPXQuc3R5bGUuYm9yZGVyQm90dG9tV2lkdGg7YnJlYWs7Y2FzZVwiY29sdW1uLXJldmVyc2VcIjpvPXQuc3R5bGUuYm9yZGVyVG9wV2lkdGh9cmV0dXJuIG51bGwhPW8mJm8+PTA/bzp2b2lkIDAhPT10LnN0eWxlLmJvcmRlcldpZHRoJiZ0LnN0eWxlLmJvcmRlcldpZHRoPj0wP3Quc3R5bGUuYm9yZGVyV2lkdGg6MH1mdW5jdGlvbiBDKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7aWYodm9pZCAwIT09dC5zdHlsZS5wYWRkaW5nU3RhcnQmJnQuc3R5bGUucGFkZGluZ1N0YXJ0Pj0wJiZMKGUpKXJldHVybiB0LnN0eWxlLnBhZGRpbmdTdGFydDt2YXIgbz1udWxsO3N3aXRjaChlKXtjYXNlXCJyb3dcIjpvPXQuc3R5bGUucGFkZGluZ0xlZnQ7YnJlYWs7Y2FzZVwicm93LXJldmVyc2VcIjpvPXQuc3R5bGUucGFkZGluZ1JpZ2h0O2JyZWFrO2Nhc2VcImNvbHVtblwiOm89dC5zdHlsZS5wYWRkaW5nVG9wO2JyZWFrO2Nhc2VcImNvbHVtbi1yZXZlcnNlXCI6bz10LnN0eWxlLnBhZGRpbmdCb3R0b219cmV0dXJuIG51bGwhPW8mJm8+PTA/bzp2b2lkIDAhPT10LnN0eWxlLnBhZGRpbmcmJnQuc3R5bGUucGFkZGluZz49MD90LnN0eWxlLnBhZGRpbmc6MH0odCxlKStCKHQsZSl9ZnVuY3Rpb24gVCh0LGUpe3JldHVybiBmdW5jdGlvbih0LGUpe2lmKHZvaWQgMCE9PXQuc3R5bGUucGFkZGluZ0VuZCYmdC5zdHlsZS5wYWRkaW5nRW5kPj0wJiZMKGUpKXJldHVybiB0LnN0eWxlLnBhZGRpbmdFbmQ7dmFyIG89bnVsbDtzd2l0Y2goZSl7Y2FzZVwicm93XCI6bz10LnN0eWxlLnBhZGRpbmdSaWdodDticmVhaztjYXNlXCJyb3ctcmV2ZXJzZVwiOm89dC5zdHlsZS5wYWRkaW5nTGVmdDticmVhaztjYXNlXCJjb2x1bW5cIjpvPXQuc3R5bGUucGFkZGluZ0JvdHRvbTticmVhaztjYXNlXCJjb2x1bW4tcmV2ZXJzZVwiOm89dC5zdHlsZS5wYWRkaW5nVG9wfXJldHVybiBudWxsIT1vJiZvPj0wP286dm9pZCAwIT09dC5zdHlsZS5wYWRkaW5nJiZ0LnN0eWxlLnBhZGRpbmc+PTA/dC5zdHlsZS5wYWRkaW5nOjB9KHQsZSkrRSh0LGUpfWZ1bmN0aW9uIE8odCxlKXtyZXR1cm4gQih0LGUpK0UodCxlKX1mdW5jdGlvbiBfKHQsZSl7cmV0dXJuIGsodCxlKStqKHQsZSl9ZnVuY3Rpb24gUih0LGUpe3JldHVybiBDKHQsZSkrVCh0LGUpfWZ1bmN0aW9uIEEodCxlKXtyZXR1cm4gZS5zdHlsZS5hbGlnblNlbGY/ZS5zdHlsZS5hbGlnblNlbGY6dC5zdHlsZS5hbGlnbkl0ZW1zP3Quc3R5bGUuYWxpZ25JdGVtczpcInN0cmV0Y2hcIn1mdW5jdGlvbiBQKHQsZSl7aWYoZT09PXIpe2lmKHQ9PT1pKXJldHVybiBsO2lmKHQ9PT1sKXJldHVybiBpfXJldHVybiB0fWZ1bmN0aW9uIEQodCxlKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIHQ9PT1ufHx0PT09YX0odCk/UChpLGUpOm59ZnVuY3Rpb24gSCh0KXtyZXR1cm4gdC5zdHlsZS5wb3NpdGlvbj90LnN0eWxlLnBvc2l0aW9uOlwicmVsYXRpdmVcIn1mdW5jdGlvbiBNKHQpe3JldHVybiBIKHQpPT09diYmdC5zdHlsZS5mbGV4PjB9ZnVuY3Rpb24gSSh0LGUpe3JldHVybiB0LmxheW91dFtTW2VdXStfKHQsZSl9ZnVuY3Rpb24gTih0LGUpe3JldHVybiB2b2lkIDAhPT10LnN0eWxlW1NbZV1dJiZ0LnN0eWxlW1NbZV1dPj0wfWZ1bmN0aW9uIEYodCxlKXtyZXR1cm4gdm9pZCAwIT09dC5zdHlsZVtlXX1mdW5jdGlvbiBxKHQsZSl7cmV0dXJuIHZvaWQgMCE9PXQuc3R5bGVbZV0/dC5zdHlsZVtlXTowfWZ1bmN0aW9uIHoodCxlLG8pe3ZhciByPXtyb3c6dC5zdHlsZS5taW5XaWR0aCxcInJvdy1yZXZlcnNlXCI6dC5zdHlsZS5taW5XaWR0aCxjb2x1bW46dC5zdHlsZS5taW5IZWlnaHQsXCJjb2x1bW4tcmV2ZXJzZVwiOnQuc3R5bGUubWluSGVpZ2h0fVtlXSxpPXtyb3c6dC5zdHlsZS5tYXhXaWR0aCxcInJvdy1yZXZlcnNlXCI6dC5zdHlsZS5tYXhXaWR0aCxjb2x1bW46dC5zdHlsZS5tYXhIZWlnaHQsXCJjb2x1bW4tcmV2ZXJzZVwiOnQuc3R5bGUubWF4SGVpZ2h0fVtlXSxsPW87cmV0dXJuIHZvaWQgMCE9PWkmJmk+PTAmJmw+aSYmKGw9aSksdm9pZCAwIT09ciYmcj49MCYmbDxyJiYobD1yKSxsfWZ1bmN0aW9uIFUodCxlKXtyZXR1cm4gdD5lP3Q6ZX1mdW5jdGlvbiBHKHQsZSl7dm9pZCAwPT09dC5sYXlvdXRbU1tlXV0mJk4odCxlKSYmKHQubGF5b3V0W1NbZV1dPVUoeih0LGUsdC5zdHlsZVtTW2VdXSksUih0LGUpKSl9ZnVuY3Rpb24gSih0LGUsbyl7ZS5sYXlvdXRbeFtvXV09dC5sYXlvdXRbU1tvXV0tZS5sYXlvdXRbU1tvXV0tZS5sYXlvdXRbd1tvXV19ZnVuY3Rpb24gSyh0LGUpe3JldHVybiB2b2lkIDAhPT10LnN0eWxlW2JbZV1dP3EodCxiW2VdKTotcSh0LHhbZV0pfWZ1bmN0aW9uIFEocixFLFEpe3ZhciBYPWZ1bmN0aW9uKHQscil7dmFyIGk7cmV0dXJuKGk9dC5zdHlsZS5kaXJlY3Rpb24/dC5zdHlsZS5kaXJlY3Rpb246ZSk9PT1lJiYoaT12b2lkIDA9PT1yP286ciksaX0ocixRKSxZPVAoZnVuY3Rpb24odCl7cmV0dXJuIHQuc3R5bGUuZmxleERpcmVjdGlvbj90LnN0eWxlLmZsZXhEaXJlY3Rpb246bn0ociksWCksWj1EKFksWCksJD1QKGksWCk7RyhyLFkpLEcocixaKSxyLmxheW91dC5kaXJlY3Rpb249WCxyLmxheW91dFtiW1ldXSs9ayhyLFkpK0socixZKSxyLmxheW91dFt4W1ldXSs9aihyLFkpK0socixZKSxyLmxheW91dFtiW1pdXSs9ayhyLFopK0socixaKSxyLmxheW91dFt4W1pdXSs9aihyLFopK0socixaKTt2YXIgdHQ9ci5jaGlsZHJlbi5sZW5ndGgsZXQ9UihyLCQpO2lmKGZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10LnN0eWxlLm1lYXN1cmV9KHIpKXt2YXIgb3Q9IVcoci5sYXlvdXRbU1skXV0pLHJ0PXQ7cnQ9TihyLCQpP3Iuc3R5bGUud2lkdGg6b3Q/ci5sYXlvdXRbU1skXV06RS1fKHIsJCkscnQtPWV0O3ZhciBpdD0hTihyLCQpJiYhb3QsbHQ9IU4ocixuKSYmVyhyLmxheW91dFtTW25dXSk7aWYoaXR8fGx0KXt2YXIgbnQ9ci5zdHlsZS5tZWFzdXJlKHJ0KTtpdCYmKHIubGF5b3V0LndpZHRoPW50LndpZHRoK2V0KSxsdCYmKHIubGF5b3V0LmhlaWdodD1udC5oZWlnaHQrUihyLG4pKX1pZigwPT09dHQpcmV0dXJufXZhciBhdCx1dCxkdCxzdCx5dD1mdW5jdGlvbih0KXtyZXR1cm5cIndyYXBcIj09PXQuc3R5bGUuZmxleFdyYXB9KHIpLGN0PWZ1bmN0aW9uKHQpe3JldHVybiB0LnN0eWxlLmp1c3RpZnlDb250ZW50P3Quc3R5bGUuanVzdGlmeUNvbnRlbnQ6XCJmbGV4LXN0YXJ0XCJ9KHIpLGZ0PUMocixZKSxodD1DKHIsWikscHQ9UihyLFkpLGd0PVIocixaKSx2dD0hVyhyLmxheW91dFtTW1ldXSksbXQ9IVcoci5sYXlvdXRbU1taXV0pLGJ0PUwoWSkseHQ9bnVsbCx3dD1udWxsLFN0PXQ7dnQmJihTdD1yLmxheW91dFtTW1ldXS1wdCk7Zm9yKHZhciBXdD0wLEx0PTAsa3Q9MCxqdD0wLEJ0PTAsRXQ9MDtMdDx0dDspe3ZhciBDdCxUdD0wLE90PTAsX3Q9MCxSdD0wLEF0PXZ0JiZjdD09PXV8fCF2dCYmY3QhPT1kLFB0PUF0P3R0Old0LER0PSEwLEh0PXR0LE10PW51bGwsSXQ9bnVsbCxOdD1mdCxGdD0wO2ZvcihhdD1XdDthdDx0dDsrK2F0KXtpZigoZHQ9ci5jaGlsZHJlblthdF0pLmxpbmVJbmRleD1FdCxkdC5uZXh0QWJzb2x1dGVDaGlsZD1udWxsLGR0Lm5leHRGbGV4Q2hpbGQ9bnVsbCwoWHQ9QShyLGR0KSk9PT1nJiZIKGR0KT09PXYmJm10JiYhTihkdCxaKSlkdC5sYXlvdXRbU1taXV09VSh6KGR0LFosci5sYXlvdXRbU1taXV0tZ3QtXyhkdCxaKSksUihkdCxaKSk7ZWxzZSBpZihIKGR0KT09PW0pZm9yKG51bGw9PT14dCYmKHh0PWR0KSxudWxsIT09d3QmJih3dC5uZXh0QWJzb2x1dGVDaGlsZD1kdCksd3Q9ZHQsdXQ9MDt1dDwyO3V0Kyspc3Q9MCE9PXV0P2k6biwhVyhyLmxheW91dFtTW3N0XV0pJiYhTihkdCxzdCkmJkYoZHQsYltzdF0pJiZGKGR0LHhbc3RdKSYmKGR0LmxheW91dFtTW3N0XV09VSh6KGR0LHN0LHIubGF5b3V0W1Nbc3RdXS1SKHIsc3QpLV8oZHQsc3QpLXEoZHQsYltzdF0pLXEoZHQseFtzdF0pKSxSKGR0LHN0KSkpO3ZhciBxdD0wO2lmKHZ0JiZNKGR0KT8oT3QrKyxfdCs9ZHQuc3R5bGUuZmxleCxudWxsPT09TXQmJihNdD1kdCksbnVsbCE9PUl0JiYoSXQubmV4dEZsZXhDaGlsZD1kdCksSXQ9ZHQscXQ9UihkdCxZKStfKGR0LFkpKTooQ3Q9dCxidHx8KEN0PU4ociwkKT9yLmxheW91dFtTWyRdXS1ldDpFLV8ociwkKS1ldCksMD09PWt0JiZWKGR0LEN0LFgpLEgoZHQpPT09diYmKFJ0KysscXQ9SShkdCxZKSkpLHl0JiZ2dCYmVHQrcXQ+U3QmJmF0IT09V3Qpe1J0LS0sa3Q9MTticmVha31BdCYmKEgoZHQpIT09dnx8TShkdCkpJiYoQXQ9ITEsUHQ9YXQpLER0JiYoSChkdCkhPT12fHxYdCE9PWcmJlh0IT09Znx8VyhkdC5sYXlvdXRbU1taXV0pKSYmKER0PSExLEh0PWF0KSxBdCYmKGR0LmxheW91dFt3W1ldXSs9TnQsdnQmJkoocixkdCxZKSxOdCs9SShkdCxZKSxGdD1VKEZ0LHooZHQsWixJKGR0LFopKSkpLER0JiYoZHQubGF5b3V0W3dbWl1dKz1qdCtodCxtdCYmSihyLGR0LFopKSxrdD0wLFR0Kz1xdCxMdD1hdCsxfXZhciB6dD0wLFV0PTAsR3Q9MDtpZihHdD12dD9TdC1UdDpVKFR0LDApLVR0LDAhPT1PdCl7dmFyIEp0LEt0LFF0PUd0L190O2ZvcihJdD1NdDtudWxsIT09SXQ7KShKdD1RdCpJdC5zdHlsZS5mbGV4K1IoSXQsWSkpIT09KEt0PXooSXQsWSxKdCkpJiYoR3QtPUt0LF90LT1JdC5zdHlsZS5mbGV4KSxJdD1JdC5uZXh0RmxleENoaWxkO2ZvcigoUXQ9R3QvX3QpPDAmJihRdD0wKSxJdD1NdDtudWxsIT09SXQ7KUl0LmxheW91dFtTW1ldXT16KEl0LFksUXQqSXQuc3R5bGUuZmxleCtSKEl0LFkpKSxDdD10LE4ociwkKT9DdD1yLmxheW91dFtTWyRdXS1ldDpidHx8KEN0PUUtXyhyLCQpLWV0KSxWKEl0LEN0LFgpLGR0PUl0LEl0PUl0Lm5leHRGbGV4Q2hpbGQsZHQubmV4dEZsZXhDaGlsZD1udWxsfWVsc2UgY3QhPT11JiYoY3Q9PT1kP3p0PUd0LzI6Y3Q9PT1zP3p0PUd0OmN0PT09eT8oR3Q9VShHdCwwKSxVdD1PdCtSdC0xIT0wP0d0LyhPdCtSdC0xKTowKTpjdD09PWMmJih6dD0oVXQ9R3QvKE90K1J0KSkvMikpO2ZvcihOdCs9enQsYXQ9UHQ7YXQ8THQ7KythdClIKGR0PXIuY2hpbGRyZW5bYXRdKT09PW0mJkYoZHQsYltZXSk/ZHQubGF5b3V0W3dbWV1dPXEoZHQsYltZXSkrQihyLFkpK2soZHQsWSk6KGR0LmxheW91dFt3W1ldXSs9TnQsdnQmJkoocixkdCxZKSxIKGR0KT09PXYmJihOdCs9VXQrSShkdCxZKSxGdD1VKEZ0LHooZHQsWixJKGR0LFopKSkpKTt2YXIgVnQ9ci5sYXlvdXRbU1taXV07Zm9yKG10fHwoVnQ9VSh6KHIsWixGdCtndCksZ3QpKSxhdD1IdDthdDxMdDsrK2F0KWlmKEgoZHQ9ci5jaGlsZHJlblthdF0pPT09bSYmRihkdCxiW1pdKSlkdC5sYXlvdXRbd1taXV09cShkdCxiW1pdKStCKHIsWikrayhkdCxaKTtlbHNle3ZhciBYdCxZdD1odDtpZihIKGR0KT09PXYpaWYoKFh0PUEocixkdCkpPT09ZylXKGR0LmxheW91dFtTW1pdXSkmJihkdC5sYXlvdXRbU1taXV09VSh6KGR0LFosVnQtZ3QtXyhkdCxaKSksUihkdCxaKSkpO2Vsc2UgaWYoWHQhPT1mKXt2YXIgWnQ9VnQtZ3QtSShkdCxaKTtZdCs9WHQ9PT1oP1p0LzI6WnR9ZHQubGF5b3V0W3dbWl1dKz1qdCtZdCxtdCYmSihyLGR0LFopfWp0Kz1GdCxCdD1VKEJ0LE50KSxFdCs9MSxXdD1MdH1pZihFdD4xJiZtdCl7dmFyICR0PXIubGF5b3V0W1NbWl1dLWd0LHRlPSR0LWp0LGVlPTAsb2U9aHQscmU9ZnVuY3Rpb24odCl7cmV0dXJuIHQuc3R5bGUuYWxpZ25Db250ZW50P3Quc3R5bGUuYWxpZ25Db250ZW50OlwiZmxleC1zdGFydFwifShyKTtyZT09PXA/b2UrPXRlOnJlPT09aD9vZSs9dGUvMjpyZT09PWcmJiR0Pmp0JiYoZWU9dGUvRXQpO3ZhciBpZT0wO2ZvcihhdD0wO2F0PEV0OysrYXQpe3ZhciBsZT1pZSxuZT0wO2Zvcih1dD1sZTt1dDx0dDsrK3V0KWlmKEgoZHQ9ci5jaGlsZHJlblt1dF0pPT09dil7aWYoZHQubGluZUluZGV4IT09YXQpYnJlYWs7VyhkdC5sYXlvdXRbU1taXV0pfHwobmU9VShuZSxkdC5sYXlvdXRbU1taXV0rXyhkdCxaKSkpfWZvcihpZT11dCxuZSs9ZWUsdXQ9bGU7dXQ8aWU7Kyt1dClpZihIKGR0PXIuY2hpbGRyZW5bdXRdKT09PXYpe3ZhciBhZT1BKHIsZHQpO2lmKGFlPT09ZilkdC5sYXlvdXRbd1taXV09b2UrayhkdCxaKTtlbHNlIGlmKGFlPT09cClkdC5sYXlvdXRbd1taXV09b2UrbmUtaihkdCxaKS1kdC5sYXlvdXRbU1taXV07ZWxzZSBpZihhZT09PWgpe3ZhciB1ZT1kdC5sYXlvdXRbU1taXV07ZHQubGF5b3V0W3dbWl1dPW9lKyhuZS11ZSkvMn1lbHNlIGFlPT09ZyYmKGR0LmxheW91dFt3W1pdXT1vZStrKGR0LFopKX1vZSs9bmV9fXZhciBkZT0hMSxzZT0hMTtpZih2dHx8KHIubGF5b3V0W1NbWV1dPVUoeihyLFksQnQrVChyLFkpKSxwdCksWSE9PWwmJlkhPT1hfHwoZGU9ITApKSxtdHx8KHIubGF5b3V0W1NbWl1dPVUoeihyLFosanQrZ3QpLGd0KSxaIT09bCYmWiE9PWF8fChzZT0hMCkpLGRlfHxzZSlmb3IoYXQ9MDthdDx0dDsrK2F0KWR0PXIuY2hpbGRyZW5bYXRdLGRlJiZKKHIsZHQsWSksc2UmJkoocixkdCxaKTtmb3Iod3Q9eHQ7bnVsbCE9PXd0Oyl7Zm9yKHV0PTA7dXQ8Mjt1dCsrKXN0PTAhPT11dD9pOm4sIVcoci5sYXlvdXRbU1tzdF1dKSYmIU4od3Qsc3QpJiZGKHd0LGJbc3RdKSYmRih3dCx4W3N0XSkmJih3dC5sYXlvdXRbU1tzdF1dPVUoeih3dCxzdCxyLmxheW91dFtTW3N0XV0tTyhyLHN0KS1fKHd0LHN0KS1xKHd0LGJbc3RdKS1xKHd0LHhbc3RdKSksUih3dCxzdCkpKSxGKHd0LHhbc3RdKSYmIUYod3QsYltzdF0pJiYod3QubGF5b3V0W2Jbc3RdXT1yLmxheW91dFtTW3N0XV0td3QubGF5b3V0W1Nbc3RdXS1xKHd0LHhbc3RdKSk7ZHQ9d3Qsd3Q9d3QubmV4dEFic29sdXRlQ2hpbGQsZHQubmV4dEFic29sdXRlQ2hpbGQ9bnVsbH19ZnVuY3Rpb24gVih0LGUscil7dC5zaG91bGRVcGRhdGU9ITA7dmFyIGk9dC5zdHlsZS5kaXJlY3Rpb258fG87IXQuaXNEaXJ0eSYmdC5sYXN0TGF5b3V0JiZ0Lmxhc3RMYXlvdXQucmVxdWVzdGVkSGVpZ2h0PT09dC5sYXlvdXQuaGVpZ2h0JiZ0Lmxhc3RMYXlvdXQucmVxdWVzdGVkV2lkdGg9PT10LmxheW91dC53aWR0aCYmdC5sYXN0TGF5b3V0LnBhcmVudE1heFdpZHRoPT09ZSYmdC5sYXN0TGF5b3V0LmRpcmVjdGlvbj09PWk/KHQubGF5b3V0LndpZHRoPXQubGFzdExheW91dC53aWR0aCx0LmxheW91dC5oZWlnaHQ9dC5sYXN0TGF5b3V0LmhlaWdodCx0LmxheW91dC50b3A9dC5sYXN0TGF5b3V0LnRvcCx0LmxheW91dC5sZWZ0PXQubGFzdExheW91dC5sZWZ0KToodC5sYXN0TGF5b3V0fHwodC5sYXN0TGF5b3V0PXt9KSx0Lmxhc3RMYXlvdXQucmVxdWVzdGVkV2lkdGg9dC5sYXlvdXQud2lkdGgsdC5sYXN0TGF5b3V0LnJlcXVlc3RlZEhlaWdodD10LmxheW91dC5oZWlnaHQsdC5sYXN0TGF5b3V0LnBhcmVudE1heFdpZHRoPWUsdC5sYXN0TGF5b3V0LmRpcmVjdGlvbj1pLHQuY2hpbGRyZW4uZm9yRWFjaCgoZnVuY3Rpb24odCl7dC5sYXlvdXQud2lkdGg9dm9pZCAwLHQubGF5b3V0LmhlaWdodD12b2lkIDAsdC5sYXlvdXQudG9wPTAsdC5sYXlvdXQubGVmdD0wfSkpLFEodCxlLHIpLHQubGFzdExheW91dC53aWR0aD10LmxheW91dC53aWR0aCx0Lmxhc3RMYXlvdXQuaGVpZ2h0PXQubGF5b3V0LmhlaWdodCx0Lmxhc3RMYXlvdXQudG9wPXQubGF5b3V0LnRvcCx0Lmxhc3RMYXlvdXQubGVmdD10LmxheW91dC5sZWZ0KX1yZXR1cm57bGF5b3V0Tm9kZUltcGw6USxjb21wdXRlTGF5b3V0OlYsZmlsbE5vZGVzOmZ1bmN0aW9uIHQoZSl7cmV0dXJuIGUubGF5b3V0JiYhZS5pc0RpcnR5fHwoZS5sYXlvdXQ9e3dpZHRoOnZvaWQgMCxoZWlnaHQ6dm9pZCAwLHRvcDowLGxlZnQ6MCxyaWdodDowLGJvdHRvbTowfSksZS5zdHlsZXx8KGUuc3R5bGU9e30pLGUuY2hpbGRyZW58fChlLmNoaWxkcmVuPVtdKSxlLmNoaWxkcmVuLmZvckVhY2godCksZX19fSgpO2UuZGVmYXVsdD1mdW5jdGlvbih0KXtyLmZpbGxOb2Rlcyh0KSxyLmNvbXB1dGVMYXlvdXQodCl9fSxmdW5jdGlvbih0LGUsbyl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS50ZXh0U3R5bGVzPVtcImNvbG9yXCIsXCJmb250U2l6ZVwiLFwidGV4dEFsaWduXCIsXCJmb250V2VpZ2h0XCIsXCJsaW5lSGVpZ2h0XCIsXCJsaW5lQnJlYWtcIl07ZS5zY2FsYWJsZVN0eWxlcz1bXCJsZWZ0XCIsXCJ0b3BcIixcInJpZ2h0XCIsXCJib3R0b21cIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm1hcmdpblwiLFwibWFyZ2luTGVmdFwiLFwibWFyZ2luUmlnaHRcIixcIm1hcmdpblRvcFwiLFwibWFyZ2luQm90dG9tXCIsXCJwYWRkaW5nXCIsXCJwYWRkaW5nTGVmdFwiLFwicGFkZGluZ1JpZ2h0XCIsXCJwYWRkaW5nVG9wXCIsXCJwYWRkaW5nQm90dG9tXCIsXCJib3JkZXJXaWR0aFwiLFwiYm9yZGVyTGVmdFdpZHRoXCIsXCJib3JkZXJSaWdodFdpZHRoXCIsXCJib3JkZXJUb3BXaWR0aFwiLFwiYm9yZGVyQm90dG9tV2lkdGhcIl07ZS5sYXlvdXRBZmZlY3RlZFN0eWxlcz1bXCJtYXJnaW5cIixcIm1hcmdpblRvcFwiLFwibWFyZ2luQm90dG9tXCIsXCJtYXJnaW5MZWZ0XCIsXCJtYXJnaW5SaWdodFwiLFwicGFkZGluZ1wiLFwicGFkZGluZ1RvcFwiLFwicGFkZGluZ0JvdHRvbVwiLFwicGFkZGluZ0xlZnRcIixcInBhZGRpbmdSaWdodFwiLFwid2lkdGhcIixcImhlaWdodFwiXTtlLmdldERlZmF1bHRTdHlsZT1mdW5jdGlvbigpe3JldHVybntsZWZ0OnZvaWQgMCx0b3A6dm9pZCAwLHJpZ2h0OnZvaWQgMCxib3R0b206dm9pZCAwLHdpZHRoOnZvaWQgMCxoZWlnaHQ6dm9pZCAwLG1heFdpZHRoOnZvaWQgMCxtYXhIZWlnaHQ6dm9pZCAwLG1pbldpZHRoOnZvaWQgMCxtaW5IZWlnaHQ6dm9pZCAwLG1hcmdpbjp2b2lkIDAsbWFyZ2luTGVmdDp2b2lkIDAsbWFyZ2luUmlnaHQ6dm9pZCAwLG1hcmdpblRvcDp2b2lkIDAsbWFyZ2luQm90dG9tOnZvaWQgMCxwYWRkaW5nOnZvaWQgMCxwYWRkaW5nTGVmdDp2b2lkIDAscGFkZGluZ1JpZ2h0OnZvaWQgMCxwYWRkaW5nVG9wOnZvaWQgMCxwYWRkaW5nQm90dG9tOnZvaWQgMCxib3JkZXJXaWR0aDp2b2lkIDAsZmxleERpcmVjdGlvbjp2b2lkIDAsanVzdGlmeUNvbnRlbnQ6dm9pZCAwLGFsaWduSXRlbXM6dm9pZCAwLGFsaWduU2VsZjp2b2lkIDAsZmxleDp2b2lkIDAsZmxleFdyYXA6dm9pZCAwLHBvc2l0aW9uOnZvaWQgMCxoaWRkZW46ITEsc2NhbGU6MX19fV0pLmRlZmF1bHR9KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!********************************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/wxcomponents/widget-ui sync ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 20;

/***/ }),
/* 21 */
/*!************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/App.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 22);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDdU07QUFDdk0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!*************************************************************************************!*\
  !*** /Users/yzw/my-projects/uniapp-wxml-to-canvas/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 23);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStxQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/yzw/my-projects/uniapp-wxml-to-canvas/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 24)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ })
],[[0,"app-config"]]]);