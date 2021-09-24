import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { default as contract } from "truffle-contract";
const ricecertificate_artifacts = require('../../../build/contracts/RiceCertificate.json');
var RiceCertificate = contract(ricecertificate_artifacts);
import { Web3Service } from '../web3.service';
import Web3 from 'web3';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import Geohash from 'latlon-geohash';
var metamaskAddress, deployedRiceCertificate;
declare let require: any;
// const IPFS = require('ipfs-api');
const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
var lat, lon, marker0,ImagedataFile;
var shapeArray = new Array();
declare var L: any;
@Component({
  selector: 'app-farmer-application-form',
  templateUrl: './farmer-application-form.page.html',
  styleUrls: ['./farmer-application-form.page.scss'],
})
export class FarmerApplicationFormPage implements OnInit {
  @ViewChild('mapElement') mapElement;

  accounts: string[];
  RiceCertificate: any;
  model = {
    account: '',
  };
  map;
  constructor(private web3Service: Web3Service,
    private router: Router,
    public alertController: AlertController,
    // route:ActivatedRoute,
    @Inject(Web3Service) private web3: Web3
  ) {
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
      console.log("accounts:" ,this.accounts, this.model.account); //17
    });
  }
  async getTokens(acc) {
    console.log('account value');
    console.log(acc);
    const deployedRiceCertificate = await this.RiceCertificate.deployed();
    console.log(deployedRiceCertificate);
    //   RiceCertificate.deployed().then(function (instance) {
    //     console.log("Initializing pop one token function" + account);
    deployedRiceCertificate.popToken.call(acc)
      .then(function (t) {
        console.log('OPop Token works or not')
        console.log(t)

        if (t == "" || t == "0x") {
          alert("no token found");
        } else {
          console.log(t)
          console.log(t.c[0]);
          var farmid = t.c[0];
          (<HTMLInputElement>document.getElementById("farm")).value = farmid;

          //                 document.getElementById('farm').value = farmid;
          console.log(farmid);
        }

      });
    // }).catch(function (e) {
    //     console.log(e);
    // });

  }


  //Submits an application
  async submitApplication() {
    console.log('**********************')
    const deployedRiceCertificate = await this.RiceCertificate.deployed();

    var farmid = (<HTMLInputElement>document.getElementById('farm')).value;
    var fname = (<HTMLInputElement>document.getElementById('farmername')).value;
    var add = (<HTMLInputElement>document.getElementById('farmeraddress')).value;
    var lat = (<HTMLInputElement>document.getElementById('latit')).value;
    var lng = (<HTMLInputElement>document.getElementById('longit')).value;
    var requirement = (<HTMLInputElement>document.getElementById('requirement')).value;
    var standard = (<HTMLInputElement>document.getElementById('standard')).value;
    var crop = (<HTMLInputElement>document.getElementById('crop')).value;
    var extent = (<HTMLInputElement>document.getElementById('extent')).value;
    var previouscrop = (<HTMLInputElement>document.getElementById('previouscrop')).value;
    var protect = (<HTMLInputElement>document.getElementById('protect')).value;
    var manure = (<HTMLInputElement>document.getElementById('manure')).value;
    var seed = (<HTMLInputElement>document.getElementById('seed')).value;
    var soiltype = (<HTMLInputElement>document.getElementById('soiltype')).value;
    var status = 'Pending'
    console.log(farmid, fname, add, lat, lng, crop, extent, previouscrop, protect, manure, seed, soiltype, requirement, standard);

    console.log(deployedRiceCertificate);
    if (fname === '' || fname === 'null' || add === '' || add === 'null' || requirement === '' || requirement === 'null' || standard === '' || standard === 'null' || status === '' || status === 'null') {
      alert('please check all details are provided correctly');
    } else {
      // const encodePlace = lat;
      // var encodePlace = Geohash.encode(lat, lng, [9])
      console.log('afwasf');
      // console.log(encodePlace);
      console.log(farmid, fname, add, lat, requirement, standard, metamaskAddress, status);

      console.log(metamaskAddress);
      const transaction = await deployedRiceCertificate.addApplication(farmid,fname,add,lat,requirement,standard,metamaskAddress,status,{ from: metamaskAddress, gas: 4600000 });
      if (!transaction) {
        console.log('Error in saving Application');
      }
      else {
        const transaction2 = await deployedRiceCertificate.addApplication2(farmid, crop, extent, previouscrop, protect, manure, seed, soiltype, metamaskAddress, { from: metamaskAddress, gas: 4600000 })
        if (!transaction2) {
          //revert last transaction
          console.log('Error in saving 2nd set of data')
        }
        else {
          this.presentAlert(farmid);
          this.router.navigateByUrl('farmer-homepage');
        }
      }


    }
  }

  async presentAlert(farmid) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Application Submitted Successfully',
      subHeader: 'Id assigned to your farm : '+farmid,
      message: 'Notedown farmid for future reference',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  addMoreEdges() {
    console.log('save to Array');
    this.presentAlertforEdges();
  }
  async presentAlertforEdges() {
    const alert = await this.alertController.create({
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
        }, {
          text: 'Ok',
          handler: () => {

            var lat = (<HTMLInputElement>document.getElementById("latit")).value;
            var long = (<HTMLInputElement>document.getElementById("longit")).value;
            var nd = new Array();
            //   nd.lat = lat;
            //   nd.lng = long;
            nd.push(lat, long);
            shapeArray = Array.prototype.concat.apply([nd], [shapeArray]);
            console.log(shapeArray);
            (<HTMLInputElement>document.getElementById("latit")).value="";
            (<HTMLInputElement>document.getElementById("longit")).value="";
          }
        }

    ]
  });

   alert.present();

}
  async saveArray() {

    console.log((<HTMLInputElement>document.getElementById("latit")).value);
    console.log((<HTMLInputElement>document.getElementById("longit")).value);
    console.log('save to Array')

    var lt = (<HTMLInputElement>document.getElementById("latit")).value;
    var long = (<HTMLInputElement>document.getElementById("longit")).value;
    var nd = new Array();
    var farmid = (<HTMLInputElement>document.getElementById('farm')).value;

    //   nd.lat = lt;
    //   nd.lng = long;
    nd.push(lt, long);
    shapeArray = Array.prototype.concat.apply([nd], [shapeArray]);
    console.log(shapeArray);

    // document.getElementById('latlong').style.display = "none"
    this.presentAlertMultipleButtons(shapeArray)
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
    console.log('NewArr')
    console.log(lat)

    console.log(lon)
    //var h =  [];
    //h.push(NewArr);
    console.log(shapeArray);
    //console.log(h[0][0]);
    console.log(shapeArray.length)


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
  async presentAlertMultipleButtons(shapeArray) {
    const deployedRiceCertificate = await this.RiceCertificate.deployed();

    const alert = await this.alertController.create({
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
            console.log('Location Not Saved')
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Ok');
            console.log('**********************')
            console.log('Shape Array');
            console.log(shapeArray);

            var farmid = (<HTMLInputElement>document.getElementById('farm')).value;
            //Array for shape saved in IPFS
            var files = {
                ID: farmid,
                array: shapeArray
            }
            metamaskAddress = this.model.account
            console.log(metamaskAddress)
            var files_json = JSON.stringify(files);

        // ipfs.files.add(Buffer.from(files_json), function (err, res) {
        //   if (err || !res) return console.error("ipfs add error", err, res);
        //   ImagedataFile = res[0].hash;
        //   console.log(ImagedataFile + ' ImagedataFile'); //hash of image
        // });
            // const added =  ipfs.add(files_json);
            setTimeout(async function(){
              const added = await ipfs.add(files_json);
                       console.log('added');
                       if(added){
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
                                    document.getElementById('declaration').style.display="block";
                                    document.getElementById('latlong').style.display="none";

                                    // swal("Location Saved to IPFS");
                                });
                        }
                        else{
                          console.log('Not getting added to IPFS')
                        }

              },100);

          //
            }
          }

      ]
    });

     alert.present();

  }
  // ionViewDidLoad() {

  //  }
}

