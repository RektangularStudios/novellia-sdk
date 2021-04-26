/*
 * novellia-api
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 0.4.0
 * Contact: contact@rektangularstudios.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package novellia_sdk

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

// GetCardanoTip - Your GET endpoint
func (s *DefaultApiService) GetCardanoTip(ctx context.Context) (ImplResponse, error) {
	// TODO - update GetCardanoTip with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, CardanoTip{}) or use other options such as http.Ok ...
	//return Response(200, CardanoTip{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetCardanoTip method not implemented")
}

// GetOrders - Your GET endpoint
func (s *DefaultApiService) GetOrders(ctx context.Context, orderId string) (ImplResponse, error) {
	// TODO - update GetOrders with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, Order{}) or use other options such as http.Ok ...
	//return Response(200, Order{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetOrders method not implemented")
}

// GetProducts - Your GET endpoint
func (s *DefaultApiService) GetProducts(ctx context.Context, marketId string, organizationId string, productId string) (ImplResponse, error) {
	// TODO - update GetProducts with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, []Product{}) or use other options such as http.Ok ...
	//return Response(200, []Product{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetProducts method not implemented")
}

// GetStatus - Your GET endpoint
func (s *DefaultApiService) GetStatus(ctx context.Context) (ImplResponse, error) {
	// TODO - update GetStatus with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, Status{}) or use other options such as http.Ok ...
	//return Response(200, Status{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetStatus method not implemented")
}

// GetWallet - Your GET endpoint
func (s *DefaultApiService) GetWallet(ctx context.Context, walletAddress string) (ImplResponse, error) {
	// TODO - update GetWallet with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, []Token{}) or use other options such as http.Ok ...
	//return Response(200, []Token{}), nil

	//TODO: Uncomment the next line to return response Response(400, {}) or use other options such as http.Ok ...
	//return Response(400, nil),nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetWallet method not implemented")
}

// GetWorkflowMinterNvla - 
func (s *DefaultApiService) GetWorkflowMinterNvla(ctx context.Context) (ImplResponse, error) {
	// TODO - update GetWorkflowMinterNvla with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, WorkflowInformation{}) or use other options such as http.Ok ...
	//return Response(200, WorkflowInformation{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetWorkflowMinterNvla method not implemented")
}

// PostCardanoTransaction - 
func (s *DefaultApiService) PostCardanoTransaction(ctx context.Context, cardanoTransaction CardanoTransaction) (ImplResponse, error) {
	// TODO - update PostCardanoTransaction with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, {}) or use other options such as http.Ok ...
	//return Response(200, nil),nil

	//TODO: Uncomment the next line to return response Response(400, {}) or use other options such as http.Ok ...
	//return Response(400, nil),nil

	return Response(http.StatusNotImplemented, nil), errors.New("PostCardanoTransaction method not implemented")
}

// PostOrders - 
func (s *DefaultApiService) PostOrders(ctx context.Context, order Order) (ImplResponse, error) {
	// TODO - update PostOrders with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, OrderCreated{}) or use other options such as http.Ok ...
	//return Response(200, OrderCreated{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("PostOrders method not implemented")
}

// PostWorkflowMinterNvla - 
func (s *DefaultApiService) PostWorkflowMinterNvla(ctx context.Context, minterInfo MinterInfo) (ImplResponse, error) {
	// TODO - update PostWorkflowMinterNvla with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, CardanoTransaction{}) or use other options such as http.Ok ...
	//return Response(200, CardanoTransaction{}), nil

	//TODO: Uncomment the next line to return response Response(400, {}) or use other options such as http.Ok ...
	//return Response(400, nil),nil

	return Response(http.StatusNotImplemented, nil), errors.New("PostWorkflowMinterNvla method not implemented")
}

