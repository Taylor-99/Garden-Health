"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/wellnessjournal/activity",{

/***/ "./src/pages/wellnessjournal/activity/index.jsx":
/*!******************************************************!*\
  !*** ./src/pages/wellnessjournal/activity/index.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_WellnessNavBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WellnessNavBar.jsx */ \"./src/pages/wellnessjournal/components/WellnessNavBar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Activity = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const [activityLogData, setActivityLogData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const fetchActivityLogs = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/activity\", {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setActivityLogData(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchActivityLogs();\n    }, []);\n    function setDate(dateString) {\n        // Create a Date object from the date string\n        const date = new Date(dateString);\n        // Get the individual components of the date\n        const year = date.getFullYear();\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        let updatedDate = \"\".concat(month, \"/\").concat(day, \"/\").concat(year);\n        return updatedDate;\n    }\n    ;\n    console.log(activityLogData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                pageName: \"Wellness Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WellnessNavBar_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Activity Log\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: [\n                    activityLogData && activityLogData.map((activity, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"bg-white p-4 rounded-lg shadow-md w-45\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Log Date: \",\n                                        setDate(activity.createdAt)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Activity: \",\n                                        activity.activity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Duration: \",\n                                        activity.duration,\n                                        \"min\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white p-4 rounded-lg shadow-md flex justify-center items-center w-45\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/wellnessjournal/createactivitylog\",\n                            className: \"text-blue-500 hover:text-blue-700 font-semibold\",\n                            children: \"Log Activity\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Activity, \"YfT+Ol/l5qzXQfKRfrn7BvAoYP0=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies\n    ];\n});\n_c = Activity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Activity));\nvar _c, _c1;\n$RefreshReg$(_c, \"Activity\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd2VsbG5lc3Nqb3VybmFsL2FjdGl2aXR5L2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2dEO0FBQ2E7QUFDVjtBQUNUO0FBQ2I7QUFDb0I7QUFFakQsTUFBTVEsV0FBVzs7SUFFYixNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxRQUFRLEdBQUdOLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUV0QyxNQUFNLENBQUNPLGlCQUFpQkMsbUJBQW1CLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFFekQsTUFBTVcsb0JBQW9CO1FBRXRCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sa0NBQWtDO2dCQUMzREMsYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkUixRQUFRUyxLQUFLO2dCQUMxQztZQUNKO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDVCxtQkFBbUJRO1lBQ25CWCxXQUFXO1FBQ2YsRUFBRSxPQUFPYSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxVQUFVQSxNQUFNRSxPQUFPO1FBQ3pDO0lBQ0o7SUFFQXJCLGdEQUFTQSxDQUFDO1FBRU5VO0lBRUosR0FBRyxFQUFFO0lBRUwsU0FBU1ksUUFBUUMsVUFBVTtRQUV2Qiw0Q0FBNEM7UUFDNUMsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRjtRQUV0Qiw0Q0FBNEM7UUFDNUMsTUFBTUcsT0FBT0YsS0FBS0csV0FBVztRQUM3QixNQUFNQyxRQUFRSixLQUFLSyxRQUFRLEtBQUs7UUFDaEMsTUFBTUMsTUFBTU4sS0FBS08sT0FBTztRQUV4QixJQUFJQyxjQUFjLEdBQVlGLE9BQVRGLE9BQU0sS0FBVUYsT0FBUEksS0FBSSxLQUFRLE9BQUxKO1FBRXJDLE9BQU9NO0lBQ1g7O0lBR0FaLFFBQVFhLEdBQUcsQ0FBQ3pCO0lBR2QscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ3ZDLDhEQUFNQTtnQkFBQ3dDLFVBQVM7Ozs7OzswQkFDakIsOERBQUNDOzs7OzswQkFDRCw4REFBQ3hDLHNFQUFjQTs7Ozs7MEJBQ2YsOERBQUN3Qzs7Ozs7MEJBRUQsOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDO2dCQUFHSixXQUFVOztvQkFFVDNCLG1CQUFtQkEsZ0JBQWdCZ0MsR0FBRyxDQUFDLENBQUNDLFVBQVVDO3dCQUMvQyxxQkFDSSw4REFBQ0M7NEJBQWVSLFdBQVU7OzhDQUNsQiw4REFBQ1M7O3dDQUFFO3dDQUFXdEIsUUFBUW1CLFNBQVNJLFNBQVM7Ozs7Ozs7OENBQ3hDLDhEQUFDRDs7d0NBQUU7d0NBQVdILFNBQVNBLFFBQVE7Ozs7Ozs7OENBQy9CLDhEQUFDRzs7d0NBQUU7d0NBQVdILFNBQVNLLFFBQVE7d0NBQUM7Ozs7Ozs7OENBRXBDLDhEQUFDVDs7Ozs7OzJCQUxJSzs7Ozs7b0JBUWpCO2tDQUNBLDhEQUFDQzt3QkFBR1IsV0FBVTtrQ0FDViw0RUFBQ2pDLGtEQUFJQTs0QkFBQzZDLE1BQUs7NEJBQXFDWixXQUFVO3NDQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTNUg7R0FsRk0vQjs7UUFHZ0JILG9EQUFVQTs7O0tBSDFCRztBQW9GTiwrREFBZSxNQUFBRCxnRUFBUUEsQ0FBQ0MsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvd2VsbG5lc3Nqb3VybmFsL2FjdGl2aXR5L2luZGV4LmpzeD8yMDRmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IE5hdkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhci5qc3gnXG5pbXBvcnQgV2VsbG5lc3NOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9XZWxsbmVzc05hdkJhci5qc3gnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGhBdXRoJztcblxuY29uc3QgQWN0aXZpdHkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuXG4gICAgY29uc3QgW2FjdGl2aXR5TG9nRGF0YSwgc2V0QWN0aXZpdHlMb2dEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGZldGNoQWN0aXZpdHlMb2dzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvYWN0aXZpdHknLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBzZXRBY3Rpdml0eUxvZ0RhdGEoZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBmZXRjaEFjdGl2aXR5TG9ncygpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgZnVuY3Rpb24gc2V0RGF0ZShkYXRlU3RyaW5nKXtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBhIERhdGUgb2JqZWN0IGZyb20gdGhlIGRhdGUgc3RyaW5nXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdldCB0aGUgaW5kaXZpZHVhbCBjb21wb25lbnRzIG9mIHRoZSBkYXRlXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHVwZGF0ZWREYXRlID0gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWREYXRlXG4gICAgfTtcblxuXG4gICAgY29uc29sZS5sb2coYWN0aXZpdHlMb2dEYXRhKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctZ3JheS0xMDAgbXgtYXV0b1wiPlxuICAgICAgICA8TmF2QmFyIHBhZ2VOYW1lPSdXZWxsbmVzcyBKb3VybmFsJyAvPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPFdlbGxuZXNzTmF2QmFyIC8+XG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIDxoMT5BY3Rpdml0eSBMb2c8L2gxPlxuXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00XCIgPlxuXG4gICAgICAgICAgICB7YWN0aXZpdHlMb2dEYXRhICYmIGFjdGl2aXR5TG9nRGF0YS5tYXAoKGFjdGl2aXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbWQgdy00NVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb2cgRGF0ZToge3NldERhdGUoYWN0aXZpdHkuY3JlYXRlZEF0KX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWN0aXZpdHk6IHthY3Rpdml0eS5hY3Rpdml0eX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHVyYXRpb246IHthY3Rpdml0eS5kdXJhdGlvbn1taW48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy00NVwiID5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dlbGxuZXNzam91cm5hbC9jcmVhdGVhY3Rpdml0eWxvZ1wiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIExvZyBBY3Rpdml0eVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgPC91bD5cblxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKEFjdGl2aXR5KTsiXSwibmFtZXMiOlsiTmF2QmFyIiwiV2VsbG5lc3NOYXZCYXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsIkxpbmsiLCJ3aXRoQXV0aCIsIkFjdGl2aXR5IiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZXMiLCJhY3Rpdml0eUxvZ0RhdGEiLCJzZXRBY3Rpdml0eUxvZ0RhdGEiLCJmZXRjaEFjdGl2aXR5TG9ncyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJzZXREYXRlIiwiZGF0ZVN0cmluZyIsImRhdGUiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ1cGRhdGVkRGF0ZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2VOYW1lIiwiYnIiLCJoMSIsInVsIiwibWFwIiwiYWN0aXZpdHkiLCJpbmRleCIsImxpIiwicCIsImNyZWF0ZWRBdCIsImR1cmF0aW9uIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/wellnessjournal/activity/index.jsx\n"));

/***/ })

});