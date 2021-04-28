(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\plotCVD\sourcePltCvd\src\main.ts */"zUnb");


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
    getIndianDistrictData() {
        let url = 'https://api.covid19india.org/state_district_wise.json';
        return this.http.get(url, { responseType: 'text' }).pipe((response) => response);
    }
    getCurrentWorldDataByCountry(cntryName = 'India') {
        //let url = 'https://covid2019-api.herokuapp.com/v2/country/' + cntryName;
        let url = 'https://covid2019-api.herokuapp.com/v2/current';
        return this.http.get(url, { responseType: 'json' }).pipe((response) => response);
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");












/*import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import { MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon' */
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_get_cvdata_service__WEBPACK_IMPORTED_MODULE_6__["GetCVDataService"], _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _display_cvd_info_display_cvd_info_component__WEBPACK_IMPORTED_MODULE_9__["DisplayCvdInfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]] }); })();
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
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
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
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! papaparse */ "NpuA");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "LPYB");










function DisplayCvdInfoComponent_label_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cntry_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cntry_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cntry_r16, " ");
} }
function DisplayCvdInfoComponent_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Total vaccinations : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx_r3.totalVccnLatest, "2."), " ");
} }
function DisplayCvdInfoComponent_div_25_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Awaiting update on new cases.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New cases : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DisplayCvdInfoComponent_div_25_span_10_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "New vaccinations :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Latest info as on date ", ctx_r4.newCasesWrdDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r4.newCasesReportedWrld, "2."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.newCasesReportedWrld === 0 || ctx_r4.newCasesReportedWrld === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 8, ctx_r4.newVaccnLatest, "2."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.msgVaccnnew);
} }
function DisplayCvdInfoComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Total Confirmed cases : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total Recoveries : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Total Active cases : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Consolidated data : ", ctx_r5.selectedWS, " Updated on ", ctx_r5.tmpStampOfLatestUpdate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx_r5.dataWrldCnf, "2."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 8, ctx_r5.dataWrldRecvrd, "2."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 11, ctx_r5.dataWrldActive, "2."), " ");
} }
function DisplayCvdInfoComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Data of Indian states reporting less than thousand or equivalent new cases in last 24 - 48 hrs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "marquee", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.strStatenum);
} }
function DisplayCvdInfoComponent_label_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", state_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", state_r18, " ");
} }
function DisplayCvdInfoComponent_div_61_div_6_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r23.latestNwStateCase, " new cases.");
} }
function DisplayCvdInfoComponent_div_61_div_6_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r24.latestRcvdStateCase, " recoveries.");
} }
function DisplayCvdInfoComponent_div_61_div_6_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r25.latestStateDatanewVaccn, "2."), " newly vaccinated. ");
} }
function DisplayCvdInfoComponent_div_61_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DisplayCvdInfoComponent_div_61_div_6_p_4_Template, 2, 1, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DisplayCvdInfoComponent_div_61_div_6_p_5_Template, 2, 1, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DisplayCvdInfoComponent_div_61_div_6_p_6_Template, 3, 4, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reporting dated: ", ctx_r19.latestStateDatadate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.latestNwStateCase !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.latestRcvdStateCase !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.latestStateDatanewVaccn !== "");
} }
const _c0 = function (a0) { return { "color": a0 }; };
function DisplayCvdInfoComponent_div_61_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r20.lstOfLabels[i_r27] === "Active" ? "red" : ctx_r20.lstOfLabels[i_r27] === "Confirmed" ? "orange" : ctx_r20.lstOfLabels[i_r27] === "Death" ? "red" : ctx_r20.lstOfLabels[i_r27] === "Recovered" ? "green" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.lstOfLabels[i_r27], " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 3, data_r26, "2."));
} }
function DisplayCvdInfoComponent_div_61_div_22_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dt_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dt_r31.key, ": \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, dt_r31.value, "2."), " ");
} }
function DisplayCvdInfoComponent_div_61_div_22_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisplayCvdInfoComponent_div_61_div_22_ul_5_li_1_Template, 6, 5, "li", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r29));
} }
function DisplayCvdInfoComponent_div_61_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Top 5 districts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " with most active cases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DisplayCvdInfoComponent_div_61_div_22_ul_5_Template, 3, 3, "ul", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.lstMostActiveofObj);
} }
function DisplayCvdInfoComponent_div_61_div_23_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dtr_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", dtr_r35.key, ": \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dtr_r35.value, " ");
} }
function DisplayCvdInfoComponent_div_61_div_23_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisplayCvdInfoComponent_div_61_div_23_ul_5_li_1_Template, 5, 2, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const itemr_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, itemr_r33));
} }
function DisplayCvdInfoComponent_div_61_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Top 5 districts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " with most recoveries [In %]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DisplayCvdInfoComponent_div_61_div_23_ul_5_Template, 3, 3, "ul", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.lstMostRecoveredObj);
} }
function DisplayCvdInfoComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_div_61_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.onSubmitStateData(ctx_r36.selectIS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DisplayCvdInfoComponent_div_61_div_6_Template, 7, 4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Consolidated data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DisplayCvdInfoComponent_div_61_li_21_Template, 7, 8, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DisplayCvdInfoComponent_div_61_div_22_Template, 6, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DisplayCvdInfoComponent_div_61_div_23_Template, 6, 1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.mapOfStateImages[ctx_r11.selectIS], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.selectIS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.selectIS !== "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total vaccinations till date ", ctx_r11.latestVaccineDate, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.noOfVaccineAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.selectIS, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.stateDatalst);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.selectIS !== "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.selectIS !== "Total");
} }
function DisplayCvdInfoComponent_div_62_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_div_62_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.toggleGraphState(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hide Graph");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DisplayCvdInfoComponent_div_62_button_3_Template, 2, 0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx_r12.lineChartDataStates)("labels", ctx_r12.lineChartLabelsStates)("options", ctx_r12.lineChartOptionsStates)("colors", ctx_r12.lineChartColorsStates)("legend", ctx_r12.lineChartLegendStates)("chartType", ctx_r12.lineChartTypeStates)("plugins", ctx_r12.lineChartPluginsStates);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.isUserClickedStateGraph);
} }
function DisplayCvdInfoComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select a valid state first to visualize district specific data. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_ng_template_71_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", item_r46.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r46.key, " ");
} }
function DisplayCvdInfoComponent_ng_template_71_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Click on state map to enable district selection. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_ng_template_71_marquee_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "marquee", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r44.dstSpecificNote);
} }
function DisplayCvdInfoComponent_ng_template_71_div_13_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r50 = ctx.$implicit;
    const i_r51 = ctx.index;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, i_r51 === 0 ? "red" : i_r51 === 1 ? "orange" : i_r51 === 2 ? "red" : i_r51 === 3 ? "green" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r47.lstOfLabels[i_r51], " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, data_r50, "2."));
} }
function DisplayCvdInfoComponent_ng_template_71_div_13_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Note:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Today's district data may take some time to update.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please visit this section later in the day. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DisplayCvdInfoComponent_ng_template_71_div_13_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data1_r52 = ctx.$implicit;
    const j_r53 = ctx.index;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, j_r53 === 0 ? "red" : j_r53 === 1 ? "red" : j_r53 === 2 ? "green" : ""))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, j_r53 === 0 ? "red" : j_r53 === 1 ? "red" : j_r53 === 2 ? "green" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r49.lstOfTodayLabels[j_r53], " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, data1_r52, "2."));
} }
function DisplayCvdInfoComponent_ng_template_71_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DisplayCvdInfoComponent_ng_template_71_div_13_li_6_Template, 6, 8, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DisplayCvdInfoComponent_ng_template_71_div_13_div_11_Template, 6, 0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DisplayCvdInfoComponent_ng_template_71_div_13_li_13_Template, 6, 11, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Consolidated Data : ", ctx_r45.selectDist, " district");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.lstofDistData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Today's Data : ", ctx_r45.selectDist, " district");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r45.isEveryItemzeroTodaylstdata);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.lstofTodayDistData);
} }
function DisplayCvdInfoComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisplayCvdInfoComponent_ng_template_71_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.selectDist = $event; })("change", function DisplayCvdInfoComponent_ng_template_71_Template_input_change_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.onSubmitDistData(ctx_r56.selectDist); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "datalist", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Choose district for district specific data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DisplayCvdInfoComponent_ng_template_71_option_9_Template, 2, 2, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DisplayCvdInfoComponent_ng_template_71_span_11_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DisplayCvdInfoComponent_ng_template_71_marquee_12_Template, 2, 1, "marquee", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DisplayCvdInfoComponent_ng_template_71_div_13_Template, 14, 5, "div", 85);
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Choose districts from the state: ", ctx_r15.selectIS, " for more details: \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r15.selectDist)("disabled", ctx_r15.dstSpecificNote !== "" && ctx_r15.isDataOuDated(ctx_r15.dstSpecificNote));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx_r15.onlyDstData));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.dstSpecificNote !== "" && ctx_r15.isDataOuDated(ctx_r15.dstSpecificNote));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.dstSpecificNote !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.selectDist !== "");
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
                            labelString: 'Number of New cases'
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
        this.isDaysModified = false;
        // ----
        // -----World data structure ----
        this.cntryList = [];
        this.stateList = [];
        this.stateDatalst = [];
        this.lstOfLabels = ['Active', 'Confirmed', 'Deaths', 'Recoveries'];
        this.lstOfTodayLabels = ['New cases', 'Deaths', 'Recoveries'];
        this.isSDataClicked = false;
        this.oldStateData = "";
        this.isStateValueChanged = false;
        this.lastdateNewVccnUpdated = '';
        this.selectedWS = '';
        this.selectedWSGr = '';
        this.selectIS = '';
        this.selectDist = '';
        this.dictOfWorldCntryDates = {};
        this.dictOfWorldCntryVaccine = {};
        this.dictOfStateData = {};
        this.neSelectedCntry = 'India';
        this.apiURL = 'https://www.techiediaries.com/api/data.json';
        this.ltThousandCases = {};
        this.dstNameNoteMap = {};
        //dstActiveCaseMap = {};
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
        this.tiles = [
            // {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
            // {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
            // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
            // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
            { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
            { text: 'Five', cols: 1, rows: 1, color: '#DDBDF1' },
            { text: 'Six', cols: 1, rows: 1, color: '#DDBDF1' },
            { text: 'Seven', cols: 2, rows: 1, color: '#DDBDF1' }
        ];
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
        this.lstofNwStateRcvs = [];
        this.lstOfNwStateVaccinations = [];
        this.lstOfTotalStateVaccinations = [];
        this.latestNwStateCase = '';
        this.latestRcvdStateCase = '';
        this.latestStateDatadate = '';
        this.latestStateDatanewVaccn = '';
        this.lstOfStateDates = [];
        this.lstofSTateOrigdates = [];
        this.mapOfStateDtandCnfCases = {};
        this.currDstData = {};
        this.lstofDistData = [];
        this.lstofTodayDistData = [];
        this.isEveryItemzeroTodaylstdata = false;
        this.dstSpecificNote = '';
        //  myFinalObj = new Map();
        this.lstMostActiveofObj = [];
        this.isUserClickedDistData = false;
        this.lstMostRecoveredObj = [];
        this.vaccineDataLst = {};
        this.vaccineStateMap = {};
        this.noOfVaccineAdmin = '';
        this.latestVaccineDate = '';
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
        this.newCasesReportedWrld = '';
        this.newCasesWrdDate = '';
        this.newVaccnLatest = '';
        this.msgVaccnnew = '';
        this.totalVccnLatest = '';
        this.mapOfCntryConsolidatedCases = {};
        this.dateOFCntryConsolidatedCases = '';
        this.dataWrldCnf = '';
        this.dataWrldDeaths = '';
        this.dataWrldRecvrd = '';
        this.dataWrldActive = '';
        this.marqueeToggle = false;
    }
    onSubmit(numVal) {
        this.categoryOfGraph = 'nc';
        this.numTotalcases = numVal;
        this.isDaysModified = true;
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
        if (this.lstOfNwStateCases[this.lstOfNwStateCases.length - 1] !== undefined) {
            this.latestNwStateCase = this.getNumberWithCommas(this.lstOfNwStateCases[this.lstOfNwStateCases.length - 1]);
        }
        if (this.lstofNwStateRcvs[this.lstofNwStateRcvs.length - 1] !== undefined) {
            this.latestRcvdStateCase = this.getNumberWithCommas(this.lstofNwStateRcvs[this.lstofNwStateRcvs.length - 1]);
        }
        let date = '';
        if (this.lstofNwStateRcvs.length === this.lstofSTateOrigdates.length ||
            this.lstOfNwStateVaccinations.length === this.lstofSTateOrigdates.length ||
            this.lstOfNwStateCases.length === this.lstofSTateOrigdates.length) {
            date = this.lstofSTateOrigdates[this.lstofSTateOrigdates.length - 1];
        }
        else {
            date = this.lstofSTateOrigdates[this.lstofSTateOrigdates.length - 2];
        }
        this.latestStateDatadate = date;
        if (this.lstOfNwStateVaccinations[this.lstOfNwStateVaccinations.length - 1] !== undefined) {
            this.latestStateDatanewVaccn = this.lstOfNwStateVaccinations[this.lstOfNwStateVaccinations.length - 1];
        }
        // console.log(this.lstofSTateOrigdates);
        // console.log('Date : ',date);
        // console.log('Newly vaccinated peoples in state')
        // console.log(this.latestStateDatanewVaccn)
    }
    getMarqueeToggleOthers() {
        this.marqueeToggle = false;
    }
    getMarqueeToggle() {
        if (this.marqueeToggle === false) {
            this.marqueeToggle = true;
        }
        else {
            this.marqueeToggle = false;
        }
    }
    onSubmitWorldData(cntryName) {
        this.neSelectedCntry = cntryName;
        this.categoryOfGraph = 'nc';
        if (cntryName !== undefined) {
            this.newCases = this.dictOfWorldCntryDates[cntryName][`nw_cases`];
            this.dates = this.dictOfWorldCntryDates[cntryName][`dt`];
            this.newCasesReportedWrld = this.newCases[this.newCases.length - 1];
            this.newCasesWrdDate = this.dates[this.dates.length - 1];
            //console.log('Latest new',this.newCasesReportedWrld);
            if (this.dictOfWorldCntryDates[cntryName][`new_vccn`][this.dictOfWorldCntryDates[cntryName][`new_vccn`].length - 1]) {
                this.newVaccnLatest = this.dictOfWorldCntryDates[cntryName][`new_vccn`][this.dictOfWorldCntryDates[cntryName][`new_vccn`].length - 1];
                if (this.dictOfWorldCntryDates[cntryName][`new_vccn`].length !== this.dates.length) {
                    this.msgVaccnnew = '*This information is last updated on date : ' +
                        this.lastdateNewVccnUpdated;
                }
                else {
                    this.msgVaccnnew = '';
                }
            }
            else {
                this.newVaccnLatest = '';
                this.msgVaccnnew = 'Not available';
                //this.newVaccnLatest = 'Not available';
            }
            if (this.dictOfWorldCntryDates[cntryName][`total_vccn`][this.dictOfWorldCntryDates[cntryName][`total_vccn`].length - 1]) {
                if (cntryName === 'India') {
                    this.totalVccnLatest = this.vaccineStateMap[`Total`];
                }
                else {
                    this.totalVccnLatest = this.dictOfWorldCntryDates[cntryName][`total_vccn`][this.dictOfWorldCntryDates[cntryName][`total_vccn`].length - 1];
                }
            }
            else {
                this.totalVccnLatest = 'Not available';
            }
            //=------ country specific data sets with current covid cases statistics ----    
            if (this.mapOfCntryConsolidatedCases[cntryName]) {
                this.dataWrldCnf = this.mapOfCntryConsolidatedCases[cntryName][`confirmed`];
                this.dataWrldRecvrd = this.mapOfCntryConsolidatedCases[cntryName][`recovered`];
                this.dataWrldActive = this.mapOfCntryConsolidatedCases[cntryName][`active`];
            }
            else {
                this.dataWrldCnf = '';
                this.dataWrldRecvrd = '';
                this.dataWrldActive = '';
            }
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
        //this.isDaysModified = false;
        const tmpVal = this.mapOfStateShorts[state];
        this.nSelectedState = state;
        this.lstOfNwStateCases = this.mapOfStateDtandCnfCases[tmpVal][`nw_cases`];
        this.lstofNwStateRcvs = this.mapOfStateDtandCnfCases[tmpVal][`nw_rcvs`];
        this.lstofSTateOrigdates = this.mapOfStateDtandCnfCases[tmpVal][`dt`];
        this.lstOfNwStateVaccinations = this.mapOfStateDtandCnfCases[tmpVal][`nw_vcnated`];
        this.lstOfStateDates = [];
        for (let i = 0; i < this.numTotalcases; i++) {
            this.lstOfStateDates.push(i + 1);
        }
        /*var x = document.getElementById("srvDistSection");
        if(this.selectIS !== this.oldStateData) {
          this.isStateValueChanged = true;
          x.style.display = "none";
        }
        else {
          this.isStateValueChanged = false;
          x.style.display = "block";
        } */
        // this.mapOfStateDtandCnfCases[tmpVal][`dt`];
        this.isSDataClicked = true;
        this.oldStateData = this.selectIS;
        this.stateDatalst = this.dictOfStateData[state];
        //this.refreshDists();
        this.noOfVaccineAdmin = this.getNumberWithCommas(this.vaccineStateMap[this.selectIS]);
        this.latestVaccineDate = this.vaccineStateMap[`State`];
        this.refreshDataStates();
        this.refreshDists();
    }
    refreshDists() {
        //  ------ distruct wise code --- new one
        let found = false;
        this.dstSpecificNote = '';
        this.dstNameNoteMap = {};
        let dstActiveCaseMap = {};
        let dstRecoverCaseMap = {};
        let dstRecoveryRateMap = {};
        for (let key of Object.keys(this.districtWiseCvdDataInd)) {
            if (key === this.selectIS) {
                found = true;
                this.onlyDstData = this.districtWiseCvdDataInd[key][`districtData`];
                for (let objk of Object.keys(this.onlyDstData)) {
                    this.currDstData[objk] = [];
                    for (let obk of Object.keys(this.onlyDstData[objk])) {
                        if (obk === 'active') {
                            this.currDstData[objk].push(this.onlyDstData[objk][obk]);
                            dstActiveCaseMap[objk] = Number(this.onlyDstData[objk][obk]);
                        }
                        else if (obk === 'notes') {
                            this.dstNameNoteMap[objk] = this.onlyDstData[objk][obk];
                            //this.dstSpecificNote = this.onlyDstData[objk][obk];              
                        }
                        else if (obk === 'confirmed') {
                            this.currDstData[objk].push(this.onlyDstData[objk][obk]);
                        }
                        else if (obk === 'deceased') {
                            this.currDstData[objk].push(this.onlyDstData[objk][obk]);
                        }
                        else if (obk === 'recovered') {
                            this.currDstData[objk].push(this.onlyDstData[objk][obk]);
                            dstRecoverCaseMap[objk] = Number(this.onlyDstData[objk][obk]);
                            let rRateNum = (Number(this.onlyDstData[objk][obk]) / Number(this.onlyDstData[objk][`confirmed`])) * 100;
                            //console.log(rRateNum);
                            if (!isNaN(rRateNum)) {
                                dstRecoveryRateMap[objk] = rRateNum.toFixed(2);
                            }
                        }
                        else if (obk === 'delta') {
                            for (let ob of Object.keys(this.onlyDstData[objk][obk])) {
                                if (ob === 'confirmed') {
                                    this.currDstData[objk].push(this.onlyDstData[objk][obk][ob]);
                                }
                                else if (ob === 'deceased') {
                                    this.currDstData[objk].push(this.onlyDstData[objk][obk][ob]);
                                }
                                else if (ob === 'recovered') {
                                    this.currDstData[objk].push(this.onlyDstData[objk][obk][ob]);
                                }
                            }
                        }
                    }
                }
            }
            if (found === true) {
                break;
            }
        }
        this.lstMostActiveofObj = this.getMostOfSomeAttributeData(dstActiveCaseMap);
        this.lstMostRecoveredObj = this.getMostOfSomeAttributeData(dstRecoverCaseMap);
        /* console.log('recoveries are :');
         console.log(this.lstMostRecoveredObj);
         console.log('Rec rate is :');
         console.log(dstRecoveryRateMap); */
        this.lstMostRecoveredObj = [];
        this.lstMostRecoveredObj = this.getMostOfSomeAttributeData(dstRecoveryRateMap);
    }
    getMostOfSomeAttributeData(objData, numRed = 5) {
        let lsttmp = {};
        lsttmp = Object.entries(objData)
            .sort((a, b) => a[1] <= b[1] ? -1 : 1)
            .reduce((acc, pair) => {
            acc[pair[0]] = pair[1];
            return acc;
        }, {});
        //console.log(lsttmp); 
        let finalData = Object.keys(lsttmp).slice(Object.keys(lsttmp).length - numRed, Object.keys(lsttmp).length).map(key => ({ [key]: lsttmp[key] }));
        finalData.reverse();
        return finalData;
    }
    // un-used function just to get the sorted n values by passing obj and nth number
    sortObjectEntries(obj, n) {
        let sortedList = [];
        //Sorting by values asc
        sortedList = Object.entries(obj).sort((a, b) => {
            if (b[1] > a[1])
                return 1;
            else if (b[1] < a[1])
                return -1;
            //if values are same do edition checking if keys are in the right order
            else {
                if (a[0] > b[0])
                    return 1;
                else if (a[0] < b[0])
                    return -1;
                else
                    return 0;
            }
        });
        // return first n values from sortedList
        return sortedList.map(el => el[0]).slice(0, n);
    }
    onSubmitDistData(distName) {
        this.lstofDistData = [];
        this.lstofTodayDistData = [];
        this.dstSpecificNote = '';
        this.isUserClickedDistData = true;
        // var x = document.getElementById("srvDistSection");
        // x.style.display = "block";
        //this.lstofDistData = this.currDstData[distName];
        for (let i = 0; i < this.currDstData[distName].length; i++) {
            if (i === 0 || i === 1 || i === 2 || i === 3) {
                this.lstofDistData.push(this.currDstData[distName][i]);
            }
            else if (i > 3) {
                this.lstofTodayDistData.push(this.currDstData[distName][i]);
            }
        }
        this.dstSpecificNote = this.dstNameNoteMap[distName];
        this.isEveryItemzeroTodaylstdata = this.lstofTodayDistData.every(item => item === 0);
    }
    isDataOuDated(strVal) {
        // console.log(strVal, " : ", strVal.match(/out-dated/i));
        if (strVal.match(/out-dated/i) !== null) {
            return true;
        }
        else {
            return false;
        }
    }
    onSubmitStateThousandData(stateList) {
        // console.log('---------Inside onSubmitStatethousandData');
        // console.log(this.mapOfStateDtandCnfCases);
        for (let state of stateList) {
            const tempVal = this.mapOfStateShorts[state];
            let lstStateNewCses = [];
            // console.log('For the state:',tempVal);
            if (tempVal !== undefined) {
                lstStateNewCses = this.mapOfStateDtandCnfCases[tempVal][`nw_cases`];
            }
            let lengthData = lstStateNewCses.length;
            let lastData = lstStateNewCses[lengthData - 1];
            if (lastData <= 1000) {
                this.ltThousandCases[state] = lastData;
            }
        }
        let sortedListltThouCses = this.sortObjectByKeys(this.ltThousandCases);
        this.strStatenum = '';
        for (let key of Object.keys(sortedListltThouCses)) {
            // console.log(key,':',sortedListltThouCses[key]);
            let tempStr = key + ":" + sortedListltThouCses[key];
            this.strStatenum = this.strStatenum + tempStr + "," + "  ";
        }
    }
    sortObjectByKeys(o) {
        return Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
    }
    toggleGraphState() {
        this.isUserClickedStateGraph = false;
    }
    /*  refreshState(stateName): void {
        this.isSDataClicked = true;
        this.stateDatalst = this.dictOfStateData[stateName];
        this.refreshDists();
      } */
    ngOnInit() {
        this.ds.getIndiaData().subscribe(response => {
            this.completeCVDData = response;
            // console.log('COmplete initial indian state data');
            // console.log(this.completeCVDData);
            for (const i of Object.keys(this.completeCVDData)) {
                // console.log('For the key :', i);
                // console.log(this.completeCVDData[i]);
                if (i === 'statewise') {
                    for (const data of this.completeCVDData[i]) {
                        if (data[`state`] !== 'Total') {
                            this.stateList.push(data[`state`]);
                        }
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
            //  console.log('Throwing error', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            // console.log('Throwing error again:', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        })).subscribe(result => {
            // console.log(result);
            this.completeWrldCVDdata = JSON.parse(result);
            // console.log(this.completeWrldCVDdata);
            for (const keys of Object.keys(this.completeWrldCVDdata)) {
                this.cntryList.push(this.completeWrldCVDdata[keys][`location`]);
                //console.log(this.completeWrldCVDdata[keys][`location`]);
                this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]] = {};
                this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`nw_cases`] = [];
                this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`dt`] = [];
                this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`new_vccn`] = [];
                this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`total_vccn`] = [];
                for (const vals of this.completeWrldCVDdata[keys][`data`]) {
                    //console.log(vals);
                    //console.log('type of val is : ',typeof(vals));
                    this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`nw_cases`].push(vals[`new_cases`]);
                    this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`dt`].push(vals[`date`]);
                    //console.log('new vaccinations : ',vals[`new_vaccinations`]);
                    if (vals[`new_vaccinations`]) {
                        this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`new_vccn`].push(vals[`new_vaccinations`]);
                        this.lastdateNewVccnUpdated = vals[`date`];
                    }
                    if (vals[`total_vaccinations`]) {
                        this.dictOfWorldCntryDates[this.completeWrldCVDdata[keys][`location`]][`total_vccn`].push(vals[`total_vaccinations`]);
                    }
                }
            }
            // console.log('Dict manually created :',this.dictOfWorldCntryDates);
        }, err => {
            console.log('World Data Erorr: ', err);
        }, () => {
            console.log('HTTP request completed');
        });
        // --------- Other urls for demonstrating the promise and async and await.
        const promised = this.httpClient.get(this.apiURL).toPromise();
        // console.log(promised);
        promised.then((data) => {
            // console.log('Promise resolved with: ', data);
        }).catch((err) => {
            //  console.log('Error: ', err);
        });
        // ---- Nodejs world data ----
        /*this.ds.getNodejsWrldData().subscribe( (response) => {
           console.log('Nodejs World data : ');
           console.log(response);
        });*/
        // --- Indian statewise data -----
        this.ds.getIndianStateData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            // console.log('Throwing error', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(err => {
            // console.log('Throwing error again:', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        })).subscribe((result) => {
            this.completeIndianStateData = JSON.parse(result);
            // console.log('Complete state data:')
            // console.log(this.completeIndianStateData);
            for (const stateData of Object.keys(this.completeIndianStateData)) {
                this.mapOfStateDtandCnfCases[stateData] = {};
                this.mapOfStateDtandCnfCases[stateData][`dt`] = [];
                this.mapOfStateDtandCnfCases[stateData][`nw_cases`] = [];
                this.mapOfStateDtandCnfCases[stateData][`nw_rcvs`] = [];
                this.mapOfStateDtandCnfCases[stateData][`nw_vcnated`] = [];
                this.mapOfStateDtandCnfCases[stateData][`total_vcnated`] = [];
                for (const datesob of Object.keys(this.completeIndianStateData[stateData][`dates`])) {
                    this.mapOfStateDtandCnfCases[stateData][`dt`].push(datesob);
                    for (const objdelta of Object.keys(this.completeIndianStateData[stateData][`dates`][datesob])) {
                        if (objdelta === 'delta') {
                            this.mapOfStateDtandCnfCases[stateData][`nw_cases`]
                                .push(this.completeIndianStateData[stateData][`dates`][datesob][objdelta][`confirmed`]);
                            this.mapOfStateDtandCnfCases[stateData][`nw_rcvs`]
                                .push(this.completeIndianStateData[stateData][`dates`][datesob][objdelta][`recovered`]);
                            this.mapOfStateDtandCnfCases[stateData][`nw_vcnated`]
                                .push(this.completeIndianStateData[stateData][`dates`][datesob][objdelta][`vaccinated`]);
                        }
                        else if (objdelta === 'total') {
                            this.mapOfStateDtandCnfCases[stateData][`total_vcnated`]
                                .push(this.completeIndianStateData[stateData][`dates`][datesob][objdelta][`vaccinated`]);
                        }
                    }
                }
            }
            let tmpLst = ["Maharashtra", "Kerala", "Karnataka", "Andhra Pradesh", "Tamil Nadu", "Delhi", "Uttar Pradesh", "West Bengal", "Odisha", "Rajasthan", "Chhattisgarh", "Telangana", "Haryana", "Gujarat", "Bihar", "Madhya Pradesh", "Assam", "Punjab", "Jammu and Kashmir", "Jharkhand", "Uttarakhand", "Himachal Pradesh", "Goa", "Puducherry", "Tripura", "Manipur", "Chandigarh", "Arunachal Pradesh", "Meghalaya", "Nagaland", "Ladakh", "Sikkim", "Andaman and Nicobar Islands", "Mizoram", "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep"];
            this.onSubmitStateThousandData(tmpLst);
            // console.log('Map of state and data :');
            // console.log(this.mapOfStateDtandCnfCases);
        }, err => {
            //  console.log('Indian state Data Erorr: ', err);
        }, () => {
            // console.log('HTTP request completed: for Indian state');
        });
        this.ds.getIndianDistrictData().subscribe(response => {
            this.districtWiseCvdDataInd = JSON.parse(response);
            // console.log(this.districtWiseCvdDataInd);
        });
        papaparse__WEBPACK_IMPORTED_MODULE_3__["parse"]('http://api.covid19india.org/csv/latest/vaccine_doses_statewise.csv', {
            download: true,
            complete: (res, file) => {
                // console.log('Vaccine data');
                // console.log(res);
                this.vaccineDataLst = res;
                for (let objdata of Object.keys(this.vaccineDataLst)) {
                    if (objdata === 'data') {
                        for (let states of this.vaccineDataLst[objdata]) {
                            if (states[0] === 'State') {
                                this.vaccineStateMap[states[0]] = states[states.length - 1];
                            }
                            else {
                                this.vaccineStateMap[states[0]] = Number(states[states.length - 1]);
                            }
                        }
                    }
                    else {
                        continue;
                    }
                }
                this.lstmostVaccineStates = this.getMostOfSomeAttributeData(this.vaccineStateMap, 6);
                // console.log(this.lstmostVaccineStates);
                // console.log('Vaccine map :')
                // console.log(this.vaccineStateMap);
                // console.log(this.vaccineStateMap[`Total`]);
            }
        });
        /* Papa.parse('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv',{
           download:true,
           complete: (res, file) => {
            console.log('Recovery data', );
            //console.log(res);
           }
         }); */
        let objSetOfCntrsData = {};
        this.ds.getCurrentWorldDataByCountry().subscribe(result => {
            objSetOfCntrsData = result;
            // console.log(objSetOfCntrsData);
            for (let key of Object.keys(objSetOfCntrsData)) {
                if (key === 'data') {
                    // console.log('Type of consolidated data:',typeof(objSetOfCntrsData[key]));
                    // console.log( objSetOfCntrsData[`data`] );
                    for (let lstData of objSetOfCntrsData[`data`]) {
                        if (lstData[`location`] === 'US') {
                            this.mapOfCntryConsolidatedCases['United States'] = {};
                            this.mapOfCntryConsolidatedCases['United States'][`confirmed`] = lstData[`confirmed`];
                            this.mapOfCntryConsolidatedCases['United States'][`deaths`] = lstData[`deaths`];
                            this.mapOfCntryConsolidatedCases['United States'][`recovered`] = lstData[`recovered`];
                            this.mapOfCntryConsolidatedCases['United States'][`active`] = lstData[`active`];
                        }
                        else {
                            this.mapOfCntryConsolidatedCases[lstData[`location`]] = {};
                            this.mapOfCntryConsolidatedCases[lstData[`location`]][`confirmed`] = lstData[`confirmed`];
                            this.mapOfCntryConsolidatedCases[lstData[`location`]][`deaths`] = lstData[`deaths`];
                            this.mapOfCntryConsolidatedCases[lstData[`location`]][`recovered`] = lstData[`recovered`];
                            this.mapOfCntryConsolidatedCases[lstData[`location`]][`active`] = lstData[`active`];
                        }
                    }
                }
                else if (key === 'dt') {
                    this.dateOFCntryConsolidatedCases = objSetOfCntrsData[key];
                }
                else if (key === 'ts') {
                    // console.log('Original ts', objSetOfCntrsData[key]);
                    let d = new Date(objSetOfCntrsData[key] * 1000);
                    this.tmpStampOfLatestUpdate = "Date: " + d.toUTCString();
                }
            }
            // console.log('COnslodated logs:')
            // console.log(this.mapOfCntryConsolidatedCases);
        });
    }
    getNumberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    ngOnDestroy() {
        this.completeWrldCVDdata.unsubscribe();
        this.completeIndianStateData.unsubscribe();
        this.districtWiseCvdDataInd.unsubscribe();
        delete this.dstNameNoteMap;
        delete this.mapOfStateDtandCnfCases;
        delete this.mapOfStateImages;
        delete this.mapOfStateShorts;
        delete this.vaccineStateMap;
    }
}
DisplayCvdInfoComponent.ɵfac = function DisplayCvdInfoComponent_Factory(t) { return new (t || DisplayCvdInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
DisplayCvdInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisplayCvdInfoComponent, selectors: [["app-display-cvd-info"]], decls: 75, vars: 23, consts: [["align", "center", 2, "color", "blue"], ["id", "accordion", 1, "multi-collapse"], [1, "card"], ["id", "headingOne", 1, "card-header"], [1, "mb-0"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "btn", "btn-link", 3, "click"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordion", 1, "collapse", "show"], [1, "card-body"], [1, "row"], [1, "col-md-auto"], ["for", "mnWord", 2, "color", "brown", "font-weight", "bold"], ["disabled", "", 4, "ngIf"], ["list", "mnWord", "name", "mnWord", "onfocus", "this.value=''", "placeholder", "e.g India", 3, "ngModel", "disabled", "ngModelChange", "change"], ["cnName", ""], ["id", "mnWord"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "card", "style", "width: 18rem;", 4, "ngIf"], [1, "col"], ["for", "quantity", 2, "color", "brown", "font-weight", "bold"], ["type", "range", "id", "qantity", "name", "quantity", "value", "10", "min", "10", "max", "310", "oninput", "this.nextElementSibling.value = this.value"], ["quantity", ""], [2, "color", "crimson", "font-weight", "bold"], [1, "btn", "btn-primary", 3, "click"], ["baseChart", "", 2, "position", "relative", "height", "10vh", "width", "80vw", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins"], ["id", "headingTwo", 1, "card-header"], ["id", "stateAcc", "data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "btn", "btn-link", "collapsed", 3, "click"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordion", 1, "collapse"], ["for", "mnState", 2, "color", "brown", "font-weight", "bold"], ["list", "mnState", "name", "mnState", "onfocus", "this.value=''", "placeholder", "e.g. Maharashtra", 3, "ngModel", "disabled", "ngModelChange", "change"], ["id", "mnState"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "row", "style", "margin-top: auto;", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["id", "headingThree", 1, "card-header"], ["data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "btn", "btn-link", "collapsed", 3, "click"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordion", 1, "collapse"], [4, "ngIf", "ngIfElse"], ["other_content", ""], [1, "new4"], ["disabled", ""], ["role", "status", "aria-hidden", "true", 1, "spinner-grow", "spinner-grow-sm"], [3, "value"], [1, "badge", "badge-success", "blinking"], [1, "card", 2, "width", "18rem"], [1, "card-header"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "badge", "badge-danger", "blinking"], ["class", "blinking", 4, "ngIf"], [1, "blinking"], [1, "badge", "badge-info", "blinking"], ["align", "center", 2, "font-weight", "bold", "color", "brown"], ["direction", "left", "bgcolor", "#FCF7F1", "scrolldelay", "100", "behavior", "loop", 2, "font-family", "Rajdhani, sans-serif", "color", "#3a3dda"], [3, "ngValue"], [1, "row", 2, "margin-top", "auto"], ["width", "50", "height", "50", "alt", "State map", "data-toggle", "tooltip", "title", "Click me to refresh the time-series graph if you have modified the range of days.", 1, "rounded-circle", 3, "src", "click"], [2, "font-weight", "bold"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-success"], [1, "blinkingInfoNote"], [1, "list-group"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], ["class", "col", 4, "ngIf"], [1, "alert", "alert-danger"], ["class", "blinkingInfo", 4, "ngIf"], [1, "blinkingInfo"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [3, "ngStyle"], [1, "badge", "badge-primary", "badge-pill"], ["class", "list-group", 4, "ngFor", "ngForOf"], ["class", "list-group-item list-group-item-warning", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-warning"], [1, "badge", "badge-primary", "badge-danger", "blinking"], ["class", "list-group-item list-group-item-success", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-success"], [1, "badge", "badge-primary", "badge-info", "blinking"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["for", "mndist", 2, "color", "brown", "font-weight", "bold"], ["list", "mndist", "name", "mndist", "onfocus", "this.value=''", "placeholder", "Enter district", 3, "ngModel", "disabled", "ngModelChange", "change"], ["stname", ""], ["id", "mndist"], ["value", ""], ["style", "color:green", 4, "ngIf"], ["direction", "left", "style", "font-family: Rajdhani, sans-serif; color:red", "bgcolor", "#FCF7F1", "scrolldelay", "100", "behavior", "loop", 4, "ngIf"], ["class", "row", "id", "srvDistSection", 4, "ngIf"], [2, "color", "green"], ["direction", "left", "bgcolor", "#FCF7F1", "scrolldelay", "100", "behavior", "loop", 2, "font-family", "Rajdhani, sans-serif", "color", "red"], ["id", "srvDistSection", 1, "row"], ["class", "alert alert-primary blinkingInfoNote", 4, "ngIf"], [1, "alert", "alert-primary", "blinkingInfoNote"], [1, "badge", "badge-primary", "badge-pill", "blinking"]], template: function DisplayCvdInfoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " COVID-19 ANALYSIS !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_Template_button_click_8_listener() { return ctx.getMarqueeToggleOthers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " World data > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Visualize world info: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DisplayCvdInfoComponent_label_17_Template, 3, 0, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisplayCvdInfoComponent_Template_input_ngModelChange_19_listener($event) { return ctx.selectedWS = $event; })("change", function DisplayCvdInfoComponent_Template_input_change_19_listener() { return ctx.onSubmitWorldData(ctx.selectedWS); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "datalist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DisplayCvdInfoComponent_option_22_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DisplayCvdInfoComponent_p_23_Template, 5, 4, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DisplayCvdInfoComponent_div_25_Template, 19, 11, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DisplayCvdInfoComponent_div_27_Template, 19, 14, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Choose range of days (between 10 and 310):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "output", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r57); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return ctx.onSubmit(_r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "canvas", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_Template_button_click_46_listener() { return ctx.getMarqueeToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Indian-State specific data > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DisplayCvdInfoComponent_div_48_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Choose Indian state:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DisplayCvdInfoComponent_label_56_Template, 3, 0, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 29, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DisplayCvdInfoComponent_Template_input_ngModelChange_57_listener($event) { return ctx.selectIS = $event; })("change", function DisplayCvdInfoComponent_Template_input_change_57_listener() { return ctx.onSubmitStateData(ctx.selectIS); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "datalist", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, DisplayCvdInfoComponent_option_60_Template, 2, 2, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, DisplayCvdInfoComponent_div_61_Template, 24, 9, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, DisplayCvdInfoComponent_div_62_Template, 4, 8, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayCvdInfoComponent_Template_button_click_66_listener() { return ctx.getMarqueeToggleOthers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " District specific data > ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, DisplayCvdInfoComponent_div_70_Template, 2, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, DisplayCvdInfoComponent_ng_template_71_Template, 14, 9, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.completeWrldCVDdata === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedWS)("disabled", ctx.completeWrldCVDdata === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cntryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedWS !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedWS !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedWS !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.marqueeToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.completeCVDData === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectIS)("disabled", ctx.completeCVDData === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSDataClicked && ctx.selectIS !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectIS !== "" && ctx.isUserClickedStateGraph);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectIS === "" || ctx.selectIS === "Total")("ngIfElse", _r14);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["BaseChartDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]], styles: ["caption[_ngcontent-%COMP%] {\r\n  border: 2px solid #eeeeee;\r\n\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n   outline: 1px solid;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  grid-template-columns: repeat(12, 1fr);\r\n  grid-gap: 20px;\r\n}\r\n\r\n.column[_ngcontent-%COMP%] {\r\n  column-gap:10px;\r\n  padding: 50px;\r\n}\r\nhr.new4[_ngcontent-%COMP%] {\r\n  border: 1px solid red;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  .column[_ngcontent-%COMP%] {\r\n    column-gap:10px;\r\n    padding: 20px;\r\n  }\r\n}\r\n.my-chart[_ngcontent-%COMP%] {\r\n  display: block; \r\n  width: 1379px; \r\n  height: 689px; \r\n  width:\"600\";\r\n  height: \"100\";\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  .my-chart[_ngcontent-%COMP%] {\r\n    display: block; \r\n    width: 1379px; \r\n    height: 689px; \r\n    width:\"600\";\r\n    height: \"500\";\r\n  }\r\n}\r\ncanvas[_ngcontent-%COMP%] {\r\n  height:\"27vh\"; \r\n  width:\"80vw\";\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  canvas[_ngcontent-%COMP%] {\r\n    height:\"17vh\"; \r\n    width:\"60vw\";\r\n  }\r\n}\r\n.chart-container[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.info[_ngcontent-%COMP%] {\r\n  background-color: #e7f3fe;\r\n  border-left: 4px solid #2196F3;\r\n}\r\n.blinking[_ngcontent-%COMP%]{\r\n  animation:blinkingText 1.2s infinite;\r\n}\r\n@keyframes blinkingText{\r\n  0%{     color: rgb(255, 248, 248);    }\r\n  49%{    color: rgb(199, 195, 195); }\r\n  60%{    color: rgb(239, 255, 15); }\r\n  99%{    color:rgb(248, 255, 255);  }\r\n  100%{   color: rgb(242, 250, 243);    }\r\n}\r\n.blinkingInfo[_ngcontent-%COMP%]{\r\n  animation:blinkingTextIn 1.2s infinite;\r\n}\r\n@keyframes blinkingTextIn{\r\n  0%{     color: rgb(204, 30, 30);    }\r\n  49%{    color: rgb(219, 66, 66); }\r\n  60%{    color: rgb(224, 91, 180); }\r\n  99%{    color:#f0bad5;  }\r\n  100%{   color: rgb(235, 236, 179);    }\r\n}\r\n.blinkingInfoNote[_ngcontent-%COMP%]{\r\n  animation:blinkingTextInNote 1.9s infinite;\r\n}\r\n@keyframes blinkingTextInNote{\r\n  0%{     color: rgb(219, 26, 26);    }\r\n  49%{    color: rgb(219, 49, 49); }\r\n  60%{    color: rgb(187, 14, 129); }\r\n  99%{    color:#a553f1;  }\r\n  100%{   color: rgb(96, 149, 248);    }\r\n}\r\n.marquee[_ngcontent-%COMP%] {\r\n  width: 500px;\r\n  height: 50px;\r\n  margin: 25px auto;\r\n  overflow: hidden;\r\n  position: relative;\r\n  border: 1px solid #000;\r\n  margin: 25px auto;  \r\n \r\n  background-color: #222;\r\n  border-radius: 5px;\r\n  box-shadow: inset 0px 2px 2px rgba(0, 0, 0, .5), 0px 1px 0px rgba(250, 250, 250, .2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS1jdmQtaW5mby9kaXNwbGF5LWN2ZC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7O0FBRTNCO0FBQ0E7R0FDRyxrQkFBa0I7QUFDckI7QUFFQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsY0FBYztBQUNoQjtBQUVBLDBEQUEwRDtBQUUxRDtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmO0FBQ0Y7QUFHQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxRQUFRLHlCQUF5QixLQUFLO0VBQ3RDLFFBQVEseUJBQXlCLEVBQUU7RUFDbkMsUUFBUSx3QkFBd0IsRUFBRTtFQUNsQyxRQUFRLHdCQUF3QixHQUFHO0VBQ25DLFFBQVEseUJBQXlCLEtBQUs7QUFDeEM7QUFFQTtFQUNFLHNDQUFzQztBQUN4QztBQUVBO0VBQ0UsUUFBUSx1QkFBdUIsS0FBSztFQUNwQyxRQUFRLHVCQUF1QixFQUFFO0VBQ2pDLFFBQVEsd0JBQXdCLEVBQUU7RUFDbEMsUUFBUSxhQUFhLEdBQUc7RUFDeEIsUUFBUSx5QkFBeUIsS0FBSztBQUN4QztBQUdBO0VBQ0UsMENBQTBDO0FBQzVDO0FBRUE7RUFDRSxRQUFRLHVCQUF1QixLQUFLO0VBQ3BDLFFBQVEsdUJBQXVCLEVBQUU7RUFDakMsUUFBUSx3QkFBd0IsRUFBRTtFQUNsQyxRQUFRLGFBQWEsR0FBRztFQUN4QixRQUFRLHdCQUF3QixLQUFLO0FBQ3ZDO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7O0VBRWpCLHNCQUFzQjtFQUd0QixrQkFBa0I7RUFHbEIsb0ZBQW9GO0FBQ3RGO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0QkMiLCJmaWxlIjoic3JjL2FwcC9kaXNwbGF5LWN2ZC1pbmZvL2Rpc3BsYXktY3ZkLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhcHRpb24ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWVlZWU7XHJcblxyXG59XHJcbnRhYmxlIHtcclxuICAgb3V0bGluZTogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBzaXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG5cclxuLmNvbHVtbiB7XHJcbiAgY29sdW1uLWdhcDoxMHB4O1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbmhyLm5ldzQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgY29sdW1uLWdhcDoxMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ubXktY2hhcnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyBcclxuICB3aWR0aDogMTM3OXB4OyBcclxuICBoZWlnaHQ6IDY4OXB4OyBcclxuICB3aWR0aDpcIjYwMFwiO1xyXG4gIGhlaWdodDogXCIxMDBcIjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5teS1jaGFydCB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgXHJcbiAgICB3aWR0aDogMTM3OXB4OyBcclxuICAgIGhlaWdodDogNjg5cHg7IFxyXG4gICAgd2lkdGg6XCI2MDBcIjtcclxuICAgIGhlaWdodDogXCI1MDBcIjtcclxuICB9XHJcbn1cclxuXHJcbmNhbnZhcyB7XHJcbiAgaGVpZ2h0OlwiMjd2aFwiOyBcclxuICB3aWR0aDpcIjgwdndcIjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGNhbnZhcyB7XHJcbiAgICBoZWlnaHQ6XCIxN3ZoXCI7IFxyXG4gICAgd2lkdGg6XCI2MHZ3XCI7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhcnQtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjNmZTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyMTk2RjM7XHJcbn1cclxuXHJcbi5ibGlua2luZ3tcclxuICBhbmltYXRpb246YmxpbmtpbmdUZXh0IDEuMnMgaW5maW5pdGU7XHJcbn1cclxuQGtleWZyYW1lcyBibGlua2luZ1RleHR7XHJcbiAgMCV7ICAgICBjb2xvcjogcmdiKDI1NSwgMjQ4LCAyNDgpOyAgICB9XHJcbiAgNDkleyAgICBjb2xvcjogcmdiKDE5OSwgMTk1LCAxOTUpOyB9XHJcbiAgNjAleyAgICBjb2xvcjogcmdiKDIzOSwgMjU1LCAxNSk7IH1cclxuICA5OSV7ICAgIGNvbG9yOnJnYigyNDgsIDI1NSwgMjU1KTsgIH1cclxuICAxMDAleyAgIGNvbG9yOiByZ2IoMjQyLCAyNTAsIDI0Myk7ICAgIH1cclxufVxyXG5cclxuLmJsaW5raW5nSW5mb3tcclxuICBhbmltYXRpb246YmxpbmtpbmdUZXh0SW4gMS4ycyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGlua2luZ1RleHRJbntcclxuICAwJXsgICAgIGNvbG9yOiByZ2IoMjA0LCAzMCwgMzApOyAgICB9XHJcbiAgNDkleyAgICBjb2xvcjogcmdiKDIxOSwgNjYsIDY2KTsgfVxyXG4gIDYwJXsgICAgY29sb3I6IHJnYigyMjQsIDkxLCAxODApOyB9XHJcbiAgOTkleyAgICBjb2xvcjojZjBiYWQ1OyAgfVxyXG4gIDEwMCV7ICAgY29sb3I6IHJnYigyMzUsIDIzNiwgMTc5KTsgICAgfVxyXG59XHJcblxyXG5cclxuLmJsaW5raW5nSW5mb05vdGV7XHJcbiAgYW5pbWF0aW9uOmJsaW5raW5nVGV4dEluTm90ZSAxLjlzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5raW5nVGV4dEluTm90ZXtcclxuICAwJXsgICAgIGNvbG9yOiByZ2IoMjE5LCAyNiwgMjYpOyAgICB9XHJcbiAgNDkleyAgICBjb2xvcjogcmdiKDIxOSwgNDksIDQ5KTsgfVxyXG4gIDYwJXsgICAgY29sb3I6IHJnYigxODcsIDE0LCAxMjkpOyB9XHJcbiAgOTkleyAgICBjb2xvcjojYTU1M2YxOyAgfVxyXG4gIDEwMCV7ICAgY29sb3I6IHJnYig5NiwgMTQ5LCAyNDgpOyAgICB9XHJcbn1cclxuXHJcbi5tYXJxdWVlIHtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMjVweCBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgbWFyZ2luOiAyNXB4IGF1dG87ICBcclxuIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiBcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiBcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgLjUpLCAwcHggMXB4IDBweCByZ2JhKDI1MCwgMjUwLCAyNTAsIC4yKTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIC41KSwgMHB4IDFweCAwcHggcmdiYSgyNTAsIDI1MCwgMjUwLCAuMik7XHJcbn1cclxuXHJcblxyXG4vKlxyXG5AaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2luZGlnby1waW5rLmNzcyc7XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG4udmVyc2lvbi1pbmZvIHtcclxuICBmb250LXNpemU6IDhwdDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbn1cclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBmbGV4LWJhc2lzOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcbiovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayCvdInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-display-cvd-info',
                templateUrl: './display-cvd-info.component.html',
                styleUrls: ['./display-cvd-info.component.css']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


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