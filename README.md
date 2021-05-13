# Novellia SDK

The Novellia SDK exposes language specific service layers for interacting with [Novellia](https://github.com/RektangularStudios/novellia). The service layers are simple wrappers over HTTP networking calls.

Client languages to be supported:
- Unity / C#
- TypeScript
- Golang

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

## How do I use the Novellia SDK?

# TypeScript

Install the [NPM package](https://www.npmjs.com/package/novellia-sdk)
- `npm install novellia-sdk`

# Golang


# Go (Server)

Install with Go modules

```
go get github.com/RektangularStudios/novellia-sdk/sdk/server/go
go mod tidy
go mod vendor
```

# Novellia API

The API specification for communication between the client code using the Novellia SDK and [Novellia](https://github.com/RektangularStudios/novellia).

We have chosen to use a REST API to maximize compatibility with client code. This communication protocol nicely emulates the RPC nature of smart contracts. Unfortunately, gRPC has poor support in Unity, so we have foregone it. As querying needs expand, we may also investigate GraphQL, but there is no present need for it.

## Tooling

We are using [Stoplight](https://stoplight.io/) to create an OpenAPI specification. We recommend pulling this repo locally and using [Stoplight Studio](https://stoplight.io/studio/) to make changes, committing to Git manually.

Boilerplate is generated using [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator).

What goes in this repository?
- The OpenAPI specification
- Generated code. This ensures the OpenAPI specification isn't broken, or if it is, one doesn't need to fix it before they can use the boilerplate.

### Dependencies

- Install the JRE
`sudo apt install default-jre`

- Get the [OpenAPI Generator CLI](https://github.com/OpenAPITools/openapi-generator)
`wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.0.1/openapi-generator-cli-5.0.1.jar -O openapi-generator-cli.jar`

- to list commands
`java -jar openapi-generator-cli.jar help`

- to list available generators
`java -jar openapi-generator-cli.jar list`

### Manual testing of API

We recommend importing the OpenAPI file `openapi/reference/reference/novellia.v0.yaml` into [Insomnia](https://insomnia.rest/) to issue HTTP requests.

## Generating Client Code

### Unity / C#

Rektangular uses this for [Occulta Novellia](https://rektangularstudios.com/occulta-novellia/)

Use the [csharp](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/csharp.md) generator.

```
java -jar openapi-generator-cli.jar generate \
  -i ./openapi/reference/novellia.v0.yaml \
  -g csharp \
  --additional-properties targetFramework=v4.5 \
  -o ./generated/client/csharp
```

### TypeScript

Rektangular uses this for the [Novellia Dashboard](https://rektangularstudios.com/).

Use the [typescript-fetch](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/typescript-fetch.md) generator.

```
java -jar openapi-generator-cli.jar generate \
  -i ./openapi/reference/novellia.v0.yaml \
  -g typescript-fetch \
  --additional-properties typescriptThreePlus=true \
  --additional-properties supportsES6=true \
  --additional-properties npmName="novellia-sdk" \
  -o ./generated/client/typescript-fetch/novellia

java -jar openapi-generator-cli.jar generate \
  -i ./openapi/reference/order-fulfillment.v0.yaml \
  -g typescript-fetch \
  --additional-properties typescriptThreePlus=true \
  --additional-properties supportsES6=true \
  --additional-properties npmName="novellia-sdk" \
  -o ./generated/client/typescript-fetch/order_fulfillment
```

This is for TypeScript 3+ with ES6 support.

### Golang (Client)

Use the [go](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/go.md) generator.

```
java -jar openapi-generator-cli.jar generate \
  -i ./openapi/reference/novellia.v0.yaml \
  -g go \
  --additional-properties packageName=novellia \
  --additional-properties packageVersion=0.1.0 \
  -o ./generated/client/go/novellia
```

### Why isn't language XYZ listed?

If we've yet to implement your language of choice into the Novellia SDK, you'll have to generate the code yourself and create a service layer.

Consider making a PR so others can benefit from your work. Rektangular will not typically provide ongoing support for community rolled languages, however.

[The full list of generators can be found here.](https://github.com/OpenAPITools/openapi-generator/tree/master/docs/generators)

There's quite a few, with varying degrees of quality. Likely, you'll be able to get the boilerplate you need with minimal effort.

## Generating Server Code

This is not relevant for clients using the Novellia SDK. It pertains only to generating the server boilerplate for Novellia.

### Generating Golang

Use the [go-server](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/go-server.md) generator.

```
# novellia
java -jar openapi-generator-cli.jar generate \
  -i ./openapi/reference/novellia.v0.yaml \
  --additional-properties packageName=novellia \
  --additional-properties featureCORS=true \
  -g go-server \
  -o ./generated/server/go-server/novellia

# order-fulfillment
java -jar openapi-generator-cli.jar generate \
  -i ./openapi/reference/order-fulfillment.v0.yaml \
  --additional-properties packageName=order_fulfillment \
  --additional-properties featureCORS=true \
  -g go-server \
  -o ./generated/server/go-server/order_fulfillment
```

Note that the code may be slightly broken upon regeneration.

# Developing

We are using [Semantic Versioning](https://semver.org/) with some small caveats:
- there is no stable version of the Novellia SDK yet, so we're using `minor` version for breaking changes for `major` version 0.
