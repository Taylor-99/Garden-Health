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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PlantNavBar.jsx */ \"./src/pages/plantjournal/components/PlantNavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Library = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies)([\n        \"token\"\n    ]);\n    let maxPages = 21863;\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [userFavorites, setUserFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [plantLibrary, setPlantLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchLibraryData = async (pageNumber)=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/plantlibrary/getplants/\".concat(pageNumber), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setPlantLibrary(data === null || data === void 0 ? void 0 : data.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    const fetchFavorites = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/plantlibrary/getfavorites\", {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setUserFavorites(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setLoading(true); // Set loading state before fetching new data\n        fetchLibraryData(page);\n        fetchFavorites();\n    }, [\n        page\n    ]); // Re-fetch data whenever `page` changes\n    const handleNextPage = ()=>{\n        if (page < maxPages) {\n            setPage(page + 1);\n        }\n    };\n    const handlePreviousPage = ()=>{\n        if (page > 1) {\n            setPage(page - 1);\n        }\n    };\n    const toggleFavorite = async (scientificName)=>{\n        try {\n            const isFavorite = userFavorites === null || userFavorites === void 0 ? void 0 : userFavorites.includes(scientificName);\n            const method = isFavorite ? \"DELETE\" : \"PUT\";\n            const response = await fetch(\"http://localhost:4000/plantlibrary/favorites/\".concat(scientificName), {\n                method: method,\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            // Toggle the favorite status in the local state\n            setUserFavorites((prevFavorites)=>isFavorite ? prevFavorites.filter((favorite)=>favorite !== speciesName) : [\n                    ...prevFavorites,\n                    speciesName\n                ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    console.log(plantLibrary);\n    console.log(userFavorites);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 108,\n        columnNumber: 27\n    }, undefined);\n    if (!plantLibrary) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No plants to show\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 109,\n        columnNumber: 31\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 113,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" This is the Plant Journal \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 115,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"search\",\n                        value: searchQuery,\n                        onChange: (e)=>setSearchQuery(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Search\",\n                        onClick: ()=>router.push(\"/plantjournal/search/\".concat(searchQuery))\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 119,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \" Plant Library \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 131,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: plantLibrary && plantLibrary.map((plant, index)=>{\n                    const isFavorite = userFavorites === null || userFavorites === void 0 ? void 0 : userFavorites.includes(plant.scientific_name);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white p-4 rounded-lg shadow-md w-48\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: plant.image_url,\n                                alt: plant.common_name,\n                                className: \"w-full h-32 object-cover rounded-md mb-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 138,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold\",\n                                children: plant.common_name\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 139,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                value: isFavorite ? \"Remove from Favorites\" : \"Add to Favorites\",\n                                onClick: ()=>toggleFavorite(plant.scientific_name),\n                                className: \"px-4 py-2 rounded \".concat(isFavorite ? \"bg-red-500 text-white\" : \"bg-green-500 text-white\")\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 140,\n                                columnNumber: 37\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                                lineNumber: 146,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 136,\n                        columnNumber: 29\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 132,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"button\",\n                        value: \"Previous Page\",\n                        onClick: handlePreviousPage,\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        disabled: page === 1\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 153,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Page: \",\n                            page,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"button\",\n                        value: \"Next Page\",\n                        onClick: handleNextPage,\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        disabled: page === maxPages\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                        lineNumber: 163,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n                lineNumber: 152,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/library.jsx\",\n        lineNumber: 112,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Library, \"STQXvTa/5tpJnhWBekSUTnioarM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies\n    ];\n});\n_c = Library;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Library));\nvar _c, _c1;\n$RefreshReg$(_c, \"Library\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzBDQUkzRSw4REFBQ2lDOzs7Ozs7dUJBVklUOzs7OztnQkFhakI7Ozs7OzswQkFHSiw4REFBQ2Y7O2tDQUNHLDhEQUFDRzt3QkFDR0MsTUFBSzt3QkFDTEMsT0FBTTt3QkFDTkksU0FBU3JCO3dCQUNUdUIsV0FBVTt3QkFDVmMsVUFBVTVELFNBQVM7Ozs7OztrQ0FHdkIsOERBQUNrQzs7NEJBQUU7NEJBQU9sQzs0QkFBSzs7Ozs7OztrQ0FFZiw4REFBQ3NDO3dCQUNHQyxNQUFLO3dCQUNMQyxPQUFNO3dCQUNOSSxTQUFTdEI7d0JBQ1R3QixXQUFVO3dCQUNWYyxVQUFVNUQsU0FBU0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQztHQWxLTUw7O1FBRWFMLGtEQUFTQTtRQUdORCxvREFBVUE7OztLQUwxQk07QUFvS04sK0RBQWUsTUFBQUgsb0VBQVFBLENBQUNHLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BsYW50am91cm5hbC9saWJyYXJ5LmpzeD9kZmVmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9jb21wb25lbnRzL3dpdGhBdXRoLmpzeCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2QmFyLmpzeCc7XG5pbXBvcnQgUGxhbnROYXZCYXIgZnJvbSAnLi9jb21wb25lbnRzL1BsYW50TmF2QmFyLmpzeCc7XG5cbmNvbnN0IExpYnJhcnkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuXG4gICAgbGV0IG1heFBhZ2VzID0gMjE4NjM7XG5cbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbdXNlckZhdm9yaXRlcywgc2V0VXNlckZhdm9yaXRlc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3BsYW50TGlicmFyeSwgc2V0UGxhbnRMaWJyYXJ5XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBcbiAgICBjb25zdCBmZXRjaExpYnJhcnlEYXRhID0gYXN5bmMgKHBhZ2VOdW1iZXIpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3BsYW50bGlicmFyeS9nZXRwbGFudHMvJHtwYWdlTnVtYmVyfWAsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFBsYW50TGlicmFyeShkYXRhPy5kYXRhKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoRmF2b3JpdGVzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcGxhbnRsaWJyYXJ5L2dldGZhdm9yaXRlc2AsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFVzZXJGYXZvcml0ZXMoZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpOyAvLyBTZXQgbG9hZGluZyBzdGF0ZSBiZWZvcmUgZmV0Y2hpbmcgbmV3IGRhdGFcbiAgICAgICAgZmV0Y2hMaWJyYXJ5RGF0YShwYWdlKTtcbiAgICAgICAgZmV0Y2hGYXZvcml0ZXMoKVxuXG4gICAgfSwgW3BhZ2VdKTsgLy8gUmUtZmV0Y2ggZGF0YSB3aGVuZXZlciBgcGFnZWAgY2hhbmdlc1xuXG4gICAgY29uc3QgaGFuZGxlTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwYWdlIDwgbWF4UGFnZXMpIHtcbiAgICAgICAgICAgIHNldFBhZ2UocGFnZSArIDEpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVByZXZpb3VzUGFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICAgICAgICBzZXRQYWdlKHBhZ2UgLSAxKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVGYXZvcml0ZSA9IGFzeW5jIChzY2llbnRpZmljTmFtZSkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBpc0Zhdm9yaXRlID0gdXNlckZhdm9yaXRlcz8uaW5jbHVkZXMoc2NpZW50aWZpY05hbWUpO1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gaXNGYXZvcml0ZSA/ICdERUxFVEUnIDogJ1BVVCc7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wbGFudGxpYnJhcnkvZmF2b3JpdGVzLyR7c2NpZW50aWZpY05hbWV9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgLy8gVG9nZ2xlIHRoZSBmYXZvcml0ZSBzdGF0dXMgaW4gdGhlIGxvY2FsIHN0YXRlXG4gICAgICAgICAgICBzZXRVc2VyRmF2b3JpdGVzKChwcmV2RmF2b3JpdGVzKSA9PlxuICAgICAgICAgICAgICAgIGlzRmF2b3JpdGUgPyBwcmV2RmF2b3JpdGVzLmZpbHRlcigoZmF2b3JpdGUpID0+IGZhdm9yaXRlICE9PSBzcGVjaWVzTmFtZSkgOiBbLi4ucHJldkZhdm9yaXRlcywgc3BlY2llc05hbWVdXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2cocGxhbnRMaWJyYXJ5KVxuICAgIGNvbnNvbGUubG9nKHVzZXJGYXZvcml0ZXMpXG5cbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICBpZiAoIXBsYW50TGlicmFyeSkgcmV0dXJuIDxwPk5vIHBsYW50cyB0byBzaG93PC9wPlxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJQbGFudCBKb3VybmFsXCIgLz5cblxuICAgICAgICAgICAgPGgxPiBUaGlzIGlzIHRoZSBQbGFudCBKb3VybmFsIDwvaDE+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxQbGFudE5hdkJhciAvPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nc2VhcmNoJyBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hRdWVyeShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nU2VhcmNoJyBcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wbGFudGpvdXJuYWwvc2VhcmNoLyR7c2VhcmNoUXVlcnl9YCl9IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPiBQbGFudCBMaWJyYXJ5IDwvaDE+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIiA+XG4gICAgICAgICAgICAgICAgICAgIHtwbGFudExpYnJhcnkgJiYgcGxhbnRMaWJyYXJ5Lm1hcCgocGxhbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0Zhdm9yaXRlID0gdXNlckZhdm9yaXRlcz8uaW5jbHVkZXMocGxhbnQuc2NpZW50aWZpY19uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIHctNDhcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL3BsYW50am91cm5hbC9kZXRhaWxzYH0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW50LmltYWdlX3VybH0gYWx0PXtwbGFudC5jb21tb25fbmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbWQgbWItMlwiID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj57cGxhbnQuY29tbW9uX25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdidXR0b24nIHZhbHVlPXtpc0Zhdm9yaXRlID8gJ1JlbW92ZSBmcm9tIEZhdm9yaXRlcycgOiAnQWRkIHRvIEZhdm9yaXRlcyd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRmF2b3JpdGUocGxhbnQuc2NpZW50aWZpY19uYW1lKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZCAke2lzRmF2b3JpdGUgPyAnYmctcmVkLTUwMCB0ZXh0LXdoaXRlJyA6ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPSdQcmV2aW91cyBQYWdlJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX0gXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+UGFnZToge3BhZ2V9IDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9J05leHQgUGFnZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSBtYXhQYWdlc30gXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoTGlicmFyeSk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwidXNlUm91dGVyIiwiTGluayIsIndpdGhBdXRoIiwiTmF2QmFyIiwiUGxhbnROYXZCYXIiLCJMaWJyYXJ5Iiwicm91dGVyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZXMiLCJtYXhQYWdlcyIsInBhZ2UiLCJzZXRQYWdlIiwidXNlckZhdm9yaXRlcyIsInNldFVzZXJGYXZvcml0ZXMiLCJwbGFudExpYnJhcnkiLCJzZXRQbGFudExpYnJhcnkiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmV0Y2hMaWJyYXJ5RGF0YSIsInBhZ2VOdW1iZXIiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiZmV0Y2hGYXZvcml0ZXMiLCJoYW5kbGVOZXh0UGFnZSIsImhhbmRsZVByZXZpb3VzUGFnZSIsInRvZ2dsZUZhdm9yaXRlIiwic2NpZW50aWZpY05hbWUiLCJpc0Zhdm9yaXRlIiwiaW5jbHVkZXMiLCJtZXRob2QiLCJwcmV2RmF2b3JpdGVzIiwiZmlsdGVyIiwiZmF2b3JpdGUiLCJzcGVjaWVzTmFtZSIsImxvZyIsInAiLCJkaXYiLCJwYWdlTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIiwicHVzaCIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwicGxhbnQiLCJpbmRleCIsInNjaWVudGlmaWNfbmFtZSIsImxpIiwiaW1nIiwic3JjIiwiaW1hZ2VfdXJsIiwiYWx0IiwiY29tbW9uX25hbWUiLCJoMiIsImJyIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/library.jsx\n"));

/***/ })

});