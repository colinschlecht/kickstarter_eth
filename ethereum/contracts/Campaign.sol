pragma solidity ^0.4.17; 

//factory constructor to create a campaign contract
contract CampaignFactory{
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimum) public{
       address newCampaign = new Campaign(minimum, msg.sender);
       deployedCampaigns.push(newCampaign);
    }
    
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}


//actual campaign contract
contract Campaign{
    //request struct is a request object. Defines a type, but does not create a "request variable"
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    
    //variable requests points to an array of requests
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    
     constructor(uint minimum, address creator) public{
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable{
        require(msg.value > minimumContribution);
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient) 
        public restricted {
            
            //create a new variable that contains a Request, named newRequest, create new instance of a Request
            Request memory newRequest = Request({
               description: description,
               value: value,
               recipient: recipient, 
               complete: false,
               approvalCount: 0
            });
            
            //alternative syntax: 
            //Request(description,value,recipient,false);
            
            requests.push(newRequest);
        
    }
    
    function approveRequest(uint index) public {
        //create local variable for refactoring
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }
}
