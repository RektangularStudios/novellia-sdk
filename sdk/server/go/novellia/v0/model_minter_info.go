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

// MinterInfo - Generic information required for minter workflows.
type MinterInfo struct {

	// Wallet that pays transaction fee
	WalletAddress string `json:"wallet_address"`

	// Wallet that received minted tokens
	MinterDepositAddress string `json:"minter_deposit_address"`
}
