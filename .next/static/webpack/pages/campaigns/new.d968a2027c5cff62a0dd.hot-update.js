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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_colin_Udemy_Ethereum_and_Solidity_cdg_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/colin/Udemy/Ethereum_and_Solidity_cdg/kickstarter/pages/campaigns/new.js\";\n\n\n\n\n\n\nclass CampaignNew extends react__WEBPACK_IMPORTED_MODULE_2__.Component {\n  constructor(...args) {\n    super(...args);\n\n    (0,_Users_colin_Udemy_Ethereum_and_Solidity_cdg_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"state\", {\n      minimumContribution: \"\",\n      errorMessage: \"\",\n      loading: false\n    });\n\n    (0,_Users_colin_Udemy_Ethereum_and_Solidity_cdg_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(this, \"onSubmit\", async event => {\n      event.preventDefault();\n      this.setState({\n        loading: true,\n        error: \"\"\n      });\n\n      try {\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.eth.getAccounts();\n        await _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__.default.methods.createCampaign(this.state.minimumContribution).send({\n          from: accounts[0]\n        });\n      } catch (err) {\n        this.setState({\n          errorMessage: err.message\n        });\n        this.setState({\n          minimumContribution: \"\"\n        });\n      }\n\n      this.setState({\n        loading: false\n      });\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Create a Campaign\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n        onSubmit: this.onSubmit,\n        error: !!this.state.errorMessage,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: \"Min Contribution\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n            placeholder: \"wei\",\n            value: this.state.minimumContribution,\n            onChange: e => {\n              this.setState({\n                minimumContribution: e.target.value\n              });\n\n              if (isNaN(parseInt(this.state.minimumContribution.parse))) {\n                this.setState({\n                  errorMessage: \"Please enter\"\n                });\n              }\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n            error: true,\n            header: \"Oops!\",\n            content: this.state.errorMessage\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n            loading: this.state.loading,\n            primary: true,\n            children: [\" \", \"Create\", \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignNew);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lOGQyIl0sIm5hbWVzIjpbIkNhbXBhaWduTmV3IiwiQ29tcG9uZW50IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJlcnJvciIsImFjY291bnRzIiwid2ViMyIsImZhY3RvcnkiLCJzdGF0ZSIsInNlbmQiLCJmcm9tIiwiZXJyIiwibWVzc2FnZSIsInJlbmRlciIsIm9uU3VibWl0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiaXNOYU4iLCJwYXJzZUludCIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsV0FBTixTQUEwQkMsNENBQTFCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSw2TEFDMUI7QUFDTkMseUJBQW1CLEVBQUUsRUFEZjtBQUVOQyxrQkFBWSxFQUFFLEVBRlI7QUFHTkMsYUFBTyxFQUFFO0FBSEgsS0FEMEI7O0FBQUEsZ01BT3ZCLE1BQU9DLEtBQVAsSUFBaUI7QUFDMUJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFFSCxlQUFPLEVBQUUsSUFBWDtBQUFpQkksYUFBSyxFQUFFO0FBQXhCLE9BQWQ7O0FBQ0EsVUFBSTtBQUNGLGNBQU1DLFFBQVEsR0FBRyxNQUFNQyxtRUFBQSxFQUF2QjtBQUNBLGNBQU1DLDZFQUFBLENBQ1ksS0FBS0MsS0FBTCxDQUFXVixtQkFEdkIsRUFFSFcsSUFGRyxDQUVFO0FBQUVDLGNBQUksRUFBRUwsUUFBUSxDQUFDLENBQUQ7QUFBaEIsU0FGRixDQUFOO0FBR0QsT0FMRCxDQUtFLE9BQU9NLEdBQVAsRUFBWTtBQUNaLGFBQUtSLFFBQUwsQ0FBYztBQUFFSixzQkFBWSxFQUFFWSxHQUFHLENBQUNDO0FBQXBCLFNBQWQ7QUFDQSxhQUFLVCxRQUFMLENBQWM7QUFBQ0wsNkJBQW1CLEVBQUU7QUFBdEIsU0FBZDtBQUNEOztBQUNELFdBQUtLLFFBQUwsQ0FBYztBQUFFSCxlQUFPLEVBQUU7QUFBWCxPQUFkO0FBQ0QsS0FwQmlDO0FBQUE7O0FBc0JsQ2EsUUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsbURBQUQ7QUFBTSxnQkFBUSxFQUFFLEtBQUtDLFFBQXJCO0FBQStCLGFBQUssRUFBRSxDQUFDLENBQUMsS0FBS04sS0FBTCxDQUFXVCxZQUFuRDtBQUFBLCtCQUNFLDhEQUFDLHlEQUFEO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLHVCQUFXLEVBQUMsS0FEZDtBQUVFLGlCQUFLLEVBQUUsS0FBS1MsS0FBTCxDQUFXVixtQkFGcEI7QUFHRSxvQkFBUSxFQUFHaUIsQ0FBRCxJQUFNO0FBQ2QsbUJBQUtaLFFBQUwsQ0FBYztBQUFFTCxtQ0FBbUIsRUFBRWlCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUFoQyxlQUFkOztBQUNBLGtCQUFHQyxLQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLWCxLQUFMLENBQVdWLG1CQUFYLENBQStCc0IsS0FBaEMsQ0FBVCxDQUFSLEVBQTBEO0FBQ3hELHFCQUFLakIsUUFBTCxDQUFjO0FBQUNKLDhCQUFZLEVBQUU7QUFBZixpQkFBZDtBQUNEO0FBQ0Y7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLGVBYUUsOERBQUMsc0RBQUQ7QUFBUyxpQkFBSyxNQUFkO0FBQWUsa0JBQU0sRUFBQyxPQUF0QjtBQUE4QixtQkFBTyxFQUFFLEtBQUtTLEtBQUwsQ0FBV1Q7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiRixlQWNFLDhEQUFDLHFEQUFEO0FBQVEsbUJBQU8sRUFBRSxLQUFLUyxLQUFMLENBQVdSLE9BQTVCO0FBQXFDLG1CQUFPLE1BQTVDO0FBQUEsdUJBQ0csR0FESCxZQUVTLEdBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQTBCRDs7QUFqRGlDOztBQW1EcEMsK0RBQWVKLFdBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5jbGFzcyBDYW1wYWlnbk5ldyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1pbmltdW1Db250cmlidXRpb246IFwiXCIsXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICB9O1xuXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IFwiXCIgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IGZhY3RvcnkubWV0aG9kc1xuICAgICAgICAuY3JlYXRlQ2FtcGFpZ24odGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uKVxuICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHttaW5pbXVtQ29udHJpYnV0aW9uOiBcIlwifSlcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPkNyZWF0ZSBhIENhbXBhaWduPC9oMT5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxsYWJlbD5NaW4gQ29udHJpYnV0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIndlaVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbmltdW1Db250cmlidXRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1pbmltdW1Db250cmlidXRpb246IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgaWYoaXNOYU4ocGFyc2VJbnQodGhpcy5zdGF0ZS5taW5pbXVtQ29udHJpYnV0aW9uLnBhcnNlKSkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTogXCJQbGVhc2UgZW50ZXJcIn0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgQ3JlYXRle1wiIFwifVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbk5ldztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n");

/***/ })

});