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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/withAuth.jsx */ \"./src/pages/components/withAuth.jsx\");\n/* harmony import */ var _components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/NavBar.jsx */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var _components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PlantNavBar.jsx */ \"./src/pages/plantjournal/components/PlantNavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies)([\n        \"token\"\n    ]);\n    const { searchTerm } = router.query;\n    const [userFavorites, setUserFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchedData, setSearchedData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const fetchSearchData = async ()=>{\n        try {\n            var _data_;\n            const response = await fetch(\"http://localhost:4000/plantlibrary/search/\".concat(searchTerm), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setUserFavorites(data[0]);\n            setSearchedData((_data_ = data[1]) === null || _data_ === void 0 ? void 0 : _data_.data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (searchTerm) {\n            setLoading(true); // Set loading state before fetching new data\n            fetchSearchData();\n        }\n    }, [\n        searchTerm\n    ]);\n    const toggleFavorite = async (speciesName)=>{\n        try {\n            const isFavorite = userFavorites.includes(speciesName);\n            const method = isFavorite ? \"DELETE\" : \"PUT\";\n            const response = await fetch(\"http://localhost:4000/plantlibrary/favorites/\".concat(speciesName), {\n                method: method,\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setUserFavorites(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    console.log(searchedData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    pageName: \"Plant Journal\"\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \" This is the Plant Journal \"\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 80,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlantNavBar_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"search\",\n                            value: searchQuery,\n                            onChange: (e)=>setSearchQuery(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                            lineNumber: 85,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Search\",\n                            onClick: ()=>router.push(\"/plantjournal/search/\".concat(searchQuery))\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                            lineNumber: 89,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold mb-4 text-center\",\n                    children: [\n                        \" Searching for \",\n                        searchTerm,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 96,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                    children: searchedData && searchedData.map((item, index)=>{\n                        const isFavorite = userFavorites === null || userFavorites === void 0 ? void 0 : userFavorites.includes(plant.species_name);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"bg-white p-4 rounded-lg shadow-md w-48\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.image_url,\n                                    alt: item.common_name,\n                                    className: \"w-full h-32 object-cover rounded-md mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-lg font-semibold\",\n                                    children: item.common_name\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"button\",\n                                    value: isFavorite ? \"Remove from Favorites\" : \"Add to Favorites\",\n                                    onClick: ()=>toggleFavorite(plant.species_name)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                            lineNumber: 101,\n                            columnNumber: 29\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n            lineNumber: 77,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/search/[searchTerm].jsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Search, \"GuVFNDRmfz0smzAdNtkGZkl/xSg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_7__.useCookies\n    ];\n});\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_components_withAuth_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Search));\nvar _c, _c1;\n$RefreshReg$(_c, \"Search\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL3NlYXJjaC9bc2VhcmNoVGVybV0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNUO0FBQ0Y7QUFDWDtBQUN3QjtBQUNKO0FBQ087QUFFeEQsTUFBTVMsU0FBUzs7SUFFWCxNQUFNQyxTQUFTTixzREFBU0E7SUFFeEIsTUFBTSxDQUFDTyxXQUFXQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksUUFBUSxHQUFHVix3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFFdEMsTUFBTSxFQUFFVyxVQUFVLEVBQUUsR0FBR0osT0FBT0ssS0FBSztJQUVuQyxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHaEIsK0NBQVFBLENBQUMsRUFBRTtJQUNyRCxNQUFNLENBQUNpQixjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDbUIsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTXFCLGtCQUFrQjtRQUVwQixJQUFJO2dCQVVnQkM7WUFUaEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDZDQUF3RCxPQUFYWCxhQUFjO2dCQUNwRlksYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkZixRQUFRZ0IsS0FBSztnQkFDMUM7WUFDSjtZQUVBLE1BQU1OLE9BQU8sTUFBTUMsU0FBU00sSUFBSTtZQUNoQ2IsaUJBQWlCTSxJQUFJLENBQUMsRUFBRTtZQUN4QkosaUJBQWdCSSxTQUFBQSxJQUFJLENBQUMsRUFBRSxjQUFQQSw2QkFBQUEsT0FBU0EsSUFBSTtZQUM3QlgsV0FBVztRQUVmLEVBQUUsT0FBT21CLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBLE1BQU1FLE9BQU87UUFDekM7SUFDSjtJQUVBL0IsZ0RBQVNBLENBQUM7UUFFTixJQUFJWSxZQUFZO1lBQ1pGLFdBQVcsT0FBTyw2Q0FBNkM7WUFDL0RVO1FBQ0o7SUFFSixHQUFHO1FBQUNSO0tBQVc7SUFFZixNQUFNb0IsaUJBQWlCLE9BQU9DO1FBRTFCLElBQUk7WUFDQSxNQUFNQyxhQUFhcEIsY0FBY3FCLFFBQVEsQ0FBQ0Y7WUFDMUMsTUFBTUcsU0FBU0YsYUFBYSxXQUFXO1lBRXZDLE1BQU1aLFdBQVcsTUFBTUMsTUFBTSxnREFBNEQsT0FBWlUsY0FBZTtnQkFDeEZHLFFBQVFBO2dCQUNSWixhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRmLFFBQVFnQixLQUFLO2dCQUMxQztZQUNKO1lBRUEsTUFBTU4sT0FBTyxNQUFNQyxTQUFTTSxJQUFJO1lBQ2hDYixpQkFBaUJNO1lBQ2pCWCxXQUFXO1FBQ2YsRUFBRSxPQUFPbUIsT0FBTztZQUNaQyxRQUFRRCxLQUFLLENBQUMsVUFBVUEsTUFBTUUsT0FBTztRQUN6QztJQUNKO0lBQ0FELFFBQVFPLEdBQUcsQ0FBQ3JCO0lBRWQscUJBQ0UsOERBQUNzQjtrQkFDRyw0RUFBQ0E7OzhCQUNHLDhEQUFDakMsOERBQU1BO29CQUFDa0MsVUFBUzs7Ozs7OzhCQUVqQiw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFFSiw4REFBQ2xDLG1FQUFXQTs7Ozs7OEJBRVosOERBQUNnQzs7c0NBQ0csOERBQUNHOzRCQUNHQyxNQUFLOzRCQUNMQyxPQUFPekI7NEJBQ1AwQixVQUFVLENBQUNDLElBQU0xQixlQUFlMEIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0NBQ2xELDhEQUFDRjs0QkFDR0MsTUFBSzs0QkFDTEMsT0FBTTs0QkFDTkksU0FBUyxJQUFNdkMsT0FBT3dDLElBQUksQ0FBQyx3QkFBb0MsT0FBWjlCOzs7Ozs7Ozs7Ozs7OEJBSTNELDhEQUFDc0I7b0JBQUdTLFdBQVU7O3dCQUFzQzt3QkFBZ0JyQzt3QkFBVzs7Ozs7Ozs4QkFDM0UsOERBQUNzQztvQkFBR0QsV0FBVTs4QkFDVGpDLGdCQUFnQkEsYUFBYW1DLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQzt3QkFDckMsTUFBTW5CLGFBQWFwQiwwQkFBQUEsb0NBQUFBLGNBQWVxQixRQUFRLENBQUNtQixNQUFNQyxZQUFZO3dCQUM3RCxxQkFDSSw4REFBQ0M7NEJBQWVQLFdBQVU7OzhDQUVsQiw4REFBQ1E7b0NBQUlDLEtBQUtOLEtBQUtPLFNBQVM7b0NBQUVDLEtBQUtSLEtBQUtTLFdBQVc7b0NBQUVaLFdBQVU7Ozs7Ozs4Q0FDM0QsOERBQUNhO29DQUFHYixXQUFVOzhDQUF5QkcsS0FBS1MsV0FBVzs7Ozs7OzhDQUN2RCw4REFBQ3BCO29DQUNHQyxNQUFLO29DQUFTQyxPQUFPVCxhQUFhLDBCQUEwQjtvQ0FDaEVhLFNBQVMsSUFBTWYsZUFBZXNCLE1BQU1DLFlBQVk7Ozs7Ozs4Q0FHcEQsOERBQUNROzs7Ozs7MkJBVElWOzs7OztvQkFZakI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBN0dNOUM7O1FBRWFMLGtEQUFTQTtRQUdORCxvREFBVUE7OztLQUwxQk07QUErR04sK0RBQWUsTUFBQUgsb0VBQVFBLENBQUNHLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BsYW50am91cm5hbC9zZWFyY2gvW3NlYXJjaFRlcm1dLmpzeD84YWM0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoQXV0aC5qc3gnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhci5qc3gnO1xuaW1wb3J0IFBsYW50TmF2QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxhbnROYXZCYXIuanN4JztcblxuY29uc3QgU2VhcmNoID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcblxuICAgIGNvbnN0IHsgc2VhcmNoVGVybSB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgY29uc3QgW3VzZXJGYXZvcml0ZXMsIHNldFVzZXJGYXZvcml0ZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzZWFyY2hlZERhdGEsIHNldFNlYXJjaGVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgICBjb25zdCBmZXRjaFNlYXJjaERhdGEgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wbGFudGxpYnJhcnkvc2VhcmNoLyR7c2VhcmNoVGVybX1gLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBzZXRVc2VyRmF2b3JpdGVzKGRhdGFbMF0pXG4gICAgICAgICAgICBzZXRTZWFyY2hlZERhdGEoZGF0YVsxXT8uZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGlmIChzZWFyY2hUZXJtKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpOyAvLyBTZXQgbG9hZGluZyBzdGF0ZSBiZWZvcmUgZmV0Y2hpbmcgbmV3IGRhdGFcbiAgICAgICAgICAgIGZldGNoU2VhcmNoRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICB9LCBbc2VhcmNoVGVybV0pO1xuXG4gICAgY29uc3QgdG9nZ2xlRmF2b3JpdGUgPSBhc3luYyAoc3BlY2llc05hbWUpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaXNGYXZvcml0ZSA9IHVzZXJGYXZvcml0ZXMuaW5jbHVkZXMoc3BlY2llc05hbWUpO1xuICAgICAgICAgICAgY29uc3QgbWV0aG9kID0gaXNGYXZvcml0ZSA/ICdERUxFVEUnIDogJ1BVVCc7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wbGFudGxpYnJhcnkvZmF2b3JpdGVzLyR7c3BlY2llc05hbWV9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgc2V0VXNlckZhdm9yaXRlcyhkYXRhKVxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hlZERhdGEpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdkJhciBwYWdlTmFtZT1cIlBsYW50IEpvdXJuYWxcIiAvPlxuXG4gICAgICAgICAgICA8aDE+IFRoaXMgaXMgdGhlIFBsYW50IEpvdXJuYWwgPC9oMT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPFBsYW50TmF2QmFyIC8+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdzZWFyY2gnIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCcgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPSdTZWFyY2gnIFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChgL3BsYW50am91cm5hbC9zZWFyY2gvJHtzZWFyY2hRdWVyeX1gKX0gXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyXCI+IFNlYXJjaGluZyBmb3Ige3NlYXJjaFRlcm19IDwvaDE+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgc206Z3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTRcIiA+XG4gICAgICAgICAgICAgICAgICAgIHtzZWFyY2hlZERhdGEgJiYgc2VhcmNoZWREYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRmF2b3JpdGUgPSB1c2VyRmF2b3JpdGVzPy5pbmNsdWRlcyhwbGFudC5zcGVjaWVzX25hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIHctNDhcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL3BsYW50am91cm5hbC9kZXRhaWxzYH0+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VfdXJsfSBhbHQ9e2l0ZW0uY29tbW9uX25hbWV9IGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG9iamVjdC1jb3ZlciByb3VuZGVkLW1kIG1iLTJcIiA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e2l0ZW0uY29tbW9uX25hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nIHZhbHVlPXtpc0Zhdm9yaXRlID8gJ1JlbW92ZSBmcm9tIEZhdm9yaXRlcycgOiAnQWRkIHRvIEZhdm9yaXRlcyd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRmF2b3JpdGUocGxhbnQuc3BlY2llc19uYW1lKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoU2VhcmNoKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvb2tpZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwid2l0aEF1dGgiLCJOYXZCYXIiLCJQbGFudE5hdkJhciIsIlNlYXJjaCIsInJvdXRlciIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWVzIiwic2VhcmNoVGVybSIsInF1ZXJ5IiwidXNlckZhdm9yaXRlcyIsInNldFVzZXJGYXZvcml0ZXMiLCJzZWFyY2hlZERhdGEiLCJzZXRTZWFyY2hlZERhdGEiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmV0Y2hTZWFyY2hEYXRhIiwiZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSIsInRvZ2dsZUZhdm9yaXRlIiwic3BlY2llc05hbWUiLCJpc0Zhdm9yaXRlIiwiaW5jbHVkZXMiLCJtZXRob2QiLCJsb2ciLCJkaXYiLCJwYWdlTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbkNsaWNrIiwicHVzaCIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwicGxhbnQiLCJzcGVjaWVzX25hbWUiLCJsaSIsImltZyIsInNyYyIsImltYWdlX3VybCIsImFsdCIsImNvbW1vbl9uYW1lIiwiaDIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/search/[searchTerm].jsx\n"));

/***/ })

});