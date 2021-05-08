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

// OccultaNovelliaCharacterProgression - Character leveling progression between card variants
type OccultaNovelliaCharacterProgression struct {

	// Character progression class
	Class string `json:"class"`

	// Stage of character in class progression (1,2,3)
	Stage int32 `json:"stage"`
}