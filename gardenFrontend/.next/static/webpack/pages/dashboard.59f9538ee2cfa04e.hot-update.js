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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst reminders = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)([\n        \"token\"\n    ]);\n    const [reminders, setReminders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchReminders = async ()=>{\n        try {\n            console.log(\"getting reminders\");\n            const response = await fetch(\"http://localhost:4000/dash/reminders\", {\n                credentials: \"include\",\n                headers: {\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            const data = await response.json();\n            setReminders(data);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchReminders();\n    }, []);\n    const handleCompleteClick = async (reminderId)=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/dash/reminders/update/\".concat(reminderId), {\n                method: \"PUT\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\",\n                    Authorization: \"Bearer \".concat(cookies.token)\n                }\n            });\n            if (response.ok) {\n                // Fetch the latest reminders after completing a reminder\n                await fetchReminders();\n            } else {\n                console.error(\"Failed to complete the reminder\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        }\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n        lineNumber: 59,\n        columnNumber: 27\n    }, undefined);\n    if (!reminders || reminders.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Reminders\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n        lineNumber: 60,\n        columnNumber: 54\n    }, undefined);\n    // console.log(reminders)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-md p-6 mb-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4 text-center\",\n                children: \" Reminders \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: reminders && reminders.map((reminder, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"bg-white rounded-lg shadow-lg p-4 mb-2 text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-bold mb-2\",\n                                children: reminder.message\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"button\",\n                                value: \"Complete\",\n                                onClick: ()=>handleCompleteClick(reminder._id),\n                                disabled: reminder.completed,\n                                className: \"bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4 cursor-pointer transition duration-300\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/reminders.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(reminders, \"frzKtkjsn4YOsqcsIP9xOxAvK5s=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (reminders);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVtaW5kZXJzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUNUO0FBRTFDLE1BQU1JLFlBQVk7O0lBRWQsTUFBTSxDQUFDQyxXQUFXQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sUUFBUSxHQUFHSix3REFBVUEsQ0FBQztRQUFDO0tBQVE7SUFFdEMsTUFBTSxDQUFDQyxXQUFXSSxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0MsTUFBTVEsaUJBQWlCO1FBRW5CLElBQUk7WUFDQUMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHdDQUF3QztnQkFDakVDLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQ0xDLGVBQWUsVUFBd0IsT0FBZFQsUUFBUVUsS0FBSztnQkFDeEM7WUFDTjtZQUVBLE1BQU1DLE9BQU8sTUFBTU4sU0FBU08sSUFBSTtZQUNoQ1gsYUFBYVU7WUFDYlosV0FBVztRQUNmLEVBQUUsT0FBT2MsT0FBTztZQUNaVixRQUFRVSxLQUFLLENBQUMsVUFBVUEsTUFBTUMsT0FBTztRQUN6QztJQUNKO0lBRUFuQixnREFBU0EsQ0FBQztRQUVOTztJQUVKLEdBQUcsRUFBRTtJQUVMLE1BQU1hLHNCQUFzQixPQUFPQztRQUMvQixJQUFJO1lBQ0EsTUFBTVgsV0FBVyxNQUFNQyxNQUFNLCtDQUEwRCxPQUFYVSxhQUFjO2dCQUN0RkMsUUFBUTtnQkFDUlYsYUFBYTtnQkFDYkMsU0FBUztvQkFDTCxnQkFBZ0I7b0JBQ2hCQyxlQUFlLFVBQXdCLE9BQWRULFFBQVFVLEtBQUs7Z0JBQzFDO1lBQ0o7WUFFQSxJQUFJTCxTQUFTYSxFQUFFLEVBQUU7Z0JBQ2IseURBQXlEO2dCQUN6RCxNQUFNaEI7WUFDVixPQUFPO2dCQUNIQyxRQUFRVSxLQUFLLENBQUM7WUFDbEI7UUFDSixFQUFFLE9BQU9BLE9BQU87WUFDWlYsUUFBUVUsS0FBSyxDQUFDLFVBQVVBLE1BQU1DLE9BQU87UUFDekM7SUFDSjtJQUVBLElBQUloQixXQUFXLHFCQUFPLDhEQUFDcUI7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUN0QixhQUFhQSxVQUFVdUIsTUFBTSxLQUFLLEdBQUcscUJBQU8sOERBQUNEO2tCQUFFOzs7Ozs7SUFDcEQseUJBQXlCO0lBRTNCLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXNDOzs7Ozs7MEJBQ3BELDhEQUFDRTswQkFDSTNCLGFBQWFBLFVBQVU0QixHQUFHLENBQUMsQ0FBQ0MsVUFBVUM7b0JBQ25DLHFCQUNJLDhEQUFDQzt3QkFBR04sV0FBVTs7MENBQ04sOERBQUNIO2dDQUFFRyxXQUFVOzBDQUEyQkksU0FBU1osT0FBTzs7Ozs7OzBDQUN4RCw4REFBQ2U7Z0NBQ0RDLE1BQUs7Z0NBQ0xDLE9BQU07Z0NBQ05DLFNBQVMsSUFBTWpCLG9CQUFvQlcsU0FBU08sR0FBRztnQ0FDL0NDLFVBQVVSLFNBQVNTLFNBQVM7Z0NBQzVCYixXQUFVOzs7Ozs7O3VCQVBzREs7Ozs7O2dCQVVoRjs7Ozs7Ozs7Ozs7O0FBSVo7R0E5RU05Qjs7UUFHZ0JELG9EQUFVQTs7O0FBNkVoQywrREFBZUMsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvcmVtaW5kZXJzLmpzeD8yNzUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcblxuY29uc3QgcmVtaW5kZXJzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWyd0b2tlbiddKTtcblxuICAgIGNvbnN0IFtyZW1pbmRlcnMsIHNldFJlbWluZGVyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBmZXRjaFJlbWluZGVycyA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIHJlbWluZGVyc1wiKVxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2Rhc2gvcmVtaW5kZXJzJywge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLCAvLyBJbmNsdWRlIHRoZSB0b2tlbiBpbiB0aGUgQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBzZXRSZW1pbmRlcnMoZGF0YSlcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgZmV0Y2hSZW1pbmRlcnMoKTtcblxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUNvbXBsZXRlQ2xpY2sgPSBhc3luYyAocmVtaW5kZXJJZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2Rhc2gvcmVtaW5kZXJzL3VwZGF0ZS8ke3JlbWluZGVySWR9YCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzLnRva2VufWAsIC8vIEluY2x1ZGUgdGhlIHRva2VuIGluIHRoZSBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIGxhdGVzdCByZW1pbmRlcnMgYWZ0ZXIgY29tcGxldGluZyBhIHJlbWluZGVyXG4gICAgICAgICAgICAgICAgYXdhaXQgZmV0Y2hSZW1pbmRlcnMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNvbXBsZXRlIHRoZSByZW1pbmRlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gICAgaWYgKCFyZW1pbmRlcnMgfHwgcmVtaW5kZXJzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxwPk5vIFJlbWluZGVyczwvcD47XG4gICAgLy8gY29uc29sZS5sb2cocmVtaW5kZXJzKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTYgbWItNFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXJcIj4gUmVtaW5kZXJzIDwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtyZW1pbmRlcnMgJiYgcmVtaW5kZXJzLm1hcCgocmVtaW5kZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHAtNCBtYi0yIHRleHQtY2VudGVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItMlwiID57cmVtaW5kZXIubWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkNvbXBsZXRlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29tcGxldGVDbGljayhyZW1pbmRlci5faWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZW1pbmRlci5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtdC00IGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVtaW5kZXJzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb29raWVzIiwicmVtaW5kZXJzIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImNvb2tpZXMiLCJzZXRSZW1pbmRlcnMiLCJmZXRjaFJlbWluZGVycyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVDb21wbGV0ZUNsaWNrIiwicmVtaW5kZXJJZCIsIm1ldGhvZCIsIm9rIiwicCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJtYXAiLCJyZW1pbmRlciIsImluZGV4IiwibGkiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJfaWQiLCJkaXNhYmxlZCIsImNvbXBsZXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard/components/reminders.jsx\n"));

/***/ })

});