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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PlantNavBar.jsx */ \"./src/pages/plantjournal/components/PlantNavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Library = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies)([\n        \"token\"\n    ]);\n    let maxPages = 21863;\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [userFavorites, setUserFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [plantLibrary, setPlantLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchLibraryData = async (pageNumber)=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/plantlibrary/getplants/\".concat(pageNumber), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setPlantLibrary(data === null || data === void 0 ? void 0 : data.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    const fetchFavorites = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/plantlibrary/getfavorites\", {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setUserFavorites(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true); // Set loading state before fetching new data\n        fetchLibraryData(page);\n        fetchFavorites();\n    }, [\n        page\n    ]); // Re-fetch data whenever `page` changes\n    const handleNextPage = ()=>{\n        if (page < maxPages) {\n            setPage(page + 1);\n        }\n    };\n    const handlePreviousPage = ()=>{\n        if (page > 1) {\n            setPage(page - 1);\n        }\n    };\n    const toggleFavorite = async (scientificName)=>{\n        try {\n            const isFavorite = userFavorites === null || userFavorites === void 0 ? void 0 : userFavorites.includes(scientificName);\n            const method = isFavorite ? \"DELETE\" : \"PUT\";\n            const response = await fetch(\"http://localhost:4000/plantlibrary/favorites/\".concat(scientificName), {\n                method: method,\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            // Toggle the favorite status in the local state\n            setUserFavorites(data);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    console.log(plantLibrary);\n    console.log(userFavorites);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 106,\n        columnNumber: 27\n    }, undefined);\n    if (!plantLibrary) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No plants to show\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 107,\n        columnNumber: 31\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"search\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value),\n                        className: \"border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-500\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Search\",\n                        onClick: ()=>router.push(\"/plantjournal/search/\".concat(searchQuery)),\n                        className: \"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \" Plant Library \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 132,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: plantLibrary && plantLibrary.map((plant, index)=>{\n                    const isFavorite = userFavorites === null || userFavorites === void 0 ? void 0 : userFavorites.includes(plant.scientific_name);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white p-4 rounded-lg shadow-md w-48\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: plant.image_url,\n                                alt: plant.common_name,\n                                className: \"w-full h-32 object-cover rounded-md mb-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 139,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold\",\n                                children: plant.common_name\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 140,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                value: isFavorite ? \"Remove Favorite\" : \"Add Favorite\",\n                                onClick: ()=>toggleFavorite(plant.scientific_name),\n                                className: \"px-4 py-2 rounded \".concat(isFavorite ? \"bg-red-500 text-white\" : \"bg-green-500 text-white\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 141,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 149,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 137,\n                        columnNumber: 29\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 133,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 155,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"button\",\n                        value: \"Previous Page\",\n                        onClick: handlePreviousPage,\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        disabled: page === 1\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 158,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: [\n                            \"Page: \",\n                            page,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 166,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"button\",\n                        value: \"Next Page\",\n                        onClick: handleNextPage,\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        disabled: page === maxPages\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 168,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 157,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 176,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 110,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Library, \"STQXvTa/5tpJnhWBekSUTnioarM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies\n    ];\n});\n_c = Library;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Library));\nvar _c, _c1;\n$RefreshReg$(_c, \"Library\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztnQkFlakI7Ozs7OzswQkFHSiw4REFBQ2Q7Ozs7OzBCQUVELDhEQUFDRjtnQkFBSUcsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxPQUFNO3dCQUNOSSxTQUFTbEI7d0JBQ1RXLFdBQVU7d0JBQ1ZzQixVQUFVeEQsU0FBUzs7Ozs7O2tDQUd2Qiw4REFBQzhCO3dCQUFFSSxXQUFVOzs0QkFBYzs0QkFBT2xDOzRCQUFLOzs7Ozs7O2tDQUV2Qyw4REFBQ21DO3dCQUNHQyxNQUFLO3dCQUNMQyxPQUFNO3dCQUNOSSxTQUFTbkI7d0JBQ1RZLFdBQVU7d0JBQ1ZzQixVQUFVeEQsU0FBU0Q7Ozs7Ozs7Ozs7OzswQkFHM0IsOERBQUNrQzs7Ozs7Ozs7Ozs7QUFHakI7R0F4S012Qzs7UUFFYUwsa0RBQVNBO1FBR05ELG9EQUFVQTs7O0tBTDFCTTtBQTBLTiwrREFBZSxNQUFBSCxvRUFBUUEsQ0FBQ0csUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2xpYnJhcnkuanN4P2RmZWYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvd2l0aEF1dGguanN4JztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXIuanN4JztcbmltcG9ydCBQbGFudE5hdkJhciBmcm9tICcuL2NvbXBvbmVudHMvUGxhbnROYXZCYXIuanN4JztcblxuY29uc3QgTGlicmFyeSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG5cbiAgICBsZXQgbWF4UGFnZXMgPSAyMTg2MztcblxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFt1c2VyRmF2b3JpdGVzLCBzZXRVc2VyRmF2b3JpdGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcGxhbnRMaWJyYXJ5LCBzZXRQbGFudExpYnJhcnldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICAgIFxuICAgIGNvbnN0IGZldGNoTGlicmFyeURhdGEgPSBhc3luYyAocGFnZU51bWJlcikgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcGxhbnRsaWJyYXJ5L2dldHBsYW50cy8ke3BhZ2VOdW1iZXJ9YCwge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgc2V0UGxhbnRMaWJyYXJ5KGRhdGE/LmRhdGEpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZmV0Y2hGYXZvcml0ZXMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wbGFudGxpYnJhcnkvZ2V0ZmF2b3JpdGVzYCwge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgc2V0VXNlckZhdm9yaXRlcyhkYXRhKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7IC8vIFNldCBsb2FkaW5nIHN0YXRlIGJlZm9yZSBmZXRjaGluZyBuZXcgZGF0YVxuICAgICAgICBmZXRjaExpYnJhcnlEYXRhKHBhZ2UpO1xuICAgICAgICBmZXRjaEZhdm9yaXRlcygpXG5cbiAgICB9LCBbcGFnZV0pOyAvLyBSZS1mZXRjaCBkYXRhIHdoZW5ldmVyIGBwYWdlYCBjaGFuZ2VzXG5cbiAgICBjb25zdCBoYW5kbGVOZXh0UGFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBhZ2UgPCBtYXhQYWdlcykge1xuICAgICAgICAgICAgc2V0UGFnZShwYWdlICsgMSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlUHJldmlvdXNQYWdlID0gKCkgPT4ge1xuICAgICAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHNldFBhZ2UocGFnZSAtIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZUZhdm9yaXRlID0gYXN5bmMgKHNjaWVudGlmaWNOYW1lKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGlzRmF2b3JpdGUgPSB1c2VyRmF2b3JpdGVzPy5pbmNsdWRlcyhzY2llbnRpZmljTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBpc0Zhdm9yaXRlID8gJ0RFTEVURScgOiAnUFVUJztcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3BsYW50bGlicmFyeS9mYXZvcml0ZXMvJHtzY2llbnRpZmljTmFtZX1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAvLyBUb2dnbGUgdGhlIGZhdm9yaXRlIHN0YXR1cyBpbiB0aGUgbG9jYWwgc3RhdGVcbiAgICAgICAgICAgIHNldFVzZXJGYXZvcml0ZXMoZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhwbGFudExpYnJhcnkpXG4gICAgY29uc29sZS5sb2codXNlckZhdm9yaXRlcylcblxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIGlmICghcGxhbnRMaWJyYXJ5KSByZXR1cm4gPHA+Tm8gcGxhbnRzIHRvIHNob3c8L3A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdkJhciBwYWdlTmFtZT1cIlBsYW50IEpvdXJuYWxcIiAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIDxQbGFudE5hdkJhciAvPlxuICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3NlYXJjaCcgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hRdWVyeX0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB5LTIgcHgtNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0JyBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9J1NlYXJjaCcgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcGxhbnRqb3VybmFsL3NlYXJjaC8ke3NlYXJjaFF1ZXJ5fWApfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQtbWRcIiBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXJcIj4gUGxhbnQgTGlicmFyeSA8L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00XCIgPlxuICAgICAgICAgICAgICAgICAgICB7cGxhbnRMaWJyYXJ5ICYmIHBsYW50TGlicmFyeS5tYXAoKHBsYW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNGYXZvcml0ZSA9IHVzZXJGYXZvcml0ZXM/LmluY2x1ZGVzKHBsYW50LnNjaWVudGlmaWNfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1tZCB3LTQ4XCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj17YC9wbGFudGpvdXJuYWwvZGV0YWlscy8ke3BsYW50LnNjaWVudGlmaWNffWB9PiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFudC5pbWFnZV91cmx9IGFsdD17cGxhbnQuY29tbW9uX25hbWV9IGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG9iamVjdC1jb3ZlciByb3VuZGVkLW1kIG1iLTJcIiA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e3BsYW50LmNvbW1vbl9uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXNGYXZvcml0ZSA/ICdSZW1vdmUgRmF2b3JpdGUnIDogJ0FkZCBGYXZvcml0ZSd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZUZhdm9yaXRlKHBsYW50LnNjaWVudGlmaWNfbmFtZSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiByb3VuZGVkICR7aXNGYXZvcml0ZSA/ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUnIDogJ2JnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdQcmV2aW91cyBQYWdlJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX0gXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5QYWdlOiB7cGFnZX0gPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbicgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nTmV4dCBQYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dFBhZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IG1heFBhZ2VzfSBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChMaWJyYXJ5KTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJQbGFudE5hdkJhciIsIkxpYnJhcnkiLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29va2llcyIsIm1heFBhZ2VzIiwicGFnZSIsInNldFBhZ2UiLCJ1c2VyRmF2b3JpdGVzIiwic2V0VXNlckZhdm9yaXRlcyIsInBsYW50TGlicmFyeSIsInNldFBsYW50TGlicmFyeSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJmZXRjaExpYnJhcnlEYXRhIiwicGFnZU51bWJlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJmZXRjaEZhdm9yaXRlcyIsImhhbmRsZU5leHRQYWdlIiwiaGFuZGxlUHJldmlvdXNQYWdlIiwidG9nZ2xlRmF2b3JpdGUiLCJzY2llbnRpZmljTmFtZSIsImlzRmF2b3JpdGUiLCJpbmNsdWRlcyIsIm1ldGhvZCIsImxvZyIsInAiLCJkaXYiLCJwYWdlTmFtZSIsImJyIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIiwicHVzaCIsImgxIiwidWwiLCJtYXAiLCJwbGFudCIsImluZGV4Iiwic2NpZW50aWZpY19uYW1lIiwibGkiLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJjb21tb25fbmFtZSIsImgyIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/library.jsx\n"));

/***/ })

});