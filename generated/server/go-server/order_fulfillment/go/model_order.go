/*
 * order-fulfillment
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.1.0
 * Contact: contact@rektangularstudios.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package order_fulfillment

// Order - Describes a single order
type Order struct {

	Items []OrderItems `json:"items"`

	Customer OrderCustomer `json:"customer"`

	Payment OrderPayment `json:"payment,omitempty"`

	// Order ID for future reference
	OrderId string `json:"order_id"`

	// Description of order, useful metadata such as presale that occurred, etc.
	Description string `json:"description"`

	// Order status (i.e. awaiting payment, queued, refunded, ...)
	OrderStatus string `json:"order_status"`
}
