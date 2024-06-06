"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard/components/reminders.jsx":
/*!******************************************************!*\
  !*** ./src/pages/dashboard/components/reminders.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst reminders = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)([\n        \"token\"\n    ]);\n    const [reminders, setReminders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchReminders = async ()=>{\n            try {\n                console.log(\"fetching Reminder data\");\n                const response = await fetch(\"http://localhost:4000/dash/reminders\", {\n                    credentials: \"include\",\n                    headers: {\n                        Authorization: \"Bearer \".concat(cookies.token)\n                    }\n                });\n                const data = await response.json();\n                setReminders(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error:\", error.message);\n            }\n        };\n        fetchReminders();\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n        lineNumber: 36,\n        columnNumber: 27\n    }, undefined);\n    if (!reminders) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Reminders\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n        lineNumber: 37,\n        columnNumber: 28\n    }, undefined);\n    console.log(reminders);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-lg font-bold mb-2\",\n                children: \" Reminders \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: reminders && reminders.map((reminder, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white rounded-lg shadow-md p-4 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-bold mb-2\",\n                                children: reminder.message\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                value: \"Completed\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(reminders, \"frzKtkjsn4YOsqcsIP9xOxAvK5s=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reminders);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVtaW5kZXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNUO0FBRTFDLE1BQU1JLFlBQVk7O0lBRWQsTUFBTSxDQUFDQyxXQUFXQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sUUFBUSxHQUFHSix3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFFdEMsTUFBTSxDQUFDQyxXQUFXSSxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8saUJBQWlCO1lBRW5CLElBQUk7Z0JBQ0FDLFFBQVFDLEdBQUcsQ0FBQztnQkFDWixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0NBQXdDO29CQUNqRUMsYUFBYTtvQkFDYkMsU0FBUzt3QkFDTEMsZUFBZSxVQUF3QixPQUFkVCxRQUFRVSxLQUFLO29CQUN4QztnQkFDTjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7Z0JBQ2hDWCxhQUFhVTtnQkFDYlosV0FBVztZQUNmLEVBQUUsT0FBT2MsT0FBTztnQkFDWlYsUUFBUVUsS0FBSyxDQUFDLFVBQVVBLE1BQU1DLE9BQU87WUFDekM7UUFDSjtRQUVBWjtJQUVKLEdBQUcsRUFBRTtJQUVMLElBQUlKLFdBQVcscUJBQU8sOERBQUNpQjtrQkFBRTs7Ozs7O0lBQ3pCLElBQUksQ0FBQ2xCLFdBQVcscUJBQU8sOERBQUNrQjtrQkFBRTs7Ozs7O0lBQzFCWixRQUFRQyxHQUFHLENBQUNQO0lBRWQscUJBQ0UsOERBQUNtQjs7MEJBQ0csOERBQUNDO2dCQUFHQyxXQUFVOzBCQUF5Qjs7Ozs7OzBCQUN2Qyw4REFBQ0M7MEJBQ0l0QixhQUFhQSxVQUFVdUIsR0FBRyxDQUFDLENBQUNDLFVBQVVDO29CQUNuQyxxQkFDSSw4REFBQ0M7d0JBQUdMLFdBQVU7OzBDQUNOLDhEQUFDSDtnQ0FBRUcsV0FBVTswQ0FBMkJHLFNBQVNQLE9BQU87Ozs7OzswQ0FDeEQsOERBQUNVO2dDQUFNQyxNQUFLO2dDQUFTQyxPQUFNOzs7Ozs7Ozs7Ozs7Z0JBRzNDOzs7Ozs7Ozs7Ozs7QUFJWjtHQWxETTdCOztRQUdnQkQsb0RBQVVBOzs7QUFpRGhDLCtEQUFlQyxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9yZW1pbmRlcnMuanN4PzI3NTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5jb25zdCByZW1pbmRlcnMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuXG4gICAgY29uc3QgW3JlbWluZGVycywgc2V0UmVtaW5kZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoUmVtaW5kZXJzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgUmVtaW5kZXIgZGF0YVwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9kYXNoL3JlbWluZGVycycsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIHNldFJlbWluZGVycyhkYXRhKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hSZW1pbmRlcnMoKTtcblxuICAgIH0sIFtdKTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIGlmICghcmVtaW5kZXJzKSByZXR1cm4gPHA+Tm8gUmVtaW5kZXJzPC9wPlxuICAgIGNvbnNvbGUubG9nKHJlbWluZGVycylcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBtYi0yXCI+IFJlbWluZGVycyA8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7cmVtaW5kZXJzICYmIHJlbWluZGVycy5tYXAoKHJlbWluZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTJcIiA+e3JlbWluZGVyLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDb21wbGV0ZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW1pbmRlcnMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJyZW1pbmRlcnMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29va2llcyIsInNldFJlbWluZGVycyIsImZldGNoUmVtaW5kZXJzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsInAiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwicmVtaW5kZXIiLCJpbmRleCIsImxpIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/components/reminders.jsx\n"));

/***/ })

});