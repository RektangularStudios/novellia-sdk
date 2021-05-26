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

// Token - Generalizes the data required to describe a token in a Cardano wallet.
type Token struct {

	// Token asset ID registered on Cardano
	NativeTokenId string `json:"native_token_id"`

	// Amount of token held in Cardano wallet (in discrete units, i.e. lovelace)
	Amount uint64 `json:"amount"`

	// Name or ticker as interpreted by Novellia (e.g. NVLA, ADA)
	Name string `json:"name,omitempty"`

	// Short description of token as interpreted by Novellia
	Description string `json:"description,omitempty"`

	// Onchain metadata
	Metadata string `json:"metadata,omitempty"`
}
