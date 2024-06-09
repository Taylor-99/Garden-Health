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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PlantDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { plantId } = router.query; // Get the dynamic id from the URL\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"token\"\n    ]);\n    const [plant, setPlant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const fetchPlantDetails = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/garden/details/\".concat(plantId), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setPlant(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (plantId) {\n            fetchPlantDetails();\n        }\n    }, [\n        plantId\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 40,\n        columnNumber: 27\n    }, undefined);\n    if (!plant) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Plant data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 41,\n        columnNumber: 24\n    }, undefined);\n    console.log(plant);\n    function setDate(dateString) {\n        // Create a Date object from the date string\n        const date = new Date(dateString);\n        // Get the individual components of the date\n        const year = date.getFullYear();\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        let updatedDate = \"\".concat(month, \"/\").concat(day, \"/\").concat(year);\n        return updatedDate;\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: plant[1][plant[1].length - 1].plantImage\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: plant[0].plantName\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: plant[0].plantSpecies\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Date planted: \",\n                                    setDate(plant[0].plantDate)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Last update: \",\n                                    setDate(plant[1][plant[1].length - 1].updatedAt)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Notes: \",\n                                    plant[1][plant[1].length - 1].notes\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Updates\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: plant[1] && plant[1].map((update, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-white p-4 rounded-lg shadow-md w-48\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: plant[1].plantImage,\n                                            alt: plant[0].plantName,\n                                            className: \"w-full h-32 object-cover rounded-md mb-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-lg font-semibold\",\n                                            children: plant[0].plantName\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-gray-600\",\n                                            children: [\n                                                \"Last update: \",\n                                                plant[0].updatedAt\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 25\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 21\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlantDetails, \"ytiHdIhxg5HQVGRl/eIt7+AxAXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies\n    ];\n});\n_c = PlantDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetails);\nvar _c;\n$RefreshReg$(_c, \"PlantDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2RldGFpbHMvW3BsYW50SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3QztBQUNJO0FBQ0M7QUFDSDtBQUcxQyxNQUFNSyxlQUFlOztJQUVqQixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVwRSxNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxRQUFRLEdBQUdQLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUN0QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVksb0JBQW9CO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0NBQWdELE9BQVJULFVBQVc7Z0JBQzVFVSxhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRSLFFBQVFTLEtBQUs7Z0JBQzFDO1lBQ0o7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFDaENULFNBQVNRO1lBQ1RYLFdBQVc7UUFDZixFQUFFLE9BQU9hLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBLE1BQU1FLE9BQU87UUFDekM7SUFDSjtJQUVBeEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJTSxTQUFTO1lBQ1RPO1FBQ0o7SUFDSixHQUFHO1FBQUNQO0tBQVE7SUFFWixJQUFJRSxXQUFXLHFCQUFPLDhEQUFDaUI7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNkLE9BQU8scUJBQU8sOERBQUNjO2tCQUFFOzs7Ozs7SUFFdEJGLFFBQVFHLEdBQUcsQ0FBQ2Y7SUFFWixTQUFTZ0IsUUFBUUMsVUFBVTtRQUV2Qiw0Q0FBNEM7UUFDNUMsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRjtRQUV0Qiw0Q0FBNEM7UUFDNUMsTUFBTUcsT0FBT0YsS0FBS0csV0FBVztRQUM3QixNQUFNQyxRQUFRSixLQUFLSyxRQUFRLEtBQUs7UUFDaEMsTUFBTUMsTUFBTU4sS0FBS08sT0FBTztRQUV4QixJQUFJQyxjQUFjLEdBQVlGLE9BQVRGLE9BQU0sS0FBVUYsT0FBUEksS0FBSSxLQUFRLE9BQUxKO1FBRXJDLE9BQU9NO0lBQ1g7O0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ3BDLDBEQUFNQTtnQkFBQ3FDLFVBQVM7Ozs7OzswQkFDakIsOERBQUNEOztrQ0FDRyw4REFBQ0E7a0NBQ0csNEVBQUNFOzRCQUFJQyxLQUFLOUIsS0FBSyxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQytCLE1BQU0sR0FBQyxFQUFFLENBQUNDLFVBQVU7Ozs7Ozs7Ozs7O2tDQUVwRCw4REFBQ0w7OzBDQUNHLDhEQUFDTTswQ0FBSWpDLEtBQUssQ0FBQyxFQUFFLENBQUNrQyxTQUFTOzs7Ozs7MENBQ3ZCLDhEQUFDQzswQ0FBSW5DLEtBQUssQ0FBQyxFQUFFLENBQUNvQyxZQUFZOzs7Ozs7MENBQzFCLDhEQUFDdEI7O29DQUFFO29DQUFlRSxRQUFRaEIsS0FBSyxDQUFDLEVBQUUsQ0FBQ3FDLFNBQVM7Ozs7Ozs7MENBQzVDLDhEQUFDdkI7O29DQUFFO29DQUFjRSxRQUFRaEIsS0FBSyxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQytCLE1BQU0sR0FBQyxFQUFFLENBQUNPLFNBQVM7Ozs7Ozs7MENBQzlELDhEQUFDeEI7O29DQUFFO29DQUFRZCxLQUFLLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDK0IsTUFBTSxHQUFDLEVBQUUsQ0FBQ1EsS0FBSzs7Ozs7Ozs7Ozs7OztrQ0FHaEQsOERBQUNOO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNOO2tDQUNELDRFQUFDYTtzQ0FDSnhDLEtBQUssQ0FBQyxFQUFFLElBQUlBLEtBQUssQ0FBQyxFQUFFLENBQUN5QyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUM7Z0NBQy9CLHFCQUNJLDhEQUFDQztvQ0FBZUMsV0FBVTs7c0RBQ3RCLDhEQUFDaEI7NENBQUlDLEtBQUs5QixLQUFLLENBQUMsRUFBRSxDQUFDZ0MsVUFBVTs0Q0FBRWMsS0FBSzlDLEtBQUssQ0FBQyxFQUFFLENBQUNrQyxTQUFTOzRDQUFFVyxXQUFVOzs7Ozs7c0RBQ2xFLDhEQUFDWjs0Q0FBR1ksV0FBVTtzREFBeUI3QyxLQUFLLENBQUMsRUFBRSxDQUFDa0MsU0FBUzs7Ozs7O3NEQUN6RCw4REFBQ3BCOzRDQUFFK0IsV0FBVTs7Z0RBQWlCO2dEQUFjN0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ3NDLFNBQVM7Ozs7Ozs7c0RBRTlELDhEQUFDUzs7Ozs7O21DQUxJSjs7Ozs7NEJBUWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBdEZNbEQ7O1FBRWFMLGtEQUFTQTtRQUlOSSxvREFBVUE7OztLQU4xQkM7QUF3Rk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3BsYW50am91cm5hbC9kZXRhaWxzL1twbGFudElkXS5qc3g/OGJiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5cbmNvbnN0IFBsYW50RGV0YWlscyA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHBsYW50SWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gR2V0IHRoZSBkeW5hbWljIGlkIGZyb20gdGhlIFVSTFxuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcbiAgICBjb25zdCBbcGxhbnQsIHNldFBsYW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgZmV0Y2hQbGFudERldGFpbHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvZ2FyZGVuL2RldGFpbHMvJHtwbGFudElkfWAsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgc2V0UGxhbnQoZGF0YSk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocGxhbnRJZCkge1xuICAgICAgICAgICAgZmV0Y2hQbGFudERldGFpbHMoKTtcbiAgICAgICAgfVxuICAgIH0sIFtwbGFudElkXSk7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICBpZiAoIXBsYW50KSByZXR1cm4gPHA+Tm8gUGxhbnQgZGF0YTwvcD5cblxuICAgIGNvbnNvbGUubG9nKHBsYW50KVxuXG4gICAgZnVuY3Rpb24gc2V0RGF0ZShkYXRlU3RyaW5nKXtcblxuICAgICAgICAvLyBDcmVhdGUgYSBEYXRlIG9iamVjdCBmcm9tIHRoZSBkYXRlIHN0cmluZ1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBpbmRpdmlkdWFsIGNvbXBvbmVudHMgb2YgdGhlIGRhdGVcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxOyBcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG5cbiAgICAgICAgbGV0IHVwZGF0ZWREYXRlID0gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YFxuXG4gICAgICAgIHJldHVybiB1cGRhdGVkRGF0ZVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdkJhciBwYWdlTmFtZT1cIlBsYW50IEpvdXJuYWxcIiAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGxhbnRbMV1bcGxhbnRbMV0ubGVuZ3RoLTFdLnBsYW50SW1hZ2V9PjwvaW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57cGxhbnRbMF0ucGxhbnROYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57cGxhbnRbMF0ucGxhbnRTcGVjaWVzfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPkRhdGUgcGxhbnRlZDoge3NldERhdGUocGxhbnRbMF0ucGxhbnREYXRlKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxhc3QgdXBkYXRlOiB7c2V0RGF0ZShwbGFudFsxXVtwbGFudFsxXS5sZW5ndGgtMV0udXBkYXRlZEF0KX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5vdGVzOiB7cGxhbnRbMV1bcGxhbnRbMV0ubGVuZ3RoLTFdLm5vdGVzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoMj5VcGRhdGVzPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtwbGFudFsxXSAmJiBwbGFudFsxXS5tYXAoKHVwZGF0ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIHctNDhcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGxhbnRbMV0ucGxhbnRJbWFnZX0gYWx0PXtwbGFudFswXS5wbGFudE5hbWV9IGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIG9iamVjdC1jb3ZlciByb3VuZGVkLW1kIG1iLTJcIiA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e3BsYW50WzBdLnBsYW50TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiID5MYXN0IHVwZGF0ZToge3BsYW50WzBdLnVwZGF0ZWRBdH08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW50RGV0YWlscyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkJhciIsInVzZUNvb2tpZXMiLCJQbGFudERldGFpbHMiLCJyb3V0ZXIiLCJwbGFudElkIiwicXVlcnkiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29va2llcyIsInBsYW50Iiwic2V0UGxhbnQiLCJmZXRjaFBsYW50RGV0YWlscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJwIiwibG9nIiwic2V0RGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidXBkYXRlZERhdGUiLCJkaXYiLCJwYWdlTmFtZSIsImltZyIsInNyYyIsImxlbmd0aCIsInBsYW50SW1hZ2UiLCJoMiIsInBsYW50TmFtZSIsImgzIiwicGxhbnRTcGVjaWVzIiwicGxhbnREYXRlIiwidXBkYXRlZEF0Iiwibm90ZXMiLCJ1bCIsIm1hcCIsInVwZGF0ZSIsImluZGV4IiwibGkiLCJjbGFzc05hbWUiLCJhbHQiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/details/[plantId].jsx\n"));

/***/ })

});