import { Component, OnInit, Inject } from '@angular/core';
import { default as contract } from "truffle-contract";
const ricecertificate_artifacts = require('../../../build/contracts/RiceCertificate.json');
var RiceCertificate = contract(ricecertificate_artifacts);
import { Web3Service } from '../web3.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Web3 from 'web3';
// var Web3 = require('web3');
import Geohash from 'latlon-geohash';
var metamaskAddress, deployedRiceCertificate;
var sessionarray = [];
@Component({
  selector: 'app-farmer-viewapplications',
  templateUrl: './farmer-viewapplications.page.html',
  styleUrls: ['./farmer-viewapplications.page.scss'],
})
export class FarmerViewapplicationsPage implements OnInit {
  accounts: string[];
  model = {
    account: '',
  };
  public sessionarray: any[];
  RiceCertificate: any;
  data: any;
  completed: boolean;
  public rice:any[];
  tablevaleany: any = [];
  constructor(private web3Service: Web3Service,
    private router: Router,
    public alertController: AlertController,
    @Inject(Web3Service) public web3: Web3) { }

  ngOnInit() {
    console.log('Accounts getting in modal open');
    console.log('OnInit: ')
    console.log(this.web3Service);
    console.log('Account: ')
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
 async viewApplicationinTable(){
var that = this;

  let appcount: any;
  appcount = await this.getApplications(this.model.account)
  console.log("appcount")
  console.log(appcount);
var myArray = new Array();
const deployedRiceCertificate = await this.RiceCertificate.deployed();

if(appcount){
  console.log(appcount);
  for (var i = 0; i < appcount.length; i++) {
  //   myArray.push(data[i])

  // }
  console.log('appcount[i]');
  console.log(appcount[i].c[0]);
  var id = appcount[i].c[0];

 var callComplete = await deployedRiceCertificate.getInfo.call(appcount[i].c[0]).then(function (rice) {
  return new Promise((res, rej) => {
    console.log(rice);
    console.log(Web3);
    var farm_id = rice[6]
    var address =  Web3.prototype.toAscii(rice[1]).replace(/[^ -~]+/g, '');
    var farm_owner = rice[0];
    var requirement = Web3.prototype.toAscii(rice[3]).replace(/[^ -~]+/g, '');
    console.log(address);
console.log('requirement',requirement)
    //  //LOCATION DECODED
    var farmloc = Web3.prototype.toAscii(rice[2]).replace(/[^ -~]+/g, '');
    //  var location = Geohash.decode(farmloc);
    //  var latitude = location.lat;
    //  var longitude = location.lon;
    //  console.log('Latitude : ' + latitude + ',Longitude:' + longitude)
    var standard = Web3.prototype.toAscii(rice[4]).replace(/[^ -~]+/g, '');
    // var stat  = Web3.prototype.toAscii(rice[5]).replace(/[^ -~]+/g, '');
    // var account =rice[5];
    var stat = Web3.prototype.toAscii(rice[5]).replace(/[^ -~]+/g, '');
    console.log(stat,standard);
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
if(!callComplete){
  console.log('dsfd');
}
  else{
  console.log(sessionarray)
    this.tablevaleany=sessionarray;
  console.log('this.table');
  console.log(this.tablevaleany)

}
  }
  // this.tablevaleany=data;
  // console.log('this.table');
  // console.log(this.tablevaleany)
}

}
  //application viewed by a farmer

async getApplications(metamaskAddress) {
  console.log('metamaskAddress...********************')
  console.log(metamaskAddress)
  const deployedRiceCertificate = await this.RiceCertificate.deployed();
    return new Promise((res, rej) => {
    console.log(deployedRiceCertificate);
    deployedRiceCertificate.getFarm(metamaskAddress).then(function (v) {
      console.log('Farm data got');
      console.log(v)
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
else{
  console.log('Sorry No application found')
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
  })




  }
  async getSingleData(){
    return new Promise((res, rej) => {

        // res(v)
      });

  }


}
