/*
 * novellia-api
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0
 * Contact: contact@rektangularstudios.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package novellia_api

import (
	"encoding/json"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

// A DefaultApiController binds http requests to an api service and writes the service results to the http response
type DefaultApiController struct {
	service DefaultApiServicer
}

// NewDefaultApiController creates a default api controller
func NewDefaultApiController(s DefaultApiServicer) Router {
	return &DefaultApiController{ service: s }
}

// Routes returns all of the api route for the DefaultApiController
func (c *DefaultApiController) Routes() Routes {
	return Routes{ 
		{
			"GetCardanoStatus",
			strings.ToUpper("Get"),
			"/cardano/status",
			c.GetCardanoStatus,
		},
		{
			"GetWallet",
			strings.ToUpper("Get"),
			"/wallet/{wallet_address}",
			c.GetWallet,
		},
		{
			"GetWorkflowMinterNvla",
			strings.ToUpper("Get"),
			"/workflow/minter/nvla",
			c.GetWorkflowMinterNvla,
		},
		{
			"PostCardanoTransaction",
			strings.ToUpper("Post"),
			"/cardano/transaction",
			c.PostCardanoTransaction,
		},
		{
			"PostWorkflowMinterNvla",
			strings.ToUpper("Post"),
			"/workflow/minter/nvla",
			c.PostWorkflowMinterNvla,
		},
	}
}

// GetCardanoStatus - Your GET endpoint
func (c *DefaultApiController) GetCardanoStatus(w http.ResponseWriter, r *http.Request) { 
	result, err := c.service.GetCardanoStatus(r.Context())
	//If an error occured, encode the error with the status code
	if err != nil {
		EncodeJSONResponse(err.Error(), &result.Code, w)
		return
	}
	//If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)
	
}

// GetWallet - Your GET endpoint
func (c *DefaultApiController) GetWallet(w http.ResponseWriter, r *http.Request) { 
	params := mux.Vars(r)
	walletAddress := params["wallet_address"]
	result, err := c.service.GetWallet(r.Context(), walletAddress)
	//If an error occured, encode the error with the status code
	if err != nil {
		EncodeJSONResponse(err.Error(), &result.Code, w)
		return
	}
	//If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)
	
}

// GetWorkflowMinterNvla - 
func (c *DefaultApiController) GetWorkflowMinterNvla(w http.ResponseWriter, r *http.Request) { 
	result, err := c.service.GetWorkflowMinterNvla(r.Context())
	//If an error occured, encode the error with the status code
	if err != nil {
		EncodeJSONResponse(err.Error(), &result.Code, w)
		return
	}
	//If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)
	
}

// PostCardanoTransaction - 
func (c *DefaultApiController) PostCardanoTransaction(w http.ResponseWriter, r *http.Request) { 
	cardanoTransaction := &CardanoTransaction{}
	if err := json.NewDecoder(r.Body).Decode(&cardanoTransaction); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	
	result, err := c.service.PostCardanoTransaction(r.Context(), *cardanoTransaction)
	//If an error occured, encode the error with the status code
	if err != nil {
		EncodeJSONResponse(err.Error(), &result.Code, w)
		return
	}
	//If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)
	
}

// PostWorkflowMinterNvla - 
func (c *DefaultApiController) PostWorkflowMinterNvla(w http.ResponseWriter, r *http.Request) { 
	minterInfo := &MinterInfo{}
	if err := json.NewDecoder(r.Body).Decode(&minterInfo); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	
	result, err := c.service.PostWorkflowMinterNvla(r.Context(), *minterInfo)
	//If an error occured, encode the error with the status code
	if err != nil {
		EncodeJSONResponse(err.Error(), &result.Code, w)
		return
	}
	//If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)
	
}
