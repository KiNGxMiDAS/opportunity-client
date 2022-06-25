/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ITokenNameVerifierInterface extends utils.Interface {
  functions: {
    "verifyTokenName(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "verifyTokenName",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyTokenName",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ITokenNameVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITokenNameVerifierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    verifyTokenName(
      name: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  verifyTokenName(name: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    verifyTokenName(name: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verifyTokenName(
      name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyTokenName(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
