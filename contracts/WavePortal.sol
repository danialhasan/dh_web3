// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves; // permanently stored in contract
    address[] addressesWaved; // array of all addresses that have waved

    constructor() {
        console.log("WavePortal smart contract constructor run!!");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
        addressesWaved.push(msg.sender);
        // msg.sender is the address of the account that called this function.
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getAddressesWaved() public view returns (address[] memory) {
        //    console.log('List of address that have waved at you: %s', addressesWaved);
        return (addressesWaved);
    }
}
