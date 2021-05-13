# ProductStock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Available** | **float32** |  | 
**TotalSupply** | **float32** |  | 

## Methods

### NewProductStock

`func NewProductStock(available float32, totalSupply float32, ) *ProductStock`

NewProductStock instantiates a new ProductStock object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductStockWithDefaults

`func NewProductStockWithDefaults() *ProductStock`

NewProductStockWithDefaults instantiates a new ProductStock object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailable

`func (o *ProductStock) GetAvailable() float32`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *ProductStock) GetAvailableOk() (*float32, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *ProductStock) SetAvailable(v float32)`

SetAvailable sets Available field to given value.


### GetTotalSupply

`func (o *ProductStock) GetTotalSupply() float32`

GetTotalSupply returns the TotalSupply field if non-nil, zero value otherwise.

### GetTotalSupplyOk

`func (o *ProductStock) GetTotalSupplyOk() (*float32, bool)`

GetTotalSupplyOk returns a tuple with the TotalSupply field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalSupply

`func (o *ProductStock) SetTotalSupply(v float32)`

SetTotalSupply sets TotalSupply field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


