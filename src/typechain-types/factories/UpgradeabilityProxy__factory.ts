/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpgradeabilityProxy,
  UpgradeabilityProxyInterface,
} from "../UpgradeabilityProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516103d73803806103d7833981016040819052610022916101da565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6102a8565b6000805160206103b783398151915214610069576100696102cd565b610072826100ea565b8051156100e3576000826001600160a01b03168260405161009391906102e3565b600060405180830381855af49150503d80600081146100ce576040519150601f19603f3d011682016040523d82523d6000602084013e6100d3565b606091505b50509050806100e157600080fd5b505b50506102ff565b6100fd8161018560201b6100421760201c565b6101735760405162461bcd60e51b815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e747261637420616464726573730000000000606482015260840160405180910390fd5b6000805160206103b783398151915255565b6001600160a01b03163b151590565b634e487b7160e01b600052604160045260246000fd5b60005b838110156101c55781810151838201526020016101ad565b838111156101d4576000848401525b50505050565b600080604083850312156101ed57600080fd5b82516001600160a01b038116811461020457600080fd5b60208401519092506001600160401b038082111561022157600080fd5b818501915085601f83011261023557600080fd5b81518181111561024757610247610194565b604051601f8201601f19908116603f0116810190838211818310171561026f5761026f610194565b8160405282815288602084870101111561028857600080fd5b6102998360208301602088016101aa565b80955050505050509250929050565b6000828210156102c857634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b600082516102f58184602087016101aa565b9190910192915050565b60aa8061030d6000396000f3fe608060405236601057600e6013565b005b600e5b6040603c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6051565b565b6001600160a01b03163b151590565b3660008037600080366000845af43d6000803e808015606f573d6000f35b3d6000fdfea2646970667358221220274c17e0d4ea063b889a25f8b80fc87c31654ee10f68b0922e42d9810515508f64736f6c634300080a0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";

type UpgradeabilityProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeabilityProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeabilityProxy__factory extends ContractFactory {
  constructor(...args: UpgradeabilityProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<UpgradeabilityProxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<UpgradeabilityProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  attach(address: string): UpgradeabilityProxy {
    return super.attach(address) as UpgradeabilityProxy;
  }
  connect(signer: Signer): UpgradeabilityProxy__factory {
    return super.connect(signer) as UpgradeabilityProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeabilityProxyInterface {
    return new utils.Interface(_abi) as UpgradeabilityProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeabilityProxy {
    return new Contract(address, _abi, signerOrProvider) as UpgradeabilityProxy;
  }
}
