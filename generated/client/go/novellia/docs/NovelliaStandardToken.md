# NovelliaStandardToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Copyright** | **string** | Attribution of rights. | 
**Publisher** | **[]string** | List of publishers or entities involved in token creation. Useful for onlookers to determine token origin. These can be URLs. | 
**Version** | **int32** | Token version. May have future use such as for clients optionally using later metadata iterations. | 
**Extension** | **[]string** | List of extensions for parser to understand feature set. This may be empty, in which case the token is interpreted as just a 721 token. | 
**Id** | **int32** | Token number in a set. Redundant field which makes no sense for tokens without a total-order. | 
**Name** | **string** | Display name for token. | 
**Image** | **string** | Image URL without source redundancy. | 
**Description** | [**DescriptionSet**](DescriptionSet.md) |  | 
**Resource** | [**[]OffChainResource**](OffChainResource.md) |  | 
**Commission** | Pointer to [**[]Commission**](Commission.md) |  | [optional] 
**NativeToken** | [**NativeToken**](NativeToken.md) |  | 
**NovelliaVersion** | **int32** | Identifies the version of the specification in use. | 
**Tags** | **[]string** | Tags for sorting and filtering. \&quot;nsfw\&quot; indicates NSFW content | 

## Methods

### NewNovelliaStandardToken

`func NewNovelliaStandardToken(copyright string, publisher []string, version int32, extension []string, id int32, name string, image string, description DescriptionSet, resource []OffChainResource, nativeToken NativeToken, novelliaVersion int32, tags []string, ) *NovelliaStandardToken`

NewNovelliaStandardToken instantiates a new NovelliaStandardToken object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNovelliaStandardTokenWithDefaults

`func NewNovelliaStandardTokenWithDefaults() *NovelliaStandardToken`

NewNovelliaStandardTokenWithDefaults instantiates a new NovelliaStandardToken object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyright

`func (o *NovelliaStandardToken) GetCopyright() string`

GetCopyright returns the Copyright field if non-nil, zero value otherwise.

### GetCopyrightOk

`func (o *NovelliaStandardToken) GetCopyrightOk() (*string, bool)`

GetCopyrightOk returns a tuple with the Copyright field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyright

`func (o *NovelliaStandardToken) SetCopyright(v string)`

SetCopyright sets Copyright field to given value.


### GetPublisher

`func (o *NovelliaStandardToken) GetPublisher() []string`

GetPublisher returns the Publisher field if non-nil, zero value otherwise.

### GetPublisherOk

`func (o *NovelliaStandardToken) GetPublisherOk() (*[]string, bool)`

GetPublisherOk returns a tuple with the Publisher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublisher

`func (o *NovelliaStandardToken) SetPublisher(v []string)`

SetPublisher sets Publisher field to given value.


### GetVersion

`func (o *NovelliaStandardToken) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *NovelliaStandardToken) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *NovelliaStandardToken) SetVersion(v int32)`

SetVersion sets Version field to given value.


### GetExtension

`func (o *NovelliaStandardToken) GetExtension() []string`

GetExtension returns the Extension field if non-nil, zero value otherwise.

### GetExtensionOk

`func (o *NovelliaStandardToken) GetExtensionOk() (*[]string, bool)`

GetExtensionOk returns a tuple with the Extension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtension

`func (o *NovelliaStandardToken) SetExtension(v []string)`

SetExtension sets Extension field to given value.


### GetId

`func (o *NovelliaStandardToken) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NovelliaStandardToken) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NovelliaStandardToken) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *NovelliaStandardToken) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NovelliaStandardToken) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NovelliaStandardToken) SetName(v string)`

SetName sets Name field to given value.


### GetImage

`func (o *NovelliaStandardToken) GetImage() string`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *NovelliaStandardToken) GetImageOk() (*string, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *NovelliaStandardToken) SetImage(v string)`

SetImage sets Image field to given value.


### GetDescription

`func (o *NovelliaStandardToken) GetDescription() DescriptionSet`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *NovelliaStandardToken) GetDescriptionOk() (*DescriptionSet, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *NovelliaStandardToken) SetDescription(v DescriptionSet)`

SetDescription sets Description field to given value.


### GetResource

`func (o *NovelliaStandardToken) GetResource() []OffChainResource`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *NovelliaStandardToken) GetResourceOk() (*[]OffChainResource, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *NovelliaStandardToken) SetResource(v []OffChainResource)`

SetResource sets Resource field to given value.


### GetCommission

`func (o *NovelliaStandardToken) GetCommission() []Commission`

GetCommission returns the Commission field if non-nil, zero value otherwise.

### GetCommissionOk

`func (o *NovelliaStandardToken) GetCommissionOk() (*[]Commission, bool)`

GetCommissionOk returns a tuple with the Commission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommission

`func (o *NovelliaStandardToken) SetCommission(v []Commission)`

SetCommission sets Commission field to given value.

### HasCommission

`func (o *NovelliaStandardToken) HasCommission() bool`

HasCommission returns a boolean if a field has been set.

### GetNativeToken

`func (o *NovelliaStandardToken) GetNativeToken() NativeToken`

GetNativeToken returns the NativeToken field if non-nil, zero value otherwise.

### GetNativeTokenOk

`func (o *NovelliaStandardToken) GetNativeTokenOk() (*NativeToken, bool)`

GetNativeTokenOk returns a tuple with the NativeToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeToken

`func (o *NovelliaStandardToken) SetNativeToken(v NativeToken)`

SetNativeToken sets NativeToken field to given value.


### GetNovelliaVersion

`func (o *NovelliaStandardToken) GetNovelliaVersion() int32`

GetNovelliaVersion returns the NovelliaVersion field if non-nil, zero value otherwise.

### GetNovelliaVersionOk

`func (o *NovelliaStandardToken) GetNovelliaVersionOk() (*int32, bool)`

GetNovelliaVersionOk returns a tuple with the NovelliaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNovelliaVersion

`func (o *NovelliaStandardToken) SetNovelliaVersion(v int32)`

SetNovelliaVersion sets NovelliaVersion field to given value.


### GetTags

`func (o *NovelliaStandardToken) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *NovelliaStandardToken) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *NovelliaStandardToken) SetTags(v []string)`

SetTags sets Tags field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


