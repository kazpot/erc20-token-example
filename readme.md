# ERC20 example

ERC20 example that can be deployed to testnet with truffle

## Requirement

node version = v12.22.8

## Installation

1. Install

```
$ npm install -g yarn
```

2. Create .env file

```
ALCHEMY_API_KEY={alchemy api key}
WALLET_KEY={wallet mnemonic words}
```

3. Compile smart contracts

```
$ yarn build
```

4. Deploy to rinkeby testnet

```
$ yarn deploy:rinkeby
```
