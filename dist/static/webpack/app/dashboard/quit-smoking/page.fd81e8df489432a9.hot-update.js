"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/quit-smoking/page",{

/***/ "(app-pages-browser)/./components/forms/Calculator.tsx":
/*!*****************************************!*\
  !*** ./components/forms/Calculator.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ \"(app-pages-browser)/./node_modules/react-grid-system/build/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Calculator = ()=>{\n    _s();\n    const [expression, setExpression] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleButtonClick = (value)=>{\n        if (value === \"=\") {\n            try {\n                const calculatedResult = eval(expression);\n                setResult(calculatedResult.toString());\n            } catch (error) {\n                setResult(\"Invalid expression\");\n            }\n        } else if (value === \"C\") {\n            setExpression(\"\");\n            setResult(\"\");\n        } else {\n            setExpression((prevExpression1)=>prevExpression1 + value);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        className: \"mx-auto max-w-md p-4 justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"mb-2 block text-lg font-bold\",\n                children: \"Expression\"\n            }, void 0, false, {\n                fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                justify: \"center\",\n                className: \"mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"w-full rounded border border-gray-300 p-2\",\n                        value: expression,\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"mb-2 block text-lg font-bold\",\n                children: \"Result\"\n            }, void 0, false, {\n                fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                justify: \"center\",\n                className: \"mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"w-full rounded border border-gray-300 p-2\",\n                        value: result,\n                        readOnly: true\n                    }, void 0, false, {\n                        fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center\",\n                children: [\n                    [\n                        \"1\",\n                        \"2\",\n                        \"3\",\n                        \"+\"\n                    ],\n                    [\n                        \"4\",\n                        \"5\",\n                        \"6\",\n                        \"-\"\n                    ],\n                    [\n                        \"7\",\n                        \"8\",\n                        \"9\",\n                        \"*\"\n                    ],\n                    [\n                        \"0\",\n                        \".\",\n                        \"=\",\n                        \"/\"\n                    ]\n                ].map((row1, rowIndex1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                        className: \"mb-2 flex w-full justify-center\",\n                        children: row1.map((buttonValue1, colIndex1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"m-2 rounded bg-blue-500 px-4 py-4 font-bold text-white hover:bg-blue-700\",\n                                style: {\n                                    minWidth: \"200px\"\n                                },\n                                onClick: ()=>handleButtonClick(buttonValue1),\n                                children: buttonValue1\n                            }, colIndex1, false, {\n                                fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 15\n                            }, undefined))\n                    }, rowIndex1, false, {\n                        fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-full rounded bg-red-500 px-4 py-4 font-bold text-white hover:bg-red-700\",\n                    style: {\n                        minWidth: \"200px\"\n                    },\n                    onClick: ()=>handleButtonClick(\"C\"),\n                    children: \"C\"\n                }, void 0, false, {\n                    fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zak/Documents/ENSSAT/project_accessibility/components/forms/Calculator.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Calculator, \"hH7proWWm86kaCrOelT9Z946X7w=\");\n_c = Calculator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calculator);\nvar _c;\n$RefreshReg$(_c, \"Calculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZm9ybXMvQ2FsY3VsYXRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUN1QjtBQUV4RCxNQUFNSSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1TLG9CQUFvQixDQUFDQztRQUN6QixJQUFJQSxVQUFVLEtBQUs7WUFDakIsSUFBSTtnQkFDRixNQUFNQyxtQkFBbUJDLEtBQUtQO2dCQUM5QkcsVUFBVUcsaUJBQWlCRSxRQUFRO1lBQ3JDLEVBQUUsT0FBT0MsT0FBTztnQkFDZE4sVUFBVTtZQUNaO1FBQ0YsT0FBTyxJQUFJRSxVQUFVLEtBQUs7WUFDeEJKLGNBQWM7WUFDZEUsVUFBVTtRQUNaLE9BQU87WUFDTEYsY0FBYyxDQUFDUyxrQkFBbUJBLGtCQUFpQkw7UUFDckQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVCx3REFBU0E7UUFBQ2UsV0FBVTs7MEJBQ25CLDhEQUFDQztnQkFBTUQsV0FBVTswQkFBK0I7Ozs7OzswQkFDaEQsOERBQUNkLGtEQUFHQTtnQkFBQ2dCLFNBQVE7Z0JBQVNGLFdBQVU7MEJBQzlCLDRFQUFDYixrREFBR0E7OEJBQ0YsNEVBQUNnQjt3QkFBTUMsTUFBSzt3QkFBT0osV0FBVTt3QkFBNENOLE9BQU9MO3dCQUFZZ0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHeEcsOERBQUNKO2dCQUFNRCxXQUFVOzBCQUErQjs7Ozs7OzBCQUNoRCw4REFBQ2Qsa0RBQUdBO2dCQUFDZ0IsU0FBUTtnQkFBU0YsV0FBVTswQkFDOUIsNEVBQUNiLGtEQUFHQTs4QkFDRiw0RUFBQ2dCO3dCQUFNQyxNQUFLO3dCQUFPSixXQUFVO3dCQUE0Q04sT0FBT0g7d0JBQVFjLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXBHLDhEQUFDQztnQkFBSU4sV0FBVTswQkFDWjtvQkFDQzt3QkFBQzt3QkFBSzt3QkFBSzt3QkFBSztxQkFBSTtvQkFDcEI7d0JBQUM7d0JBQUs7d0JBQUs7d0JBQUs7cUJBQUk7b0JBQ3BCO3dCQUFDO3dCQUFLO3dCQUFLO3dCQUFLO3FCQUFJO29CQUNwQjt3QkFBQzt3QkFBSzt3QkFBSzt3QkFBSztxQkFBSTtpQkFDckIsQ0FBQ08sR0FBRyxDQUFDLENBQUNDLE1BQUtDLDBCQUNWLDhEQUFDdkIsa0RBQUdBO3dCQUFnQmMsV0FBVTtrQ0FDM0JRLEtBQUlELEdBQUcsQ0FBQyxDQUFDRyxjQUFhQywwQkFDckIsOERBQUNDO2dDQUVDWixXQUFVO2dDQUNWYSxPQUFPO29DQUFFQyxVQUFVO2dDQUFRO2dDQUMzQkMsU0FBUyxJQUFNdEIsa0JBQWtCaUI7MENBRWhDQTsrQkFMSUM7Ozs7O3VCQUhERjs7Ozs7Ozs7OzswQkFlZCw4REFBQ3ZCLGtEQUFHQTswQkFDRiw0RUFBQzBCO29CQUNDWixXQUFVO29CQUNWYSxPQUFPO3dCQUFFQyxVQUFVO29CQUFRO29CQUMzQkMsU0FBUyxJQUFNdEIsa0JBQWtCOzhCQUNsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXBFTUw7S0FBQUE7QUFzRU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb3Jtcy9DYWxjdWxhdG9yLnRzeD8wZDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJztcblxuY29uc3QgQ2FsY3VsYXRvciA9ICgpID0+IHtcbiAgY29uc3QgW2V4cHJlc3Npb24sIHNldEV4cHJlc3Npb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgPT09ICc9Jykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZFJlc3VsdCA9IGV2YWwoZXhwcmVzc2lvbik7XG4gICAgICAgIHNldFJlc3VsdChjYWxjdWxhdGVkUmVzdWx0LnRvU3RyaW5nKCkpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0UmVzdWx0KCdJbnZhbGlkIGV4cHJlc3Npb24nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnQycpIHtcbiAgICAgIHNldEV4cHJlc3Npb24oJycpO1xuICAgICAgc2V0UmVzdWx0KCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXhwcmVzc2lvbigocHJldkV4cHJlc3Npb24pID0+IHByZXZFeHByZXNzaW9uICsgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1tZCBwLTQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0yIGJsb2NrIHRleHQtbGcgZm9udC1ib2xkXCI+RXhwcmVzc2lvbjwvbGFiZWw+XG4gICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxDb2wgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHAtMlwiIHZhbHVlPXtleHByZXNzaW9ufSByZWFkT25seSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTIgYmxvY2sgdGV4dC1sZyBmb250LWJvbGRcIj5SZXN1bHQ8L2xhYmVsPlxuICAgICAgPFJvdyBqdXN0aWZ5PVwiY2VudGVyXCIgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8Q29sICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBwLTJcIiB2YWx1ZT17cmVzdWx0fSByZWFkT25seSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIHtbXG4gICAgICAgICAgWycxJywgJzInLCAnMycsICcrJ10sXG4gICAgICAgICAgWyc0JywgJzUnLCAnNicsICctJ10sXG4gICAgICAgICAgWyc3JywgJzgnLCAnOScsICcqJ10sXG4gICAgICAgICAgWycwJywgJy4nLCAnPScsICcvJ10sXG4gICAgICAgIF0ubWFwKChyb3csIHJvd0luZGV4KSA9PiAoXG4gICAgICAgICAgPFJvdyBrZXk9e3Jvd0luZGV4fSBjbGFzc05hbWU9XCJtYi0yIGZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICB7cm93Lm1hcCgoYnV0dG9uVmFsdWUsIGNvbEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2NvbEluZGV4fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tMiByb3VuZGVkIGJnLWJsdWUtNTAwIHB4LTQgcHktNCBmb250LWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTcwMFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6ICcyMDBweCcgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljayhidXR0b25WYWx1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnV0dG9uVmFsdWV9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBiZy1yZWQtNTAwIHB4LTQgcHktNCBmb250LWJvbGQgdGV4dC13aGl0ZSBob3ZlcjpiZy1yZWQtNzAwXCJcbiAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogJzIwMHB4JyB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKCdDJyl9XG4gICAgICAgID5cbiAgICAgICAgICBDXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Sb3c+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiQ2FsY3VsYXRvciIsImV4cHJlc3Npb24iLCJzZXRFeHByZXNzaW9uIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ2YWx1ZSIsImNhbGN1bGF0ZWRSZXN1bHQiLCJldmFsIiwidG9TdHJpbmciLCJlcnJvciIsInByZXZFeHByZXNzaW9uIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJqdXN0aWZ5IiwiaW5wdXQiLCJ0eXBlIiwicmVhZE9ubHkiLCJkaXYiLCJtYXAiLCJyb3ciLCJyb3dJbmRleCIsImJ1dHRvblZhbHVlIiwiY29sSW5kZXgiLCJidXR0b24iLCJzdHlsZSIsIm1pbldpZHRoIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/forms/Calculator.tsx\n"));

/***/ })

});