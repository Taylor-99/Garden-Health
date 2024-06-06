"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard/components/weather.jsx":
/*!****************************************************!*\
  !*** ./src/pages/dashboard/components/weather.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n// import fetch from 'isomorphic-unfetch'\n\n\nconst weather = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies)([\n        \"token\"\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchWeather = async ()=>{\n            try {\n                console.log(\"fetching weather data\");\n                const response = await fetch(\"http://localhost:4000/dash/getweather\", {\n                    credentials: \"include\",\n                    headers: {\n                        Authorization: \"Bearer \".concat(cookies.token)\n                    }\n                });\n                const data = await response.json();\n                setWeatherData(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error:\", error.message);\n            }\n        };\n        fetchWeather();\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n        lineNumber: 35,\n        columnNumber: 27\n    }, undefined);\n    if (!weatherData) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No weather data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n        lineNumber: 36,\n        columnNumber: 30\n    }, undefined);\n    console.log(weatherData);\n    //convert from Kelvin to Fahrenheit\n    let fahrenheit = (weatherData.main.temp - 273.15) * 1.8 + 32;\n    fahrenheit = fahrenheit.toFixed(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-between max-w-xs\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://openweathermap.org/img/wn/\".concat(weatherData.weather[0].icon, \"@2x.png\"),\n                            className: \"w-12 h-12\",\n                            alt: \"Weather Icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: weatherData.weather[0].description\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-600\",\n                            children: weatherData.name\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-2xl font-bold\",\n                            children: [\n                                fahrenheit,\n                                \"\\xb0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(weather, \"HM838V2zU0rMuiH2GEHzI96lzRM=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvd2VhdGhlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNuRCx5Q0FBeUM7QUFDQztBQUNaO0FBRTlCLE1BQU1LLFVBQVU7O0lBQ1osTUFBTSxDQUFDQyxXQUFXQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ08sUUFBUSxHQUFHTCx3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFFdENELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU8sZUFBZTtZQUVqQixJQUFJO2dCQUNBQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHlDQUF5QztvQkFDbEVDLGFBQWE7b0JBQ2JDLFNBQVM7d0JBQ0xDLGVBQWUsVUFBd0IsT0FBZFIsUUFBUVMsS0FBSztvQkFDeEM7Z0JBQ047Z0JBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO2dCQUNoQ0MsZUFBZUY7Z0JBQ2ZYLFdBQVc7WUFDZixFQUFFLE9BQU9jLE9BQU87Z0JBQ1pYLFFBQVFXLEtBQUssQ0FBQyxVQUFVQSxNQUFNQyxPQUFPO1lBQ3pDO1FBQ0o7UUFFQWI7SUFFSixHQUFHLEVBQUU7SUFFTCxJQUFJSCxXQUFXLHFCQUFPLDhEQUFDaUI7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNDLGFBQWEscUJBQU8sOERBQUNEO2tCQUFFOzs7Ozs7SUFDNUJiLFFBQVFDLEdBQUcsQ0FBQ2E7SUFFWixtQ0FBbUM7SUFDbkMsSUFBSUMsYUFBYSxDQUFDLFlBQWFDLElBQUksQ0FBQ0MsSUFBSSxHQUFJLE1BQUssSUFBSyxNQUFNO0lBRTVERixhQUFhQSxXQUFXRyxPQUFPLENBQUM7SUFFaEMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNDOzRCQUNHQyxLQUFLLHFDQUFpRSxPQUE1QlIsWUFBWW5CLE9BQU8sQ0FBQyxFQUFFLENBQUM0QixJQUFJLEVBQUM7NEJBQ3RFSCxXQUFVOzRCQUNWSSxLQUFJOzs7Ozs7c0NBRVIsOERBQUNYO3NDQUFHQyxZQUFZbkIsT0FBTyxDQUFDLEVBQUUsQ0FBQzhCLFdBQVc7Ozs7Ozs7Ozs7Ozs4QkFFMUMsOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ1A7NEJBQUVPLFdBQVU7c0NBQXlCTixZQUFZWSxJQUFJOzs7Ozs7c0NBQ3RELDhEQUFDYjs0QkFBRU8sV0FBVTs7Z0NBQXVCTDtnQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25FO0dBdkRNcEI7O1FBRWdCRixvREFBVUE7OztBQXVEaEMsK0RBQWVFLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9jb21wb25lbnRzL3dlYXRoZXIuanN4PzA5ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5jb25zdCB3ZWF0aGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmZXRjaGluZyB3ZWF0aGVyIGRhdGFcIilcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvZGFzaC9nZXR3ZWF0aGVyJywge1xuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgc2V0V2VhdGhlckRhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoV2VhdGhlcigpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgaWYgKCF3ZWF0aGVyRGF0YSkgcmV0dXJuIDxwPk5vIHdlYXRoZXIgZGF0YTwvcD5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSlcblxuICAgIC8vY29udmVydCBmcm9tIEtlbHZpbiB0byBGYWhyZW5oZWl0XG4gICAgbGV0IGZhaHJlbmhlaXQgPSAoKHdlYXRoZXJEYXRhLm1haW4udGVtcCkgLSAyNzMuMTUpICogMS44ICsgMzJcblxuICAgIGZhaHJlbmhlaXQgPSBmYWhyZW5oZWl0LnRvRml4ZWQoMilcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYXgtdy14c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiV2VhdGhlciBJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+e3dlYXRoZXJEYXRhLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIiA+e2ZhaHJlbmhlaXR9wrA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwiSW1hZ2UiLCJ3ZWF0aGVyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZXMiLCJmZXRjaFdlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsImRhdGEiLCJqc29uIiwic2V0V2VhdGhlckRhdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJwIiwid2VhdGhlckRhdGEiLCJmYWhyZW5oZWl0IiwibWFpbiIsInRlbXAiLCJ0b0ZpeGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaWNvbiIsImFsdCIsImRlc2NyaXB0aW9uIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard/components/weather.jsx\n"));

/***/ })

});