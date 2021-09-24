(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["farmer-application-form-farmer-application-form-module"],{

/***/ "/5kS":
/*!***************************************************************************!*\
  !*** ./src/app/farmer-application-form/farmer-application-form.module.ts ***!
  \***************************************************************************/
/*! exports provided: FarmerApplicationFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerApplicationFormPageModule", function() { return FarmerApplicationFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _farmer_application_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./farmer-application-form-routing.module */ "MuMW");
/* harmony import */ var _farmer_application_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./farmer-application-form.page */ "H9Kk");







let FarmerApplicationFormPageModule = class FarmerApplicationFormPageModule {
};
FarmerApplicationFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _farmer_application_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["FarmerApplicationFormPageRoutingModule"]
        ],
        declarations: [_farmer_application_form_page__WEBPACK_IMPORTED_MODULE_6__["FarmerApplicationFormPage"]]
    })
], FarmerApplicationFormPageModule);



/***/ }),

/***/ "G4bX":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/farmer-application-form/farmer-application-form.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button default-href=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Welcome Farmer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <h3>\n     <b>APPLICATION FORM</b>\n    </h3>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>Field Id</ion-label>\n            <ion-input id=\"farm\" disabled></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\">1.Name and Address of Organic Producer</ion-label>\n            <ion-input id=\"farmername\" placeholder=\"Owners Name\" required></ion-input>\n            <ion-textarea id=\"farmeraddress\" placeholder=\"Owners Address\" required></ion-textarea>\n\n            <!-- <ion-input placeholder=\"Address Line 1\"></ion-input>\n    <ion-input placeholder=\"Address Line 2\"></ion-input>\n    <ion-input placeholder=\"City\"></ion-input>\n    <ion-input placeholder=\"State\"></ion-input>\n    <ion-input placeholder=\"Zip Code\"></ion-input> -->\n          </ion-item>\n          <ion-item>\n            <ion-label>2.Certification Requirement</ion-label>\n            <ion-select id=\"requirement\" value=\"Crop\">\n              <ion-select-option name=\"requirement\" id=\"requirement1\" value=\"Crop\">Crop Production</ion-select-option>\n              <ion-select-option name=\"requirement\" id=\"requirement2\" value=\"Honey\">Honey</ion-select-option>\n              <ion-select-option name=\"requirement\" id=\"requirement3\" value=\"Wild Collection\">Wild Collection</ion-select-option>\n              <ion-select-option name=\"requirement\" id=\"requirement4\" value=\"Dairy\">Dairy and other livestock</ion-select-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>3.Certification Requirement under which Standard ?</ion-label>\n            <ion-select id=\"standard\" value=\"NPOP\">\n              <ion-select-option name=\"standard\" id=\"standard1\" value=\"NPOP\">NPOP</ion-select-option>\n              <ion-select-option name=\"standard\" id=\"standard2\" value=\"NOP\">NOP</ion-select-option>\n              <ion-select-option name=\"standard\" id=\"standard3\" value=\"JAS\">JAS</ion-select-option>\n              <ion-select-option name=\"standard\" id=\"standard4\" value=\"EO\">EO</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">4.Cropping System followed</ion-label>\n            <ion-input id=\"crop\" placeholder=\"(i) Name of the Crop\" required></ion-input>\n            <ion-textarea id=\"extent\" placeholder=\"(ii) Extent of each crop grown\" required></ion-textarea>\n\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">5.Input applied to previous crops</ion-label>\n            <ion-input id=\"previouscrop\" required></ion-input>\n          </ion-item>\n\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label position=\"floating\">6.Plant Protection measures followed</ion-label>\n              <ion-input id=\"protect\" required></ion-input>\n            </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">7.Source of manure</ion-label>\n            <ion-input id=\"manure\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">8.Source of seed</ion-label>\n            <ion-input id=\"seed\" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">9.Soil Type</ion-label>\n            <ion-input id=\"soiltype\" required></ion-input>\n          </ion-item>\n          <div id=\"latlong\">\n            <ion-item >\n              <ion-label position=\"floating\">10.Location of the farm</ion-label>\n              <ion-input id=\"latit\" placeholder=\"Latitude of Place where farm located\" required>\n              </ion-input>\n              <ion-input id=\"longit\" placeholder=\"Longitude of Place where farm located\" required></ion-input>\n\n            </ion-item>\n            <ion-item>\n              <ion-icon id=\"addMore\" name=\"add\" placeholder=\"Add field edges\" (click)=\"addMoreEdges()\">Add More Edges</ion-icon>\n\n              <ion-button id=\"saveArray\" slot=\"end\" (click)=\"saveArray()\" >Save Location</ion-button>\n\n            </ion-item>\n          </div>\n\n\n\n\n <ion-list id=\"declaration\" style=\"display:none\">\n      <ion-item>\n        <ion-label>DECLARATION</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-checkbox color=\"dark\" checked slot=\"start\"></ion-checkbox>\n        <ion-label>I declare that I shall abide by the rules and regulations</ion-label>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"submitApplication()\">Apply</ion-button>\n\n    </ion-list>\n\n\n\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n<ion-col>\n  <ion-card class=\"map-responsive\" style=\"width: auto; height:400px;display:none;\" id=\"mapContainer\">\n  </ion-card>\n\n</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <!-- Checkboxes in a List -->\n\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "H9Kk":
/*!*************************************************************************!*\
  !*** ./src/app/farmer-application-form/farmer-application-form.page.ts ***!
  \*************************************************************************/
/*! exports provided: FarmerApplicationFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerApplicationFormPage", function() { return FarmerApplicationFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_farmer_application_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./farmer-application-form.page.html */ "G4bX");
/* harmony import */ var _farmer_application_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmer-application-form.page.scss */ "W8OX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! truffle-contract */ "9hYf");
/* harmony import */ var truffle_contract__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(truffle_contract__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../web3.service */ "pdS3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! web3 */ "usdr");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





const ricecertificate_artifacts = __webpack_require__(/*! ../../../build/contracts/RiceCertificate.json */ "pC0y");
var RiceCertificate = truffle_contract__WEBPACK_IMPORTED_MODULE_4___default()(ricecertificate_artifacts);




var metamaskAddress, deployedRiceCertificate;
// const IPFS = require('ipfs-api');
const IPFS = __webpack_require__(/*! ipfs-http-client */ "aBcc");
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
var lat, lon, marker0, ImagedataFile;
var shapeArray = new Array();
let FarmerApplicationFormPage = class FarmerApplicationFormPage {
    constructor(web3Service, router, alertController, 
    // route:ActivatedRoute,
    web3) {
        this.web3Service = web3Service;
        this.router = router;
        this.alertController = alertController;
        this.web3 = web3;
        this.model = {
            account: '',
        };
    }
    ngOnInit() {
        console.log('Accounts getting applicationform');
        console.log('OnInit: ');
        console.log(this.web3Service);
        this.watchAccount();
        this.web3Service.artifactsToContract(ricecertificate_artifacts)
            .then((riceCertificateAbstraction) => {
            this.RiceCertificate = riceCertificateAbstraction;
            this.RiceCertificate.deployed().then(deployed => {
                console.log(deployed);
                // deployed.Transfer({}, (err, ev) => {
                console.log('Transfer event came in, refreshing balance');
                // this.refreshBalance();
                // });
                console.log(this.web3Service.accounts);
                console.log('calling gettoken');
                this.getTokens(this.web3Service.accounts);
            });
        });
        this.router.onSameUrlNavigation = 'reload';
        // this.router.navigateByUrl('/mypageA', {skipLocationChange: true}).then(() => {
        //   this.router.navigate(["/mypageA"]);
        //   });
    }
    //get metamask accounts
    watchAccount() {
        this.web3Service.accountsObservable.subscribe((accounts) => {
            console.log("in watchAccount accountsObservable jisa"); //16
            this.accounts = accounts;
            this.model.account = accounts.toString();
            console.log("accounts:", this.accounts, this.model.account); //17
        });
    }
    getTokens(acc) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('account value');
            console.log(acc);
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            console.log(deployedRiceCertificate);
            //   RiceCertificate.deployed().then(function (instance) {
            //     console.log("Initializing pop one token function" + account);
            deployedRiceCertificate.popToken.call(acc)
                .then(function (t) {
                console.log('OPop Token works or not');
                console.log(t);
                if (t == "" || t == "0x") {
                    alert("no token found");
                }
                else {
                    console.log(t);
                    console.log(t.c[0]);
                    var farmid = t.c[0];
                    document.getElementById("farm").value = farmid;
                    //                 document.getElementById('farm').value = farmid;
                    console.log(farmid);
                }
            });
            // }).catch(function (e) {
            //     console.log(e);
            // });
        });
    }
    //Submits an application
    submitApplication() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('**********************');
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            var farmid = document.getElementById('farm').value;
            var fname = document.getElementById('farmername').value;
            var add = document.getElementById('farmeraddress').value;
            var lat = document.getElementById('latit').value;
            var lng = document.getElementById('longit').value;
            var requirement = document.getElementById('requirement').value;
            var standard = document.getElementById('standard').value;
            var crop = document.getElementById('crop').value;
            var extent = document.getElementById('extent').value;
            var previouscrop = document.getElementById('previouscrop').value;
            var protect = document.getElementById('protect').value;
            var manure = document.getElementById('manure').value;
            var seed = document.getElementById('seed').value;
            var soiltype = document.getElementById('soiltype').value;
            var status = 'Pending';
            console.log(farmid, fname, add, lat, lng, crop, extent, previouscrop, protect, manure, seed, soiltype, requirement, standard);
            console.log(deployedRiceCertificate);
            if (fname === '' || fname === 'null' || add === '' || add === 'null' || requirement === '' || requirement === 'null' || standard === '' || standard === 'null' || status === '' || status === 'null') {
                alert('please check all details are provided correctly');
            }
            else {
                // const encodePlace = lat;
                // var encodePlace = Geohash.encode(lat, lng, [9])
                console.log('afwasf');
                // console.log(encodePlace);
                console.log(farmid, fname, add, lat, requirement, standard, metamaskAddress, status);
                console.log(metamaskAddress);
                const transaction = yield deployedRiceCertificate.addApplication(farmid, fname, add, lat, requirement, standard, metamaskAddress, status, { from: metamaskAddress, gas: 4600000 });
                if (!transaction) {
                    console.log('Error in saving Application');
                }
                else {
                    const transaction2 = yield deployedRiceCertificate.addApplication2(farmid, crop, extent, previouscrop, protect, manure, seed, soiltype, metamaskAddress, { from: metamaskAddress, gas: 4600000 });
                    if (!transaction2) {
                        //revert last transaction
                        console.log('Error in saving 2nd set of data');
                    }
                    else {
                        this.presentAlert(farmid);
                        this.router.navigateByUrl('farmer-homepage');
                    }
                }
            }
        });
    }
    presentAlert(farmid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Application Submitted Successfully',
                subHeader: 'Id assigned to your farm : ' + farmid,
                message: 'Notedown farmid for future reference',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    addMoreEdges() {
        console.log('save to Array');
        this.presentAlertforEdges();
    }
    presentAlertforEdges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Addional Field Points??',
                message: 'Click Ok to Enter Additional latitude & longitude of your field!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Cancel');
                            console.log('No New point added');
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            var lat = document.getElementById("latit").value;
                            var long = document.getElementById("longit").value;
                            var nd = new Array();
                            //   nd.lat = lat;
                            //   nd.lng = long;
                            nd.push(lat, long);
                            shapeArray = Array.prototype.concat.apply([nd], [shapeArray]);
                            console.log(shapeArray);
                            document.getElementById("latit").value = "";
                            document.getElementById("longit").value = "";
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    saveArray() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(document.getElementById("latit").value);
            console.log(document.getElementById("longit").value);
            console.log('save to Array');
            var lt = document.getElementById("latit").value;
            var long = document.getElementById("longit").value;
            var nd = new Array();
            var farmid = document.getElementById('farm').value;
            //   nd.lat = lt;
            //   nd.lng = long;
            nd.push(lt, long);
            shapeArray = Array.prototype.concat.apply([nd], [shapeArray]);
            console.log(shapeArray);
            // document.getElementById('latlong').style.display = "none"
            this.presentAlertMultipleButtons(shapeArray);
            // swal("Field Location Saved");
            // swal({
            //     title: "Save Field Location?",
            //     text: "Field Coordinates will be saved",
            //     icon: "info",
            //     buttons: true,
            // })
            //     .then((willSave) => {
            //         if (willSave) {
            //             swal("Farm location Saved in Array,Now Confirm Application!", {
            //                 icon: "success",
            //             });
            //             //document.getElementById("sendBtn").style.display="block";
            //             this.submitApplication(shapeArray);
            //         } else {
            //             swal("Location not Saved!");
            //         }
            //     });
            // //alert(farmid);
            // //GET SHAPE ARRAY
            // RiceCertificate.deployed().then(function (instance) {
            //     instance.getShapeArray.call(farmid).then(function (v) {
            //         console.log(v);
            //     })
            // });
            document.getElementById('mapContainer').style.display = "block";
            // console.log(NewArr.reduce(2));
            //Get Lat long Array
            var lat, lon, lat1, lon1;
            // lat=9.366092
            // lon =76.730862
            lat = shapeArray[0][0];
            lon = shapeArray[0][1];
            // // lat1=9.366224
            // //  lon1 =76.731281
            console.log('NewArr');
            console.log(lat);
            console.log(lon);
            //var h =  [];
            //h.push(NewArr);
            console.log(shapeArray);
            //console.log(h[0][0]);
            console.log(shapeArray.length);
            L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';
            var map = L.mapquest.map('mapContainer', {
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
            var denverLatLngs = shapeArray;
            //[9.364562, 76.731110],
            console.log(denverLatLngs);
            L.polygon(denverLatLngs, { color: 'black', stroke: true, weight: 1 }).addTo(map);
        });
    }
    // async presentAlertMultipleButtons() {
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     header: 'Alert',
    //     subHeader: 'Subtitle',
    //     message: 'This is an alert message.',
    //     buttons: ['Cancel', 'Open Modal', 'Delete']
    //   });
    //   await alert.present();
    // }
    presentAlertMultipleButtons(shapeArray) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const deployedRiceCertificate = yield this.RiceCertificate.deployed();
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Save Field Location?Click Ok to Confirm!!',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Cancel');
                            console.log('Location Not Saved');
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            console.log('Ok');
                            console.log('**********************');
                            console.log('Shape Array');
                            console.log(shapeArray);
                            var farmid = document.getElementById('farm').value;
                            //Array for shape saved in IPFS
                            var files = {
                                ID: farmid,
                                array: shapeArray
                            };
                            metamaskAddress = this.model.account;
                            console.log(metamaskAddress);
                            var files_json = JSON.stringify(files);
                            // ipfs.files.add(Buffer.from(files_json), function (err, res) {
                            //   if (err || !res) return console.error("ipfs add error", err, res);
                            //   ImagedataFile = res[0].hash;
                            //   console.log(ImagedataFile + ' ImagedataFile'); //hash of image
                            // });
                            // const added =  ipfs.add(files_json);
                            setTimeout(function () {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    const added = yield ipfs.add(files_json);
                                    console.log('added');
                                    if (added) {
                                        console.log(added);
                                        console.log(added.path);
                                        // if (err || !res) return console.error("ipfs add error", err, res);
                                        var dataFileCoordinates = added.path;
                                        // console.log(res);
                                        // console.log('hash of markers:' + dataFileCoordinates);
                                        // console.log("qrcode id" + parseInt(farmid));
                                        // console.log("array:");
                                        // console.log(shapeArray);
                                        deployedRiceCertificate.setShapeArray(parseInt(farmid), dataFileCoordinates, {
                                            from: metamaskAddress,
                                            gas: 3000000
                                        })
                                            .then(function (v) {
                                            console.log(v);
                                            document.getElementById('declaration').style.display = "block";
                                            document.getElementById('latlong').style.display = "none";
                                            // swal("Location Saved to IPFS");
                                        });
                                    }
                                    else {
                                        console.log('Not getting added to IPFS');
                                    }
                                });
                            }, 100);
                            //
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
FarmerApplicationFormPage.ctorParameters = () => [
    { type: _web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
    { type: web3__WEBPACK_IMPORTED_MODULE_6___default.a, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_web3_service__WEBPACK_IMPORTED_MODULE_5__["Web3Service"],] }] }
];
FarmerApplicationFormPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['mapElement',] }]
};
FarmerApplicationFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-farmer-application-form',
        template: _raw_loader_farmer_application_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_farmer_application_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FarmerApplicationFormPage);



/***/ }),

/***/ "MuMW":
/*!***********************************************************************************!*\
  !*** ./src/app/farmer-application-form/farmer-application-form-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: FarmerApplicationFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerApplicationFormPageRoutingModule", function() { return FarmerApplicationFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _farmer_application_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farmer-application-form.page */ "H9Kk");




const routes = [
    {
        path: '',
        component: _farmer_application_form_page__WEBPACK_IMPORTED_MODULE_3__["FarmerApplicationFormPage"]
    }
];
let FarmerApplicationFormPageRoutingModule = class FarmerApplicationFormPageRoutingModule {
};
FarmerApplicationFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FarmerApplicationFormPageRoutingModule);



/***/ }),

/***/ "W8OX":
/*!***************************************************************************!*\
  !*** ./src/app/farmer-application-form/farmer-application-form.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  height: 100%;\n}\n\nion-card {\n  justify-content: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zhcm1lci1hcHBsaWNhdGlvbi1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLFlBQUE7QUFERjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJmYXJtZXItYXBwbGljYXRpb24tZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XG4gIGhlaWdodDogMTAwJTtcbi8vIG1hcmdpbjogMTAwcHg7XG59XG5pb24tY2FyZHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=farmer-application-form-farmer-application-form-module.js.map