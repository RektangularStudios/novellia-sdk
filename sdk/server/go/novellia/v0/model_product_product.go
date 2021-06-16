/*
 * novellia
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.9.2
 * Contact: contact@rektangularstudios.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package novellia

// ProductProduct - Immutable 
type ProductProduct struct {

	Extended721Token Extended721Token `json:"extended_721_token,omitempty"`

	NovelliaStandardToken NovelliaStandardToken `json:"novellia_standard_token,omitempty"`

	NativeToken NativeToken `json:"native_token,omitempty"`

	NovelliaProduct NovelliaProduct `json:"novellia_product,omitempty"`

	// Unique identifier of product
	ProductId string `json:"product_id,omitempty"`
}
