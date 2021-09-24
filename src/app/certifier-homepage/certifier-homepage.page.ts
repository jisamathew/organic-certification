import { Component, OnInit,Inject,NgZone} from '@angular/core';
import { default as contract } from "truffle-contract";
const ricecertificate_artifacts = require('../../../build/contracts/RiceCertificate.json');
var RiceCertificate = contract(ricecertificate_artifacts);
import { Web3Service } from '../web3.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Web3 from 'web3';
var metamaskAddress, deployedRiceCertificate;

var sessionarray = [];
@Component({
  selector: 'app-certifier-homepage',
  templateUrl: './certifier-homepage.page.html',
  styleUrls: ['./certifier-homepage.page.scss'],
})
export class CertifierHomepagePage implements OnInit {
  accounts: string[];
  // private visibility: boolean = false;
  visibility:boolean = false;
  model = {
    account: '',
  };
  public sessionarray: any[];
  RiceCertificate: any;
  data: any;
  tablevaleany: any = [];
  constructor(private web3Service: Web3Service,
    private router: Router,
    private ngZone:NgZone,
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
    let data: any;
    data = await this.getApplications(this.model.account)
    console.log("pkg details")
    console.log(data);
    if(data){

      this.tablevaleany=data;
      console.log('this.table');
      console.log(this.tablevaleany)
    }
  }
    //application viewed by a farmer

    async getApplications(metamaskAddress) {
      console.log(metamaskAddress)
      const deployedRiceCertificate = await this.RiceCertificate.deployed();
      return new Promise((res, rej) => {
      console.log(deployedRiceCertificate);
      deployedRiceCertificate.retApp.call().then(function(data){
        console.log(data)
        // console.log(JSON.parse(data));
      })
      deployedRiceCertificate.getApplicationCount.call()
        .then(function (v) {
          console.log('GOT FROM BC')
          console.log(v)
          console.log(v.c)
          var appCount = v;
          //  var candidatesResults = $("#candidatesResults");
          //  candidatesResults.empty();
          for (var i = 0; i < appCount; i++) {
            deployedRiceCertificate.myStructs(i).then(function (rice) {
              console.log(rice);
              console.log(Web3)
               var farm_id = rice[0].c;
               var farm_owner = rice[1];
               var address = Web3.prototype.toAscii(rice[2]).replace(/[^ -~]+/g, '');
              console.log(address)
              //  //LOCATION DECODED
               var farmloc =  Web3.prototype.toAscii(rice[3]).replace(/[^ -~]+/g, '');
              //  var location = Geohash.decode(farmloc);
              //  var latitude = location.lat;
              //  var longitude = location.lon;
              //  console.log('Latitude : ' + latitude + ',Longitude:' + longitude)

              //  var requirement =  Web3.prototype.toAscii(rice[4]).replace(/[^ -~]+/g, '');
              var requirement =  Web3.prototype.toAscii(rice[4]).replace(/[^ -~]+/g, '');

               var standard =  Web3.prototype.toAscii(rice[5]).replace(/[^ -~]+/g, '');
               var account = rice[6]
               var stat =  Web3.prototype.toAscii(rice[7]).replace(/[^ -~]+/g, '')
               console.log(stat);
               console.log('ID : ' + farm_id + ' , FARMER : ' + farm_owner + ' ,ADDRESS : ' + address + ',REQUIREMENT : ' + requirement + ',STANDARD:' + standard + ',ACCOUNT' + account);
                sessionarray.push({
                'farm_id': farm_id, //farm_id
                'farm_owner': farm_owner, //cpid
                'address': address, //address
                'farmloc': farmloc, //farmloc
                'requirement': requirement, //requirement
                'standard': standard, //standard
                'stat':stat, //stat
                });
                // if(stat == 'Pending'){
                //   this.visibility = true;
                // }
                // else{
                //   this.visibility = false;
                // }
                console.log('sessionarray')
          console.log(sessionarray)
                res(sessionarray)
               // Render candidate Result
              //  var candidateTemplate = "<tr><th>" + farm_id + "</th><td>" + farm_owner + "</td><td>" + address + "</td><td>" + latitude + "</td><td>" + longitude + "</td><td>" + requirement + "</td><td>" + standard + "</td><td>" + account + "</td><td>" + stat + "</td></tr>"
              //  candidatesResults.append(candidateTemplate);

              //     // Render candidate ballot option
              /*        var candidateOption = "<option value='" + farm_id + "' >" + farm_owner + "</ option>"
                       candidatesSelect.append(candidateOption);
              */
            });
          }

        })
      });



    }
  viewCompleteData(e){
    var farmid = e.target.id;

    console.log(e.target.id);
    this.ngZone.run(()=>this.navigateTo('certifier-certification/',farmid));

  }
  navigateTo(url,farmid){
    this.router.onSameUrlNavigation = 'reload';

    this.router.navigate([url+JSON.stringify(farmid)]);

  }
}
