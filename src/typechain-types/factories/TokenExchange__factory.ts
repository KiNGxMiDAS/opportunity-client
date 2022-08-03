/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenExchange, TokenExchangeInterface } from "../TokenExchange";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "marketID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "serviceToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dai",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "daiInvested",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tradingFeeInvested",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "platformFeeInvested",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
    ],
    name: "InvestedState",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "marketID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NewPlatformOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "serviceToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NewTokenOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "marketID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "daiRedeemed",
        type: "uint256",
      },
    ],
    name: "PlatformFeeRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "marketID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "investmentToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "daiRedeemed",
        type: "uint256",
      },
    ],
    name: "PlatformInterestRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "serviceToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "investmentToken",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "daiRedeemed",
        type: "uint256",
      },
    ],
    name: "TokenInterestRedeemed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "daiRedeemed",
        type: "uint256",
      },
    ],
    name: "TradingFeeRedeemed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fallbackAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getCostForBuyingTokens",
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
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "contract ITokenNameVerifier",
            name: "nameVerifier",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "numTokens",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceRise",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hatchTokens",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFeeRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "platformFeeRate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "allInterestToPlatform",
            type: "bool",
          },
        ],
        internalType: "struct MarketDetails",
        name: "marketDetails",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "feesDisabled",
        type: "bool",
      },
    ],
    name: "getCostsForBuyingTokens",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "total",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "raw",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "platformFee",
            type: "uint256",
          },
        ],
        internalType: "struct CostAndPriceAmounts",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getInterestPayable",
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
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "marketID",
        type: "uint256",
      },
    ],
    name: "getPlatformFeePayable",
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
    inputs: [
      {
        internalType: "uint256",
        name: "marketID",
        type: "uint256",
      },
    ],
    name: "getPlatformInterestPayable",
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
    inputs: [
      {
        internalType: "address",
        name: "serviceToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getPriceForSellingTokens",
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
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "contract ITokenNameVerifier",
            name: "nameVerifier",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "numTokens",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "baseCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceRise",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hatchTokens",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFeeRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "platformFeeRate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "allInterestToPlatform",
            type: "bool",
          },
        ],
        internalType: "struct MarketDetails",
        name: "marketDetails",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "feesDisabled",
        type: "bool",
      },
    ],
    name: "getPricesForSellingTokens",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "total",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "raw",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradingFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "platformFee",
            type: "uint256",
          },
        ],
        internalType: "struct CostAndPriceAmounts",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getTradingFeePayable",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "authorizer",
        type: "address",
      },
      {
        internalType: "address",
        name: "tradingFeeRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "interestManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "dai",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceToken",
        type: "address",
      },
    ],
    name: "isTokenFeeDisabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "sellTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "authorizer",
        type: "address",
      },
    ],
    name: "setAuthorizer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "marketID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "setPlatformOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
    ],
    name: "setTokenFactoryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "set",
        type: "bool",
      },
    ],
    name: "setTokenFeeKillswitch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "setTokenOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "marketID",
        type: "uint256",
      },
    ],
    name: "withdrawPlatformFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "marketID",
        type: "uint256",
      },
    ],
    name: "withdrawPlatformInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawTokenInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawTradingFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612a97806100206000396000f3fe608060405234801561001057600080fd5b506004361061014c5760003560e01c806357b0a6bf116100c3578063aa556e0b1161007c578063aa556e0b1461031d578063b905e9ce14610330578063bec3c80914610343578063cc09125f14610356578063cd025b7614610369578063dde7c1901461037c57600080fd5b806357b0a6bf1461029057806368b5e647146102a3578063818b9756146102b6578063893d20e8146102be5780639b44e71c146102d95780639e097695146102e157600080fd5b8063246000771161011557806324600077146101c557806327867405146101d85780632bd348731461021157806342de842b14610257578063488c0b8b1461026a578063577aca591461027d57600080fd5b80628db88014610151578063058a628f1461017757806313af40351461018c5780631459457a1461019f5780631debf325146101b2575b600080fd5b61016461015f366004612316565b61038f565b6040519081526020015b60405180910390f35b61018a610185366004612344565b610417565b005b61018a61019a366004612344565b610485565b61018a6101ad366004612361565b610491565b61018a6101c0366004612316565b61060a565b61018a6101d33660046123d2565b61073e565b61018a6101e6366004612420565b6001600160a01b03919091166000908152603f60205260409020805460ff1916911515919091179055565b61022461021f366004612548565b61084b565b60405161016e91908151815260208083015190820152604080830151908201526060918201519181019190915260800190565b61016461026536600461265e565b610923565b61018a610278366004612344565b610aa1565b61016461028b366004612344565b610b94565b61022461029e366004612548565b610c2a565b6101646102b136600461265e565b610cd1565b610164610ddb565b6033546040516001600160a01b03909116815260200161016e565b61018a610e52565b61030d6102ef366004612344565b6001600160a01b03166000908152603f602052604090205460ff1690565b604051901515815260200161016e565b61018a61032b36600461268a565b610f85565b61016461033e366004612316565b6115da565b61018a610351366004612344565b611625565b61018a6103643660046126d4565b61165d565b61018a61037736600461271c565b611d97565b61018a61038a366004612316565b611eac565b603d54600082815260386020526040808220549051630d84d5e960e41b815291926001600160a01b03169163d84d5e90916103d09160040190815260200190565b602060405180830381865afa1580156103ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610411919061274a565b92915050565b6001600160a01b0381166104635760405162461bcd60e51b815260206004820152600e60248201526d696e76616c69642d706172616d7360901b60448201526064015b60405180910390fd5b603480546001600160a01b0319166001600160a01b0392909216919091179055565b61048e81611fbb565b50565b600054610100900460ff16806104a65750303b155b806104b4575060005460ff16155b6104f65760405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e4b5a5b9a5d1a585b1a5e9959606a1b604482015260640161045a565b600054610100900460ff16158015610518576000805461ffff19166101011790555b6001600160a01b0385161580159061053857506001600160a01b03841615155b801561054c57506001600160a01b03831615155b801561056057506001600160a01b03821615155b61059d5760405162461bcd60e51b815260206004820152600e60248201526d696e76616c69642d706172616d7360901b604482015260640161045a565b6105a686611fbb565b603480546001600160a01b038088166001600160a01b03199283161790925560368054878416908316179055603d8054868416908316179055603e8054928516929091169190911790558015610602576000805461ff00191690555b505050505050565b60008181526037602052604090205433906001600160a01b031681146106425760405162461bcd60e51b815260040161045a90612763565b600061064d836115da565b90508061065957505050565b60008381526039602052604090819020603d5491516301e9a69560e41b81526001600160a01b0385811660048301526024820185905291926106ef921690631e9a6950906044015b6020604051808303816000875af11580156106c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e4919061274a565b600183015490612057565b6001820181905560408051868152602081019290925281018390527f19a8ba44cbfda67a61d2286f5c8bc2c42516eb9221f9c9a693e739edbd1bf9fc906060015b60405180910390a150505050565b60008281526037602052604090205433906001600160a01b03168015801561078a57506033546001600160a01b038381169116148061078a57506034546001600160a01b038381169116145b806107d057506001600160a01b038116158015906107d057506033546001600160a01b03838116911614806107d05750806001600160a01b0316826001600160a01b0316145b6107ec5760405162461bcd60e51b815260040161045a90612763565b60008481526037602090815260409182902080546001600160a01b0319166001600160a01b0387169081179091558251878152918201527f356ac6de4d9f4ba4f19336b6cf56b36d529cad71cff42c5307f4ac3e103ab65b9101610730565b6108766040518060800160405280600081526020016000815260200160008152602001600081525090565b60006108918660a001518760c001518860e001518888612063565b9050600080846108e2576108bf6127106108b98a61010001518661219290919063ffffffff16565b9061219e565b91506108df6127106108b98a61012001518661219290919063ffffffff16565b90505b60006108f8826108f28686612057565b90612057565b6040805160808101825291825260208201959095529384019290925260608301525095945050505050565b603c54604051637457ddd960e11b81526001600160a01b038481166004830152600092839291169063e8afbbb290602401602060405180830381865afa158015610971573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610995919061274a565b603c5460405163c7d5fe5560e01b8152600481018390529192506000916001600160a01b039091169063c7d5fe5590602401600060405180830381865afa1580156109e4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a0c919081019061281e565b9050610a9781866001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a74919061274a565b6001600160a01b0388166000908152603f6020526040902054879060ff16610c2a565b5195945050505050565b6001600160a01b038181166000908152603a6020526040902054163314610ada5760405162461bcd60e51b815260040161045a90612763565b6000610ae582610b94565b905080610af0575050565b6001600160a01b038281166000908152603b602052604090819020603d5491516301e9a69560e41b8152336004820152602481018590529092610b3d921690631e9a6950906044016106a1565b60018201819055604080516001600160a01b0386168152602081019290925281018390527f5ea060b9a609975e812aef51e1c2e42c12f896148d30e17d940286e5297c845c906060015b60405180910390a1505050565b6001600160a01b038181166000908152603b60205260408082208054603d5460018301549351630d84d5e960e41b8152600481019490945293949193610c23939192169063d84d5e90906024015b602060405180830381865afa158015610bff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f2919061274a565b9392505050565b610c556040518060800160405280600081526020016000815260200160008152602001600081525090565b6000610c708660a001518760c001518860e0015188886121aa565b905060008084610cbb57610c986127106108b98a61010001518661219290919063ffffffff16565b9150610cb86127106108b98a61012001518661219290919063ffffffff16565b90505b60006108f882610ccb868661225f565b9061225f565b603c546040516341f2c9d960e11b81526001600160a01b03848116600483015260009283929116906383e593b290602401600060405180830381865afa158015610d1f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d47919081019061281e565b9050610dd281856001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610daf919061274a565b6001600160a01b0387166000908152603f6020526040902054869060ff1661084b565b51949350505050565b603d54603554604051630d84d5e960e41b815260048101919091526000916001600160a01b03169063d84d5e9090602401602060405180830381865afa158015610e29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4d919061274a565b905090565b60355480610e5d5750565b60006035819055603d54604051630d84d5e960e41b8152600481018490526001600160a01b039091169063d84d5e9090602401602060405180830381865afa158015610ead573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed1919061274a565b603d546036546040516301e9a69560e41b81526001600160a01b039182166004820152602481018490529293501690631e9a6950906044016020604051808303816000875af1158015610f28573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4c919061274a565b506040518181527f6050011a2a4b1d11e80a730cfe9952a593658cda72506aeceecaa02f1dc01c82906020015b60405180910390a15050565b603c54604051637457ddd960e11b81526001600160a01b038681166004830152600092169063e8afbbb290602401602060405180830381865afa158015610fd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff4919061274a565b603c5460405163c7d5fe5560e01b8152600481018390529192506000916001600160a01b039091169063c7d5fe5590602401600060405180830381865afa158015611043573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261106b919081019061281e565b80519091506110ae5760405162461bcd60e51b815260206004820152600f60248201526e1d1bdad95b8b5b9bdd0b595e1a5cdd608a1b604482015260640161045a565b600061113982886001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611116919061274a565b6001600160a01b038a166000908152603f6020526040902054899060ff1661084b565b905084816000015110156111815760405162461bcd60e51b815260206004820152600f60248201526e62656c6f772d6d696e2d707269636560881b604482015260640161045a565b6040516370a0823160e01b815233600482015286906001600160a01b038916906370a0823190602401602060405180830381865afa1580156111c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111eb919061274a565b101561122f5760405162461bcd60e51b8152602060048201526013602482015272696e73756666696369656e742d746f6b656e7360681b604482015260640161045a565b604051632770a7eb60e21b8152336004820152602481018790526001600160a01b03881690639dc29fac90604401600060405180830381600087803b15801561127757600080fd5b505af115801561128b573d6000803e3d6000fd5b505050506000826101400151156112b0575060008381526039602052604090206112ca565b506001600160a01b0387166000908152603b602052604090205b603d5482516040516301e9a69560e41b8152306004820152602481019190915260009182918291829182916001600160a01b031690631e9a6950906044016020604051808303816000875af1158015611327573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134b919061274a565b603d546040808a01519051636fb1cae760e11b81529293506000926001600160a01b039092169163df6395ce916113889160040190815260200190565b602060405180830381865afa1580156113a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c9919061274a565b603d5460608a0151604051636fb1cae760e11b81529293506000926001600160a01b039092169163df6395ce916114069160040190815260200190565b602060405180830381865afa158015611423573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611447919061274a565b905061146561145a82610ccb868661225f565b60018a015490612057565b6001890181905560355490955061147c908361225f565b603581905560008c81526038602052604090205490975061149d908261225f565b60008c81526038602090815260409091208290558a015189549197506114c39190612057565b93508388600001819055505050507f616abbd513b18b60056744ecd017468fb834453acb83d0d62a0af56625cfb472888d838588888c602001516040516115109796959493929190612910565b60405180910390a1603e54865160405163a9059cbb60e01b81526001600160a01b038c81166004830152602482019290925291169063a9059cbb906044016020604051808303816000875af115801561156d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115919190612949565b6115cc5760405162461bcd60e51b815260206004820152600c60248201526b3230b496ba3930b739b332b960a11b604482015260640161045a565b505050505050505050505050565b6000818152603960205260408082208054603d5460018301549351630d84d5e960e41b815260048101949094529192610c23926001600160a01b03169063d84d5e9090602401610be2565b603c546001600160a01b03161561163b57600080fd5b603c80546001600160a01b0319166001600160a01b0392909216919091179055565b603c54604051637457ddd960e11b81526001600160a01b038781166004830152600092169063e8afbbb290602401602060405180830381865afa1580156116a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116cc919061274a565b603c5460405163c7d5fe5560e01b8152600481018390529192506000916001600160a01b039091169063c7d5fe5590602401600060405180830381865afa15801561171b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611743919081019061281e565b905061177c6040518060400160405280601181526020017002a34329036b0b935b2ba103730b6b29d1607d1b815250826040015161226b565b6117aa60405180604001604052806008815260200167022bc34b9ba399d160c51b81525082600001516122b4565b80516117ea5760405162461bcd60e51b815260206004820152600f60248201526e1d1bdad95b8b5b9bdd0b595e1a5cdd608a1b604482015260640161045a565b6000876001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561182a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061184e919061274a565b6001600160a01b0389166000908152603f602052604081205491925060ff90911690889061187e85858486610c2a565b905087816000015111156118dc5788915061189b85858486610c2a565b905087816000015111156118dc5760405162461bcd60e51b8152602060048201526008602482015267736c69707061676560c01b604482015260640161045a565b8051603e54604051636eb1769f60e11b81523360048201523060248201526001600160a01b039091169063dd62ed3e90604401602060405180830381865afa15801561192c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611950919061274a565b10156119975760405162461bcd60e51b8152602060048201526016602482015275696e73756666696369656e742d616c6c6f77616e636560501b604482015260640161045a565b603e54603d5482516040516323b872dd60e01b81523360048201526001600160a01b03928316602482015260448101919091529116906323b872dd906064016020604051808303816000875af11580156119f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a199190612949565b611a545760405162461bcd60e51b815260206004820152600c60248201526b3230b496ba3930b739b332b960a11b604482015260640161045a565b603d5481516040516255f9e960e71b81526001600160a01b0390921691632afcf48091611a879160040190815260200190565b6020604051808303816000875af1158015611aa6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611aca919061274a565b50600085610140015115611aec57506000868152603960205260409020611b06565b506001600160a01b038b166000908152603b602052604090205b603d546020830151604051636fb1cae760e11b81526004810191909152611b86916001600160a01b03169063df6395ce90602401602060405180830381865afa158015611b57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b7b919061274a565b60018301549061225f565b6001820155603d546040808401519051636fb1cae760e11b8152600092611c13926001600160a01b039091169163df6395ce91611bc99160040190815260200190565b602060405180830381865afa158015611be6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c0a919061274a565b6035549061225f565b6035819055603d546060850151604051636fb1cae760e11b81526004810191909152919250600091611ca8916001600160a01b03169063df6395ce90602401602060405180830381865afa158015611c6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c93919061274a565b60008b8152603860205260409020549061225f565b60008a81526038602090815260409091208290558501518454919250611cce919061225f565b83600001819055507f616abbd513b18b60056744ecd017468fb834453acb83d0d62a0af56625cfb472898f8560000154866001015486868a60000151604051611d1d9796959493929190612910565b60405180910390a16040516340c10f1960e01b81526001600160a01b038b81166004830152602482018790528f16906340c10f1990604401600060405180830381600087803b158015611d6f57600080fd5b505af1158015611d83573d6000803e3d6000fd5b505050505050505050505050505050505050565b6001600160a01b038083166000908152603a602052604090205433911680158015611de657506033546001600160a01b0383811691161480611de657506034546001600160a01b038381169116145b80611e2c57506001600160a01b03811615801590611e2c57506033546001600160a01b0383811691161480611e2c5750806001600160a01b0316826001600160a01b0316145b611e485760405162461bcd60e51b815260040161045a90612763565b6001600160a01b038481166000818152603a602090815260409182902080546001600160a01b031916948816948517905581519283528201929092527fb53b9751a2456db0075c7a08ee95571901cda9fda69420caf07dd9204ab7a8fd9101610730565b60008181526037602052604090205433906001600160a01b03168114611ee45760405162461bcd60e51b815260040161045a90612763565b6000611eef8361038f565b905080611efb57505050565b60008381526038602052604080822091909155603d5490516301e9a69560e41b81526001600160a01b0384811660048301526024820184905290911690631e9a6950906044016020604051808303816000875af1158015611f60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f84919061274a565b5060408051848152602081018390527f5ff437d56ea6ed2663bb2d7ea188751fdf25326d6a6ef227e809fb2034dc2d389101610b87565b6001600160a01b038116611ffd5760405162461bcd60e51b81526020600482015260096024820152683d32b93796b0b2323960b91b604482015260640161045a565b603380546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527f0384899bd253d83b23daa4d29aaa2efe0563d1132b43101e9ad667235aeb951b9101610f79565b6000610c23828461297c565b6000808281866120738784612057565b10156120ee578686116120a057612096670de0b6b3a76400006108b98b88612192565b9350505050612189565b60006120ac868861297c565b6120b6908961297c565b90506120ce670de0b6b3a76400006108b98c84612192565b93506120da8682612057565b92506120e6888861297c565b9150506120fb565b6120f8878761297c565b90505b600061211d612116670de0b6b3a76400006108b98c86612192565b8b9061225f565b9050600061214b612144670de0b6b3a76400006108b961213d8789612057565b8e90612192565b8c9061225f565b9050600061215e60026108b9858561225f565b9050612180612179670de0b6b3a76400006108b98489612192565b879061225f565b96505050505050505b95945050505050565b6000610c238284612993565b6000610c2382846129b2565b60008082818686101561221b5760006121c3878961297c565b90508086116121ed576121e2670de0b6b3a76400006108b98c89612192565b945050505050612189565b612203670de0b6b3a76400006108b98c84612192565b935060009150612213818761297c565b925050612228565b612225878761297c565b90505b6000612243612116670de0b6b3a76400006108b98c86612192565b9050600061214b612144670de0b6b3a76400006108b961213d87895b6000610c2382846129d4565b6122b08282604051602401612281929190612a18565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b1790526122f5565b5050565b6122b082826040516024016122ca929190612a3d565b60408051601f198184030181529190526020810180516001600160e01b031663c3b5563560e01b1790525b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006020828403121561232857600080fd5b5035919050565b6001600160a01b038116811461048e57600080fd5b60006020828403121561235657600080fd5b8135610c238161232f565b600080600080600060a0868803121561237957600080fd5b85356123848161232f565b945060208601356123948161232f565b935060408601356123a48161232f565b925060608601356123b48161232f565b915060808601356123c48161232f565b809150509295509295909350565b600080604083850312156123e557600080fd5b8235915060208301356123f78161232f565b809150509250929050565b801515811461048e57600080fd5b803561241b81612402565b919050565b6000806040838503121561243357600080fd5b823561243e8161232f565b915060208301356123f781612402565b634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff811182821017156124885761248861244e565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156124b7576124b761244e565b604052919050565b600067ffffffffffffffff8211156124d9576124d961244e565b50601f01601f191660200190565b600082601f8301126124f857600080fd5b813561250b612506826124bf565b61248e565b81815284602083860101111561252057600080fd5b816020850160208301376000918101602001919091529392505050565b803561241b8161232f565b6000806000806080858703121561255e57600080fd5b843567ffffffffffffffff8082111561257657600080fd5b90860190610160828903121561258b57600080fd5b612593612464565b61259c83612410565b8152602083013560208201526040830135828111156125ba57600080fd5b6125c68a8286016124e7565b6040830152506125d86060840161253d565b60608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101009150818301358282015261012091508183013582820152610140915061262f828401612410565b82820152809650505050602085013592506040850135915061265360608601612410565b905092959194509250565b6000806040838503121561267157600080fd5b823561267c8161232f565b946020939093013593505050565b600080600080608085870312156126a057600080fd5b84356126ab8161232f565b9350602085013592506040850135915060608501356126c98161232f565b939692955090935050565b600080600080600060a086880312156126ec57600080fd5b85356126f78161232f565b945060208601359350604086013592506060860135915060808601356123c48161232f565b6000806040838503121561272f57600080fd5b823561273a8161232f565b915060208301356123f78161232f565b60006020828403121561275c57600080fd5b5051919050565b6020808252600e908201526d1b9bdd0b585d5d1a1bdc9a5e995960921b604082015260600190565b805161241b81612402565b60005b838110156127b1578181015183820152602001612799565b838111156127c0576000848401525b50505050565b600082601f8301126127d757600080fd5b81516127e5612506826124bf565b8181528460208386010111156127fa57600080fd5b61280b826020830160208701612796565b949350505050565b805161241b8161232f565b60006020828403121561283057600080fd5b815167ffffffffffffffff8082111561284857600080fd5b90830190610160828603121561285d57600080fd5b612865612464565b61286e8361278b565b81526020830151602082015260408301518281111561288c57600080fd5b612898878286016127c6565b6040830152506128aa60608401612813565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101009150818301518282015261012091508183015182820152610140915061290182840161278b565b91810191909152949350505050565b9687526001600160a01b0395909516602087015260408601939093526060850191909152608084015260a083015260c082015260e00190565b60006020828403121561295b57600080fd5b8151610c2381612402565b634e487b7160e01b600052601160045260246000fd5b60008282101561298e5761298e612966565b500390565b60008160001904831182151516156129ad576129ad612966565b500290565b6000826129cf57634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156129e7576129e7612966565b500190565b60008151808452612a04816020860160208601612796565b601f01601f19169290920160200192915050565b604081526000612a2b60408301856129ec565b828103602084015261218981856129ec565b604081526000612a5060408301856129ec565b90508215156020830152939250505056fea264697066735822122022e43fa281a0b7efbd5f3af563c5323a994486d6335b5fc7ae3147556a53cbeb64736f6c634300080a0033";

type TokenExchangeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenExchangeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenExchange__factory extends ContractFactory {
  constructor(...args: TokenExchangeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenExchange> {
    return super.deploy(overrides || {}) as Promise<TokenExchange>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TokenExchange {
    return super.attach(address) as TokenExchange;
  }
  connect(signer: Signer): TokenExchange__factory {
    return super.connect(signer) as TokenExchange__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenExchangeInterface {
    return new utils.Interface(_abi) as TokenExchangeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenExchange {
    return new Contract(address, _abi, signerOrProvider) as TokenExchange;
  }
}