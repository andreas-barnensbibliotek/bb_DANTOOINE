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
    "./assets/js/appsettings.js": function(module, exports) {
        eval("module.exports = {\n  config: function () {\n    let _apiserver = 'http://localhost:59015';\n    let _dnnURL = 'http://localdev.kivdev.se'; //let _apiserver = \"http://dev1.barnensbibliotek.se:8080\";\n    //let _dnnURL = \"http://dev1.barnensbibliotek.se\";\n    //let _apiserver = \"http://dev1.barnensbibliotek.se:8080\";\n    //let _dnnURL = \"http://nytt.barnensbibliotek.se\";\n    //let _apiserver = \"https://www2.barnensbibliotek.se\";\n    //let _dnnURL = \"https://www.barnensbibliotek.se\";\n\n    let _devkey = 'alf';\n\n    let _apidevkeyend = '/devkey/' + _devkey + '/?type=json';\n\n    let _localOrServerURL = '';\n    let _htmltemplateURL = '/Portals/_default/Skins/bb_DANTOOINE/htmlTemplate/'; // Boktipslistor START\n\n    let _bt_List_template = _dnnURL + _htmltemplateURL + 'tpl_boktipsListItem.hbs'; //// api\n\n\n    let _fn_LatestBoktips = function _fn_LatestBoktips(antal) {\n      return _apiserver + '/Api_v3.1/boktips/typ/Latest/val/' + antal + '/txtval/0' + _apidevkeyend;\n    };\n\n    let _fn_RndBoktips = function _fn_RndBoktips(antal) {\n      return _apiserver + '/Api_v3.1/boktips/typ/Latest/val/' + antal + '/txtval/0' + _apidevkeyend;\n    };\n\n    let _fn_RankedBoktips = function _fn_RankedBoktips(antal) {\n      return _apiserver + '/Api_v3.1/boktips/typ/Latest/val/' + antal + '/txtval/0' + _apidevkeyend;\n    };\n\n    let _fn_AgeBoktips = function _fn_AgeBoktips(antal) {\n      return _apiserver + '/Api_v3.1/boktips/typ/Latest/val/' + antal + '/txtval/0' + _apidevkeyend;\n    };\n\n    let _fn_FreesrhBoktips = function _fn_FreesrhBoktips(searchtext) {\n      return _apiserver + 'Api_v3.1/boktips/typ/BySearch/val/0/txtval/' + searchtext + _apidevkeyend;\n    };\n\n    let _fn_autocompleteSrhBoktips = function _fn_autocompleteSrhBoktips(searchtext) {\n      return _apiserver + '/Api_v3.1/boktips/typ/ByAutoComplete/val/0/txtval/' + searchtext + _apidevkeyend;\n    };\n\n    let _fn_AmnenBoktips = function _fn_AmnenBoktips(antal) {\n      return _apiserver + '/Api_v3.1/boktips/typ/Latest/val/' + antal + '/txtval/0' + _apidevkeyend;\n    }; // Skrivboken START\n    //// Template\n\n\n    let _hb_skrivbokenlist_template = _dnnURL + _htmltemplateURL + 'skrivboken_lista.txt'; //// API\n\n\n    let _fn_userSkrivbokenlist = function _fn_userSkrivbokenlist(userid) {\n      return _apiserver + '/Api_v3.1/skrivboken/cmdtyp/ByUserID/val/' + userid + '/typ/2/ap/0/pub/0' + _apidevkeyend;\n    };\n\n    return {\n      apiserver: _apiserver,\n      dnnURL: _dnnURL,\n      localOrServerURL: _localOrServerURL,\n      htmltemplateurl: _dnnURL + _htmltemplateURL,\n      devkey: _devkey,\n      handlebartemplate: {\n        hb_bt_list_tmp: _bt_List_template\n      },\n      api: {\n        boktipslistor: {\n          getlatestBoktips: _fn_LatestBoktips,\n          getRandomBoktips: _fn_RndBoktips,\n          getRankedBoktips: _fn_RankedBoktips,\n          getAgeBoktips: _fn_AgeBoktips,\n          getfreesearchBoktips: _fn_FreesrhBoktips,\n          getAmnenBoktips: _fn_AmnenBoktips\n        },\n        autocomplete: {\n          getbyAuto: _fn_autocompleteSrhBoktips\n        },\n        devkeyend: _apidevkeyend\n      },\n      currentJson: {},\n      debug: 'false'\n    };\n  }()\n};\n\n//# sourceURL=webpack:///./assets/js/appsettings.js?");
    },
    "./assets/js/boktips/boktipsDataHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var _service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/apiServiceHandler */ "./assets/js/service/apiServiceHandler.js");\n\n\nconst btDataHandler = () => {\n  let _apiObj = Object(_service_apiServiceHandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\n\n  function ServiceApi(tmpl, url, callback) {\n    let $curtmpl = __webpack_require__(/*! ../../../htmlTemplate/tpl_boktipsListItem.hbs */ "./htmlTemplate/tpl_boktipsListItem.hbs");\n\n    _apiObj.GetjsonDetail(url, function (data) {\n      callback($curtmpl(data));\n    });\n  }\n\n  function HandelbarService(data, callback) {\n    let $curtmpl = __webpack_require__(/*! ../../../htmlTemplate/tpl_boktipModal.hbs */ "./htmlTemplate/tpl_boktipModal.hbs");\n\n    callback($curtmpl(data));\n  }\n\n  return {\n    boktipsServiceApi: ServiceApi,\n    HandlebarService: HandelbarService\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (btDataHandler);\n\n//# sourceURL=webpack:///./assets/js/boktips/boktipsDataHandler.js?');
    },
    "./assets/js/boktips/boktipsHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* WEBPACK VAR INJECTION */(function(_) {/* harmony import */ var _boktipsDataHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boktipsDataHandler */ \"./assets/js/boktips/boktipsDataHandler.js\");\n/* harmony import */ var _appsettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appsettings */ \"./assets/js/appsettings.js\");\n/* harmony import */ var _appsettings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_appsettings__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst boktipsHandler = () => {\n  let _apiObj = Object(_boktipsDataHandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n\n  let _appsettings = _appsettings__WEBPACK_IMPORTED_MODULE_1___default.a.config;\n  let $boklistContainer, $aj_boktips_v3_Modal;\n\n  function DOMHandler() {\n    $boklistContainer = $('#aj_boktips_v3_List');\n    $aj_boktips_v3_Modal = $('#aj_boktips_v3_Modal');\n  }\n\n  function EventHandler() {\n    $('#mainboklistcontainer').on('click', '.aj_boktips_v3_item', function (e) {\n      let val = $(this).attr('data-tipid');\n      RenderModal(val);\n    });\n  }\n\n  function getLatestboktips() {\n    let tmpl = _appsettings.handlebartemplate.hb_bt_list_tmp;\n\n    let apiurl = _appsettings.api.boktipslistor.getlatestBoktips(100);\n\n    Render(tmpl, apiurl);\n  }\n\n  function Render(hbtmpl, apiurl) {\n    _apiObj.boktipsServiceApi(hbtmpl, apiurl, function (tmpldata) {\n      $boklistContainer.html(tmpldata);\n    });\n  }\n\n  function RenderModal(val) {\n    let jsn = _appsettings.currentJson;\n\n    let obj = _.find(jsn.Boktips, ['TipID', Number(val)]);\n\n    _apiObj.HandlebarService(obj, function (tmpldata) {\n      $aj_boktips_v3_Modal.html(tmpldata);\n    });\n  }\n\n  function init(callback) {\n    DOMHandler();\n    EventHandler();\n    getLatestboktips();\n    callback('test');\n  }\n\n  return {\n    init: init\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (boktipsHandler);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\")))\n\n//# sourceURL=webpack:///./assets/js/boktips/boktipsHandler.js?");
    },
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boktips_boktipsHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boktips/boktipsHandler */ \"./assets/js/boktips/boktipsHandler.js\");\n // var dt = require('./components/old');\n// let ny = hello();\n//console.log(ny.skrik());\n// alert(ny.alfvalue);\n//let _ = require('lodash');\n// dt.testarold('funkar detta');\n\n$(function () {\n  let _btObj = Object(_boktips_boktipsHandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n\n  const init = function init() {\n    _btObj.init(function (text) {\n      console.log('startar btobj' + text);\n    });\n  };\n\n  init(); // alert(' och igen..nu utan ' + ny.skrik(dt.testarold('funkar detta')));\n  // console.log('innan jplist2');\n  //jplist.init();\n  // function visaHBExemple() {\n  // let templ = '../../htmlTemplate/hb_exemple.hbs';\n  // _HBObj.HandlebarServiceExemple(templ, function(data) {\n  // \t$('#handlebarTmplExemple').html(data);\n  // });\n  // }\n  // visaHBExemple();\n});\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    },
    "./assets/js/service/apiServiceHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony import */ var _storagehandler_storagehandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storagehandler/storagehandler */ \"./assets/js/storagehandler/storagehandler.js\");\n/* harmony import */ var _appsettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appsettings */ \"./assets/js/appsettings.js\");\n/* harmony import */ var _appsettings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_appsettings__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst apiServiceHandler = () => {\n  let storeObj = Object(_storagehandler_storagehandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n  let _appsettings = _appsettings__WEBPACK_IMPORTED_MODULE_1___default.a.config;\n\n  function GetJsonData(url, callback) {\n    if (!url) {\n      return false;\n    } else {\n      fetch(url).then(resp => resp.json()) // Transform the data into json\n      .then(function (data) {\n        //storeObj.addDataToStorage(data);\n        _appsettings.currentJson = data;\n        callback(data);\n      }).catch(function () {\n        console.log('error i Fetch: ' + url);\n      });\n    }\n  }\n\n  function PostJsonData(url, postdata, callback) {\n    if (!url) {\n      return false;\n    } else {\n      //console.log(\"Searchservicen hämtar Arrangemangdata\");\n      $.ajax({\n        async: true,\n        type: 'post',\n        url: url,\n        data: postdata,\n        success: function success(data) {\n          console.log('Hämtar Data: '); //storeObj.addDataToStorage(data);\n\n          callback(data);\n        },\n        error: function error(xhr, ajaxOptions, thrownError) {\n          alert('Nått blev fel vid hämtning av POST json!');\n        }\n      });\n    }\n  }\n\n  function GetJsonDataFromStorage(url, callback) {\n    if (!storeObj.chkifSession()) {\n      GetJsonData(url, function (data) {\n        storeObj.addDataToStorage(data);\n        storeObj.setSession();\n        callback(data);\n      });\n    } else {\n      let currdata = storeObj.getDataFromStorage();\n\n      if (currdata) {\n        callback(currdata);\n      } else {\n        GetJsonData(url, function (data) {\n          storeObj.addDataToStorage(data);\n          callback(data);\n        });\n        console.log('hämta ny data');\n      }\n    }\n  }\n\n  function GetJsonPostDataFromStorage(url, postdata, callback) {\n    if (!storeObj.chkifSession()) {\n      PostJsonData(url, postdata, function (data) {\n        storeObj.addDataToStorage(data);\n        storeObj.setSession();\n        callback(data);\n      });\n    } else {\n      let currdata = storeObj.getDataFromStorage();\n\n      if (currdata) {\n        callback(currdata);\n      } else {\n        PostJsonData(url, postdata, function (data) {\n          storeObj.addDataToStorage(data);\n          callback(data);\n        });\n        console.log('hämta ny Postdata');\n      }\n    }\n  }\n\n  function updateGetJson(url, callback) {\n    GetJsonData(url, function (data) {\n      callback(data);\n    });\n  }\n\n  function GetJsonDataAutocomplete(url, callback) {\n    GetJsonData(url, function (data) {\n      storeObj.addDataToStorage(data);\n      storeObj.setSession();\n      callback(data);\n    });\n  }\n\n  return {\n    Getjson: GetJsonDataFromStorage,\n    GetjsonAuto: GetJsonDataAutocomplete,\n    GetjsonDetail: GetJsonData,\n    UpdgetJson: updateGetJson,\n    UpdPostjson: PostJsonData,\n    Postjson: GetJsonPostDataFromStorage\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (apiServiceHandler);\n\n//# sourceURL=webpack:///./assets/js/service/apiServiceHandler.js?");
    },
    "./assets/js/storagehandler/storagehandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const storagehandler = () => {\n  let _storage = Storages.localStorage; //console.log('storage: ' + _storage);\n\n  let _session = Storages.sessionStorage; // LOCALSTORAGE\n  // används för att rätt listningar skall visas om användaren öppnar sidan för förstagången = alla arr annars senaste sökningen och\n  // om användaren går till detalj skall senaste sökningen visas.\n\n  function SetSession() {\n    _session.set('session', 'true');\n\n    console.log('session true');\n  }\n\n  function chkIfsessionActive() {\n    let sess = _session.get('session');\n\n    if (sess) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  function isCurrentdataSet() {\n    let tmpdata = _storage.get('currentdata');\n\n    if (tmpdata) {\n      console.log('currentdata =  true DATA Finns i localstorage');\n      return true;\n    }\n\n    console.log('currentdata = false Det finns ingen data');\n    return false;\n  }\n\n  function addDataToStorageHandler(stdata) {\n    if (stdata) {\n      // _storage.removeAll();\n      console.log('ADD currentdata to storage: ' + stdata);\n\n      _storage.remove('currentdata');\n\n      _storage.set('currentdata', stdata);\n    }\n\n    return stdata;\n  }\n\n  function getDataFromStorageHandler() {\n    let stdata;\n\n    if (isCurrentdataSet()) {\n      stdata = _storage.get('currentdata');\n      console.log('GET currentdata from storage: ' + stdata);\n    }\n\n    return stdata;\n  }\n\n  function resetStorage() {\n    _storage.remove('currentdata');\n\n    _storage.remove('my-page-storage');\n  }\n\n  return {\n    checkStorageData: isCurrentdataSet,\n    addDataToStorage: addDataToStorageHandler,\n    getDataFromStorage: getDataFromStorageHandler,\n    setSession: SetSession,\n    chkifSession: chkIfsessionActive,\n    resetstorage: resetStorage\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (storagehandler);\n\n//# sourceURL=webpack:///./assets/js/storagehandler/storagehandler.js?");
    },
    "./htmlTemplate/tpl_boktipModal.hbs": function(module, exports, __webpack_require__) {
        eval('var Handlebars = __webpack_require__(/*! ../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;\n\n  return "<div class=\\"modal-dialog modal-dialog-centered\\" role=\\"document\\">\\r\\n        <div class=\\"modal-content\\">\\r\\n            <div class=\\"modal-header dantnooine-modal-header\\">\\r\\n                <h5 class=\\"modal-title\\" id=\\"aj_boktips_v3_Modaltitle\\">Boktips</h5>\\r\\n                <button type=\\"button\\" class=\\"close\\" data-dismiss=\\"modal\\" aria-label=\\"Close\\">\\r\\n                    <span aria-hidden=\\"true\\">&times;</span>\\r\\n                </button>\\r\\n            </div>\\r\\n            <div class=\\"modal-body\\">\\r\\n                <div class=\\"row\\">\\r\\n                    <div class=\\"col-4\\">\\r\\n                        <div class=\\"batuu-book-img\\">\\r\\n                            <img src=\\""\n    + alias4(((helper = (helper = helpers.ImgSrc || (depth0 != null ? depth0.ImgSrc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ImgSrc","hash":{},"data":data}) : helper)))\n    + "\\" alt=\\""\n    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))\n    + "\\" class=\\"img-thumbnail\\">\\r\\n                        </div>\\r\\n                    </div>\\r\\n                    <div class=\\"col-sm-8\\">\\r\\n                        <h5>"\n    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))\n    + "</h5>\\r\\n                        <table class=\\"dantooine-table-book-tips\\">\\r\\n                            <tr>\\r\\n                                <td><strong>F&ouml;rfattare:</strong></td>\\r\\n                                <td><a class=\\"batuu-link\\" href=\\"#\\">"\n    + alias4(((helper = (helper = helpers.Author || (depth0 != null ? depth0.Author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Author","hash":{},"data":data}) : helper)))\n    + " </a></td>\\r\\n                            </tr>\\r\\n                            <tr>\\r\\n                                <td><strong>&Aring;lder:</strong></td>\\r\\n                                <td><a class=\\"batuu-link\\" href=\\"#\\">"\n    + alias4(((helper = (helper = helpers.LowAge || (depth0 != null ? depth0.LowAge : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"LowAge","hash":{},"data":data}) : helper)))\n    + " - "\n    + alias4(((helper = (helper = helpers.HighAge || (depth0 != null ? depth0.HighAge : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"HighAge","hash":{},"data":data}) : helper)))\n    + "</a></td>\\r\\n                            </tr>\\r\\n                            <tr>\\r\\n                                <td><strong>Boktipsare:</strong></td>\\r\\n                                <td><a class=\\"batuu-link\\" href=\\"#\\">"\n    + alias4(((helper = (helper = helpers.UserName || (depth0 != null ? depth0.UserName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"UserName","hash":{},"data":data}) : helper)))\n    + "</a></td>\\r\\n                            </tr>\\r\\n                        </table>\\r\\n                    </div>\\r\\n                    <div class=\\"col-12 my-4\\">\\r\\n                        <p>\\r\\n                            <em>\\r\\n                                "\n    + ((stack1 = ((helper = (helper = helpers.Review || (depth0 != null ? depth0.Review : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Review","hash":{},"data":data}) : helper))) != null ? stack1 : "")\n    + "\\r\\n                            </em>\\r\\n                        </p>\\r\\n                    </div>\\r\\n                </div>\\r\\n\\r\\n            </div>\\r\\n            <div class=\\"modal-footer\\">\\r\\n                <button type=\\"button\\" class=\\"btn btn-batuu-blue\\">Skriv ut boktipset</button>\\r\\n                <a href=\\"/tabid/1469/Default.aspx?bookid="\n    + alias4(((helper = (helper = helpers.Bookid || (depth0 != null ? depth0.Bookid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Bookid","hash":{},"data":data}) : helper)))\n    + "\\" type=\\"button\\" class=\\"btn btn-batuu-pink\\" data-bookid=\\""\n    + alias4(((helper = (helper = helpers.Bookid || (depth0 != null ? depth0.Bookid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Bookid","hash":{},"data":data}) : helper)))\n    + "\\">L&auml;s mer om boken</a>\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>";\n},"useData":true});\n\n//# sourceURL=webpack:///./htmlTemplate/tpl_boktipModal.hbs?');
    },
    "./htmlTemplate/tpl_boktipsListItem.hbs": function(module, exports, __webpack_require__) {
        eval('var Handlebars = __webpack_require__(/*! ../node_modules/handlebars/runtime.js */ "./node_modules/handlebars/runtime.js");\nfunction __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }\nmodule.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;\n\n  return "\\r\\n<div class=\\"p-2 batuu-book-width d-flex align-items-end batuu-background-row-booktip-item\\">    \\r\\n\\r\\n    <a href=\\"#aj_boktips_v3_Modal\\" class=\\"aj_boktips_v3_item\\" data-toggle=\\"modal\\" data-target=\\"#aj_boktips_v3_Modal\\" data-tipid=\\""\n    + alias4(((helper = (helper = helpers.TipID || (depth0 != null ? depth0.TipID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"TipID","hash":{},"data":data}) : helper)))\n    + "\\">\\r\\n        <div class=\\"text-center\\">\\r\\n            <div class=\\"batuu-book-img\\">\\r\\n                <img src=\\""\n    + alias4(((helper = (helper = helpers.ImgSrc || (depth0 != null ? depth0.ImgSrc : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ImgSrc","hash":{},"data":data}) : helper)))\n    + "\\" alt=\\""\n    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))\n    + "\\" class=\\"img-thumbnail\\">\\r\\n            </div>\\r\\n            <div class=\\"batuu-book-title\\">\\r\\n                <p class=\\"font-weight-bold my-1\\">"\n    + alias4(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Title","hash":{},"data":data}) : helper)))\n    + "</p>\\r\\n                <p class=\\"font-weight-light my-0\\">"\n    + alias4(((helper = (helper = helpers.Author || (depth0 != null ? depth0.Author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Author","hash":{},"data":data}) : helper)))\n    + "</p>\\r\\n            </div>\\r\\n        </div>               \\r\\n    </a>   \\r\\n\\r\\n</div>\\r\\n";\n},"3":function(container,depth0,helpers,partials,data) {\n    return "    <div class=\\"col alert-warning\\" >\\r\\n        <h2 >Kunde tyv&auml;rr inte hitta det du s&ouml;kte! :(</h2>  \\r\\n        <h3>Pr&ouml;va igen!</h3>   \\r\\n    </div>\\r\\n";\n},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {\n    var stack1;\n\n  return "\x3c!-- Loop start --\x3e\\r\\n"\n    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Boktips : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");\n},"useData":true});\n\n//# sourceURL=webpack:///./htmlTemplate/tpl_boktipsListItem.hbs?');
    }
});