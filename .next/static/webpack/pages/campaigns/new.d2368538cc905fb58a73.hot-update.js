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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_colin_Udemy_Ethereum_and_Solidity_cdg_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/colin/Udemy/Ethereum_and_Solidity_cdg/kickstarter/pages/campaigns/new.js\";\n\n\n\n\n\n\nclass CampaignNew extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n  constructor(...args) {\n    super(...args);\n\n    (0,_Users_colin_Udemy_Ethereum_and_Solidity_cdg_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"state\", {\n      minimumContribution: \"\",\n      errorMessage: \"\",\n      loading: false\n    });\n\n    (0,_Users_colin_Udemy_Ethereum_and_Solidity_cdg_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"onSubmit\", async event => {\n      event.preventDefault();\n      this.setState({\n        loading: true,\n        mini\n      });\n\n      try {\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.eth.getAccounts();\n        await _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__.default.methods.createCampaign(this.state.minimumContribution).send({\n          from: accounts[0]\n        });\n      } catch (err) {\n        this.setState({\n          errorMessage: err.message\n        });\n      }\n\n      this.setState({\n        loading: false\n      });\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Create a Campaign\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n        onSubmit: this.onSubmit,\n        error: !!this.state.errorMessage,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Min Contribution\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            placeholder: \"wei\",\n            value: this.state.minimumContribution,\n            onChange: e => this.setState({\n              minimumContribution: e.target.value\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n            error: true,\n            header: \"Oops!\",\n            content: this.state.errorMessage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n            loading: this.state.loading,\n            primary: true,\n            children: \" Create \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lOGQyIl0sIm5hbWVzIjpbIkNhbXBhaWduTmV3IiwiQ29tcG9uZW50IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJtaW5pIiwiYWNjb3VudHMiLCJ3ZWIzIiwiZmFjdG9yeSIsInN0YXRlIiwic2VuZCIsImZyb20iLCJlcnIiLCJtZXNzYWdlIiwicmVuZGVyIiwib25TdWJtaXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxXQUFOLFNBQTBCQyw0Q0FBMUIsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLDZMQUMxQjtBQUNOQyx5QkFBbUIsRUFBRSxFQURmO0FBRU5DLGtCQUFZLEVBQUUsRUFGUjtBQUdOQyxhQUFPLEVBQUU7QUFISCxLQUQwQjs7QUFBQSxnTUFPdkIsTUFBT0MsS0FBUCxJQUFpQjtBQUMxQkEsV0FBSyxDQUFDQyxjQUFOO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQUVILGVBQU8sRUFBRSxJQUFYO0FBQWlCSTtBQUFqQixPQUFkOztBQUNBLFVBQUk7QUFDRixjQUFNQyxRQUFRLEdBQUcsTUFBTUMsbUVBQUEsRUFBdkI7QUFDQSxjQUFNQyw2RUFBQSxDQUNZLEtBQUtDLEtBQUwsQ0FBV1YsbUJBRHZCLEVBRUhXLElBRkcsQ0FFRTtBQUFFQyxjQUFJLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBQWhCLFNBRkYsQ0FBTjtBQUdELE9BTEQsQ0FLRSxPQUFPTSxHQUFQLEVBQVk7QUFDWixhQUFLUixRQUFMLENBQWM7QUFBRUosc0JBQVksRUFBRVksR0FBRyxDQUFDQztBQUFwQixTQUFkO0FBQ0Q7O0FBQ0QsV0FBS1QsUUFBTCxDQUFjO0FBQUVILGVBQU8sRUFBRTtBQUFYLE9BQWQ7QUFDRCxLQW5CaUM7QUFBQTs7QUFxQmxDYSxRQUFNLEdBQUc7QUFDUCx3QkFDRSw4REFBQyx1REFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyxtREFBRDtBQUFNLGdCQUFRLEVBQUUsS0FBS0MsUUFBckI7QUFBK0IsYUFBSyxFQUFFLENBQUMsQ0FBQyxLQUFLTixLQUFMLENBQVdULFlBQW5EO0FBQUEsK0JBQ0UsOERBQUMseURBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQ0UsdUJBQVcsRUFBQyxLQURkO0FBRUUsaUJBQUssRUFBRSxLQUFLUyxLQUFMLENBQVdWLG1CQUZwQjtBQUdFLG9CQUFRLEVBQUdpQixDQUFELElBQ1IsS0FBS1osUUFBTCxDQUFjO0FBQUVMLGlDQUFtQixFQUFFaUIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0FBQWhDLGFBQWQ7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBU0UsOERBQUMsc0RBQUQ7QUFBUyxpQkFBSyxNQUFkO0FBQWUsa0JBQU0sRUFBQyxPQUF0QjtBQUE4QixtQkFBTyxFQUFFLEtBQUtULEtBQUwsQ0FBV1Q7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURixlQVVFLDhEQUFDLHFEQUFEO0FBQVEsbUJBQU8sRUFBRyxLQUFLUyxLQUFMLENBQVdSLE9BQTdCO0FBQXNDLG1CQUFPLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQW1CRDs7QUF6Q2lDOztBQTJDcEMsK0RBQWVKLFdBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1pbmltdW1Db250cmlidXRpb246IFwiXCIsXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgbWluaSB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzXG4gICAgICAgIC5jcmVhdGVDYW1wYWlnbih0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb24pXG4gICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPkNyZWF0ZSBhIENhbXBhaWduPC9oMT5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxsYWJlbD5NaW4gQ29udHJpYnV0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIndlaVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWluaW11bUNvbnRyaWJ1dGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmcgPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+IENyZWF0ZSA8L0J1dHRvbj5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduTmV3O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n");

/***/ })

});