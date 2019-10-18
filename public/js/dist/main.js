(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/components/old.js": function(module, exports) {
        eval("module.exports = {\n  testarold: function testarold(msg) {//alert(msg);\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/components/old.js?");
    },
    "./assets/js/components/test.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const hello = () => {\n  return {\n    skrik: () => {//alert('Hello2! ');\n    },\n    alfvalue: 'detta är ett simpelt värde från hello test!'\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (hello);\n\n//# sourceURL=webpack:///./assets/js/components/test.js?");
    },
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/test */ "./assets/js/components/test.js");\n\n\nvar dt = __webpack_require__(/*! ./components/old */ "./assets/js/components/old.js");\n\nlet ny = Object(_components_test__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(); //console.log(ny.skrik());\n//alert(ny.alfvalue);\n//dt.testarold(\'funkar detta\');\n\n//# sourceURL=webpack:///./assets/js/main.js?');
    }
});