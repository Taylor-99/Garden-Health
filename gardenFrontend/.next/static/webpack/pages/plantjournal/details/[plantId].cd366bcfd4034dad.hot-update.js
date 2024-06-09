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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst PlantDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { plantId } = router.query; // Get the dynamic id from the URL\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"token\"\n    ]);\n    const [plant, setPlant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const fetchPlantDetails = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/garden/details/\".concat(plantId), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setPlant(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (plantId) {\n            fetchPlantDetails();\n        }\n    }, [\n        plantId\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 40,\n        columnNumber: 27\n    }, undefined);\n    if (!plant) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Plant data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 41,\n        columnNumber: 24\n    }, undefined);\n    console.log(plant);\n    function setDate(dateString) {\n        // Create a Date object from the date string\n        const date = new Date(dateString);\n        // Get the individual components of the date\n        const year = date.getFullYear();\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        let updatedDate = \"\".concat(month, \"/\").concat(day, \"/\").concat(year);\n        return updatedDate;\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: plant[1][plant[1].length - 1].plantImage\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: plant[0].plantName\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 68,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: plant[0].plantSpecies\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Date planted: \",\n                                    setDate(plant[0].plantDate)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Last update: \",\n                                    setDate(plant[1][plant[1].length - 1].updatedAt)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Notes: \",\n                                    plant[1][plant[1].length - 1].notes\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Updates\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                plant[1] && plant[1].map((update, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"bg-white p-4 rounded-lg shadow-md w-48\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: update.plantImage,\n                                                alt: plant[0].plantName,\n                                                className: \"w-full h-32 object-cover rounded-md mb-2\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-lg font-semibold\",\n                                                children: [\n                                                    \"Update from: \",\n                                                    setDate(update.updatedAt)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"Health: \",\n                                                    update.health\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-600\",\n                                                        children: [\n                                                            \"Notes: \",\n                                                            update.notes\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-600\",\n                                                        children: [\n                                                            \"Fertilizer: \",\n                                                            update.fertilizer\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-600\",\n                                                        children: [\n                                                            \"Temperature: \",\n                                                            update.temperature,\n                                                            \"\\xb0\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-600\",\n                                                        children: [\n                                                            \"Rain: \",\n                                                            update.rain === true ? \"Yes\" : \"No\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 29\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 29\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 25\n                                    }, undefined);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-white p-4 rounded-lg shadow-md flex justify-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                        href: \"/plantjournal/updateplant/\",\n                                        className: \"text-blue-500 hover:text-blue-700 font-semibold\",\n                                        children: \"Create A plant\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                            lineNumber: 77,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlantDetails, \"ytiHdIhxg5HQVGRl/eIt7+AxAXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies\n    ];\n});\n_c = PlantDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetails);\nvar _c;\n$RefreshReg$(_c, \"PlantDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2RldGFpbHMvW3BsYW50SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN3QztBQUNJO0FBQ0M7QUFDSDtBQUcxQyxNQUFNSyxlQUFlOztJQUVqQixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFFTyxPQUFPLEVBQUUsR0FBR0QsT0FBT0UsS0FBSyxFQUFFLGtDQUFrQztJQUVwRSxNQUFNLENBQUNDLFdBQVdDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUyxRQUFRLEdBQUdQLHdEQUFVQSxDQUFDO1FBQUM7S0FBUTtJQUN0QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVksb0JBQW9CO1FBQ3RCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0NBQWdELE9BQVJULFVBQVc7Z0JBQzVFVSxhQUFhO2dCQUNiQyxTQUFTO29CQUNMQyxlQUFlLFVBQXdCLE9BQWRSLFFBQVFTLEtBQUs7Z0JBQzFDO1lBQ0o7WUFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7WUFDaENULFNBQVNRO1lBQ1RYLFdBQVc7UUFDZixFQUFFLE9BQU9hLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBLE1BQU1FLE9BQU87UUFDekM7SUFDSjtJQUVBeEIsZ0RBQVNBLENBQUM7UUFDTixJQUFJTSxTQUFTO1lBQ1RPO1FBQ0o7SUFDSixHQUFHO1FBQUNQO0tBQVE7SUFFWixJQUFJRSxXQUFXLHFCQUFPLDhEQUFDaUI7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNkLE9BQU8scUJBQU8sOERBQUNjO2tCQUFFOzs7Ozs7SUFFdEJGLFFBQVFHLEdBQUcsQ0FBQ2Y7SUFFWixTQUFTZ0IsUUFBUUMsVUFBVTtRQUV2Qiw0Q0FBNEM7UUFDNUMsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRjtRQUV0Qiw0Q0FBNEM7UUFDNUMsTUFBTUcsT0FBT0YsS0FBS0csV0FBVztRQUM3QixNQUFNQyxRQUFRSixLQUFLSyxRQUFRLEtBQUs7UUFDaEMsTUFBTUMsTUFBTU4sS0FBS08sT0FBTztRQUV4QixJQUFJQyxjQUFjLEdBQVlGLE9BQVRGLE9BQU0sS0FBVUYsT0FBUEksS0FBSSxLQUFRLE9BQUxKO1FBRXJDLE9BQU9NO0lBQ1g7O0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ3BDLDBEQUFNQTtnQkFBQ3FDLFVBQVM7Ozs7OzswQkFDakIsOERBQUNEOztrQ0FDRyw4REFBQ0E7a0NBQ0csNEVBQUNFOzRCQUFJQyxLQUFLOUIsS0FBSyxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQytCLE1BQU0sR0FBQyxFQUFFLENBQUNDLFVBQVU7Ozs7Ozs7Ozs7O2tDQUVwRCw4REFBQ0w7OzBDQUNHLDhEQUFDTTswQ0FBSWpDLEtBQUssQ0FBQyxFQUFFLENBQUNrQyxTQUFTOzs7Ozs7MENBQ3ZCLDhEQUFDQzswQ0FBSW5DLEtBQUssQ0FBQyxFQUFFLENBQUNvQyxZQUFZOzs7Ozs7MENBQzFCLDhEQUFDdEI7O29DQUFFO29DQUFlRSxRQUFRaEIsS0FBSyxDQUFDLEVBQUUsQ0FBQ3FDLFNBQVM7Ozs7Ozs7MENBQzVDLDhEQUFDdkI7O29DQUFFO29DQUFjRSxRQUFRaEIsS0FBSyxDQUFDLEVBQUUsQ0FBQ0EsS0FBSyxDQUFDLEVBQUUsQ0FBQytCLE1BQU0sR0FBQyxFQUFFLENBQUNPLFNBQVM7Ozs7Ozs7MENBQzlELDhEQUFDeEI7O29DQUFFO29DQUFRZCxLQUFLLENBQUMsRUFBRSxDQUFDQSxLQUFLLENBQUMsRUFBRSxDQUFDK0IsTUFBTSxHQUFDLEVBQUUsQ0FBQ1EsS0FBSzs7Ozs7Ozs7Ozs7OztrQ0FHaEQsOERBQUNOO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNOO2tDQUNELDRFQUFDYTs7Z0NBQ0l4QyxLQUFLLENBQUMsRUFBRSxJQUFJQSxLQUFLLENBQUMsRUFBRSxDQUFDeUMsR0FBRyxDQUFDLENBQUNDLFFBQVFDO29DQUNuQyxxQkFDSSw4REFBQ0M7d0NBQWVDLFdBQVU7OzBEQUN0Qiw4REFBQ2hCO2dEQUFJQyxLQUFLWSxPQUFPVixVQUFVO2dEQUFFYyxLQUFLOUMsS0FBSyxDQUFDLEVBQUUsQ0FBQ2tDLFNBQVM7Z0RBQUVXLFdBQVU7Ozs7OzswREFDaEUsOERBQUNaO2dEQUFHWSxXQUFVOztvREFBd0I7b0RBQWU3QixRQUFRMEIsT0FBT0osU0FBUzs7Ozs7OzswREFDN0UsOERBQUN4Qjs7b0RBQUU7b0RBQVM0QixPQUFPSyxNQUFNOzs7Ozs7OzBEQUN6Qiw4REFBQ3BCOztrRUFDRyw4REFBQ2I7d0RBQUUrQixXQUFVOzs0REFBaUI7NERBQVFILE9BQU9ILEtBQUs7Ozs7Ozs7a0VBQ2xELDhEQUFDekI7d0RBQUUrQixXQUFVOzs0REFBaUI7NERBQWFILE9BQU9NLFVBQVU7Ozs7Ozs7a0VBQzVELDhEQUFDbEM7d0RBQUUrQixXQUFVOzs0REFBaUI7NERBQWNILE9BQU9PLFdBQVc7NERBQUM7Ozs7Ozs7a0VBQy9ELDhEQUFDbkM7d0RBQUUrQixXQUFVOzs0REFBaUI7NERBQU9ILE9BQU9RLElBQUksS0FBSyxPQUFPLFFBQVE7Ozs7Ozs7Ozs7Ozs7MERBR3hFLDhEQUFDQzs7Ozs7O3VDQVhJUjs7Ozs7Z0NBY3JCOzhDQUNBLDhEQUFDQztvQ0FBR0MsV0FBVTs4Q0FDViw0RUFBQ087d0NBQUtDLE1BQUs7d0NBQTZCUixXQUFVO2tEQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNwSDtHQWpHTXBEOztRQUVhTCxrREFBU0E7UUFJTkksb0RBQVVBOzs7S0FOMUJDO0FBbUdOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wbGFudGpvdXJuYWwvZGV0YWlscy9bcGxhbnRJZF0uanN4PzhiYmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcblxuXG5jb25zdCBQbGFudERldGFpbHMgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBwbGFudElkIH0gPSByb3V0ZXIucXVlcnk7IC8vIEdldCB0aGUgZHluYW1pYyBpZCBmcm9tIHRoZSBVUkxcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG4gICAgY29uc3QgW3BsYW50LCBzZXRQbGFudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGZldGNoUGxhbnREZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dhcmRlbi9kZXRhaWxzLyR7cGxhbnRJZH1gLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldFBsYW50KGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHBsYW50SWQpIHtcbiAgICAgICAgICAgIGZldGNoUGxhbnREZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICB9LCBbcGxhbnRJZF0pO1xuXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgaWYgKCFwbGFudCkgcmV0dXJuIDxwPk5vIFBsYW50IGRhdGE8L3A+XG5cbiAgICBjb25zb2xlLmxvZyhwbGFudClcblxuICAgIGZ1bmN0aW9uIHNldERhdGUoZGF0ZVN0cmluZyl7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgRGF0ZSBvYmplY3QgZnJvbSB0aGUgZGF0ZSBzdHJpbmdcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgaW5kaXZpZHVhbCBjb21wb25lbnRzIG9mIHRoZSBkYXRlXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGxldCB1cGRhdGVkRGF0ZSA9IGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWBcblxuICAgICAgICByZXR1cm4gdXBkYXRlZERhdGVcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJQbGFudCBKb3VybmFsXCIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW50WzFdW3BsYW50WzFdLmxlbmd0aC0xXS5wbGFudEltYWdlfT48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3BsYW50WzBdLnBsYW50TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3BsYW50WzBdLnBsYW50U3BlY2llc308L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5EYXRlIHBsYW50ZWQ6IHtzZXREYXRlKHBsYW50WzBdLnBsYW50RGF0ZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IHVwZGF0ZToge3NldERhdGUocGxhbnRbMV1bcGxhbnRbMV0ubGVuZ3RoLTFdLnVwZGF0ZWRBdCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5Ob3Rlczoge3BsYW50WzFdW3BsYW50WzFdLmxlbmd0aC0xXS5ub3Rlc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDI+VXBkYXRlczwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtwbGFudFsxXSAmJiBwbGFudFsxXS5tYXAoKHVwZGF0ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbWQgdy00OFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXBkYXRlLnBsYW50SW1hZ2V9IGFsdD17cGxhbnRbMF0ucGxhbnROYW1lfSBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiBvYmplY3QtY292ZXIgcm91bmRlZC1tZCBtYi0yXCIgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5VcGRhdGUgZnJvbTogeyBzZXREYXRlKHVwZGF0ZS51cGRhdGVkQXQpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGVhbHRoOiB7dXBkYXRlLmhlYWx0aH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiID5Ob3Rlczoge3VwZGF0ZS5ub3Rlc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIiA+RmVydGlsaXplcjoge3VwZGF0ZS5mZXJ0aWxpemVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiID5UZW1wZXJhdHVyZToge3VwZGF0ZS50ZW1wZXJhdHVyZX3CsDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiID5SYWluOiB7dXBkYXRlLnJhaW4gPT09IHRydWUgPyBcIlllc1wiIDogXCJOb1wifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGxhbnRqb3VybmFsL3VwZGF0ZXBsYW50L1wiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgaG92ZXI6dGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZSBBIHBsYW50XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW50RGV0YWlscyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkJhciIsInVzZUNvb2tpZXMiLCJQbGFudERldGFpbHMiLCJyb3V0ZXIiLCJwbGFudElkIiwicXVlcnkiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29va2llcyIsInBsYW50Iiwic2V0UGxhbnQiLCJmZXRjaFBsYW50RGV0YWlscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJwIiwibG9nIiwic2V0RGF0ZSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwidXBkYXRlZERhdGUiLCJkaXYiLCJwYWdlTmFtZSIsImltZyIsInNyYyIsImxlbmd0aCIsInBsYW50SW1hZ2UiLCJoMiIsInBsYW50TmFtZSIsImgzIiwicGxhbnRTcGVjaWVzIiwicGxhbnREYXRlIiwidXBkYXRlZEF0Iiwibm90ZXMiLCJ1bCIsIm1hcCIsInVwZGF0ZSIsImluZGV4IiwibGkiLCJjbGFzc05hbWUiLCJhbHQiLCJoZWFsdGgiLCJmZXJ0aWxpemVyIiwidGVtcGVyYXR1cmUiLCJyYWluIiwiYnIiLCJMaW5rIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/details/[plantId].jsx\n"));

/***/ })

});