# v0.1.0

Initial publish, supports wallet token query.

# v0.2.0

- implement minimal service layer
  - `/cardano/status` returns GraphQL init status and sync percentage
  - `/cardano/tip` returns latest block and epoch
  - `/wallet/<address>` returns tokens held at address using the latest block as a reference point
