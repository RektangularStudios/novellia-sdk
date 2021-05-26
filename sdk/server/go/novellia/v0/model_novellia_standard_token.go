/*
 * novellia
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.9.0
 * Contact: contact@rektangularstudios.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package novellia

// NovelliaStandardToken - Novellia Token Standard on-chain metadata
type NovelliaStandardToken struct {

	// Attribution of rights.
	Copyright string `json:"copyright"`

	// List of publishers or entities involved in token creation. Useful for onlookers to determine token origin. These can be URLs.
	Publisher []string `json:"publisher"`

	// Token version. May have future use such as for clients optionally using later metadata iterations.
	Version int32 `json:"version"`

	// List of extensions for parser to understand feature set. This may be empty, in which case the token is interpreted as just a 721 token.
	Extension []string `json:"extension"`

	// Token number in a set. Redundant field which makes no sense for tokens without a total-order.
	Id int32 `json:"id"`

	// Display name for token.
	Name string `json:"name"`

	// Image URL without source redundancy.
	Image string `json:"image"`

	Description DescriptionSet `json:"description"`

	Resource []OffChainResource `json:"resource"`

	Commission []Commission `json:"commission,omitempty"`

	NativeToken NativeToken `json:"native_token"`

	// Identifies the version of the specification in use.
	NovelliaVersion int32 `json:"novellia_version"`

	// Tags for sorting and filtering. \"nsfw\" indicates NSFW content
	Tags []string `json:"tags"`
}
