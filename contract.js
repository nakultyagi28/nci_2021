const web3= require("web3")

require('dotenv').config()

const rpcURL = " https://ropsten.infura.io/v3/805fde0c67bd4b8a8163eede1a66c165 "



const web3 = new Web3(rpcURL);

console.log("connected to web3");


console.log("Hello world")


const address = contractAddress;

const contract = new web3.eth.Contract(abi, address);

console.log("connected to contract on ropsten");



const owner = ownerAddress;


const getTotalSupply = async() => {
    let totSupply = await contract.methods.totalSupply().call();
    return totSupply;
}

const getName = async() => {
    let name = await contract.methods.name().call();
    return name
}

const getBalanceOfAccount = async(account) => {
    let bal = await contract.methods.balanceOf(owner).call();
    return bal;
}

const getDecimals = async() => {
    let decimals = await contract.methods.decimals().call();
    return decimals;
}

const getSymbol = async() => {
    let symbol = await contract.methods.symbol().call();
    return symbol;
}

const returnAllValues = async() => {
    console.log(await getTotalSupply());
    console.log(await getSymbol());
    console.log(await getName());
    console.log(await getDecimals());
    console.log(await getBalanceOfAccount(owner));
}


module.exports = { getSymbol, getDecimals, getBalanceOfAccount, getName }