"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plantjournal/library",{

/***/ "./src/pages/components/NavBar.jsx":
/*!*****************************************!*\
  !*** ./src/pages/components/NavBar.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withAuth */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavBar = (props)=>{\n    _s();\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"user\"\n    ]);\n    if (!cookies.user) {\n        return \"\";\n    }\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLogout = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/auth/logout\", {\n                method: \"get\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (response.ok) {\n                removeCookie(\"token\");\n                navigate.replace(\"/auth\");\n            } else {\n                console.log(data.message);\n            }\n        } catch (err) {\n            console.log(\"Network error\");\n        }\n    };\n    const closeDropdown = ()=>{\n        setIsDropdownOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex justify-between items-center px-4 bg-gray-800 py-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-white font-semibold text-xl\",\n                children: props.pageName\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" flex items-center \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: toggleDropdown,\n                            className: \"text-white font-semibold px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-1 text-2xl\",\n                                    children: \"☰\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 21\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined),\n                        isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/dashboard\",\n                                        className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                        onClick: closeDropdown,\n                                        children: \"Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/plantjournal\",\n                                        className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                        onClick: closeDropdown,\n                                        children: \"Plant Journal\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"button\",\n                                        onClick: ()=>{\n                                            handleLogout();\n                                            closeDropdown();\n                                        },\n                                        className: \"w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                        value: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 37\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 29\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"SJRuFGgDJrsT1O9P3YY1yBu3FHQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(NavBar));\nvar _c, _c1;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OYXZCYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDVztBQUNQO0FBQ1E7QUFDUjtBQUVqQyxNQUFNSyxTQUFTLENBQUNDOztJQUVaLE1BQU1DLFdBQVdOLHNEQUFTQTtJQUMxQixNQUFNLENBQUNPLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ1EsUUFBUSxHQUFHUCx3REFBVUEsQ0FBQztRQUFDO0tBQU87SUFFckMsSUFBRyxDQUFDTyxRQUFRQyxJQUFJLEVBQUM7UUFDYixPQUFPO0lBQ1g7SUFFQSxNQUFNQyxpQkFBaUI7UUFDbkJILGtCQUFrQixDQUFDRDtJQUN2QjtJQUVBLE1BQU1LLGVBQWU7UUFDakIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxxQ0FBcUM7Z0JBQzlEQyxRQUFRO2dCQUNSQyxhQUFhO2dCQUNiQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7WUFDSjtZQUVBLElBQUlKLFNBQVNLLEVBQUUsRUFBRTtnQkFDYkMsYUFBYTtnQkFDYmIsU0FBU2MsT0FBTyxDQUFDO1lBRXJCLE9BQU87Z0JBQ0hDLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBS0MsT0FBTztZQUM1QjtRQUNKLEVBQUUsT0FBT0MsS0FBSztZQUNWSixRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSjtJQUVBLE1BQU1JLGdCQUFnQjtRQUNsQmxCLGtCQUFrQjtJQUN0QjtJQUVBLHFCQUNJLDhEQUFDbUI7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxQ3ZCLE1BQU15QixRQUFROzs7Ozs7MEJBRWpFLDhEQUFDQztnQkFBSUgsV0FBVTswQkFHWCw0RUFBQ0c7b0JBQUlILFdBQVU7O3NDQUVYLDhEQUFDSTs0QkFBT0MsU0FBU3RCOzRCQUFnQmlCLFdBQVU7OzhDQUMzQyw4REFBQ007b0NBQUtOLFdBQVU7OENBQWdCOzs7Ozs7Z0NBQWM7Ozs7Ozs7d0JBRzdDckIsZ0NBRU8sOERBQUM0Qjs0QkFBR1AsV0FBVTs7OENBQ1YsOERBQUNROzhDQUNHLDRFQUFDckMsa0RBQUlBO3dDQUNEc0MsTUFBSzt3Q0FDTFQsV0FBVTt3Q0FDVkssU0FBU1A7a0RBQ1o7Ozs7Ozs7Ozs7OzhDQUlMLDhEQUFDVTs4Q0FDRyw0RUFBQ3JDLGtEQUFJQTt3Q0FDRHNDLE1BQUs7d0NBQ0xULFdBQVU7d0NBQ1ZLLFNBQVNQO2tEQUNaOzs7Ozs7Ozs7Ozs4Q0FJTCw4REFBQ1U7OENBQ0csNEVBQUVFO3dDQUNFQyxNQUFLO3dDQUNMTixTQUFTOzRDQUNMckI7NENBQWdCYzt3Q0FDcEI7d0NBQ0FFLFdBQVU7d0NBQ1ZZLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTaEQ7R0EzRk1wQzs7UUFFZUosa0RBQVNBO1FBRVJFLG9EQUFVQTs7O0tBSjFCRTtBQTZGTiwrREFBZSxNQUFBRCxxREFBUUEsQ0FBQ0MsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OYXZCYXIuanN4PzA0OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4vd2l0aEF1dGgnXG5cbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbaXNEcm9wZG93bk9wZW4sIHNldElzRHJvcGRvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndXNlciddKTtcbiAgICBcbiAgICBpZighY29va2llcy51c2VyKXtcbiAgICAgICAgcmV0dXJuIFwiXCJcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oIWlzRHJvcGRvd25PcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2F1dGgvbG9nb3V0Jywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNvb2tpZShcInRva2VuXCIpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlLnJlcGxhY2UoJy9hdXRoJylcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXR3b3JrIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC00IGJnLWdyYXktODAwIHB5LTJcIj5cblxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCIgPntwcm9wcy5wYWdlTmFtZX08L2gxPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBcIiA+XG4gICAgICAgICAgICAgICAgey8qIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtYmFzZSBtci00XCI+V2VsY29tZSB7Y29va2llcy51c2VyfTwvaDE+ICovfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiID5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtMnhsXCI+JiM5Nzc2Ozwvc3Bhbj4gey8qIEhhbWJ1cmdlciBpY29uICovfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICB7aXNEcm9wZG93bk9wZW4gJiYgKFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgbXQtMiB3LTQ4IGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLW1kXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2Rhc2hib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcGxhbnRqb3VybmFsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYW50IEpvdXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUxvZ291dCgpOyBjbG9zZURyb3Bkb3duKCk7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBcIkxvZ291dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKE5hdkJhcik7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUNvb2tpZXMiLCJ3aXRoQXV0aCIsIk5hdkJhciIsInByb3BzIiwibmF2aWdhdGUiLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwiY29va2llcyIsInVzZXIiLCJ0b2dnbGVEcm9wZG93biIsImhhbmRsZUxvZ291dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJvayIsInJlbW92ZUNvb2tpZSIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnIiLCJjbG9zZURyb3Bkb3duIiwibmF2IiwiY2xhc3NOYW1lIiwiaDEiLCJwYWdlTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwidWwiLCJsaSIsImhyZWYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/NavBar.jsx\n"));

/***/ })

});