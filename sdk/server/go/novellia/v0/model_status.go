/*
 * novellia
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.8.0
 * Contact: contact@rektangularstudios.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package novellia

// Status - Status of microservice, indicating service availabilities
type Status struct {

	Cardano StatusCardano `json:"cardano"`

	// kill-switch to tell users that the backend is not working correctly / is under maintenance
	Maintenance bool `json:"maintenance"`

	// Status string. \"UP\" if everything is fine.
	Status string `json:"status"`

	// List of errors for bad statuses
	Errors []string `json:"errors,omitempty"`
}
