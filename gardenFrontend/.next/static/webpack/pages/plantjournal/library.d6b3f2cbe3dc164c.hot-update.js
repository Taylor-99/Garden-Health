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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PlantNavBar.jsx */ \"./src/pages/plantjournal/components/PlantNavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Library = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies)([\n        \"token\"\n    ]);\n    let maxPages = 21863;\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [userFavorites, setUserFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [plantLibrary, setPlantLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchLibraryData = async ()=>{\n        try {\n            var _data_;\n            const response = await fetch(\"http://localhost:4000/plantlibrary/getplants/\".concat(page), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setUserFavorites(data[0]);\n            setPlantLibrary((_data_ = data[1]) === null || _data_ === void 0 ? void 0 : _data_.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchLibraryData();\n    }, [\n        page\n    ]);\n    const handleNextPage = ()=>{\n        if (page < maxPages) {\n            setPage(page + 1);\n            setLoading(true);\n        }\n    };\n    const handlePreviousPage = ()=>{\n        if (page > 1) {\n            setPage(page - 1);\n            setLoading(true);\n        }\n    };\n    console.log(plantLibrary);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" This is the Plant Journal \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \" Plant Library \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: plantLibrary && plantLibrary.map((plant, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white p-4 rounded-lg shadow-md w-48\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: plant.image_url,\n                                alt: plant.common_name,\n                                className: \"w-full h-32 object-cover rounded-md mb-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold\",\n                                children: plant.common_name\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 29\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 75,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"button\",\n                value: \"Previous Page\",\n                onClick: handlePreviousPage,\n                className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                disabled: page === 1\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 89,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Page: \",\n                    page,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 95,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"button\",\n                value: \"Next Page\",\n                onClick: handleNextPage,\n                className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                disabled: page === maxPages\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 96,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Library, \"K8kW0W2kGNL9Z97EW1jsP/U8hUY=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_6__.useCookies\n    ];\n});\n_c = Library;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Library));\nvar _c, _c1;\n$RefreshReg$(_c, \"Library\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0csUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2xpYnJhcnkuanN4P2RmZWYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhBdXRoLmpzeCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCc7XG5pbXBvcnQgUGxhbnROYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL1BsYW50TmF2QmFyLmpzeCc7XG5cbmNvbnN0IExpYnJhcnkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuXG4gICAgbGV0IG1heFBhZ2VzID0gMjE4NjM7XG5cbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbdXNlckZhdm9yaXRlcywgc2V0VXNlckZhdm9yaXRlc10gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCBbcGxhbnRMaWJyYXJ5LCBzZXRQbGFudExpYnJhcnldID0gdXNlU3RhdGUoW10pXG4gICAgXG4gICAgY29uc3QgZmV0Y2hMaWJyYXJ5RGF0YSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3BsYW50bGlicmFyeS9nZXRwbGFudHMvJHtwYWdlfWAsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFVzZXJGYXZvcml0ZXMoZGF0YVswXSlcbiAgICAgICAgICAgIHNldFBsYW50TGlicmFyeShkYXRhWzFdPy5kYXRhKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGZldGNoTGlicmFyeURhdGEoKTtcblxuICAgIH0sIFtwYWdlXSk7XG5cbiAgICBjb25zdCBoYW5kbGVOZXh0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBhZ2UgPCBtYXhQYWdlcykge1xuICAgICAgICAgICAgc2V0UGFnZShwYWdlICsgMSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgICAgICBzZXRQYWdlKHBhZ2UgLSAxKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2cocGxhbnRMaWJyYXJ5KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJQbGFudCBKb3VybmFsXCIgLz5cblxuICAgICAgICAgICAgPGgxPiBUaGlzIGlzIHRoZSBQbGFudCBKb3VybmFsIDwvaDE+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxQbGFudE5hdkJhciAvPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdzZWFyY2gnIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3N1Ym1pdCcgdmFsdWU9J1NlYXJjaCcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXJcIj4gUGxhbnQgTGlicmFyeSA8L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00XCIgPlxuICAgICAgICAgICAgICAgICAgICB7cGxhbnRMaWJyYXJ5ICYmIHBsYW50TGlicmFyeS5tYXAoKHBsYW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIHctNDhcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL3BsYW50am91cm5hbC9kZXRhaWxzYH0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW50LmltYWdlX3VybH0gYWx0PXtwbGFudC5jb21tb25fbmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbWQgbWItMlwiID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj57cGxhbnQuY29tbW9uX25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nUHJldmlvdXMgUGFnZScgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9IC8+XG4gICAgICAgICAgICAgICAgPHA+UGFnZToge3BhZ2V9IDwvcD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbicgdmFsdWU9J05leHQgUGFnZSdvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX0gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiIGRpc2FibGVkPXtwYWdlID09PSBtYXhQYWdlc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChMaWJyYXJ5KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJMaW5rIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJQbGFudE5hdkJhciIsIkxpYnJhcnkiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29va2llcyIsIm1heFBhZ2VzIiwicGFnZSIsInNldFBhZ2UiLCJ1c2VyRmF2b3JpdGVzIiwic2V0VXNlckZhdm9yaXRlcyIsInBsYW50TGlicmFyeSIsInNldFBsYW50TGlicmFyeSIsImZldGNoTGlicmFyeURhdGEiLCJkYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiaGFuZGxlTmV4dFBhZ2UiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJsb2ciLCJkaXYiLCJwYWdlTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInBsYW50IiwiaW5kZXgiLCJsaSIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCIsImNvbW1vbl9uYW1lIiwiaDIiLCJiciIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/library.jsx\n"));

/***/ })

});