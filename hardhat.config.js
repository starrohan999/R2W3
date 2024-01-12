require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/d3ZT5ETl2bZKrA7-A8bBfj5g1OKNBNHq",
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
