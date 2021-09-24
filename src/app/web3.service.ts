// import {Injectable} from '@angular/core';
// import {Subject} from 'rxjs';
// declare let require: any;
// const Web3 = require('web3');
// // import Web3 from 'web3';
// // import {Http} from '@angular/http';
// import contract from 'truffle-contract';
// var util = require('util');

// declare let window: any;

// @Injectable({
//   providedIn: 'root'
// })
// export class Web3Service {
//   private web3: any;
//   private accounts: string[];
//   public ready = false;
//   public ethereum;
//   public webby3;

//   public accountsObservable = new Subject<string[]>();

//   constructor() {
//     console.log("in const");
//     console.log("in addEvent");
//     this.bootstrapWeb3();
//   }

//   public bootstrapWeb3() {
//     console.log("in bootstrapWeb");
//     this.ethereum = (window as any).ethereum;
//     this.webby3 = (window as any).Web3

//     // console.log(util.inspect(this.ethereum, {depth: null})); //2
//     console.log(util.inspect(this.webby3, {depth: null}));
//     console.log(util.inspect(Web3, {depth: null}));
//     console.log("********************************************************")
//     console.log(util.inspect(window.Web3, {depth: null}));
//     console.log("********************************************************")

//     console.log(util.inspect(window.web3, {depth: null}));
//     console.log("********************************************************")


//     // Checking if Web3 has been injected by the browser (Mist/MetaMask)
//     if (typeof window.web3 !== 'undefined') {
//       // Use Mist/MetaMask's provider
//       this.web3 = new Web3(window.web3.currentProvider);
//       this.web3.currentProvider.enable();
//       console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
//     } else {
//       console.log('No web3? You should consider trying MetaMask!');

//       // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
//       Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
//       // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
//       this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//     }
//     setInterval(() => this.refreshAccounts(), 2000);
//   }

//   public async artifactsToContract(artifacts) {
//     if (!this.web3) {
//       const delay = new Promise(resolve => setTimeout(resolve, 100));
//       await delay;
//       return await this.artifactsToContract(artifacts);
//     }

//     const contractAbstraction = contract(artifacts);
//     contractAbstraction.setProvider(this.web3.currentProvider);
//     return contractAbstraction;

//   }

//   private refreshAccounts() {
//     this.web3.eth.getAccounts((err, accs) => {
//       // console.log('Refreshing accounts');
//       if (err != null) {
//         console.warn('There was an error fetching your accounts.');
//         return;
//       }

//       // Get the initial account balance so it can be displayed.
//       if (accs.length === 0) {
//         console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
//         return;
//       }

//       if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
//         console.log('Observed new accounts');

//         this.accountsObservable.next(accs);
//         this.accounts = accs;
//       }

//       this.ready = true;
//     });
//   }

// }

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
declare let require: any;
const Web3 = require('web3');
// import Web3 from 'web3';
// import {Http} from '@angular/http';
import contract from 'truffle-contract';
var util = require('util');
// const ganache = require("ganache-cli");
// import WalletConnectProvider from "@walletconnect/web3-provider";

declare let window: any;
// const HDWalletProvider = require('truffle-hdwallet-provider');
import HDWalletProvider from 'truffle-hdwallet-provider';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  public web3: any;
   public ethereum;
  public accounts: string[];
  public ready = false;
  public webby3;
  public provider;

  private account;
  public accountsObservable = new Subject<string[]>();

  constructor() { //1
    console.log("in const");
    console.log("in addEvent");
    this.bootstrapWeb3();
  }

  public bootstrapWeb3() {
    console.log("in bootstrapWeb");

    this.ethereum = (window as any).ethereum;
    this.webby3 = (window as any).Web3

    // console.log(util.inspect(this.ethereum, {depth: null})); //2
    // console.log(util.inspect(this.webby3, {depth: null}));
    // console.log(util.inspect(Web3, {depth: null}));
    // console.log("********************************************************")
    // console.log(util.inspect(window.Web3, {depth: null}));
    // console.log("********************************************************")

    // console.log(util.inspect(window.web3, {depth: null}));
    // console.log("********************************************************")



    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') { //3
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
      this.web3.currentProvider.enable();
      console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    } else {
      console.log('No web3? You should consider trying MetaMask!');

      // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
      Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }
    // // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    // if (typeof window.ethereum !== 'undefined') {
    //   // Use Mist/MetaMask's provider
    //   window.ethereum.enable().then(() => {
    //     this.web3 = new Web3(window.ethereum);
    //   });
    // } else {
    //   console.log('No web3? You should consider trying MetaMask!');

    //   // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
    //   Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
    //   // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    //   this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // }
   this.refreshAccounts();
    // setInterval(() => this.refreshAccounts(), 100);

  }

  public async artifactsToContract(artifacts) {
    console.log("in artifactToContract") //8
    // if (!this.web3) {
    //   const delay = new Promise(resolve => setTimeout(resolve, 100));
    //   await delay;
    //   return await this.artifactsToContract(artifacts);
    // }

    const contractAbstraction = contract(artifacts);
    console.log("in contract abstract") //9
    contractAbstraction.setProvider(this.web3.currentProvider);
    return contractAbstraction;

  }


  private async refreshAccounts() { //13
    console.log('Refresh accounts');
    this.web3.eth.getAccounts((err, accs) => {
      console.log('Refreshing accounts');
      if (err != null) {
        console.warn('There was an error fetching your accounts.');
        console.log(err + "error")
        return;
      }else{
        console.log(accs)
        this.accountsObservable.next(accs[0]);
            this.accounts = accs[0];
          console.log("yegfyet")
            console.log(this.accounts)

      }
      this.ready = true;

    })

    // const accs = await this.web3.eth.getAccounts();
    // // console.log('Refreshing accounts');

    // // Get the initial account balance so it can be displayed.
    // if (accs.length === 0) {
    //   console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
    //   return;
    // }

    // if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
    //   console.log('Observed new accounts');

    //   this.accountsObservable.next(accs);
    //   this.accounts = accs;
    // }

    // this.ready = true;




    // this.provider.on("accountsChanged", (accounts: string[]) => {
    //   console.log(accounts);
    //    this.accountsObservable.next(accounts);
    //    this.accounts = accounts;
    //     console.log(this.accounts);
    // });

    //   // Get the initial account balance so it can be displayed.
    //   if (accs.length === 0) { //14 end
    //     console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
    //     return;
    //   }

    //   // if (!this.accounts || this.accounts.length !== accs.length || this.accounts[0] !== accs[0]) {
    //     console.log('Observed new accounts');  //15

    //     this.accountsObservable.next(accs[0]);
    //     this.accounts = accs[0];
    //     console.log(this.accounts + "yegfyet")
    // //  }

    //   this.ready = true;
    // });
  }

}
