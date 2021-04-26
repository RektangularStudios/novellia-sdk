# Novellia SDK - Go (Server)

This Novellia SDK is for the Novellia microservice. It should not be used by clients.

## Regenerating the SDK

There are some minor changes that need to be made after regenerating the SDK.

- Add the `"mime/multipart"` import to `v0/routers.go`
- Edit `v0/model_product_immutable.go` to use pointer types for token options.
  - Otherwise JSON responses will return annoying empty objects. (`omitempty` won't work)
