/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IBoostV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBoostV2__factory>;
    getContractFactory(
      name: "IVotingEscrow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotingEscrow__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "BoostV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BoostV2__factory>;
    getContractFactory(
      name: "Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Errors__factory>;
    getContractFactory(
      name: "Owner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Owner__factory>;
    getContractFactory(
      name: "Warden",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Warden__factory>;
    getContractFactory(
      name: "WardenLens",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WardenLens__factory>;
    getContractFactory(
      name: "WardenMultiBuy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WardenMultiBuy__factory>;
    getContractFactory(
      name: "WardenPledge",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WardenPledge__factory>;

    getContractAt(
      name: "IBoostV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBoostV2>;
    getContractAt(
      name: "IVotingEscrow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotingEscrow>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "BoostV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BoostV2>;
    getContractAt(
      name: "Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Errors>;
    getContractAt(
      name: "Owner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Owner>;
    getContractAt(
      name: "Warden",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Warden>;
    getContractAt(
      name: "WardenLens",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WardenLens>;
    getContractAt(
      name: "WardenMultiBuy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WardenMultiBuy>;
    getContractAt(
      name: "WardenPledge",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WardenPledge>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
