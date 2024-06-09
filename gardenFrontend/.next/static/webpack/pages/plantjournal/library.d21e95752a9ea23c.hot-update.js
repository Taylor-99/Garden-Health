"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plantjournal/library",{

/***/ "./src/pages/plantjournal/library.jsx":
/*!********************************************!*\
  !*** ./src/pages/plantjournal/library.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PlantNavBar.jsx */ \"./src/pages/plantjournal/components/PlantNavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Library = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    let maxPages = 21863;\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [userFavorites, setUserFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [plantLibrary, setPlantLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchLibraryData = async ()=>{\n        try {\n            var _data_;\n            const response = await fetch(\"http://localhost:4000/plantlibrary/getplants/\".concat(page), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setUserFavorites(data[0]);\n            setPlantLibrary((_data_ = data[1]) === null || _data_ === void 0 ? void 0 : _data_.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchLibraryData();\n    }, []);\n    console.log(plantLibrary);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" This is the Plant Journal \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \" Plant Library \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Library, \"K8kW0W2kGNL9Z97EW1jsP/U8hUY=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies\n    ];\n});\n_c = Library;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Library));\nvar _c, _c1;\n$RefreshReg$(_c, \"Library\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2xpYnJhcnkuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVDtBQUNiO0FBQ3FCO0FBQ0o7QUFDUztBQUV2RCxNQUFNUSxVQUFVOztJQUVaLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLFFBQVEsR0FBR1Isd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBRXRDLElBQUlTLFdBQVc7SUFFZixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYyxlQUFlQyxpQkFBaUIsR0FBR2YsK0NBQVFBLENBQUMsRUFBRTtJQUNyRCxNQUFNLENBQUNnQixjQUFjQyxnQkFBZ0IsR0FBR2pCLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkQsTUFBTWtCLG1CQUFtQjtRQUVyQixJQUFJO2dCQVVnQkM7WUFUaEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGdEQUFxRCxPQUFMVCxPQUFRO2dCQUNqRlUsYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkZCxRQUFRZSxLQUFLO2dCQUMxQztZQUNKO1lBRUEsTUFBTU4sT0FBTyxNQUFNQyxTQUFTTSxJQUFJO1lBQ2hDWCxpQkFBaUJJLElBQUksQ0FBQyxFQUFFO1lBQ3hCRixpQkFBZ0JFLFNBQUFBLElBQUksQ0FBQyxFQUFFLGNBQVBBLDZCQUFBQSxPQUFTQSxJQUFJO1lBQzdCVixXQUFXO1FBQ2YsRUFBRSxPQUFPa0IsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsVUFBVUEsTUFBTUUsT0FBTztRQUN6QztJQUNKO0lBRUE1QixnREFBU0EsQ0FBQztRQUVOaUI7SUFFSixHQUFHLEVBQUU7SUFFTFUsUUFBUUUsR0FBRyxDQUFDZDtJQUVaLHFCQUNJLDhEQUFDZTs7MEJBQ0csOERBQUMxQiw4REFBTUE7Z0JBQUMyQixVQUFTOzs7Ozs7MEJBRWpCLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUVKLDhEQUFDM0IsbUVBQVdBOzs7OzswQkFFWiw4REFBQ3lCOztrQ0FDRyw4REFBQ0c7d0JBQU1DLE1BQUs7Ozs7OztrQ0FDWiw4REFBQ0Q7d0JBQU1DLE1BQUs7d0JBQVNDLE9BQU07Ozs7Ozs7Ozs7OzswQkFHL0IsOERBQUNIO2dCQUFHSSxXQUFVOzBCQUFzQzs7Ozs7Ozs7Ozs7O0FBa0JoRTtHQXJFTTlCOztRQUdnQkwsb0RBQVVBOzs7S0FIMUJLO0FBdUVOLCtEQUFlLE1BQUFILG9FQUFRQSxDQUFDRyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wbGFudGpvdXJuYWwvbGlicmFyeS5qc3g/ZGZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aEF1dGguanN4JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXIuanN4JztcbmltcG9ydCBQbGFudE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvUGxhbnROYXZCYXIuanN4JztcblxuY29uc3QgTGlicmFyeSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG5cbiAgICBsZXQgbWF4UGFnZXMgPSAyMTg2MztcblxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFt1c2VyRmF2b3JpdGVzLCBzZXRVc2VyRmF2b3JpdGVzXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtwbGFudExpYnJhcnksIHNldFBsYW50TGlicmFyeV0gPSB1c2VTdGF0ZShbXSlcbiAgICBcbiAgICBjb25zdCBmZXRjaExpYnJhcnlEYXRhID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcGxhbnRsaWJyYXJ5L2dldHBsYW50cy8ke3BhZ2V9YCwge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgc2V0VXNlckZhdm9yaXRlcyhkYXRhWzBdKVxuICAgICAgICAgICAgc2V0UGxhbnRMaWJyYXJ5KGRhdGFbMV0/LmRhdGEpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgZmV0Y2hMaWJyYXJ5RGF0YSgpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgY29uc29sZS5sb2cocGxhbnRMaWJyYXJ5KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJQbGFudCBKb3VybmFsXCIgLz5cblxuICAgICAgICAgICAgPGgxPiBUaGlzIGlzIHRoZSBQbGFudCBKb3VybmFsIDwvaDE+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxQbGFudE5hdkJhciAvPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdzZWFyY2gnIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1NlYXJjaCcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXJcIj4gUGxhbnQgTGlicmFyeSA8L2gxPlxuICAgICAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtNFwiID5cbiAgICAgICAgICAgICAgICAgICAge3BsYW50TGlicmFyeSAmJiBwbGFudExpYnJhcnkubWFwKChwbGFudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1tZCB3LTQ4XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BsYW50am91cm5hbC9kZXRhaWxzYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGxhbnQuaW1hZ2V9IGFsdD17cGxhbnQuY29tbW9uX25hbWV9IGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG9iamVjdC1jb3ZlciByb3VuZGVkLW1kIG1iLTJcIiA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e3BsYW50Y29tbW9uX25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIiA+TGFzdCB1cGRhdGU6IHtwbGFudFswXS51cGRhdGVkQXR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKExpYnJhcnkpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsIkxpbmsiLCJ3aXRoQXV0aCIsIk5hdkJhciIsIlBsYW50TmF2QmFyIiwiTGlicmFyeSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWVzIiwibWF4UGFnZXMiLCJwYWdlIiwic2V0UGFnZSIsInVzZXJGYXZvcml0ZXMiLCJzZXRVc2VyRmF2b3JpdGVzIiwicGxhbnRMaWJyYXJ5Iiwic2V0UGxhbnRMaWJyYXJ5IiwiZmV0Y2hMaWJyYXJ5RGF0YSIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJsb2ciLCJkaXYiLCJwYWdlTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/library.jsx\n"));

/***/ })

});