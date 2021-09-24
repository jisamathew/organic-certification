(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["certifier-certification-certifier-certification-module"],{

/***/ "1Hbg":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/certifier-certification/certifier-certification.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button default-href=\"home\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Welcome Certifier</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"viewApp\" style=\"display:none;\">\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th scope=\"col\">#</th>\n          <th scope=\"col\">Farmer</th>\n          <th scope=\"col\">Address</th>\n          <th scope=\"col\">Latitude</th>\n          <th scope=\"col\">Longitude</th>\n          <th scope=\"col\">Requirement</th>\n          <th scope=\"col\">Standard</th>\n          <th scope=\"col\">Account</th>\n        </tr>\n      </thead>\n      <tbody id=\"candidatesResults\">\n      </tbody>\n    </table>\n  </div>\n  <ion-card  id=\"SingleApplication1\" class=\"row\" style=\"display:none;\">\n    <ion-card-header>\n      <h1>CERTIFICATION</h1>\n      </ion-card-header>\n    <ion-grid>\n<ion-row>\n  <ion-col>\n\n    <ion-item >\n      <ion-label>\n        Application id\n      </ion-label>\n      <ion-label id=\"fieldid\" >\n      </ion-label>\n    </ion-item>\n    <ion-item >\n      <ion-label>\n        Field Owner\n      </ion-label>\n      <ion-label id=\"owner\" >\n      </ion-label>\n    </ion-item>\n    <ion-item >\n      <ion-label>\n        Address\n      </ion-label>\n      <ion-label id=\"addr\" >\n      </ion-label>\n    </ion-item>\n    <ion-item >\n      <ion-label>\n        Requirement\n      </ion-label>\n      <ion-label id=\"production\" >\n      </ion-label>\n    </ion-item>\n\n  <ion-item >\n    <ion-label>\n      Standard\n    </ion-label>\n    <ion-label id=\"std\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Cropping System followed\n    </ion-label>\n\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      (i) Name of the Crop\n    </ion-label>\n    <ion-label id=\"crop\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      (ii) Extent of each crop grown\n    </ion-label>\n    <ion-label id=\"extent\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Input applied to previous crops\n    </ion-label>\n    <ion-label id=\"precrop\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Plant Protection measures followed\n    </ion-label>\n    <ion-label id=\"protect\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Source of manure\n    </ion-label>\n    <ion-label id=\"manure\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Source of seed\n\n    </ion-label>\n    <ion-label id=\"seed\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Soil Type\n    </ion-label>\n    <ion-label id=\"soil1\" >\n    </ion-label>\n  </ion-item>\n  </ion-col>\n  <ion-col>\n\n  <ion-item >\n\n    <ion-label>\n      Status\n    </ion-label>\n    <ion-label id=\"stat1\" >\n    </ion-label>\n  </ion-item>\n  <ion-card>\n    <div style=\"width:auto; height: 500px;\"  id=\"mapFrame\"></div>\n    </ion-card>\n\n</ion-col>\n\n</ion-row>\n<ion-row id=\"InspectionDiv\">\n  <ion-col>\n    <h2>Inspection Details</h2>\n    <ion-item >\n      <ion-label>\n        Tentative Date of Inspection:\n      </ion-label>\n      <ion-label id=\"idate2\">\n      </ion-label>\n        </ion-item>\n        <ion-item >\n          <ion-label>\n            Inspector Name\n          </ion-label>\n          <ion-label  id=\"iname2\">\n          </ion-label>\n  </ion-item>\n  </ion-col>\n\n</ion-row>\n<ion-row>\n  <ion-col>\n      <ion-card id=\"Certify\" style=\"display:none;\">\n    <h2>Certification Details</h2>\n\n      <ion-item>\n        <ion-label position=\"floating\">Certified By</ion-label>\n        <ion-input id=\"cname\"></ion-input>\n\n      </ion-item>\n\n\n      <ion-item>\n  <ion-label position=\"floating\">Validity</ion-label>\n\n        <ion-label>Year</ion-label>\n        <ion-select id=\"fromyr\" value=\"2021\" disabled>\n          <ion-select-option value=\"2021\">2021</ion-select-option>\n          <!-- <ion-select-option value=\"2022\">1990</ion-select-option>\n            <ion-select-option value=\"202\">1991</ion-select-option>\n            <ion-select-option value=\"1992\">1992</ion-select-option>\n            <ion-select-option value=\"1993\">1993</ion-select-option>\n            <ion-select-option value=\"1994\">1994</ion-select-option>\n            <ion-select-option value=\"1995\">1995</ion-select-option>\n            <ion-select-option value=\"1996\">1996</ion-select-option>\n            <ion-select-option value=\"1997\">1997</ion-select-option>\n            <ion-select-option value=\"1998\">1998</ion-select-option>\n            <ion-select-option value=\"1999\">1999</ion-select-option> -->\n        </ion-select>\n        <!-- <ion-datetime\n          #fromyr\n          placeholder=\"Choose Year\"\n          displayFormat=\"YYYY\"\n          min=\"2021\"\n          max=\"2035\"\n          [(ngModel)]=\"selYear\">\n          </ion-datetime> -->\n\n\n        <ion-select id=\"toyr\" value=\"2022\">\n          <ion-select-option value=\"2022\">2022</ion-select-option>\n          <ion-select-option value=\"2023\">2023</ion-select-option>\n          <ion-select-option value=\"2024\">2024</ion-select-option>\n          <ion-select-option value=\"2025\">2025</ion-select-option>\n          <ion-select-option value=\"2026\">2026</ion-select-option>\n          <ion-select-option value=\"2027\">2027</ion-select-option>\n          <ion-select-option value=\"2028\">2028</ion-select-option>\n          <ion-select-option value=\"2029\">2029</ion-select-option>\n          <ion-select-option value=\"2030\">2030</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!-- <select type=\"dropdown\" id=\"fromyr\" disabled></select> -\n        <select type=\"dropdown\" id=\"toyr\"></select> -->\n      <!--\n  <br><br><label for=\"receiver\">Certified By:</label><input type=\"text\" id=\"authority\" disabled></input>-->\n      <ion-item>\n        <ion-button slot=\"end\" id=\"send\" (click)=\"certifyFarm()\">CERTIFY</ion-button>\n\n      </ion-item>\n      <!--<div id=\"content\" style=\"display: none;\">\n        <p>\n          <img id=\"qrcode\" src=\"\" />\n        </p>\n      </div>-->\n  </ion-card>\n</ion-col>\n\n</ion-row>\n</ion-grid>\n    </ion-card>\n\n\n  <ion-card id=\"FinalCertificate\" style=\"display:none;\">\n\n    <ion-card-header >\n      <ion-card-title style=\"text-align: center;\">CERTIFICATE</ion-card-title>\n      </ion-card-header>\n<ion-grid>\n  <ion-row>\n    <ion-col >\n      This is to certify that the field is Organic\n    </ion-col>\n    <ion-col>\n        <img id=\"logo\" src=\"\" style=\"float:right;\" height=\"80\" width=\"80\">\n\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row>\n    <ion-col>\n  <h3>FARM DETAILS</h3>\n\n    </ion-col>\n    </ion-row> -->\n  <ion-row>\n\n<ion-col>\n\n<ion-item>\n  <ion-label> Field_id </ion-label>\n  <ion-label id=\"farm\"></ion-label>\n</ion-item>\n<ion-item>\n  <ion-label type=\"stacked\"> Ownership </ion-label>\n  <ion-label id=\"owns\"></ion-label>\n  <ion-label id=\"add\"></ion-label>\n\n</ion-item>\n\n<ion-item>\n  <ion-label> Seed Source </ion-label>\n  <ion-label  id=\"seedsource\"></ion-label>\n</ion-item>\n\n</ion-col>\n<ion-col>\n\n  <ion-item>\n    <ion-label>  Certification for </ion-label>\n    <ion-label  id=\"re\"></ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label> Soil type</ion-label>\n    <ion-label  id=\"soiltype2\"></ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label> Certification Standard</ion-label>\n    <ion-label  id=\"stnd\"></ion-label>\n  </ion-item>\n\n</ion-col>\n\n  </ion-row>\n<ion-row>\n  <ion-col>\n    <ion-card style=\"width:auto; height: 200px;\" id=\"mapSh\" ></ion-card>\n    </ion-col>\n  </ion-row>\n<ion-row>\n  <!-- <ion-col>\n    <h3>INSPECTION DETAILS</h3>\n  </ion-col> -->\n  <ion-col>\n\n    <ion-item>\n      <ion-label> Inspected By</ion-label>\n      <ion-label  id=\"iby\"></ion-label>\n    </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n\n        <ion-label> Date of Inspection</ion-label>\n        <ion-label  id=\"ida\"></ion-label>\n      </ion-item>\n    </ion-col>\n\n</ion-row>\n<ion-row>\n  <ion-col>\n<ion-item>\n  <ion-label> Validity</ion-label>\n  <ion-label  id=\"cval\"></ion-label>\n</ion-item>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n  <ion-col>\n<ion-item>\n  <ion-label > Certifying Authority</ion-label>\n  <ion-label  id=\"cby\"></ion-label>\n</ion-item>\n\n\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col></ion-col>\n  <ion-col>\n    <div id=\"contentqr\" style=\"display: none;\">\n      <img id=\"qr\" src=\"\" style=\"float:right;\">\n      </div>\n  </ion-col>\n\n</ion-row>\n\n    </ion-grid>\n  </ion-card>\n\n\n</ion-content>\n<!--\n\n\n-->\n");

/***/ }),

/***/ "1gy9":
/*!***************************************************************************!*\
  !*** ./src/app/certifier-certification/certifier-certification.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpZXItY2VydGlmaWNhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "RB+S":
/*!***********************************************************************************!*\
  !*** ./src/app/certifier-certification/certifier-certification-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CertifierCertificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifierCertificationPageRoutingModule", function() { return CertifierCertificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _certifier_certification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certifier-certification.page */ "tuOW");




const routes = [
    {
        path: '',
        component: _certifier_certification_page__WEBPACK_IMPORTED_MODULE_3__["CertifierCertificationPage"]
    }
];
let CertifierCertificationPageRoutingModule = class CertifierCertificationPageRoutingModule {
};
CertifierCertificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CertifierCertificationPageRoutingModule);



/***/ }),

/***/ "tuOW":
/*!*************************************************************************!*\
  !*** ./src/app/certifier-certification/certifier-certification.page.ts ***!
  \*************************************************************************/
/*! exports provided: CertifierCertificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifierCertificationPage", function() { return CertifierCertificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_certifier_certification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./certifier-certification.page.html */ "1Hbg");
/* harmony import */ var _certifier_certification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certifier-certification.page.scss */ "1gy9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! truffle-contract */ "9hYf");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../web3.service */ "pdS3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! web3 */ "usdr");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_9__);






const ricecertificate_artifacts = __webpack_require__(/*! ../../../build/contracts/RiceCertificate.json */ "pC0y");
var RiceCertificate = truffle_contract__WEBPACK_IMPORTED_MODULE_4___default()(ricecertificate_artifacts);




var metamaskAddress, deployedRiceCertificate;
var arr;
// const IPFS = require('ipfs-api');
const IPFS = __webpack_require__(/*! ipfs-http-client */ "aBcc");
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
var lat, lon, marker0, output;
var shapeArray1 = new Array();
let CertifierCertificationPage = class CertifierCertificationPage {
    // @ViewChild('mydt') mydt: IonDatetime;
    constructor(router, route, alertController, web3Service, http, web3) {
        this.router = router;
        this.route = route;
        this.alertController = alertController;
        this.web3Service = web3Service;
        this.http = http;
        this.web3 = web3;
        this.model = {
            account: '',
        };
        this.customPickerOptions = {
        // buttons: [{
        //   text: 'Save Year',
        //   handler: (res) => {
        //     console.log('Save Year', res)
        //     this.mydt.value = res.year.text;
        //   }
        // }, {
        //   text: 'Set Today',
        //   handler: (res) => {
        //     console.log('Set Today', res)
        //     this.mydt.value = "2020";
        //   }
        // }, {
        //   text: 'Cancel',
        //   handler: () => {
        //     console.log('Clicked Log. Do not Dismiss.');
        //     return false;
        //   }
        // }]
        };
    }
    ngOnInit() {
        console.log("in oninit");
        this.data = this.route.snapshot.paramMap.get("xyz");
        console.log(this.data);
        arr = JSON.parse(this.data);
        console.log('farmid' + arr);
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
                this.viewApplicationData(arr);
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
    viewApplicationData(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            var that = this;
            console.log('***********************************');
            console.log(id);
            var marker0;
            document.getElementById('viewApp').style.display = "none";
            // document.getElementById('searchFarm').style.display = "none";
            document.getElementById('fieldid').innerHTML = id;
            //based on id get lat long and details and shw map
            deployedRiceCertificate.getInfo.call(id).then(function (info) {
                //    for(var i= 0;i<v.length;i++)
                //      {
                console.log('GOT FROM BC');
                console.log(info);
                console.log(web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype);
                console.log(web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(info[2]).replace(/[^ -~]+/g, ''));
                // var farm_id = Web3.prototype.toAscii(rice[0]).replace(/[^ -~]+/g, '');
                var farm_owner = info[0];
                var address = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(info[1]).replace(/[^ -~]+/g, '');
                var requirement = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(info[2]).replace(/[^ -~]+/g, '');
                console.log(requirement, 'CHeck#@@@@@@@@@!!!!!#@');
                var standard = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(info[4]).replace(/[^ -~]+/g, '');
                // var account = info[5]
                var stat1 = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(info[5]).replace(/[^ -~]+/g, '');
                deployedRiceCertificate.getextraInfo.call(id).then(function (inf) {
                    var crop = inf[0];
                    var extent = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(inf[1]).replace(/[^ -~]+/g, '');
                    var previouscrop = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(inf[2]).replace(/[^ -~]+/g, '');
                    var protect = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(inf[3]).replace(/[^ -~]+/g, '');
                    var manure = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(inf[4]).replace(/[^ -~]+/g, '');
                    var seed = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(inf[5]).replace(/[^ -~]+/g, '');
                    var soiltype = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(inf[6]).replace(/[^ -~]+/g, '');
                    console.log('Farm Details');
                    console.log(crop + "" + extent + "" + previouscrop + "" + protect + "" + manure + "" + seed + "" + soiltype);
                    console.log('SoilType:' + soiltype);
                    document.getElementById('owner').innerHTML = farm_owner;
                    document.getElementById('addr').innerHTML = address;
                    document.getElementById('production').innerHTML = requirement;
                    document.getElementById('std').innerHTML = standard;
                    // (<HTMLInputElement>document.getElementById('acc')).value = account;
                    document.getElementById('stat1').innerHTML = stat1;
                    document.getElementById('crop').innerHTML = crop;
                    document.getElementById('extent').innerHTML = extent;
                    document.getElementById('precrop').innerHTML = previouscrop;
                    document.getElementById('protect').innerHTML = protect;
                    document.getElementById('manure').innerHTML = manure;
                    document.getElementById('seed').innerHTML = seed;
                    document.getElementById('soil1').innerHTML = soiltype;
                    // document.getElementById('fieldid').value = id;
                    // console.log(info);
                    console.log(info[2]);
                    //LOCATION DECODED
                    var farmloc = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toAscii(info[2]).replace(/[^ -~]+/g, '');
                    document.getElementById('SingleApplication1').style.display = "block";
                    document.getElementById('InspectionDiv').style.display = "none";
                    deployedRiceCertificate.getShapeArray.call(arr).then(function (v) {
                        console.log("getting hash for markers. if and else condition. check v");
                        console.log(v);
                        console.log(web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toUtf8(v));
                        var IPFSHash = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toUtf8(v);
                        const IPFSURL = 'https://ipfs.infura.io/ipfs/' + IPFSHash;
                        that.http.get(IPFSURL).subscribe(response => {
                            console.log('EWRT@#$%^&^%$#@!#$%^&%$#@$%^&%$#%^');
                            console.log(response);
                            console.log(Array.of(response));
                            console.log(that);
                            // this.dataValue = JSON.stringify(response);
                            // this.LEI=this.dataValue.LEI;
                            that.dataValue = Array.of(response);
                            console.log('this.dataValue ', that.dataValue[0]);
                            console.log('this.dataValue ', that.dataValue[0].array);
                            console.log('GOT SHAPE ARRAY FROM IPFS');
                            // console.log(response.array);
                            // swal(output)
                            shapeArray1 = that.dataValue[0].array;
                            document.getElementById('mapFrame').style.display = "block";
                            // console.log(NewArr.reduce(2));
                            //Get Lat long Array
                            var lat, lon, lat1, lon1;
                            // lat=9.366092
                            // lon =76.730862
                            lat = shapeArray1[0][0];
                            lon = shapeArray1[0][1];
                            // // lat1=9.366224
                            // //  lon1 =76.731281
                            console.log('NewArr');
                            console.log(lat);
                            console.log(lon);
                            //var h =  [];
                            //h.push(NewArr);
                            console.log(shapeArray1);
                            //console.log(h[0][0]);
                            console.log(shapeArray1.length);
                            L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';
                            var map = L.mapquest.map('mapFrame', {
                                center: [lat, lon],
                                layers: L.mapquest.tileLayer('satellite'),
                                zoom: 18
                            });
                            L.marker([lat, lon], {
                                icon: L.mapquest.icons.marker(),
                                draggable: false
                            }).bindPopup('Farm land').addTo(map);
                            //L.circle([9.366092, 76.730862], { radius: 20000 }).addTo(map);
                            //var denverLatLngs = NewArr;
                            var denverLatLngs = shapeArray1;
                            //[9.364562, 76.731110],
                            console.log(denverLatLngs);
                            L.polygon(denverLatLngs, { color: 'black', stroke: true, weight: 1 }).addTo(map);
                        });
                    });
                    if (stat1 == "Inspected") {
                        deployedRiceCertificate.getInspectedInfo.call(id).then(function (ins) {
                            console.log(ins);
                            //var idate = ins[0];
                            console.log(ins[0].c);
                            // var idate = Web3.prototype.toAscii(ins[0]);
                            // var ida = new Date(parseInt(ins[0].c));
                            // var inspectiondate = ida.toDateString();
                            var inspectiondate = new Date(ins[0].c[0] * 1000).toLocaleString();
                            var iname = ins[1];
                            document.getElementById('idate2').innerHTML = inspectiondate;
                            document.getElementById('iname2').innerHTML = iname;
                            document.getElementById('Certify').style.display = "block";
                            // var d = new Date();
                            // var yr = d.getFullYear();
                            // console.log(yr);
                            // var select1 = (<HTMLInputElement>document.getElementById('fromyr'));
                            // (<HTMLOptionElement>document.createElement('option')).value = yr;
                            // // opt1.innerHTML = yr
                            // (<HTMLOptionElement>document.createElement('option')).innerHTML = yr;
                            // select1.appendChild(opt1)
                            // // var max = yr + 2
                            // var min = yr + 1
                            // var max = 2035
                            // var select = document.getElementById('toyr')
                            // for (var i = min; i <= max; i++) {
                            //     var opt = document.createElement('option')
                            //     opt.value = i
                            //     opt.innerHTML = i
                            //     select.appendChild(opt)
                            // }
                        });
                    }
                    else if (stat1 == "Certified") {
                        document.getElementById('SingleApplication1').style.display = "none";
                        deployedRiceCertificate.getInspectedInfo.call(id).then(function (inspe) {
                            console.log(inspe);
                            //var idate = ins[0];
                            console.log(inspe[0].c);
                            // var idate = Web3.prototype.Ascii(ins[0])
                            // var ida = new Date(parseInt(inspe[0].c))
                            // var idate = ida.toDateString()
                            var idate = new Date(inspe[0].c[0] * 1000).toLocaleString();
                            var iname = inspe[1];
                            deployedRiceCertificate.getCertificationInfo.call(id).then(function (cert) {
                                var cname = cert[0];
                                var fromyr = cert[1].c;
                                var toyr = cert[2].c;
                                var validity = toyr - fromyr;
                                //
                                //Here generate pdf but value doesent exist or we have to get value from bc one byone
                                // App.GeneratePDF();
                                // document.getElementById('SingleApplication1').style.display = "none";
                                document.getElementById('FinalCertificate').style.display = "block";
                                document.getElementById('farm').innerHTML = id;
                                document.getElementById('owns').innerHTML = farm_owner;
                                document.getElementById('add').innerHTML = address;
                                // (<HTMLInputElement>document.getElementById('la')).innerHTML = latitude;
                                // (<HTMLInputElement>document.getElementById('long')).innerHTML = longitude;
                                document.getElementById('re').innerHTML = requirement;
                                document.getElementById('stnd').innerHTML = standard;
                                document.getElementById('iby').innerHTML = iname;
                                document.getElementById('ida').innerHTML = idate;
                                document.getElementById('cby').innerHTML = cname;
                                document.getElementById('cval').innerHTML = validity + 'years';
                                // document.getElementById('mapSh').style.display = "block";
                                document.getElementById('seedsource').innerHTML = seed;
                                document.getElementById('soiltype2').innerHTML = soiltype;
                                document.getElementById('contentqr').style.display = "block";
                                var size = 100;
                                var data = id;
                                var imgqr = "http://chart.googleapis.com/chart?cht=qr&chs=" + size + "x" + size + "&choe=UTF-8&chld=L|0&chl=" + data;
                                // console.log(imgqr)
                                document.getElementById("qr").src = imgqr;
                                if (standard == 'NPOP') {
                                    var imgurl = "../../assets/images/logo.jpg";
                                    document.getElementById("logo").src = imgurl;
                                }
                                else {
                                    var imgurl = "../../assets/images/logo2.png";
                                    document.getElementById("logo").src = imgurl;
                                }
                                deployedRiceCertificate.getShapeArray.call(arr).then(function (v) {
                                    console.log("getting hash for markers. if and else condition. check v");
                                    console.log(v);
                                    console.log(web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toUtf8(v));
                                    var IPFSHash = web3__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.toUtf8(v);
                                    const IPFSURL = 'https://ipfs.infura.io/ipfs/' + IPFSHash;
                                    that.http.get(IPFSURL).subscribe(response => {
                                        console.log('EWRT@#$%^&^%$#@!#$%^&%$#@$%^&%$#%^');
                                        console.log(response);
                                        console.log(Array.of(response));
                                        console.log(that);
                                        // this.dataValue = JSON.stringify(response);
                                        // this.LEI=this.dataValue.LEI;
                                        that.dataValue = Array.of(response);
                                        console.log('this.dataValue ', that.dataValue[0]);
                                        console.log('this.dataValue ', that.dataValue[0].array);
                                        console.log('GOT SHAPE ARRAY FROM IPFS');
                                        // console.log(response.array);
                                        // swal(output)
                                        shapeArray1 = that.dataValue[0].array;
                                        document.getElementById('mapSh').style.display = "block";
                                        // console.log(NewArr.reduce(2));
                                        //Get Lat long Array
                                        var lat, lon, lat1, lon1;
                                        // lat=9.366092
                                        // lon =76.730862
                                        lat = shapeArray1[0][0];
                                        lon = shapeArray1[0][1];
                                        // // lat1=9.366224
                                        // //  lon1 =76.731281
                                        console.log('NewArr');
                                        console.log(lat);
                                        console.log(lon);
                                        //var h =  [];
                                        //h.push(NewArr);
                                        console.log(shapeArray1);
                                        //console.log(h[0][0]);
                                        console.log(shapeArray1.length);
                                        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';
                                        var map = L.mapquest.map('mapSh', {
                                            center: [lat, lon],
                                            layers: L.mapquest.tileLayer('satellite'),
                                            zoom: 18
                                        });
                                        L.marker([lat, lon], {
                                            icon: L.mapquest.icons.marker(),
                                            draggable: false
                                        }).bindPopup('Farm land').addTo(map);
                                        //L.circle([9.366092, 76.730862], { radius: 20000 }).addTo(map);
                                        //var denverLatLngs = NewArr;
                                        var denverLatLngs = shapeArray1;
                                        //[9.364562, 76.731110],
                                        console.log(denverLatLngs);
                                        L.polygon(denverLatLngs, { color: 'black', stroke: true, weight: 1 }).addTo(map);
                                    });
                                });
                                setTimeout(function () {
                                    window.print();
                                    //window.close();
                                }, 6000);
                                /*var certificateWindow = window.open("", "", 'width=700,height=700');
                                 */
                                // myWindow.document.write('<div><div style = "float:left;width:200px;height:50px;margin :30px;"><h3>Green Bonds</h3>Technopark Campus<br>Trivandrum<br>www.greenbonds.com</div><div style = "float:right;width:230px;height:50px;margin :5px;"><img src="../stylesheets/img/2.png" alt="logo" height="70" width="200"/></div></div>');
                                /* myWindow.document.write("<head><script src='https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js'></script>")
                             myWindow.document.write("<link type='text/css' rel='stylesheet' href='https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css' />")
                             myWindow.document.write("<script>L.mapquest.key = '0iAi6Cp45QtBApkpmLCEyAcuG58rQi1h'")

                             myWindow.document.write("var map = L.mapquest.map('mapShow', {center: ["+latitude+","+ longitude+"],layers: L.mapquest.tileLayer('satellite'),zoom: 16})")
                             myWindow.document.write("map.addControl(L.mapquest.control())var customIcon = L.icon({iconUrl: 'https://assets.mapquestapi.com/icon/v2/marker-start.png',")

                            myWindow.document.write(" iconSize: [20, 29],iconAnchor: [10, 29],popupAnchor: [0, -29]})marker0 = L.marker(["+latitude+", "+longitude+"], {icon: customIcon,draggable: false}).addTo(map)</script></head>");
 */
                                /*                                certificateWindow.document.write('<div style="left-margin:200px;">');
                                                                certificateWindow.document.write('<br>');
                                                                certificateWindow.document.write("<center><h1>FARM CERTIFICATION</h1>");

                                                                var myTable3 = "<table><tr><td style='width: 100px; color: black;'>Field_id</td><td>:</td><td style='width: 100px; color: black;text-align: center;'>" + id + "</td></tr>";
                                                                myTable3 += "<tr><td style='width: 100px; color: black;'>Ownership</td><td>:</td><td style='width: 100px; color: black;text-align: center;'>" + farm_owner + "</td></tr>";

                                                                myTable3 += "<tr><td style='width: 100px; color: black;'>Address</td><td>:</td><td style='width: 100px; color: black;text-align: center;'>" + address + "</td></tr>";
                                                                myTable3 += "<tr><td style='width: 100px; color: black;'>Requirement </td><td>:</td><td style='width: 100px; color: black;text-align: center;'>" + requirement + "</td></tr>";
                                                                myTable3 += "<tr><td style='width: 100px; color: black;'>Certification Standard</td><td>:</td><td style='width: 100px; color: black;text-align: center;'>" + standard + "</td></tr>";
                                                                myTable3 += "<tr><td style='width: 100px; color: black;'>Inspected By</td><td>:</td><td style='width: 100px; color: black;text-align: center;'>" + iname + "</td></tr>";
                                                                myTable3 += "<tr><td style='width: 100px; color: black;'>Date of Inscpection</td><td>:</td><td style='width: 100px; color: black;text-align: center;'>" + idate + "</td></tr>";
                                                                myTable3 += "<tr><td style='width: 100px; color: black;'>Certifying Authority</td><td>:</td><td style='width: 100px; color: black;text-align: center;'>" + cname + "</td>";
                                                                myTable3 += "<tr><td style='width: 100px; color: black;'>Validity</td><td>:</td><td style='width: 100px; color: black;text-align: center;'>" + validity + " yrs</td>";
                                                                myTable3 += "</table>";

                                                                certificateWindow.document.write(myTable3);
                                                                certificateWindow.document.write("</center>");
                                                                certificateWindow.document.write('</div>');
                                                                certificateWindow.document.close();

                                                                certificateWindow.moveTo(0, 0);
                                                                certificateWindow.resizeTo(screen.width, screen.height);
                                                                certificateWindow.focus();

                                                                setTimeout(function () {

                                                                    certificateWindow.print();
                                                                    certificateWindow.close();

                                                                }, 250);
                                */
                            });
                        });
                    }
                    else {
                        document.getElementById('inspectDetails').style.display = "none";
                        // window.location.reload();
                    }
                });
            });
        });
    }
    certifyFarm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            var that = this;
            //     //details,set status as certified and show pdf
            var farm_id = document.getElementById('fieldid').innerHTML;
            var cname = document.getElementById('cname').value;
            var fromyr = document.getElementById('fromyr').value;
            var toyr = document.getElementById('toyr').value;
            console.log(farm_id + ',' + cname + ',' + fromyr + ',' + toyr);
            var owner = document.getElementById('owner').innerHTML;
            var addr = document.getElementById('addr').innerHTML;
            var production = document.getElementById('production').innerHTML;
            var std = document.getElementById('std').innerHTML;
            // var acc = (<HTMLInputElement>document.getElementById('acc')).value;
            var crop = document.getElementById('crop').innerHTML;
            var extent = document.getElementById('extent').innerHTML;
            var precrop = document.getElementById('precrop').innerHTML;
            var protect = document.getElementById('protect').innerHTML;
            var manure = document.getElementById('manure').innerHTML;
            var seed = document.getElementById('seed').innerHTML;
            var soiltype = document.getElementById('soil1').innerHTML;
            var idatef = document.getElementById('idate2').innerHTML;
            var inamef = document.getElementById('iname2').innerHTML;
            var status = 'Certified';
            console.log(status);
            //     var lat = document.getElementById('latit').value
            //     var lng = document.getElementById('longit').value
            //     var encodePlace = Geohash.encode(lat, lng, [9])
            var encodePlace = '2';
            var validity = parseInt(toyr) - parseInt(fromyr);
            console.log(validity + 'years');
            console.log(this.model.account);
            metamaskAddress = this.model.account;
            //     //ADD to BC new struct
            deployedRiceCertificate.addCertifierDetails(farm_id, cname, fromyr, toyr, {
                from: metamaskAddress,
                gas: 460000
            }) // addApplication is a function to be defined in the contract
                .then(function (v) {
                console.log(v);
                console.log('added certification details');
                var status = 'Certified';
                deployedRiceCertificate.updateFarm(farm_id, owner, addr, encodePlace, production, std, status, {
                    from: metamaskAddress,
                    gas: 3000000
                }).then(function (v) {
                    console.log('Common Details and status updated');
                    console.log(v);
                    this.router.onSameUrlNavigation = 'reload';
                    this.router.navigate(['certifier-certification/' + JSON.stringify(farm_id)]);
                });
            });
        });
    }
};
CertifierCertificationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: _web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: web3__WEBPACK_IMPORTED_MODULE_9___default.a, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_web3_service__WEBPACK_IMPORTED_MODULE_6__["Web3Service"],] }] }
];
CertifierCertificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-certifier-certification',
        template: _raw_loader_certifier_certification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_certifier_certification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CertifierCertificationPage);



/***/ }),

/***/ "zBum":
/*!***************************************************************************!*\
  !*** ./src/app/certifier-certification/certifier-certification.module.ts ***!
  \***************************************************************************/
/*! exports provided: CertifierCertificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertifierCertificationPageModule", function() { return CertifierCertificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _certifier_certification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certifier-certification-routing.module */ "RB+S");
/* harmony import */ var _certifier_certification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certifier-certification.page */ "tuOW");







let CertifierCertificationPageModule = class CertifierCertificationPageModule {
};
CertifierCertificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _certifier_certification_routing_module__WEBPACK_IMPORTED_MODULE_5__["CertifierCertificationPageRoutingModule"]
        ],
        declarations: [_certifier_certification_page__WEBPACK_IMPORTED_MODULE_6__["CertifierCertificationPage"]]
    })
], CertifierCertificationPageModule);



/***/ })

}]);
//# sourceMappingURL=certifier-certification-certifier-certification-module.js.map