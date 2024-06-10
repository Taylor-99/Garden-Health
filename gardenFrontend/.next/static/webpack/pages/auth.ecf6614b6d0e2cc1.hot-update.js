"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth",{

/***/ "./src/pages/auth/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/auth/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// import fetch from 'isomorphic-unfetch'\n// https://blog.logrocket.com/creating-website-next-js-react/\nfunction Auth() {\n    _s();\n    const [showLogin, setShowLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"token\",\n        \"user\"\n    ]);\n    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleLogin = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/auth/login\", {\n                method: \"POST\",\n                withCredentials: true,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            const data = await response.json();\n            if (response.ok) {\n                setCookie(\"token\", data.token);\n                setCookie(\"user\", data.username);\n                navigate.replace(\"/dashboard\");\n            } else {\n                setError(data.message);\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleSignUp = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:4000/auth/signup\", {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(formData)\n            });\n            // Check if the response is ok\n            if (!response.ok) {\n                const errorData = await response.json();\n                setError(errorData.message);\n                return; // Exit the function to prevent navigation\n            } else {}\n            const data = await response.json();\n            // If the response is ok and data is successfully received\n            js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"token\", data.token);\n            navigate.replace(\"/profile/newprofile\");\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    const handleChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col items-center justify-center bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-8\",\n                children: \"Welcome to \"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this),\n            showLogin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-white rounded-lg shadow-md p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4 text-center\",\n                        onClick: ()=>setShowLogin(!showLogin),\n                        children: [\n                            \"Login\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"New user? click here to Signup!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-red-500 mb-4\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 31\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handleLogin();\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                className: \"block mb-2\",\n                                children: \"Username: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"username\",\n                                placeholder: \"Enter your username\",\n                                value: formData.username,\n                                onChange: handleChange,\n                                className: \"w-full px-3 py-2 border rounded-md mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"block mb-2\",\n                                children: \"Password: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                name: \"password\",\n                                placeholder: \"Enter your password\",\n                                value: formData.password,\n                                onChange: handleChange,\n                                className: \"w-full px-3 py-2 border rounded-md mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 123,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"LogIn\",\n                                className: \"w-full bg-green-900 text-white px-4 py-2 rounded-md cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                lineNumber: 88,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-white rounded-lg shadow-md p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4 text-center\",\n                        onClick: ()=>setShowLogin(!showLogin),\n                        children: [\n                            \"SignUp\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 132,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                                children: \"Already have an account? click to Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 133,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 18\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        style: {\n                            color: \"red\"\n                        },\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                        lineNumber: 136,\n                        columnNumber: 27\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>{\n                            e.preventDefault();\n                            setError(\"\");\n                            handleSignUp();\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"username\",\n                                className: \"block mb-2\",\n                                children: \"Username: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 143,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"username\",\n                                placeholder: \"Enter your username\",\n                                value: formData.username,\n                                onChange: handleChange,\n                                className: \"w-full px-3 py-2 border rounded-md mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 144,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 152,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"block mb-2\",\n                                children: \"Password: \"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 154,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                name: \"password\",\n                                placeholder: \"Enter your password\",\n                                value: formData.password,\n                                onChange: handleChange,\n                                className: \"w-full px-3 py-2 border rounded-md mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 155,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 163,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 164,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Sign Up\",\n                                className: \"w-full bg-green-900 text-white px-4 py-2 rounded-md cursor-pointer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                                lineNumber: 166,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                        lineNumber: 138,\n                        columnNumber: 18\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n                lineNumber: 129,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/auth/index.jsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, this);\n}\n_s(Auth, \"upaZc7b4bS2JQYUE+hZIYQBfcSY=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Auth;\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBT2pDLFNBQVNHLFFBQVE7Z0NBQ3hCZ0QsVUFBVXRCO2dDQUNWTSxXQUFVOzs7Ozs7MENBR04sOERBQUNLOzs7OzswQ0FDRCw4REFBQ0E7Ozs7OzBDQUVMLDhEQUFDUTtnQ0FBTUMsTUFBSztnQ0FDWmhCLE9BQU07Z0NBQVVFLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QztHQW5Ld0J0Qzs7UUFPU0Qsb0RBQVVBO1FBRXRCRCxrREFBU0E7OztLQVRORSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXV0aC9pbmRleC5qc3g/ZTc1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG4vLyBodHRwczovL2Jsb2cubG9ncm9ja2V0LmNvbS9jcmVhdGluZy13ZWJzaXRlLW5leHQtanMtcmVhY3QvXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpe1xuICAgIGNvbnN0IFtzaG93TG9naW4sIHNldFNob3dMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH0pO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbJ3Rva2VuJywgJ3VzZXInXSk7XG5cbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hdXRoL2xvZ2luJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgc2V0Q29va2llKCd0b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIHNldENvb2tpZSgndXNlcicsIGRhdGEudXNlcm5hbWUpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlLnJlcGxhY2UoJy9kYXNoYm9hcmQnKVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2V0RXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNpZ25VcCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hdXRoL3NpZ251cCcsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSByZXNwb25zZSBpcyBva1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvckRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBFeGl0IHRoZSBmdW5jdGlvbiB0byBwcmV2ZW50IG5hdmlnYXRpb25cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgcmVzcG9uc2UgaXMgb2sgYW5kIGRhdGEgaXMgc3VjY2Vzc2Z1bGx5IHJlY2VpdmVkXG4gICAgICAgICAgICBDb29raWVzLnNldCgndG9rZW4nLCBkYXRhLnRva2VuKTtcbiAgICAgICAgICAgIG5hdmlnYXRlLnJlcGxhY2UoJy9wcm9maWxlL25ld3Byb2ZpbGUnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZXRFcnJvcignTmV0d29yayBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgLi4uZm9ybURhdGEsIFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWdyYXktMTAwXCIgPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi04XCIgPldlbGNvbWUgdG8gPC9oMT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaG93TG9naW4/XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbWQgcC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dMb2dpbighc2hvd0xvZ2luKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5OZXcgdXNlcj8gY2xpY2sgaGVyZSB0byBTaWdudXAhPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIG1iLTRcIiA+e2Vycm9yfTwvcD59XG5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVMb2dpbigpXG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cImJsb2NrIG1iLTJcIiA+VXNlcm5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudXNlcm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLW1kIG1iLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yXCIgPlBhc3N3b3JkOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbWQgbWItNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJMb2dJblwiIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmVlbi05MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+OlxuICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTZcIiA+XG4gICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dMb2dpbighc2hvd0xvZ2luKX0+XG4gICAgICAgICAgICAgICAgICAgIFNpZ25VcCBcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+IFxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+QWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IGNsaWNrIHRvIExvZ2luPC9zbWFsbD5cbiAgICAgICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57ZXJyb3J9PC9wPn1cblxuICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignJyk7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVNpZ25VcCgpXG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yXCIgPlVzZXJuYW1lOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudXNlcm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciByb3VuZGVkLW1kIG1iLTRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJibG9jayBtYi0yXCIgPlBhc3N3b3JkOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIHJvdW5kZWQtbWQgbWItNFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJTaWduIFVwXCIgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyZWVuLTkwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkLW1kIGN1cnNvci1wb2ludGVyXCIgIC8+XG4gICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29va2llcyIsInVzZVJvdXRlciIsInVzZUNvb2tpZXMiLCJBdXRoIiwic2hvd0xvZ2luIiwic2V0U2hvd0xvZ2luIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiY29va2llcyIsInNldENvb2tpZSIsIm5hdmlnYXRlIiwiaGFuZGxlTG9naW4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsInRva2VuIiwicmVwbGFjZSIsIm1lc3NhZ2UiLCJlcnIiLCJoYW5kbGVTaWduVXAiLCJjcmVkZW50aWFscyIsImVycm9yRGF0YSIsInNldCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNlY3Rpb24iLCJoMiIsIm9uQ2xpY2siLCJiciIsInNtYWxsIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInN0eWxlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/auth/index.jsx\n"));

/***/ })

});