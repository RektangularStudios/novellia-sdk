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

// CardanoStatus - Status of Cardano for determining availability of other endpoints
type CardanoStatus struct {

	// Whether Cardano APIs are available / Cardano is fully synced
	Initialized bool `json:"initialized"`

	// Cardano sync percentage for progress estimation
	SyncPercentage float32 `json:"sync_percentage"`
}
