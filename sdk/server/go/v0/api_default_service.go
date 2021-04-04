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

// GetCardanoStatus - Your GET endpoint
func (s *DefaultApiService) GetCardanoStatus(ctx context.Context) (ImplResponse, error) {
	// TODO - update GetCardanoStatus with the required logic for this service method.
	// Add api_default_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.

	//TODO: Uncomment the next line to return response Response(200, CardanoStatus{}) or use other options such as http.Ok ...
	//return Response(200, CardanoStatus{}), nil

	return Response(http.StatusNotImplemented, nil), errors.New("GetCardanoStatus method not implemented")
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

