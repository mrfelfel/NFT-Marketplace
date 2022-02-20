const HDWalletProvider = require("@truffle/hdwallet-provider") 
const mnemonic = 'away seek infant gaze orange network piano column cable obvious pepper rate'
const maticmainnet_rpc_url = 'https://polygon-mainnet.infura.io/v3/your_api_key'
const maticmumbai_rpc_url = 'https://matic-mumbai.chainstacklabs.com'
module.exports = {
  contracts_build_directory: './client/src/contracts',

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    maticmumbai: {
			provider: function() {
				return new HDWalletProvider(mnemonic, maticmumbai_rpc_url);
			  },
			  network_id: '80001',
		}
  },

  compilers: {
    solc: {
      version: "^0.8.7",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  }
};
