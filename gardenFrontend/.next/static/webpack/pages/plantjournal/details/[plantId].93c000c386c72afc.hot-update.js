"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plantjournal/details/[plantId]",{

/***/ "./src/pages/plantjournal/details/[plantId].jsx":
/*!******************************************************!*\
  !*** ./src/pages/plantjournal/details/[plantId].jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PlantDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { plantId } = router.query; // Get the dynamic id from the URL\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"token\"\n    ]);\n    const [plant, setPlant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const fetchPlantDetails = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/garden/details/\".concat(plantId), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setPlant(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (plantId) {\n            fetchPlantDetails();\n        }\n    }, [\n        plantId\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 40,\n        columnNumber: 27\n    }, undefined);\n    if (!plant) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Plant data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 41,\n        columnNumber: 24\n    }, undefined);\n    console.log(plant);\n    function setDate(dateString) {\n        // Create a Date object from the date string\n        const date = new Date(dateString);\n        // Get the individual components of the date\n        const year = date.getFullYear();\n        const month = date.getMonth() + 1; // 6 (January is 0, so we add 1)\n        const day = date.getDate(); // 8\n        let updatedDate = \"\".concat(month, \"/\").concat(day, \"/\").concat(year);\n        return updatedDate;\n    }\n    ;\n    // Create a Date object from the date string\n    const date = new Date(plant[1][plant[1].length - 1].updatedAt);\n    // Get the individual components of the date\n    const year = date.getFullYear(); // 2024\n    const month = date.getMonth() + 1; // 6 (January is 0, so we add 1)\n    const day = date.getDate(); // 8\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: plant[1][plant[1].length - 1].plantImage\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: plant[0].plantName\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: plant[0].plantSpecies\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Last update: \",\n                                    month,\n                                    \"/\",\n                                    day,\n                                    \"/\",\n                                    year\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Notes: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlantDetails, \"ytiHdIhxg5HQVGRl/eIt7+AxAXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies\n    ];\n});\n_c = PlantDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetails);\nvar _c;\n$RefreshReg$(_c, \"PlantDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2RldGFpbHMvW3BsYW50SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3QztBQUNJO0FBQ0M7QUFDSDtBQUcxQyxNQUFNSyxlQUFlOztJQUVqQixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVwRSxNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxRQUFRLEdBQUdQLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUN0QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVksb0JBQW9CO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0NBQWdELE9BQVJULFVBQVc7Z0JBQzVFVSxhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRSLFFBQVFTLEtBQUs7Z0JBQzFDO1lBQ0o7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFDaENULFNBQVNRO1lBQ1RYLFdBQVc7UUFDZixFQUFFLE9BQU9hLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBLE1BQU1FLE9BQU87UUFDekM7SUFDSjtJQUVBeEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJTSxTQUFTO1lBQ1RPO1FBQ0o7SUFDSixHQUFHO1FBQUNQO0tBQVE7SUFFWixJQUFJRSxXQUFXLHFCQUFPLDhEQUFDaUI7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNkLE9BQU8scUJBQU8sOERBQUNjO2tCQUFFOzs7Ozs7SUFFdEJGLFFBQVFHLEdBQUcsQ0FBQ2Y7SUFFWixTQUFTZ0IsUUFBUUMsVUFBVTtRQUV2Qiw0Q0FBNEM7UUFDNUMsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRjtRQUV0Qiw0Q0FBNEM7UUFDNUMsTUFBTUcsT0FBT0YsS0FBS0csV0FBVztRQUM3QixNQUFNQyxRQUFRSixLQUFLSyxRQUFRLEtBQUssR0FBRyxnQ0FBZ0M7UUFDbkUsTUFBTUMsTUFBTU4sS0FBS08sT0FBTyxJQUFJLElBQUk7UUFFaEMsSUFBSUMsY0FBYyxHQUFZRixPQUFURixPQUFNLEtBQVVGLE9BQVBJLEtBQUksS0FBUSxPQUFMSjtRQUVyQyxPQUFPTTtJQUNYOztJQUVBLDRDQUE0QztJQUM1QyxNQUFNUixPQUFPLElBQUlDLEtBQUtuQixLQUFLLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDMkIsTUFBTSxHQUFDLEVBQUUsQ0FBQ0MsU0FBUztJQUUzRCw0Q0FBNEM7SUFDNUMsTUFBTVIsT0FBT0YsS0FBS0csV0FBVyxJQUFJLE9BQU87SUFDeEMsTUFBTUMsUUFBUUosS0FBS0ssUUFBUSxLQUFLLEdBQUcsZ0NBQWdDO0lBQ25FLE1BQU1DLE1BQU1OLEtBQUtPLE9BQU8sSUFBSSxJQUFJO0lBRWhDLHFCQUNJLDhEQUFDSTs7MEJBQ0csOERBQUN0QywwREFBTUE7Z0JBQUN1QyxVQUFTOzs7Ozs7MEJBQ2pCLDhEQUFDRDs7a0NBQ0csOERBQUNBO2tDQUNHLDRFQUFDRTs0QkFBSUMsS0FBS2hDLEtBQUssQ0FBQyxFQUFFLENBQUNBLEtBQUssQ0FBQyxFQUFFLENBQUMyQixNQUFNLEdBQUMsRUFBRSxDQUFDTSxVQUFVOzs7Ozs7Ozs7OztrQ0FFcEQsOERBQUNKOzswQ0FDRyw4REFBQ0s7MENBQUlsQyxLQUFLLENBQUMsRUFBRSxDQUFDbUMsU0FBUzs7Ozs7OzBDQUN2Qiw4REFBQ0M7MENBQUlwQyxLQUFLLENBQUMsRUFBRSxDQUFDcUMsWUFBWTs7Ozs7OzBDQUMxQiw4REFBQ3ZCOztvQ0FBRTtvQ0FBY1E7b0NBQU07b0NBQUVFO29DQUFJO29DQUFFSjs7Ozs7OzswQ0FDL0IsOERBQUNOOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkI7R0E1RU1yQjs7UUFFYUwsa0RBQVNBO1FBSU5JLG9EQUFVQTs7O0tBTjFCQztBQThFTiwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2RldGFpbHMvW3BsYW50SWRdLmpzeD84YmJlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cblxuY29uc3QgUGxhbnREZXRhaWxzID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgcGxhbnRJZCB9ID0gcm91dGVyLnF1ZXJ5OyAvLyBHZXQgdGhlIGR5bmFtaWMgaWQgZnJvbSB0aGUgVVJMXG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuICAgIGNvbnN0IFtwbGFudCwgc2V0UGxhbnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBmZXRjaFBsYW50RGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9nYXJkZW4vZGV0YWlscy8ke3BsYW50SWR9YCwge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBzZXRQbGFudChkYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChwbGFudElkKSB7XG4gICAgICAgICAgICBmZXRjaFBsYW50RGV0YWlscygpO1xuICAgICAgICB9XG4gICAgfSwgW3BsYW50SWRdKTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIGlmICghcGxhbnQpIHJldHVybiA8cD5ObyBQbGFudCBkYXRhPC9wPlxuXG4gICAgY29uc29sZS5sb2cocGxhbnQpXG5cbiAgICBmdW5jdGlvbiBzZXREYXRlKGRhdGVTdHJpbmcpe1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIERhdGUgb2JqZWN0IGZyb20gdGhlIGRhdGUgc3RyaW5nXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcblxuICAgICAgICAvLyBHZXQgdGhlIGluZGl2aWR1YWwgY29tcG9uZW50cyBvZiB0aGUgZGF0ZVxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7IC8vIDYgKEphbnVhcnkgaXMgMCwgc28gd2UgYWRkIDEpXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpOyAvLyA4XG5cbiAgICAgICAgbGV0IHVwZGF0ZWREYXRlID0gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YFxuXG4gICAgICAgIHJldHVybiB1cGRhdGVkRGF0ZVxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgYSBEYXRlIG9iamVjdCBmcm9tIHRoZSBkYXRlIHN0cmluZ1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwbGFudFsxXVtwbGFudFsxXS5sZW5ndGgtMV0udXBkYXRlZEF0KTtcblxuICAgIC8vIEdldCB0aGUgaW5kaXZpZHVhbCBjb21wb25lbnRzIG9mIHRoZSBkYXRlXG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTsgLy8gMjAyNFxuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgLy8gNiAoSmFudWFyeSBpcyAwLCBzbyB3ZSBhZGQgMSlcbiAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTsgLy8gOFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJQbGFudCBKb3VybmFsXCIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW50WzFdW3BsYW50WzFdLmxlbmd0aC0xXS5wbGFudEltYWdlfT48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3BsYW50WzBdLnBsYW50TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3BsYW50WzBdLnBsYW50U3BlY2llc308L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IHVwZGF0ZToge21vbnRofS97ZGF5fS97eWVhcn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5vdGVzOiA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFudERldGFpbHMiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZCYXIiLCJ1c2VDb29raWVzIiwiUGxhbnREZXRhaWxzIiwicm91dGVyIiwicGxhbnRJZCIsInF1ZXJ5IiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZXMiLCJwbGFudCIsInNldFBsYW50IiwiZmV0Y2hQbGFudERldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwicCIsImxvZyIsInNldERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInVwZGF0ZWREYXRlIiwibGVuZ3RoIiwidXBkYXRlZEF0IiwiZGl2IiwicGFnZU5hbWUiLCJpbWciLCJzcmMiLCJwbGFudEltYWdlIiwiaDIiLCJwbGFudE5hbWUiLCJoMyIsInBsYW50U3BlY2llcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/details/[plantId].jsx\n"));

/***/ })

});