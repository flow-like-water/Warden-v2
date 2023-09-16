import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-contract-sizer";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-vyper";
import path from "path";
import fs from "fs";

require("dotenv").config();

/*
["fork"].forEach((folder) => {
  const tasksPath = path.join(__dirname, "tasks", folder);
  fs.readdirSync(tasksPath)
    .filter((pth) => pth.includes(".ts"))
    .forEach((task) => {
      require(`${tasksPath}/${task}`);
    });
});*/

const TEST_MNEMONIC =
  "test test test test test test test test test test test junk";
const TEST_ACCOUNT = { mnemonic: TEST_MNEMONIC };

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides: {},
  },
  vyper: {
    version: "0.3.3",
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  networks: {
    hardhat: {},
    mainnet: {
      url: "https://rpc.v4.testnet.pulsechain.com",
      accountsBalance: "10000000000000000000000000000",
    },
    mocha: {
      url: "https://rpc.v4.testnet.pulsechain.com",
      timeout: 0,
    },
    typechain: {
      outDir: "typechain",
      target: "ethers-v5",
      url: "https://rpc.v4.testnet.pulsechain.com",
    },
    gasReporter: {
      enabled: true,
      url: "https://rpc.v4.testnet.pulsechain.com",
    },
  },
};

export default config;
