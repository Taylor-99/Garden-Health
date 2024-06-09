"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plantjournal/update/[plantId]",{

/***/ "./src/pages/plantjournal/update/[plantId].jsx":
/*!*****************************************************!*\
  !*** ./src/pages/plantjournal/update/[plantId].jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/NavBar */ \"./src/pages/components/NavBar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst UpdatePlant = ()=>{\n    _s();\n    const [updateFormData, setUpdateFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        plantName: \"\",\n        plantSpecies: \"\",\n        watered: \"\",\n        plantDate: \"\",\n        plantImage: \"\",\n        temperature: \"\",\n        rain: \"\",\n        health: \"\",\n        fertilizer: \"\",\n        notes: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"token\"\n    ]);\n    const { plantId } = router.query; // Get the dynamic id from the URL\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleUpdatePlant = async ()=>{\n        try {\n            console.log(\"Sending data\");\n            const response = await fetch(\"http://localhost:4000/garden/update/\".concat(plantId), {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(cookies.token)\n                },\n                body: JSON.stringify(updateFormData)\n            });\n            await response.json();\n            if (response.ok) {\n                console.log(\"plant updated\");\n                // Redirect or perform an action on successful login\n                navigate.replace(\"/plantjournal/details/\".concat(plantId));\n            } else {\n                setError(data.message);\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleChange = (e)=>{\n        setUpdateFormData({\n            ...updateFormData,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                pageName: \"Plant Journal\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \" Update Plant \"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                        lineNumber: 72,\n                        columnNumber: 31\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handleUpdatePlant();\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"plantImage\",\n                                children: \"Plant Image: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"plantImage\",\n                                placeholder: \"Upload image of your plant\",\n                                onChange: handleChange,\n                                value: updateFormData.plantImage\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"temperature\",\n                                children: \"Todays Temperature: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 89,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"temperature\",\n                                placeholder: \"Todays Temperature\",\n                                onChange: handleChange,\n                                value: updateFormData.temperature\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 97,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"rain\",\n                                children: \"Did it rain Today? \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 99,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"rain\",\n                                placeholder: \"Rain\",\n                                onChange: handleChange,\n                                value: updateFormData.rain\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 107,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"health\",\n                                children: \"Plant health status: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 109,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"health\",\n                                placeholder: \"Status of Plant\",\n                                onChange: handleChange,\n                                value: updateFormData.health\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 110,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 117,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"fertilizer\",\n                                children: \"What fertilizer did you use: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 119,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"fertilizer\",\n                                placeholder: \"Fertilizer used\",\n                                onChange: handleChange,\n                                value: updateFormData.fertilizer\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 120,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 127,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"notes\",\n                                children: \"Any other notes: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 129,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"notes\",\n                                placeholder: \"Additional notes about plant\",\n                                onChange: handleChange,\n                                value: updateFormData.notes\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 130,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 137,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 138,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                                lineNumber: 140,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/update/[plantId].jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UpdatePlant, \"ZgUM7rvSrrvKhMaqwgt+KK9gZm8=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UpdatePlant;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UpdatePlant);\nvar _c;\n$RefreshReg$(_c, \"UpdatePlant\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL3VwZGF0ZS9bcGxhbnRJZF0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ0E7QUFDRTtBQUNFO0FBRTVDLE1BQU1LLGNBQWM7O0lBSWhCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUM7UUFDakRPLFdBQVc7UUFDWEMsY0FBYztRQUNkQyxTQUFTO1FBQ1RDLFdBQVc7UUFDWEMsWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxZQUFZO1FBQ1pDLE9BQU87SUFDWDtJQUNBLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDbUIsUUFBUSxHQUFHakIsd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBQ3RDLE1BQU0sRUFBRWtCLE9BQU8sRUFBRSxHQUFHQyxPQUFPQyxLQUFLLEVBQUUsa0NBQWtDO0lBRXBFLE1BQU1DLFdBQVd0QixzREFBU0E7SUFFMUIsTUFBTXVCLG9CQUFvQjtRQUN0QixJQUFJO1lBRUFDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx1Q0FBK0MsT0FBUlIsVUFBVztnQkFDM0VTLFFBQVE7Z0JBQ1JDLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQ0wsZ0JBQWdCO29CQUNoQkMsZUFBZSxVQUF3QixPQUFkYixRQUFRYyxLQUFLO2dCQUMxQztnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDL0I7WUFDekI7WUFFQSxNQUFNc0IsU0FBU1UsSUFBSTtZQUVuQixJQUFJVixTQUFTVyxFQUFFLEVBQUU7Z0JBQ2JiLFFBQVFDLEdBQUcsQ0FBQztnQkFFWixvREFBb0Q7Z0JBQ3BESCxTQUFTZ0IsT0FBTyxDQUFDLHlCQUFpQyxPQUFSbkI7WUFDOUMsT0FBTztnQkFDSEYsU0FBU3NCLEtBQUtDLE9BQU87WUFDekI7UUFDSixFQUFFLE9BQU9DLEtBQUs7WUFDVnhCLFNBQVM7UUFDYjtJQUNKO0lBRUEsTUFBTXlCLGVBQWUsQ0FBQ0M7UUFDbEJ0QyxrQkFBa0I7WUFDZCxHQUFHRCxjQUFjO1lBQ2pCLENBQUN1QyxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixFQUFFQyxNQUFNLENBQUNFLEtBQUs7UUFDbkM7SUFDSjtJQUVGLHFCQUNFLDhEQUFDQzs7MEJBQ0csOERBQUM3QywwREFBTUE7Z0JBQUM4QyxVQUFTOzs7Ozs7MEJBRWpCLDhEQUFDQzs7a0NBQ1csOERBQUNDO2tDQUFHOzs7Ozs7b0JBRUhsQyx1QkFBUyw4REFBQ21DO3dCQUFFQyxPQUFPOzRCQUFFQyxPQUFPO3dCQUFNO2tDQUFJckM7Ozs7OztrQ0FFdkMsOERBQUNzQzt3QkFBS0MsVUFBVSxDQUFDWjs0QkFDYkEsRUFBRWEsY0FBYzs0QkFDaEJ2QyxTQUFTOzRCQUNUTTt3QkFDSjs7MENBQ0ksOERBQUNrQztnQ0FBTUMsU0FBUTswQ0FBYzs7Ozs7OzBDQUM3Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQ1pmLE1BQUs7Z0NBQ0xnQixhQUFZO2dDQUNaQyxVQUFVcEI7Z0NBQ1ZJLE9BQU8xQyxlQUFlTSxVQUFVOzs7Ozs7MENBR2hDLDhEQUFDcUQ7Ozs7OzBDQUVELDhEQUFDTjtnQ0FBTUMsU0FBUTswQ0FBZTs7Ozs7OzBDQUM5Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQ1pmLE1BQUs7Z0NBQ0xnQixhQUFZO2dDQUNaQyxVQUFVcEI7Z0NBQ1ZJLE9BQU8xQyxlQUFlTyxXQUFXOzs7Ozs7MENBR2pDLDhEQUFDb0Q7Ozs7OzBDQUVELDhEQUFDTjtnQ0FBTUMsU0FBUTswQ0FBUTs7Ozs7OzBDQUN2Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQ1pmLE1BQUs7Z0NBQ0xnQixhQUFZO2dDQUNaQyxVQUFVcEI7Z0NBQ1ZJLE9BQU8xQyxlQUFlUSxJQUFJOzs7Ozs7MENBRzFCLDhEQUFDbUQ7Ozs7OzBDQUVELDhEQUFDTjtnQ0FBTUMsU0FBUTswQ0FBVTs7Ozs7OzBDQUN6Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQ1pmLE1BQUs7Z0NBQ0xnQixhQUFZO2dDQUNaQyxVQUFVcEI7Z0NBQ1ZJLE9BQU8xQyxlQUFlUyxNQUFNOzs7Ozs7MENBRzVCLDhEQUFDa0Q7Ozs7OzBDQUVELDhEQUFDTjtnQ0FBTUMsU0FBUTswQ0FBYzs7Ozs7OzBDQUM3Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQ1pmLE1BQUs7Z0NBQ0xnQixhQUFZO2dDQUNaQyxVQUFVcEI7Z0NBQ1ZJLE9BQU8xQyxlQUFlVSxVQUFVOzs7Ozs7MENBR2hDLDhEQUFDaUQ7Ozs7OzBDQUVELDhEQUFDTjtnQ0FBTUMsU0FBUTswQ0FBUzs7Ozs7OzBDQUN4Qiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQ1pmLE1BQUs7Z0NBQ0xnQixhQUFZO2dDQUNaQyxVQUFVcEI7Z0NBQ1ZJLE9BQU8xQyxlQUFlVyxLQUFLOzs7Ozs7MENBRzNCLDhEQUFDZ0Q7Ozs7OzBDQUNELDhEQUFDQTs7Ozs7MENBRUQsOERBQUNKO2dDQUFNQyxNQUFLO2dDQUNaZCxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7R0EzSU0zQzs7UUFpQmdCRixvREFBVUE7UUFHWEQsa0RBQVNBOzs7S0FwQnhCRztBQTZJTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL3VwZGF0ZS9bcGxhbnRJZF0uanN4PzMyMDAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXInXG5cbmNvbnN0IFVwZGF0ZVBsYW50ID0gKCkgPT4ge1xuXG4gICAgXG5cbiAgICBjb25zdCBbdXBkYXRlRm9ybURhdGEsIHNldFVwZGF0ZUZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgcGxhbnROYW1lOiAnJyxcbiAgICAgICAgcGxhbnRTcGVjaWVzOiAnJyxcbiAgICAgICAgd2F0ZXJlZDogJycsXG4gICAgICAgIHBsYW50RGF0ZTogJycsXG4gICAgICAgIHBsYW50SW1hZ2U6ICcnLFxuICAgICAgICB0ZW1wZXJhdHVyZTogJycsXG4gICAgICAgIHJhaW46ICcnLFxuICAgICAgICBoZWFsdGg6ICcnLFxuICAgICAgICBmZXJ0aWxpemVyOiAnJyxcbiAgICAgICAgbm90ZXM6ICcnLFxuICAgIH0pOyBcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG4gICAgY29uc3QgeyBwbGFudElkIH0gPSByb3V0ZXIucXVlcnk7IC8vIEdldCB0aGUgZHluYW1pYyBpZCBmcm9tIHRoZSBVUkxcblxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoYW5kbGVVcGRhdGVQbGFudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGRhdGFcIilcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9nYXJkZW4vdXBkYXRlLyR7cGxhbnRJZH1gLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1cGRhdGVGb3JtRGF0YSksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYW50IHVwZGF0ZWRcIilcblxuICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IG9yIHBlcmZvcm0gYW4gYWN0aW9uIG9uIHN1Y2Nlc3NmdWwgbG9naW5cbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZS5yZXBsYWNlKGAvcGxhbnRqb3VybmFsL2RldGFpbHMvJHtwbGFudElkfWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0RXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFVwZGF0ZUZvcm1EYXRhKHtcbiAgICAgICAgICAgIC4uLnVwZGF0ZUZvcm1EYXRhLCBcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8TmF2QmFyIHBhZ2VOYW1lPVwiUGxhbnQgSm91cm5hbFwiIC8+XG5cbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4gVXBkYXRlIFBsYW50IDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57ZXJyb3J9PC9wPn1cblxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVVwZGF0ZVBsYW50KClcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBsYW50SW1hZ2VcIiA+UGxhbnQgSW1hZ2U6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGxhbnRJbWFnZVwiICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXBsb2FkIGltYWdlIG9mIHlvdXIgcGxhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXBkYXRlRm9ybURhdGEucGxhbnRJbWFnZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZW1wZXJhdHVyZVwiID5Ub2RheXMgVGVtcGVyYXR1cmU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nbnVtYmVyJyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZW1wZXJhdHVyZVwiICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVG9kYXlzIFRlbXBlcmF0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VwZGF0ZUZvcm1EYXRhLnRlbXBlcmF0dXJlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJhaW5cIiA+RGlkIGl0IHJhaW4gVG9kYXk/IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmFpblwiICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUmFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1cGRhdGVGb3JtRGF0YS5yYWlufSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImhlYWx0aFwiID5QbGFudCBoZWFsdGggc3RhdHVzOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhlYWx0aFwiICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhdHVzIG9mIFBsYW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VwZGF0ZUZvcm1EYXRhLmhlYWx0aH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmZXJ0aWxpemVyXCIgPldoYXQgZmVydGlsaXplciBkaWQgeW91IHVzZTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmZXJ0aWxpemVyXCIgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGZXJ0aWxpemVyIHVzZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXBkYXRlRm9ybURhdGEuZmVydGlsaXplcn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJub3Rlc1wiID5Bbnkgb3RoZXIgbm90ZXM6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm90ZXNcIiAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZGl0aW9uYWwgbm90ZXMgYWJvdXQgcGxhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXBkYXRlRm9ybURhdGEubm90ZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVQbGFudCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlQ29va2llcyIsIk5hdkJhciIsIlVwZGF0ZVBsYW50IiwidXBkYXRlRm9ybURhdGEiLCJzZXRVcGRhdGVGb3JtRGF0YSIsInBsYW50TmFtZSIsInBsYW50U3BlY2llcyIsIndhdGVyZWQiLCJwbGFudERhdGUiLCJwbGFudEltYWdlIiwidGVtcGVyYXR1cmUiLCJyYWluIiwiaGVhbHRoIiwiZmVydGlsaXplciIsIm5vdGVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImNvb2tpZXMiLCJwbGFudElkIiwicm91dGVyIiwicXVlcnkiLCJuYXZpZ2F0ZSIsImhhbmRsZVVwZGF0ZVBsYW50IiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJvayIsInJlcGxhY2UiLCJkYXRhIiwibWVzc2FnZSIsImVyciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJwYWdlTmFtZSIsInNlY3Rpb24iLCJoMiIsInAiLCJzdHlsZSIsImNvbG9yIiwiZm9ybSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/update/[plantId].jsx\n"));

/***/ })

});