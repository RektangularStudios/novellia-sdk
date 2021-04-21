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

// ProductPricing - Pricing information for making a purchase
type ProductPricing struct {

	// Currency product is priced with
	CurrencyPolicyId string `json:"currency_policy_id"`

	// Price for a single item of product type
	UnitPrice int32 `json:"unit_price"`

	// Maximum units purchasable in a single transaction
	MaxOrderSize int32 `json:"max_order_size"`

	// Address to send funds to purchase token. Leave empty if token is not yet for sale.
	PurchaseAddress string `json:"purchase_address,omitempty"`

	// When the product is becoming available for sale. Leave empty if this is undetermined.
	DateAvailable string `json:"date_available,omitempty"`
}