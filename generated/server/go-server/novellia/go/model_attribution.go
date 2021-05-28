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

// Attribution - Attribution information for artist, sculptor, whoever.
type Attribution struct {

	// Name to give attribution to
	AuthorName string `json:"author_name"`

	// URLs to portfolios, websites, etc.
	Url []string `json:"url"`

	// Description of work attributed
	WorkAttributed string `json:"work_attributed"`
}
