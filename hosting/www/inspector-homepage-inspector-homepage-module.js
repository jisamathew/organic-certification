(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inspector-homepage-inspector-homepage-module"],{

/***/ "+Fhp":
/*!***************************************************************!*\
  !*** ./src/app/inspector-homepage/inspector-homepage.page.ts ***!
  \***************************************************************/
/*! exports provided: InspectorHomepagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorHomepagePage", function() { return InspectorHomepagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inspector_homepage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inspector-homepage.page.html */ "CtwD");
/* harmony import */ var _inspector_homepage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector-homepage.page.scss */ "LAQQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! truffle-contract */ "9hYf");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3.service */ "pdS3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3 */ "usdr");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_8__);





const ricecertificate_artifacts = __webpack_require__(/*! ../../../build/contracts/RiceCertificate.json */ "pC0y");
var RiceCertificate = truffle_contract__WEBPACK_IMPORTED_MODULE_4___default()(ricecertificate_artifacts);




var metamaskAddress, deployedRiceCertificate;
var sessionarray = [];
let InspectorHomepagePage = class InspectorHomepagePage {
    constructor(web3Service, router, ngZone, alertController, web3) {
        this.web3Service = web3Service;
        this.router = router;
        this.ngZone = ngZone;
        this.alertController = alertController;
        this.web3 = web3;
        // private visibility: boolean = false; 
        this.visibility = false;
        this.model = {
            account: '',
        };
        this.tablevaleany = [];
    }
    ngOnInit() {
        console.log('Accounts getting in modal open');
        console.log('OnInit: ');
        console.log(this.web3Service);
        console.log('Account: ');
        this.watchAccount();
        this.web3Service.artifactsToContract(ricecertificate_artifacts)
            .then((RiceCertificateAbstraction) => {
            this.RiceCertificate = RiceCertificateAbstraction;
            this.RiceCertificate.deployed().then(deployed => {
                console.log(deployed);
                // deployed.Transfer({}, (err, ev) => {
                console.log('Transfer event came in, refreshing balance');
                // this.refreshBalance();
                // });
                this.viewApplicationinTable();
            });
        });
    }
    //get metamask accounts
    watchAccount() {
        this.web3Service.accountsObservable.subscribe((accounts) => {
            console.log("in watchAccount accountsObservable jisa"); //16
            this.accounts = accounts;
            this.model.account = accounts.toString();
            console.log("accounts:" + this.model.account); //17
        });
    }
    viewApplicationinTable() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data;
            data = yield this.getApplications(this.model.account);
            console.log("pkg details");
            console.log(data);
            if (data) {
                this.tablevaleany = data;
                console.log('this.table');
                console.log(this.tablevaleany);
            }
        });
    }
    //application viewed by a farmer
    getApplications(metamaskAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(metamaskAddress);
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            return new Promise((res, rej) => {
                console.log(deployedRiceCertificate);
                deployedRiceCertificate.retApp.call().then(function (data) {
                    console.log(data);
                    // console.log(JSON.parse(data));
                });
                deployedRiceCertificate.getApplicationCount.call()
                    .then(function (v) {
                    console.log('GOT FROM BC');
                    console.log(v);
                    console.log(v.c);
                    var appCount = v;
                    //  var candidatesResults = $("#candidatesResults");
                    //  candidatesResults.empty();
                    for (var i = 0; i < appCount; i++) {
                        deployedRiceCertificate.myStructs(i).then(function (rice) {
                            console.log(rice);
                            console.log(web3__WEBPACK_IMPORTED_MODULE_8___default.a);
                            var farm_id = rice[0].c;
                            var farm_owner = rice[1];
                            var address = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[2]).replace(/[^ -~]+/g, '');
                            console.log(address);
                            //  //LOCATION DECODED
                            var farmloc = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[3]).replace(/[^ -~]+/g, '');
                            //  var location = Geohash.decode(farmloc);
                            //  var latitude = location.lat;
                            //  var longitude = location.lon;
                            //  console.log('Latitude : ' + latitude + ',Longitude:' + longitude)
                            //  var requirement =  Web3.prototype.toAscii(rice[4]).replace(/[^ -~]+/g, '');
                            var requirement = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[4]).replace(/[^ -~]+/g, '');
                            var standard = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[5]).replace(/[^ -~]+/g, '');
                            var account = rice[6];
                            var stat = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[7]).replace(/[^ -~]+/g, '');
                            console.log(stat);
                            console.log('ID : ' + farm_id + ' , FARMER : ' + farm_owner + ' ,ADDRESS : ' + address + ',REQUIREMENT : ' + requirement + ',STANDARD:' + standard + ',ACCOUNT' + account);
                            sessionarray.push({
                                'farm_id': farm_id,
                                'farm_owner': farm_owner,
                                'address': address,
                                'farmloc': farmloc,
                                'requirement': requirement,
                                'standard': standard,
                                'stat': stat,
                            });
                            // if(stat == 'Pending'){
                            //   this.visibility = true;
                            // }
                            // else{
                            //   this.visibility = false;
                            // }
                            console.log('sessionarray');
                            console.log(sessionarray);
                            res(sessionarray);
                            // Render candidate Result
                            //  var candidateTemplate = "<tr><th>" + farm_id + "</th><td>" + farm_owner + "</td><td>" + address + "</td><td>" + latitude + "</td><td>" + longitude + "</td><td>" + requirement + "</td><td>" + standard + "</td><td>" + account + "</td><td>" + stat + "</td></tr>"
                            //  candidatesResults.append(candidateTemplate);
                            //     // Render candidate ballot option
                            /*        var candidateOption = "<option value='" + farm_id + "' >" + farm_owner + "</ option>"
                                     candidatesSelect.append(candidateOption);
                            */
                        });
                    }
                });
            });
        });
    }
    viewCompleteData(e) {
        console.log(e.target.id);
        var farmid = e.target.id;
        this.ngZone.run(() => this.navigateTo('inspector-approvecheck/', farmid));
        this.router.onSameUrlNavigation = 'reload';
    }
    navigateTo(url, farmid) {
        this.router.navigate([url + farmid]);
    }
};
InspectorHomepagePage.ctorParameters = () => [
    { type: _web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: web3__WEBPACK_IMPORTED_MODULE_8___default.a, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"],] }] }
];
InspectorHomepagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inspector-homepage',
        template: _raw_loader_inspector_homepage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inspector_homepage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InspectorHomepagePage);



/***/ }),

/***/ "CtwD":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspector-homepage/inspector-homepage.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>inspector-homepage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n    <ion-grid>\n      <ion-row class=\"header-row\" style=\"background-color:aliceblue;\">\n        <ion-col>\n          Farm_ID\n        </ion-col>\n        <ion-col>Name</ion-col>\n        <ion-col>Address</ion-col>\n          <!-- <ion-col >Requirement</ion-col>  -->\n        <ion-col>Standard</ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let data1 of tablevaleany\" class=\"data-row\">\n        <ion-col>{{ data1.farm_id}}</ion-col>\n        <ion-col>{{ data1.farm_owner}}</ion-col>\n        <ion-col>{{data1.address}}</ion-col>\n        <!-- <ion-col >{{data1.requirement}}</ion-col> -->\n        <ion-col>{{data1.standard}}</ion-col>\n        <ion-button *ngIf=\"visibility\" id=\"{{data1.farm_id}}\" (click)=\"viewCompleteData($event)\"  >Check</ion-button>\n        <ion-button *ngIf=\"!visibility\" id=\"{{data1.farm_id}}\" (click)=\"viewCompleteData($event)\"  >Check</ion-button>\n\n      </ion-row>\n\n    </ion-grid>\n  </ion-card>\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-item>\n            <ion-icon name=\"shield-checkmark-outline\"  slot=\"start\" color=\"danger\"></ion-icon>\n            <ion-label>Verify Application</ion-label>\n            \n            <ion-button fill=\"outline\" slot=\"end\" color=\"danger\" (click)=\"viewApplicationForm()\">Proceed</ion-button>\n          </ion-item>\n\n          <ion-card-content>\n            Click to view application form for organic farm certication.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n     \n      <ion-col>\n        <ion-card>\n          <ion-item>\n            <ion-icon name=\"search-circle-outline\"  slot=\"start\" color=\"success\"></ion-icon>\n            <ion-label>Search Application</ion-label>\n            <ion-button fill=\"outline\" slot=\"end\" (click)=\"viewAllApplication()\" color=\"success\">Proceed</ion-button>\n          </ion-item>\n\n          <ion-card-content>\n            Click to view all applications.\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n  </ion-grid> -->\n</ion-content>");

/***/ }),

/***/ "IUMq":
/*!*****************************************************************!*\
  !*** ./src/app/inspector-homepage/inspector-homepage.module.ts ***!
  \*****************************************************************/
/*! exports provided: InspectorHomepagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorHomepagePageModule", function() { return InspectorHomepagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inspector_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector-homepage-routing.module */ "qLbn");
/* harmony import */ var _inspector_homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector-homepage.page */ "+Fhp");







let InspectorHomepagePageModule = class InspectorHomepagePageModule {
};
InspectorHomepagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inspector_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["InspectorHomepagePageRoutingModule"]
        ],
        declarations: [_inspector_homepage_page__WEBPACK_IMPORTED_MODULE_6__["InspectorHomepagePage"]]
    })
], InspectorHomepagePageModule);



/***/ }),

/***/ "LAQQ":
/*!*****************************************************************!*\
  !*** ./src/app/inspector-homepage/inspector-homepage.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  width: 100px;\n  height: 100px;\n}\n\n.header-row {\n  text-align: center;\n}\n\n.data-row {\n  text-align: center;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2luc3BlY3Rvci1ob21lcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6Imluc3BlY3Rvci1ob21lcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbi5oZWFkZXItcm93e1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIC8vIHBhZGRpbmctbGVmdDogMTBweDtcblxufVxuLmRhdGEtcm93e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHg7IFxufVxuLy8gLmhlYWRlci1yb3cge1xuXG4vLyBcdC8vIGZvbnQtd2VpZ2h0OjUwMDtcbi8vIFx0Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzAwMDtcbi8vIFx0Zm9udC1zaXplOiAxOHB4O1xuLy8gXHRmb250LXdlaWdodDogYm9sZDsgXG4vLyBcdC8vIGJhY2tncm91bmQtY29sb3I6Z3JlZW47XG5cbi8vICAgfVxuLy8gLmRhdGEtcm93e1xuLy8gXHRib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMDAwO1xuXG4vLyB9XG5cbi8vIFx0aW9uLWdyaWQgeyBcbi8vIFx0XHR3aWR0aDogMTAwJTsgXG4vLyBcdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXG4vLyBcdH1cblxuLy8gXHRpb24tcm93Om50aC1vZi10eXBlKG9kZCkgeyBcbi8vIFx0XHRiYWNrZ3JvdW5kOiAjZWVlOyBcbi8vIFx0fVxuXG4vLyBpb24tY29sIHsgXG4vLyBcdFx0cGFkZGluZzogNnB4OyBcbi8vIFx0XHRib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXG4vLyBcdFx0dGV4dC1hbGlnbjogbGVmdDsgXG4vLyBcdFx0Ly8gYmFja2dyb3VuZDojY2NjO1xuLy8gXHR9XG5cbiJdfQ== */");

/***/ }),

/***/ "qLbn":
/*!*************************************************************************!*\
  !*** ./src/app/inspector-homepage/inspector-homepage-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: InspectorHomepagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorHomepagePageRoutingModule", function() { return InspectorHomepagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inspector_homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector-homepage.page */ "+Fhp");




const routes = [
    {
        path: '',
        component: _inspector_homepage_page__WEBPACK_IMPORTED_MODULE_3__["InspectorHomepagePage"]
    }
];
let InspectorHomepagePageRoutingModule = class InspectorHomepagePageRoutingModule {
};
InspectorHomepagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InspectorHomepagePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=inspector-homepage-inspector-homepage-module.js.map