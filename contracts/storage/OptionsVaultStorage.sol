// SPDX-License-Identifier: MIT
pragma solidity >=0.7.2;

import {
    ReentrancyGuard
} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Initializable} from "../lib/upgrades/Initializable.sol";
import {Ownable} from "../lib/Ownable.sol";
import {IRibbonFactory} from "../interfaces/IRibbonFactory.sol";

contract OptionsVaultStorageV1 is Initializable, Ownable, ReentrancyGuard {
    // Ribbon Factory used to access adapters
    IRibbonFactory public factory;

    // Privileged role that is able to select the option terms (strike price, expiry) to short
    address public manager;

    // Option that the vault is currently shorting
    address public currentOption;

    // Amount that is currently locked for selling options
    uint256 public lockedAmount;
}
