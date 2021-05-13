import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

//creates an instance of the campaign factory contract

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x2683e62863718858FaF65a29b495dD83f97F249D"
);

export default instance;
