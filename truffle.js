const HDWalletProvider = require('truffle-hdwallet-provider');
REMOTE_NODE="https://ropsten.infura.io/v3/befe17cc096d42bd9e8d4def00bea40d"
MNEMONIC = "calm cover torch social mom medal there ridge stand salute obvious just"

module.exports = {
    networks: {
         development: {
              host: "127.0.0.1",
              port: 8545,
              network_id: "*" // Match any network id
            },
            ropsten: {
               provider: () => new HDWalletProvider(MNEMONIC,REMOTE_NODE),
               network_id: '3' // Match any network id
             }
       }
};
