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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PlantNavBar.jsx */ \"./src/pages/plantjournal/components/PlantNavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Library = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies)([\n        \"token\"\n    ]);\n    let maxPages = 21863;\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [userFavorites, setUserFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [plantLibrary, setPlantLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchLibraryData = async (pageNumber)=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/plantlibrary/getplants/\".concat(pageNumber), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            console.log(data);\n        // setPlantLibrary(data.)\n        // setLoading(false)\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true); // Set loading state before fetching new data\n        fetchLibraryData(page);\n    }, [\n        page\n    ]); // Re-fetch data whenever `page` changes\n    const handleNextPage = ()=>{\n        if (page < maxPages) {\n            setPage(page + 1);\n        }\n    };\n    const handlePreviousPage = ()=>{\n        if (page > 1) {\n            setPage(page - 1);\n        }\n    };\n    const toggleFavorite = async (speciesName)=>{\n        try {\n            const isFavorite = userFavorites === null || userFavorites === void 0 ? void 0 : userFavorites.includes(speciesName);\n            const method = isFavorite ? \"DELETE\" : \"PUT\";\n            const response = await fetch(\"http://localhost:4000/plantlibrary/favorites/\".concat(speciesName), {\n                method: method,\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            // Toggle the favorite status in the local state\n            setUserFavorites((prevFavorites)=>isFavorite ? prevFavorites.filter((favorite)=>favorite !== speciesName) : [\n                    ...prevFavorites,\n                    speciesName\n                ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    console.log(plantLibrary);\n    console.log(userFavorites);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 90,\n        columnNumber: 27\n    }, undefined);\n    if (!plantLibrary) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No plants to show\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 91,\n        columnNumber: 31\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" This is the Plant Journal \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"search\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Search\",\n                        onClick: ()=>router.push(\"/plantjournal/search/\".concat(searchQuery))\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \" Plant Library \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: plantLibrary && plantLibrary.map((plant, index)=>{\n                    const isFavorite = userFavorites === null || userFavorites === void 0 ? void 0 : userFavorites.includes(plant.scientific_name);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white p-4 rounded-lg shadow-md w-48\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: plant.image_url,\n                                alt: plant.common_name,\n                                className: \"w-full h-32 object-cover rounded-md mb-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold\",\n                                children: plant.common_name\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 121,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                value: isFavorite ? \"Remove from Favorites\" : \"Add to Favorites\",\n                                onClick: ()=>toggleFavorite(plant.scientific_name)\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 29\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 114,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"button\",\n                        value: \"Previous Page\",\n                        onClick: handlePreviousPage,\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        disabled: page === 1\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Page: \",\n                            page,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 141,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"button\",\n                        value: \"Next Page\",\n                        onClick: handleNextPage,\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        disabled: page === maxPages\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 143,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 132,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Library, \"STQXvTa/5tpJnhWBekSUTnioarM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies\n    ];\n});\n_c = Library;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Library));\nvar _c, _c1;\n$RefreshReg$(_c, \"Library\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVVBOzs7S0FMMUJNO0FBZ0pOLCtEQUFlLE1BQUFILG9FQUFRQSxDQUFDRyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wbGFudGpvdXJuYWwvbGlicmFyeS5qc3g/ZGZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy93aXRoQXV0aC5qc3gnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhci5qc3gnO1xuaW1wb3J0IFBsYW50TmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9QbGFudE5hdkJhci5qc3gnO1xuXG5jb25zdCBMaWJyYXJ5ID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcblxuICAgIGxldCBtYXhQYWdlcyA9IDIxODYzO1xuXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW3VzZXJGYXZvcml0ZXMsIHNldFVzZXJGYXZvcml0ZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtwbGFudExpYnJhcnksIHNldFBsYW50TGlicmFyeV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgXG4gICAgY29uc3QgZmV0Y2hMaWJyYXJ5RGF0YSA9IGFzeW5jIChwYWdlTnVtYmVyKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wbGFudGxpYnJhcnkvZ2V0cGxhbnRzLyR7cGFnZU51bWJlcn1gLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgLy8gc2V0UGxhbnRMaWJyYXJ5KGRhdGEuKVxuICAgICAgICAgICAgLy8gc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7IC8vIFNldCBsb2FkaW5nIHN0YXRlIGJlZm9yZSBmZXRjaGluZyBuZXcgZGF0YVxuICAgICAgICBmZXRjaExpYnJhcnlEYXRhKHBhZ2UpO1xuXG4gICAgfSwgW3BhZ2VdKTsgLy8gUmUtZmV0Y2ggZGF0YSB3aGVuZXZlciBgcGFnZWAgY2hhbmdlc1xuXG4gICAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwYWdlIDwgbWF4UGFnZXMpIHtcbiAgICAgICAgICAgIHNldFBhZ2UocGFnZSArIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgICAgICBzZXRQYWdlKHBhZ2UgLSAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVGYXZvcml0ZSA9IGFzeW5jIChzcGVjaWVzTmFtZSkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBpc0Zhdm9yaXRlID0gdXNlckZhdm9yaXRlcz8uaW5jbHVkZXMoc3BlY2llc05hbWUpO1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gaXNGYXZvcml0ZSA/ICdERUxFVEUnIDogJ1BVVCc7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wbGFudGxpYnJhcnkvZmF2b3JpdGVzLyR7c3BlY2llc05hbWV9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBmYXZvcml0ZSBzdGF0dXMgaW4gdGhlIGxvY2FsIHN0YXRlXG4gICAgICAgICAgICBzZXRVc2VyRmF2b3JpdGVzKChwcmV2RmF2b3JpdGVzKSA9PlxuICAgICAgICAgICAgICAgIGlzRmF2b3JpdGUgPyBwcmV2RmF2b3JpdGVzLmZpbHRlcigoZmF2b3JpdGUpID0+IGZhdm9yaXRlICE9PSBzcGVjaWVzTmFtZSkgOiBbLi4ucHJldkZhdm9yaXRlcywgc3BlY2llc05hbWVdXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2cocGxhbnRMaWJyYXJ5KVxuICAgIGNvbnNvbGUubG9nKHVzZXJGYXZvcml0ZXMpXG5cbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICBpZiAoIXBsYW50TGlicmFyeSkgcmV0dXJuIDxwPk5vIHBsYW50cyB0byBzaG93PC9wPlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJQbGFudCBKb3VybmFsXCIgLz5cblxuICAgICAgICAgICAgPGgxPiBUaGlzIGlzIHRoZSBQbGFudCBKb3VybmFsIDwvaDE+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxQbGFudE5hdkJhciAvPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc2VhcmNoJyBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nU2VhcmNoJyBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wbGFudGpvdXJuYWwvc2VhcmNoLyR7c2VhcmNoUXVlcnl9YCl9IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPiBQbGFudCBMaWJyYXJ5IDwvaDE+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIiA+XG4gICAgICAgICAgICAgICAgICAgIHtwbGFudExpYnJhcnkgJiYgcGxhbnRMaWJyYXJ5Lm1hcCgocGxhbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0Zhdm9yaXRlID0gdXNlckZhdm9yaXRlcz8uaW5jbHVkZXMocGxhbnQuc2NpZW50aWZpY19uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIHctNDhcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL3BsYW50am91cm5hbC9kZXRhaWxzYH0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW50LmltYWdlX3VybH0gYWx0PXtwbGFudC5jb21tb25fbmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbWQgbWItMlwiID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj57cGxhbnQuY29tbW9uX25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdidXR0b24nIHZhbHVlPXtpc0Zhdm9yaXRlID8gJ1JlbW92ZSBmcm9tIEZhdm9yaXRlcycgOiAnQWRkIHRvIEZhdm9yaXRlcyd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRmF2b3JpdGUocGxhbnQuc2NpZW50aWZpY19uYW1lKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J1ByZXZpb3VzIFBhZ2UnIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfSBcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8cD5QYWdlOiB7cGFnZX0gPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbicgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nTmV4dCBQYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IG1heFBhZ2VzfSBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChMaWJyYXJ5KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJQbGFudE5hdkJhciIsIkxpYnJhcnkiLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29va2llcyIsIm1heFBhZ2VzIiwicGFnZSIsInNldFBhZ2UiLCJ1c2VyRmF2b3JpdGVzIiwic2V0VXNlckZhdm9yaXRlcyIsInBsYW50TGlicmFyeSIsInNldFBsYW50TGlicmFyeSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJmZXRjaExpYnJhcnlEYXRhIiwicGFnZU51bWJlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsImhhbmRsZVByZXZpb3VzUGFnZSIsInRvZ2dsZUZhdm9yaXRlIiwic3BlY2llc05hbWUiLCJpc0Zhdm9yaXRlIiwiaW5jbHVkZXMiLCJtZXRob2QiLCJwcmV2RmF2b3JpdGVzIiwiZmlsdGVyIiwiZmF2b3JpdGUiLCJwIiwiZGl2IiwicGFnZU5hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayIsInB1c2giLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInBsYW50IiwiaW5kZXgiLCJzY2llbnRpZmljX25hbWUiLCJsaSIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCIsImNvbW1vbl9uYW1lIiwiaDIiLCJiciIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/library.jsx\n"));

/***/ })

});