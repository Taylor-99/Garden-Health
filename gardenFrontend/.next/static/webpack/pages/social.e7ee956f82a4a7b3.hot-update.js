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

/***/ "./src/pages/social/index.jsx":
/*!************************************!*\
  !*** ./src/pages/social/index.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Socail = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"token\"\n    ]);\n    const [socialPosts, setSocialPosts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [socialPostsReplies, setSocialPostsReplies] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const fetchPosts = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/social\", {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setSocialPosts(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    // const fetchPostsReplies = async () => {\n    //     try {\n    //         const response = await fetch('http://localhost:4000/social', {\n    //             credentials: 'include',\n    //             headers: {\n    //                 Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header\n    //             }\n    //         });\n    //         const data = await response.json()\n    //         setSocialPosts(data)\n    //         setLoading(false)\n    //     } catch (error) {\n    //         console.error('Error:', error.message);\n    //     }\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchPosts();\n    }, []);\n    console.log(socialPosts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                pageName: \"Social\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/index.jsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/wellnessjournal/createmoodlog\",\n                className: \"text-blue-500 hover:text-blue-700 font-semibold\",\n                children: \"Create a Post\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/index.jsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/social/index.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Socail, \"Y1EWg7M4xX9gJHawX7TehFNhzhI=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = Socail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Socail));\nvar _c, _c1;\n$RefreshReg$(_c, \"Socail\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc29jaWFsL2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkM7QUFDTTtBQUNUO0FBQ2I7QUFDcUI7QUFFbEQsTUFBTU8sU0FBUzs7SUFFWCxNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxRQUFRLEdBQUdOLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUV0QyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNXLG9CQUFvQkMsc0JBQXNCLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0QsTUFBTWEsYUFBYTtRQUVmLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZ0NBQWdDO2dCQUN6REMsYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkVixRQUFRVyxLQUFLO2dCQUMxQztZQUNKO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDWCxlQUFlVTtZQUNmYixXQUFXO1FBQ2YsRUFBRSxPQUFPZSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxVQUFVQSxNQUFNRSxPQUFPO1FBQ3pDO0lBQ0o7SUFDQSwwQ0FBMEM7SUFFMUMsWUFBWTtJQUNaLHlFQUF5RTtJQUN6RSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLDZHQUE2RztJQUM3RyxnQkFBZ0I7SUFDaEIsY0FBYztJQUVkLDZDQUE2QztJQUM3QywrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixrREFBa0Q7SUFDbEQsUUFBUTtJQUNSLEtBQUs7SUFFTHZCLGdEQUFTQSxDQUFDO1FBRU5ZO0lBRUosR0FBRyxFQUFFO0lBRUxVLFFBQVFFLEdBQUcsQ0FBQ2hCO0lBRWQscUJBQ0UsOERBQUNpQjs7MEJBQ0csOERBQUM1Qiw4REFBTUE7Z0JBQUM2QixVQUFTOzs7Ozs7MEJBRWpCLDhEQUFDeEIsa0RBQUlBO2dCQUFDeUIsTUFBSztnQkFBaUNDLFdBQVU7MEJBQWtEOzs7Ozs7Ozs7Ozs7QUFNaEg7R0E3RE14Qjs7UUFHZ0JILG9EQUFVQTs7O0tBSDFCRztBQStETiwrREFBZSxNQUFBRCxvRUFBUUEsQ0FBQ0MsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvc29jaWFsL2luZGV4LmpzeD8zNjU0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci5qc3gnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhBdXRoLmpzeCc7XG5cbmNvbnN0IFNvY2FpbCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG5cbiAgICBjb25zdCBbc29jaWFsUG9zdHMsIHNldFNvY2lhbFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc29jaWFsUG9zdHNSZXBsaWVzLCBzZXRTb2NpYWxQb3N0c1JlcGxpZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NvY2lhbCcsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFNvY2lhbFBvc3RzKGRhdGEpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGNvbnN0IGZldGNoUG9zdHNSZXBsaWVzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvc29jaWFsJywge1xuICAgIC8vICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgLy8gICAgICAgICAgICAgaGVhZGVyczoge1xuICAgIC8vICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICB9KTtcblxuICAgIC8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIC8vICAgICAgICAgc2V0U29jaWFsUG9zdHMoZGF0YSlcbiAgICAvLyAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBmZXRjaFBvc3RzKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zb2xlLmxvZyhzb2NpYWxQb3N0cylcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9J1NvY2lhbCcgLz5cblxuICAgICAgICA8TGluayBocmVmPVwiL3dlbGxuZXNzam91cm5hbC9jcmVhdGVtb29kbG9nXCIgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICBDcmVhdGUgYSBQb3N0XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoU29jYWlsKSJdLCJuYW1lcyI6WyJOYXZCYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsIkxpbmsiLCJ3aXRoQXV0aCIsIlNvY2FpbCIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWVzIiwic29jaWFsUG9zdHMiLCJzZXRTb2NpYWxQb3N0cyIsInNvY2lhbFBvc3RzUmVwbGllcyIsInNldFNvY2lhbFBvc3RzUmVwbGllcyIsImZldGNoUG9zdHMiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwibG9nIiwiZGl2IiwicGFnZU5hbWUiLCJocmVmIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/social/index.jsx\n"));

/***/ })

});