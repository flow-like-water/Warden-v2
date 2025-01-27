/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WardenLens, WardenLensInterface } from "../WardenLens";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_votingEscrow",
        type: "address",
      },
      {
        internalType: "address",
        name: "_delegationBoost",
        type: "address",
      },
      {
        internalType: "address",
        name: "_warden",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MAX_PCT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_UINT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WEEK",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delegationBoost",
    outputs: [
      {
        internalType: "contract IBoostV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPrices",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "highest",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lowest",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "median",
            type: "uint256",
          },
        ],
        internalType: "struct WardenLens.Prices",
        name: "prices",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserClaimableBoosts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingEscrow",
    outputs: [
      {
        internalType: "contract IVotingEscrow",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "warden",
    outputs: [
      {
        internalType: "contract Warden",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161095438038061095483398101604081905261002f9161008d565b600080546001600160a01b039485166001600160a01b0319918216179091556001805493851693821693909317909255600280549190931691161790556100d0565b80516001600160a01b038116811461008857600080fd5b919050565b6000806000606084860312156100a257600080fd5b6100ab84610071565b92506100b960208501610071565b91506100c760408501610071565b90509250925092565b610875806100df6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063b380019711610066578063b380019714610118578063b5bf1a3914610121578063bd9a548b14610134578063e5b5019a1461015e578063f4359ce51461016757600080fd5b80634f2bfe5b146100985780639d8e2177146100c8578063a5e2e138146100e5578063abd5396c14610105575b600080fd5b6000546100ab906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100d7670de0b6b3a764000081565b6040519081526020016100bf565b6100f86100f33660046104de565b610171565b6040516100bf9190610502565b6001546100ab906001600160a01b031681565b6100d761271081565b6002546100ab906001600160a01b031681565b61013c610335565b60408051825181526020808401519082015291810151908201526060016100bf565b6100d760001981565b6100d762093a8081565b6002546040516360e4e58560e01b81526001600160a01b0383811660048301526060926000929116906360e4e58590602401600060405180830381865afa1580156101c0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526101e8919081019061058d565b805190915060008167ffffffffffffffff81111561020857610208610546565b604051908082528060200260200182016040528015610231578160200160208202803683370190505b5090506000805b8381101561032a5760025485516000916001600160a01b031690635aaac1079088908590811061026a5761026a610633565b60200260200101516040518263ffffffff1660e01b815260040161029091815260200190565b60c060405180830381865afa1580156102ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d1919061066e565b90508060a00151610321578582815181106102ee576102ee610633565b602002602001015184848151811061030857610308610633565b60209081029190910101528261031d81610720565b9350505b50600101610238565b509095945050505050565b61035960405180606001604052806000815260200160008152602001600081525090565b60025460408051635304badb60e11b815290516000926001600160a01b03169163a60975b69160048083019260209291908290030181865afa1580156103a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c7919061073b565b90506000600182116103d857505090565b600019602084015260015b828110156104a4576002546040516322bc934560e11b8152600481018390526000916001600160a01b031690634579268a9060240160c060405180830381865afa158015610435573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610459919061077e565b50505050915050808361046c91906107ee565b855190935081111561047c578085525b84602001518110801561048e57508015155b1561049b57602085018190525b506001016103e3565b506104b0600183610806565b6104ba908261081d565b60408401525090919050565b6001600160a01b03811681146104db57600080fd5b50565b6000602082840312156104f057600080fd5b81356104fb816104c6565b9392505050565b6020808252825182820181905260009190848201906040850190845b8181101561053a5783518352928401929184019160010161051e565b50909695505050505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561058557610585610546565b604052919050565b600060208083850312156105a057600080fd5b825167ffffffffffffffff808211156105b857600080fd5b818501915085601f8301126105cc57600080fd5b8151818111156105de576105de610546565b8060051b91506105ef84830161055c565b818152918301840191848101908884111561060957600080fd5b938501935b838510156106275784518252938501939085019061060e565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b80516fffffffffffffffffffffffffffffffff8116811461066957600080fd5b919050565b600060c0828403121561068057600080fd5b60405160c0810181811067ffffffffffffffff821117156106a3576106a3610546565b806040525082518152602083015160208201526106c260408401610649565b60408201526106d360608401610649565b606082015260808301516106e6816104c6565b608082015260a083015180151581146106fe57600080fd5b60a08201529392505050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156107345761073461070a565b5060010190565b60006020828403121561074d57600080fd5b5051919050565b805167ffffffffffffffff8116811461066957600080fd5b805161ffff8116811461066957600080fd5b60008060008060008060c0878903121561079757600080fd5b86516107a2816104c6565b602088015190965094506107b860408801610754565b93506107c660608801610754565b92506107d46080880161076c565b91506107e260a0880161076c565b90509295509295509295565b600082198211156108015761080161070a565b500190565b6000828210156108185761081861070a565b500390565b60008261083a57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212207ef57a7c72c7b9cc00fcc4b732e4d46e2d59663584b9384669724992f133a8f064736f6c634300080a0033";

type WardenLensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WardenLensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WardenLens__factory extends ContractFactory {
  constructor(...args: WardenLensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _votingEscrow: PromiseOrValue<string>,
    _delegationBoost: PromiseOrValue<string>,
    _warden: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WardenLens> {
    return super.deploy(
      _votingEscrow,
      _delegationBoost,
      _warden,
      overrides || {}
    ) as Promise<WardenLens>;
  }
  override getDeployTransaction(
    _votingEscrow: PromiseOrValue<string>,
    _delegationBoost: PromiseOrValue<string>,
    _warden: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _votingEscrow,
      _delegationBoost,
      _warden,
      overrides || {}
    );
  }
  override attach(address: string): WardenLens {
    return super.attach(address) as WardenLens;
  }
  override connect(signer: Signer): WardenLens__factory {
    return super.connect(signer) as WardenLens__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WardenLensInterface {
    return new utils.Interface(_abi) as WardenLensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WardenLens {
    return new Contract(address, _abi, signerOrProvider) as WardenLens;
  }
}
