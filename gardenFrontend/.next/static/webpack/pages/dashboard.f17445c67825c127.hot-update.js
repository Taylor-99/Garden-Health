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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n// import fetch from 'isomorphic-unfetch'\n\n\nconst weather = ()=>{\n    _s();\n    const [weatherData, setWeatherData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies)([\n        \"token\"\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchWeather = async ()=>{\n            try {\n                console.log(\"fetching weather data\");\n                const response = await fetch(\"http://localhost:4000/dash/getweather\", {\n                    credentials: \"include\",\n                    headers: {\n                        Authorization: \"Bearer \".concat(cookies.token)\n                    }\n                });\n                const data = await response.json();\n                setWeatherData(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error:\", error.message);\n            }\n        };\n        fetchWeather();\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n        lineNumber: 37,\n        columnNumber: 27\n    }, undefined);\n    if (!weatherData) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No weather data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n        lineNumber: 38,\n        columnNumber: 30\n    }, undefined);\n    console.log(weatherData);\n    //convert from Kelvin to Fahrenheit\n    let fahrenheit = (weatherData.main.temp - 273.15) * 1.8 + 32;\n    fahrenheit = fahrenheit.toFixed(2);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-gray-200 p-4 rounded-lg shadow-md w-full max-w-screen-xl mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://openweathermap.org/img/wn/\".concat(weatherData.weather[0].icon, \"@2x.png\"),\n                            className: \"w-12 h-12\",\n                            alt: \"Weather Icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: weatherData.weather[0].description\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-600\",\n                            children: weatherData.name\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-2xl font-bold\",\n                            children: [\n                                fahrenheit,\n                                \"\\xb0\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/weather.jsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(weather, \"mDk4pIIhOk06U+DCmvD5Cv3CCpI=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (weather);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvd2VhdGhlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtRDtBQUNuRCx5Q0FBeUM7QUFDQztBQUNaO0FBRTlCLE1BQU1LLFVBQVU7O0lBRVosTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDTyxXQUFXQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsUUFBUSxHQUFHUCx3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFFdENELGdEQUFTQSxDQUFDO1FBQ04sTUFBTVMsZUFBZTtZQUVqQixJQUFJO2dCQUNBQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHlDQUF5QztvQkFDbEVDLGFBQWE7b0JBQ2JDLFNBQVM7d0JBQ0xDLGVBQWUsVUFBd0IsT0FBZFIsUUFBUVMsS0FBSztvQkFDeEM7Z0JBQ047Z0JBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO2dCQUNoQ2QsZUFBZWE7Z0JBQ2ZYLFdBQVc7WUFDZixFQUFFLE9BQU9hLE9BQU87Z0JBQ1pWLFFBQVFVLEtBQUssQ0FBQyxVQUFVQSxNQUFNQyxPQUFPO1lBQ3pDO1FBQ0o7UUFFQVo7SUFFSixHQUFHLEVBQUU7SUFFTCxJQUFJSCxXQUFXLHFCQUFPLDhEQUFDZ0I7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNsQixhQUFhLHFCQUFPLDhEQUFDa0I7a0JBQUU7Ozs7OztJQUM1QlosUUFBUUMsR0FBRyxDQUFDUDtJQUVaLG1DQUFtQztJQUNuQyxJQUFJbUIsYUFBYSxDQUFDLFlBQWFDLElBQUksQ0FBQ0MsSUFBSSxHQUFJLE1BQUssSUFBSyxNQUFNO0lBRTVERixhQUFhQSxXQUFXRyxPQUFPLENBQUM7SUFFaEMscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNDOzRCQUNHQyxLQUFLLHFDQUFpRSxPQUE1QjFCLFlBQVlELE9BQU8sQ0FBQyxFQUFFLENBQUM0QixJQUFJLEVBQUM7NEJBQ3RFSCxXQUFVOzRCQUNWSSxLQUFJOzs7Ozs7c0NBRVIsOERBQUNWO3NDQUFHbEIsWUFBWUQsT0FBTyxDQUFDLEVBQUUsQ0FBQzhCLFdBQVc7Ozs7Ozs7Ozs7Ozs4QkFFMUMsOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ047NEJBQUVNLFdBQVU7c0NBQXlCeEIsWUFBWThCLElBQUk7Ozs7OztzQ0FDdEQsOERBQUNaOzRCQUFFTSxXQUFVOztnQ0FBdUJMO2dDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkU7R0F6RE1wQjs7UUFJZ0JGLG9EQUFVQTs7O0FBdURoQywrREFBZUUsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvd2VhdGhlci5qc3g/MDlkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmNvbnN0IHdlYXRoZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbd2VhdGhlckRhdGEsIHNldFdlYXRoZXJEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgd2VhdGhlciBkYXRhXCIpXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2Rhc2gvZ2V0d2VhdGhlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaFdlYXRoZXIoKTtcblxuICAgIH0sIFtdKTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIGlmICghd2VhdGhlckRhdGEpIHJldHVybiA8cD5ObyB3ZWF0aGVyIGRhdGE8L3A+XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXG5cbiAgICAvL2NvbnZlcnQgZnJvbSBLZWx2aW4gdG8gRmFocmVuaGVpdFxuICAgIGxldCBmYWhyZW5oZWl0ID0gKCh3ZWF0aGVyRGF0YS5tYWluLnRlbXApIC0gMjczLjE1KSAqIDEuOCArIDMyXG5cbiAgICBmYWhyZW5oZWl0ID0gZmFocmVuaGVpdC50b0ZpeGVkKDIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIHctZnVsbCBtYXgtdy1zY3JlZW4teGwgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGgtMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiV2VhdGhlciBJY29uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+e3dlYXRoZXJEYXRhLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIiA+e2ZhaHJlbmhlaXR9wrA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwiSW1hZ2UiLCJ3ZWF0aGVyIiwid2VhdGhlckRhdGEiLCJzZXRXZWF0aGVyRGF0YSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWVzIiwiZmV0Y2hXZWF0aGVyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsInAiLCJmYWhyZW5oZWl0IiwibWFpbiIsInRlbXAiLCJ0b0ZpeGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaWNvbiIsImFsdCIsImRlc2NyaXB0aW9uIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard/components/weather.jsx\n"));

/***/ })

});