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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PlantDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { plantId } = router.query; // Get the dynamic id from the URL\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"token\"\n    ]);\n    const [plant, setPlant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchPlantDetails = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:4000/garden/details/\".concat(plantId), {\n                    credentials: \"include\",\n                    headers: {\n                        Authorization: \"Bearer \".concat(cookies.token)\n                    }\n                });\n                const data = await response.json();\n                setPlant(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error:\", error.message);\n            }\n        };\n        fetchPlantDetails();\n    }, [\n        plant,\n        isLoading\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 40,\n        columnNumber: 27\n    }, undefined);\n    if (!weatherData) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Plant data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 41,\n        columnNumber: 30\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: plantId\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlantDetails, \"ytiHdIhxg5HQVGRl/eIt7+AxAXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies\n    ];\n});\n_c = PlantDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetails);\nvar _c;\n$RefreshReg$(_c, \"PlantDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2RldGFpbHMvW3BsYW50SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3QztBQUNJO0FBQ0M7QUFDSDtBQUcxQyxNQUFNSyxlQUFlOztJQUVqQixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVwRSxNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxRQUFRLEdBQUdQLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUN0QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTWEsb0JBQW9CO1lBRXRCLElBQUk7Z0JBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHdDQUFnRCxPQUFSVCxVQUFXO29CQUM1RVUsYUFBYTtvQkFDYkMsU0FBUzt3QkFDTEMsZUFBZSxVQUF3QixPQUFkUixRQUFRUyxLQUFLO29CQUN4QztnQkFDTjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7Z0JBQ2hDVCxTQUFTUTtnQkFDVFgsV0FBVztZQUNmLEVBQUUsT0FBT2EsT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBLE1BQU1FLE9BQU87WUFDekM7UUFDSjtRQUVBWDtJQUVKLEdBQUc7UUFBQ0Y7UUFBT0g7S0FBVTtJQUVyQixJQUFJQSxXQUFXLHFCQUFPLDhEQUFDaUI7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNDLGFBQWEscUJBQU8sOERBQUNEO2tCQUFFOzs7Ozs7SUFFNUIscUJBQ0ksOERBQUNFOzswQkFDRyw4REFBQ3pCLDBEQUFNQTtnQkFBQzBCLFVBQVM7Ozs7OzswQkFDakIsOERBQUNIOzBCQUFHbkI7Ozs7Ozs7Ozs7OztBQUdoQjtHQXpDTUY7O1FBRWFMLGtEQUFTQTtRQUlOSSxvREFBVUE7OztLQU4xQkM7QUEyQ04sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BsYW50am91cm5hbC9kZXRhaWxzL1twbGFudElkXS5qc3g/OGJiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5cbmNvbnN0IFBsYW50RGV0YWlscyA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHBsYW50SWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gR2V0IHRoZSBkeW5hbWljIGlkIGZyb20gdGhlIFVSTFxuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcbiAgICBjb25zdCBbcGxhbnQsIHNldFBsYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hQbGFudERldGFpbHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dhcmRlbi9kZXRhaWxzLyR7cGxhbnRJZH1gLCB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICBzZXRQbGFudChkYXRhKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hQbGFudERldGFpbHMoKTtcblxuICAgIH0sIFtwbGFudCwgaXNMb2FkaW5nXSk7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICBpZiAoIXdlYXRoZXJEYXRhKSByZXR1cm4gPHA+Tm8gUGxhbnQgZGF0YTwvcD5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2QmFyIHBhZ2VOYW1lPVwiUGxhbnQgSm91cm5hbFwiIC8+XG4gICAgICAgICAgICA8cD57cGxhbnRJZH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxhbnREZXRhaWxzIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2QmFyIiwidXNlQ29va2llcyIsIlBsYW50RGV0YWlscyIsInJvdXRlciIsInBsYW50SWQiLCJxdWVyeSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWVzIiwicGxhbnQiLCJzZXRQbGFudCIsImZldGNoUGxhbnREZXRhaWxzIiwicmVzcG9uc2UiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsInAiLCJ3ZWF0aGVyRGF0YSIsImRpdiIsInBhZ2VOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/details/[plantId].jsx\n"));

/***/ })

});