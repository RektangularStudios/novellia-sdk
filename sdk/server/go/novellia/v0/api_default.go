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
			"GetCardanoTip",
			strings.ToUpper("Get"),
			"/novellia/cardano/tip",
			c.GetCardanoTip,
		},
		{
			"GetProducts",
			strings.ToUpper("Get"),
			"/novellia/products",
			c.GetProducts,
		},
		{
			"GetStatus",
			strings.ToUpper("Get"),
			"/novellia/status",
			c.GetStatus,
		},
		{
			"GetWorkflowMinterNvla",
			strings.ToUpper("Get"),
			"/novellia/workflow/minter/nvla",
			c.GetWorkflowMinterNvla,
		},
		{
			"PostCardanoTransaction",
			strings.ToUpper("Post"),
			"/novellia/cardano/transaction",
			c.PostCardanoTransaction,
		},
		{
			"PostProducts",
			strings.ToUpper("Post"),
			"/novellia/products",
			c.PostProducts,
		},
		{
			"PostWallet",
			strings.ToUpper("Post"),
			"/novellia/wallet",
			c.PostWallet,
		},
		{
			"PostWorkflowMinterNvla",
			strings.ToUpper("Post"),
			"/novellia/workflow/minter/nvla",
			c.PostWorkflowMinterNvla,
		},
	}
}

// GetCardanoTip - Your GET endpoint
func (c *DefaultApiController) GetCardanoTip(w http.ResponseWriter, r *http.Request) { 
	result, err := c.service.GetCardanoTip(r.Context())
	//If an error occured, encode the error with the status code
	if err != nil {
		EncodeJSONResponse(err.Error(), &result.Code, w)
		return
	}
	//If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)
	
}

// GetProducts - Your GET endpoint
func (c *DefaultApiController) GetProducts(w http.ResponseWriter, r *http.Request) { 
	query := r.URL.Query()
	marketId := query.Get("market_id")
	organizationId := query.Get("organization_id")
	result, err := c.service.GetProducts(r.Context(), marketId, organizationId)
	//If an error occured, encode the error with the status code
	if err != nil {
		EncodeJSONResponse(err.Error(), &result.Code, w)
		return
	}
	//If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)
	
}

// GetStatus - Your GET endpoint
func (c *DefaultApiController) GetStatus(w http.ResponseWriter, r *http.Request) { 
	result, err := c.service.GetStatus(r.Context())
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

// PostProducts - 
func (c *DefaultApiController) PostProducts(w http.ResponseWriter, r *http.Request) { 
	productsList := &ProductsList{}
	if err := json.NewDecoder(r.Body).Decode(&productsList); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	
	result, err := c.service.PostProducts(r.Context(), *productsList)
	//If an error occured, encode the error with the status code
	if err != nil {
		EncodeJSONResponse(err.Error(), &result.Code, w)
		return
	}
	//If no error, encode the body and the result code
	EncodeJSONResponse(result.Body, &result.Code, w)
	
}

// PostWallet - POST Wallet
func (c *DefaultApiController) PostWallet(w http.ResponseWriter, r *http.Request) { 
	wallet := &Wallet{}
	if err := json.NewDecoder(r.Body).Decode(&wallet); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	
	result, err := c.service.PostWallet(r.Context(), *wallet)
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
