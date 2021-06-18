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

# v0.7.0
- Update `/products` to allow fetching specific products
  - GET returns list of product IDs
  - POST accepts list of product IDs and returns relevant details
- Add `id` to `NovelliaProduct` to be valid for tokens that have not yet been minted, but are listed centrally
- Handle CORS pre-flight properly

# v0.8.0
- Add support for organization and market descriptions
- Add generic `status` string to report from `/status` endpoint
- migrate `/orders` to new `order_fulfillment` Go SDK

# v0.9.2
- Add `/tokens` endpoint for searching tokens by asset_id, policy_id, or name
