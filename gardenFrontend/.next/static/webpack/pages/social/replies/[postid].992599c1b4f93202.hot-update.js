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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Replies = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { postid } = router.query; // Get the dynamic id from the URL\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const [replies, setReplies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchPostReplies = async ()=>{\n        try {\n            console.log(\"getting replies\");\n            const response = await fetch(\"http://localhost:4000/social/replies/\".concat(postid), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setReplies(data);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPost();\n    }, [\n        postId\n    ]);\n    console.log(replies);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"max-w-screen-md w-full\",\n                children: replies && replies.map((reply, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white rounded-lg shadow-md p-4 mb-4 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: reply.userImage,\n                                        className: \"w-10 h-10 rounded-full mr-2\",\n                                        alt: \"User Avatar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-semibold\",\n                                        children: reply.userName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-screen-md w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-4 text-center\",\n                                        children: reply.post\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: reply.image,\n                                        className: \"w-full rounded-lg mb-4 mx-auto\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/social/createreply/\".concat(postid),\n                className: \"block p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 text-center text-blue-500 hover:text-blue-700 font-semibold\",\n                children: \"Create Reply for Post\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Replies, \"AiAKymer+dB82MTXvp8nH6cKZMo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies\n    ];\n});\n_c = Replies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Replies));\nvar _c, _c1;\n$RefreshReg$(_c, \"Replies\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL3JlcGxpZXMvW3Bvc3RpZF0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFDSDtBQUNWO0FBQ29CO0FBQ0E7QUFFakQsTUFBTVEsVUFBVTs7SUFFWixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxNQUFNLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVuRSxNQUFNLENBQUNDLFFBQVEsR0FBR1Qsd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBQ3RDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDLE1BQU1jLG1CQUFtQjtRQUVyQixJQUFJO1lBQ0FDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx3Q0FBK0MsT0FBUFQsU0FBVTtnQkFDM0VVLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQ0xDLGVBQWUsVUFBd0IsT0FBZFYsUUFBUVcsS0FBSztnQkFDMUM7WUFDSjtZQUVBLE1BQU1DLE9BQU8sTUFBTU4sU0FBU08sSUFBSTtZQUNoQ1gsV0FBV1U7UUFDZixFQUFFLE9BQU9FLE9BQU87WUFDWlYsUUFBUVUsS0FBSyxDQUFDLFVBQVVBLE1BQU1DLE9BQU87UUFDekM7SUFDSjtJQUVBekIsZ0RBQVNBLENBQUM7UUFFTjBCO0lBRUosR0FBRztRQUFDQztLQUFPO0lBRVhiLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFZCxxQkFDRSw4REFBQ2lCO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDeEIsOERBQU1BO2dCQUFDeUIsVUFBUzs7Ozs7OzBCQUVqQiw4REFBQ0M7Ozs7OzBCQUVELDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNMUIsT0FBTzJCLElBQUk7Z0JBQUlMLFdBQVU7MEJBQTJFOzs7Ozs7MEJBSTNILDhEQUFDRTs7Ozs7MEJBQ0QsOERBQUNBOzs7OzswQkFFRCw4REFBQ0k7Z0JBQUdOLFdBQVU7MEJBQ1RsQixXQUFXQSxRQUFReUIsR0FBRyxDQUFDLENBQUNDLE9BQU9DO29CQUM1QixxQkFDSSw4REFBQ0M7d0JBQWVWLFdBQVU7OzBDQUN0Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDVzt3Q0FBSUMsS0FBTUosTUFBTUssU0FBUzt3Q0FBR2IsV0FBVTt3Q0FBOEJjLEtBQUk7Ozs7OztrREFDekUsOERBQUNDO3dDQUFHZixXQUFVO2tEQUFtQlEsTUFBTVEsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUVuRCw4REFBQ2Q7Ozs7OzBDQUNELDhEQUFDSDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNlO3dDQUFFZixXQUFVO2tEQUFxQlEsTUFBTVMsSUFBSTs7Ozs7O2tEQUM1Qyw4REFBQ047d0NBQUlDLEtBQUtKLE1BQU1VLEtBQUs7d0NBQUVsQixXQUFVOzs7Ozs7Ozs7Ozs7O3VCQVJoQ1M7Ozs7O2dCQVlqQjs7Ozs7OzBCQUdKLDhEQUFDbkMsa0RBQUlBO2dCQUFDNkMsTUFBTSx1QkFBOEIsT0FBUHhDO2dCQUFVcUIsV0FBVTswQkFBc047Ozs7Ozs7Ozs7OztBQUtyUjtHQXZFTXZCOztRQUVhSixrREFBU0E7UUFHTkQsb0RBQVVBOzs7S0FMMUJLO0FBeUVOLCtEQUFlLE1BQUFGLGdFQUFRQSxDQUFDRSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zb2NpYWwvcmVwbGllcy9bcG9zdGlkXS5qc3g/ZDM5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCc7XG5cbmNvbnN0IFJlcGxpZXMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHBvc3RpZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBHZXQgdGhlIGR5bmFtaWMgaWQgZnJvbSB0aGUgVVJMXG5cbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG4gICAgY29uc3QgW3JlcGxpZXMsIHNldFJlcGxpZXNdID0gdXNlU3RhdGUoW10pXG5cbiAgICBjb25zdCBmZXRjaFBvc3RSZXBsaWVzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldHRpbmcgcmVwbGllc1wiKVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NvY2lhbC9yZXBsaWVzLyR7cG9zdGlkfWAsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBzZXRSZXBsaWVzKGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGZldGNoUG9zdCgpO1xuXG4gICAgfSwgW3Bvc3RJZF0pO1xuXG4gICAgY29uc29sZS5sb2cocmVwbGllcylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTEwMCBteC1hdXRvXCI+XG5cbiAgICAgICAgPE5hdkJhciBwYWdlTmFtZT1cIlNvY2lhbFwiIC8+XG5cbiAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfSBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNzAwIGhvdmVyOnRleHQtZW1lcmFsZC05MDAgZm9udC1zZW1pYm9sZCBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbWQgdy1mdWxsXCI+XG4gICAgICAgICAgICB7cmVwbGllcyAmJiByZXBsaWVzLm1hcCgocmVwbHksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNCBtYi00IHctZnVsbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMlwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHJlcGx5LnVzZXJJbWFnZSB9IGNsYXNzTmFtZT1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItMlwiIGFsdD1cIlVzZXIgQXZhdGFyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiID57IHJlcGx5LnVzZXJOYW1lIH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbWQgdy1mdWxsXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1jZW50ZXJcIiA+e3JlcGx5LnBvc3R9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXBseS5pbWFnZX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgbWItNCBteC1hdXRvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cblxuICAgICAgICA8TGluayBocmVmPXtgL3NvY2lhbC9jcmVhdGVyZXBseS8ke3Bvc3RpZH1gfSBjbGFzc05hbWU9XCJibG9jayBwLTYgbWF4LXcteHMgc206bWF4LXctc20gbWQ6bWF4LXctbWQgbGc6bWF4LXctbGcgbXgtYXV0byBiZy13aGl0ZSByb3VuZGVkLXhsIHNoYWRvdy1tZCBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6YmctZ3JheS0xMDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgdGV4dC1jZW50ZXIgdGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGRcIiA+XG4gICAgICAgICAgICBDcmVhdGUgUmVwbHkgZm9yIFBvc3RcbiAgICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFJlcGxpZXMpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwidXNlUm91dGVyIiwiTGluayIsIndpdGhBdXRoIiwiTmF2QmFyIiwiUmVwbGllcyIsInJvdXRlciIsInBvc3RpZCIsInF1ZXJ5IiwiY29va2llcyIsInJlcGxpZXMiLCJzZXRSZXBsaWVzIiwiZmV0Y2hQb3N0UmVwbGllcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJmZXRjaFBvc3QiLCJwb3N0SWQiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlTmFtZSIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImJhY2siLCJ1bCIsIm1hcCIsInJlcGx5IiwiaW5kZXgiLCJsaSIsImltZyIsInNyYyIsInVzZXJJbWFnZSIsImFsdCIsInAiLCJ1c2VyTmFtZSIsInBvc3QiLCJpbWFnZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/social/replies/[postid].jsx\n"));

/***/ })

});