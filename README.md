# Novellia SDK

The Novellia SDK exposes language specific service layers for interacting with [Novellia](https://github.com/RektangularStudios/novellia). The service layers are simple wrappers over HTTP networking calls.

Languages to be supported:
- Unity
- TypeScript

More will be added as demand increases. Since the SDK is a simple HTTP wrapper, applications can also opt to make requests directly.

## Who is the Novellia SDK for?

This SDK is for developers who need to interact with the Novellia Platform's features:
- rolling out your own replacement to the Novellia Dashboard
- interacting with the Novellia DAO
  - submitting proposals
  - voting on proposals
- interacting with the Novellia DEX
  - trading NVLA/ADA
  - trading NFTs listed on the Novellia DAO
- easily using Cardano's Hydra features as they become available
  - Rektangular's turn-based strategy game **Occulta Novellia** will use the Novellia SDK with Unity to decentralize gameplay
- storing decentralized data on IPFS or similar technology (without needing to care about how it works)

Our goal is to expose a simple interface that allows developers to take advantage of the blockchain features they require, without taking a walled garden approach.
