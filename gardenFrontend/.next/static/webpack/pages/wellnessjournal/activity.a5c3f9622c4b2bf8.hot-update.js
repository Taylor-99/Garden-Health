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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_WellnessNavBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WellnessNavBar.jsx */ \"./src/pages/wellnessjournal/components/WellnessNavBar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/withAuth */ \"./src/pages/components/withAuth.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Activity = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    const [activityLogData, setActivityLogData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const fetchActivityLogs = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/activity\", {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setActivityLogData(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchActivityLogs();\n    }, []);\n    function setDate(dateString) {\n        // Create a Date object from the date string\n        const date = new Date(dateString);\n        // Get the individual components of the date\n        const year = date.getFullYear();\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        let updatedDate = \"\".concat(month, \"/\").concat(day, \"/\").concat(year);\n        return updatedDate;\n    }\n    ;\n    console.log(activityLogData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-center bg-gray-100 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                pageName: \"Wellness Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WellnessNavBar_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Activity Log\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: [\n                    activityLogData && activityLogData.map((activity, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"bg-white p-4 rounded-lg shadow-md w-45\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl font-semibold mb-2\",\n                                    children: [\n                                        \"Log Date: \",\n                                        setDate(activity.createdAt)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Activity: \",\n                                        activity.activity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Duration: \",\n                                        activity.duration,\n                                        \" min\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Was Activity Outdoors: \",\n                                        activity.outdoors\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Mood After Activity: \",\n                                        activity.activity_mood\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white p-4 rounded-lg shadow-md flex justify-center items-center w-45\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/wellnessjournal/createactivitylog\",\n                            className: \"text-blue-500 hover:text-blue-700 font-semibold\",\n                            children: \"Log Activity\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/wellnessjournal/activity/index.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Activity, \"YfT+Ol/l5qzXQfKRfrn7BvAoYP0=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies\n    ];\n});\n_c = Activity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Activity));\nvar _c, _c1;\n$RefreshReg$(_c, \"Activity\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd2VsbG5lc3Nqb3VybmFsL2FjdGl2aXR5L2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2dEO0FBQ2E7QUFDVjtBQUNUO0FBQ2I7QUFDb0I7QUFFakQsTUFBTVEsV0FBVzs7SUFFYixNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxRQUFRLEdBQUdOLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUV0QyxNQUFNLENBQUNPLGlCQUFpQkMsbUJBQW1CLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFFekQsTUFBTVcsb0JBQW9CO1FBRXRCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sa0NBQWtDO2dCQUMzREMsYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkUixRQUFRUyxLQUFLO2dCQUMxQztZQUNKO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDVCxtQkFBbUJRO1lBQ25CWCxXQUFXO1FBQ2YsRUFBRSxPQUFPYSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxVQUFVQSxNQUFNRSxPQUFPO1FBQ3pDO0lBQ0o7SUFFQXJCLGdEQUFTQSxDQUFDO1FBRU5VO0lBRUosR0FBRyxFQUFFO0lBRUwsU0FBU1ksUUFBUUMsVUFBVTtRQUV2Qiw0Q0FBNEM7UUFDNUMsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRjtRQUV0Qiw0Q0FBNEM7UUFDNUMsTUFBTUcsT0FBT0YsS0FBS0csV0FBVztRQUM3QixNQUFNQyxRQUFRSixLQUFLSyxRQUFRLEtBQUs7UUFDaEMsTUFBTUMsTUFBTU4sS0FBS08sT0FBTztRQUV4QixJQUFJQyxjQUFjLEdBQVlGLE9BQVRGLE9BQU0sS0FBVUYsT0FBUEksS0FBSSxLQUFRLE9BQUxKO1FBRXJDLE9BQU9NO0lBQ1g7O0lBR0FaLFFBQVFhLEdBQUcsQ0FBQ3pCO0lBR2QscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ3ZDLDhEQUFNQTtnQkFBQ3dDLFVBQVM7Ozs7OzswQkFDakIsOERBQUNDOzs7OzswQkFDRCw4REFBQ3hDLHNFQUFjQTs7Ozs7MEJBQ2YsOERBQUN3Qzs7Ozs7MEJBRUQsOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDO2dCQUFHSixXQUFVOztvQkFFVDNCLG1CQUFtQkEsZ0JBQWdCZ0MsR0FBRyxDQUFDLENBQUNDLFVBQVVDO3dCQUMvQyxxQkFDSSw4REFBQ0M7NEJBQWVSLFdBQVU7OzhDQUNsQiw4REFBQ1M7b0NBQUVULFdBQVU7O3dDQUE2Qjt3Q0FBV2IsUUFBUW1CLFNBQVNJLFNBQVM7Ozs7Ozs7OENBQy9FLDhEQUFDRDs7d0NBQUU7d0NBQVdILFNBQVNBLFFBQVE7Ozs7Ozs7OENBQy9CLDhEQUFDRzs7d0NBQUU7d0NBQVdILFNBQVNLLFFBQVE7d0NBQUM7Ozs7Ozs7OENBQ2hDLDhEQUFDRjs7d0NBQUU7d0NBQXdCSCxTQUFTTSxRQUFROzs7Ozs7OzhDQUM1Qyw4REFBQ0g7O3dDQUFFO3dDQUFzQkgsU0FBU08sYUFBYTs7Ozs7Ozs4Q0FFbkQsOERBQUNYOzs7Ozs7MkJBUElLOzs7OztvQkFVakI7a0NBQ0EsOERBQUNDO3dCQUFHUixXQUFVO2tDQUNWLDRFQUFDakMsa0RBQUlBOzRCQUFDK0MsTUFBSzs0QkFBcUNkLFdBQVU7c0NBQWtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM1SDtHQXBGTS9COztRQUdnQkgsb0RBQVVBOzs7S0FIMUJHO0FBc0ZOLCtEQUFlLE1BQUFELGdFQUFRQSxDQUFDQyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy93ZWxsbmVzc2pvdXJuYWwvYWN0aXZpdHkvaW5kZXguanN4PzIwNGYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCdcbmltcG9ydCBXZWxsbmVzc05hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL1dlbGxuZXNzTmF2QmFyLmpzeCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aEF1dGgnO1xuXG5jb25zdCBBY3Rpdml0eSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG5cbiAgICBjb25zdCBbYWN0aXZpdHlMb2dEYXRhLCBzZXRBY3Rpdml0eUxvZ0RhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgZmV0Y2hBY3Rpdml0eUxvZ3MgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hY3Rpdml0eScsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldEFjdGl2aXR5TG9nRGF0YShkYXRhKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGZldGNoQWN0aXZpdHlMb2dzKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBmdW5jdGlvbiBzZXREYXRlKGRhdGVTdHJpbmcpe1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIGEgRGF0ZSBvYmplY3QgZnJvbSB0aGUgZGF0ZSBzdHJpbmdcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICAgICAgICBcbiAgICAgICAgLy8gR2V0IHRoZSBpbmRpdmlkdWFsIGNvbXBvbmVudHMgb2YgdGhlIGRhdGVcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxOyBcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdXBkYXRlZERhdGUgPSBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdXBkYXRlZERhdGVcbiAgICB9O1xuXG5cbiAgICBjb25zb2xlLmxvZyhhY3Rpdml0eUxvZ0RhdGEpXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTEwMCBteC1hdXRvXCI+XG4gICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9J1dlbGxuZXNzIEpvdXJuYWwnIC8+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8V2VsbG5lc3NOYXZCYXIgLz5cbiAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgPGgxPkFjdGl2aXR5IExvZzwvaDE+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIiA+XG5cbiAgICAgICAgICAgIHthY3Rpdml0eUxvZ0RhdGEgJiYgYWN0aXZpdHlMb2dEYXRhLm1hcCgoYWN0aXZpdHksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1tZCB3LTQ1XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+TG9nIERhdGU6IHtzZXREYXRlKGFjdGl2aXR5LmNyZWF0ZWRBdCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFjdGl2aXR5OiB7YWN0aXZpdHkuYWN0aXZpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkR1cmF0aW9uOiB7YWN0aXZpdHkuZHVyYXRpb259IG1pbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XYXMgQWN0aXZpdHkgT3V0ZG9vcnM6IHthY3Rpdml0eS5vdXRkb29yc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TW9vZCBBZnRlciBBY3Rpdml0eToge2FjdGl2aXR5LmFjdGl2aXR5X21vb2R9PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctNDVcIiA+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93ZWxsbmVzc2pvdXJuYWwvY3JlYXRlYWN0aXZpdHlsb2dcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICBMb2cgQWN0aXZpdHlcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgIDwvdWw+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChBY3Rpdml0eSk7Il0sIm5hbWVzIjpbIk5hdkJhciIsIldlbGxuZXNzTmF2QmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJMaW5rIiwid2l0aEF1dGgiLCJBY3Rpdml0eSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWVzIiwiYWN0aXZpdHlMb2dEYXRhIiwic2V0QWN0aXZpdHlMb2dEYXRhIiwiZmV0Y2hBY3Rpdml0eUxvZ3MiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwic2V0RGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidXBkYXRlZERhdGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlTmFtZSIsImJyIiwiaDEiLCJ1bCIsIm1hcCIsImFjdGl2aXR5IiwiaW5kZXgiLCJsaSIsInAiLCJjcmVhdGVkQXQiLCJkdXJhdGlvbiIsIm91dGRvb3JzIiwiYWN0aXZpdHlfbW9vZCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/wellnessjournal/activity/index.jsx\n"));

/***/ })

});