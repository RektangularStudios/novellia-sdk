# OffChainResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResourceId** | **string** | Resource identifier interpreted by application. These may correspond to specific names resources a client expects. | 
**Description** | **string** | Short text describing resource. Helpful to know what the resource should have been if the resource breaks. | 
**Priority** | **int32** | Order to load resource. Lower numbers load first. Resources with the same name will progressively overwrite each other. | 
**Multihash** | **string** | The multihash of the resource. In most cases, this may be identical to an IPFS hash. | 
**HashSourceType** | **string** | Hint regarding file state prior to hashing (ipfs, direct) | 
**Url** | **[]string** | Redundant resource URLs. These should all point to the same file on different hosts. | 
**ContentType** | **string** | MIME type of resource. | 

## Methods

### NewOffChainResource

`func NewOffChainResource(resourceId string, description string, priority int32, multihash string, hashSourceType string, url []string, contentType string, ) *OffChainResource`

NewOffChainResource instantiates a new OffChainResource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOffChainResourceWithDefaults

`func NewOffChainResourceWithDefaults() *OffChainResource`

NewOffChainResourceWithDefaults instantiates a new OffChainResource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResourceId

`func (o *OffChainResource) GetResourceId() string`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *OffChainResource) GetResourceIdOk() (*string, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *OffChainResource) SetResourceId(v string)`

SetResourceId sets ResourceId field to given value.


### GetDescription

`func (o *OffChainResource) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *OffChainResource) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *OffChainResource) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetPriority

`func (o *OffChainResource) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *OffChainResource) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *OffChainResource) SetPriority(v int32)`

SetPriority sets Priority field to given value.


### GetMultihash

`func (o *OffChainResource) GetMultihash() string`

GetMultihash returns the Multihash field if non-nil, zero value otherwise.

### GetMultihashOk

`func (o *OffChainResource) GetMultihashOk() (*string, bool)`

GetMultihashOk returns a tuple with the Multihash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultihash

`func (o *OffChainResource) SetMultihash(v string)`

SetMultihash sets Multihash field to given value.


### GetHashSourceType

`func (o *OffChainResource) GetHashSourceType() string`

GetHashSourceType returns the HashSourceType field if non-nil, zero value otherwise.

### GetHashSourceTypeOk

`func (o *OffChainResource) GetHashSourceTypeOk() (*string, bool)`

GetHashSourceTypeOk returns a tuple with the HashSourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHashSourceType

`func (o *OffChainResource) SetHashSourceType(v string)`

SetHashSourceType sets HashSourceType field to given value.


### GetUrl

`func (o *OffChainResource) GetUrl() []string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *OffChainResource) GetUrlOk() (*[]string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *OffChainResource) SetUrl(v []string)`

SetUrl sets Url field to given value.


### GetContentType

`func (o *OffChainResource) GetContentType() string`

GetContentType returns the ContentType field if non-nil, zero value otherwise.

### GetContentTypeOk

`func (o *OffChainResource) GetContentTypeOk() (*string, bool)`

GetContentTypeOk returns a tuple with the ContentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentType

`func (o *OffChainResource) SetContentType(v string)`

SetContentType sets ContentType field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


