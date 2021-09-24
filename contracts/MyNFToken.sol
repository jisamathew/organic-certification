// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.9.0;

import "./NFTokenMetadata.sol";
import "../node_modules/@0xcert/ethereum-utils/contracts/ownership/Ownable.sol";
contract MyNFToken is
  NFTokenMetadata,
  Ownable
  

{

    address myContract;

    constructor(
        string memory _name,
        string memory _symbol
    )
    public
    {
        nftName = _name;
        nftSymbol = _symbol;
    }
 
    function mint(
        address _owner,
        uint256[] calldata _id
       
    )
    onlyOwner
    external  returns(uint256)
    {
      
        for(uint i = 0;i<_id.length;i++){
         
            super._mint(_owner, _id[i]);
        }
     
     
      
    }

    function mint2(
        address _owner,
        uint256[] calldata _id
       
    )
    external  returns(uint256)
    {
      
        for(uint i = 0;i<_id.length;i++){
         
            super._mint2(_owner, _id[i]);
        }
     
     
      
    }
   
    function getb(address _owner ) public returns(uint256[] memory,uint256[] memory){
      
        return (super._getb(_owner));
    }
   

    function burn(
        address _owner,
        uint256 _tokenId
    )
    //onlyOwner
    external
    {
        super._burn(_owner, _tokenId);
    }

}