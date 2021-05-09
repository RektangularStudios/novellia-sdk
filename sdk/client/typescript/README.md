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

## Publishing to NPM

You'll need Rektangular's credentials for this.

**Make sure to tick the version and adjust the changelog accordingly**

1. `npm install`
2. `npm run prepare`
3. `npm publish`
  - this will prompt for 2-factor authentication

That's it! Now you can install the published version using NPM.

## Regenerating the SDK

There are multiple generated APIs with their own services. You'll need to fix whichever ones you regenerate:
- `novellia`
- `order-fulfillment`

Some minor changes that need to be made after regenerating the SDK:

Import `Configuration` and `ConfigurationParameters` and expose them through the `DefaultAPI` constructor in `_generated/apis/DefaultApi.ts`

```
import { Configuration, ConfigurationParameters } from '../runtime';

constructor(configurationParams: ConfigurationParameters = {}) {
    super(new Configuration(configurationParams));
}
```
