# Map3<>Kleros Assets Registry Prototype
We have put together this prototype of the Map3<>Kleros Assets Registry. We have also shared a proposal link with the Kleros team. For any questions please email amadeo [at] map3.xyz.

## Structure
We put together this document detailing the repository's file structure:

https://gentle-temple-cdf.notion.site/Submodules-to-scale-token-lists-4e8c5b54757446b68e12488f6c4b9486

Note: for simplicity, we have refrained from using submodules in this sample branch. 

## Data Validation
All of our files will contain acconmpanying json schema files that enable anyone to verify if an instance is compliant with the schema. We will also enforce a number of rules on every merge. We have created the [assets-helper](https://github.com/map3xyz/assets-helper) library to facilitate this. It will be run as a github workflow, preventing pull requests that don't pass validation from being merged. 

## Examples
Proposed file structure: 

### Networks
See `/networks` directory for a list of networks. 

### Tokens
Networks with tokens See `/networks/ethereum` and `networks/polygon`. Note their `tokens` folders.

### Testnets
Networks with testnets: see `networks/bitcoin`. Note the `testnets` folder. 

### Maps
Maps: note that `/networks/matic/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/maps.json` claims that USDC on this network is equal to `/networks/ethereum/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/info.json` . You can see that this type of map is of type `direct_issuance` and it references the UUID of USDC on Ethereum via the `to` field.

### Verifications
You can note in the previous map that it has a verification object `/networks/matic/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/maps.json` . 

It follows the 'light curate model'. In the git repo we will only store the IPFS link on chain. 
https://kleros.gitbook.io/docs/developer/light-curate
