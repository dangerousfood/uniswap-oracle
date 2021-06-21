import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
  solidity: {
    version: "0.6.8",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      // forking: {
      //   url: key,
      //   blockNumber: 11687740
      // }
    },
    // mainnet: {
    //   url: key,
    //   accounts: [`0x${MAINNET_PRIVATE_KEY}`]
    // }
  },
  // etherscan: {
  //   apiKey: "KEY_GOES_HERE"
  // }
  paths: {
    sources: "./contracts",
    tests: "./test",
  },
};
