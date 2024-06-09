"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plantjournal/search/[searchTerm]",{

/***/ "./src/pages/plantjournal/search/[searchTerm].jsx":
/*!********************************************************!*\
  !*** ./src/pages/plantjournal/search/[searchTerm].jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PlantNavBar.jsx */ \"./src/pages/plantjournal/components/PlantNavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies)([\n        \"token\"\n    ]);\n    const { searchTerm } = router.query;\n    const [userFavorites, setUserFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchedData, setSearchedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchSearchData = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/plantlibrary/search/\".concat(searchTerm), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setSearchedData(data === null || data === void 0 ? void 0 : data.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    const fetchFavorites = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/plantlibrary/getfavorites\", {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setUserFavorites(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (searchTerm) {\n            setLoading(true); // Set loading state before fetching new data\n            fetchSearchData();\n            fetchFavorites();\n        }\n    }, [\n        searchTerm\n    ]);\n    const toggleFavorite = async (scientificName)=>{\n        try {\n            const isFavorite = userFavorites === null || userFavorites === void 0 ? void 0 : userFavorites.includes(scientificName);\n            const method = isFavorite ? \"DELETE\" : \"PUT\";\n            const response = await fetch(\"http://localhost:4000/plantlibrary/favorites/\".concat(scientificName), {\n                method: method,\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setUserFavorites(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    console.log(searchedData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    pageName: \"Plant Journal\"\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \" This is the Plant Journal \"\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 98,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"search\",\n                            value: searchQuery,\n                            onChange: (e)=>setSearchQuery(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                            lineNumber: 103,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Search\",\n                            onClick: ()=>router.push(\"/plantjournal/search/\".concat(searchQuery))\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                            lineNumber: 107,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 102,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-4 text-center\",\n                    children: [\n                        \" Searching for \",\n                        searchTerm,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 115,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                    children: searchedData && searchedData.map((item, index)=>{\n                        const isFavorite = userFavorites === null || userFavorites === void 0 ? void 0 : userFavorites.includes(item.scientific_name);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"bg-white p-4 rounded-lg shadow-md w-48\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.image_url,\n                                    alt: item.common_name,\n                                    className: \"w-full h-32 object-cover rounded-md mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-lg font-semibold\",\n                                    children: item.common_name\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    value: isFavorite ? \"Remove Favorite\" : \"Add Favorite\",\n                                    onClick: ()=>toggleFavorite(item.scientific_name),\n                                    className: \"px-4 py-2 rounded \".concat(isFavorite ? \"bg-red-500 text-white\" : \"bg-green-500 text-white\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                            lineNumber: 120,\n                            columnNumber: 29\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 116,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n            lineNumber: 95,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Search, \"GuVFNDRmfz0smzAdNtkGZkl/xSg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Search));\nvar _c, _c1;\n$RefreshReg$(_c, \"Search\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL3NlYXJjaC9bc2VhcmNoVGVybV0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNUO0FBQ0Y7QUFDWDtBQUN3QjtBQUNKO0FBQ087QUFFeEQsTUFBTVMsU0FBUzs7SUFFWCxNQUFNQyxTQUFTTixzREFBU0E7SUFFeEIsTUFBTSxDQUFDTyxXQUFXQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksUUFBUSxHQUFHVix3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFFdEMsTUFBTSxFQUFFVyxVQUFVLEVBQUUsR0FBR0osT0FBT0ssS0FBSztJQUVuQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHaEIsK0NBQVFBLENBQUMsRUFBRTtJQUNyRCxNQUFNLENBQUNpQixjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDbUIsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXFCLGtCQUFrQjtRQUVwQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDZDQUF3RCxPQUFYVixhQUFjO2dCQUNwRlcsYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkZCxRQUFRZSxLQUFLO2dCQUMxQztZQUNKO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDWCxnQkFBZ0JVLGlCQUFBQSwyQkFBQUEsS0FBTUEsSUFBSTtZQUMxQmpCLFdBQVc7UUFFZixFQUFFLE9BQU9tQixPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxVQUFVQSxNQUFNRSxPQUFPO1FBQ3pDO0lBQ0o7SUFFQSxNQUFNQyxpQkFBaUI7UUFFbkIsSUFBSTtZQUNBLE1BQU1YLFdBQVcsTUFBTUMsTUFBTyxtREFBa0Q7Z0JBQzVFQyxhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRkLFFBQVFlLEtBQUs7Z0JBQzFDO1lBQ0o7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFDaENiLGlCQUFpQlk7WUFDakJqQixXQUFXO1FBQ2YsRUFBRSxPQUFPbUIsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsVUFBVUEsTUFBTUUsT0FBTztRQUN6QztJQUNKO0lBRUEvQixnREFBU0EsQ0FBQztRQUVOLElBQUlZLFlBQVk7WUFDWkYsV0FBVyxPQUFPLDZDQUE2QztZQUMvRFU7WUFDQVk7UUFDSjtJQUVKLEdBQUc7UUFBQ3BCO0tBQVc7SUFFZixNQUFNcUIsaUJBQWlCLE9BQU9DO1FBRTFCLElBQUk7WUFDQSxNQUFNQyxhQUFhckIsMEJBQUFBLG9DQUFBQSxjQUFlc0IsUUFBUSxDQUFDRjtZQUMzQyxNQUFNRyxTQUFTRixhQUFhLFdBQVc7WUFFdkMsTUFBTWQsV0FBVyxNQUFNQyxNQUFNLGdEQUErRCxPQUFmWSxpQkFBa0I7Z0JBQzNGRyxRQUFRQTtnQkFDUmQsYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkZCxRQUFRZSxLQUFLO2dCQUMxQztZQUNKO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDYixpQkFBaUJZO1lBQ2pCakIsV0FBVztRQUNmLEVBQUUsT0FBT21CLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBLE1BQU1FLE9BQU87UUFDekM7SUFDSjtJQUNBRCxRQUFRUSxHQUFHLENBQUN0QjtJQUVkLHFCQUNFLDhEQUFDdUI7a0JBQ0csNEVBQUNBOzs4QkFDRyw4REFBQ2xDLDhEQUFNQTtvQkFBQ21DLFVBQVM7Ozs7Ozs4QkFFakIsOERBQUNDOzhCQUFHOzs7Ozs7OEJBRUosOERBQUNuQyxtRUFBV0E7Ozs7OzhCQUVaLDhEQUFDaUM7b0JBQUlHLFdBQVU7O3NDQUNYLDhEQUFDQzs0QkFDR0MsTUFBSzs0QkFDTEMsT0FBTzNCOzRCQUNQNEIsVUFBVSxDQUFDQyxJQUFNNUIsZUFBZTRCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3NDQUNsRCw4REFBQ0Y7NEJBQ0dDLE1BQUs7NEJBQ0xDLE9BQU07NEJBQ05JLFNBQVMsSUFBTXpDLE9BQU8wQyxJQUFJLENBQUMsd0JBQW9DLE9BQVpoQzs7Ozs7Ozs7Ozs7OzhCQUszRCw4REFBQ3VCO29CQUFHQyxXQUFVOzt3QkFBc0M7d0JBQWdCOUI7d0JBQVc7Ozs7Ozs7OEJBQzNFLDhEQUFDdUM7b0JBQUdULFdBQVU7OEJBQ1QxQixnQkFBZ0JBLGFBQWFvQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7d0JBQ3JDLE1BQU1uQixhQUFhckIsMEJBQUFBLG9DQUFBQSxjQUFlc0IsUUFBUSxDQUFDaUIsS0FBS0UsZUFBZTt3QkFDL0QscUJBQ0ksOERBQUNDOzRCQUFlZCxXQUFVOzs4Q0FFbEIsOERBQUNlO29DQUFJQyxLQUFLTCxLQUFLTSxTQUFTO29DQUFFQyxLQUFLUCxLQUFLUSxXQUFXO29DQUFFbkIsV0FBVTs7Ozs7OzhDQUMzRCw4REFBQ29CO29DQUFHcEIsV0FBVTs4Q0FBeUJXLEtBQUtRLFdBQVc7Ozs7Ozs4Q0FDdkQsOERBQUNsQjtvQ0FDR0MsTUFBSztvQ0FDTEMsT0FBT1YsYUFBYSxvQkFBb0I7b0NBQ3hDYyxTQUFTLElBQU1oQixlQUFlb0IsS0FBS0UsZUFBZTtvQ0FDbERiLFdBQVcscUJBQXNGLE9BQWpFUCxhQUFhLDBCQUEwQjs7Ozs7OzhDQUkvRSw4REFBQzRCOzs7Ozs7MkJBWklUOzs7OztvQkFlakI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBbklNL0M7O1FBRWFMLGtEQUFTQTtRQUdORCxvREFBVUE7OztLQUwxQk07QUFxSU4sK0RBQWUsTUFBQUgsb0VBQVFBLENBQUNHLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BsYW50am91cm5hbC9zZWFyY2gvW3NlYXJjaFRlcm1dLmpzeD84YWM0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aC5qc3gnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhci5qc3gnO1xuaW1wb3J0IFBsYW50TmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxhbnROYXZCYXIuanN4JztcblxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcblxuICAgIGNvbnN0IHsgc2VhcmNoVGVybSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgY29uc3QgW3VzZXJGYXZvcml0ZXMsIHNldFVzZXJGYXZvcml0ZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWFyY2hlZERhdGEsIHNldFNlYXJjaGVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBmZXRjaFNlYXJjaERhdGEgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wbGFudGxpYnJhcnkvc2VhcmNoLyR7c2VhcmNoVGVybX1gLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBzZXRTZWFyY2hlZERhdGEoZGF0YT8uZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoRmF2b3JpdGVzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvcGxhbnRsaWJyYXJ5L2dldGZhdm9yaXRlc2AsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIHNldFVzZXJGYXZvcml0ZXMoZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgICAgICBpZiAoc2VhcmNoVGVybSkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTsgLy8gU2V0IGxvYWRpbmcgc3RhdGUgYmVmb3JlIGZldGNoaW5nIG5ldyBkYXRhXG4gICAgICAgICAgICBmZXRjaFNlYXJjaERhdGEoKTtcbiAgICAgICAgICAgIGZldGNoRmF2b3JpdGVzKClcbiAgICAgICAgfVxuXG4gICAgfSwgW3NlYXJjaFRlcm1dKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZhdm9yaXRlID0gYXN5bmMgKHNjaWVudGlmaWNOYW1lKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGlzRmF2b3JpdGUgPSB1c2VyRmF2b3JpdGVzPy5pbmNsdWRlcyhzY2llbnRpZmljTmFtZSk7XG4gICAgICAgICAgICBjb25zdCBtZXRob2QgPSBpc0Zhdm9yaXRlID8gJ0RFTEVURScgOiAnUFVUJztcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3BsYW50bGlicmFyeS9mYXZvcml0ZXMvJHtzY2llbnRpZmljTmFtZX1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBzZXRVc2VyRmF2b3JpdGVzKGRhdGEpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaGVkRGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TmF2QmFyIHBhZ2VOYW1lPVwiUGxhbnQgSm91cm5hbFwiIC8+XG5cbiAgICAgICAgICAgIDxoMT4gVGhpcyBpcyB0aGUgUGxhbnQgSm91cm5hbCA8L2gxPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8UGxhbnROYXZCYXIgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIiA+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzZWFyY2gnIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCcgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSdTZWFyY2gnIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3BsYW50am91cm5hbC9zZWFyY2gvJHtzZWFyY2hRdWVyeX1gKX1cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPiBTZWFyY2hpbmcgZm9yIHtzZWFyY2hUZXJtfSA8L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00XCIgPlxuICAgICAgICAgICAgICAgICAgICB7c2VhcmNoZWREYXRhICYmIHNlYXJjaGVkRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0Zhdm9yaXRlID0gdXNlckZhdm9yaXRlcz8uaW5jbHVkZXMoaXRlbS5zY2llbnRpZmljX25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIHctNDhcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL3BsYW50am91cm5hbC9kZXRhaWxzYH0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VfdXJsfSBhbHQ9e2l0ZW0uY29tbW9uX25hbWV9IGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG9iamVjdC1jb3ZlciByb3VuZGVkLW1kIG1iLTJcIiA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e2l0ZW0uY29tbW9uX25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpc0Zhdm9yaXRlID8gJ1JlbW92ZSBGYXZvcml0ZScgOiAnQWRkIEZhdm9yaXRlJ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRmF2b3JpdGUoaXRlbS5zY2llbnRpZmljX25hbWUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC00IHB5LTIgcm91bmRlZCAke2lzRmF2b3JpdGUgPyAnYmctcmVkLTUwMCB0ZXh0LXdoaXRlJyA6ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFNlYXJjaCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwidXNlUm91dGVyIiwiTGluayIsIndpdGhBdXRoIiwiTmF2QmFyIiwiUGxhbnROYXZCYXIiLCJTZWFyY2giLCJyb3V0ZXIiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29va2llcyIsInNlYXJjaFRlcm0iLCJxdWVyeSIsInVzZXJGYXZvcml0ZXMiLCJzZXRVc2VyRmF2b3JpdGVzIiwic2VhcmNoZWREYXRhIiwic2V0U2VhcmNoZWREYXRhIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsImZldGNoU2VhcmNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJmZXRjaEZhdm9yaXRlcyIsInRvZ2dsZUZhdm9yaXRlIiwic2NpZW50aWZpY05hbWUiLCJpc0Zhdm9yaXRlIiwiaW5jbHVkZXMiLCJtZXRob2QiLCJsb2ciLCJkaXYiLCJwYWdlTmFtZSIsImgxIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIiwicHVzaCIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2NpZW50aWZpY19uYW1lIiwibGkiLCJpbWciLCJzcmMiLCJpbWFnZV91cmwiLCJhbHQiLCJjb21tb25fbmFtZSIsImgyIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/search/[searchTerm].jsx\n"));

/***/ })

});