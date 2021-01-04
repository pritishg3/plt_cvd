(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\nodePython\plotCVDline\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class DataService {
    constructor(http) {
        this.http = http;
        this.endpoint = 'http://localhost:3000/';
    }
    getIndiaData() {
        return this.http.get('https://api.covid19india.org/data.json').pipe((response) => response);
    }
    // response type is added here is: to saolve the problem of json parsing from http module.
    getWorldData() {
        return this.http.get('https://covid.ourworldindata.org/data/owid-covid-data.json', { responseType: 'text' }).pipe((response) => response);
    }
    getNodejsWrldData() {
        const api = `${this.endpoint}/wrlddata`;
        return this.http.get(api);
    }
    getIndianStateData() {
        return this.http.get('https://api.covid19india.org/v4/timeseries.json', { responseType: 'text' }).pipe((response) => response);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _display_cvd_info_display_cvd_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-cvd-info/display-cvd-info.component */ "cM0L");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'plotCVDline';
        this.messageTOSendP = 'Parent message';
        this.messageFromChild = 'Nothing';
    }
    getMessage(message) {
        this.messageFromChild = message;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-display-cvd-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_display_cvd_info_display_cvd_info_component__WEBPACK_IMPORTED_MODULE_1__["DisplayCvdInfoComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _get_cvdata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-cvdata.service */ "aSo/");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _display_cvd_info_display_cvd_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./display-cvd-info/display-cvd-info.component */ "cM0L");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_get_cvdata_service__WEBPACK_IMPORTED_MODULE_6__["GetCVDataService"], _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _display_cvd_info_display_cvd_info_component__WEBPACK_IMPORTED_MODULE_9__["DisplayCvdInfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _display_cvd_info_display_cvd_info_component__WEBPACK_IMPORTED_MODULE_9__["DisplayCvdInfoComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
                ],
                providers: [_get_cvdata_service__WEBPACK_IMPORTED_MODULE_6__["GetCVDataService"], _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aSo/":
/*!***************************************!*\
  !*** ./src/app/get-cvdata.service.ts ***!
  \***************************************/
/*! exports provided: GetCVDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCVDataService", function() { return GetCVDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





class GetCVDataService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.endpoint = 'http://localhost:3000/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.listData = [];
    }
    getCVData(cntry) {
        const api = `${this.endpoint}/cvd_newcases/${cntry}`;
        return this.http.get(api);
    }
    getTimedata(cntry) {
        const api = `${this.endpoint}/covid_19_timeseries/${cntry}`;
        return this.http.get(api, { headers: this.headers });
    }
}
GetCVDataService.ɵfac = function GetCVDataService_Factory(t) { return new (t || GetCVDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GetCVDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetCVDataService, factory: GetCVDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetCVDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "cM0L":
/*!****************************************************************!*\
  !*** ./src/app/display-cvd-info/display-cvd-info.component.ts ***!
  \****************************************************************/
/*! exports provided: DisplayCvdInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayCvdInfoComponent", function() { return DisplayCvdInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "LPYB");









function DisplayCvdInfoComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading data .... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cntry_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", cntry_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cntry_r8, " ");
} }
function DisplayCvdInfoComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading data .... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", state_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", state_r9, " ");
} }
function DisplayCvdInfoComponent_div_42_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Note!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Click on map for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " time series data.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "color": a0 }; };
function DisplayCvdInfoComponent_div_42_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r11.lstOfLabels[i_r14] === "Active" ? "red" : ctx_r11.lstOfLabels[i_r14] === "Confirmed" ? "orange" : ctx_r11.lstOfLabels[i_r14] === "Death" ? "red" : ctx_r11.lstOfLabels[i_r14] === "Recovered" ? "green" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.lstOfLabels[i_r14], " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("> ", data_r13, "");
} }
function DisplayCvdInfoComponent_div_42_div_16_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_div_42_div_16_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.toggleGraphState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_div_42_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisplayCvdInfoComponent_div_42_div_16_button_1_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.isUserClickedStateGraph);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r12.lineChartDataStates)("labels", ctx_r12.lineChartLabelsStates)("options", ctx_r12.lineChartOptionsStates)("colors", ctx_r12.lineChartColorsStates)("legend", ctx_r12.lineChartLegendStates)("chartType", ctx_r12.lineChartTypeStates)("plugins", ctx_r12.lineChartPluginsStates);
} }
function DisplayCvdInfoComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function DisplayCvdInfoComponent_div_42_Template_img_mouseover_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.style.cursor = "hand"; })("click", function DisplayCvdInfoComponent_div_42_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onSubmitStateData(ctx_r20.selectIS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_div_42_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.onSubmitStateData(ctx_r21.selectIS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DisplayCvdInfoComponent_div_42_div_8_Template, 7, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Data of Indian state of: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DisplayCvdInfoComponent_div_42_li_15_Template, 4, 5, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DisplayCvdInfoComponent_div_42_div_16_Template, 3, 8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.mapOfStateImages.India, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r7.mapOfStateImages[ctx_r7.selectIS], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.selectIS !== "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.selectIS, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.stateDatalst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.isUserClickedStateGraph && ctx_r7.selectIS !== "Total");
} }
class DisplayCvdInfoComponent {
    // --------
    constructor(ds, httpClient) {
        this.ds = ds;
        this.httpClient = httpClient;
        this.newCases = [];
        this.grNewCases = [];
        this.categoryOfGraph = 'nc';
        this.dates = [];
        // ----Preparing graph data structure --------------------
        this.lineChartData = [
            { data: [], label: '' },
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        }
                    }],
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of New cases/Growth rate'
                        }
                    }]
            }
        };
        this.lineChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(255,255,0,0.28)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
        this.isSubmitted = false;
        this.selectedS = 'Nothing';
        this.selectedSg = '';
        this.lstdata = [];
        this.numTotalcases = 10;
        // ----
        // -----World data structure ----
        this.cntryList = [];
        this.stateList = [];
        this.stateDatalst = [];
        this.lstOfLabels = ['Active', 'Confirmed', 'Death', 'Recovered'];
        this.isSDataClicked = false;
        this.selectedWS = '';
        this.selectedWSGr = '';
        this.selectIS = '';
        this.dictOfWorldCntryDates = {};
        this.dictOfStateData = {};
        this.neSelectedCntry = 'India';
        this.apiURL = 'https://www.techiediaries.com/api/data.json';
        // --- Indian states data structure --
        this.mapOfStateShorts = {
            'Andaman and Nicobar Islands': 'AN',
            'Andhra Pradesh': 'AP',
            'Arunachal Pradesh': 'AR',
            'Assam': 'AS',
            'Bihar': 'BR',
            'Chandigarh': 'CH',
            'Chhattisgarh': 'CT',
            'Dadra and Nagar Haveli': 'DN',
            'Daman and Diu': 'DD',
            'Delhi': 'DL',
            'Goa': 'GA',
            'Gujarat': 'GJ',
            'Haryana': 'HR',
            'Himachal Pradesh': 'HP',
            'Jammu and Kashmir': 'JK',
            'Jharkhand': 'JH',
            'Karnataka': 'KA',
            'Kerala': 'KL',
            'Lakshadweep': 'LD',
            'Madhya Pradesh': 'MP',
            'Maharashtra': 'MH',
            'Manipur': 'MN',
            'Meghalaya': 'ML',
            'Mizoram': 'MZ',
            'Nagaland': 'NL',
            'Odisha': 'OR',
            'Puducherry': 'PY',
            'Punjab': 'PB',
            'Rajasthan': 'RJ',
            'Sikkim': 'SK',
            'Tamil Nadu': 'TN',
            'Telangana': 'TG',
            'Tripura': 'TR',
            'Uttar Pradesh': 'UP',
            'Uttarakhand': 'UT',
            'West Bengal': 'WB'
        };
        this.mapOfStateImages = {
            'India': 'https://www.clipartkey.com/mpngs/m/240-2404321_india-map-png-pic-map-of-india-hd.png',
            'Andaman and Nicobar Islands': 'https://www.onefivenine.com/images/StateMaps/Andaman%20&%20Nicobar%20Islands.jpg',
            'Andhra Pradesh': 'https://upload.wikimedia.org/wikipedia/commons/3/36/Location_map_India_Andhra_Pradesh.png',
            'Arunachal Pradesh': 'https://www.arunachalpradesh.gov.in/wp-content/uploads/2017/08/anjaw.png',
            'Assam': 'https://paintmaps.com/og_image/map_chart/map_chart_238c.png',
            'Bihar': 'https://freepikpsd.com/wp-content/uploads/2019/10/bihar-map-png-8-Transparent-Images.png',
            'Chandigarh': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0yiG_ee--SPgNt7w64lP5n6fSeleHsLM1Q&usqp=CAU',
            'Chhattisgarh': 'https://img.favpng.com/8/2/6/naya-raipur-chhattisgarh-board-of-secondary-education-states-and-territories-of-india-map-png-favpng-nE0EGwcmhPxhSTnaq8v597axM.jpg',
            'Dadra and Nagar Haveli': 'https://i.pinimg.com/originals/ac/2a/83/ac2a832038303eb1f699661eac4fa086.png',
            'Daman and Diu': 'https://i.pinimg.com/originals/d7/21/90/d7219074deabd84c6b4bbbeb9dd8c62e.png',
            'Delhi': 'https://upload.wikimedia.org/wikipedia/commons/8/81/Delhi_Lok_Sabha_election_result.png',
            'Goa': 'https://i.pinimg.com/originals/66/a7/84/66a784c992b1da5722de5bca3db20b29.png',
            'Gujarat': 'https://diligentias.com/wp-content/uploads/2019/05/gujarat.png',
            'Haryana': 'https://banner2.cleanpng.com/20180621/oqq/kisspng-haryana-map-punjab-hindi-ssc-combined-graduate-lev-5b2bee23b42788.0031033215296056677379.jpg',
            'Himachal Pradesh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Himachal_Pradesh_district_map.png/1200px-Himachal_Pradesh_district_map.png',
            'Jammu and Kashmir': 'https://miro.medium.com/max/2612/1*ZsFrLv0hNtRfgZvo1nRM7w.png',
            'Jharkhand': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Jharkhand.png/800px-Jharkhand.png',
            'Karnataka': 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Karnataka-district-blank.png',
            'Kerala': 'https://upload.wikimedia.org/wikipedia/te/2/2a/Kerala-COVID-19-map.png',
            'Lakshadweep': 'https://i.pinimg.com/originals/52/76/17/5276175936a828dcc5fc6ec6844775f3.png',
            'Madhya Pradesh': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/India_Madhya_Pradesh_location_map.svg/1280px-India_Madhya_Pradesh_location_map.svg.png',
            'Maharashtra': 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Maharashtra_locator_map.png',
            'Manipur': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Manipur_districts_as.png',
            'Meghalaya': 'https://www.mapsofindia.com/maps/meghalaya/meghalaya-index-map-2020.jpg',
            'Mizoram': 'https://www.bragitoff.com/wp-content/uploads/2015/12/mizoram.png',
            'Nagaland': 'https://upload.wikimedia.org/wikipedia/commons/0/07/Nagaland_Map.png',
            'Odisha': 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Odisha.png',
            'Puducherry': 'https://www.wisevoter.org/assets/images/states/puducherry.png',
            'Punjab': 'https://punjab.gov.in/wp-content/uploads/2019/12/District-map_eng.png',
            'Rajasthan': 'https://img.favpng.com/8/3/2/jaipur-bikaner-udaipur-jodhpur-map-png-favpng-RuP9r8sqShYHeQrDYx1M23GP9.jpg',
            'Sikkim': 'https://i.pinimg.com/originals/2f/81/f8/2f81f8a362df281f0a98520b04005ffd.png',
            'Tamil Nadu': 'https://www.pngitem.com/pimgs/m/527-5271275_tamil-nadu-district-map-2019-hd-png-download.png',
            'Telangana': 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Telangana-map-mal.png',
            'Tripura': 'https://www.onefivenine.com/images/StateMaps/Tripura.jpg',
            'Uttar Pradesh': 'https://pbdindia.gov.in/assets/images/uttar-pradesh-map.png',
            'Uttarakhand': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Uttarakhand_locator_map.svg/1250px-Uttarakhand_locator_map.svg.png',
            'West Bengal': 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Administrative_Divisions_Map_of_West_Bengal.png'
        };
        this.lstOfNwStateCases = [];
        this.lstOfStateDates = [];
        this.mapOfStateDtandCnfCases = {};
        // ---- Graph data for states -------
        this.lineChartDataStates = [
            { data: [], label: '' },
        ];
        this.lineChartLabelsStates = [];
        this.lineChartOptionsStates = {
            responsive: true,
            scales: {
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: ''
                        }
                    }],
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Number of New cases'
                        }
                    }]
            }
        };
        this.lineChartColorsStates = [
            {
                borderColor: 'black',
                backgroundColor: 'rgba(255,255,0,0.28)',
            },
        ];
        this.lineChartLegendStates = true;
        this.lineChartPluginsStates = [];
        this.lineChartTypeStates = 'line';
        this.nSelectedState = '';
        this.isUserClickedStateGraph = false;
    }
    onSubmit(numVal) {
        this.categoryOfGraph = 'nc';
        this.numTotalcases = numVal;
        this.refreshData();
    }
    refreshData() {
        if (this.categoryOfGraph === 'nc') {
            this.lineChartData[0].data = this.newCases.slice((this.newCases.length - this.numTotalcases), this.newCases.length);
            this.lineChartData[0].label = 'Covid Analysis data for country: ' + this.neSelectedCntry;
            this.lineChartLabels = this.dates.slice((this.dates.length - this.numTotalcases), this.dates.length);
        }
        else if (this.categoryOfGraph === 'gr') {
            this.lineChartData[0].data = this.grNewCases.slice((this.grNewCases.length - this.numTotalcases), this.grNewCases.length);
            this.lineChartData[0].label = 'Growth rate Covid Analysis data for country: ' + this.neSelectedCntry;
            this.lineChartLabels = this.dates.slice((this.dates.length - this.numTotalcases), this.dates.length);
        }
    }
    refreshDataStates() {
        this.lineChartDataStates[0].data = this.lstOfNwStateCases
            .slice((this.lstOfNwStateCases.length - this.numTotalcases), this.lstOfNwStateCases.length);
        this.lineChartDataStates[0].label = 'Covid Analysis data for Indian State: ' + this.nSelectedState;
        this.lineChartLabelsStates = this.lstOfStateDates;
        let len = this.lstOfStateDates.length;
        // .slice((this.lstOfStateDates.length - this.numTotalcases), this.lstOfStateDates.length);
        this.lineChartOptionsStates.scales.xAxes[0].scaleLabel.labelString = 'Data of last ' + len + ' days';
    }
    onSubmitWorldData(cntryName) {
        this.neSelectedCntry = cntryName;
        this.categoryOfGraph = 'nc';
        if (cntryName !== undefined) {
            this.newCases = this.dictOfWorldCntryDates[cntryName][`nw_cases`];
            this.dates = this.dictOfWorldCntryDates[cntryName][`dt`];
            this.refreshData();
        }
    }
    onSubmitWorldGrData(cntryName) {
        this.newCases = this.dictOfWorldCntryDates[cntryName][`nw_cases`];
        this.dates = this.dictOfWorldCntryDates[cntryName][`dt`];
        for (let i = 0; i <= this.newCases.length; i++) {
            if ((i + 1) < this.newCases.length) {
                const grTemp = this.newCases[i + 1] / this.newCases[i];
                this.grNewCases.push(grTemp);
            }
        }
        this.categoryOfGraph = 'gr';
        this.refreshData();
    }
    onSubmitStateData(state) {
        this.isUserClickedStateGraph = true;
        const tmpVal = this.mapOfStateShorts[state];
        this.nSelectedState = state;
        this.lstOfNwStateCases = this.mapOfStateDtandCnfCases[tmpVal][`nw_cases`];
        this.lstOfStateDates = [];
        for (let i = 0; i < this.numTotalcases; i++) {
            this.lstOfStateDates.push(i + 1);
        }
        // this.mapOfStateDtandCnfCases[tmpVal][`dt`];
        this.refreshDataStates();
    }
    toggleGraphState() {
        this.isUserClickedStateGraph = false;
    }
    refreshState(stateName) {
        this.isSDataClicked = true;
        this.stateDatalst = this.dictOfStateData[stateName];
    }
    ngOnInit() {
        this.ds.getIndiaData().subscribe(response => {
            this.completeCVDData = response;
            // console.log(this.completeCVDData);
            for (const i of Object.keys(this.completeCVDData)) {
                // console.log('For the key :', i);
                // console.log(this.completeCVDData[i]);
                if (i === 'statewise') {
                    for (const data of this.completeCVDData[i]) {
                        this.stateList.push(data[`state`]);
                        this.dictOfStateData[data[`state`]] = [];
                        this.dictOfStateData[data[`state`]].push(data[`active`]);
                        this.dictOfStateData[data[`state`]].push(data[`confirmed`]);
                        this.dictOfStateData[data[`state`]].push(data[`deaths`]);
                        this.dictOfStateData[data[`state`]].push(data[`recovered`]);
                    }
                }
                if (i === 'cases_time_series') {
                    for (const val of this.completeCVDData[i]) {
                        // console.log('Val:');
                        // console.log(val[`dailyconfirmed`]);
                        // console.log(val[`dateymd`]);
                        if (val[`dailyconfirmed`] !== undefined) {
                            this.newCases.push(val[`dailyconfirmed`]);
                            this.dates.push(val[`dateymd`]);
                        }
                        else {
                            this.newCases.push(0);
                            this.dates.push(val[`dateymd`]);
                        }
                    }
                }
            }
            // this.lineChartData[0].data = this.newCases.slice((this.newCases.length - this.numTotalcases), this.newCases.length);
            // this.lineChartData[0].label = 'CVD Anal data for country: ' + 'India';
            // this.lineChartLabels = this.dates.slice((this.dates.length - this.numTotalcases), this.dates.length);
            this.categoryOfGraph = 'nc';
            this.refreshData();
        });
        // -- Getting world data for demonstrating world data and multiple chaining or error handling.
        this.ds.getWorldData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            console.log('Throwing error', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            console.log('Throwing error again:', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        })).subscribe(result => {
            // console.log(result);
            this.completeWrldCVDdata = JSON.parse(result);
            for (const keys of Object.keys(this.completeWrldCVDdata)) {
                this.cntryList.push(this.completeWrldCVDdata[keys][`location`]);
                // console.log(this.completeWrldCVDdata[keys][`location`]);
                this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]] = {};
                this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`nw_cases`] = [];
                this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`dt`] = [];
                for (const vals of this.completeWrldCVDdata[keys][`data`]) {
                    this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`nw_cases`].push(vals[`new_cases`]);
                    this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`dt`].push(vals[`date`]);
                }
            }
        }, err => {
            console.log('World Data Erorr: ', err);
        }, () => {
            console.log('HTTP request completed');
        });
        // --------- Other urls for demonstrating the promise and async and await.
        const promised = this.httpClient.get(this.apiURL).toPromise();
        console.log(promised);
        promised.then((data) => {
            // console.log('Promise resolved with: ', data);
        }).catch((err) => {
            console.log('Error: ', err);
        });
        // ---- Nodejs world data ----
        /*this.ds.getNodejsWrldData().subscribe( (response) => {
           console.log('Nodejs World data : ');
           console.log(response);
        });*/
        // --- Indian statewise data -----
        this.ds.getIndianStateData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            console.log('Throwing error', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            console.log('Throwing error again:', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        })).subscribe((result) => {
            this.completeIndianStateData = JSON.parse(result);
            for (const stateData of Object.keys(this.completeIndianStateData)) {
                this.mapOfStateDtandCnfCases[stateData] = {};
                this.mapOfStateDtandCnfCases[stateData][`dt`] = [];
                this.mapOfStateDtandCnfCases[stateData][`nw_cases`] = [];
                for (const datesob of Object.keys(this.completeIndianStateData[stateData][`dates`])) {
                    this.mapOfStateDtandCnfCases[stateData][`dt`].push(datesob);
                    for (const objdelta of Object.keys(this.completeIndianStateData[stateData][`dates`][datesob])) {
                        if (objdelta === 'delta') {
                            this.mapOfStateDtandCnfCases[stateData][`nw_cases`]
                                .push(this.completeIndianStateData[stateData][`dates`][datesob][objdelta][`confirmed`]);
                        }
                    }
                }
            }
            // console.log('Map of state and data :');
            // console.log(this.mapOfStateDtandCnfCases);
        }, err => {
            console.log('Indian state Data Erorr: ', err);
        }, () => {
            console.log('HTTP request completed: for Indian state');
        });
    }
    ngOnDestroy() {
        this.completeWrldCVDdata.unsubscribe();
    }
}
DisplayCvdInfoComponent.ɵfac = function DisplayCvdInfoComponent_Factory(t) { return new (t || DisplayCvdInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
DisplayCvdInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayCvdInfoComponent, selectors: [["app-display-cvd-info"]], decls: 44, vars: 16, consts: [["align", "center", 2, "color", "blue"], [1, "container"], [1, "row"], [1, "column"], ["for", "quantity", 2, "color", "brown", "font-weight", "bold"], ["type", "number", "id", "qantity", "name", "quantity", "value", "10", "min", "10", "max", "260"], ["quantity", ""], [1, "btn", "btn-primary", 3, "click"], [2, "color", "brown", "font-weight", "bold"], [4, "ngIf"], [3, "ngModel", "disabled", "ngModelChange", "change"], ["cnName", ""], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["baseChart", "", "width", "200", "height", "70", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"], ["class", "row", 4, "ngIf"], [3, "ngValue"], [1, "column", 2, "background-color", "whitesmoke"], ["width", "150", "height", "250", 3, "src", "mouseover", "click"], ["width", "20", "height", "20", "src", "https://www.pngitem.com/pimgs/m/514-5145836_transparent-blinking-clipart-animated-arrow-png-gif-png.png"], ["width", "70", "height", "90", 3, "src", "click"], ["class", "info", 4, "ngIf"], [2, "font-weight", "bold"], [4, "ngFor", "ngForOf"], ["class", "column", "style", "background-color: whitesmoke;", 4, "ngIf"], [1, "info"], [3, "ngStyle"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["baseChart", "", "width", "400", "height", "250", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"]], template: function DisplayCvdInfoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " COVID-19 ANALYSIS !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose range of days (between 10 and 260):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); return ctx.onSubmit(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Visualize world info: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DisplayCvdInfoComponent_span_18_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisplayCvdInfoComponent_Template_select_ngModelChange_20_listener($event) { return ctx.selectedWS = $event; })("change", function DisplayCvdInfoComponent_Template_select_change_20_listener() { return ctx.onSubmitWorldData(ctx.selectedWS); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Choose your country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DisplayCvdInfoComponent_option_24_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_Template_button_click_26_listener() { return ctx.onSubmitWorldGrData(ctx.selectedWS); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "New Cases Growth Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "canvas", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Choose Indian state to visualize specific info: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DisplayCvdInfoComponent_span_35_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisplayCvdInfoComponent_Template_select_ngModelChange_36_listener($event) { return ctx.selectIS = $event; })("change", function DisplayCvdInfoComponent_Template_select_change_36_listener() { return ctx.refreshState(ctx.selectIS); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Choose your state");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DisplayCvdInfoComponent_option_40_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DisplayCvdInfoComponent_div_42_Template, 17, 6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.completeWrldCVDdata === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedWS)("disabled", ctx.completeWrldCVDdata === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cntryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.completeCVDData === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectIS)("disabled", ctx.completeCVDData === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSDataClicked);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["BaseChartDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]], styles: ["caption[_ngcontent-%COMP%] {\r\n  border: 2px solid #eeeeee;\r\n\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n   outline: 1px solid;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n  column-gap:10px;\r\n  padding: 20px;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.info[_ngcontent-%COMP%] {\r\n  background-color: #e7f3fe;\r\n  border-left: 4px solid #2196F3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS1jdmQtaW5mby9kaXNwbGF5LWN2ZC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7O0FBRTNCO0FBQ0E7R0FDRyxrQkFBa0I7QUFDckI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9kaXNwbGF5LWN2ZC1pbmZvL2Rpc3BsYXktY3ZkLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhcHRpb24ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWVlZWU7XHJcblxyXG59XHJcbnRhYmxlIHtcclxuICAgb3V0bGluZTogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBzaXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4uY29sdW1uIHtcclxuICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjNmZTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyMTk2RjM7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayCvdInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-cvd-info',
                templateUrl: './display-cvd-info.component.html',
                styleUrls: ['./display-cvd-info.component.css']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _display_cvd_info_display_cvd_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-cvd-info/display-cvd-info.component */ "cM0L");





const routes = [
    {
        path: 'data',
        component: _display_cvd_info_display_cvd_info_component__WEBPACK_IMPORTED_MODULE_2__["DisplayCvdInfoComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map