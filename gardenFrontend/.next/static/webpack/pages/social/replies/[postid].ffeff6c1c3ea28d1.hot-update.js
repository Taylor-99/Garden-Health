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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_ReplyPost_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ReplyPost.jsx */ \"./src/pages/social/components/ReplyPost.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Replies = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { postid } = router.query; // Get the dynamic id from the URL\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies)([\n        \"token\"\n    ]);\n    const [replieData, setReplies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchPostReplies = async ()=>{\n        try {\n            console.log(\"getting replies\");\n            const response = await fetch(\"http://localhost:4000/social/replies/\".concat(postid), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setReplieData(data);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchPostReplies();\n    }, [\n        postid\n    ]);\n    console.log(replies);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.back(),\n                className: \"text-emerald-700 hover:text-emerald-900 font-semibold focus:outline-none\",\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ReplyPost_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                postid: postid\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"max-w-screen-md w-full\",\n                children: replies && replies.map((reply, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white rounded-lg shadow-md p-4 mb-4 w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: reply.userImage,\n                                        className: \"w-10 h-10 rounded-full mr-2\",\n                                        alt: \"User Avatar\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-semibold\",\n                                        children: reply.userName\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"max-w-screen-md w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-4 text-center\",\n                                        children: reply.reply\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: reply.image,\n                                        className: \"w-full rounded-lg mb-4 mx-auto\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/social/createreply/\".concat(postid),\n                className: \"block p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition duration-300 text-center text-blue-500 hover:text-blue-700 font-semibold\",\n                children: \"Create Reply for Post\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/replies/[postid].jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Replies, \"flxi1vdz/YQ8GPLeHCsaz58qF5M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies\n    ];\n});\n_c = Replies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Replies));\nvar _c, _c1;\n$RefreshReg$(_c, \"Replies\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL3JlcGxpZXMvW3Bvc3RpZF0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNUO0FBQ0g7QUFDVjtBQUNvQjtBQUNBO0FBQ0U7QUFFbkQsTUFBTVMsVUFBVTs7SUFFWixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxNQUFNLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVuRSxNQUFNLENBQUNDLFFBQVEsR0FBR1Ysd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBQ3RDLE1BQU0sQ0FBQ1csWUFBWUMsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTVDLE1BQU1lLG1CQUFtQjtRQUVyQixJQUFJO1lBQ0FDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx3Q0FBK0MsT0FBUFQsU0FBVTtnQkFDM0VVLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQ0xDLGVBQWUsVUFBd0IsT0FBZFYsUUFBUVcsS0FBSztnQkFDMUM7WUFDSjtZQUVBLE1BQU1DLE9BQU8sTUFBTU4sU0FBU08sSUFBSTtZQUNoQ0MsY0FBY0Y7UUFDbEIsRUFBRSxPQUFPRyxPQUFPO1lBQ1pYLFFBQVFXLEtBQUssQ0FBQyxVQUFVQSxNQUFNQyxPQUFPO1FBQ3pDO0lBQ0o7SUFFQTNCLGdEQUFTQSxDQUFDO1FBRU5jO0lBRUosR0FBRztRQUFDTDtLQUFPO0lBRVhNLFFBQVFDLEdBQUcsQ0FBQ1k7SUFFZCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRVgsOERBQUN6Qiw4REFBTUE7Z0JBQUMwQixVQUFTOzs7Ozs7MEJBRWpCLDhEQUFDQzs7Ozs7MEJBRUQsOERBQUNDO2dCQUFPQyxTQUFTLElBQU0xQixPQUFPMkIsSUFBSTtnQkFBSUwsV0FBVTswQkFBMkU7Ozs7OzswQkFJM0gsOERBQUNFOzs7OzswQkFDRCw4REFBQ0E7Ozs7OzBCQUVELDhEQUFDMUIsaUVBQVNBO2dCQUFDRyxRQUFRQTs7Ozs7OzBCQUVuQiw4REFBQzJCO2dCQUFHTixXQUFVOzBCQUNURixXQUFXQSxRQUFRUyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0M7b0JBQzVCLHFCQUNJLDhEQUFDQzt3QkFBZVYsV0FBVTs7MENBQ3RCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNXO3dDQUFJQyxLQUFNSixNQUFNSyxTQUFTO3dDQUFHYixXQUFVO3dDQUE4QmMsS0FBSTs7Ozs7O2tEQUN6RSw4REFBQ0M7d0NBQUdmLFdBQVU7a0RBQW1CUSxNQUFNUSxRQUFROzs7Ozs7Ozs7Ozs7MENBRW5ELDhEQUFDZDs7Ozs7MENBQ0QsOERBQUNIO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ2U7d0NBQUVmLFdBQVU7a0RBQXFCUSxNQUFNQSxLQUFLOzs7Ozs7a0RBQzdDLDhEQUFDRzt3Q0FBSUMsS0FBS0osTUFBTVMsS0FBSzt3Q0FBRWpCLFdBQVU7Ozs7Ozs7Ozs7Ozs7dUJBUmhDUzs7Ozs7Z0JBWWpCOzs7Ozs7MEJBR0osOERBQUNwQyxrREFBSUE7Z0JBQUM2QyxNQUFNLHVCQUE4QixPQUFQdkM7Z0JBQVVxQixXQUFVOzBCQUFzTjs7Ozs7Ozs7Ozs7O0FBS3JSO0dBekVNdkI7O1FBRWFMLGtEQUFTQTtRQUdORCxvREFBVUE7OztLQUwxQk07QUEyRU4sK0RBQWUsTUFBQUgsZ0VBQVFBLENBQUNHLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NvY2lhbC9yZXBsaWVzL1twb3N0aWRdLmpzeD9kMzljIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXIuanN4JztcbmltcG9ydCBSZXBseVBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9SZXBseVBvc3QuanN4J1xuXG5jb25zdCBSZXBsaWVzID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBwb3N0aWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gR2V0IHRoZSBkeW5hbWljIGlkIGZyb20gdGhlIFVSTFxuXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuICAgIGNvbnN0IFtyZXBsaWVEYXRhLCBzZXRSZXBsaWVzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgZmV0Y2hQb3N0UmVwbGllcyA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIHJlcGxpZXNcIilcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zb2NpYWwvcmVwbGllcy8ke3Bvc3RpZH1gLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgc2V0UmVwbGllRGF0YShkYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBmZXRjaFBvc3RSZXBsaWVzKCk7XG5cbiAgICB9LCBbcG9zdGlkXSk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXBsaWVzKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwIG14LWF1dG9cIj5cblxuICAgICAgICA8TmF2QmFyIHBhZ2VOYW1lPVwiU29jaWFsXCIgLz5cblxuICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9IGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC03MDAgaG92ZXI6dGV4dC1lbWVyYWxkLTkwMCBmb250LXNlbWlib2xkIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgR28gQmFja1xuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgPFJlcGx5UG9zdCBwb3N0aWQ9e3Bvc3RpZH0gLz5cblxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLW1kIHctZnVsbFwiPlxuICAgICAgICAgICAge3JlcGxpZXMgJiYgcmVwbGllcy5tYXAoKHJlcGx5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTQgbWItNCB3LWZ1bGxcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9eyByZXBseS51c2VySW1hZ2UgfSBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIG1yLTJcIiBhbHQ9XCJVc2VyIEF2YXRhclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIiA+eyByZXBseS51c2VyTmFtZSB9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLW1kIHctZnVsbFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtY2VudGVyXCIgPntyZXBseS5yZXBseX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcGx5LmltYWdlfSBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBtYi00IG14LWF1dG9cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxMaW5rIGhyZWY9e2Avc29jaWFsL2NyZWF0ZXJlcGx5LyR7cG9zdGlkfWB9IGNsYXNzTmFtZT1cImJsb2NrIHAtNiBtYXgtdy14cyBzbTptYXgtdy1zbSBtZDptYXgtdy1tZCBsZzptYXgtdy1sZyBteC1hdXRvIGJnLXdoaXRlIHJvdW5kZWQteGwgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpiZy1ncmF5LTEwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCB0ZXh0LWNlbnRlciB0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZFwiID5cbiAgICAgICAgICAgIENyZWF0ZSBSZXBseSBmb3IgUG9zdFxuICAgICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoUmVwbGllcykiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJSZXBseVBvc3QiLCJSZXBsaWVzIiwicm91dGVyIiwicG9zdGlkIiwicXVlcnkiLCJjb29raWVzIiwicmVwbGllRGF0YSIsInNldFJlcGxpZXMiLCJmZXRjaFBvc3RSZXBsaWVzIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsInNldFJlcGxpZURhdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJyZXBsaWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZU5hbWUiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiYWNrIiwidWwiLCJtYXAiLCJyZXBseSIsImluZGV4IiwibGkiLCJpbWciLCJzcmMiLCJ1c2VySW1hZ2UiLCJhbHQiLCJwIiwidXNlck5hbWUiLCJpbWFnZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/social/replies/[postid].jsx\n"));

/***/ })

});