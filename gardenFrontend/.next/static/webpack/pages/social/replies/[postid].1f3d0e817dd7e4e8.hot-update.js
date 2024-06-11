"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/social/replies/[postid]",{

/***/ "./src/pages/social/replies/[postid].jsx":
/*!***********************************************!*\
  !*** ./src/pages/social/replies/[postid].jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Replies = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { postid } = router.query; // Get the dynamic id from the URL\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const [replies, setReplies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchPostsReplies = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/social/\".concat(postid), {\n                method: \"GET\",\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setReplies(data);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    console.log(replies);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"max-w-screen-md w-full\",\n                children: replies && replies.map((reply, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white rounded-lg shadow-md p-4 mb-4 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: reply.userImage,\n                                        className: \"w-10 h-10 rounded-full mr-2\",\n                                        alt: \"User Avatar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-semibold\",\n                                        children: reply.userName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                lineNumber: 56,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-screen-md w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-4 text-center\",\n                                        children: reply.post\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: reply.image,\n                                        className: \"w-full rounded-lg mb-4 mx-auto\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/social/createreply/\".concat(postid),\n                className: \"block p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 text-center text-blue-500 hover:text-blue-700 font-semibold\",\n                children: \"Create Reply for Post\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Replies, \"odR1B1xb4EAJzldmh/XnDG3vuzE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies\n    ];\n});\n_c = Replies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Replies));\nvar _c, _c1;\n$RefreshReg$(_c, \"Replies\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL3JlcGxpZXMvW3Bvc3RpZF0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFDSDtBQUNWO0FBQ29CO0FBQ0E7QUFFakQsTUFBTVEsVUFBVTs7SUFFWixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxNQUFNLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVuRSxNQUFNLENBQUNDLFFBQVEsR0FBR1Qsd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBQ3RDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDLE1BQU1jLG9CQUFvQjtRQUV0QixJQUFJO1lBRUEsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGdDQUF1QyxPQUFQUCxTQUFVO2dCQUNuRVEsUUFBUTtnQkFDUkMsYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkVCxRQUFRVSxLQUFLO2dCQUMxQztZQUNKO1lBRUEsTUFBTUMsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO1lBQ2hDVixXQUFXUztRQUNmLEVBQUUsT0FBT0UsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsVUFBVUEsTUFBTUUsT0FBTztRQUN6QztJQUNKO0lBRUFELFFBQVFFLEdBQUcsQ0FBQ2Y7SUFFZCxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDdkIsOERBQU1BO2dCQUFDd0IsVUFBUzs7Ozs7OzBCQUVqQiw4REFBQ0M7Ozs7OzBCQUVELDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNekIsT0FBTzBCLElBQUk7Z0JBQUlMLFdBQVU7MEJBQTJFOzs7Ozs7MEJBSTNILDhEQUFDRTs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFFRCw4REFBQ0k7Z0JBQUdOLFdBQVU7MEJBQ1RqQixXQUFXQSxRQUFRd0IsR0FBRyxDQUFDLENBQUNDLE9BQU9DO29CQUM1QixxQkFDSSw4REFBQ0M7d0JBQWVWLFdBQVU7OzBDQUN0Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDVzt3Q0FBSUMsS0FBTUosTUFBTUssU0FBUzt3Q0FBR2IsV0FBVTt3Q0FBOEJjLEtBQUk7Ozs7OztrREFDekUsOERBQUNDO3dDQUFHZixXQUFVO2tEQUFtQlEsTUFBTVEsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUVuRCw4REFBQ2Q7Ozs7OzBDQUNELDhEQUFDSDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNlO3dDQUFFZixXQUFVO2tEQUFxQlEsTUFBTVMsSUFBSTs7Ozs7O2tEQUM1Qyw4REFBQ047d0NBQUlDLEtBQUtKLE1BQU1VLEtBQUs7d0NBQUVsQixXQUFVOzs7Ozs7Ozs7Ozs7O3VCQVJoQ1M7Ozs7O2dCQVlqQjs7Ozs7OzBCQUdKLDhEQUFDbEMsa0RBQUlBO2dCQUFDNEMsTUFBTSx1QkFBOEIsT0FBUHZDO2dCQUFVb0IsV0FBVTswQkFBc047Ozs7Ozs7Ozs7OztBQUtyUjtHQWxFTXRCOztRQUVhSixrREFBU0E7UUFHTkQsb0RBQVVBOzs7S0FMMUJLO0FBb0VOLCtEQUFlLE1BQUFGLGdFQUFRQSxDQUFDRSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zb2NpYWwvcmVwbGllcy9bcG9zdGlkXS5qc3g/ZDM5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCc7XG5cbmNvbnN0IFJlcGxpZXMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHBvc3RpZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBHZXQgdGhlIGR5bmFtaWMgaWQgZnJvbSB0aGUgVVJMXG5cbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG4gICAgY29uc3QgW3JlcGxpZXMsIHNldFJlcGxpZXNdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBmZXRjaFBvc3RzUmVwbGllcyA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc29jaWFsLyR7cG9zdGlkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFJlcGxpZXMoZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKHJlcGxpZXMpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS0xMDAgbXgtYXV0b1wiPlxuXG4gICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJTb2NpYWxcIiAvPlxuXG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTcwMCBob3Zlcjp0ZXh0LWVtZXJhbGQtOTAwIGZvbnQtc2VtaWJvbGQgZm9jdXM6b3V0bGluZS1ub25lXCI+XG4gICAgICAgICAgICBHbyBCYWNrXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLW1kIHctZnVsbFwiPlxuICAgICAgICAgICAge3JlcGxpZXMgJiYgcmVwbGllcy5tYXAoKHJlcGx5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTQgbWItNCB3LWZ1bGxcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyByZXBseS51c2VySW1hZ2UgfSBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIG1yLTJcIiBhbHQ9XCJVc2VyIEF2YXRhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIiA+eyByZXBseS51c2VyTmFtZSB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLW1kIHctZnVsbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtY2VudGVyXCIgPntyZXBseS5wb3N0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVwbHkuaW1hZ2V9IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIG1iLTQgbXgtYXV0b1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPExpbmsgaHJlZj17YC9zb2NpYWwvY3JlYXRlcmVwbHkvJHtwb3N0aWR9YH0gY2xhc3NOYW1lPVwiYmxvY2sgcC02IG1heC13LXhzIHNtOm1heC13LXNtIG1kOm1heC13LW1kIGxnOm1heC13LWxnIG14LWF1dG8gYmctd2hpdGUgcm91bmRlZC14bCBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnIGhvdmVyOmJnLWdyYXktMTAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIHRleHQtY2VudGVyIHRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkXCIgPlxuICAgICAgICAgICAgQ3JlYXRlIFJlcGx5IGZvciBQb3N0XG4gICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChSZXBsaWVzKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsInVzZVJvdXRlciIsIkxpbmsiLCJ3aXRoQXV0aCIsIk5hdkJhciIsIlJlcGxpZXMiLCJyb3V0ZXIiLCJwb3N0aWQiLCJxdWVyeSIsImNvb2tpZXMiLCJyZXBsaWVzIiwic2V0UmVwbGllcyIsImZldGNoUG9zdHNSZXBsaWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2VOYW1lIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwiYmFjayIsInVsIiwibWFwIiwicmVwbHkiLCJpbmRleCIsImxpIiwiaW1nIiwic3JjIiwidXNlckltYWdlIiwiYWx0IiwicCIsInVzZXJOYW1lIiwicG9zdCIsImltYWdlIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/social/replies/[postid].jsx\n"));

/***/ })

});