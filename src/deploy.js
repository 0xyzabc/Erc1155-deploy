const hre = require("hardhat");

async function main() {
  const MyERC1155 = await hre.ethers.getContractFactory("MyERC1155");
  const myERC1155 = await MyERC1155.deploy();

  await myERC1155.deployed();

  console.log("✅ Contract deployed to:", myERC1155.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
