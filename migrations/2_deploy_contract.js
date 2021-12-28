const fakceUSDC = artifacts.require("./Erc20Token");

module.exports = function(deployer) {
  deployer.deploy(fakceUSDC);
};
