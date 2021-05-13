# \DefaultApi

All URIs are relative to *http://api.rektangularstudios.com/novellia*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetCardanoTip**](DefaultApi.md#GetCardanoTip) | **Get** /cardano/tip | Your GET endpoint
[**GetProducts**](DefaultApi.md#GetProducts) | **Get** /products | Your GET endpoint
[**GetStatus**](DefaultApi.md#GetStatus) | **Get** /status | Your GET endpoint
[**GetWallet**](DefaultApi.md#GetWallet) | **Get** /wallet/{wallet_address} | Your GET endpoint
[**GetWorkflowMinterNvla**](DefaultApi.md#GetWorkflowMinterNvla) | **Get** /workflow/minter/nvla | 
[**PostCardanoTransaction**](DefaultApi.md#PostCardanoTransaction) | **Post** /cardano/transaction | 
[**PostProducts**](DefaultApi.md#PostProducts) | **Post** /products | 
[**PostWorkflowMinterNvla**](DefaultApi.md#PostWorkflowMinterNvla) | **Post** /workflow/minter/nvla | 



## GetCardanoTip

> CardanoTip GetCardanoTip(ctx).Execute()

Your GET endpoint



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.GetCardanoTip(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetCardanoTip``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCardanoTip`: CardanoTip
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetCardanoTip`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetCardanoTipRequest struct via the builder pattern


### Return type

[**CardanoTip**](CardanoTip.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProducts

> ProductsList GetProducts(ctx).MarketId(marketId).OrganizationId(organizationId).Execute()

Your GET endpoint



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    marketId := "marketId_example" // string | Filter product results by market (optional)
    organizationId := "organizationId_example" // string | Filter product results by organization (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.GetProducts(context.Background()).MarketId(marketId).OrganizationId(organizationId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetProducts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProducts`: ProductsList
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetProducts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetProductsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketId** | **string** | Filter product results by market | 
 **organizationId** | **string** | Filter product results by organization | 

### Return type

[**ProductsList**](ProductsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStatus

> Status GetStatus(ctx).Execute()

Your GET endpoint



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.GetStatus(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStatus`: Status
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetStatus`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetStatusRequest struct via the builder pattern


### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWallet

> []Token GetWallet(ctx, walletAddress).Execute()

Your GET endpoint



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    walletAddress := "walletAddress_example" // string | Address of Cardano wallet to use

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.GetWallet(context.Background(), walletAddress).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetWallet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWallet`: []Token
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetWallet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**walletAddress** | **string** | Address of Cardano wallet to use | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWalletRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWorkflowMinterNvla

> WorkflowInformation GetWorkflowMinterNvla(ctx).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.GetWorkflowMinterNvla(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.GetWorkflowMinterNvla``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkflowMinterNvla`: WorkflowInformation
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.GetWorkflowMinterNvla`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkflowMinterNvlaRequest struct via the builder pattern


### Return type

[**WorkflowInformation**](WorkflowInformation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCardanoTransaction

> PostCardanoTransaction(ctx).CardanoTransaction(cardanoTransaction).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    cardanoTransaction := *openapiclient.NewCardanoTransaction("Transaction_example", int32(123), false) // CardanoTransaction |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.PostCardanoTransaction(context.Background()).CardanoTransaction(cardanoTransaction).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.PostCardanoTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCardanoTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cardanoTransaction** | [**CardanoTransaction**](CardanoTransaction.md) |  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostProducts

> []Product PostProducts(ctx).ProductsList(productsList).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    productsList := *openapiclient.NewProductsList([]string{"ProductId_example"}) // ProductsList |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.PostProducts(context.Background()).ProductsList(productsList).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.PostProducts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProducts`: []Product
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.PostProducts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostProductsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productsList** | [**ProductsList**](ProductsList.md) |  | 

### Return type

[**[]Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostWorkflowMinterNvla

> CardanoTransaction PostWorkflowMinterNvla(ctx).MinterInfo(minterInfo).Execute()





### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    minterInfo := *openapiclient.NewMinterInfo("WalletAddress_example", "MinterDepositAddress_example") // MinterInfo |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.DefaultApi.PostWorkflowMinterNvla(context.Background()).MinterInfo(minterInfo).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DefaultApi.PostWorkflowMinterNvla``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostWorkflowMinterNvla`: CardanoTransaction
    fmt.Fprintf(os.Stdout, "Response from `DefaultApi.PostWorkflowMinterNvla`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostWorkflowMinterNvlaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **minterInfo** | [**MinterInfo**](MinterInfo.md) |  | 

### Return type

[**CardanoTransaction**](CardanoTransaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

