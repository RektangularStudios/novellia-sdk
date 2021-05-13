# Commission

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of entity taking commissions | 
**Address** | **string** | Address to deposit commissions | 
**Percent** | Pointer to **float32** | Recommended commission percentage | [optional] 

## Methods

### NewCommission

`func NewCommission(name string, address string, ) *Commission`

NewCommission instantiates a new Commission object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionWithDefaults

`func NewCommissionWithDefaults() *Commission`

NewCommissionWithDefaults instantiates a new Commission object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Commission) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Commission) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Commission) SetName(v string)`

SetName sets Name field to given value.


### GetAddress

`func (o *Commission) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *Commission) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *Commission) SetAddress(v string)`

SetAddress sets Address field to given value.


### GetPercent

`func (o *Commission) GetPercent() float32`

GetPercent returns the Percent field if non-nil, zero value otherwise.

### GetPercentOk

`func (o *Commission) GetPercentOk() (*float32, bool)`

GetPercentOk returns a tuple with the Percent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercent

`func (o *Commission) SetPercent(v float32)`

SetPercent sets Percent field to given value.

### HasPercent

`func (o *Commission) HasPercent() bool`

HasPercent returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


