var MERC = artifacts.require("./ChicagoMerc.sol");
require("dotenv").config({path: "../.env"});

module.exports = async function (deployer) {

    await deployer.deploy(MERC);
    
    let instance = await MERC.deployed();
    await instance.transfer(process.env.TEAM, process.env.TEAM_TOKEN);
    await instance.transfer(process.env.TEAM, process.env.ADMIN_TOKEN);
    await instance.transfer(process.env.TEAM, process.env.MGNT_TOKEN);
    
};
