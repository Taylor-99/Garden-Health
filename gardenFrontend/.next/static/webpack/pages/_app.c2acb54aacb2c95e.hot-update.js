"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/components/NavBar.jsx":
/*!*****************************************!*\
  !*** ./src/pages/components/NavBar.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withAuth */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NavBar = (props)=>{\n    _s();\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"user\"\n    ]);\n    // if(!cookies.user){\n    //     return (\n    //         <div> Loading ...</div>\n    //     )\n    // }\n    // return (\n    //     <div> </div>\n    // )\n    const toggleDropdown = ()=>{\n        setIsDropdownOpen(!isDropdownOpen);\n    };\n    const handleLogout = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/auth/logout\", {\n                method: \"get\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (response.ok) {\n                removeCookie(\"token\");\n                navigate.replace(\"/auth\");\n            } else {\n                console.log(data.message);\n            }\n        } catch (err) {\n            console.log(\"Network error\");\n        }\n    };\n    const closeDropdown = ()=>{\n        setIsDropdownOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex justify-between items-center px-4 bg-gray-800 py-2\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white font-semibold text-xl\",\n                    children: props.pageName\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" flex items-center \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: toggleDropdown,\n                            className: \"text-white font-semibold px-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"ml-1 text-2xl\",\n                                    children: \"☰\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, undefined),\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n            lineNumber: 55,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/components/NavBar.jsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"SJRuFGgDJrsT1O9P3YY1yBu3FHQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(NavBar));\nvar _c, _c1;\n$RefreshReg$(_c, \"NavBar\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9OYXZCYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDVztBQUNQO0FBQ1E7QUFDUjtBQUVqQyxNQUFNSyxTQUFTLENBQUNDOztJQUVaLE1BQU1DLFdBQVdOLHNEQUFTQTtJQUMxQixNQUFNLENBQUNPLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ1EsUUFBUSxHQUFHUCx3REFBVUEsQ0FBQztRQUFDO0tBQU87SUFDckMscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsUUFBUTtJQUNSLElBQUk7SUFFSixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLElBQUk7SUFDSixNQUFNUSxpQkFBaUI7UUFDbkJGLGtCQUFrQixDQUFDRDtJQUN2QjtJQUVBLE1BQU1JLGVBQWU7UUFDakIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxxQ0FBcUM7Z0JBQzlEQyxRQUFRO2dCQUNSQyxhQUFhO2dCQUNiQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7WUFDSjtZQUVBLElBQUlKLFNBQVNLLEVBQUUsRUFBRTtnQkFDYkMsYUFBYTtnQkFDYlosU0FBU2EsT0FBTyxDQUFDO1lBRXJCLE9BQU87Z0JBQ0hDLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBS0MsT0FBTztZQUM1QjtRQUNKLEVBQUUsT0FBT0MsS0FBSztZQUNWSixRQUFRQyxHQUFHLENBQUM7UUFDaEI7SUFDSjtJQUVBLE1BQU1JLGdCQUFnQjtRQUNsQmpCLGtCQUFrQjtJQUN0QjtJQUVBLHFCQUVJLDhEQUFDa0I7a0JBQ0csNEVBQUNDO1lBQUlDLFdBQVU7OzhCQUVYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBcUN2QixNQUFNeUIsUUFBUTs7Ozs7OzhCQUVqRSw4REFBQ0o7b0JBQUlFLFdBQVU7OEJBR1gsNEVBQUNGO3dCQUFJRSxXQUFVO2tDQUVYLDRFQUFDRzs0QkFBT0MsU0FBU3RCOzRCQUFnQmtCLFdBQVU7OzhDQUMzQyw4REFBQ0s7b0NBQUtMLFdBQVU7OENBQWdCOzs7Ozs7Z0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q3RFO0dBbEdNeEI7O1FBRWVKLGtEQUFTQTtRQUVSRSxvREFBVUE7OztLQUoxQkU7QUFvR04sK0RBQWUsTUFBQUQscURBQVFBLENBQUNDLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvTmF2QmFyLmpzeD8wNDhhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuL3dpdGhBdXRoJ1xuXG5jb25zdCBOYXZCYXIgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2lzRHJvcGRvd25PcGVuLCBzZXRJc0Ryb3Bkb3duT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3VzZXInXSk7IFxuICAgIC8vIGlmKCFjb29raWVzLnVzZXIpe1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgPGRpdj4gTG9hZGluZyAuLi48L2Rpdj5cbiAgICAvLyAgICAgKVxuICAgIC8vIH1cbiAgICBcbiAgICAvLyByZXR1cm4gKFxuICAgIC8vICAgICA8ZGl2PiA8L2Rpdj5cbiAgICAvLyApXG4gICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIHNldElzRHJvcGRvd25PcGVuKCFpc0Ryb3Bkb3duT3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hdXRoL2xvZ291dCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICByZW1vdmVDb29raWUoXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5yZXBsYWNlKCcvYXV0aCcpXG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmV0d29yayBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgcHgtNCBiZy1ncmF5LTgwMCBweS0yXCI+XG5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQteGxcIiA+e3Byb3BzLnBhZ2VOYW1lfTwvaDE+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGl0ZW1zLWNlbnRlciBcIiA+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWJhc2UgbXItNFwiPldlbGNvbWUge2Nvb2tpZXMudXNlcn08L2gxPiAqL31cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCIgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMSB0ZXh0LTJ4bFwiPiYjOTc3Njs8L3NwYW4+IHsvKiBIYW1idXJnZXIgaWNvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge2lzRHJvcGRvd25PcGVuICYmIChcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNDggYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbWRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZURyb3Bkb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wbGFudGpvdXJuYWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtZ3JheS04MDAgaG92ZXI6YmctZ3JheS0yMDBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2VEcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYW50IEpvdXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVMb2dvdXQoKTsgY2xvc2VEcm9wZG93bigpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGVmdCBweC00IHB5LTIgdGV4dC1ncmF5LTgwMCBob3ZlcjpiZy1ncmF5LTIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gXCJMb2dvdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChOYXZCYXIpOyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VDb29raWVzIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJwcm9wcyIsIm5hdmlnYXRlIiwiaXNEcm9wZG93bk9wZW4iLCJzZXRJc0Ryb3Bkb3duT3BlbiIsImNvb2tpZXMiLCJ0b2dnbGVEcm9wZG93biIsImhhbmRsZUxvZ291dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJvayIsInJlbW92ZUNvb2tpZSIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnIiLCJjbG9zZURyb3Bkb3duIiwiZGl2IiwibmF2IiwiY2xhc3NOYW1lIiwiaDEiLCJwYWdlTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/NavBar.jsx\n"));

/***/ })

});