(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inspector-approvecheck-inspector-approvecheck-module"],{

/***/ "HIIU":
/*!*************************************************************************!*\
  !*** ./src/app/inspector-approvecheck/inspector-approvecheck.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnNwZWN0b3ItYXBwcm92ZWNoZWNrLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "VRbq":
/*!*************************************************************************!*\
  !*** ./src/app/inspector-approvecheck/inspector-approvecheck.module.ts ***!
  \*************************************************************************/
/*! exports provided: InspectorApprovecheckPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorApprovecheckPageModule", function() { return InspectorApprovecheckPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inspector_approvecheck_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector-approvecheck-routing.module */ "gfRp");
/* harmony import */ var _inspector_approvecheck_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector-approvecheck.page */ "uq+S");







let InspectorApprovecheckPageModule = class InspectorApprovecheckPageModule {
};
InspectorApprovecheckPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inspector_approvecheck_routing_module__WEBPACK_IMPORTED_MODULE_5__["InspectorApprovecheckPageRoutingModule"]
        ],
        declarations: [_inspector_approvecheck_page__WEBPACK_IMPORTED_MODULE_6__["InspectorApprovecheckPage"]]
    })
], InspectorApprovecheckPageModule);



/***/ }),

/***/ "gfRp":
/*!*********************************************************************************!*\
  !*** ./src/app/inspector-approvecheck/inspector-approvecheck-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: InspectorApprovecheckPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorApprovecheckPageRoutingModule", function() { return InspectorApprovecheckPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inspector_approvecheck_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inspector-approvecheck.page */ "uq+S");




const routes = [
    {
        path: '',
        component: _inspector_approvecheck_page__WEBPACK_IMPORTED_MODULE_3__["InspectorApprovecheckPage"]
    }
];
let InspectorApprovecheckPageRoutingModule = class InspectorApprovecheckPageRoutingModule {
};
InspectorApprovecheckPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InspectorApprovecheckPageRoutingModule);



/***/ }),

/***/ "sKJg":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inspector-approvecheck/inspector-approvecheck.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>inspector-approvecheck</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card>\n  <ion-card-header>\n    INSPECTION\n    </ion-card-header>\n  <ion-item >\n    <ion-label>\n      Application id\n    </ion-label>\n    <ion-label id=\"fieldid\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Field Owner\n    </ion-label>\n    <ion-label id=\"owner\" >\n    </ion-label>\n  </ion-item>\n\n  <ion-item >\n    <ion-label>\n      Address\n    </ion-label>\n    <ion-label id=\"addr\" >\n    </ion-label>\n  </ion-item>\n\n  <ion-item >\n    <ion-label>\n      Requirement\n    </ion-label>\n    <ion-label id=\"production\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Standard\n    </ion-label>\n    <ion-label id=\"std\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Status\n    </ion-label>\n    <ion-label id=\"stat1\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Cropping System followed\n    </ion-label>\n\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      (i) Name of the Crop\n    </ion-label>\n    <ion-label id=\"crop\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      (ii) Extent of each crop grown\n    </ion-label>\n    <ion-label id=\"extent\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Input applied to previous crops\n    </ion-label>\n    <ion-label id=\"precrop\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Plant Protection measures followed\n    </ion-label>\n    <ion-label id=\"protect\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Source of manure\n    </ion-label>\n    <ion-label id=\"manure\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Source of seed\n\n    </ion-label>\n    <ion-label id=\"seed\" >\n    </ion-label>\n  </ion-item>\n  <ion-item >\n    <ion-label>\n      Soil Type\n    </ion-label>\n    <ion-label id=\"soil\" >\n    </ion-label>\n  </ion-item>\n</ion-card>\n<ion-card>\n  <div style=\"width:auto; height:200px;\"  id=\"mapFrame\"></div>\n  </ion-card>\n  <ion-card id=\"addinspect\" style=\"display:none;\">\n    <ion-item >\n      <ion-label>\n        Tentative Date of Inspection:\n      </ion-label>\n    <ion-input type=\"date\" id=\"idate\" required></ion-input>\n</ion-item>\n\n<ion-item >\n  <ion-label>\n    Inspector Name\n  </ion-label>\n  <ion-input type=\"text\" id=\"iname\" required></ion-input>\n  </ion-item>\n\n    <ion-button id=\"send\" (click)=\"InspectDetails()\">ACCEPT</ion-button>\n\n</ion-card>\n  <ion-card id=\"inspect\" style=\"display:none;\">\n      <ion-item >\n        <ion-label>\n          Tentative Date of Inspection:\n        </ion-label>\n\n        <ion-input type=\"text\" id=\"idate3\" disabled></ion-input>\n          </ion-item>\n          <ion-item >\n            <ion-label>\n              Inspector Name\n            </ion-label>\n          <ion-input type=\"text\" id=\"iname3\" disabled></ion-input>\n</ion-item>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "uq+S":
/*!***********************************************************************!*\
  !*** ./src/app/inspector-approvecheck/inspector-approvecheck.page.ts ***!
  \***********************************************************************/
/*! exports provided: InspectorApprovecheckPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorApprovecheckPage", function() { return InspectorApprovecheckPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inspector_approvecheck_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inspector-approvecheck.page.html */ "sKJg");
/* harmony import */ var _inspector_approvecheck_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector-approvecheck.page.scss */ "HIIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! truffle-contract */ "9hYf");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../web3.service */ "pdS3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! web3 */ "usdr");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







const ricecertificate_artifacts = __webpack_require__(/*! ../../../build/contracts/RiceCertificate.json */ "pC0y");
var RiceCertificate = truffle_contract__WEBPACK_IMPORTED_MODULE_5___default()(ricecertificate_artifacts);



var arr, metamaskAddress;
// const IPFS = require('ipfs-api');
const IPFS = __webpack_require__(/*! ipfs-http-client */ "aBcc");
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
var lat, lon, marker0, output;
var shapeArray1 = new Array();
let InspectorApprovecheckPage = class InspectorApprovecheckPage {
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
    }
    ngOnInit() {
        console.log("in oninit");
        this.urldata = this.route.snapshot.paramMap.get("xyz");
        console.log(this.urldata);
        arr = this.urldata;
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
    viewApplicationData(arr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            var that = this;
            console.log(deployedRiceCertificate);
            document.getElementById('fieldid').innerHTML = arr;
            deployedRiceCertificate.getInfo.call(arr).then(function (info) {
                deployedRiceCertificate.getextraInfo.call(arr).then(function (inf) {
                    console.log(inf);
                    console.log('GOT FROM BC');
                    console.log(info);
                    // var farm_id =Web3.prototype.toAscii(rice[0]).replace(/[^ -~]+/g, '');
                    var farm_owner = info[0];
                    var address = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(info[1]).replace(/[^ -~]+/g, '');
                    var requirement = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(info[2]).replace(/[^ -~]+/g, '');
                    console.log(requirement, 'CHeck#@@@@@@@@@!!!!!#@');
                    var standard = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(info[4]).replace(/[^ -~]+/g, '');
                    // var account = info[5]
                    var stat = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(info[5]).replace(/[^ -~]+/g, '');
                    var crop = inf[0];
                    var extent = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(inf[1]).replace(/[^ -~]+/g, '');
                    var previouscrop = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(inf[2]).replace(/[^ -~]+/g, '');
                    var protect = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(inf[3]).replace(/[^ -~]+/g, '');
                    var manure = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(inf[4]).replace(/[^ -~]+/g, '');
                    var seed = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(inf[5]).replace(/[^ -~]+/g, '');
                    var soiltype = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toAscii(inf[6]).replace(/[^ -~]+/g, '');
                    console.log(crop + "" + extent + "" + previouscrop + "" + protect + "" + manure + "" + seed + "" + soiltype, requirement);
                    document.getElementById('owner').innerHTML = farm_owner;
                    document.getElementById('addr').innerHTML = address;
                    document.getElementById('production').innerHTML = requirement;
                    document.getElementById('std').innerHTML = standard;
                    // (<HTMLInputElement>document.getElementById('acc')).value = account;
                    document.getElementById('stat1').innerHTML = stat;
                    document.getElementById('crop').innerHTML = crop;
                    document.getElementById('extent').innerHTML = extent;
                    document.getElementById('precrop').innerHTML = previouscrop;
                    document.getElementById('protect').innerHTML = protect;
                    document.getElementById('manure').innerHTML = manure;
                    document.getElementById('seed').innerHTML = seed;
                    document.getElementById('soil').innerHTML = soiltype;
                    deployedRiceCertificate.getShapeArray.call(arr).then(function (v) {
                        console.log("getting hash for markers. if and else condition. check v");
                        console.log(v);
                        console.log(web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toUtf8(v));
                        var IPFSHash = web3__WEBPACK_IMPORTED_MODULE_8___default.a.prototype.toUtf8(v);
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
                    if (stat === "Pending") {
                        // document.getElementById('SingleApplication').style.display = "block";
                        document.getElementById('addinspect').style.display = "block";
                        //Shape in Inspector Page
                    }
                    else if (stat === "Inspected") {
                        document.getElementById('inspect').style.display = "block";
                        deployedRiceCertificate.getInspectedInfo.call(arr).then(function (ins) {
                            console.log(ins);
                            var ida = new Date(parseInt(ins[0].c));
                            var idate = ida.toDateString();
                            // var idate = web3.toAscii(ins[0])
                            var iname = ins[1];
                            document.getElementById('idate3').value = idate;
                            document.getElementById('iname3').value = iname;
                        });
                    }
                    else if (stat === "Certified") {
                        //     instance.getInspectedInfo.call(id).then(function (ins) {
                        //         console.log(ins);
                        //         var ida = new Date(parseInt(ins[0].c))
                        //         var idate = ida.toDateString()
                        //         // var idate = web3.toAscii(ins[0])
                        //         var iname = ins[1];
                        //         instance.getCertificationInfo.call(id).then(function (cert) {
                        //             var cname = cert[0]
                        //             var fromyr = cert[1].c
                        //             var toyr = cert[2].c
                        //             var validity = toyr - fromyr
                        //             document.getElementById('SingleApplication').style.display = "none";
                        //             if (swal('Certification Done')) {
                        //                 document.getElementById('inspect').style.display = "none"
                        //                 document.getElementById('addinspect').style.display = "block"
                        //                 document.getElementById('FinalCertificate').style.display = "block"
                        //                 document.getElementById('farm').innerHTML = id;
                        //                 document.getElementById('owns').innerHTML = farm_owner;
                        //                 document.getElementById('add').innerHTML = address;
                        //                 document.getElementById('la').innerHTML = latitude;
                        //                 document.getElementById('long').innerHTML = longitude;
                        //                 document.getElementById('re').innerHTML = requirement;
                        //                 document.getElementById('stnd').innerHTML = standard;
                        //                 document.getElementById('seedsource').innerHTML = seed;
                        //                 document.getElementById('soil').innerHTML = soiltype;
                        //                 document.getElementById('iby').innerHTML = iname;
                        //                 document.getElementById('ida').innerHTML = idate;
                        //                 document.getElementById('cby').innerHTML = cname;
                        //                 document.getElementById('cval').innerHTML = validity + 'years';
                        //                 //document.getElementById('mapSh').style.display = "block";
                        //                 document.getElementById('contentqr').style.display = "block";
                        //                 var size = 100;
                        //                 var data = id;
                        //                 var imgqr = "http://chart.googleapis.com/chart?cht=qr&chs=" + size + "x" + size + "&choe=UTF-8&chld=L|0&chl=" + data;
                        //                 console.log(imgqr)
                        //                 document.getElementById("qr").src = imgqr;
                        //                 if (standard == 'NPOP') {
                        //                     var imgurl = "images/logo.jpg";
                        //                     document.getElementById("logo").src = imgurl;
                        //                 } else {
                        //                     var imgurl = "images/logo2.png";
                        //                     document.getElementById("logo").src = imgurl;
                        //                 }
                        //                 RiceCertificate.deployed().then(function (instance) {
                        //                     instance.getShapeArray.call(id)
                        //                         .then(function (v) {
                        //                             console.log("getting hash for markers. if and else condition. check v");
                        //                             console.log(v);
                        //                             ipfs.cat(web3.toUtf8(v), function (err, stream) {
                        //                                 var res = ''
                        //                                 console.log("inside ipfs cat");
                        //                                 stream.on('data', function (chunk) {
                        //                                     res += chunk.toString()
                        //                                 });
                        //                                 stream.on('error', function (err) {
                        //                                     console.error('Fetch Error', err)
                        //                                 });
                        //                                 stream.on('end', function () {
                        //                                     //console.log(latMarker);
                        //                                     //console.log(lonMarker);
                        //                                     console.log('Got:', res)
                        //                                     output = JSON.parse(res);
                        //                                     console.log('GOT SHAPE ARRAY FROM IPFS')
                        //                                     console.log(output.array);
                        //                                     // swal(output)
                        //                                     shapeArray1 = output.array;
                        //                                     document.getElementById('mapSh').style.display = "block";
                        //                                     // console.log(NewArr.reduce(2));
                        //                                     //Get Lat long Array
                        //                                     var lat, lon, lat1, lon1;
                        //                                     // lat=9.366092
                        //                                     // lon =76.730862
                        //                                     lat = shapeArray1[0][0];
                        //                                     lon = shapeArray1[0][1];
                        //                                     // // lat1=9.366224
                        //                                     // //  lon1 =76.731281
                        //                                     console.log('NewArr')
                        //                                     console.log(lat)
                        //                                     console.log(lon)
                        //                                     //var h =  [];
                        //                                     //h.push(NewArr);
                        //                                     console.log(shapeArray1);
                        //                                     //console.log(h[0][0]);
                        //                                     console.log(shapeArray1.length)
                        //                                     L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';
                        //                                     var map = L.mapquest.map('mapSh', {
                        //                                         center: [lat, lon],
                        //                                         layers: L.mapquest.tileLayer('satellite'),
                        //                                         zoom: 18
                        //                                     });
                        //                                     L.marker([lat, lon], {
                        //                                         icon: L.mapquest.icons.marker(),
                        //                                         draggable: false
                        //                                     }).bindPopup('Farm land').addTo(map);
                        //                                     //L.circle([9.366092, 76.730862], { radius: 20000 }).addTo(map);
                        //                                     //var denverLatLngs = NewArr;
                        //                                     var denverLatLngs = shapeArray1;
                        //                                     //[9.364562, 76.731110],
                        //                                     console.log(denverLatLngs);
                        //                                     L.polygon(denverLatLngs, { color: 'black', stroke: true, weight: 1 }).addTo(map);
                        //                                 });
                        //                             });
                        //                         })
                        //                 });
                        //             }
                        //         })
                        //     })
                    }
                });
            });
        });
    }
    //AFTER Accepting inspect details added
    InspectDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            console.log(deployedRiceCertificate);
            var id = document.getElementById('fieldid').innerHTML;
            var idate = document.getElementById('idate').value;
            var inspectdate = Date.parse(idate);
            console.log(inspectdate);
            var inspector = document.getElementById('iname').value;
            console.log(id + ',' + inspectdate + ',' + inspector);
            var status = 'Inspected';
            var owner = document.getElementById('owner').innerHTML;
            var addr = document.getElementById('addr').innerHTML;
            var production = document.getElementById('production').innerHTML;
            var std = document.getElementById('std').innerHTML;
            // var acc = (<HTMLInputElement>document.getElementById('acc')).value;
            var crop = document.getElementById('crop').value;
            var extent = document.getElementById('extent').value;
            var precrop = document.getElementById('precrop').value;
            var protect = document.getElementById('protect').value;
            var manure = document.getElementById('manure').value;
            var seed = document.getElementById('seed').value;
            var soiltype = document.getElementById('soil').value;
            console.log(status);
            console.log(this.model.account);
            // var lat = (<HTMLInputElement>document.getElementById('latit')).value
            // var lng = (<HTMLInputElement>document.getElementById('longit')).value
            // var encodePlace = Geohash.encode(lat, lng, [9])
            var encodePlace = '';
            metamaskAddress = this.model.account;
            const transaction = yield deployedRiceCertificate.addInspectDetails(id, inspectdate, inspector, {
                from: metamaskAddress,
                gas: 3000000
            }); // addApplication is a function to be defined in the contract
            if (!transaction) {
                console.log('Sorry Error in adding inspect');
            }
            else {
                console.log('added inspector details');
                console.log('metamaskAddress');
                console.log(metamaskAddress);
                const transaction2 = yield deployedRiceCertificate.updateFarm(id, owner, addr, encodePlace, production, std, status, {
                    from: metamaskAddress,
                    gas: 3000000
                }); // addApplication is a function to be defined in the contract
                if (!transaction2) {
                    console.log('Info not updated');
                }
                else {
                    this.presentAlert();
                    this.router.onSameUrlNavigation = 'reload';
                    this.router.navigateByUrl('inspector-homepage');
                }
            }
        });
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Application Approval Completed',
                // subHeader: 'Id assigned to your farm : '+farmid,
                // message: 'Notedown farmid for future reference',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
InspectorApprovecheckPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
    { type: _web3_service__WEBPACK_IMPORTED_MODULE_7__["Web3Service"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: web3__WEBPACK_IMPORTED_MODULE_8___default.a, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_web3_service__WEBPACK_IMPORTED_MODULE_7__["Web3Service"],] }] }
];
InspectorApprovecheckPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inspector-approvecheck',
        template: _raw_loader_inspector_approvecheck_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inspector_approvecheck_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InspectorApprovecheckPage);



/***/ })

}]);
//# sourceMappingURL=inspector-approvecheck-inspector-approvecheck-module.js.map