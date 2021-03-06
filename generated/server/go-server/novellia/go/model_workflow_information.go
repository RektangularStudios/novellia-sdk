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

// WorkflowInformation - Returns preconditions relevant to a user wanting to execute a workflow. I.e. costs.
type WorkflowInformation struct {

	// The lovelace cost to execute the workflow
	FeeLovelace int32 `json:"fee_lovelace,omitempty"`
}
