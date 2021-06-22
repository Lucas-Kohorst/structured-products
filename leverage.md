## Goal 

Build in leverage to core Ribbon vaults using Opyn [Gamma Protocol](https://github.com/Lucas-Kohorst/structured-products.git) and [partially collateralized options](https://medium.com/opyn/partially-collateralized-options-now-in-defi-b9d223eb3f4d). 

## Resources
- Main code difference is changing the vault type wheen opening a vault. The new type is `1` which you have to encode see [here](https://github.com/opynfinance/GammaProtocol/blob/master/contracts/libs/Actions.sol#L172)
- Javascript example with [naked margin call](https://github.com/opynfinance/GammaProtocol/blob/master/test/unit-tests/controllerNakedMargin.test.ts#L213) 
- [Calculate](https://github.com/opynfinance/GammaProtocol/blob/master/contracts/core/MarginCalculator.sol#L350) margin needed to mint 1 otoken

## Needs 
- Think about how liquidations within the partially collateralized options will be handled 

```
- Save 10% in vault to cover margin 
- Allow another ribbon vault to cover 
- Use a form of keepers
```
