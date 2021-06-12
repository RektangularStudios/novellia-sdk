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

// Product - Describes a Product served from the Novellia microservice
type Product struct {

	Pricing ProductPricing `json:"pricing"`

	Organization ProductOrganization `json:"organization"`

	Market ProductMarket `json:"market"`

	Stock ProductStock `json:"stock"`

	Metadata ProductMetadata `json:"metadata"`

	Product ProductProduct `json:"product"`

	// List of entities to give attribution to for product
	Attribution []Attribution `json:"attribution,omitempty"`

	// When the product was last modified
	Modified string `json:"modified,omitempty"`
}
