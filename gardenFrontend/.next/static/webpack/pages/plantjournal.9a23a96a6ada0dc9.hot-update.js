"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plantjournal",{

/***/ "./src/pages/plantjournal/components/garden.jsx":
/*!******************************************************!*\
  !*** ./src/pages/plantjournal/components/garden.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Garden = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies)([\n        \"token\"\n    ]);\n    const [gardenData, setGardenData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGarden = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:4000/garden\", {\n                    credentials: \"include\",\n                    headers: {\n                        Authorization: \"Bearer \".concat(cookies.token)\n                    }\n                });\n                const data = await response.json();\n                setGardenData(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error:\", error.message);\n            }\n        };\n        fetchGarden();\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n        lineNumber: 36,\n        columnNumber: 27\n    }, undefined);\n    if (!gardenData) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No plants to show\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n        lineNumber: 37,\n        columnNumber: 29\n    }, undefined);\n    console.log(gardenData[0][1]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \" Your Garden \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: [\n                    gardenData && gardenData.map((plant, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: plant[1].plantImage\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: plant[0].plantName\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Last update: \",\n                                        plant[0].updatedAt\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 29\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/plantjournal/createplant\",\n                            children: \"Create A plant\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Garden, \"9TPHnGn5tLkUWe8tJNXxMAZnSzo=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies\n    ];\n});\n_c = Garden;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Garden);\nvar _c;\n$RefreshReg$(_c, \"Garden\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2NvbXBvbmVudHMvZ2FyZGVuLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFDYjtBQUU3QixNQUFNSyxTQUFTOztJQUVYLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFFBQVEsR0FBR0wsd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBRXRDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLGNBQWM7WUFFaEIsSUFBSTtnQkFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZ0NBQWdDO29CQUN6REMsYUFBYTtvQkFDYkMsU0FBUzt3QkFDTEMsZUFBZSxVQUF3QixPQUFkUixRQUFRUyxLQUFLO29CQUN4QztnQkFDTjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7Z0JBQ2hDVCxjQUFjUTtnQkFDZFgsV0FBVztZQUNmLEVBQUUsT0FBT2EsT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBLE1BQU1FLE9BQU87WUFDekM7UUFDSjtRQUVBWDtJQUVKLEdBQUcsRUFBRTtJQUVMLElBQUlMLFdBQVcscUJBQU8sOERBQUNpQjtrQkFBRTs7Ozs7O0lBQ3pCLElBQUksQ0FBQ2QsWUFBWSxxQkFBTyw4REFBQ2M7a0JBQUU7Ozs7OztJQUUzQkYsUUFBUUcsR0FBRyxDQUFDZixVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFFNUIscUJBQ0ksOERBQUNnQjs7MEJBQ0csOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFzQzs7Ozs7OzBCQUNoRCw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUNUbEIsY0FBY0EsV0FBV29CLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQzt3QkFDbEMscUJBQ0ksOERBQUNDOzs4Q0FDRyw4REFBQ0M7b0NBQUlDLEtBQUtKLEtBQUssQ0FBQyxFQUFFLENBQUNLLFVBQVU7Ozs7Ozs4Q0FDN0IsOERBQUNaOzhDQUFHTyxLQUFLLENBQUMsRUFBRSxDQUFDTSxTQUFTOzs7Ozs7OENBQ3RCLDhEQUFDYjs7d0NBQUU7d0NBQWNPLEtBQUssQ0FBQyxFQUFFLENBQUNPLFNBQVM7Ozs7Ozs7OENBRW5DLDhEQUFDQzs7Ozs7Ozs7Ozs7b0JBR2I7a0NBQ0EsOERBQUNOO2tDQUNHLDRFQUFDNUIsa0RBQUlBOzRCQUFDbUMsTUFBSztzQ0FBNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUS9EO0dBM0RNbEM7O1FBR2dCRixvREFBVUE7OztLQUgxQkU7QUE2RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BsYW50am91cm5hbC9jb21wb25lbnRzL2dhcmRlbi5qc3g/M2QwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBHYXJkZW4gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuXG4gICAgY29uc3QgW2dhcmRlbkRhdGEsIHNldEdhcmRlbkRhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hHYXJkZW4gPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dhcmRlbicsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIHNldEdhcmRlbkRhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoR2FyZGVuKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICBpZiAoIWdhcmRlbkRhdGEpIHJldHVybiA8cD5ObyBwbGFudHMgdG8gc2hvdzwvcD5cblxuICAgIGNvbnNvbGUubG9nKGdhcmRlbkRhdGFbMF1bMV0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyXCI+IFlvdXIgR2FyZGVuIDwvaDE+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIiA+XG4gICAgICAgICAgICAgICAgICAgIHtnYXJkZW5EYXRhICYmIGdhcmRlbkRhdGEubWFwKChwbGFudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGxhbnRbMV0ucGxhbnRJbWFnZX0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwbGFudFswXS5wbGFudE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IHVwZGF0ZToge3BsYW50WzBdLnVwZGF0ZWRBdH08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BsYW50am91cm5hbC9jcmVhdGVwbGFudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBBIHBsYW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FyZGVuOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsIkxpbmsiLCJHYXJkZW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29va2llcyIsImdhcmRlbkRhdGEiLCJzZXRHYXJkZW5EYXRhIiwiZmV0Y2hHYXJkZW4iLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwicCIsImxvZyIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJwbGFudCIsImluZGV4IiwibGkiLCJpbWciLCJzcmMiLCJwbGFudEltYWdlIiwicGxhbnROYW1lIiwidXBkYXRlZEF0IiwiYnIiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/components/garden.jsx\n"));

/***/ })

});