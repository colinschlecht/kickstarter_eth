import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//creates an instance of the campaign factory contract

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xC5e7Cd7ABC722E64828864b0F7C46deBc1724A0c"
);

export default instance;
