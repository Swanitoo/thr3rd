"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.78_react-dom@18.2_kdmst72bnfrl46fddnk5c5x57m";
exports.ids = ["vendor-chunks/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.78_react-dom@18.2_kdmst72bnfrl46fddnk5c5x57m"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.78_react-dom@18.2_kdmst72bnfrl46fddnk5c5x57m/node_modules/@radix-ui/react-collection/dist/index.mjs":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.78_react-dom@18.2_kdmst72bnfrl46fddnk5c5x57m/node_modules/@radix-ui/react-collection/dist/index.mjs ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCollection: () => (/* binding */ $e02a7d9cb1dc128c$export$c74125a8e3af6bb2)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @radix-ui/react-context */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.78_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.78_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slot */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-slot@1.0.2_@types+react@18.2.78_react@18.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs\");\n\n\n\n\n\n\n\n\n\n// We have resorted to returning slots directly rather than exposing primitives that can then\n// be slotted like `<CollectionItem as={Slot}>…</CollectionItem>`.\n// This is because we encountered issues with generic types that cannot be statically analysed\n// due to creating them dynamically via createCollection.\nfunction $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name) {\n    /* -----------------------------------------------------------------------------------------------\n   * CollectionProvider\n   * ---------------------------------------------------------------------------------------------*/ const PROVIDER_NAME = name + 'CollectionProvider';\n    const [createCollectionContext, createCollectionScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.createContextScope)(PROVIDER_NAME);\n    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {\n        collectionRef: {\n            current: null\n        },\n        itemMap: new Map()\n    });\n    const CollectionProvider = (props)=>{\n        const { scope: scope , children: children  } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const itemMap = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map()).current;\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollectionProviderImpl, {\n            scope: scope,\n            itemMap: itemMap,\n            collectionRef: ref\n        }, children);\n    };\n    /*#__PURE__*/ Object.assign(CollectionProvider, {\n        displayName: PROVIDER_NAME\n    });\n    /* -----------------------------------------------------------------------------------------------\n   * CollectionSlot\n   * ---------------------------------------------------------------------------------------------*/ const COLLECTION_SLOT_NAME = name + 'CollectionSlot';\n    const CollectionSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope: scope , children: children  } = props;\n        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(forwardedRef, context.collectionRef);\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot, {\n            ref: composedRefs\n        }, children);\n    });\n    /*#__PURE__*/ Object.assign(CollectionSlot, {\n        displayName: COLLECTION_SLOT_NAME\n    });\n    /* -----------------------------------------------------------------------------------------------\n   * CollectionItem\n   * ---------------------------------------------------------------------------------------------*/ const ITEM_SLOT_NAME = name + 'CollectionItemSlot';\n    const ITEM_DATA_ATTR = 'data-radix-collection-item';\n    const CollectionItemSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{\n        const { scope: scope , children: children , ...itemData } = props;\n        const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n        const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(forwardedRef, ref);\n        const context = useCollectionContext(ITEM_SLOT_NAME, scope);\n        react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n            context.itemMap.set(ref, {\n                ref: ref,\n                ...itemData\n            });\n            return ()=>void context.itemMap.delete(ref)\n            ;\n        });\n        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot, {\n            [ITEM_DATA_ATTR]: '',\n            ref: composedRefs\n        }, children);\n    });\n    /*#__PURE__*/ Object.assign(CollectionItemSlot, {\n        displayName: ITEM_SLOT_NAME\n    });\n    /* -----------------------------------------------------------------------------------------------\n   * useCollection\n   * ---------------------------------------------------------------------------------------------*/ function useCollection(scope) {\n        const context = useCollectionContext(name + 'CollectionConsumer', scope);\n        const getItems = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{\n            const collectionNode = context.collectionRef.current;\n            if (!collectionNode) return [];\n            const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));\n            const items = Array.from(context.itemMap.values());\n            const orderedItems = items.sort((a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)\n            );\n            return orderedItems;\n        }, [\n            context.collectionRef,\n            context.itemMap\n        ]);\n        return getItems;\n    }\n    return [\n        {\n            Provider: CollectionProvider,\n            Slot: CollectionSlot,\n            ItemSlot: CollectionItemSlot\n        },\n        useCollection,\n        createCollectionScope\n    ];\n}\n\n\n\n\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LWNvbGxlY3Rpb25AMS4wLjNfQHR5cGVzK3JlYWN0LWRvbUAxOC4yLjI1X0B0eXBlcytyZWFjdEAxOC4yLjc4X3JlYWN0LWRvbUAxOC4yX2tkbXN0NzJibmZybDQ2ZmRkbms1YzV4NTdtL25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtY29sbGVjdGlvbi9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUN1RDtBQUNEO0FBQzlCOzs7Ozs7QUFNekQ7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsMkVBQXlCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLGdCQUFnQixxQ0FBcUM7QUFDckQsb0JBQW9CLHlDQUFtQjtBQUN2Qyx3QkFBd0IseUNBQW1CO0FBQzNDLDZCQUE2QixnREFBMEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNkNBQXVCO0FBQ2hFLGdCQUFnQixxQ0FBcUM7QUFDckQ7QUFDQSw2QkFBNkIsNkVBQXNCO0FBQ25ELDZCQUE2QixnREFBMEIsQ0FBQyxzREFBVztBQUNuRTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2Q0FBdUI7QUFDcEUsZ0JBQWdCLGtEQUFrRDtBQUNsRSxvQkFBb0IseUNBQW1CO0FBQ3ZDLDZCQUE2Qiw2RUFBc0I7QUFDbkQ7QUFDQSxRQUFRLDRDQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVCw2QkFBNkIsZ0RBQTBCLENBQUMsc0RBQVc7QUFDbkU7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBd0I7QUFDakQ7QUFDQTtBQUNBLGdGQUFnRixlQUFlO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUt1RTtBQUN2RSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL25vZGVfbW9kdWxlcy8ucG5wbS9AcmFkaXgtdWkrcmVhY3QtY29sbGVjdGlvbkAxLjAuM19AdHlwZXMrcmVhY3QtZG9tQDE4LjIuMjVfQHR5cGVzK3JlYWN0QDE4LjIuNzhfcmVhY3QtZG9tQDE4LjJfa2Rtc3Q3MmJuZnJsNDZmZGRuazVjNXg1N20vbm9kZV9tb2R1bGVzL0ByYWRpeC11aS9yZWFjdC1jb2xsZWN0aW9uL2Rpc3QvaW5kZXgubWpzP2ViMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQ2dlloVSRyZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlQ29udGV4dFNjb3BlIGFzICQ2dlloVSRjcmVhdGVDb250ZXh0U2NvcGV9IGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtY29udGV4dFwiO1xuaW1wb3J0IHt1c2VDb21wb3NlZFJlZnMgYXMgJDZ2WWhVJHVzZUNvbXBvc2VkUmVmc30gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnNcIjtcbmltcG9ydCB7U2xvdCBhcyAkNnZZaFUkU2xvdH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zbG90XCI7XG5cblxuXG5cblxuLy8gV2UgaGF2ZSByZXNvcnRlZCB0byByZXR1cm5pbmcgc2xvdHMgZGlyZWN0bHkgcmF0aGVyIHRoYW4gZXhwb3NpbmcgcHJpbWl0aXZlcyB0aGF0IGNhbiB0aGVuXG4vLyBiZSBzbG90dGVkIGxpa2UgYDxDb2xsZWN0aW9uSXRlbSBhcz17U2xvdH0+4oCmPC9Db2xsZWN0aW9uSXRlbT5gLlxuLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGVuY291bnRlcmVkIGlzc3VlcyB3aXRoIGdlbmVyaWMgdHlwZXMgdGhhdCBjYW5ub3QgYmUgc3RhdGljYWxseSBhbmFseXNlZFxuLy8gZHVlIHRvIGNyZWF0aW5nIHRoZW0gZHluYW1pY2FsbHkgdmlhIGNyZWF0ZUNvbGxlY3Rpb24uXG5mdW5jdGlvbiAkZTAyYTdkOWNiMWRjMTI4YyRleHBvcnQkYzc0MTI1YThlM2FmNmJiMihuYW1lKSB7XG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ29sbGVjdGlvblByb3ZpZGVyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGNvbnN0IFBST1ZJREVSX05BTUUgPSBuYW1lICsgJ0NvbGxlY3Rpb25Qcm92aWRlcic7XG4gICAgY29uc3QgW2NyZWF0ZUNvbGxlY3Rpb25Db250ZXh0LCBjcmVhdGVDb2xsZWN0aW9uU2NvcGVdID0gJDZ2WWhVJGNyZWF0ZUNvbnRleHRTY29wZShQUk9WSURFUl9OQU1FKTtcbiAgICBjb25zdCBbQ29sbGVjdGlvblByb3ZpZGVySW1wbCwgdXNlQ29sbGVjdGlvbkNvbnRleHRdID0gY3JlYXRlQ29sbGVjdGlvbkNvbnRleHQoUFJPVklERVJfTkFNRSwge1xuICAgICAgICBjb2xsZWN0aW9uUmVmOiB7XG4gICAgICAgICAgICBjdXJyZW50OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGl0ZW1NYXA6IG5ldyBNYXAoKVxuICAgIH0pO1xuICAgIGNvbnN0IENvbGxlY3Rpb25Qcm92aWRlciA9IChwcm9wcyk9PntcbiAgICAgICAgY29uc3QgeyBzY29wZTogc2NvcGUgLCBjaGlsZHJlbjogY2hpbGRyZW4gIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgcmVmID0gJDZ2WWhVJHJlYWN0LnVzZVJlZihudWxsKTtcbiAgICAgICAgY29uc3QgaXRlbU1hcCA9ICQ2dlloVSRyZWFjdC51c2VSZWYobmV3IE1hcCgpKS5jdXJyZW50O1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyAkNnZZaFUkcmVhY3QuY3JlYXRlRWxlbWVudChDb2xsZWN0aW9uUHJvdmlkZXJJbXBsLCB7XG4gICAgICAgICAgICBzY29wZTogc2NvcGUsXG4gICAgICAgICAgICBpdGVtTWFwOiBpdGVtTWFwLFxuICAgICAgICAgICAgY29sbGVjdGlvblJlZjogcmVmXG4gICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICB9O1xuICAgIC8qI19fUFVSRV9fKi8gT2JqZWN0LmFzc2lnbihDb2xsZWN0aW9uUHJvdmlkZXIsIHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFBST1ZJREVSX05BTUVcbiAgICB9KTtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb2xsZWN0aW9uU2xvdFxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBjb25zdCBDT0xMRUNUSU9OX1NMT1RfTkFNRSA9IG5hbWUgKyAnQ29sbGVjdGlvblNsb3QnO1xuICAgIGNvbnN0IENvbGxlY3Rpb25TbG90ID0gLyojX19QVVJFX18qLyAkNnZZaFUkcmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIGZvcndhcmRlZFJlZik9PntcbiAgICAgICAgY29uc3QgeyBzY29wZTogc2NvcGUgLCBjaGlsZHJlbjogY2hpbGRyZW4gIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHVzZUNvbGxlY3Rpb25Db250ZXh0KENPTExFQ1RJT05fU0xPVF9OQU1FLCBzY29wZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUmVmcyA9ICQ2dlloVSR1c2VDb21wb3NlZFJlZnMoZm9yd2FyZGVkUmVmLCBjb250ZXh0LmNvbGxlY3Rpb25SZWYpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyAkNnZZaFUkcmVhY3QuY3JlYXRlRWxlbWVudCgkNnZZaFUkU2xvdCwge1xuICAgICAgICAgICAgcmVmOiBjb21wb3NlZFJlZnNcbiAgICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH0pO1xuICAgIC8qI19fUFVSRV9fKi8gT2JqZWN0LmFzc2lnbihDb2xsZWN0aW9uU2xvdCwge1xuICAgICAgICBkaXNwbGF5TmFtZTogQ09MTEVDVElPTl9TTE9UX05BTUVcbiAgICB9KTtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBDb2xsZWN0aW9uSXRlbVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qLyBjb25zdCBJVEVNX1NMT1RfTkFNRSA9IG5hbWUgKyAnQ29sbGVjdGlvbkl0ZW1TbG90JztcbiAgICBjb25zdCBJVEVNX0RBVEFfQVRUUiA9ICdkYXRhLXJhZGl4LWNvbGxlY3Rpb24taXRlbSc7XG4gICAgY29uc3QgQ29sbGVjdGlvbkl0ZW1TbG90ID0gLyojX19QVVJFX18qLyAkNnZZaFUkcmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIGZvcndhcmRlZFJlZik9PntcbiAgICAgICAgY29uc3QgeyBzY29wZTogc2NvcGUgLCBjaGlsZHJlbjogY2hpbGRyZW4gLCAuLi5pdGVtRGF0YSB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IHJlZiA9ICQ2dlloVSRyZWFjdC51c2VSZWYobnVsbCk7XG4gICAgICAgIGNvbnN0IGNvbXBvc2VkUmVmcyA9ICQ2dlloVSR1c2VDb21wb3NlZFJlZnMoZm9yd2FyZGVkUmVmLCByZWYpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29sbGVjdGlvbkNvbnRleHQoSVRFTV9TTE9UX05BTUUsIHNjb3BlKTtcbiAgICAgICAgJDZ2WWhVJHJlYWN0LnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICAgICAgY29udGV4dC5pdGVtTWFwLnNldChyZWYsIHtcbiAgICAgICAgICAgICAgICByZWY6IHJlZixcbiAgICAgICAgICAgICAgICAuLi5pdGVtRGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCk9PnZvaWQgY29udGV4dC5pdGVtTWFwLmRlbGV0ZShyZWYpXG4gICAgICAgICAgICA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyAkNnZZaFUkcmVhY3QuY3JlYXRlRWxlbWVudCgkNnZZaFUkU2xvdCwge1xuICAgICAgICAgICAgW0lURU1fREFUQV9BVFRSXTogJycsXG4gICAgICAgICAgICByZWY6IGNvbXBvc2VkUmVmc1xuICAgICAgICB9LCBjaGlsZHJlbik7XG4gICAgfSk7XG4gICAgLyojX19QVVJFX18qLyBPYmplY3QuYXNzaWduKENvbGxlY3Rpb25JdGVtU2xvdCwge1xuICAgICAgICBkaXNwbGF5TmFtZTogSVRFTV9TTE9UX05BTUVcbiAgICB9KTtcbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiB1c2VDb2xsZWN0aW9uXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovIGZ1bmN0aW9uIHVzZUNvbGxlY3Rpb24oc2NvcGUpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHVzZUNvbGxlY3Rpb25Db250ZXh0KG5hbWUgKyAnQ29sbGVjdGlvbkNvbnN1bWVyJywgc2NvcGUpO1xuICAgICAgICBjb25zdCBnZXRJdGVtcyA9ICQ2dlloVSRyZWFjdC51c2VDYWxsYmFjaygoKT0+e1xuICAgICAgICAgICAgY29uc3QgY29sbGVjdGlvbk5vZGUgPSBjb250ZXh0LmNvbGxlY3Rpb25SZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghY29sbGVjdGlvbk5vZGUpIHJldHVybiBbXTtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyZWROb2RlcyA9IEFycmF5LmZyb20oY29sbGVjdGlvbk5vZGUucXVlcnlTZWxlY3RvckFsbChgWyR7SVRFTV9EQVRBX0FUVFJ9XWApKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShjb250ZXh0Lml0ZW1NYXAudmFsdWVzKCkpO1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJlZEl0ZW1zID0gaXRlbXMuc29ydCgoYSwgYik9Pm9yZGVyZWROb2Rlcy5pbmRleE9mKGEucmVmLmN1cnJlbnQpIC0gb3JkZXJlZE5vZGVzLmluZGV4T2YoYi5yZWYuY3VycmVudClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gb3JkZXJlZEl0ZW1zO1xuICAgICAgICB9LCBbXG4gICAgICAgICAgICBjb250ZXh0LmNvbGxlY3Rpb25SZWYsXG4gICAgICAgICAgICBjb250ZXh0Lml0ZW1NYXBcbiAgICAgICAgXSk7XG4gICAgICAgIHJldHVybiBnZXRJdGVtcztcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgICAgUHJvdmlkZXI6IENvbGxlY3Rpb25Qcm92aWRlcixcbiAgICAgICAgICAgIFNsb3Q6IENvbGxlY3Rpb25TbG90LFxuICAgICAgICAgICAgSXRlbVNsb3Q6IENvbGxlY3Rpb25JdGVtU2xvdFxuICAgICAgICB9LFxuICAgICAgICB1c2VDb2xsZWN0aW9uLFxuICAgICAgICBjcmVhdGVDb2xsZWN0aW9uU2NvcGVcbiAgICBdO1xufVxuXG5cblxuXG5leHBvcnQgeyRlMDJhN2Q5Y2IxZGMxMjhjJGV4cG9ydCRjNzQxMjVhOGUzYWY2YmIyIGFzIGNyZWF0ZUNvbGxlY3Rpb259O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-collection@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.78_react-dom@18.2_kdmst72bnfrl46fddnk5c5x57m/node_modules/@radix-ui/react-collection/dist/index.mjs\n");

/***/ })

};
;