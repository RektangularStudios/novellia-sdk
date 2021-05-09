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

import (
	"context"
	"net/http"
	"errors"
)

// DefaultApiService is a service that implents the logic for the DefaultApiServicer
// This service should implement the business logic for every endpoint for the DefaultApi API. 
// Include any external packages or services that will be required by this service.
type DefaultApiService struct {
}

// NewDefaultApiService creates a default api service
func NewDefaultApiService() DefaultApiServicer {
	return &DefaultApiService{}
}

// GetOrders - Your GET endpoint
func (s *DefaultApiService) GetOrders(ctx context.Context, orderId string) (ImplResponse, error) {
	// TODO - update GetOrders with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, Order{}) or use other options such as http.Ok ...
	//return Response(200, Order{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetOrders method not implemented")
}

// GetStatus - Your GET endpoint
func (s *DefaultApiService) GetStatus(ctx context.Context) (ImplResponse, error) {
	// TODO - update GetStatus with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, Status{}) or use other options such as http.Ok ...
	//return Response(200, Status{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetStatus method not implemented")
}

// PostOrders - 
func (s *DefaultApiService) PostOrders(ctx context.Context, order Order) (ImplResponse, error) {
	// TODO - update PostOrders with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, OrderCreated{}) or use other options such as http.Ok ...
	//return Response(200, OrderCreated{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("PostOrders method not implemented")
}

