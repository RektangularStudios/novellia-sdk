# Novellia SDK

This TypeScript SDK is used by the Novellia Dashboard to integrate with the [Novellia](https://github.com/RektangularStudios/novellia) microservice.

It exposes APIs that you can use to interact with the Novellia platform within your own applications.

Some features will include:
- rolling out your own replacement to the Novellia Dashboard
- interacting with the Novellia DAO
  - submitting proposals
  - voting on proposals
- interacting with the Novellia DEX
  - trading NVLA/ADA
  - trading NFTs listed on the Novellia DAO
- easily using Cardano's Hydra features as they become available
  - Rektangular's turn-based strategy game Occulta Novellia will use the Novellia SDK with Unity to decentralize gameplay
  - storing decentralized data on IPFS or similar technology (without needing to care about how it works)

Our goal is to expose a simple interface that allows developers to take advantage of the blockchain features they require, without taking a walled garden approach.

## Usage

Import the Novellia service from the SDK, initialize an instance with a backend URL. That's it, proceed to call the service layer.

```
import { NovelliaService, GetProductsRequest } from "novellia-sdk";

const novelliaService = new NovelliaService({
  basePath: "http://localhost:3555",
});
novelliaService.products({}).then(resp => {
  console.log(resp);
}).catch(e => {
  console.log(e);
});
```
