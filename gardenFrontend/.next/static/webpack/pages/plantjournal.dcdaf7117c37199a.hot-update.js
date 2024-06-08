"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/plantjournal",{

/***/ "./src/pages/plantjournal/components/garden.jsx":
/*!******************************************************!*\
  !*** ./src/pages/plantjournal/components/garden.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Garden = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies)([\n        \"token\"\n    ]);\n    const [gardenData, setGardenData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGarden = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:4000/garden\", {\n                    credentials: \"include\",\n                    headers: {\n                        Authorization: \"Bearer \".concat(cookies.token)\n                    }\n                });\n                const data = await response.json();\n                setGardenData(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error:\", error.message);\n            }\n        };\n        fetchGarden();\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n        lineNumber: 36,\n        columnNumber: 27\n    }, undefined);\n    if (!gardenData) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No plants to show\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n        lineNumber: 37,\n        columnNumber: 29\n    }, undefined);\n    console.log(gardenData[0][1]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \" Your Garden \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4\",\n                children: [\n                    gardenData && gardenData.map((plant, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"bg-white p-4 rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: plant[1].plantImage,\n                                    alt: plant[0].plantName,\n                                    className: \"w-full h-32 object-cover rounded-md mb-2\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-lg font-semibold\",\n                                    children: plant[0].plantName\n                                }, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: [\n                                        \"Last update: \",\n                                        plant[0].updatedAt\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 33\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 29\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/plantjournal/createplant\",\n                            children: \"Create A plant\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/plantjournal/components/garden.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Garden, \"9TPHnGn5tLkUWe8tJNXxMAZnSzo=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_3__.useCookies\n    ];\n});\n_c = Garden;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Garden);\nvar _c;\n$RefreshReg$(_c, \"Garden\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGxhbnRqb3VybmFsL2NvbXBvbmVudHMvZ2FyZGVuLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ1Q7QUFDYjtBQUU3QixNQUFNSyxTQUFTOztJQUVYLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFFBQVEsR0FBR0wsd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBRXRDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1TLGNBQWM7WUFFaEIsSUFBSTtnQkFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZ0NBQWdDO29CQUN6REMsYUFBYTtvQkFDYkMsU0FBUzt3QkFDTEMsZUFBZSxVQUF3QixPQUFkUixRQUFRUyxLQUFLO29CQUN4QztnQkFDTjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1OLFNBQVNPLElBQUk7Z0JBQ2hDVCxjQUFjUTtnQkFDZFgsV0FBVztZQUNmLEVBQUUsT0FBT2EsT0FBTztnQkFDWkMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBLE1BQU1FLE9BQU87WUFDekM7UUFDSjtRQUVBWDtJQUVKLEdBQUcsRUFBRTtJQUVMLElBQUlMLFdBQVcscUJBQU8sOERBQUNpQjtrQkFBRTs7Ozs7O0lBQ3pCLElBQUksQ0FBQ2QsWUFBWSxxQkFBTyw4REFBQ2M7a0JBQUU7Ozs7OztJQUUzQkYsUUFBUUcsR0FBRyxDQUFDZixVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFFNUIscUJBQ0ksOERBQUNnQjs7MEJBQ0csOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFzQzs7Ozs7OzBCQUNoRCw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUNUbEIsY0FBY0EsV0FBV29CLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQzt3QkFDbEMscUJBQ0ksOERBQUNDOzRCQUFlTCxXQUFVOzs4Q0FDdEIsOERBQUNNO29DQUFJQyxLQUFLSixLQUFLLENBQUMsRUFBRSxDQUFDSyxVQUFVO29DQUFFQyxLQUFLTixLQUFLLENBQUMsRUFBRSxDQUFDTyxTQUFTO29DQUFFVixXQUFVOzs7Ozs7OENBQ2xFLDhEQUFDVztvQ0FBR1gsV0FBVTs4Q0FBeUJHLEtBQUssQ0FBQyxFQUFFLENBQUNPLFNBQVM7Ozs7Ozs4Q0FDekQsOERBQUNkO29DQUFFSSxXQUFVOzt3Q0FBZ0I7d0NBQWNHLEtBQUssQ0FBQyxFQUFFLENBQUNTLFNBQVM7Ozs7Ozs7OENBRTdELDhEQUFDQzs7Ozs7OzJCQUxJVDs7Ozs7b0JBUWpCO2tDQUNBLDhEQUFDQztrQ0FDRyw0RUFBQzVCLGtEQUFJQTs0QkFBQ3FDLE1BQUs7c0NBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVEvRDtHQTNETXBDOztRQUdnQkYsb0RBQVVBOzs7S0FIMUJFO0FBNkROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wbGFudGpvdXJuYWwvY29tcG9uZW50cy9nYXJkZW4uanN4PzNkMDciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgR2FyZGVuID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcblxuICAgIGNvbnN0IFtnYXJkZW5EYXRhLCBzZXRHYXJkZW5EYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoR2FyZGVuID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9nYXJkZW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICBzZXRHYXJkZW5EYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaEdhcmRlbigpO1xuXG4gICAgfSwgW10pO1xuXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgaWYgKCFnYXJkZW5EYXRhKSByZXR1cm4gPHA+Tm8gcGxhbnRzIHRvIHNob3c8L3A+XG5cbiAgICBjb25zb2xlLmxvZyhnYXJkZW5EYXRhWzBdWzFdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPiBZb3VyIEdhcmRlbiA8L2gxPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC00XCIgPlxuICAgICAgICAgICAgICAgICAgICB7Z2FyZGVuRGF0YSAmJiBnYXJkZW5EYXRhLm1hcCgocGxhbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgcm91bmRlZC1sZyBzaGFkb3ctbWRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwbGFudFsxXS5wbGFudEltYWdlfSBhbHQ9e3BsYW50WzBdLnBsYW50TmFtZX0gY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgb2JqZWN0LWNvdmVyIHJvdW5kZWQtbWQgbWItMlwiID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPntwbGFudFswXS5wbGFudE5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkxhc3QgdXBkYXRlOiB7cGxhbnRbMF0udXBkYXRlZEF0fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGxhbnRqb3VybmFsL2NyZWF0ZXBsYW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEEgcGxhbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYXJkZW47Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwiTGluayIsIkdhcmRlbiIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWVzIiwiZ2FyZGVuRGF0YSIsInNldEdhcmRlbkRhdGEiLCJmZXRjaEdhcmRlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJwIiwibG9nIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInBsYW50IiwiaW5kZXgiLCJsaSIsImltZyIsInNyYyIsInBsYW50SW1hZ2UiLCJhbHQiLCJwbGFudE5hbWUiLCJoMiIsInVwZGF0ZWRBdCIsImJyIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/plantjournal/components/garden.jsx\n"));

/***/ })

});