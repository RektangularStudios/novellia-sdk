/*
 * novellia-api
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0
 * Contact: contact@rektangularstudios.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package novellia_sdk

// ProductOrganization - Organization listing the product
type ProductOrganization struct {

	// Readable name of organization
	Name string `json:"name"`

	// Unique identifier for organization
	OrganizationId int32 `json:"organization_id"`
}