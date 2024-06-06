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

/***/ "./src/pages/dashboard/components/challenges.jsx":
/*!*******************************************************!*\
  !*** ./src/pages/dashboard/components/challenges.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/esm/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst challenges = ()=>{\n    _s();\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [cookies] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies)([\n        \"token\"\n    ]);\n    const [challenge, setChallenge] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchChallenges = async ()=>{\n            try {\n                console.log(\"fetching Challege data\");\n                const response = await fetch(\"http://localhost:4000/dash/challenge\", {\n                    credentials: \"include\",\n                    headers: {\n                        Authorization: \"Bearer \".concat(cookies.token)\n                    }\n                });\n                const data = await response.json();\n                setChallenge(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error:\", error.message);\n            }\n        };\n        fetchChallenges();\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/challenges.jsx\",\n        lineNumber: 36,\n        columnNumber: 27\n    }, undefined);\n    if (!challenge) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Challenge\"\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/challenges.jsx\",\n        lineNumber: 37,\n        columnNumber: 28\n    }, undefined);\n    console.log(challenge);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Challenges\"\n        }, void 0, false, {\n            fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/challenges.jsx\",\n            lineNumber: 42,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tayloryoung/code/projects/project-4/Garden_Health/gardenFrontend/src/pages/dashboard/components/challenges.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(challenges, \"hYbGHjGOykyOt51Rn3ulxy78tdY=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_2__.useCookies\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (challenges);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvY2hhbGxlbmdlcy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDbUQ7QUFDVDtBQUUxQyxNQUFNSSxhQUFhOztJQUVmLE1BQU0sQ0FBQ0MsV0FBV0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFFBQVEsR0FBR0osd0RBQVVBLENBQUM7UUFBQztLQUFRO0lBRXRDLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNOLE1BQU1RLGtCQUFrQjtZQUVwQixJQUFJO2dCQUNBQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osTUFBTUMsV0FBVyxNQUFNQyxNQUFNLHdDQUF3QztvQkFDakVDLGFBQWE7b0JBQ2JDLFNBQVM7d0JBQ0xDLGVBQWUsVUFBd0IsT0FBZFYsUUFBUVcsS0FBSztvQkFDeEM7Z0JBQ047Z0JBRUEsTUFBTUMsT0FBTyxNQUFNTixTQUFTTyxJQUFJO2dCQUNoQ1gsYUFBYVU7Z0JBQ2JiLFdBQVc7WUFDZixFQUFFLE9BQU9lLE9BQU87Z0JBQ1pWLFFBQVFVLEtBQUssQ0FBQyxVQUFVQSxNQUFNQyxPQUFPO1lBQ3pDO1FBQ0o7UUFFQVo7SUFFSixHQUFHLEVBQUU7SUFFTCxJQUFJTCxXQUFXLHFCQUFPLDhEQUFDa0I7a0JBQUU7Ozs7OztJQUN6QixJQUFJLENBQUNmLFdBQVcscUJBQU8sOERBQUNlO2tCQUFFOzs7Ozs7SUFDMUJaLFFBQVFDLEdBQUcsQ0FBQ0o7SUFFZCxxQkFDRSw4REFBQ2dCO2tCQUNHLDRFQUFDQztzQkFBRzs7Ozs7Ozs7Ozs7QUFHWjtHQXhDTXJCOztRQUdnQkQsb0RBQVVBOzs7QUF1Q2hDLCtEQUFlQyxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvY29tcG9uZW50cy9jaGFsbGVuZ2VzLmpzeD80Mjg5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcblxuY29uc3QgY2hhbGxlbmdlcyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsndG9rZW4nXSk7XG5cbiAgICBjb25zdCBbY2hhbGxlbmdlLCBzZXRDaGFsbGVuZ2VdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hDaGFsbGVuZ2VzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgQ2hhbGxlZ2UgZGF0YVwiKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9kYXNoL2NoYWxsZW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2Nvb2tpZXMudG9rZW59YCwgLy8gSW5jbHVkZSB0aGUgdG9rZW4gaW4gdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgIHNldENoYWxsZW5nZShkYXRhKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2hDaGFsbGVuZ2VzKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD5cbiAgICBpZiAoIWNoYWxsZW5nZSkgcmV0dXJuIDxwPk5vIENoYWxsZW5nZTwvcD5cbiAgICBjb25zb2xlLmxvZyhjaGFsbGVuZ2UpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgICA8aDE+Q2hhbGxlbmdlczwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhbGxlbmdlcyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29va2llcyIsImNoYWxsZW5nZXMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29va2llcyIsImNoYWxsZW5nZSIsInNldENoYWxsZW5nZSIsImZldGNoQ2hhbGxlbmdlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJwIiwiZGl2IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dashboard/components/challenges.jsx\n"));

/***/ })

});