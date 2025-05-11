// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyERC1155 is ERC1155, Ownable {
    uint256 public constant GOLD = 0;
    uint256 public constant SILVER = 1;

    constructor() ERC1155("https://my-api.com/metadata/{id}.json") {
        _mint(msg.sender, GOLD, 1000, "");
        _mint(msg.sender, SILVER, 5000, "");
    }

    function mint(address account, uint256 id, uint256 amount) public onlyOwner {
        _mint(account, id, amount, "");
    }
}
