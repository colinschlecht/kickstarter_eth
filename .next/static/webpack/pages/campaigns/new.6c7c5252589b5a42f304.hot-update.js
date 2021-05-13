/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_colin_Udemy_Ethereum_and_Solidity_cdg_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/colin/Udemy/Ethereum_and_Solidity_cdg/kickstarter/pages/campaigns/new.js\";\n\n\n\n\n\n\nclass CampaignNew extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n  constructor(...args) {\n    super(...args);\n\n    (0,_Users_colin_Udemy_Ethereum_and_Solidity_cdg_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"state\", {\n      minimumContribution: \"\"\n    });\n\n    (0,_Users_colin_Udemy_Ethereum_and_Solidity_cdg_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"onSubmit\", async event => {\n      event.preventDefault();\n\n      try {\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.eth.getAccounts();\n        await _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__.default.methods.createCampaign(this.state.minimumContribution).send({\n          from: accounts[0]\n        });\n      } catch (err) {}\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Create a Campaign\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n        onSubmit: this.onSubmit,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Min Contribution\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            placeholder: \"wei\",\n            value: this.state.minimumContribution,\n            onChange: e => this.setState({\n              minimumContribution: e.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n            primary: true,\n            children: \" Create \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lOGQyIl0sIm5hbWVzIjpbIkNhbXBhaWduTmV3IiwiQ29tcG9uZW50IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50cyIsIndlYjMiLCJmYWN0b3J5Iiwic3RhdGUiLCJzZW5kIiwiZnJvbSIsImVyciIsInJlbmRlciIsIm9uU3VibWl0IiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxXQUFOLFNBQTBCQyw0Q0FBMUIsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLDZMQUMxQjtBQUNOQyx5QkFBbUIsRUFBRTtBQURmLEtBRDBCOztBQUFBLGdNQU12QixNQUFPQyxLQUFQLElBQWlCO0FBQzFCQSxXQUFLLENBQUNDLGNBQU47O0FBQ0EsVUFBSTtBQUVGLGNBQU1DLFFBQVEsR0FBRyxNQUFNQyxtRUFBQSxFQUF2QjtBQUNBLGNBQU1DLDZFQUFBLENBQStCLEtBQUtDLEtBQUwsQ0FBV04sbUJBQTFDLEVBQStETyxJQUEvRCxDQUFvRTtBQUFDQyxjQUFJLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBQWYsU0FBcEUsQ0FBTjtBQUNELE9BSkQsQ0FJRSxPQUFPTSxHQUFQLEVBQVksQ0FFYjtBQUNGLEtBZmlDO0FBQUE7O0FBa0JsQ0MsUUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBTSxnQkFBUSxFQUFFLEtBQUtDLFFBQXJCO0FBQUEsK0JBQ0UsOERBQUMseURBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQ0UsdUJBQVcsRUFBQyxLQURkO0FBRUUsaUJBQUssRUFBRSxLQUFLTCxLQUFMLENBQVdOLG1CQUZwQjtBQUdFLG9CQUFRLEVBQUdZLENBQUQsSUFDUixLQUFLQyxRQUFMLENBQWM7QUFBRWIsaUNBQW1CLEVBQUVZLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQUFoQyxhQUFkO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQVNFLDhEQUFDLHFEQUFEO0FBQVEsbUJBQU8sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFrQkQ7O0FBckNpQzs7QUF1Q3BDLCtEQUFlakIsV0FBZiIsImZpbGUiOiIuL3BhZ2VzL2NhbXBhaWducy9uZXcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcbmNsYXNzIENhbXBhaWduTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWluaW11bUNvbnRyaWJ1dGlvbjogXCJcIixcbiAgICBcbiAgfTtcblxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcblxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLmNyZWF0ZUNhbXBhaWduKHRoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbikuc2VuZCh7ZnJvbTogYWNjb3VudHNbMF19KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcblxuICAgIH1cbiAgfTtcblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPkNyZWF0ZSBhIENhbXBhaWduPC9oMT5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9PlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPk1pbiBDb250cmlidXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwid2VpXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtaW5pbXVtQ29udHJpYnV0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PiBDcmVhdGUgPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n");

/***/ })

});