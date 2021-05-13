# NovelliaProduct

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Copyright** | **string** | Attribution of rights to product. | 
**Publisher** | **[]string** | List of publishers or entities involved in token creation. Useful for onlookers to determine token origin. | 
**Version** | **int32** | Iteration in update sequence for product. | 
**Name** | **string** | Display name for token. | 
**Tags** | **[]string** | Tags for sorting and filtering. \&quot;nsfw\&quot; indicates NSFW content | 
**Commission** | Pointer to [**[]Commission**](Commission.md) |  | [optional] 
**Description** | [**DescriptionSet**](DescriptionSet.md) |  | 
**Resource** | [**[]OffChainResource**](OffChainResource.md) |  | 
**Id** | Pointer to **int32** | Token number in a set. Redundant field which makes no sense for tokens without a total-order. | [optional] 

## Methods

### NewNovelliaProduct

`func NewNovelliaProduct(copyright string, publisher []string, version int32, name string, tags []string, description DescriptionSet, resource []OffChainResource, ) *NovelliaProduct`

NewNovelliaProduct instantiates a new NovelliaProduct object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNovelliaProductWithDefaults

`func NewNovelliaProductWithDefaults() *NovelliaProduct`

NewNovelliaProductWithDefaults instantiates a new NovelliaProduct object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyright

`func (o *NovelliaProduct) GetCopyright() string`

GetCopyright returns the Copyright field if non-nil, zero value otherwise.

### GetCopyrightOk

`func (o *NovelliaProduct) GetCopyrightOk() (*string, bool)`

GetCopyrightOk returns a tuple with the Copyright field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyright

`func (o *NovelliaProduct) SetCopyright(v string)`

SetCopyright sets Copyright field to given value.


### GetPublisher

`func (o *NovelliaProduct) GetPublisher() []string`

GetPublisher returns the Publisher field if non-nil, zero value otherwise.

### GetPublisherOk

`func (o *NovelliaProduct) GetPublisherOk() (*[]string, bool)`

GetPublisherOk returns a tuple with the Publisher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublisher

`func (o *NovelliaProduct) SetPublisher(v []string)`

SetPublisher sets Publisher field to given value.


### GetVersion

`func (o *NovelliaProduct) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *NovelliaProduct) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *NovelliaProduct) SetVersion(v int32)`

SetVersion sets Version field to given value.


### GetName

`func (o *NovelliaProduct) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NovelliaProduct) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NovelliaProduct) SetName(v string)`

SetName sets Name field to given value.


### GetTags

`func (o *NovelliaProduct) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *NovelliaProduct) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *NovelliaProduct) SetTags(v []string)`

SetTags sets Tags field to given value.


### GetCommission

`func (o *NovelliaProduct) GetCommission() []Commission`

GetCommission returns the Commission field if non-nil, zero value otherwise.

### GetCommissionOk

`func (o *NovelliaProduct) GetCommissionOk() (*[]Commission, bool)`

GetCommissionOk returns a tuple with the Commission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommission

`func (o *NovelliaProduct) SetCommission(v []Commission)`

SetCommission sets Commission field to given value.

### HasCommission

`func (o *NovelliaProduct) HasCommission() bool`

HasCommission returns a boolean if a field has been set.

### GetDescription

`func (o *NovelliaProduct) GetDescription() DescriptionSet`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *NovelliaProduct) GetDescriptionOk() (*DescriptionSet, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *NovelliaProduct) SetDescription(v DescriptionSet)`

SetDescription sets Description field to given value.


### GetResource

`func (o *NovelliaProduct) GetResource() []OffChainResource`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *NovelliaProduct) GetResourceOk() (*[]OffChainResource, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *NovelliaProduct) SetResource(v []OffChainResource)`

SetResource sets Resource field to given value.


### GetId

`func (o *NovelliaProduct) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NovelliaProduct) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NovelliaProduct) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *NovelliaProduct) HasId() bool`

HasId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


