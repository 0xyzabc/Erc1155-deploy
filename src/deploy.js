const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const MyERC1155 = await hre.ethers.getContractFactory("MyERC1155");
  const myERC1155 = await MyERC1155.deploy(deployer.address);

  await myERC1155.waitForDeployment();

  console.log("✅ Contract deployed to:", await myERC1155.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
