/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type PaymentProcessingDataStruct = {
  amount: BigNumberish;
  currency: string;
  recipient: string;
  referralFee: BigNumberish;
  serviceId: BigNumberish;
  packages: BigNumberish[];
};

export type PaymentProcessingDataStructOutput = [
  BigNumber,
  string,
  string,
  number,
  BigNumber,
  BigNumber[]
] & {
  amount: BigNumber;
  currency: string;
  recipient: string;
  referralFee: number;
  serviceId: BigNumber;
  packages: BigNumber[];
};

export interface ServiceCollectModuleInterface extends utils.Interface {
  functions: {
    "HUB()": FunctionFragment;
    "MODULE_GLOBALS()": FunctionFragment;
    "emergencyReleaseDisputedFunds(uint256,uint256,address,uint8)": FunctionFragment;
    "getPaymentProcessingData(uint256,uint256)": FunctionFragment;
    "initializePublicationCollectModule(uint256,uint256,bytes)": FunctionFragment;
    "processCollect(uint256,address,uint256,uint256,bytes)": FunctionFragment;
    "releaseCollectedFunds(uint256,uint256,uint8)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "HUB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MODULE_GLOBALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyReleaseDisputedFunds",
    values: [BigNumberish, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPaymentProcessingData",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializePublicationCollectModule",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "processCollect",
    values: [BigNumberish, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseCollectedFunds",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "HUB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MODULE_GLOBALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyReleaseDisputedFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPaymentProcessingData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializePublicationCollectModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processCollect",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseCollectedFunds",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ServiceCollectModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ServiceCollectModuleInterface;

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
    HUB(overrides?: CallOverrides): Promise<[string]>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<[string]>;

    emergencyReleaseDisputedFunds(
      profileId: BigNumberish,
      pubId: BigNumberish,
      recipient: string,
      package: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPaymentProcessingData(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[PaymentProcessingDataStructOutput]>;

    initializePublicationCollectModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    processCollect(
      referrerProfileId: BigNumberish,
      collector: string,
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    releaseCollectedFunds(
      profileId: BigNumberish,
      pubId: BigNumberish,
      package: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  HUB(overrides?: CallOverrides): Promise<string>;

  MODULE_GLOBALS(overrides?: CallOverrides): Promise<string>;

  emergencyReleaseDisputedFunds(
    profileId: BigNumberish,
    pubId: BigNumberish,
    recipient: string,
    package: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPaymentProcessingData(
    profileId: BigNumberish,
    pubId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<PaymentProcessingDataStructOutput>;

  initializePublicationCollectModule(
    profileId: BigNumberish,
    pubId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  processCollect(
    referrerProfileId: BigNumberish,
    collector: string,
    profileId: BigNumberish,
    pubId: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releaseCollectedFunds(
    profileId: BigNumberish,
    pubId: BigNumberish,
    package: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    HUB(overrides?: CallOverrides): Promise<string>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<string>;

    emergencyReleaseDisputedFunds(
      profileId: BigNumberish,
      pubId: BigNumberish,
      recipient: string,
      package: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getPaymentProcessingData(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PaymentProcessingDataStructOutput>;

    initializePublicationCollectModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    processCollect(
      referrerProfileId: BigNumberish,
      collector: string,
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    releaseCollectedFunds(
      profileId: BigNumberish,
      pubId: BigNumberish,
      package: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    HUB(overrides?: CallOverrides): Promise<BigNumber>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyReleaseDisputedFunds(
      profileId: BigNumberish,
      pubId: BigNumberish,
      recipient: string,
      package: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPaymentProcessingData(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializePublicationCollectModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    processCollect(
      referrerProfileId: BigNumberish,
      collector: string,
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releaseCollectedFunds(
      profileId: BigNumberish,
      pubId: BigNumberish,
      package: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    HUB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MODULE_GLOBALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyReleaseDisputedFunds(
      profileId: BigNumberish,
      pubId: BigNumberish,
      recipient: string,
      package: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPaymentProcessingData(
      profileId: BigNumberish,
      pubId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializePublicationCollectModule(
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    processCollect(
      referrerProfileId: BigNumberish,
      collector: string,
      profileId: BigNumberish,
      pubId: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releaseCollectedFunds(
      profileId: BigNumberish,
      pubId: BigNumberish,
      package: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
