import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { default as contract } from "truffle-contract";
import { Web3Service } from '../web3.service';
import { IonSlides } from '@ionic/angular';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { ModalPage } from '../modal/modal.page';
import Web3 from 'web3';
import { Observable } from 'rxjs';

const ricecertificate_artifacts = require('../../../build/contracts/RiceCertificate.json');
var RiceCertificate = contract(ricecertificate_artifacts);
var deployedRiceCertificate;
var navcontrol;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  // providers: [NavParams]
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  sliderOne: any;
  slideOptions = {
    // initialSlide: 0,
    // slidesPerView: 1,
    // autoplay: true
    initialSlide: 1,
    speed: 400,
    autoplay: true,
    spaceBetween: 0,
    slidesPreview: 1,
    slidesOffsetBefore: 6,
    slidesPerView: 'auto',
    zoom: true,
    grabCursor: true,
    // direction: 'vertical' | 'horizontal',
    // pagination: {} as object
  };
  accounts: string[];
  RiceCertificate: any;
  model = {
    name: '',
    pass: '',
    account: '',
};
  constructor(public navCtrl: NavController,
    private router: Router,
    private ngZone: NgZone,
    private web3Service: Web3Service,
    @Inject(Web3Service) private web3: Web3,

    public modalController: ModalController
  ) {
    //Item object for Slider
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995
        },
        {
          id: 925
        },
        {
          id: 940
        },
        {
          id: 943
        },
        {
          id: 944
        }
      ]
    };
  }
    //Move to Next slide
    slideNext(object, slideView) {
      slideView.slideNext(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });
    }

    //Move to previous slide
    slidePrev(object, slideView) {
      slideView.slidePrev(500).then(() => {
        this.checkIfNavDisabled(object, slideView);
      });;
    }

    //Method called when slide is changed by drag or navigation
    SlideDidChange(object, slideView) {
      this.checkIfNavDisabled(object, slideView);
    }
  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
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
        });

      });

  }
  //Signup Modal
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
//get metamask accounts
  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      console.log("in watchAccount accountsObservable jisa"); //16
      this.accounts = accounts;
      this.model.account = accounts.toString();
      console.log("accounts:" + this.model.account); //17
      this.checkAccount(this.model.account);
    });
  }
//to check signed in or not
  async checkAccount(account) {
    navcontrol = this.router;
    console.log('this.model.account in checkaccount', this.model.account);
    const deployedRiceCertificate = await this.RiceCertificate.deployed();
    console.log(deployedRiceCertificate);
    console.log("innn try");
    console.log(account)
    const v = await deployedRiceCertificate.logindata.call(account);
    console.log('v', v)
    if ((v == '')) {
      // alert(' No user found  SIgn Up for an Account');
      console.log('No Signup done')


    } else {
      if ((v == 'farmer')) {
        console.log("in user login")
        console.log('Login Success');

        this.ngZone.run(() => this.navigateTo('farmer-homepage'));
        navcontrol.onSameUrlNavigation = 'reload';

      } else if (v == 'inspector') {
        console.log('Login Success..');
        // alert('Welcome Inspector..');
        // this.router.navigateByUrl('inspector-homepage');
        this.ngZone.run(() => this.navigateTo('inspector-homepage'));

        navcontrol.onSameUrlNavigation = 'reload';

      } else if (v == 'certifier') {
        console.log('Login Success');
        // alert('Welcome Certifier....');
        this.ngZone.run(() => this.navigateTo('certifier-homepage'));

        navcontrol.onSameUrlNavigation = 'reload';

      } else {
        alert('Sorry No User Found Please Sign UP');
        navcontrol.onSameUrlNavigation = 'reload';

      }
    }

  }
  //for passing value via nav
  //   navcontrol.navigate(['inspector' + JSON.stringify(details)]).then(()=>{
  //     // navcontrol.navigate([navcontrol.url])
  //     navcontrol.onSameUrlNavigation ='reload';
  // });

//to navigate to a page
  navigateTo(url) {

    this.router.navigate([url]);

  }


}
