import { Component, OnInit,Inject,NgZone } from '@angular/core';
import { default as contract } from 'truffle-contract';
import { HttpClient } from '@angular/common/http';

const ricecertificate_artifacts = require('../../../build/contracts/RiceCertificate.json');
var RiceCertificate = contract(ricecertificate_artifacts);
import { Web3Service } from '../web3.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Web3 from 'web3';
var metamaskAddress, deployedRiceCertificate;
var arr;
declare let require: any;
// const IPFS = require('ipfs-api');
const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
var lat, lon, marker0,output;
var shapeArray1 = new Array();
declare var L: any;
@Component({
  selector: 'app-certifier-certification',
  templateUrl: './certifier-certification.page.html',
  styleUrls: ['./certifier-certification.page.scss'],
})
export class CertifierCertificationPage implements OnInit {
  accounts: string[];
dataValue: any[] ;

  model = {
    account: '',
  };
  RiceCertificate: any;
  data: any;
  customPickerOptions: any;
  selYear: any;

  // @ViewChild('mydt') mydt: IonDatetime;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private web3Service: Web3Service,
    public http: HttpClient,
    @Inject(Web3Service) private web3: Web3
  ) {
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
    }
  }

  ngOnInit() {

    console.log("in oninit")
    this.data = this.route.snapshot.paramMap.get("xyz")
    console.log(this.data)
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
  async viewApplicationData(id) {
    const deployedRiceCertificate = await this.RiceCertificate.deployed();
    var that = this;
    console.log('***********************************')
    console.log(id);
    var marker0;
    document.getElementById('viewApp').style.display = "none";
    // document.getElementById('searchFarm').style.display = "none";
    (<HTMLInputElement>document.getElementById('fieldid')).innerHTML = id;
    //based on id get lat long and details and shw map
    deployedRiceCertificate.getInfo.call(id).then(function (info) {
            //    for(var i= 0;i<v.length;i++)
            //      {

            console.log('GOT FROM BC')
            console.log(info);
            console.log(Web3.prototype)
            console.log(Web3.prototype.toAscii(info[2]).replace(/[^ -~]+/g, ''))

            // var farm_id = Web3.prototype.toAscii(rice[0]).replace(/[^ -~]+/g, '');
             var farm_owner = info[0];
        var address = Web3.prototype.toAscii(info[1]).replace(/[^ -~]+/g, '');
        var requirement = Web3.prototype.toAscii(info[2]).replace(/[^ -~]+/g, '');
        console.log(requirement,'CHeck#@@@@@@@@@!!!!!#@')
        var standard = Web3.prototype.toAscii(info[4]).replace(/[^ -~]+/g, '');
        // var account = info[5]
        var stat1 = Web3.prototype.toAscii(info[5]).replace(/[^ -~]+/g, '')

            deployedRiceCertificate.getextraInfo.call(id).then(function (inf) {

                var crop = inf[0];
                var extent = Web3.prototype.toAscii(inf[1]).replace(/[^ -~]+/g, '');
                var previouscrop = Web3.prototype.toAscii(inf[2]).replace(/[^ -~]+/g, '');
                var protect = Web3.prototype.toAscii(inf[3]).replace(/[^ -~]+/g, '');
                var manure = Web3.prototype.toAscii(inf[4]).replace(/[^ -~]+/g, '');
                var seed = Web3.prototype.toAscii(inf[5]).replace(/[^ -~]+/g, '');
                var soiltype = Web3.prototype.toAscii(inf[6]).replace(/[^ -~]+/g, '')
                console.log('Farm Details');
                console.log(crop + "" + extent + "" + previouscrop + "" + protect + "" + manure + "" + seed + "" + soiltype);
                console.log('SoilType:' + soiltype);
                (<HTMLInputElement>document.getElementById('owner')).innerHTML = farm_owner;
                (<HTMLInputElement>document.getElementById('addr')).innerHTML = address;
                (<HTMLInputElement>document.getElementById('production')).innerHTML = requirement;
                (<HTMLInputElement>document.getElementById('std')).innerHTML = standard;
                // (<HTMLInputElement>document.getElementById('acc')).value = account;
                (<HTMLInputElement>document.getElementById('stat1')).innerHTML = stat1;

                (<HTMLInputElement>document.getElementById('crop')).innerHTML = crop;
                (<HTMLInputElement>document.getElementById('extent')).innerHTML = extent;
                (<HTMLInputElement>document.getElementById('precrop')).innerHTML = previouscrop;
                (<HTMLInputElement>document.getElementById('protect')).innerHTML = protect;
                (<HTMLInputElement>document.getElementById('manure')).innerHTML = manure;
                (<HTMLInputElement>document.getElementById('seed')).innerHTML = seed;
                (<HTMLInputElement>document.getElementById('soil1')).innerHTML = soiltype;

                // document.getElementById('fieldid').value = id;
                // console.log(info);
                console.log(info[2]);
                //LOCATION DECODED
                var farmloc = Web3.prototype.toAscii(info[2]).replace(/[^ -~]+/g, '');

                document.getElementById('SingleApplication1').style.display = "block";
                document.getElementById('InspectionDiv').style.display = "none";


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
                if (stat1 == "Inspected") {

                    deployedRiceCertificate.getInspectedInfo.call(id).then(function (ins) {
                        console.log(ins);
                        //var idate = ins[0];
                        console.log(ins[0].c);
                        // var idate = Web3.prototype.toAscii(ins[0]);
                        // var ida = new Date(parseInt(ins[0].c));

                        // var inspectiondate = ida.toDateString();
                        var inspectiondate = new Date(ins[0].c[0] * 1000).toLocaleString()
                        var iname = ins[1];
                        (<HTMLInputElement>document.getElementById('idate2')).innerHTML = inspectiondate;
                        (<HTMLInputElement>document.getElementById('iname2')).innerHTML = iname

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


                    })
                } else if (stat1 == "Certified") {

                    document.getElementById('SingleApplication1').style.display = "none";


                        deployedRiceCertificate.getInspectedInfo.call(id).then(function (inspe) {
                            console.log(inspe);
                            //var idate = ins[0];
                            console.log(inspe[0].c)
                            // var idate = Web3.prototype.Ascii(ins[0])
                            // var ida = new Date(parseInt(inspe[0].c))
                            // var idate = ida.toDateString()

                        var idate = new Date(inspe[0].c[0] * 1000).toLocaleString()

                            var iname = inspe[1]

                            deployedRiceCertificate.getCertificationInfo.call(id).then(function (cert) {
                                var cname = cert[0]
                                var fromyr = cert[1].c
                                var toyr = cert[2].c
                                var validity = toyr - fromyr
                                //
                                //Here generate pdf but value doesent exist or we have to get value from bc one byone
                                // App.GeneratePDF();
                                // document.getElementById('SingleApplication1').style.display = "none";

                                document.getElementById('FinalCertificate').style.display = "block";
                                (<HTMLInputElement>document.getElementById('farm')).innerHTML = id;
                                (<HTMLInputElement>document.getElementById('owns')).innerHTML = farm_owner;
                                (<HTMLInputElement>document.getElementById('add')).innerHTML = address;
                                // (<HTMLInputElement>document.getElementById('la')).innerHTML = latitude;
                                // (<HTMLInputElement>document.getElementById('long')).innerHTML = longitude;
                                (<HTMLInputElement>document.getElementById('re')).innerHTML = requirement;
                                (<HTMLInputElement>document.getElementById('stnd')).innerHTML = standard;
                                (<HTMLInputElement>document.getElementById('iby')).innerHTML = iname;
                                (<HTMLInputElement>document.getElementById('ida')).innerHTML = idate;
                                (<HTMLInputElement>document.getElementById('cby')).innerHTML = cname;
                                (<HTMLInputElement>document.getElementById('cval')).innerHTML = validity + 'years';

                                // document.getElementById('mapSh').style.display = "block";
                                (<HTMLInputElement>document.getElementById('seedsource')).innerHTML = seed;
                                (<HTMLInputElement>document.getElementById('soiltype2')).innerHTML = soiltype;


                                document.getElementById('contentqr').style.display = "block";
                                var size = 100;
                                var data = id;
                                var imgqr = "http://chart.googleapis.com/chart?cht=qr&chs=" + size + "x" + size + "&choe=UTF-8&chld=L|0&chl=" + data;
                                // console.log(imgqr)
                                (<HTMLInputElement>document.getElementById("qr")).src = imgqr;
                                if (standard == 'NPOP') {
                                    var imgurl = "../../assets/images/logo.jpg";
                                    (<HTMLInputElement>document.getElementById("logo")).src = imgurl;

                                } else {
                                    var imgurl = "../../assets/images/logo2.png";
                                    (<HTMLInputElement>document.getElementById("logo")).src = imgurl;

                                }
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
                                          console.log('NewArr')
                                          console.log(lat)

                                          console.log(lon)
                                          //var h =  [];
                                          //h.push(NewArr);
                                          console.log(shapeArray1);
                                          //console.log(h[0][0]);
                                          console.log(shapeArray1.length)


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

                              });                                setTimeout(function () {

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
                            })
                        })

                } else {

                    document.getElementById('inspectDetails').style.display = "none";

                        // window.location.reload();

                }
            })
        })



}
async certifyFarm() {
  const deployedRiceCertificate = await this.RiceCertificate.deployed();
var that=this;
  //     //details,set status as certified and show pdf
    var farm_id = (<HTMLInputElement>document.getElementById('fieldid')).innerHTML;
    var cname = (<HTMLInputElement>document.getElementById('cname')).value
    var fromyr = (<HTMLInputElement>document.getElementById('fromyr')).value
    var toyr = (<HTMLInputElement>document.getElementById('toyr')).value
    console.log(farm_id + ',' + cname + ',' + fromyr + ',' + toyr)
    var owner = (<HTMLInputElement>document.getElementById('owner')).innerHTML;
    var addr = (<HTMLInputElement>document.getElementById('addr')).innerHTML;
    var production = (<HTMLInputElement>document.getElementById('production')).innerHTML;
    var std = (<HTMLInputElement>document.getElementById('std')).innerHTML;
    // var acc = (<HTMLInputElement>document.getElementById('acc')).value;
    var crop = (<HTMLInputElement>document.getElementById('crop')).innerHTML;
    var extent = (<HTMLInputElement>document.getElementById('extent')).innerHTML;
    var precrop = (<HTMLInputElement>document.getElementById('precrop')).innerHTML;
    var protect = (<HTMLInputElement>document.getElementById('protect')).innerHTML;
    var manure = (<HTMLInputElement>document.getElementById('manure')).innerHTML;
    var seed = (<HTMLInputElement>document.getElementById('seed')).innerHTML;
    var soiltype = (<HTMLInputElement>document.getElementById('soil1')).innerHTML;
    var idatef = (<HTMLInputElement>document.getElementById('idate2')).innerHTML;
    var inamef = (<HTMLInputElement>document.getElementById('iname2')).innerHTML;
    var status ='Certified';
    console.log(status);

//     var lat = document.getElementById('latit').value
//     var lng = document.getElementById('longit').value
//     var encodePlace = Geohash.encode(lat, lng, [9])
 var encodePlace ='2';

    var validity = parseInt(toyr) - parseInt(fromyr);
    console.log(validity + 'years');
console.log( this.model.account);
metamaskAddress = this.model.account;
//     //ADD to BC new struct
deployedRiceCertificate.addCertifierDetails(farm_id,cname, fromyr, toyr, {
            from: metamaskAddress,
            gas: 460000
        }) // addApplication is a function to be defined in the contract
            .then(function(v) {
                console.log(v);
                console.log('added certification details');
                var status = 'Certified';
                deployedRiceCertificate.updateFarm(farm_id, owner, addr, encodePlace, production, std,  status, {
                    from: metamaskAddress,
                    gas: 3000000
                }).then(function(v) {
                    console.log('Common Details and status updated')
                    console.log(v);
                    this.router.onSameUrlNavigation = 'reload';
                    this.router.navigate(['certifier-certification/'+JSON.stringify(farm_id)]);
                });
              });

}

}
