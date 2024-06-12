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

/***/ "./src/pages/social/components/ReplyPost.jsx":
/*!***************************************************!*\
  !*** ./src/pages/social/components/ReplyPost.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n// import { useRouter } from 'next/router'\n\n\n\nconst ReplyPost = (param)=>{\n    let { postid } = param;\n    _s();\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"token\"\n    ]);\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchPost = async ()=>{\n        try {\n            console.log(\"id = \", postId);\n            const response = await fetch(\"http://localhost:4000/social/post/\".concat(postid), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setPost(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white rounded-lg shadow-md p-4 mb-4 w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center mb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: post.userImage,\n                            className: \"w-10 h-10 rounded-full mr-2\",\n                            alt: \"User Avatar\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/components/ReplyPost.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-semibold\",\n                            children: post.userName\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/components/ReplyPost.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/components/ReplyPost.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/components/ReplyPost.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-screen-md w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mb-4 text-center\",\n                            children: post.reply\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/components/ReplyPost.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: post.image,\n                            className: \"w-full rounded-lg mb-4 mx-auto\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/components/ReplyPost.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/components/ReplyPost.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/components/ReplyPost.jsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/components/ReplyPost.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReplyPost, \"NuGd/NtS52oZx7OTk+M+fZnAxE0=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = ReplyPost;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReplyPost);\nvar _c;\n$RefreshReg$(_c, \"ReplyPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL2NvbXBvbmVudHMvUmVwbHlQb3N0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFDMUMsMENBQTBDO0FBQ0g7QUFDVjtBQUNvQjtBQUVqRCxNQUFNTyxZQUFZO1FBQUMsRUFBQ0MsTUFBTSxFQUFDOztJQUN2QixNQUFNLENBQUNDLFFBQVEsR0FBR04sd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBQ3RDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DLE1BQU1XLFlBQVk7UUFFZCxJQUFJO1lBQ0FDLFFBQVFDLEdBQUcsQ0FBQyxTQUFTQztZQUNyQixNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUNBQTRDLE9BQVBULFNBQVU7Z0JBQ3hFVSxhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRYLFFBQVFZLEtBQUs7Z0JBQzFDO1lBQ0o7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFDaENaLFFBQVFXO1lBQ1JFLFdBQVc7UUFDZixFQUFFLE9BQU9DLE9BQU87WUFDWlosUUFBUVksS0FBSyxDQUFDLFVBQVVBLE1BQU1DLE9BQU87UUFDekM7SUFDSjtJQUNGLHFCQUNFLDhEQUFDQztrQkFDRyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQUlDLEtBQU1wQixLQUFLcUIsU0FBUzs0QkFBR0gsV0FBVTs0QkFBOEJJLEtBQUk7Ozs7OztzQ0FDeEUsOERBQUNDOzRCQUFHTCxXQUFVO3NDQUFtQmxCLEtBQUt3QixRQUFROzs7Ozs7Ozs7Ozs7OEJBRWxELDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNSO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0s7NEJBQUVMLFdBQVU7c0NBQXFCbEIsS0FBSzBCLEtBQUs7Ozs7OztzQ0FFNUMsOERBQUNQOzRCQUFJQyxLQUFLcEIsS0FBSzJCLEtBQUs7NEJBQUVULFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hEO0dBdENNckI7O1FBQ2dCSixvREFBVUE7OztLQUQxQkk7QUF3Q04sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NvY2lhbC9jb21wb25lbnRzL1JlcGx5UG9zdC5qc3g/ZjMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoJztcblxuY29uc3QgUmVwbHlQb3N0ID0gKHtwb3N0aWR9KSA9PiB7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpZCA9IFwiLCBwb3N0SWQpXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvc29jaWFsL3Bvc3QvJHtwb3N0aWR9YCwge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgc2V0UG9zdChkYXRhKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIHAtNCBtYi00IHctZnVsbFwiID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWItMlwiID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17IHBvc3QudXNlckltYWdlIH0gY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBtci0yXCIgYWx0PVwiVXNlciBBdmF0YXJcIiAvPlxuICAgICAgICAgICAgICAgIDxwICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCIgPnsgcG9zdC51c2VyTmFtZSB9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLW1kIHctZnVsbFwiID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtY2VudGVyXCIgPntwb3N0LnJlcGx5fTwvcD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5pbWFnZX0gY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgbWItNCBteC1hdXRvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXBseVBvc3QiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwid2l0aEF1dGgiLCJSZXBseVBvc3QiLCJwb3N0aWQiLCJjb29raWVzIiwicG9zdCIsInNldFBvc3QiLCJmZXRjaFBvc3QiLCJjb25zb2xlIiwibG9nIiwicG9zdElkIiwicmVzcG9uc2UiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsImRhdGEiLCJqc29uIiwic2V0TG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInVzZXJJbWFnZSIsImFsdCIsInAiLCJ1c2VyTmFtZSIsImJyIiwicmVwbHkiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/social/components/ReplyPost.jsx\n"));

/***/ })

});