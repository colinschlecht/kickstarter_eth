import Web3 from "web3";
require("dotenv").config({ path: "../.env" });
const rinkebyHttps = process.env.RINKEBY_HTTPS;

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(rinkebyHttps);
  web3 = new Web3(provider);
}

export default web3;

//PREVIOUS CODE
// import Web3 from "web3";

// window.ethereum.request({ method: "eth_requestAccounts" });

// //window variable is not defined with server-side rendering
// // const web3 = new Web3(window.ethereum);

// export default web3;
