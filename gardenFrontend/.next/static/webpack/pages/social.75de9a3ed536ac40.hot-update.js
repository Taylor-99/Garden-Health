"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/social",{

/***/ "./src/pages/components/NavBar.jsx":
/*!*****************************************!*\
  !*** ./src/pages/components/NavBar.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withAuth */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavBar = (props)=>{\n    _s();\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"user\"\n    ]);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const userName = cookies.user;\n        if (userName) {\n            setUsername(userName);\n        }\n    }, []);\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLogout = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/auth/logout\", {\n                method: \"get\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (response.ok) {\n                removeCookie(\"token\");\n                navigate.replace(\"/auth\");\n            } else {\n                console.log(data.message);\n            }\n        } catch (err) {\n            console.log(\"Network error\");\n        }\n    };\n    const closeDropdown = ()=>{\n        setIsDropdownOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex justify-between items-center px-4 bg-gray-800 py-2 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white font-semibold text-xl\",\n                    children: props.pageName\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex items-center \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white text-base mr-4\",\n                            children: [\n                                \"Welcome \",\n                                username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleDropdown,\n                                    className: \"text-white font-semibold px-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"ml-1 text-2xl\",\n                                            children: \"☰\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, undefined),\n                                isDropdownOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/dashboard\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Dashboard\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/plantjournal/garden\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Plant Journal\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/wellnessjournal/mood\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Wellness Journal\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/social\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"Social\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                href: \"/profile\",\n                                                className: \"block px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                onClick: closeDropdown,\n                                                children: \"View Profile\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 37\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"button\",\n                                                onClick: ()=>{\n                                                    handleLogout();\n                                                    closeDropdown();\n                                                },\n                                                className: \"w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200\",\n                                                value: \"Logout\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                                lineNumber: 115,\n                                                columnNumber: 41\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"1QqDzOHrd7nN4oBSBfLOGSC4IXY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(NavBar));\nvar _c, _c1;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFnZXMvY29tcG9uZW50cy9OYXZCYXIuanN4PzA0OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuL3dpdGhBdXRoJ1xuXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3VzZXInXSk7XG5cbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyBjb25zdCB1c2VyTmFtZSA9IGNvb2tpZXMudXNlcjsgaWYgKHVzZXJOYW1lKSB7IHNldFVzZXJuYW1lKHVzZXJOYW1lKTsgfSB9LCBbXSk7XG5cbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oIWlzRHJvcGRvd25PcGVuKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2F1dGgvbG9nb3V0Jywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIHJlbW92ZUNvb2tpZShcInRva2VuXCIpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlLnJlcGxhY2UoJy9hdXRoJylcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXR3b3JrIGVycm9yJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VEcm9wZG93biA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNEcm9wZG93bk9wZW4oZmFsc2UpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC00IGJnLWdyYXktODAwIHB5LTIgdy1mdWxsXCI+XG5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQteGxcIiA+e3Byb3BzLnBhZ2VOYW1lfTwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBcIiA+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1iYXNlIG1yLTRcIj5XZWxjb21lIHt1c2VybmFtZX08L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlRHJvcGRvd259IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xIHRleHQtMnhsXCI+JiM5Nzc2Ozwvc3Bhbj4gey8qIEhhbWJ1cmdlciBpY29uICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0Ryb3Bkb3duT3BlbiAmJiAoXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgbXQtMiB3LTQ4IGJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLW1kXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2Rhc2hib2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcGxhbnRqb3VybmFsL2dhcmRlblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTIwMFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhbnQgSm91cm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvd2VsbG5lc3Nqb3VybmFsL21vb2RcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlbGxuZXNzIEpvdXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3NvY2lhbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTIwMFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29jaWFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9maWxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LWdyYXktODAwIGhvdmVyOmJnLWdyYXktMjAwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlRHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVMb2dvdXQoKTsgY2xvc2VEcm9wZG93bigpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJMb2dvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKE5hdkJhcik7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJ3aXRoQXV0aCIsIk5hdkJhciIsInByb3BzIiwibmF2aWdhdGUiLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwiY29va2llcyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VyTmFtZSIsInVzZXIiLCJ0b2dnbGVEcm9wZG93biIsImhhbmRsZUxvZ291dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJvayIsInJlbW92ZUNvb2tpZSIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnIiLCJjbG9zZURyb3Bkb3duIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwiaDEiLCJwYWdlTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwidWwiLCJsaSIsImhyZWYiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/NavBar.jsx\n"));

/***/ })

});