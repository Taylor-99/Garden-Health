"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plantjournal",{

/***/ "./src/pages/plantjournal/components/garden.jsx":
/*!******************************************************!*\
  !*** ./src/pages/plantjournal/components/garden.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Garden = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)([\n        \"token\"\n    ]);\n    const [gardenData, setGardenData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchWeather = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:4000/dash/getweather\", {\n                    credentials: \"include\",\n                    headers: {\n                        Authorization: \"Bearer \".concat(cookies.token)\n                    }\n                });\n                const data = await response.json();\n                setWeatherData(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error:\", error.message);\n            }\n        };\n        fetchWeather();\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n        lineNumber: 35,\n        columnNumber: 27\n    }, undefined);\n    if (!weatherData) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No weather data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n        lineNumber: 36,\n        columnNumber: 30\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"This is the garden\"\n        }, void 0, false, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Garden, \"9TPHnGn5tLkUWe8tJNXxMAZnSzo=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies\n    ];\n});\n_c = Garden;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Garden);\nvar _c;\n$RefreshReg$(_c, \"Garden\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2NvbXBvbmVudHMvZ2FyZGVuLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNUO0FBRTFDLE1BQU1JLFNBQVM7O0lBRVgsTUFBTSxDQUFDQyxXQUFXQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sUUFBUSxHQUFHSix3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFFdEMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0NDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVEsZUFBZTtZQUVqQixJQUFJO2dCQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx5Q0FBeUM7b0JBQ2xFQyxhQUFhO29CQUNiQyxTQUFTO3dCQUNMQyxlQUFlLFVBQXdCLE9BQWRSLFFBQVFTLEtBQUs7b0JBQ3hDO2dCQUNOO2dCQUVBLE1BQU1DLE9BQU8sTUFBTU4sU0FBU08sSUFBSTtnQkFDaENDLGVBQWVGO2dCQUNmWCxXQUFXO1lBQ2YsRUFBRSxPQUFPYyxPQUFPO2dCQUNaQyxRQUFRRCxLQUFLLENBQUMsVUFBVUEsTUFBTUUsT0FBTztZQUN6QztRQUNKO1FBRUFaO0lBRUosR0FBRyxFQUFFO0lBRUwsSUFBSUwsV0FBVyxxQkFBTyw4REFBQ2tCO2tCQUFFOzs7Ozs7SUFDekIsSUFBSSxDQUFDQyxhQUFhLHFCQUFPLDhEQUFDRDtrQkFBRTs7Ozs7O0lBRTVCLHFCQUNJLDhEQUFDRTtrQkFDRyw0RUFBQ0M7c0JBQUc7Ozs7Ozs7Ozs7O0FBR2hCO0dBdENNdEI7O1FBR2dCRCxvREFBVUE7OztLQUgxQkM7QUF3Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BsYW50am91cm5hbC9jb21wb25lbnRzL2dhcmRlbi5qc3g/M2QwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbmNvbnN0IEdhcmRlbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG5cbiAgICBjb25zdCBbZ2FyZGVuRGF0YSwgc2V0R2FyZGVuRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2Rhc2gvZ2V0d2VhdGhlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIHNldFdlYXRoZXJEYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaFdlYXRoZXIoKTtcblxuICAgIH0sIFtdKTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIGlmICghd2VhdGhlckRhdGEpIHJldHVybiA8cD5ObyB3ZWF0aGVyIGRhdGE8L3A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRoaXMgaXMgdGhlIGdhcmRlbjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXJkZW47Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwiR2FyZGVuIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZXMiLCJnYXJkZW5EYXRhIiwic2V0R2FyZGVuRGF0YSIsImZldGNoV2VhdGhlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsInNldFdlYXRoZXJEYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsInAiLCJ3ZWF0aGVyRGF0YSIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/components/garden.jsx\n"));

/***/ })

});