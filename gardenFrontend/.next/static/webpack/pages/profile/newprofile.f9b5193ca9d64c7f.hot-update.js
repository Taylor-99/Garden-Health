"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/newprofile",{

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("/* globals self */ \nconst fetchModule = self.fetch.bind(self);\nmodule.exports = fetchModule;\nmodule.exports[\"default\"] = module.exports;\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9mZXRjaC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxtQkFBZ0M7QUFDaEM7QUFDQTtBQUNBLHlCQUFzQjs7QUFFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvZmV0Y2gvaW5kZXguanM/NGExZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIHNlbGYgKi8gXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBmZXRjaE1vZHVsZSA9IHNlbGYuZmV0Y2guYmluZChzZWxmKTtcbm1vZHVsZS5leHBvcnRzID0gZmV0Y2hNb2R1bGU7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/polyfills/fetch/index.js\n"));

/***/ }),

/***/ "./src/pages/profile/newprofile.jsx":
/*!******************************************!*\
  !*** ./src/pages/profile/newprofile.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst CreateProfile = ()=>{\n    _s();\n    const [profileData, setProfileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fName: \"\",\n        lName: \"\",\n        image: \"\",\n        city: \"\",\n        state: \"\",\n        gExperience: \"\",\n        aExperience: \"\",\n        bio: \"\"\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const navigate = next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter;\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setProfileData({\n            ...profileData,\n            [name]: value\n        });\n    };\n    const handleSubmit = async ()=>{\n        console.log(profileData);\n        try {\n            const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"http://localhost:3000/profile/createprofile\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                credentials: \"include\",\n                body: JSON.stringify(profileData)\n            });\n            const data = await response.json();\n            if (response.ok) {\n                setSuccess(\"Profile created successfully\");\n                navigate.replace(\"/auth/login\");\n            } else {\n                setError(data.message);\n            }\n        } catch (err) {\n            setError(\"Network error\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Create Profile\"\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"red\"\n                },\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                lineNumber: 55,\n                columnNumber: 23\n            }, undefined),\n            success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    color: \"green\"\n                },\n                children: success\n            }, void 0, false, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                lineNumber: 56,\n                columnNumber: 25\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>{\n                    e.preventDefault();\n                    setError(\"\");\n                    setSuccess(\"\");\n                    handleSubmit();\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"fName\",\n                        placeholder: \"First Name\",\n                        value: profileData.fName,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"lName\",\n                        placeholder: \"Last Name\",\n                        value: profileData.lName,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"image\",\n                        placeholder: \"Image URL\",\n                        value: profileData.image,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"city\",\n                        placeholder: \"City\",\n                        value: profileData.city,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"state\",\n                        placeholder: \"State\",\n                        value: profileData.state,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"gExperience\",\n                        placeholder: \"Gardening Experience\",\n                        value: profileData.gExperience,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"aExperience\",\n                        placeholder: \"Activity Experience\",\n                        value: profileData.aExperience,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        name: \"bio\",\n                        placeholder: \"Bio\",\n                        value: profileData.bio,\n                        onChange: handleChange\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Create Profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/profile/newprofile.jsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CreateProfile, \"nvnRHvOqf7M2XcqkJaHDqybZ0DU=\");\n_c = CreateProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateProfile);\nvar _c;\n$RefreshReg$(_c, \"CreateProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUNaNUIsT0FBT2xCLFlBQVlPLFdBQVc7d0JBQzlCd0MsVUFBVWhDOzs7Ozs7a0NBQ1YsOERBQUNrQzs7Ozs7a0NBQ0QsOERBQUNMO3dCQUNEQyxNQUFLO3dCQUNMNUIsTUFBSzt3QkFDTDZCLGFBQVk7d0JBQ1o1QixPQUFPbEIsWUFBWVEsV0FBVzt3QkFDOUJ1QyxVQUFVaEM7Ozs7OztrQ0FDViw4REFBQ2tDOzs7OztrQ0FDRCw4REFBQ0M7d0JBQ0RqQyxNQUFLO3dCQUNMNkIsYUFBWTt3QkFDWjVCLE9BQU9sQixZQUFZUyxHQUFHO3dCQUN0QnNDLFVBQVVoQzs7Ozs7O2tDQUNWLDhEQUFDa0M7Ozs7O2tDQUNELDhEQUFDQTs7Ozs7a0NBQ0QsOERBQUNFO3dCQUFPTixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEM7R0F4SE05QztLQUFBQTtBQTBITiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZmlsZS9uZXdwcm9maWxlLmpzeD8yNTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmNvbnN0IENyZWF0ZVByb2ZpbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Byb2ZpbGVEYXRhLCBzZXRQcm9maWxlRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGZOYW1lOiAnJyxcbiAgICAgICAgbE5hbWU6ICcnLFxuICAgICAgICBpbWFnZTogJycsXG4gICAgICAgIGNpdHk6ICcnLFxuICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgIGdFeHBlcmllbmNlOiAnJyxcbiAgICAgICAgYUV4cGVyaWVuY2U6ICcnLFxuICAgICAgICBiaW86ICcnLFxuICAgIH0pO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IG5hdmlnYXRlID0gdXNlUm91dGVyO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldFByb2ZpbGVEYXRhKHsgLi4ucHJvZmlsZURhdGEsIFtuYW1lXTogdmFsdWUgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZmlsZURhdGEpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvZmlsZS9jcmVhdGVwcm9maWxlJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsIC8vIEltcG9ydGFudCB0byBpbmNsdWRlIGNvb2tpZXNcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9maWxlRGF0YSksXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgc2V0U3VjY2VzcygnUHJvZmlsZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRlLnJlcGxhY2UoJy9hdXRoL2xvZ2luJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZXRFcnJvcignTmV0d29yayBlcnJvcicpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+Q3JlYXRlIFByb2ZpbGU8L2gyPlxuXG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvcn08L3A+fVxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0+e3N1Y2Nlc3N9PC9wPn1cblxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yKCcnKTtcbiAgICAgICAgICAgICAgICBzZXRTdWNjZXNzKCcnKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cImZOYW1lXCIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2ZpbGVEYXRhLmZOYW1lfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcbiAgICAgICAgICAgICAgICByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJsTmFtZVwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2ZpbGVEYXRhLmxOYW1lfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW1hZ2UgVVJMXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2ZpbGVEYXRhLmltYWdlfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2ZpbGVEYXRhLmNpdHl9IFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgbmFtZT1cInN0YXRlXCIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0ZVwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9maWxlRGF0YS5zdGF0ZX0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBuYW1lPVwiZ0V4cGVyaWVuY2VcIiBcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdhcmRlbmluZyBFeHBlcmllbmNlXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2ZpbGVEYXRhLmdFeHBlcmllbmNlfSBcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIG5hbWU9XCJhRXhwZXJpZW5jZVwiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWN0aXZpdHkgRXhwZXJpZW5jZVwiIFxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9maWxlRGF0YS5hRXhwZXJpZW5jZX0gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgICAgbmFtZT1cImJpb1wiIFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQmlvXCIgXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2ZpbGVEYXRhLmJpb30gXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgUHJvZmlsZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVQcm9maWxlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJmZXRjaCIsIkNyZWF0ZVByb2ZpbGUiLCJwcm9maWxlRGF0YSIsInNldFByb2ZpbGVEYXRhIiwiZk5hbWUiLCJsTmFtZSIsImltYWdlIiwiY2l0eSIsInN0YXRlIiwiZ0V4cGVyaWVuY2UiLCJhRXhwZXJpZW5jZSIsImJpbyIsImVycm9yIiwic2V0RXJyb3IiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsIm5hdmlnYXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJjcmVkZW50aWFscyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvayIsInJlcGxhY2UiLCJtZXNzYWdlIiwiZXJyIiwiZGl2IiwiaDIiLCJwIiwic3R5bGUiLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYnIiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profile/newprofile.jsx\n"));

/***/ })

});