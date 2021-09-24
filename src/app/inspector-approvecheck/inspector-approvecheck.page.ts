import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { default as contract } from 'truffle-contract';
import { HttpClient } from '@angular/common/http';
const ricecertificate_artifacts = require('../../../build/contracts/RiceCertificate.json');
var RiceCertificate = contract(ricecertificate_artifacts);
import { Web3Service } from '../web3.service';
import Web3 from 'web3';

import { AlertController } from '@ionic/angular';
import {  ViewChild } from '@angular/core';
var arr,metamaskAddress;
declare let require: any;
// const IPFS = require('ipfs-api');
const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
var lat, lon, marker0,output;
var shapeArray1 = new Array();
declare var L: any;
@Component({
  selector: 'app-inspector-approvecheck',
  templateUrl: './inspector-approvecheck.page.html',
  styleUrls: ['./inspector-approvecheck.page.scss'],
})
export class InspectorApprovecheckPage implements OnInit {
accounts: string[];
dataValue: any[] ;
  model = {
    account: '',
  };
  RiceCertificate: any;
  urldata: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private web3Service: Web3Service,
    public http: HttpClient,
    @Inject(Web3Service) private web3: Web3) {

     }


  ngOnInit() {
    console.log("in oninit")
    this.urldata = this.route.snapshot.paramMap.get("xyz")
    console.log(this.urldata)
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

  async viewApplicationData(arr) {
    const deployedRiceCertificate = await this.RiceCertificate.deployed();
var that = this;
    console.log(deployedRiceCertificate);
    (<HTMLInputElement>document.getElementById('fieldid')).innerHTML = arr;
    deployedRiceCertificate.getInfo.call(arr).then(function (info) {
      deployedRiceCertificate.getextraInfo.call(arr).then(function (inf) {
        console.log(inf)
        console.log('GOT FROM BC')
        console.log(info);
        // var farm_id =Web3.prototype.toAscii(rice[0]).replace(/[^ -~]+/g, '');
        var farm_owner = info[0];
        var address = Web3.prototype.toAscii(info[1]).replace(/[^ -~]+/g, '');
        var requirement = Web3.prototype.toAscii(info[2]).replace(/[^ -~]+/g, '');
        console.log(requirement,'CHeck#@@@@@@@@@!!!!!#@')
        var standard = Web3.prototype.toAscii(info[4]).replace(/[^ -~]+/g, '');
        // var account = info[5]
        var stat = Web3.prototype.toAscii(info[5]).replace(/[^ -~]+/g, '')

        var crop = inf[0];
        var extent = Web3.prototype.toAscii(inf[1]).replace(/[^ -~]+/g, '');
        var previouscrop = Web3.prototype.toAscii(inf[2]).replace(/[^ -~]+/g, '');
        var protect = Web3.prototype.toAscii(inf[3]).replace(/[^ -~]+/g, '');
        var manure = Web3.prototype.toAscii(inf[4]).replace(/[^ -~]+/g, '');
        var seed = Web3.prototype.toAscii(inf[5]).replace(/[^ -~]+/g, '');
        var soiltype = Web3.prototype.toAscii(inf[6]).replace(/[^ -~]+/g, '')
        console.log(crop + "" + extent + "" + previouscrop + "" + protect + "" + manure + "" + seed + "" + soiltype,requirement);

        (<HTMLInputElement>document.getElementById('owner')).innerHTML = farm_owner;
        (<HTMLInputElement>document.getElementById('addr')).innerHTML = address;
        (<HTMLInputElement>document.getElementById('production')).innerHTML = requirement;
        (<HTMLInputElement>document.getElementById('std')).innerHTML = standard;
        // (<HTMLInputElement>document.getElementById('acc')).value = account;
        (<HTMLInputElement>document.getElementById('stat1')).innerHTML = stat;
        (<HTMLInputElement>document.getElementById('crop')).innerHTML = crop;
        (<HTMLInputElement>document.getElementById('extent')).innerHTML = extent;
        (<HTMLInputElement>document.getElementById('precrop')).innerHTML = previouscrop;
        (<HTMLInputElement>document.getElementById('protect')).innerHTML = protect;
        (<HTMLInputElement>document.getElementById('manure')).innerHTML = manure;
        (<HTMLInputElement>document.getElementById('seed')).innerHTML = seed;
        (<HTMLInputElement>document.getElementById('soil')).innerHTML = soiltype;
        deployedRiceCertificate.getShapeArray.call(arr).then(function (v) {
          console.log("getting hash for markers. if and else condition. check v");
          console.log(v);
          console.log(Web3.prototype.toUtf8(v));
          var IPFSHash =Web3.prototype.toUtf8(v);
          const IPFSURL ='https://ipfs.infura.io/ipfs/'+IPFSHash;


  that.http.get(IPFSURL).subscribe(response=>{
    console.log('EWRT@#$%^&^%$#@!#$%^&%$#@$%^&%$#%^')
    console.log(response);
console.log(Array.of(response));
console.log(that);
    // this.dataValue = JSON.stringify(response);
    // this.LEI=this.dataValue.LEI;
    that.dataValue = Array.of(response);
     console.log('this.dataValue ',that.dataValue[0] );
     console.log('this.dataValue ',that.dataValue[0].array );

    console.log('GOT SHAPE ARRAY FROM IPFS')
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
                  console.log('NewArr')
                  console.log(lat)

                  console.log(lon)
                  //var h =  [];
                  //h.push(NewArr);
                  console.log(shapeArray1);
                  //console.log(h[0][0]);
                  console.log(shapeArray1.length)


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
          document.getElementById('addinspect').style.display = "block"

          //Shape in Inspector Page




        }
        else if (stat === "Inspected") {
          document.getElementById('inspect').style.display = "block"
          deployedRiceCertificate.getInspectedInfo.call(arr).then(function (ins) {
            console.log(ins);
            var ida = new Date(parseInt(ins[0].c))
            var idate = ida.toDateString()
            // var idate = web3.toAscii(ins[0])
            var iname = ins[1];
            (<HTMLInputElement>document.getElementById('idate3')).value = idate;
            (<HTMLInputElement>document.getElementById('iname3')).value = iname

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
    })

  }
  //AFTER Accepting inspect details added
  async InspectDetails() {
    const deployedRiceCertificate = await this.RiceCertificate.deployed();

    console.log(deployedRiceCertificate);
    var id = (<HTMLInputElement>document.getElementById('fieldid')).innerHTML;
    var idate = (<HTMLInputElement>document.getElementById('idate')).value;
    var inspectdate = Date.parse(idate);
    console.log(inspectdate);
    var inspector = (<HTMLInputElement>document.getElementById('iname')).value;
    console.log(id + ',' + inspectdate + ',' + inspector);
    var status = 'Inspected'
    var owner = (<HTMLInputElement>document.getElementById('owner')).innerHTML;
    var addr = (<HTMLInputElement>document.getElementById('addr')).innerHTML;
    var production = (<HTMLInputElement>document.getElementById('production')).innerHTML;
    var std = (<HTMLInputElement>document.getElementById('std')).innerHTML;
    // var acc = (<HTMLInputElement>document.getElementById('acc')).value;
    var crop = (<HTMLInputElement>document.getElementById('crop')).value;
    var extent = (<HTMLInputElement>document.getElementById('extent')).value;
    var precrop = (<HTMLInputElement>document.getElementById('precrop')).value;
    var protect = (<HTMLInputElement>document.getElementById('protect')).value;
    var manure = (<HTMLInputElement>document.getElementById('manure')).value;
    var seed = (<HTMLInputElement>document.getElementById('seed')).value;
    var soiltype = (<HTMLInputElement>document.getElementById('soil')).value;

    console.log(status);
    console.log(this.model.account);
    // var lat = (<HTMLInputElement>document.getElementById('latit')).value
    // var lng = (<HTMLInputElement>document.getElementById('longit')).value
    // var encodePlace = Geohash.encode(lat, lng, [9])
    var encodePlace = '';
    metamaskAddress = this.model.account;
    const transaction = await deployedRiceCertificate.addInspectDetails(id, inspectdate, inspector, {
      from:metamaskAddress,
      gas: 3000000
    }) // addApplication is a function to be defined in the contract
    if (!transaction) {
      console.log('Sorry Error in adding inspect');
    } else {
      console.log('added inspector details')
      console.log('metamaskAddress');
      console.log(metamaskAddress);
      const transaction2 = await deployedRiceCertificate.updateFarm(id, owner, addr, encodePlace, production, std,  status, {
        from: metamaskAddress,
        gas: 3000000
      }) // addApplication is a function to be defined in the contract
      if (!transaction2) {
        console.log('Info not updated');

      }
      else {
        this.presentAlert();
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigateByUrl('inspector-homepage');


      }

    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Application Approval Completed',
      // subHeader: 'Id assigned to your farm : '+farmid,
      // message: 'Notedown farmid for future reference',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



}
