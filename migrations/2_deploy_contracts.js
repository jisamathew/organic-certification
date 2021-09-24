var ConvertLib = artifacts.require("./ConvertLib.sol");
var RiceCertificate = artifacts.require("./RiceCertificate.sol");
var MyNFTokenContract = artifacts.require('./MyNFToken.sol');

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, RiceCertificate);
  deployer.deploy(RiceCertificate);
   deployer.deploy(MyNFTokenContract, 'GreenCoin', 'GCNFT');
};
