const { staking } = require("../helper/staking");
const { gmxExports } = require("../helper/gmx");

const FTMVault = "0xc050733A325eEe50E544AcCbD38F6DACEd60ea6D";
const FTMStaking = "0x136F1bD4Bb930cD931Ed30310142c2f03a946AC0";
const WFTM = "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83";

// ZKSYNC
const zkSyncVault = "0x09Aa1138dfdfF855Df18DDAf08e92186D213700e";
const zkSyncStaking = "0xFae2784FaE4D47316B487Bc0087a7C78D4809753";
const WETH = "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91";

module.exports = {
  fantom: {
    staking: staking(FTMStaking, WFTM),
    tvl: gmxExports({ vault: FTMVault })
  },
  era: {
    staking: staking(zkSyncStaking, WETH),
    tvl: gmxExports({ vault: zkSyncVault })
  }
};