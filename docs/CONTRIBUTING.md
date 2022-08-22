# Contributing to Map3

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Map3 and its packages, which are hosted in the [Map3 Organization](https://github.com/map3xyz) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Relevant Links

[Code of Conduct](#code-of-conduct)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Project Overview](#project-overview)
  * [Map3 Packages](#map3-packages)
  * [Assets Repo Structure](#assets-repo-structure)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Adding Assets](#adding-assets)
  * [Adding Networks](#adding-networks)
  * [Pull Requests](#pull-requests)

## Code of Conduct
This project and everyone participating in it is governed by the [Map3 Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## What should I know before I get started?

### Project Overview

### Map3 Packages

### Assets Repo Structure
The main assets repository hosts the metadata for the main crypto networks. It also contains useful schema files and aggreagation files (TSV, Sqlite) for easy data reading. Tokenlists can be attached to each network's `assets` folder via a gitmodule. This enables Map3 to scale support to many assets and networks. 

You can read more about the repository structure on the [STRUCTURE.md file](https://github.com/map3xyz/assets/blob/master/docs/CODE_OF_CONDUCT.md). 

## How Can I Contribute
Our goal is to make the Map3 open source packages community-owned. Anyone, anywhere should be able to add an asset. As long as it passes our CI integrity checks the PR should be mergeable. In the short term, Map3 maintainers will manually approve PRs while we improve our CI checks.

### Reporting Bugs and Data Issues
If you find a bug in our packages, please report them by creating an issue on the relevant repository. 

If you find a data issue, the simplest thing to do is to fix it via a pull request. 

### Suggesting Enhancements
Do you have ideas on how to improve Map3 and its packages? Please create an issue with the label 'enhancement' detailing your idea!

### Adding Assets
Assets can be added on the relevant network tokenlist repository. 

You must ensure that the asset:
[ ] Does not already exist in the repository (be mindful of address casing/checksums!)
[ ] Exists on the crypto network that you are adding it for
[ ] The `info.json` file is appropriately structured
[ ] The logos are added alongside the info file in the `logo.png` and/or `logo.svg` as appropriate.

### Adding Networks
At this time, only the active contributors of Map3 can add networks. 

If you would like for us to add a network, please create an issue with the following information: 

[ ] Network Name, Symbol and proposed Network Code
[ ] The network main website with more information
[ ] `info.json` file with it's preliminary information
[ ] The logo files (`logo.png` and/or `logo.svg`) as appropriate.
[ ] An indication of whether this network supports Fungible Assets and Non Fungible ones
[ ] A list of the testnets of this network.

We will get back to you promptly! 

### Pull Requests
The pull request process has several goals:

- Ensure that the metadata indexed contains accurate information
- Ensure that Map3 covers the main crypto networks and its testnets
- Add continued support for assets that our users demand

After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.