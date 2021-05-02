/*
 * novellia-api
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.6.0
 * Contact: contact@rektangularstudios.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package novellia_sdk

type StatusCardano struct {

	// whether cardano-graphql is initialized
	Initialized bool `json:"initialized"`

	// cardano-graphql sync percentage, used to gauge when APIs will be available
	SyncPercentage float32 `json:"sync_percentage"`
}
