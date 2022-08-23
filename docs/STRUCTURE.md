## Structure
This document Details the repository's file structure

### Networks
See `/networks` directory for a list of networks. 

```markdown
## Base Directory for network list
networks/{network-code}

## Basic info on a network or token, mandatory
networks/{network-code}/info.json
networks/{network-code}/maps.json
networks/{network-code}/logo.svg
networks/{network-code}/logo.png
```

### Assets
Networks with assets See `/networks/ethereum` and `networks/polygon`. Note their `assets` folders.

### Testnets
Networks with testnets: see `networks/bitcoin`. Note the `testnets` folder. 

### Maps
Maps group assets across networks. These are represented in the `maps.json` optionally present in the directory of an asset. 

Maps: note that `/networks/polygon/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/maps.json` claims that USDC on this network is equal to `/networks/ethereum/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/info.json` . 

You can see that this type of map is of type `direct_issuance` and it references the address of USDC on Ethereum via the `toAsset` field.

### Data Validation
All of our files will contain acconmpanying json schema files that enable anyone to verify if an instance is compliant with the schema. We will also enforce a number of rules on every merge. We have created the [assets-helper](https://github.com/map3xyz/assets-helper) library to facilitate this. It will be run as a github workflow, preventing pull requests that don't pass validation from being merged. 

## Submodules 

Github has a limit of 20gb on repositories. Hence, if we are looking to add millions of asset<>networks, at an average size of 8kb per asset (mostly due to rasterised png logo files) we will quickly run out of space. 

To address this we have decided to make each asset tokenlist a separate git module. You can find the added modules on the `.gitmodules` file. 

We will try to limit each repository to 80% of the Github soft space limit. We will scale by adding more repositories if needed. 

```markdown
## Tokenlists and submodules 
networks/{network_name_hyphencase}**/**assets/**ethereum-tokenlist # separate repo i.e. map3/ethereum-tokenlist**

**Testnets**

## Testnets (one network can have many testnets)
networks/{network-code}/testnets/
networks/{network-code}/testnets/{testnet-network-code}
networks/{network-code}/testnets/{testnet-network-code}/info.json
[optional] networks/{network-code}/testnets/{testnet-network-code}/logo.svg
[optional] networks/{network-code}/testnets/{testnet-network-code}/logo.png

## Testnet tokenlists
networks/{network-code}**/**testnets/{testnet-network-code}**/**assets/**polygon-mumbai-tokenlist # separate repo i.e. map3/polygon-mumbai-tokenlist**
```

### Further Scaling
We can add multiple git modules for a single network. The assets-helper validation code will have to be eventually updated to support it. 

```markdown
**# separate repo i.e. map3/ethereum-tokenlist**
networks/{network_name_hyphencase}**/**assets/**ethereum-tokenlist 

# separate repo i.e. map3/ethereum-tokenlist-ext1**
networks/{network_name_hyphencase}**/**assets/**ethereum-tokenlist-ext1 

# separate repo i.e. map3/ethereum-tokenlist-ext2**
networks/{network_name_hyphencase}**/**assets/**ethereum-tokenlist-ext2**
```

## Assets TSV
The Assets TSV keeps a record of all the unique assets across networks. It utilises the maps.json declaration to group assets in a single Tab Separated Values file.

## Sqlite Store

We aggregate all of the main assets and networks data into a sqlite file. You can download the latest one from our releases page. 

https://github.com/map3xyz/assets/releases