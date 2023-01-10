const { ethers } = require("hardhat");


const FEE_TOKEN_ADDRESS =  "0xba100000625a3754423978a60c9317c58a424e3D"

const VOTING_ESCROW_ADDRESS =  "0xC128a9954e6c874eA3d62ce62B468bA073093F25"

const DELEGATION_BOOST_ADDRESS = "0x67F8DF125B796B05895a6dc8Ecf944b9556ecb0B"

const FEE_RATIO = 500 // 5%

const MIN_PERCENT_REQUIRED = 1000 //10%

const ADVISED_PRICE = 19250000000 // per vote per second => eqv to 0.001662 BAL / day / veBAL vote delegated


//Deploys

const WARDEN_ADDRESS = "0x42227bc7D65511a357c43993883c7cef53B25de9"

const WARDEN_MULTI_BUY_ADDRESS = "0x5dd8F3c50038Cbaf29876EDDF0897F5bD91A7b8a"

module.exports = {
    FEE_TOKEN_ADDRESS,
    VOTING_ESCROW_ADDRESS,
    DELEGATION_BOOST_ADDRESS,
    FEE_RATIO,
    ADVISED_PRICE,
    MIN_PERCENT_REQUIRED,
    WARDEN_ADDRESS,
    WARDEN_MULTI_BUY_ADDRESS
};