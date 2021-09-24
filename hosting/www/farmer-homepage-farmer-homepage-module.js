(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["farmer-homepage-farmer-homepage-module"],{

/***/ "Fk46":
/*!***********************************************************!*\
  !*** ./src/app/farmer-homepage/farmer-homepage.module.ts ***!
  \***********************************************************/
/*! exports provided: FarmerHomepagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerHomepagePageModule", function() { return FarmerHomepagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _farmer_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./farmer-homepage-routing.module */ "T9hF");
/* harmony import */ var _farmer_homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./farmer-homepage.page */ "vxTm");







let FarmerHomepagePageModule = class FarmerHomepagePageModule {
};
FarmerHomepagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _farmer_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["FarmerHomepagePageRoutingModule"]
        ],
        declarations: [_farmer_homepage_page__WEBPACK_IMPORTED_MODULE_6__["FarmerHomepagePage"]]
    })
], FarmerHomepagePageModule);



/***/ }),

/***/ "HIdL":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farmer-homepage/farmer-homepage.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"dark\">\n    <ion-title>Welcome Farmer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-grid>\n    <ion-row >\n      <ion-col size=\"12\" size-sm class=\"ion-justify-content-between\"> -->\n        <ion-card>\n          <ion-card-header>\n            <img src=\"../../assets/images/application2.jpg\">\n\n          </ion-card-header>\n          <!-- <ion-item>\n            <ion-icon name=\"create-outline\" slot=\"start\" color=\"danger\"></ion-icon>\n          </ion-item> -->\n          <h3>Application Form</h3>\n\n          <ion-card-content>\n\n          Organic Farm Certication\n          <ion-button tappable slot=\"end\" color=\"danger\" (click)=\"viewApplicationForm()\">Proceed</ion-button>\n\n          </ion-card-content>\n        </ion-card>\n      <!-- </ion-col>\n</ion-row>\n<ion-row >\n\n      <ion-col size=\"12\" size-sm class=\"ion-justify-content-between\">\n        --> <ion-card>\n          <ion-card-header>\n            <img src=\"../../assets/images/view2.jpg\">\n\n          </ion-card-header>\n          <!-- <ion-item>\n            <ion-icon name=\"eye-outline\" slot=\"start\" color=\"success\"></ion-icon>\n          </ion-item> -->\n          <h3>View Application</h3>\n          <ion-card-content>\n            Click to view all applications.\n            <ion-button tappable  slot=\"end\" (click)=\"viewAllApplication()\" color=\"success\">Proceed</ion-button>\n\n          </ion-card-content>\n        </ion-card>\n        <!--\n      </ion-col>\n      </ion-row>\n    <ion-row >\n\n      <ion-col size=\"12\" size-sm class=\"ion-justify-content-between\"> -->\n        <ion-card>\n          <ion-card-header>\n            <img src=\"../../assets/images/status.jpg\">\n\n          </ion-card-header>\n          <!-- <ion-item>\n            <ion-icon name=\"analytics-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n          </ion-item> -->\n          <h3>Status of Application</h3>\n\n          <ion-card-content>\n            Application Status Hierarchy.\n            <ion-button tappable slot=\"end\" (click)=\"viewStatus()\" color=\"primary\">Proceed</ion-button>\n\n          </ion-card-content>\n        </ion-card>\n      <!-- </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n</ion-content>\n<!-- <ion-button>Default</ion-button>\n<ion-button color=\"primary\">Primary</ion-button>\n<ion-button color=\"secondary\">Secondary</ion-button>\n<ion-button color=\"tertiary\">Tertiary</ion-button>\n<ion-button color=\"success\">Success</ion-button>\n<ion-button color=\"warning\">Warning</ion-button>\n<ion-button color=\"danger\">Danger</ion-button>\n<ion-button color=\"light\">Light</ion-button>\n<ion-button color=\"medium\">Medium</ion-button>\n<ion-button color=\"dark\">Dark</ion-button> -->\n");

/***/ }),

/***/ "T9hF":
/*!*******************************************************************!*\
  !*** ./src/app/farmer-homepage/farmer-homepage-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: FarmerHomepagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerHomepagePageRoutingModule", function() { return FarmerHomepagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _farmer_homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farmer-homepage.page */ "vxTm");




const routes = [
    {
        path: '',
        component: _farmer_homepage_page__WEBPACK_IMPORTED_MODULE_3__["FarmerHomepagePage"]
    }
];
let FarmerHomepagePageRoutingModule = class FarmerHomepagePageRoutingModule {
};
FarmerHomepagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FarmerHomepagePageRoutingModule);



/***/ }),

/***/ "VZSu":
/*!***********************************************************!*\
  !*** ./src/app/farmer-homepage/farmer-homepage.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zhcm1lci1ob21lcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNBO0VBQ0UsV0FBQTtBQTVDRiIsImZpbGUiOiJmYXJtZXItaG9tZXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gaW9uLWNhcmQge1xuLy8gLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAvLyAgIH1cbi8vIGlvbi1ncmlke1xuLy8gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKTtcbi8vICAgaGVpZ2h0OiAxMDAlO1xuLy8gLy8gbWFyZ2luOiAxMDBweDtcbi8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gfVxuLy8gaW1ne1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiAzMDBweDtcbi8vIH1cbi8vIGlvbi1sYWJlbHtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIGNvbG9yOiBibGFjaztcbi8vICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuLy8gfVxuLy8gaW9uLWljb257XG4vLyAgICAgd2lkdGg6IDEwMHB4O1xuLy8gICAgIGhlaWdodDogMTAwcHg7XG4vLyB9XG4vLyBpb24tY2FyZHtcbi8vICAgd2lkdGg6MTAwJTtcbi8vICAgLy8gaGVpZ2h0OiAzMDBweDtcbi8vICAgbWFyZ2luLXRvcDogMzBweDs7XG4vLyB9XG4vLyAgIC5jYXJkLXRpdGxlIHtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgdG9wOiAzNiU7XG4vLyAgICAgZm9udC1zaXplOiAyLjBlbTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vICAgfVxuXG4vLyAgIC5jYXJkLXN1YnRpdGxlIHtcbi8vICAgICBmb250LXNpemU6IDEuMGVtO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDUyJTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBjb2xvcjogI2ZmZjtcbi8vICAgfVxuaW1ne1xuICB3aWR0aDogMTAwJTtcbiAgLy8gaGVpZ2h0OiAzMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "vxTm":
/*!*********************************************************!*\
  !*** ./src/app/farmer-homepage/farmer-homepage.page.ts ***!
  \*********************************************************/
/*! exports provided: FarmerHomepagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerHomepagePage", function() { return FarmerHomepagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_farmer_homepage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./farmer-homepage.page.html */ "HIdL");
/* harmony import */ var _farmer_homepage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmer-homepage.page.scss */ "VZSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






let FarmerHomepagePage = class FarmerHomepagePage {
    constructor(router, ngZone) {
        this.router = router;
        this.ngZone = ngZone;
    }
    ngOnInit() {
    }
    viewApplicationForm() {
        this.ngZone.run(() => this.navigateTo('farmer-application-form'));
    }
    viewStatus() {
        this.ngZone.run(() => this.navigateTo('farmer-statusview'));
    }
    viewAllApplication() {
        this.ngZone.run(() => this.navigateTo('farmer-viewapplications'));
    }
    navigateTo(url) {
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([url]);
    }
};
FarmerHomepagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
FarmerHomepagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-farmer-homepage',
        template: _raw_loader_farmer_homepage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_farmer_homepage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FarmerHomepagePage);



/***/ })

}]);
//# sourceMappingURL=farmer-homepage-farmer-homepage-module.js.map