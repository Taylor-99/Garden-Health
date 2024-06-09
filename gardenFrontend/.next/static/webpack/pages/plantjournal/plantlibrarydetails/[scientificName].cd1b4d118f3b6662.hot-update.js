"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plantjournal/plantlibrarydetails/[scientificName]",{

/***/ "./src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx":
/*!*************************************************************************!*\
  !*** ./src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PlantNavBar.jsx */ \"./src/pages/plantjournal/components/PlantNavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst PlantLibraryDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { scientificName } = router.query; // Get the dynamic id from the URL\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies)([\n        \"token\"\n    ]);\n    const [plant, setPlant] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchPlantDetails = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/plantlibrary/details/\".concat(scientificName), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setPlant(data.data[0]);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (scientificName) {\n            fetchPlantDetails();\n        }\n    }, [\n        scientificName\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n        lineNumber: 42,\n        columnNumber: 27\n    }, undefined);\n    if (!plant) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Plant data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n        lineNumber: 43,\n        columnNumber: 24\n    }, undefined);\n    console.log(plant);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    plant.common_name,\n                    \" Details\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: plant.image_url\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Common Name: \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Scientific Name: \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Genus: \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Family: \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"IPNI Status: \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Ta\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlantLibraryDetails, \"ytiHdIhxg5HQVGRl/eIt7+AxAXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies\n    ];\n});\n_c = PlantLibraryDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(PlantLibraryDetails));\nvar _c, _c1;\n$RefreshReg$(_c, \"PlantLibraryDetails\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL3BsYW50bGlicmFyeWRldGFpbHMvW3NjaWVudGlmaWNOYW1lXS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFDRjtBQUNYO0FBQ3dCO0FBQ0o7QUFDTztBQUV4RCxNQUFNUyxzQkFBc0I7O0lBRXhCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVPLGNBQWMsRUFBRSxHQUFHRCxPQUFPRSxLQUFLLEVBQUUsa0NBQWtDO0lBRTNFLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNjLFFBQVEsR0FBR1osd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBQ3RDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHaEIsK0NBQVFBLENBQUM7SUFFbkMsTUFBTWlCLG9CQUFvQjtRQUN0QixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDhDQUE2RCxPQUFmVCxpQkFBa0I7Z0JBQ3pGVSxhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRSLFFBQVFTLEtBQUs7Z0JBQzFDO1lBQ0o7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFDaENULFNBQVNRLEtBQUtBLElBQUksQ0FBQyxFQUFFO1lBQ3JCWCxXQUFXO1FBQ2YsRUFBRSxPQUFPYSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxVQUFVQSxNQUFNRSxPQUFPO1FBQ3pDO0lBQ0o7SUFFQTNCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVMsZ0JBQWdCO1lBQ2hCTztRQUNKO0lBQ0osR0FBRztRQUFDUDtLQUFlO0lBRW5CLElBQUlFLFdBQVcscUJBQU8sOERBQUNpQjtrQkFBRTs7Ozs7O0lBQ3pCLElBQUksQ0FBQ2QsT0FBTyxxQkFBTyw4REFBQ2M7a0JBQUU7Ozs7OztJQUV0QkYsUUFBUUcsR0FBRyxDQUFDZjtJQUVkLHFCQUNFLDhEQUFDZ0I7OzBCQUNHLDhEQUFDekIsOERBQU1BO2dCQUFDMEIsVUFBUzs7Ozs7OzBCQUNqQiw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDMUIsbUVBQVdBOzs7OzswQkFDWiw4REFBQzBCOzs7OzswQkFFRCw4REFBQ0M7O29CQUFJbkIsTUFBTW9CLFdBQVc7b0JBQUM7Ozs7Ozs7MEJBRXZCLDhEQUFDQztnQkFBSUMsS0FBS3RCLE1BQU11QixTQUFTOzs7Ozs7MEJBQ3pCLDhEQUFDVDswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQTswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQTswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQTswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQTswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQTswQkFBRTs7Ozs7Ozs7Ozs7O0FBSVg7R0F4RE1yQjs7UUFFYUwsa0RBQVNBO1FBSU5ELG9EQUFVQTs7O0tBTjFCTTtBQTBETiwrREFBZSxNQUFBSCxvRUFBUUEsQ0FBQ0csb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wbGFudGpvdXJuYWwvcGxhbnRsaWJyYXJ5ZGV0YWlscy9bc2NpZW50aWZpY05hbWVdLmpzeD8zNzMwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aC5qc3gnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhci5qc3gnO1xuaW1wb3J0IFBsYW50TmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxhbnROYXZCYXIuanN4JztcblxuY29uc3QgUGxhbnRMaWJyYXJ5RGV0YWlscyA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHsgc2NpZW50aWZpY05hbWUgfSA9IHJvdXRlci5xdWVyeTsgLy8gR2V0IHRoZSBkeW5hbWljIGlkIGZyb20gdGhlIFVSTFxuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcbiAgICBjb25zdCBbcGxhbnQsIHNldFBsYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgZmV0Y2hQbGFudERldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcGxhbnRsaWJyYXJ5L2RldGFpbHMvJHtzY2llbnRpZmljTmFtZX1gLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldFBsYW50KGRhdGEuZGF0YVswXSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc2NpZW50aWZpY05hbWUpIHtcbiAgICAgICAgICAgIGZldGNoUGxhbnREZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICB9LCBbc2NpZW50aWZpY05hbWVdKTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIGlmICghcGxhbnQpIHJldHVybiA8cD5ObyBQbGFudCBkYXRhPC9wPlxuXG4gICAgY29uc29sZS5sb2cocGxhbnQpXG4gICAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPE5hdkJhciBwYWdlTmFtZT1cIlBsYW50IEpvdXJuYWxcIiAvPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPFBsYW50TmF2QmFyIC8+XG4gICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgIDxoMT57cGxhbnQuY29tbW9uX25hbWV9IERldGFpbHM8L2gxPlxuXG4gICAgICAgIDxpbWcgc3JjPXtwbGFudC5pbWFnZV91cmx9IC8+XG4gICAgICAgIDxwPkNvbW1vbiBOYW1lOiA8L3A+XG4gICAgICAgIDxwPlNjaWVudGlmaWMgTmFtZTogPC9wPlxuICAgICAgICA8cD5HZW51czogPC9wPlxuICAgICAgICA8cD5GYW1pbHk6IDwvcD5cbiAgICAgICAgPHA+SVBOSSBTdGF0dXM6IDwvcD5cbiAgICAgICAgPHA+VGE8L3A+XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChQbGFudExpYnJhcnlEZXRhaWxzKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJQbGFudE5hdkJhciIsIlBsYW50TGlicmFyeURldGFpbHMiLCJyb3V0ZXIiLCJzY2llbnRpZmljTmFtZSIsInF1ZXJ5IiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZXMiLCJwbGFudCIsInNldFBsYW50IiwiZmV0Y2hQbGFudERldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwicCIsImxvZyIsImRpdiIsInBhZ2VOYW1lIiwiYnIiLCJoMSIsImNvbW1vbl9uYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VfdXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/plantlibrarydetails/[scientificName].jsx\n"));

/***/ })

});