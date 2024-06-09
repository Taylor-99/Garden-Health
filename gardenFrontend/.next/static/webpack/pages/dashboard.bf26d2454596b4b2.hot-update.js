"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/pages/dashboard/components/reminders.jsx":
/*!******************************************************!*\
  !*** ./src/pages/dashboard/components/reminders.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst reminders = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)([\n        \"token\"\n    ]);\n    const [reminders, setReminders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchReminders = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/dash/reminders\", {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setReminders(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchReminders();\n    }, []);\n    const handleCompleteClick = async (reminderId)=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/dash/reminders/update/\".concat(reminderId), {\n                method: \"PUT\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            if (response.ok) {\n                // Fetch the latest reminders after completing a reminder\n                await fetchReminders();\n            } else {\n                console.error(\"Failed to complete the reminder\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n        lineNumber: 59,\n        columnNumber: 27\n    }, undefined);\n    if (!reminders || reminders.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Reminders\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n        lineNumber: 60,\n        columnNumber: 54\n    }, undefined);\n    // console.log(reminders)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-md p-6 mb-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \" Reminders \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: reminders && reminders.map((reminder, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white rounded-lg shadow-lg p-4 mb-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-bold mb-2\",\n                                children: reminder.message\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                value: \"Complete\",\n                                onClick: ()=>handleCompleteClick(reminder._id),\n                                disabled: reminder.completed,\n                                className: \"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4 cursor-pointer transition duration-300\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(reminders, \"frzKtkjsn4YOsqcsIP9xOxAvK5s=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reminders);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVtaW5kZXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNUO0FBRTFDLE1BQU1JLFlBQVk7O0lBRWQsTUFBTSxDQUFDQyxXQUFXQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sUUFBUSxHQUFHSix3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFFdEMsTUFBTSxDQUFDQyxXQUFXSSxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0MsTUFBTVEsaUJBQWlCO1FBRW5CLElBQUk7WUFFQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sd0NBQXdDO2dCQUNqRUMsYUFBYTtnQkFDYkMsU0FBUztvQkFDTEMsZUFBZSxVQUF3QixPQUFkUCxRQUFRUSxLQUFLO2dCQUN4QztZQUNOO1lBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO1lBQ2hDVCxhQUFhUTtZQUNiVixXQUFXO1FBQ2YsRUFBRSxPQUFPWSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxVQUFVQSxNQUFNRSxPQUFPO1FBQ3pDO0lBQ0o7SUFFQWxCLGdEQUFTQSxDQUFDO1FBRU5PO0lBRUosR0FBRyxFQUFFO0lBRUwsTUFBTVksc0JBQXNCLE9BQU9DO1FBQy9CLElBQUk7WUFDQSxNQUFNWixXQUFXLE1BQU1DLE1BQU0sK0NBQTBELE9BQVhXLGFBQWM7Z0JBQ3RGQyxRQUFRO2dCQUNSWCxhQUFhO2dCQUNiQyxTQUFTO29CQUNMLGdCQUFnQjtvQkFDaEJDLGVBQWUsVUFBd0IsT0FBZFAsUUFBUVEsS0FBSztnQkFDMUM7WUFDSjtZQUVBLElBQUlMLFNBQVNjLEVBQUUsRUFBRTtnQkFDYix5REFBeUQ7Z0JBQ3pELE1BQU1mO1lBQ1YsT0FBTztnQkFDSFUsUUFBUUQsS0FBSyxDQUFDO1lBQ2xCO1FBQ0osRUFBRSxPQUFPQSxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyxVQUFVQSxNQUFNRSxPQUFPO1FBQ3pDO0lBQ0o7SUFFQSxJQUFJZixXQUFXLHFCQUFPLDhEQUFDb0I7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNyQixhQUFhQSxVQUFVc0IsTUFBTSxLQUFLLEdBQUcscUJBQU8sOERBQUNEO2tCQUFFOzs7Ozs7SUFDcEQseUJBQXlCO0lBRTNCLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNDOzs7Ozs7MEJBQ3BELDhEQUFDRTswQkFDSTFCLGFBQWFBLFVBQVUyQixHQUFHLENBQUMsQ0FBQ0MsVUFBVUM7b0JBQ25DLHFCQUNJLDhEQUFDQzt3QkFBR04sV0FBVTs7MENBQ04sOERBQUNIO2dDQUFFRyxXQUFVOzBDQUEyQkksU0FBU1osT0FBTzs7Ozs7OzBDQUN4RCw4REFBQ2U7Z0NBQ0RDLE1BQUs7Z0NBQ0xDLE9BQU07Z0NBQ05DLFNBQVMsSUFBTWpCLG9CQUFvQlcsU0FBU08sR0FBRztnQ0FDL0NDLFVBQVVSLFNBQVNTLFNBQVM7Z0NBQzVCYixXQUFVOzs7Ozs7Ozs7Ozs7Z0JBRzFCOzs7Ozs7Ozs7Ozs7QUFJWjtHQTlFTXhCOztRQUdnQkQsb0RBQVVBOzs7QUE2RWhDLCtEQUFlQyxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9yZW1pbmRlcnMuanN4PzI3NTAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5jb25zdCByZW1pbmRlcnMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ3Rva2VuJ10pO1xuXG4gICAgY29uc3QgW3JlbWluZGVycywgc2V0UmVtaW5kZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGZldGNoUmVtaW5kZXJzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9kYXNoL3JlbWluZGVycycsIHtcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgc2V0UmVtaW5kZXJzKGRhdGEpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gICAgICAgIGZldGNoUmVtaW5kZXJzKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVDb21wbGV0ZUNsaWNrID0gYXN5bmMgKHJlbWluZGVySWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9kYXNoL3JlbWluZGVycy91cGRhdGUvJHtyZW1pbmRlcklkfWAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIC8vIEZldGNoIHRoZSBsYXRlc3QgcmVtaW5kZXJzIGFmdGVyIGNvbXBsZXRpbmcgYSByZW1pbmRlclxuICAgICAgICAgICAgICAgIGF3YWl0IGZldGNoUmVtaW5kZXJzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb21wbGV0ZSB0aGUgcmVtaW5kZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxuICAgIGlmICghcmVtaW5kZXJzIHx8IHJlbWluZGVycy5sZW5ndGggPT09IDApIHJldHVybiA8cD5ObyBSZW1pbmRlcnM8L3A+O1xuICAgIC8vIGNvbnNvbGUubG9nKHJlbWluZGVycylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC02IG1iLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00IHRleHQtY2VudGVyXCI+IFJlbWluZGVycyA8L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgICB7cmVtaW5kZXJzICYmIHJlbWluZGVycy5tYXAoKHJlbWluZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBwLTQgbWItMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTJcIiA+e3JlbWluZGVyLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJDb21wbGV0ZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBsZXRlQ2xpY2socmVtaW5kZXIuX2lkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVtaW5kZXIuY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgaG92ZXI6YmctcmVkLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtNCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbWluZGVycyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsInJlbWluZGVycyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjb29raWVzIiwic2V0UmVtaW5kZXJzIiwiZmV0Y2hSZW1pbmRlcnMiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiaGFuZGxlQ29tcGxldGVDbGljayIsInJlbWluZGVySWQiLCJtZXRob2QiLCJvayIsInAiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibWFwIiwicmVtaW5kZXIiLCJpbmRleCIsImxpIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNsaWNrIiwiX2lkIiwiZGlzYWJsZWQiLCJjb21wbGV0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/components/reminders.jsx\n"));

/***/ })

});