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
  - Occulta Novellia Character
  - Offchain Data (for now)

# v0.5.0
- Update `Product` model
  - use `product` field instead of `immutable` as some data may not be immutable
  - add `NovelliaProduct` model for products without tokens
  - add `tags` with "nsfw" specialization to `NovelliaStandardToken`

# v0.6.0
- Minor breaking changes to SDK (mostly just field names)
  - added `rarity` to Occulta Novellia Character model
