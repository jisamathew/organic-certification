import { Component, OnInit, Inject } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Web3Service } from '../web3.service';
import Web3 from 'web3';
import { default as contract } from "truffle-contract";
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

var metamaskAddress, navcontrol;
const ricecertificate_artifacts = require('../../../build/contracts/RiceCertificate.json');
var RiceCertificate = contract(ricecertificate_artifacts);
const myNFT_artifacts = require('../../../build/contracts/MyNFToken.json');
var myNFT = contract(myNFT_artifacts);
var deployedRiceCertificate, deployedNFT;
var tokenArr = [];
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  accounts: string[];
  RiceCertificate: any;
  myNFT: any;
  model = {
    account: '',
  };
  postData = {
    urole: '',
    walletAddress: ''
  }
  constructor(private modalCtrl: ModalController,
    private web3Service: Web3Service,
    private router: Router,
    public ngZone: NgZone,
    public alertController: AlertController,
    @Inject(Web3Service) private web3: Web3) { }

  ngOnInit() {
    console.log('Accounts getting in modal open');
    console.log('OnInit: ')
    console.log(this.web3Service);
    console.log(this.web3Service.accounts);
    // console.log(this.model.account);
    metamaskAddress = this.web3Service.accounts;
    (<HTMLInputElement>document.getElementById("walletAddress")).value = metamaskAddress;
    console.log('signup pageload'); //7
    this.web3Service.artifactsToContract(ricecertificate_artifacts)
      .then((RiceCertificateAbstraction) => {
        this.RiceCertificate = RiceCertificateAbstraction;
        this.RiceCertificate.deployed().then(deployed => {
          console.log(deployed);
          // deployed.Transfer({}, (err, ev) => {
          console.log('Transfer event came in, refreshing balance');
          // this.refreshBalance();
          // });
        });

      });
    this.web3Service.artifactsToContract(myNFT_artifacts)
      .then((NFTAbstraction) => {
        this.myNFT = NFTAbstraction;
        this.myNFT.deployed().then(deployed => {
          console.log(deployed);
          // deployed.Transfer({}, (err, ev) => {
          console.log('NFT');
          // this.refreshBalance();
          // });
        });

      });
  }
//Registration Phase
  //function to save user details to BC
  async signup() {
    navcontrol = this.router;
    console.log(this.postData.walletAddress);
    // let walletAddress = this.postData.walletAddress.trim();
    let walletAddress = metamaskAddress;
    let urole = (<HTMLInputElement>document.getElementById('urole')).value;
    console.log('User reg');
    console.log(walletAddress);
    console.log(urole);
    try {
      const deployedRiceCertificate = await this.RiceCertificate.deployed();

      console.log(deployedRiceCertificate);


      const transaction = await deployedRiceCertificate.savesignup(urole, walletAddress, { from: metamaskAddress, gas: 4600000 })
      console.log("data saved to bc");

      if (!transaction) {
        console.log('Transaction failed!');
      } else {
        console.log('Transaction complete!');
        console.log(transaction);
        this.dismissModal();
        this.presentAlert();
        if ((urole == 'farmer')) {
          console.log("Farmer signing in")


          this.createtoken();
          this.ngZone.run(() => this.navigateTo('farmer-homepage'));
            navcontrol.onSameUrlNavigation = 'reload';
        

        } else if (urole == 'inspector') {
          console.log('Signup Success..');

          this.ngZone.run(() => this.navigateTo('inspector-homepage'));

          // this.router.navigateByUrl('inspector-homepage');

        } else if (urole == 'certifier') {
          console.log('Certifier Signup Success..');
          this.router.navigateByUrl('certifier-homepage');
        } else {
          alert('Sorry No User Found Please Sign UP');
          // document.getElementById('signupPassword').value = account;
        }
        // console.log(JSON.stringify(transaction) + "data")
      }
    } catch (e) {
      console.log(e);
    }
  }
  navigateTo(url) {

    this.router.navigate([url]);

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registration Successful',
      // subHeader: 'Subtitle',
      message: 'Click Ok to Continue to your Page',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  //function to dismiss signup modal
  dismissModal() {
    this.modalCtrl.dismiss();
  }
  async createtoken() {
    console.log("in create token");

    // var account = this.model.account;
    var account = metamaskAddress;
    console.log('in createtoken', account);
    const deployedNFT = await this.myNFT.deployed();
    console.log(deployedNFT);

    const deployedRiceCertificate = await this.RiceCertificate.deployed();

    console.log(deployedRiceCertificate);
    for (var i = 0; i < 30; i++) {
      tokenArr[i] = Math.floor(Math.random() * 100000);
      console.log('Tokens:::' + tokenArr[i]);
    }
    const erc = await deployedNFT.mint2(account, tokenArr, {
      from: account,
      gas: 4000000
    }).then(function (result) {
      console.log(result);
      //console.log('Result = '+JSON.stringify(result));
    });
 
    const transaction2 = await deployedRiceCertificate.saveTokenData(account, tokenArr, { from: account, gas: 4600000 });

    if (!transaction2) {
      console.log('Token Data Not saved')
    }
    else {
      console.log(transaction2);
      console.log("721 Token Data Saved for Org");

    }





  }

}
