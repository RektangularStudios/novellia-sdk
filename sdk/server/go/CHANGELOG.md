# v0.1.0
Create SDK

# v0.2.0
- Add `/cardano/status` endpoint to return `cardano-graphql` status information

# v0.3.0
- Add `/products`
- Add `/orders`
- Rename `/cardano/status` to `/status`
  - add maintenance switch
  - generalize for multiple service statuses

# v0.4.0
- Update `/orders` to handle order get/create instead of recent fulfillments on-chain
- Add support for product information given through
  - Native Token
  - Extended 721 Token
  - Novellia Standard Token
