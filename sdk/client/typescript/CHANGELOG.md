# v0.1.0
Initial publish, supports wallet token query.

# v0.2.0
- implement minimal service layer
  - `/cardano/status` returns GraphQL init status and sync percentage
  - `/cardano/tip` returns latest block and epoch
  - `/wallet/<address>` returns tokens held at address using the latest block as a reference point

# v0.3.0
- Add `/products`
- Add `/orders`
- Rename `/cardano/status` to `/status`
  - add maintenance switch
  - generalize for multiple service statuses

# v0.3.9
- Change default baseUrl / gateway
- add long / short product descriptions
- service layer with configurable baseUrl
- fix package JSON for publishing TypeScript to NPM

# v0.4.0
- getOrder and createOrder now interact with singular orders for a payment processor
- Add support for better product information given through
  - Native Token
  - Extended 721 Token
  - Novellia Standard Token
  - Occulta Novellia Character
  - Offchain Data (for now)

# v0.5.0
- added NovelliaProduct type for tokenless products
  - breaking changes to the getProducts response

# v0.6.0
- Minor breaking changes to SDK (mostly just field names)
  - added rarity to Occulta Novellia Character model

# v0.7.0
- Update `/products` to allow fetching specific products
  - GET returns list of product IDs
  - POST accepts list of product IDs and returns relevant details
- Add `id` to `NovelliaProduct` to be valid for tokens that have not yet been minted, but are listed centrally

# v0.8.0
- Add support for organization and market descriptions
- Add generic `status` string to report from `/status` endpoint
- migrate `/orders` to new `order_fulfillment` service

# v0.9.0
- Add support for `modified` field on products
- Overhaul `/wallet` endpoint