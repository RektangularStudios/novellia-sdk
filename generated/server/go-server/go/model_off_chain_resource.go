/*
 * novellia-api
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.4.0
 * Contact: contact@rektangularstudios.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package novellia_sdk

// OffChainResource - Off-chain resource used in Novellia Token Standard
type OffChainResource struct {

	// Resource identifier interpreted by application. These may correspond to specific names resources a client expects.
	ResourceId string `json:"resource_id"`

	// Short text describing resource. Helpful to know what the resource should have been if the resource breaks.
	Description string `json:"description"`

	// Order to load resource. Lower numbers load first. Resources with the same name will progressively overwrite each other.
	Priority int32 `json:"priority"`

	// The multihash of the resource. In most cases, this may be identical to an IPFS hash.
	Multihash string `json:"multihash"`

	// Hint regarding file state prior to hashing (ipfs, direct)
	HashSourceType string `json:"hash_source_type"`

	// Redundant resource URLs. These should all point to the same file on different hosts.
	Url []string `json:"url"`

	// MIME type of resource.
	ContentType string `json:"content_type"`
}