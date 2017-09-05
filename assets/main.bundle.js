webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav (logout)=\"onLogout()\"></app-nav>\r\n<br/>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_store_actions__ = __webpack_require__("../../../../../src/app/global-store/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(sessionService, ngRedux) {
        this.sessionService = sessionService;
        this.ngRedux = ngRedux;
        this.title = 'app';
        this.newSession = this.sessionService.SessionFetch();
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__global_store_actions__["a" /* CHECK_SESSION */], session: this.newSession });
    }
    AppComponent.prototype.onLogout = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__global_store_actions__["a" /* CHECK_SESSION */], session: this.sessionService.SessionClear() });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["select"])(function (s) { return s.global.session; }),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "session", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__["select"])(function (s) { return s.global.page; }),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "page", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_module__ = __webpack_require__("../../../../../src/app/services/service.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_module__ = __webpack_require__("../../../../../src/app/pages/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_admin_admin_module__ = __webpack_require__("../../../../../src/app/pages/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_class_class_module__ = __webpack_require__("../../../../../src/app/pages/class/class.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_component_common_component_module__ = __webpack_require__("../../../../../src/app/common-component/common-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__router_config_router_config__ = __webpack_require__("../../../../../src/app/router-config/router.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store__ = __webpack_require__("../../../../../src/app/store.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* Service Module */

/* Pages Modules */







/* Redux */


var AppModule = (function () {
    function AppModule(ngRedux, devTools) {
        var enhancers = Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["isDevMode"])() ? [devTools.enhancer()] : [];
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_12__store__["b" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_12__store__["a" /* INITIAL_STATE */], [], enhancers);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_redux__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__router_config_router_config__["a" /* routerConfig */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_3__services_service_module__["a" /* ServiceModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__pages_admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_class_class_module__["a" /* ClassModule */],
                __WEBPACK_IMPORTED_MODULE_8__common_component_common_component_module__["a" /* CommonComponentModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_ng2_redux__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11_ng2_redux__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_ng2_redux__["DevToolsExtension"]) === "function" && _b || Object])
    ], AppModule);
    return AppModule;
    var _a, _b;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common-component/common-component.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__ = __webpack_require__("../../../../../src/app/common-component/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/common-component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("../../../../../src/app/common-component/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CommonComponentModule = (function () {
    function CommonComponentModule() {
    }
    CommonComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__nav_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */]]
        })
    ], CommonComponentModule);
    return CommonComponentModule;
}());

//# sourceMappingURL=common-component.module.js.map

/***/ }),

/***/ "../../../../../src/app/common-component/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common-component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<legend class=\"text-success\">Log-in</legend>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\" >\n    <label for=\"email\" class=\"text-info\" >Email address</label>\n    <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"user@dlsu.edu.ph\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\" class=\"text-info\" >Password</label>\n    <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" >\n  </div>\n  <div class=\"form-group\">\n      <input formControlName=\"_csrf\" type=\"hidden\" class=\"form-control\" id=\"_csrf\">\n    </div>\n  <div *ngIf=\"loginForm.valid; else disable\">\n      <button type=\"submit\"  [ngClass]=\"{'btn btn-primary btn-block': loginForm.valid }\">Login</button>\n  </div>\n  <ng-template #disable>\n      <button type=\"submit\"  class=\"btn btn-primary btn-block\" disabled>Login</button>\n  </ng-template>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/common-component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitloginData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loginForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            _csrf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this.csrf)
        });
    }
    LoginComponent.prototype.ngOnChanges = function (changes) {
        if (changes['csrf']) {
            this.loginForm.value._csrf = this.csrf;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        if (this.loginForm.valid) {
            var email = this.loginForm.value.email;
            var password = this.loginForm.value.password;
            this.submitloginData.emit({
                email: email,
                password: password,
                _csrf: this.csrf
            });
        }
        else {
            alert("Invalid Form");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "submitloginData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], LoginComponent.prototype, "csrf", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/common-component/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common-component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/common-component/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common-component/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-primary bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">GCOE</a>\n    <button class=\"navbar navbar-dark navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar navbar-primary navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a [ngClass]=\"{'nav-link text-light': ((page | async) === 'home'), 'nav-link': true}\" [routerLink]=\"['/home']\">Home <span *ngIf=\"((page | async) === 'home')\" class=\"sr-only\">(current)</span></a>\n        </li>\n        <li *ngIf=\"((session | async) && (userRestriction | async ) < 5)\" class=\"nav-item\">\n          <a [ngClass]=\"{'nav-link text-light': ((page | async) === 'admin'), 'nav-link': true}\" [routerLink]=\"['/admin']\">Admin <span *ngIf=\"((page | async) === 'admin')\" class=\"sr-only\">(current)</span></a>\n        </li>\n        <li *ngIf=\"((session | async) && (userRestriction | async ) < 5)\" class=\"nav-item\">\n          <a [ngClass]=\"{'nav-link text-light': ((page | async) === 'dashboard'), 'nav-link': true}\" [routerLink]=\"['/dashboard']\">Dashboard <span *ngIf=\"((page | async) === 'dashboard')\" class=\"sr-only\">(current)</span></a>\n        </li>\n        <li *ngIf=\"(session | async)\" class=\"nav-item\">\n          <a [ngClass]=\"{'nav-link text-light': ((page | async) === 'class'), 'nav-link': true}\" [routerLink]=\"['/class']\">Class <span *ngIf=\"((page | async) === 'class')\" class=\"sr-only\">(current)</span> </a>\n        </li>\n        <li *ngIf=\"(session | async)\" class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Options\n          </a>\n          <div *ngIf=\"(session | async)\" class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <a class=\"dropdown-item\" (click)=\"onLogout()\" href=\"#\">Logout</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/common-component/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent() {
        this.logout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.onLogout = function () {
        this.logout.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(function (s) { return s.global.session; }),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "session", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(function (s) { return s.global.session.User.userRestriction; }),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "userRestriction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ng2_redux__["select"])(function (s) { return s.global.page; }),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "logout", void 0);
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/common-component/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common-component/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/common-component/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common-component/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<legend class=\"text-success\">Sign-up</legend>\n<form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\" >\n    <input formControlName=\"firstname\" type=\"text\" class=\"form-control\" id=\"firstname\" placeholder=\"Firstname\">\n  </div>\n  <div class=\"form-group\" >\n      <input formControlName=\"lastname\" type=\"text\" class=\"form-control\" id=\"lastname\" placeholder=\"Lastname\">\n    </div>\n  <div class=\"form-group\" >\n    <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Email ex: user@dlsu.edu.ph\">\n  </div>\n  <div class=\"form-group\">\n    <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" >\n  </div>\n  <div class=\"form-group\">\n    <input formControlName=\"confirmation\" type=\"password\" class=\"form-control\" id=\"confirmation\" placeholder=\"Confirmed Password\" >\n  </div>\n  <div class=\"form-group\">\n    <input formControlName=\"invitationCode\" type=\"text\" class=\"form-control\" id=\"invitationCode\" placeholder=\"Invitation Code\" >\n  </div>\n  <div class=\"form-group\">\n    <input formControlName=\"_csrf\" type=\"hidden\" class=\"form-control\" id=\"_csrf\">\n  </div>\n  <div *ngIf=\"signupForm.valid; else disable\">\n      <button type=\"submit\"  [ngClass]=\"{'btn btn-primary btn-block': signupForm.valid }\">Signup</button>\n  </div>\n  <ng-template #disable>\n      <button type=\"submit\"  class=\"btn btn-primary btn-block\" disabled>Signup</button>\n  </ng-template>\n  <div>\n      <button (click)=\"signupCancel()\" class=\"btn btn-warning btn-block\">Cancel</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/common-component/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.signupData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.signupForm = this.formBuilder.group({
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            confirmation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            invitationCode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            _csrf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this._csrf)
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            firstname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            confirmation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            invitationCode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            _csrf: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](this._csrf)
        });
    };
    SignupComponent.prototype.signupCancel = function () {
        this.cancel.emit(false);
    };
    SignupComponent.prototype.onSubmit = function () {
        this.signupData.emit(this.signupForm.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "cancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SignupComponent.prototype, "signupData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('csrf'),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "_csrf", void 0);
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/common-component/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common-component/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a;
}());

//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/global-store/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_CSRF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SIGNED_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOGED_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHECK_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_ACTIVE_PAGE; });
var GET_CSRF = 'GET_CSRF';
var SIGNED_UP = 'SIGNED_UP';
var LOGED_IN = 'LOGED_IN';
var CHECK_SESSION = 'GET_SESSION';
var CLEAR_SESSION = 'CLEAR_SESSION';
var SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/global-store/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL_INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = globalReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign__ = __webpack_require__("../../../../tassign/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tassign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/global-store/actions.ts");


var GLOBAL_INITIAL_STATE = {
    session: null,
    page: null,
    signedUp: null,
    logedIn: null,
    _csrf: null
};
var setActivePage = function (state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        session: state.session,
        page: action.page,
        signedUp: state.signedUp,
        logedIn: state.logedIn,
        _csrf: state._csrf
    });
};
var checkSession = function (state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        session: action.session,
        page: state.page,
        signedUp: state.signedUp,
        logedIn: state.logedIn,
        _csrf: state._csrf
    });
};
var clearSession = function (state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        session: null,
        page: state.page,
        signedUp: state.signedUp,
        logedIn: state.logedIn,
        _csrf: state._csrf
    });
};
var getCsrf = function (state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        session: state.session,
        page: state.page,
        signedUp: state.signedUp,
        logedIn: state.logedIn,
        _csrf: action._csrf
    });
};
var signedUp = function (state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        session: action.session,
        page: state.page,
        signedUp: action.signedUp,
        logedIn: action.logedIn,
        _csrf: state._csrf
    });
};
var logedIn = function (state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        session: action.session,
        page: state.page,
        signedUp: state.signedUp,
        logedIn: action.logedIn,
        _csrf: state._csrf
    });
};
function globalReducer(state, action) {
    if (state === void 0) { state = GLOBAL_INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* CHECK_SESSION */]: return checkSession(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["b" /* CLEAR_SESSION */]: return clearSession(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["c" /* GET_CSRF */]: return getCsrf(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["f" /* SIGNED_UP */]: return signedUp(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* LOGED_IN */]: return logedIn(state, action);
        case __WEBPACK_IMPORTED_MODULE_1__actions__["e" /* SET_ACTIVE_PAGE */]: return setActivePage(state, action);
    }
    return state;
}
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_store_actions__ = __webpack_require__("../../../../../src/app/global-store/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(ngRedux, route) {
        this.ngRedux = ngRedux;
        this.route = route;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__global_store_actions__["e" /* SET_ACTIVE_PAGE */], page: this.route.snapshot.url.toString() });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/pages/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], AdminComponent);
    return AdminComponent;
    var _a, _b;
}());

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/class/class.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/class/class.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  class works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/class/class.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_store_actions__ = __webpack_require__("../../../../../src/app/global-store/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassComponent = (function () {
    function ClassComponent(ngRedux, route) {
        this.ngRedux = ngRedux;
        this.route = route;
    }
    ClassComponent.prototype.ngOnInit = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__global_store_actions__["e" /* SET_ACTIVE_PAGE */], page: this.route.snapshot.url.toString() });
    };
    ClassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-class',
            template: __webpack_require__("../../../../../src/app/pages/class/class.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/class/class.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], ClassComponent);
    return ClassComponent;
    var _a, _b;
}());

//# sourceMappingURL=class.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/class/class.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_component_common_component_module__ = __webpack_require__("../../../../../src/app/common-component/common-component.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_component__ = __webpack_require__("../../../../../src/app/pages/class/class.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClassModule = (function () {
    function ClassModule() {
    }
    ClassModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__common_component_common_component_module__["a" /* CommonComponentModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__class_component__["a" /* ClassComponent */]]
        })
    ], ClassModule);
    return ClassModule;
}());

//# sourceMappingURL=class.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_store_actions__ = __webpack_require__("../../../../../src/app/global-store/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(ngRedux, route) {
        this.ngRedux = ngRedux;
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_3__global_store_actions__["e" /* SET_ACTIVE_PAGE */], page: this.route.snapshot.url.toString() });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_redux__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIGN_UP_ATTEMPT; });
var SIGN_UP_ATTEMPT = 'SIGN_UP_ATTEMPT';
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n        <div class=\"col-md-10 ml-md-auto\">\n                <div class=\"row justify-content-md-left\">\n                    <div class=\"col-md-6\">\n                        <h3 class=\"text-primary\">\n                            Gokongwei College of Engineering Quality Assurance\n                        </h3>\n                        <p>\n                            \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"\n                        </p>\n                    </div>\n                    <div *ngIf=\"!(session | async); else logedIn\" class=\"col-md-4\">\n                        <div *ngIf=\"!(signUpAttempt | async); else signup\" >\n                            <app-login [csrf]=\" _csrf| async \" (submitloginData)=\"onLogin($event)\"></app-login>\n                            <p class=\"text-info\"><a href=\"#\" (click)=\"onSignUpAttempt()\">No account yet? click here...</a></p>\n                        </div>\n                        <ng-template #signup>\n                            <div class=\"col\">\n                                <app-signup [csrf]=\" _csrf | async \" (cancel)=\"onSignUpCancel($event)\" (signupData)=\"getSignUpData($event)\"></app-signup>\n                            </div>\n                        </ng-template>\n                    </div>\n                    <ng-template #logedIn class=\"col-md-4\">\n                        <h4>Welcome!!!</h4>\n                    </ng-template>\n                </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_redux__ = __webpack_require__("../../../../ng2-redux/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions__ = __webpack_require__("../../../../../src/app/pages/home/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_store_actions__ = __webpack_require__("../../../../../src/app/global-store/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = (function () {
    function HomeComponent(route, ngRedux, authenticationService, userService, sessionService) {
        var _this = this;
        this.route = route;
        this.ngRedux = ngRedux;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.sessionService = sessionService;
        this.GetCsrf = this.authenticationService.GetCsrf()
            .subscribe(function (csrf) {
            _this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_7__global_store_actions__["c" /* GET_CSRF */], _csrf: csrf._csrf });
        }, function (err) { return console.log(err); });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_7__global_store_actions__["e" /* SET_ACTIVE_PAGE */], page: this.route.snapshot.url.toString() });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        (this.GetCsrf) ? (this.GetCsrf.unsubscribe()) : null;
        (this.UserCreate) ? (this.UserCreate.unsubscribe()) : null;
        (this.SessionCreate) ? (this.SessionCreate.unsubscribe()) : null;
    };
    HomeComponent.prototype.onLogin = function (loginData) {
        var _this = this;
        this.SessionCreate = this.sessionService.SessionCreate(loginData)
            .subscribe(function (session) {
            _this.sessionService.SessionSave(session);
            _this.ngRedux.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_7__global_store_actions__["d" /* LOGED_IN */],
                session: session,
                logedIn: { status: true, message: 'Log in Success!' }
            });
        }, function (err) {
            _this.ngRedux.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_7__global_store_actions__["d" /* LOGED_IN */],
                session: null,
                logedIn: { status: false, message: err._body }
            });
        });
    };
    HomeComponent.prototype.onSignUpAttempt = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__actions__["a" /* SIGN_UP_ATTEMPT */], signUpAttempt: true });
    };
    HomeComponent.prototype.onSignUpCancel = function (toggle) {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_6__actions__["a" /* SIGN_UP_ATTEMPT */], signUpAttempt: toggle });
    };
    HomeComponent.prototype.getSignUpData = function (signupData) {
        var _this = this;
        this.UserCreate = this.userService.CreateUser(signupData)
            .subscribe(function (session) {
            _this.sessionService.SessionSave(session);
            _this.ngRedux.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_7__global_store_actions__["f" /* SIGNED_UP */],
                session: session,
                signedUp: { status: true, message: 'Sign up Success!' },
                logedIn: { status: true, message: 'Log in success!' }
            });
        }, function (err) {
            _this.ngRedux.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_7__global_store_actions__["f" /* SIGNED_UP */],
                signedUp: { status: false, message: err._body }
            });
        });
    };
    HomeComponent.prototype.onLogout = function () {
        this.ngRedux.dispatch({ type: __WEBPACK_IMPORTED_MODULE_7__global_store_actions__["a" /* CHECK_SESSION */], session: this.sessionService.SessionClear() });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5_ng2_redux__["select"])(function (s) { return s.homePage.signUpAttempt; }),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "signUpAttempt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5_ng2_redux__["select"])(function (s) { return s.global._csrf; }),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "_csrf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5_ng2_redux__["select"])(function (s) { return s.global.session; }),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "session", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_redux__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_redux__["NgRedux"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === "function" && _e || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_component_common_component_module__ = __webpack_require__("../../../../../src/app/common-component/common-component.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__common_component_common_component_module__["a" /* CommonComponentModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/home/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOME_PAGE_INITIAL_STATE; });
/* harmony export (immutable) */ __webpack_exports__["b"] = homePageReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign__ = __webpack_require__("../../../../tassign/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tassign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tassign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("../../../../../src/app/pages/home/actions.ts");


var HOME_PAGE_INITIAL_STATE = {
    signUpAttempt: false
};
var signUpToggle = function (state, action) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_tassign__["tassign"])(state, {
        signUpAttempt: action.signUpAttempt
    });
};
function homePageReducer(state, action) {
    if (state === void 0) { state = HOME_PAGE_INITIAL_STATE; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* SIGN_UP_ATTEMPT */]: return signUpToggle(state, action);
    }
    return state;
}
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/app/router-config/router.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_admin_admin_component__ = __webpack_require__("../../../../../src/app/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_class_class_component__ = __webpack_require__("../../../../../src/app/pages/class/class.component.ts");




var routerConfig = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_1__pages_admin_admin_component__["a" /* AdminComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'class', component: __WEBPACK_IMPORTED_MODULE_3__pages_class_class_component__["a" /* ClassComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
//# sourceMappingURL=router.config.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this._csrfTokenUrl = 'csrfToken';
    }
    AuthenticationService.prototype.GetCsrf = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this._csrfTokenUrl, options)
            .map(function (response) { return response.json(); });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());

//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DialogComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogComponent = (function () {
    function DialogComponent(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: "\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{title}}</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"activeModal.close()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n    </div>\n    <div class=\"modal-body\">\n      {{message}}\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"activeModal.close()\">Ok</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _b || Object])
    ], DialogComponent);
    return DialogComponent;
    var _a, _b;
}());

var DialogService = (function () {
    function DialogService(modalService) {
        this.modalService = modalService;
    }
    DialogService.prototype.show = function (title, message) {
        var modalRef = this.modalService.open(DialogComponent);
        modalRef.componentInstance.title = title;
        modalRef.componentInstance.message = message;
        return modalRef.result;
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
    ], DialogService);
    return DialogService;
    var _a;
}());

//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/service.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_service__ = __webpack_require__("../../../../../src/app/services/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ServiceModule = (function () {
    function ServiceModule() {
    }
    ServiceModule_1 = ServiceModule;
    ServiceModule.forRoot = function () {
        return {
            ngModule: ServiceModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_6__dialog_service__["a" /* DialogService */]
            ]
        };
    };
    ServiceModule = ServiceModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]
            ],
            declarations: []
        })
    ], ServiceModule);
    return ServiceModule;
    var ServiceModule_1;
}());

//# sourceMappingURL=service.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionService = (function () {
    function SessionService(http) {
        this.http = http;
        this.sessionCreateUrl = 'session/create';
    }
    SessionService.prototype.SessionCreate = function (sessionCreate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        return this.http.post(this.sessionCreateUrl, sessionCreate, options)
            .map(function (response) { return response.json(); });
    };
    SessionService.prototype.SessionFetch = function () {
        return JSON.parse(sessionStorage.getItem('session'));
    };
    SessionService.prototype.SessionSave = function (session) {
        sessionStorage.setItem('session', JSON.stringify(session));
    };
    SessionService.prototype.SessionClear = function () {
        sessionStorage.clear();
        return JSON.parse(sessionStorage.getItem('session'));
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], SessionService);
    return SessionService;
    var _a;
}());

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.userNewUrl = 'user/create';
    }
    UserService.prototype.CreateUser = function (userNew) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.userNewUrl, userNew, options)
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], UserService);
    return UserService;
    var _a;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_store__ = __webpack_require__("../../../../../src/app/pages/home/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_store_store__ = __webpack_require__("../../../../../src/app/global-store/store.ts");



var INITIAL_STATE = {
    global: __WEBPACK_IMPORTED_MODULE_2__global_store_store__["a" /* GLOBAL_INITIAL_STATE */],
    homePage: __WEBPACK_IMPORTED_MODULE_1__pages_home_store__["a" /* HOME_PAGE_INITIAL_STATE */]
};
var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    global: __WEBPACK_IMPORTED_MODULE_2__global_store_store__["b" /* globalReducer */],
    homePage: __WEBPACK_IMPORTED_MODULE_1__pages_home_store__["b" /* homePageReducer */]
});
//application wide interface, state, reducer
//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map