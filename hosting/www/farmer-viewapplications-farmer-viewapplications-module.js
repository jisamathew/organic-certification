(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["farmer-viewapplications-farmer-viewapplications-module"],{

/***/ "DDVZ":
/*!***************************************************************************!*\
  !*** ./src/app/farmer-viewapplications/farmer-viewapplications.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  align-items: center;\n}\n\nion-content {\n  --background: #fff url('background.jpg') no-repeat center center / cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zhcm1lci12aWV3YXBwbGljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFPQTtFQUNFLHdFQUFBO0FBSkYiLCJmaWxlIjoiZmFybWVyLXZpZXdhcHBsaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIHdpZHRoOiA1MCU7XG59XG4vLyBpb24tY29udGVudHtcblxuLy8gICAvLyAtLWlvbi1cbi8vICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGJsdWU7XG4vLyB9XG5pb24tY29udGVudHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmIHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "M5da":
/*!***************************************************************************!*\
  !*** ./src/app/farmer-viewapplications/farmer-viewapplications.module.ts ***!
  \***************************************************************************/
/*! exports provided: FarmerViewapplicationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerViewapplicationsPageModule", function() { return FarmerViewapplicationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _farmer_viewapplications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./farmer-viewapplications-routing.module */ "xvUi");
/* harmony import */ var _farmer_viewapplications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./farmer-viewapplications.page */ "S6NZ");







let FarmerViewapplicationsPageModule = class FarmerViewapplicationsPageModule {
};
FarmerViewapplicationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _farmer_viewapplications_routing_module__WEBPACK_IMPORTED_MODULE_5__["FarmerViewapplicationsPageRoutingModule"]
        ],
        declarations: [_farmer_viewapplications_page__WEBPACK_IMPORTED_MODULE_6__["FarmerViewapplicationsPage"]]
    })
], FarmerViewapplicationsPageModule);



/***/ }),

/***/ "S6NZ":
/*!*************************************************************************!*\
  !*** ./src/app/farmer-viewapplications/farmer-viewapplications.page.ts ***!
  \*************************************************************************/
/*! exports provided: FarmerViewapplicationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerViewapplicationsPage", function() { return FarmerViewapplicationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_farmer_viewapplications_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./farmer-viewapplications.page.html */ "VXbP");
/* harmony import */ var _farmer_viewapplications_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmer-viewapplications.page.scss */ "DDVZ");
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
let FarmerViewapplicationsPage = class FarmerViewapplicationsPage {
    constructor(web3Service, router, alertController, web3) {
        this.web3Service = web3Service;
        this.router = router;
        this.alertController = alertController;
        this.web3 = web3;
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
            var that = this;
            let appcount;
            appcount = yield this.getApplications(this.model.account);
            console.log("appcount");
            console.log(appcount);
            var myArray = new Array();
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            if (appcount) {
                console.log(appcount);
                for (var i = 0; i < appcount.length; i++) {
                    //   myArray.push(data[i])
                    // }
                    console.log('appcount[i]');
                    console.log(appcount[i].c[0]);
                    var id = appcount[i].c[0];
                    var callComplete = yield deployedRiceCertificate.getInfo.call(appcount[i].c[0]).then(function (rice) {
                        return new Promise((res, rej) => {
                            console.log(rice);
                            console.log(web3__WEBPACK_IMPORTED_MODULE_8___default.a);
                            var farm_id = rice[6];
                            var address = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[1]).replace(/[^ -~]+/g, '');
                            var farm_owner = rice[0];
                            var requirement = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[3]).replace(/[^ -~]+/g, '');
                            console.log(address);
                            console.log('requirement', requirement);
                            //  //LOCATION DECODED
                            var farmloc = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[2]).replace(/[^ -~]+/g, '');
                            //  var location = Geohash.decode(farmloc);
                            //  var latitude = location.lat;
                            //  var longitude = location.lon;
                            //  console.log('Latitude : ' + latitude + ',Longitude:' + longitude)
                            var standard = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[4]).replace(/[^ -~]+/g, '');
                            // var stat  = Web3.prototype.toAscii(rice[5]).replace(/[^ -~]+/g, '');
                            // var account =rice[5];
                            var stat = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(rice[5]).replace(/[^ -~]+/g, '');
                            console.log(stat, standard);
                            console.log('ID : ' + farm_id + ' , FARMER : ' + farm_owner + ' ,ADDRESS : ' + address + ',REQUIREMENT : ' + requirement + ',STANDARD:' + standard + ',Status' + stat);
                            sessionarray.push({
                                'farm_id': farm_id,
                                'farm_owner': farm_owner,
                                'address': address,
                                'farmloc': farmloc,
                                'requirement': requirement,
                                'standard': standard,
                                'stat': stat,
                            });
                            // if(stat == "Certified"){
                            //   that.completed=true;
                            // }
                            // else{
                            //   that.completed = false;
                            // }
                            console.log('sessionarray');
                            console.log(sessionarray);
                            res(sessionarray);
                            //  this.tablevaleany=sessionarray;
                            // res(sessionarray);
                            // Render candidate Result
                            //  var candidateTemplate = "<tr><th>" + farm_id + "</th><td>" + farm_owner + "</td><td>" + address + "</td><td>" + latitude + "</td><td>" + longitude + "</td><td>" + requirement + "</td><td>" + standard + "</td><td>" + account + "</td><td>" + stat + "</td></tr>"
                            //  candidatesResults.append(candidateTemplate);
                            //     // Render candidate ballot option
                            /*        var candidateOption = "<option value='" + farm_id + "' >" + farm_owner + "</ option>"
                                     candidatesSelect.append(candidateOption);
                            */
                        });
                    });
                    if (!callComplete) {
                        console.log('dsfd');
                    }
                    else {
                        console.log(sessionarray);
                        this.tablevaleany = sessionarray;
                        console.log('this.table');
                        console.log(this.tablevaleany);
                    }
                }
                // this.tablevaleany=data;
                // console.log('this.table');
                // console.log(this.tablevaleany)
            }
        });
    }
    //application viewed by a farmer
    getApplications(metamaskAddress) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('metamaskAddress...********************');
            console.log(metamaskAddress);
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            return new Promise((res, rej) => {
                console.log(deployedRiceCertificate);
                deployedRiceCertificate.getFarm(metamaskAddress).then(function (v) {
                    console.log('Farm data got');
                    console.log(v);
                    if (v.length >= 1) {
                        // var Application = new Array();
                        // for (var i = 0; i < v.length; i++) {
                        //   // console.log(Web3.prototype)
                        //   console.log(v[i].c[0]);
                        //   var orderno1 =v[i].c[0];
                        //   var pr;
                        //   if (Application.includes(orderno1)) {
                        //     continue;
                        //   } else {
                        //     Application.push(orderno1);
                        //   }
                        // }
                        res(v);
                    }
                    else {
                        console.log('Sorry No application found');
                    }
                    // deployedRiceCertificate.getApplicationCount.call()
                    //   .then(function (v) {
                    //     console.log('GOT FROM BC')
                    //     console.log(v)
                    //     console.log(v.c)
                    //     var appCount = v;
                    //     //  var candidatesResults = $("#candidatesResults");
                    //     //  candidatesResults.empty();
                    //   })
                });
            });
        });
    }
    getSingleData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((res, rej) => {
                // res(v)
            });
        });
    }
};
FarmerViewapplicationsPage.ctorParameters = () => [
    { type: _web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: web3__WEBPACK_IMPORTED_MODULE_8___default.a, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"],] }] }
];
FarmerViewapplicationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-farmer-viewapplications',
        template: _raw_loader_farmer_viewapplications_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_farmer_viewapplications_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FarmerViewapplicationsPage);



/***/ }),

/***/ "VXbP":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farmer-viewapplications/farmer-viewapplications.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n  <ion-toolbar color=\"dark\">\n    <!-- <ion-icon name=\"arrow-back-outline\" slot=\"start\" ></ion-icon> -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button default-href=\"home\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Welcome Farmer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card class=\"center\">\n\n  <ion-grid >\n    <ion-row class=\"header-row\" style=\"background-color:aliceblue;\">\n      <ion-col >\n        Farm_ID\n      </ion-col>\n      <ion-col >Name</ion-col>\n      <ion-col >Address</ion-col>\n      <!-- <ion-col > Location</ion-col>-->\n        <ion-col >Requirement</ion-col>\n          <ion-col >Standard</ion-col>\n            <ion-col >Status</ion-col>\n    </ion-row>\n    <ion-row *ngFor = \"let data1 of tablevaleany\" class=\"data-row\">\n      <ion-col >{{ data1.farm_id}}</ion-col>\n      <ion-col >{{ data1.farm_owner}}</ion-col>\n  <ion-col >{{data1.address}}</ion-col>\n      <!-- <ion-col >{{data1.farmloc}}</ion-col>-->\n      <ion-col >{{data1.requirement}}</ion-col>\n      <ion-col >{{data1.standard}}</ion-col>\n      <ion-col >{{data1.stat}}</ion-col>\n      <!-- *ngIf=\"{{data1.stat}} == 'Certified'\" -->\n    <!-- <ion-col> <ion-button>PRINT</ion-button></ion-col> -->\n    </ion-row>\n\n  </ion-grid>\n</ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "xvUi":
/*!***********************************************************************************!*\
  !*** ./src/app/farmer-viewapplications/farmer-viewapplications-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FarmerViewapplicationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerViewapplicationsPageRoutingModule", function() { return FarmerViewapplicationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _farmer_viewapplications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farmer-viewapplications.page */ "S6NZ");




const routes = [
    {
        path: '',
        component: _farmer_viewapplications_page__WEBPACK_IMPORTED_MODULE_3__["FarmerViewapplicationsPage"]
    }
];
let FarmerViewapplicationsPageRoutingModule = class FarmerViewapplicationsPageRoutingModule {
};
FarmerViewapplicationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FarmerViewapplicationsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=farmer-viewapplications-farmer-viewapplications-module.js.map