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

export type MarketDetailsStruct = {
  exists: boolean;
  id: BigNumberish;
  name: string;
  nameVerifier: string;
  numTokens: BigNumberish;
  baseCost: BigNumberish;
  priceRise: BigNumberish;
  hatchTokens: BigNumberish;
  tradingFeeRate: BigNumberish;
  platformFeeRate: BigNumberish;
  allInterestToPlatform: boolean;
};

export type MarketDetailsStructOutput = [
  boolean,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  boolean
] & {
  exists: boolean;
  id: BigNumber;
  name: string;
  nameVerifier: string;
  numTokens: BigNumber;
  baseCost: BigNumber;
  priceRise: BigNumber;
  hatchTokens: BigNumber;
  tradingFeeRate: BigNumber;
  platformFeeRate: BigNumber;
  allInterestToPlatform: boolean;
};

export type IDPairStruct = {
  exists: boolean;
  marketID: BigNumberish;
  tokenID: BigNumberish;
};

export type IDPairStructOutput = [boolean, BigNumber, BigNumber] & {
  exists: boolean;
  marketID: BigNumber;
  tokenID: BigNumber;
};

export type TokenInfoStruct = {
  exists: boolean;
  id: BigNumberish;
  name: string;
  serviceToken: string;
};

export type TokenInfoStructOutput = [boolean, BigNumber, string, string] & {
  exists: boolean;
  id: BigNumber;
  name: string;
  serviceToken: string;
};

export interface ITokenFactoryInterface extends utils.Interface {
  functions: {
    "addMarket(string,uint256,uint256,uint256,uint256,uint256,bool)": FunctionFragment;
    "addToken(string,uint256,address)": FunctionFragment;
    "getMarketDetailsByID(uint256)": FunctionFragment;
    "getMarketDetailsByName(string)": FunctionFragment;
    "getMarketDetailsByTokenAddress(address)": FunctionFragment;
    "getMarketIDByName(string)": FunctionFragment;
    "getMarketIDByTokenAddress(address)": FunctionFragment;
    "getNumMarkets()": FunctionFragment;
    "getTokenIDByName(string,uint256)": FunctionFragment;
    "getTokenIDPair(address)": FunctionFragment;
    "getTokenInfo(uint256,uint256)": FunctionFragment;
    "isValidTokenName(string,uint256)": FunctionFragment;
    "setNameVerifier(uint256,address)": FunctionFragment;
    "setPlatformFee(uint256,uint256)": FunctionFragment;
    "setTradingFee(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addMarket",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addToken",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketDetailsByID",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketDetailsByName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketDetailsByTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketIDByName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketIDByTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumMarkets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenIDByName",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenIDPair",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenInfo",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidTokenName",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setNameVerifier",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTradingFee",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addMarket", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMarketDetailsByID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketDetailsByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketDetailsByTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketIDByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketIDByTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumMarkets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenIDByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenIDPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidTokenName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNameVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTradingFee",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ITokenFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITokenFactoryInterface;

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
    addMarket(
      marketName: string,
      baseCost: BigNumberish,
      priceRise: BigNumberish,
      hatchTokens: BigNumberish,
      tradingFeeRate: BigNumberish,
      platformFeeRate: BigNumberish,
      allInterestToPlatform: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addToken(
      tokenName: string,
      marketID: BigNumberish,
      lister: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMarketDetailsByID(
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[MarketDetailsStructOutput]>;

    getMarketDetailsByName(
      marketName: string,
      overrides?: CallOverrides
    ): Promise<[MarketDetailsStructOutput]>;

    getMarketDetailsByTokenAddress(
      serviceToken: string,
      overrides?: CallOverrides
    ): Promise<[MarketDetailsStructOutput]>;

    getMarketIDByName(
      marketName: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getMarketIDByTokenAddress(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNumMarkets(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTokenIDByName(
      tokenName: string,
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenIDPair(
      token: string,
      overrides?: CallOverrides
    ): Promise<[IDPairStructOutput]>;

    getTokenInfo(
      marketID: BigNumberish,
      tokenID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[TokenInfoStructOutput]>;

    isValidTokenName(
      tokenName: string,
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setNameVerifier(
      marketID: BigNumberish,
      nameVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPlatformFee(
      marketID: BigNumberish,
      platformFeeRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTradingFee(
      marketID: BigNumberish,
      tradingFeeRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addMarket(
    marketName: string,
    baseCost: BigNumberish,
    priceRise: BigNumberish,
    hatchTokens: BigNumberish,
    tradingFeeRate: BigNumberish,
    platformFeeRate: BigNumberish,
    allInterestToPlatform: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addToken(
    tokenName: string,
    marketID: BigNumberish,
    lister: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMarketDetailsByID(
    marketID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<MarketDetailsStructOutput>;

  getMarketDetailsByName(
    marketName: string,
    overrides?: CallOverrides
  ): Promise<MarketDetailsStructOutput>;

  getMarketDetailsByTokenAddress(
    serviceToken: string,
    overrides?: CallOverrides
  ): Promise<MarketDetailsStructOutput>;

  getMarketIDByName(
    marketName: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getMarketIDByTokenAddress(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNumMarkets(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenIDByName(
    tokenName: string,
    marketID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenIDPair(
    token: string,
    overrides?: CallOverrides
  ): Promise<IDPairStructOutput>;

  getTokenInfo(
    marketID: BigNumberish,
    tokenID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<TokenInfoStructOutput>;

  isValidTokenName(
    tokenName: string,
    marketID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setNameVerifier(
    marketID: BigNumberish,
    nameVerifier: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPlatformFee(
    marketID: BigNumberish,
    platformFeeRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTradingFee(
    marketID: BigNumberish,
    tradingFeeRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addMarket(
      marketName: string,
      baseCost: BigNumberish,
      priceRise: BigNumberish,
      hatchTokens: BigNumberish,
      tradingFeeRate: BigNumberish,
      platformFeeRate: BigNumberish,
      allInterestToPlatform: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addToken(
      tokenName: string,
      marketID: BigNumberish,
      lister: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketDetailsByID(
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<MarketDetailsStructOutput>;

    getMarketDetailsByName(
      marketName: string,
      overrides?: CallOverrides
    ): Promise<MarketDetailsStructOutput>;

    getMarketDetailsByTokenAddress(
      serviceToken: string,
      overrides?: CallOverrides
    ): Promise<MarketDetailsStructOutput>;

    getMarketIDByName(
      marketName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketIDByTokenAddress(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumMarkets(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenIDByName(
      tokenName: string,
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenIDPair(
      token: string,
      overrides?: CallOverrides
    ): Promise<IDPairStructOutput>;

    getTokenInfo(
      marketID: BigNumberish,
      tokenID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<TokenInfoStructOutput>;

    isValidTokenName(
      tokenName: string,
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setNameVerifier(
      marketID: BigNumberish,
      nameVerifier: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPlatformFee(
      marketID: BigNumberish,
      platformFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTradingFee(
      marketID: BigNumberish,
      tradingFeeRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addMarket(
      marketName: string,
      baseCost: BigNumberish,
      priceRise: BigNumberish,
      hatchTokens: BigNumberish,
      tradingFeeRate: BigNumberish,
      platformFeeRate: BigNumberish,
      allInterestToPlatform: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addToken(
      tokenName: string,
      marketID: BigNumberish,
      lister: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMarketDetailsByID(
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketDetailsByName(
      marketName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketDetailsByTokenAddress(
      serviceToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketIDByName(
      marketName: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMarketIDByTokenAddress(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumMarkets(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenIDByName(
      tokenName: string,
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenIDPair(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenInfo(
      marketID: BigNumberish,
      tokenID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidTokenName(
      tokenName: string,
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setNameVerifier(
      marketID: BigNumberish,
      nameVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPlatformFee(
      marketID: BigNumberish,
      platformFeeRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTradingFee(
      marketID: BigNumberish,
      tradingFeeRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addMarket(
      marketName: string,
      baseCost: BigNumberish,
      priceRise: BigNumberish,
      hatchTokens: BigNumberish,
      tradingFeeRate: BigNumberish,
      platformFeeRate: BigNumberish,
      allInterestToPlatform: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addToken(
      tokenName: string,
      marketID: BigNumberish,
      lister: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMarketDetailsByID(
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarketDetailsByName(
      marketName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarketDetailsByTokenAddress(
      serviceToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarketIDByName(
      marketName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMarketIDByTokenAddress(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenIDByName(
      tokenName: string,
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenIDPair(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenInfo(
      marketID: BigNumberish,
      tokenID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidTokenName(
      tokenName: string,
      marketID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setNameVerifier(
      marketID: BigNumberish,
      nameVerifier: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPlatformFee(
      marketID: BigNumberish,
      platformFeeRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTradingFee(
      marketID: BigNumberish,
      tradingFeeRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
