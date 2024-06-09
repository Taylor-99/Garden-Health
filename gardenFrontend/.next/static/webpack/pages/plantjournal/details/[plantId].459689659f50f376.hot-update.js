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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PlantDetails = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { plantId } = router.query; // Get the dynamic id from the URL\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"token\"\n    ]);\n    const [plant, setPlant] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const fetchPlantDetails = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/garden/details/\".concat(plantId), {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setPlant(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (plantId) {\n            fetchPlantDetails();\n        }\n    }, [\n        plantId\n    ]);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 41,\n        columnNumber: 27\n    }, undefined);\n    if (!plant) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Plant data\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 42,\n        columnNumber: 24\n    }, undefined);\n    console.log(plant);\n    function setDate(dateString) {\n        // Create a Date object from the date string\n        const date = new Date(dateString);\n        // Get the individual components of the date\n        const year = date.getFullYear();\n        const month = date.getMonth() + 1;\n        const day = date.getDate();\n        let updatedDate = \"\".concat(month, \"/\").concat(day, \"/\").concat(year);\n        return updatedDate;\n    }\n    ;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: plant[1][plant[1].length - 1].plantImage\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: plant[0].plantName\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: plant[0].plantSpecies\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Date planted: \",\n                                    setDate(plant[0].plantDate)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Last update: \",\n                                    setDate(plant[1][plant[1].length - 1].updatedAt)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Notes: \",\n                                    plant[1][plant[1].length - 1].notes\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                value: \"Water Plant\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Updates\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                            children: [\n                                plant[1] && plant[1].map((update, index)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"bg-white p-4 rounded-lg shadow-md w-48\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: update.plantImage,\n                                                alt: plant[0].plantName,\n                                                className: \"w-full h-32 object-cover rounded-md mb-2\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-lg font-semibold\",\n                                                children: [\n                                                    \"Update from: \",\n                                                    setDate(update.updatedAt)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"Health: \",\n                                                    update.health\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-600\",\n                                                        children: [\n                                                            \"Notes: \",\n                                                            update.notes\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                        lineNumber: 88,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-600\",\n                                                        children: [\n                                                            \"Fertilizer: \",\n                                                            update.fertilizer\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                        lineNumber: 89,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-600\",\n                                                        children: [\n                                                            \"Temperature: \",\n                                                            update.temperature,\n                                                            \"\\xb0\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                        lineNumber: 90,\n                                                        columnNumber: 37\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-gray-600\",\n                                                        children: [\n                                                            \"Rain: \",\n                                                            update.rain === true ? \"Yes\" : \"No\"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 37\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 29\n                                    }, undefined);\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-white p-4 rounded-lg shadow-md flex justify-center items-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/plantjournal/updateplant/\".concat(plant[0]._id),\n                                        className: \"text-blue-500 hover:text-blue-700 font-semibold\",\n                                        children: \"Add Update\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                            lineNumber: 80,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/details/[plantId].jsx\",\n        lineNumber: 62,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlantDetails, \"ytiHdIhxg5HQVGRl/eIt7+AxAXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies\n    ];\n});\n_c = PlantDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlantDetails);\nvar _c;\n$RefreshReg$(_c, \"PlantDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2RldGFpbHMvW3BsYW50SWRdLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ0k7QUFDQztBQUNIO0FBQ2I7QUFHN0IsTUFBTU0sZUFBZTs7SUFFakIsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVEsT0FBTyxFQUFFLEdBQUdELE9BQU9FLEtBQUssRUFBRSxrQ0FBa0M7SUFFcEUsTUFBTSxDQUFDQyxXQUFXQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsUUFBUSxHQUFHUix3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFDdEMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1hLG9CQUFvQjtRQUN0QixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHdDQUFnRCxPQUFSVCxVQUFXO2dCQUM1RVUsYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkUixRQUFRUyxLQUFLO2dCQUMxQztZQUNKO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDVCxTQUFTUTtZQUNUWCxXQUFXO1FBQ2YsRUFBRSxPQUFPYSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxVQUFVQSxNQUFNRSxPQUFPO1FBQ3pDO0lBQ0o7SUFFQXpCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSU8sU0FBUztZQUNUTztRQUNKO0lBQ0osR0FBRztRQUFDUDtLQUFRO0lBRVosSUFBSUUsV0FBVyxxQkFBTyw4REFBQ2lCO2tCQUFFOzs7Ozs7SUFDekIsSUFBSSxDQUFDZCxPQUFPLHFCQUFPLDhEQUFDYztrQkFBRTs7Ozs7O0lBRXRCRixRQUFRRyxHQUFHLENBQUNmO0lBRVosU0FBU2dCLFFBQVFDLFVBQVU7UUFFdkIsNENBQTRDO1FBQzVDLE1BQU1DLE9BQU8sSUFBSUMsS0FBS0Y7UUFFdEIsNENBQTRDO1FBQzVDLE1B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am91cm5hbC9kZXRhaWxzL1twbGFudElkXS5qc3g/OGJiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5jb25zdCBQbGFudERldGFpbHMgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBwbGFudElkIH0gPSByb3V0ZXIucXVlcnk7IC8vIEdldCB0aGUgZHluYW1pYyBpZCBmcm9tIHRoZSBVUkxcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG4gICAgY29uc3QgW3BsYW50LCBzZXRQbGFudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGZldGNoUGxhbnREZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dhcmRlbi9kZXRhaWxzLyR7cGxhbnRJZH1gLCB7XG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHNldFBsYW50KGRhdGEpO1xuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHBsYW50SWQpIHtcbiAgICAgICAgICAgIGZldGNoUGxhbnREZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICB9LCBbcGxhbnRJZF0pO1xuXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgaWYgKCFwbGFudCkgcmV0dXJuIDxwPk5vIFBsYW50IGRhdGE8L3A+XG5cbiAgICBjb25zb2xlLmxvZyhwbGFudClcblxuICAgIGZ1bmN0aW9uIHNldERhdGUoZGF0ZVN0cmluZyl7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgRGF0ZSBvYmplY3QgZnJvbSB0aGUgZGF0ZSBzdHJpbmdcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgaW5kaXZpZHVhbCBjb21wb25lbnRzIG9mIHRoZSBkYXRlXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTsgXG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIGxldCB1cGRhdGVkRGF0ZSA9IGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWBcblxuICAgICAgICByZXR1cm4gdXBkYXRlZERhdGVcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZCYXIgcGFnZU5hbWU9XCJQbGFudCBKb3VybmFsXCIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3BsYW50WzFdW3BsYW50WzFdLmxlbmd0aC0xXS5wbGFudEltYWdlfT48L2ltZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3BsYW50WzBdLnBsYW50TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3BsYW50WzBdLnBsYW50U3BlY2llc308L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5EYXRlIHBsYW50ZWQ6IHtzZXREYXRlKHBsYW50WzBdLnBsYW50RGF0ZSl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IHVwZGF0ZToge3NldERhdGUocGxhbnRbMV1bcGxhbnRbMV0ubGVuZ3RoLTFdLnVwZGF0ZWRBdCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5Ob3Rlczoge3BsYW50WzFdW3BsYW50WzFdLmxlbmd0aC0xXS5ub3Rlc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiV2F0ZXIgUGxhbnRcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aDI+VXBkYXRlczwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICB7cGxhbnRbMV0gJiYgcGxhbnRbMV0ubWFwKCh1cGRhdGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbWQgdy00OFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VwZGF0ZS5wbGFudEltYWdlfSBhbHQ9e3BsYW50WzBdLnBsYW50TmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbWQgbWItMlwiID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPlVwZGF0ZSBmcm9tOiB7IHNldERhdGUodXBkYXRlLnVwZGF0ZWRBdCl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGVhbHRoOiB7dXBkYXRlLmhlYWx0aH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCIgPk5vdGVzOiB7dXBkYXRlLm5vdGVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIiA+RmVydGlsaXplcjoge3VwZGF0ZS5mZXJ0aWxpemVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIiA+VGVtcGVyYXR1cmU6IHt1cGRhdGUudGVtcGVyYXR1cmV9wrA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCIgPlJhaW46IHt1cGRhdGUucmFpbiA9PT0gdHJ1ZSA/IFwiWWVzXCIgOiBcIk5vXCJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbWQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BsYW50am91cm5hbC91cGRhdGVwbGFudC8ke3BsYW50WzBdLl9pZH1gfSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIGhvdmVyOnRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBVcGRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYW50RGV0YWlscyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdkJhciIsInVzZUNvb2tpZXMiLCJMaW5rIiwiUGxhbnREZXRhaWxzIiwicm91dGVyIiwicGxhbnRJZCIsInF1ZXJ5IiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZXMiLCJwbGFudCIsInNldFBsYW50IiwiZmV0Y2hQbGFudERldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwicCIsImxvZyIsInNldERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInVwZGF0ZWREYXRlIiwiZGl2IiwicGFnZU5hbWUiLCJpbWciLCJzcmMiLCJsZW5ndGgiLCJwbGFudEltYWdlIiwiaDIiLCJwbGFudE5hbWUiLCJoMyIsInBsYW50U3BlY2llcyIsInBsYW50RGF0ZSIsInVwZGF0ZWRBdCIsIm5vdGVzIiwiYnIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInVsIiwiY2xhc3NOYW1lIiwibWFwIiwidXBkYXRlIiwiaW5kZXgiLCJsaSIsImFsdCIsImhlYWx0aCIsImZlcnRpbGl6ZXIiLCJ0ZW1wZXJhdHVyZSIsInJhaW4iLCJocmVmIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/details/[plantId].jsx\n"));

/***/ })

});