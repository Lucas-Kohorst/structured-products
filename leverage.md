## Goal 

Build in leverage to core Ribbon vaults using Opyn [Gamma Protocol](https://github.com/Lucas-Kohorst/structured-products.git) and [partially collateralized options](https://medium.com/opyn/partially-collateralized-options-now-in-defi-b9d223eb3f4d). 

## Resources
- Main code difference is changing the vault type when opening a vault. The new type is `1` which you have to encode see [here](https://github.com/opynfinance/GammaProtocol/blob/master/contracts/libs/Actions.sol#L172)
- Javascript example with [naked margin call]( ) 
- [Calculate](https://github.com/opynfinance/GammaProtocol/blob/master/contracts/core/MarginCalculator.sol#L350) margin needed to mint 1 otoken

## Needs 
- Think about how liquidations within the partially collateralized options will be handled 

```
- Save 10% in vault to cover margin 
- Allow another ribbon vault to cover 
- Use a form of keepers
```

## Steps 
- Deploy Gamma Protocol with partial collateralization 
- Replace Gamma Protocol `const` addresses
- Change vault id in mint
- Handle leverage
- Update margin calculators

## Development 
1. Run ethereum node
```
version: '3'

services:
  hardhat:
    image: benjaminlu/hardhat-mainnet-sandbox:1.0.0
    container_name: hardhat
    hostname: hardhat
    environment:
      PROVIDER_URL: <infura-url-for-forking-mainnet>
    ports:
      - 8545:8545
```

```docker-compose up -d```

2. Deploy Gamma Protocol 
```
git clone https://github.com/opynfinance/GammaProtocol.git
cd GammaProtocol
npm i 
npm run deploy:development
```

3. Deploy Ribbon
```
git clone https://github.com/Lucas-Kohorst/structured-products.git
cd structured-products 
yarn
npx truffle migrate --network localhost
```
