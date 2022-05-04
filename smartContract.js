const Web3 = require("web3");

const stakingAbi = require("./abi.json");

let web3;

const provider = new Web3.providers.HttpProvider(
  "https://mainnet.infura.io/v3/287af69fca9142f3b1681a93ce4c3afa"
);
web3 = new Web3(provider);

async function getBalance(address) {
  const Staking = "0xdDDd0e38d30dD29C683033fA0132f868597763AB";

  const stakingInstance = new web3.eth.Contract(stakingAbi, Staking);

  const stake = await stakingInstance.methods.balanceOf(address).call();

  const balance = (stake / 10 ** 18).toFixed(2);

  console.log("balance:", balance, "DVF");
}

let address = "0xe94629793d7cd090bb863f185c29f4316eee0590";
getBalance(address);
