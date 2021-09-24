(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["certifier-homepage-certifier-homepage-module"],{

/***/ "/GYn":
/*!*****************************************************************!*\
  !*** ./src/app/certifier-homepage/certifier-homepage.module.ts ***!
  \*****************************************************************/
/*! exports provided: CertifierHomepagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifierHomepagePageModule", function() { return CertifierHomepagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _certifier_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certifier-homepage-routing.module */ "fVRi");
/* harmony import */ var _certifier_homepage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certifier-homepage.page */ "hTC/");







let CertifierHomepagePageModule = class CertifierHomepagePageModule {
};
CertifierHomepagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _certifier_homepage_routing_module__WEBPACK_IMPORTED_MODULE_5__["CertifierHomepagePageRoutingModule"]
        ],
        declarations: [_certifier_homepage_page__WEBPACK_IMPORTED_MODULE_6__["CertifierHomepagePage"]]
    })
], CertifierHomepagePageModule);



/***/ }),

/***/ "/UE4":
/*!*****************************************************************!*\
  !*** ./src/app/certifier-homepage/certifier-homepage.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpZXItaG9tZXBhZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "fVRi":
/*!*************************************************************************!*\
  !*** ./src/app/certifier-homepage/certifier-homepage-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CertifierHomepagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifierHomepagePageRoutingModule", function() { return CertifierHomepagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _certifier_homepage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certifier-homepage.page */ "hTC/");




const routes = [
    {
        path: '',
        component: _certifier_homepage_page__WEBPACK_IMPORTED_MODULE_3__["CertifierHomepagePage"]
    }
];
let CertifierHomepagePageRoutingModule = class CertifierHomepagePageRoutingModule {
};
CertifierHomepagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CertifierHomepagePageRoutingModule);



/***/ }),

/***/ "hTC/":
/*!***************************************************************!*\
  !*** ./src/app/certifier-homepage/certifier-homepage.page.ts ***!
  \***************************************************************/
/*! exports provided: CertifierHomepagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifierHomepagePage", function() { return CertifierHomepagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_certifier_homepage_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./certifier-homepage.page.html */ "pjZT");
/* harmony import */ var _certifier_homepage_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certifier-homepage.page.scss */ "/UE4");
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
let CertifierHomepagePage = class CertifierHomepagePage {
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
        var farmid = e.target.id;
        console.log(e.target.id);
        this.ngZone.run(() => this.navigateTo('certifier-certification/', farmid));
    }
    navigateTo(url, farmid) {
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([url + JSON.stringify(farmid)]);
    }
};
CertifierHomepagePage.ctorParameters = () => [
    { type: _web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: web3__WEBPACK_IMPORTED_MODULE_8___default.a, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"],] }] }
];
CertifierHomepagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-certifier-homepage',
        template: _raw_loader_certifier_homepage_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_certifier_homepage_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CertifierHomepagePage);



/***/ }),

/***/ "pjZT":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/certifier-homepage/certifier-homepage.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-title>Welcome Certifier</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n\n    <ion-grid >\n      <ion-row class=\"header-row\" style=\"background-color:aliceblue;\">\n        <ion-col >\n          Farm_ID\n        </ion-col>\n        <ion-col >Name</ion-col>\n        <ion-col >Address</ion-col>\n        <!-- <ion-col > Location</ion-col>-->\n          <ion-col >Requirement</ion-col>\n            <ion-col >Standard</ion-col>\n              <ion-col >Status</ion-col>\n      </ion-row>\n      <ion-row *ngFor = \"let data1 of tablevaleany\" class=\"data-row\">\n        <ion-col >{{ data1.farm_id}}</ion-col>\n        <ion-col >{{ data1.farm_owner}}</ion-col>\n    <ion-col >{{data1.address}}</ion-col>\n        <!-- <ion-col >{{data1.farmloc}}</ion-col>-->\n        <ion-col >{{data1.requirement}}</ion-col>\n        <ion-col >{{data1.standard}}</ion-col>\n        <!-- <ion-col >{{data1.stat}}</ion-col> -->\n      <ion-button id={{data1.farm_id}} (click)=\"viewCompleteData($event)\">Check</ion-button>\n      </ion-row>\n\n    </ion-grid>\n  </ion-card>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=certifier-homepage-certifier-homepage-module.js.map