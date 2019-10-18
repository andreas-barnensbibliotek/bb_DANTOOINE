(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        main: 0
    };
    var deferredModules = [];
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
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/main.js", "vendors~main" ]);
    return checkDeferredModules();
})({
    "./assets/js/appsettings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const appconfig = () => {\n  let _apiserver = 'http://localhost:59015';\n  let _dnnURL = 'http://localdev.kivdev.se'; //let _apiserver = \"http://dev1.barnensbibliotek.se:8080\";\n  //let _dnnURL = \"http://dev1.barnensbibliotek.se\";\n  //let _apiserver = \"http://dev1.barnensbibliotek.se:8080\";\n  //let _dnnURL = \"http://nytt.barnensbibliotek.se\";\n  //let _apiserver = \"https://www2.barnensbibliotek.se\";\n  //let _dnnURL = \"https://www.barnensbibliotek.se\";\n\n  let _devkey = 'alf';\n\n  let _apidevkeyend = '/devkey/' + _devkey + '/?type=json&callback=?';\n\n  let _localOrServerURL = '';\n  let _htmltemplateURL = '../../../htmlTemplate/'; // Boklistor START\n  //// HandlebarTemplate (skickar tillbaka objectet bara att lägga till data för templaten)\n\n  let _hb_booklist_template = __webpack_require__(/*! ../../htmlTemplate/tpl_bookListItem.hbs */ \"./htmlTemplate/tpl_bookListItem.hbs\"); //// api\n\n\n  let _fn_byCategoryId = function _fn_byCategoryId(catid, userid) {\n    return _apiserver + '/Api_v3.1/katalogen/typ/cat/searchval/' + catid + '/val/' + userid + _apidevkeyend;\n  };\n\n  let _fn_byAmnenId = function _fn_byAmnenId(amnid, userid) {\n    return _apiserver + '/Api_v3.1/katalogen/typ/amne/searchval/' + catid + '/val/' + userid + _apidevkeyend;\n  };\n\n  let _fn_byfritext = function _fn_byfritext(searchstr, userid) {\n    return _apiserver + '/Api_v3.1/katalogen/typ/search/searchval/' + searchstr + '/val/' + userid + _apidevkeyend;\n  };\n\n  let _fn_autocomplete = function _fn_autocomplete(searchstr) {\n    return _apiserver + '/Api_v3.1/katalogen/typ/auto/searchval/' + searchstr + '/val/' + userid + _apidevkeyend;\n  };\n\n  return {\n    apiserver: _apiserver,\n    dnnURL: _dnnURL,\n    localOrServerURL: _localOrServerURL,\n    htmltemplateurl: _dnnURL + _htmltemplateURL,\n    devkey: _devkey,\n    handlebartemplate: {\n      hb_booklist_tmp: _hb_booklist_template\n    },\n    api: {\n      boklistor: {\n        boklistbyCatID: _fn_byCategoryId,\n        boklistbyAmneID: _fn_byAmnenId,\n        boklistbyFritext: _fn_byfritext\n      },\n      autocomplete: {\n        getbyAuto: _fn_autocomplete\n      },\n      devkeyend: _apidevkeyend\n    },\n    userinfo: {\n      userid: ''\n    },\n    debug: 'false'\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (appconfig);\n\n//# sourceURL=webpack:///./assets/js/appsettings.js?");
    },
    "./assets/js/components/booklisthandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var _service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/apiServiceHandler */ "./assets/js/service/apiServiceHandler.js");\n/* harmony import */ var _appsettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appsettings */ "./assets/js/appsettings.js");\n// let _ = require(\'lodash\');\n\n\n\nconst BooklistObj = () => {\n  let $group = \'\';\n\n  let _apiObj = Object(_service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\n\n  let _appconfig = Object(_appsettings__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();\n\n  function bind() {\n    //find the elements group\n    $group = $(\'#aj_katalog_groupId\'); // document.getElementById(\'aj_katalog_group\');\n  }\n\n  function gethbTmpl(dataObj, callback) {\n    //debug lägg i appsettings.js\n    let templ = _appconfig.handlebartemplate.hb_booklist_tmp;\n    callback(templ(dataObj));\n  }\n\n  function serviceApi(url, callback) {\n    _apiObj.Getjson(url, function (data) {\n      gethbTmpl(data, function (ret) {\n        callback(ret);\n      });\n    });\n  }\n\n  function render(url) {\n    bind(); //create a new element\n\n    const div = serviceApi(url, function (data) {\n      //refresh jPList content\n      jplist.resetContent(function () {\n        //add element to the group\n        $group.html(data);\n      });\n    }); //\'<div data-jplist-item><div class="name">Andreas Josefsson</div></div><div data-jplist-item><div class="name">Ida-Stina Josefsson</div></div><div data-jplist-item><div class="name">Nils-Magnus Josefsson</div></div>                \';\n  } ///////////Publika funktioner/////////////////////\n\n\n  function init(searchstr, userid) {\n    //debug\n    userid = _hanteraUserid(userid);\n\n    let url = _appconfig.api.boklistor.boklistbyFritext(searchstr, userid);\n\n    render(url);\n  }\n\n  function catsearch(catid, userid) {\n    userid = _hanteraUserid(userid); //debug lägg i appsettings.js\n\n    let url = _appconfig.api.boklistor.boklistbyCatID(catid, userid);\n\n    render(url);\n  }\n\n  function amnSearch(amnid, userid) {\n    userid = _hanteraUserid(userid); //debug lägg i appsettings.js\n\n    let url = _appconfig.api.boklistor.boklistbyAmneID(amnid, userid);\n\n    render(url);\n  }\n\n  function autocomplete(searchstr) {\n    userid = _hanteraUserid(userid); //debug lägg i appsettings.js\n\n    let url = _appconfig.api.autocomplete.getbyAuto(searchstr);\n\n    render(url);\n  } // Privata funktioner helper\n\n\n  function _hanteraUserid(userid) {\n    if (userid <= 0) {\n      userid = 0;\n    }\n\n    return userid;\n  }\n\n  return {\n    laddalista: init,\n    catsearch: catsearch,\n    amnSearch: amnSearch,\n    autocomplete: autocomplete,\n    alfvalue: \'This is an simple value from hello test!\'\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (BooklistObj);\n\n//# sourceURL=webpack:///./assets/js/components/booklisthandler.js?');
    },
    "./assets/js/components/querystringHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("//////// History handler\n//// ta hand om querystring parametrar och lagra dom i ett jsonobject urlparam.\nconst queryHandler = () => {\n  function checkparamsinurl(urlParams) {\n    let match,\n        pl = /\\+/g,\n        // Regex for replacing addition symbol with a space\n    search = /([^&=]+)=?([^&]*)/g,\n        decode = function decode(s) {\n      return decodeURIComponent(s.replace(pl, ' '));\n    },\n        query = window.location.search.substring(1);\n\n    while (match = search.exec(query)) urlParams[decode(match[1])] = decode(match[2]);\n\n    if (!urlParams.tab) {\n      let sPageURL = window.location.href.split('/'); // let index = sPageURL.indexOf('addarrtab');\n      // if (index > 0) {\n      // \turlParams.tab = sPageURL[index + 1];\n      // }\n      // index = sPageURL.indexOf('addarrtab');\n      // if (index > 0) {\n      // \turlParams.addarrtab = sPageURL[index + 1];\n      // }\n\n      let index = sPageURL.indexOf('id');\n\n      if (index > 0) {\n        urlParams.id = sPageURL[index + 1];\n      }\n    }\n\n    return urlParams;\n  }\n\n  return {\n    checkparamsinurl: checkparamsinurl\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (queryHandler);\n\n//# sourceURL=webpack:///./assets/js/components/querystringHandler.js?");
    },
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_booklisthandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/booklisthandler */ "./assets/js/components/booklisthandler.js");\n/* harmony import */ var _components_querystringHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/querystringHandler */ "./assets/js/components/querystringHandler.js");\n\n\nlet blobj = Object(_components_booklisthandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\nlet qHandler = Object(_components_querystringHandler__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();\n$(function () {\n  let _userid = $(\'#barnensbiblCurrentUserid\').html(); //hämta från querystring\n\n\n  let urlParams = {};\n  urlParams = qHandler.checkparamsinurl(urlParams);\n  console.log(\'urlParams.id: \' + urlParams.id);\n  jplist.init();\n  blobj.laddalista(\'cat\', _userid);\n});\n\n//# sourceURL=webpack:///./assets/js/main.js?');
    },
    "./assets/js/service/apiServiceHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const apiServiceHandler = () => {\n  function GetJsonData(url, callback) {\n    if (!url) {\n      return false;\n    } else {\n      fetch(url).then(resp => resp.json()) // Transform the data into json\n      .then(function (data) {\n        callback(data);\n      });\n    }\n  }\n\n  function PostJsonData(url, postdata, callback) {\n    if (!url) {\n      return false;\n    } else {\n      //console.log(\"Searchservicen hämtar Arrangemangdata\");\n      $.ajax({\n        async: true,\n        type: 'post',\n        url: url,\n        data: postdata,\n        success: function success(data) {\n          console.log('Hämtar Data: ');\n          callback(data);\n        },\n        error: function error(xhr, ajaxOptions, thrownError) {\n          alert('Nått blev fel vid hämtning av POST json!');\n        }\n      });\n    }\n  }\n\n  return {\n    Getjson: GetJsonData,\n    Postjson: PostJsonData\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (apiServiceHandler);\n\n//# sourceURL=webpack:///./assets/js/service/apiServiceHandler.js?");
    },
    "./htmlTemplate/tpl_bookListItem.hbs": function(module, exports, __webpack_require__) {
        eval('var Handlebars = __webpack_require__(/*! ../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {\n    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;\n\n  return "<div class=\\"col-md-4\\" data-jplist-item >\\r\\n    <div class=\\"card mb-4 box-shadow aj_bb_year"\n    + alias4(((helper = (helper = helpers.Published || (depth0 != null ? depth0.Published : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Published","hash":{},"data":data}) : helper)))\n    + " aj_bb_easy_"\n    + alias4(((helper = (helper = helpers.Easyread || (depth0 != null ? depth0.Easyread : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Easyread","hash":{},"data":data}) : helper)))\n    + "\\" >\\r\\n      <div class=\\""\n    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Categories : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")\n    + " \\"></div>\\r\\n        <img class=\\"card-img-top\\"\\r\\n            data-src=\\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\\"\\r\\n            alt=\\"Thumbnail [100%x225]\\" style=\\"height: 225px; width: 100%;\\r\\n            display: block;\\"\\r\\n            src="\n    + alias4(((helper = (helper = helpers.BokomslagURL || (depth0 != null ? depth0.BokomslagURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"BokomslagURL","hash":{},"data":data}) : helper)))\n    + "\\r\\n            data-holder-rendered=\\"true\\">\\r\\n        <div class=\\"card-body\\">\\r\\n            <p class=\\"card-text name\\">"\n    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))\n    + "</p>\\r\\n            <div class=\\"d-flex justify-content-between align-items-center\\">\\r\\n                <div class=\\"btn-group\\">\\r\\n                    <button type=\\"button\\" class=\\"btn btn-sm\\r\\n                        btn-outline-secondary\\">View</button>\\r\\n                    <button type=\\"button\\" class=\\"btn btn-sm\\r\\n                        btn-outline-secondary\\">Edit</button>\\r\\n                </div>\\r\\n                <small class=\\"text-muted\\">9 mins</small>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\\r\\n";\n},"2":function(container,depth0,helpers,partials,data) {\n    var helper;\n\n  return "aj_bb_cat_"\n    + container.escapeExpression(((helper = (helper = helpers.CategoryID || (depth0 != null ? depth0.CategoryID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"CategoryID","hash":{},"data":data}) : helper)))\n    + " ";\n},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});\n\n  return "\x3c!-- Loop start --\x3e\\r\\n visa: "\n    + container.escapeExpression(((helper = (helper = helpers.Antal || (depth0 != null ? depth0.Antal : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"Antal","hash":{},"data":data}) : helper)))\n    + "\\r\\n"\n    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.Bookitems : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");\n},"useData":true});\n\n//# sourceURL=webpack:///./htmlTemplate/tpl_bookListItem.hbs?');
    }
});