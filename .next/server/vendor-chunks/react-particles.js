"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-particles";
exports.ids = ["vendor-chunks/react-particles"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-particles/cjs/Particles.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-particles/cjs/Particles.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"));\nconst tsparticles_engine_1 = __webpack_require__(/*! tsparticles-engine */ \"(ssr)/./node_modules/tsparticles-engine/cjs/index.js\");\nconst Utils_1 = __webpack_require__(/*! ./Utils */ \"(ssr)/./node_modules/react-particles/cjs/Utils.js\");\nconst defaultId = \"tsparticles\";\nclass Particles extends react_1.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            init: false,\n            library: undefined,\n        };\n    }\n    destroy() {\n        if (!this.state.library) {\n            return;\n        }\n        this.state.library.destroy();\n        this.setState({\n            library: undefined,\n        });\n    }\n    shouldComponentUpdate(nextProps) {\n        const nextOptions = nextProps.options ?? nextProps.params, currentOptions = this.props.options ?? this.props.params;\n        return (nextProps.url !== this.props.url ||\n            nextProps.id !== this.props.id ||\n            nextProps.canvasClassName !== this.props.canvasClassName ||\n            nextProps.className !== this.props.className ||\n            nextProps.height !== this.props.height ||\n            nextProps.width !== this.props.width ||\n            !(0, Utils_1.deepCompare)(nextProps.style, this.props.style) ||\n            nextProps.init !== this.props.init ||\n            nextProps.loaded !== this.props.loaded ||\n            !(0, Utils_1.deepCompare)(nextOptions, currentOptions, key => key.startsWith(\"_\")));\n    }\n    componentDidUpdate() {\n        this.refresh();\n    }\n    forceUpdate() {\n        this.refresh().then(() => {\n            super.forceUpdate();\n        });\n    }\n    componentDidMount() {\n        (async () => {\n            if (this.props.init) {\n                await this.props.init(tsparticles_engine_1.tsParticles);\n            }\n            this.setState({\n                init: true,\n            }, async () => {\n                await this.loadParticles();\n            });\n        })();\n    }\n    componentWillUnmount() {\n        this.destroy();\n    }\n    render() {\n        const { width, height, className, canvasClassName, id } = this.props;\n        return (react_1.default.createElement(\"div\", { className: className, id: id },\n            react_1.default.createElement(\"canvas\", { className: canvasClassName, style: {\n                    ...this.props.style,\n                    width,\n                    height,\n                } })));\n    }\n    async refresh() {\n        this.destroy();\n        await this.loadParticles();\n    }\n    async loadParticles() {\n        if (!this.state.init) {\n            return;\n        }\n        const id = this.props.id ?? Particles.defaultProps.id ?? defaultId, container = await tsparticles_engine_1.tsParticles.load({\n            url: this.props.url,\n            id,\n            options: this.props.options ?? this.props.params,\n        });\n        if (this.props.container) {\n            this.props.container.current = container;\n        }\n        this.setState({\n            library: container,\n        });\n        if (this.props.loaded) {\n            await this.props.loaded(container);\n        }\n    }\n}\nParticles.defaultProps = {\n    width: \"100%\",\n    height: \"100%\",\n    options: {},\n    style: {},\n    url: undefined,\n    id: defaultId,\n};\nexports[\"default\"] = Particles;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGFydGljbGVzL2Nqcy9QYXJ0aWNsZXMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDQUEwQyw0QkFBNEI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELDZCQUE2QixtQkFBTyxDQUFDLHdHQUFPO0FBQzVDLDZCQUE2QixtQkFBTyxDQUFDLGdGQUFvQjtBQUN6RCxnQkFBZ0IsbUJBQU8sQ0FBQyxrRUFBUztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0RBQWdEO0FBQ2hFLHVEQUF1RCw4QkFBOEI7QUFDckYsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGtCQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBhcnRpY2xlcy9janMvUGFydGljbGVzLmpzP2NkMmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcbiAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHRzcGFydGljbGVzX2VuZ2luZV8xID0gcmVxdWlyZShcInRzcGFydGljbGVzLWVuZ2luZVwiKTtcbmNvbnN0IFV0aWxzXzEgPSByZXF1aXJlKFwiLi9VdGlsc1wiKTtcbmNvbnN0IGRlZmF1bHRJZCA9IFwidHNwYXJ0aWNsZXNcIjtcbmNsYXNzIFBhcnRpY2xlcyBleHRlbmRzIHJlYWN0XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbml0OiBmYWxzZSxcbiAgICAgICAgICAgIGxpYnJhcnk6IHVuZGVmaW5lZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxpYnJhcnkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLmxpYnJhcnkuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxpYnJhcnk6IHVuZGVmaW5lZCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgICAgY29uc3QgbmV4dE9wdGlvbnMgPSBuZXh0UHJvcHMub3B0aW9ucyA/PyBuZXh0UHJvcHMucGFyYW1zLCBjdXJyZW50T3B0aW9ucyA9IHRoaXMucHJvcHMub3B0aW9ucyA/PyB0aGlzLnByb3BzLnBhcmFtcztcbiAgICAgICAgcmV0dXJuIChuZXh0UHJvcHMudXJsICE9PSB0aGlzLnByb3BzLnVybCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmlkICE9PSB0aGlzLnByb3BzLmlkIHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMuY2FudmFzQ2xhc3NOYW1lICE9PSB0aGlzLnByb3BzLmNhbnZhc0NsYXNzTmFtZSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmNsYXNzTmFtZSAhPT0gdGhpcy5wcm9wcy5jbGFzc05hbWUgfHxcbiAgICAgICAgICAgIG5leHRQcm9wcy5oZWlnaHQgIT09IHRoaXMucHJvcHMuaGVpZ2h0IHx8XG4gICAgICAgICAgICBuZXh0UHJvcHMud2lkdGggIT09IHRoaXMucHJvcHMud2lkdGggfHxcbiAgICAgICAgICAgICEoMCwgVXRpbHNfMS5kZWVwQ29tcGFyZSkobmV4dFByb3BzLnN0eWxlLCB0aGlzLnByb3BzLnN0eWxlKSB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmluaXQgIT09IHRoaXMucHJvcHMuaW5pdCB8fFxuICAgICAgICAgICAgbmV4dFByb3BzLmxvYWRlZCAhPT0gdGhpcy5wcm9wcy5sb2FkZWQgfHxcbiAgICAgICAgICAgICEoMCwgVXRpbHNfMS5kZWVwQ29tcGFyZSkobmV4dE9wdGlvbnMsIGN1cnJlbnRPcHRpb25zLCBrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoXCJfXCIpKSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICAgIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHN1cGVyLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmluaXQpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnByb3BzLmluaXQodHNwYXJ0aWNsZXNfZW5naW5lXzEudHNQYXJ0aWNsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW5pdDogdHJ1ZSxcbiAgICAgICAgICAgIH0sIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRQYXJ0aWNsZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgIH1cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBjbGFzc05hbWUsIGNhbnZhc0NsYXNzTmFtZSwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgaWQ6IGlkIH0sXG4gICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiLCB7IGNsYXNzTmFtZTogY2FudmFzQ2xhc3NOYW1lLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH0gfSkpKTtcbiAgICB9XG4gICAgYXN5bmMgcmVmcmVzaCgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFBhcnRpY2xlcygpO1xuICAgIH1cbiAgICBhc3luYyBsb2FkUGFydGljbGVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaW5pdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCA/PyBQYXJ0aWNsZXMuZGVmYXVsdFByb3BzLmlkID8/IGRlZmF1bHRJZCwgY29udGFpbmVyID0gYXdhaXQgdHNwYXJ0aWNsZXNfZW5naW5lXzEudHNQYXJ0aWNsZXMubG9hZCh7XG4gICAgICAgICAgICB1cmw6IHRoaXMucHJvcHMudXJsLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLnByb3BzLm9wdGlvbnMgPz8gdGhpcy5wcm9wcy5wYXJhbXMsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb250YWluZXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29udGFpbmVyLmN1cnJlbnQgPSBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsaWJyYXJ5OiBjb250YWluZXIsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5sb2FkZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucHJvcHMubG9hZGVkKGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5QYXJ0aWNsZXMuZGVmYXVsdFByb3BzID0ge1xuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIG9wdGlvbnM6IHt9LFxuICAgIHN0eWxlOiB7fSxcbiAgICB1cmw6IHVuZGVmaW5lZCxcbiAgICBpZDogZGVmYXVsdElkLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBhcnRpY2xlcztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-particles/cjs/Particles.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-particles/cjs/Utils.js":
/*!***************************************************!*\
  !*** ./node_modules/react-particles/cjs/Utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deepCompare = void 0;\nconst isObject = (val) => typeof val === \"object\" && val !== null;\nfunction deepCompare(obj1, obj2, excludeKeyFn = () => false) {\n    if (!isObject(obj1) || !isObject(obj2)) {\n        return obj1 === obj2;\n    }\n    const keys1 = Object.keys(obj1).filter(key => !excludeKeyFn(key)), keys2 = Object.keys(obj2).filter(key => !excludeKeyFn(key));\n    if (keys1.length !== keys2.length) {\n        return false;\n    }\n    for (const key of keys1) {\n        const value1 = obj1[key], value2 = obj2[key];\n        if (isObject(value1) && isObject(value2)) {\n            if (value1 === obj2 && value2 === obj1) {\n                continue;\n            }\n            if (!deepCompare(value1, value2, excludeKeyFn)) {\n                return false;\n            }\n        }\n        else if (Array.isArray(value1) && Array.isArray(value2)) {\n            if (!deepCompareArrays(value1, value2, excludeKeyFn)) {\n                return false;\n            }\n        }\n        else if (value1 !== value2) {\n            return false;\n        }\n    }\n    return true;\n}\nexports.deepCompare = deepCompare;\nfunction deepCompareArrays(arr1, arr2, excludeKeyFn) {\n    if (arr1.length !== arr2.length) {\n        return false;\n    }\n    for (let i = 0; i < arr1.length; i++) {\n        const val1 = arr1[i], val2 = arr2[i];\n        if (Array.isArray(val1) && Array.isArray(val2)) {\n            if (!deepCompareArrays(val1, val2, excludeKeyFn)) {\n                return false;\n            }\n        }\n        else if (isObject(val1) && isObject(val2)) {\n            if (!deepCompare(val1, val2, excludeKeyFn)) {\n                return false;\n            }\n        }\n        else if (val1 !== val2) {\n            return false;\n        }\n    }\n    return true;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGFydGljbGVzL2Nqcy9VdGlscy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBhcnRpY2xlcy9janMvVXRpbHMuanM/ZjQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVlcENvbXBhcmUgPSB2b2lkIDA7XG5jb25zdCBpc09iamVjdCA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgdmFsICE9PSBudWxsO1xuZnVuY3Rpb24gZGVlcENvbXBhcmUob2JqMSwgb2JqMiwgZXhjbHVkZUtleUZuID0gKCkgPT4gZmFsc2UpIHtcbiAgICBpZiAoIWlzT2JqZWN0KG9iajEpIHx8ICFpc09iamVjdChvYmoyKSkge1xuICAgICAgICByZXR1cm4gb2JqMSA9PT0gb2JqMjtcbiAgICB9XG4gICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmoxKS5maWx0ZXIoa2V5ID0+ICFleGNsdWRlS2V5Rm4oa2V5KSksIGtleXMyID0gT2JqZWN0LmtleXMob2JqMikuZmlsdGVyKGtleSA9PiAhZXhjbHVkZUtleUZuKGtleSkpO1xuICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMxKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlMSA9IG9iajFba2V5XSwgdmFsdWUyID0gb2JqMltrZXldO1xuICAgICAgICBpZiAoaXNPYmplY3QodmFsdWUxKSAmJiBpc09iamVjdCh2YWx1ZTIpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUxID09PSBvYmoyICYmIHZhbHVlMiA9PT0gb2JqMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFkZWVwQ29tcGFyZSh2YWx1ZTEsIHZhbHVlMiwgZXhjbHVkZUtleUZuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlMSkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZTIpKSB7XG4gICAgICAgICAgICBpZiAoIWRlZXBDb21wYXJlQXJyYXlzKHZhbHVlMSwgdmFsdWUyLCBleGNsdWRlS2V5Rm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlMSAhPT0gdmFsdWUyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5leHBvcnRzLmRlZXBDb21wYXJlID0gZGVlcENvbXBhcmU7XG5mdW5jdGlvbiBkZWVwQ29tcGFyZUFycmF5cyhhcnIxLCBhcnIyLCBleGNsdWRlS2V5Rm4pIHtcbiAgICBpZiAoYXJyMS5sZW5ndGggIT09IGFycjIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbDEgPSBhcnIxW2ldLCB2YWwyID0gYXJyMltpXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsMSkgJiYgQXJyYXkuaXNBcnJheSh2YWwyKSkge1xuICAgICAgICAgICAgaWYgKCFkZWVwQ29tcGFyZUFycmF5cyh2YWwxLCB2YWwyLCBleGNsdWRlS2V5Rm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHZhbDEpICYmIGlzT2JqZWN0KHZhbDIpKSB7XG4gICAgICAgICAgICBpZiAoIWRlZXBDb21wYXJlKHZhbDEsIHZhbDIsIGV4Y2x1ZGVLZXlGbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsMSAhPT0gdmFsMikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-particles/cjs/Utils.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-particles/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-particles/cjs/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Particles = void 0;\nconst Particles_1 = __importDefault(__webpack_require__(/*! ./Particles */ \"(ssr)/./node_modules/react-particles/cjs/Particles.js\"));\nexports.Particles = Particles_1.default;\nexports[\"default\"] = Particles_1.default;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGFydGljbGVzL2Nqcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixvQ0FBb0MsbUJBQU8sQ0FBQywwRUFBYTtBQUN6RCxpQkFBaUI7QUFDakIsa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcGFydGljbGVzL2Nqcy9pbmRleC5qcz84YmJlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QYXJ0aWNsZXMgPSB2b2lkIDA7XG5jb25zdCBQYXJ0aWNsZXNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QYXJ0aWNsZXNcIikpO1xuZXhwb3J0cy5QYXJ0aWNsZXMgPSBQYXJ0aWNsZXNfMS5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gUGFydGljbGVzXzEuZGVmYXVsdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-particles/cjs/index.js\n");

/***/ })

};
;