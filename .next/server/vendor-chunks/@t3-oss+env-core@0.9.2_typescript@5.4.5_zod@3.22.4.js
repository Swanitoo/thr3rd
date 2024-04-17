"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@t3-oss+env-core@0.9.2_typescript@5.4.5_zod@3.22.4";
exports.ids = ["vendor-chunks/@t3-oss+env-core@0.9.2_typescript@5.4.5_zod@3.22.4"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@t3-oss+env-core@0.9.2_typescript@5.4.5_zod@3.22.4/node_modules/@t3-oss/env-core/dist/index.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@t3-oss+env-core@0.9.2_typescript@5.4.5_zod@3.22.4/node_modules/@t3-oss/env-core/dist/index.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnv: () => (/* binding */ createEnv)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs\");\n\n\nfunction createEnv(opts) {\n    const runtimeEnv = opts.runtimeEnvStrict ?? opts.runtimeEnv ?? process.env;\n    const emptyStringAsUndefined = opts.emptyStringAsUndefined ?? false;\n    if (emptyStringAsUndefined) {\n        for (const [key, value] of Object.entries(runtimeEnv)){\n            if (value === \"\") {\n                delete runtimeEnv[key];\n            }\n        }\n    }\n    const skip = !!opts.skipValidation;\n    // biome-ignore lint/suspicious/noExplicitAny: <explanation>\n    if (skip) return runtimeEnv;\n    const _client = typeof opts.client === \"object\" ? opts.client : {};\n    const _server = typeof opts.server === \"object\" ? opts.server : {};\n    const _shared = typeof opts.shared === \"object\" ? opts.shared : {};\n    const client = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(_client);\n    const server = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(_server);\n    const shared = zod__WEBPACK_IMPORTED_MODULE_0__.z.object(_shared);\n    const isServer = opts.isServer ?? typeof window === \"undefined\";\n    const allClient = client.merge(shared);\n    const allServer = server.merge(shared).merge(client);\n    const parsed = isServer ? allServer.safeParse(runtimeEnv) // on server we can validate all env vars\n     : allClient.safeParse(runtimeEnv); // on client we can only validate the ones that are exposed\n    const onValidationError = opts.onValidationError ?? ((error)=>{\n        console.error(\"❌ Invalid environment variables:\", error.flatten().fieldErrors);\n        throw new Error(\"Invalid environment variables\");\n    });\n    const onInvalidAccess = opts.onInvalidAccess ?? ((_variable)=>{\n        throw new Error(\"❌ Attempted to access a server-side environment variable on the client\");\n    });\n    if (parsed.success === false) {\n        return onValidationError(parsed.error);\n    }\n    const isServerAccess = (prop)=>{\n        if (!opts.clientPrefix) return true;\n        return !prop.startsWith(opts.clientPrefix) && !(prop in shared.shape);\n    };\n    const isValidServerAccess = (prop)=>{\n        return isServer || !isServerAccess(prop);\n    };\n    const ignoreProp = (prop)=>{\n        return prop === \"__esModule\" || prop === \"$$typeof\";\n    };\n    const extendedObj = (opts.extends ?? []).reduce((acc, curr)=>{\n        return Object.assign(acc, curr);\n    }, {});\n    const fullObj = Object.assign(parsed.data, extendedObj);\n    const env = new Proxy(fullObj, {\n        get (target, prop) {\n            if (typeof prop !== \"string\") return undefined;\n            if (ignoreProp(prop)) return undefined;\n            if (!isValidServerAccess(prop)) return onInvalidAccess(prop);\n            return Reflect.get(target, prop);\n        }\n    });\n    // biome-ignore lint/suspicious/noExplicitAny: <explanation>\n    return env;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHQzLW9zcytlbnYtY29yZUAwLjkuMl90eXBlc2NyaXB0QDUuNC41X3pvZEAzLjIyLjQvbm9kZV9tb2R1bGVzL0B0My1vc3MvZW52LWNvcmUvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0NBQUM7QUFDcEIsbUJBQW1CLGtDQUFDO0FBQ3BCLG1CQUFtQixrQ0FBQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvLnBucG0vQHQzLW9zcytlbnYtY29yZUAwLjkuMl90eXBlc2NyaXB0QDUuNC41X3pvZEAzLjIyLjQvbm9kZV9tb2R1bGVzL0B0My1vc3MvZW52LWNvcmUvZGlzdC9pbmRleC5qcz80OWEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuXG5mdW5jdGlvbiBjcmVhdGVFbnYob3B0cykge1xuICAgIGNvbnN0IHJ1bnRpbWVFbnYgPSBvcHRzLnJ1bnRpbWVFbnZTdHJpY3QgPz8gb3B0cy5ydW50aW1lRW52ID8/IHByb2Nlc3MuZW52O1xuICAgIGNvbnN0IGVtcHR5U3RyaW5nQXNVbmRlZmluZWQgPSBvcHRzLmVtcHR5U3RyaW5nQXNVbmRlZmluZWQgPz8gZmFsc2U7XG4gICAgaWYgKGVtcHR5U3RyaW5nQXNVbmRlZmluZWQpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocnVudGltZUVudikpe1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJ1bnRpbWVFbnZba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBza2lwID0gISFvcHRzLnNraXBWYWxpZGF0aW9uO1xuICAgIC8vIGJpb21lLWlnbm9yZSBsaW50L3N1c3BpY2lvdXMvbm9FeHBsaWNpdEFueTogPGV4cGxhbmF0aW9uPlxuICAgIGlmIChza2lwKSByZXR1cm4gcnVudGltZUVudjtcbiAgICBjb25zdCBfY2xpZW50ID0gdHlwZW9mIG9wdHMuY2xpZW50ID09PSBcIm9iamVjdFwiID8gb3B0cy5jbGllbnQgOiB7fTtcbiAgICBjb25zdCBfc2VydmVyID0gdHlwZW9mIG9wdHMuc2VydmVyID09PSBcIm9iamVjdFwiID8gb3B0cy5zZXJ2ZXIgOiB7fTtcbiAgICBjb25zdCBfc2hhcmVkID0gdHlwZW9mIG9wdHMuc2hhcmVkID09PSBcIm9iamVjdFwiID8gb3B0cy5zaGFyZWQgOiB7fTtcbiAgICBjb25zdCBjbGllbnQgPSB6Lm9iamVjdChfY2xpZW50KTtcbiAgICBjb25zdCBzZXJ2ZXIgPSB6Lm9iamVjdChfc2VydmVyKTtcbiAgICBjb25zdCBzaGFyZWQgPSB6Lm9iamVjdChfc2hhcmVkKTtcbiAgICBjb25zdCBpc1NlcnZlciA9IG9wdHMuaXNTZXJ2ZXIgPz8gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcbiAgICBjb25zdCBhbGxDbGllbnQgPSBjbGllbnQubWVyZ2Uoc2hhcmVkKTtcbiAgICBjb25zdCBhbGxTZXJ2ZXIgPSBzZXJ2ZXIubWVyZ2Uoc2hhcmVkKS5tZXJnZShjbGllbnQpO1xuICAgIGNvbnN0IHBhcnNlZCA9IGlzU2VydmVyID8gYWxsU2VydmVyLnNhZmVQYXJzZShydW50aW1lRW52KSAvLyBvbiBzZXJ2ZXIgd2UgY2FuIHZhbGlkYXRlIGFsbCBlbnYgdmFyc1xuICAgICA6IGFsbENsaWVudC5zYWZlUGFyc2UocnVudGltZUVudik7IC8vIG9uIGNsaWVudCB3ZSBjYW4gb25seSB2YWxpZGF0ZSB0aGUgb25lcyB0aGF0IGFyZSBleHBvc2VkXG4gICAgY29uc3Qgb25WYWxpZGF0aW9uRXJyb3IgPSBvcHRzLm9uVmFsaWRhdGlvbkVycm9yID8/ICgoZXJyb3IpPT57XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZXM6XCIsIGVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9uSW52YWxpZEFjY2VzcyA9IG9wdHMub25JbnZhbGlkQWNjZXNzID8/ICgoX3ZhcmlhYmxlKT0+e1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLinYwgQXR0ZW1wdGVkIHRvIGFjY2VzcyBhIHNlcnZlci1zaWRlIGVudmlyb25tZW50IHZhcmlhYmxlIG9uIHRoZSBjbGllbnRcIik7XG4gICAgfSk7XG4gICAgaWYgKHBhcnNlZC5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gb25WYWxpZGF0aW9uRXJyb3IocGFyc2VkLmVycm9yKTtcbiAgICB9XG4gICAgY29uc3QgaXNTZXJ2ZXJBY2Nlc3MgPSAocHJvcCk9PntcbiAgICAgICAgaWYgKCFvcHRzLmNsaWVudFByZWZpeCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiAhcHJvcC5zdGFydHNXaXRoKG9wdHMuY2xpZW50UHJlZml4KSAmJiAhKHByb3AgaW4gc2hhcmVkLnNoYXBlKTtcbiAgICB9O1xuICAgIGNvbnN0IGlzVmFsaWRTZXJ2ZXJBY2Nlc3MgPSAocHJvcCk9PntcbiAgICAgICAgcmV0dXJuIGlzU2VydmVyIHx8ICFpc1NlcnZlckFjY2Vzcyhwcm9wKTtcbiAgICB9O1xuICAgIGNvbnN0IGlnbm9yZVByb3AgPSAocHJvcCk9PntcbiAgICAgICAgcmV0dXJuIHByb3AgPT09IFwiX19lc01vZHVsZVwiIHx8IHByb3AgPT09IFwiJCR0eXBlb2ZcIjtcbiAgICB9O1xuICAgIGNvbnN0IGV4dGVuZGVkT2JqID0gKG9wdHMuZXh0ZW5kcyA/PyBbXSkucmVkdWNlKChhY2MsIGN1cnIpPT57XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjYywgY3Vycik7XG4gICAgfSwge30pO1xuICAgIGNvbnN0IGZ1bGxPYmogPSBPYmplY3QuYXNzaWduKHBhcnNlZC5kYXRhLCBleHRlbmRlZE9iaik7XG4gICAgY29uc3QgZW52ID0gbmV3IFByb3h5KGZ1bGxPYmosIHtcbiAgICAgICAgZ2V0ICh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChpZ25vcmVQcm9wKHByb3ApKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkU2VydmVyQWNjZXNzKHByb3ApKSByZXR1cm4gb25JbnZhbGlkQWNjZXNzKHByb3ApO1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9zdXNwaWNpb3VzL25vRXhwbGljaXRBbnk6IDxleHBsYW5hdGlvbj5cbiAgICByZXR1cm4gZW52O1xufVxuXG5leHBvcnQgeyBjcmVhdGVFbnYgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@t3-oss+env-core@0.9.2_typescript@5.4.5_zod@3.22.4/node_modules/@t3-oss/env-core/dist/index.js\n");

/***/ })

};
;