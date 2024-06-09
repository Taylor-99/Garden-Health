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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PlantDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { plantId } = router.query; // Get the dynamic id from the URL\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"token\"\n    ]);\n    const [plant, setPlant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const fetchPlantDetails = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/garden/details/\".concat(plantId), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setPlant(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (plantId) {\n            fetchPlantDetails();\n        }\n    }, [\n        plantId\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 40,\n        columnNumber: 27\n    }, undefined);\n    if (!plant) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Plant data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 41,\n        columnNumber: 24\n    }, undefined);\n    console.log(plant);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: plan\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlantDetails, \"ytiHdIhxg5HQVGRl/eIt7+AxAXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies\n    ];\n});\n_c = PlantDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetails);\nvar _c;\n$RefreshReg$(_c, \"PlantDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2RldGFpbHMvW3BsYW50SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3QztBQUNJO0FBQ0M7QUFDSDtBQUcxQyxNQUFNSyxlQUFlOztJQUVqQixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVwRSxNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxRQUFRLEdBQUdQLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUN0QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVksb0JBQW9CO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0NBQWdELE9BQVJULFVBQVc7Z0JBQzVFVSxhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRSLFFBQVFTLEtBQUs7Z0JBQzFDO1lBQ0o7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFDaENULFNBQVNRO1lBQ1RYLFdBQVc7UUFDZixFQUFFLE9BQU9hLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBLE1BQU1FLE9BQU87UUFDekM7SUFDSjtJQUVBeEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJTSxTQUFTO1lBQ1RPO1FBQ0o7SUFDSixHQUFHO1FBQUNQO0tBQVE7SUFFWixJQUFJRSxXQUFXLHFCQUFPLDhEQUFDaUI7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNkLE9BQU8scUJBQU8sOERBQUNjO2tCQUFFOzs7Ozs7SUFFdEJGLFFBQVFHLEdBQUcsQ0FBQ2Y7SUFFWixxQkFDSSw4REFBQ2dCOzswQkFDRyw4REFBQ3pCLDBEQUFNQTtnQkFBQzBCLFVBQVM7Ozs7OzswQkFDakIsOERBQUNIOzBCQUFHSTs7Ozs7Ozs7Ozs7O0FBR2hCO0dBM0NNekI7O1FBRWFMLGtEQUFTQTtRQUlOSSxvREFBVUE7OztLQU4xQkM7QUE2Q04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BsYW50am91cm5hbC9kZXRhaWxzL1twbGFudElkXS5qc3g/OGJiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5cbmNvbnN0IFBsYW50RGV0YWlscyA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHBsYW50SWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gR2V0IHRoZSBkeW5hbWljIGlkIGZyb20gdGhlIFVSTFxuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcbiAgICBjb25zdCBbcGxhbnQsIHNldFBsYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgZmV0Y2hQbGFudERldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvZ2FyZGVuL2RldGFpbHMvJHtwbGFudElkfWAsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0UGxhbnQoZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocGxhbnRJZCkge1xuICAgICAgICAgICAgZmV0Y2hQbGFudERldGFpbHMoKTtcbiAgICAgICAgfVxuICAgIH0sIFtwbGFudElkXSk7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICBpZiAoIXBsYW50KSByZXR1cm4gPHA+Tm8gUGxhbnQgZGF0YTwvcD5cblxuICAgIGNvbnNvbGUubG9nKHBsYW50KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJQbGFudCBKb3VybmFsXCIgLz5cbiAgICAgICAgICAgIDxwPntwbGFufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFudERldGFpbHMiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOYXZCYXIiLCJ1c2VDb29raWVzIiwiUGxhbnREZXRhaWxzIiwicm91dGVyIiwicGxhbnRJZCIsInF1ZXJ5IiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZXMiLCJwbGFudCIsInNldFBsYW50IiwiZmV0Y2hQbGFudERldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwicCIsImxvZyIsImRpdiIsInBhZ2VOYW1lIiwicGxhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/details/[plantId].jsx\n"));

/***/ })

});