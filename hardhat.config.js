require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.21",
  networks: {
    monad: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
