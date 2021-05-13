# Extended721Token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NativeToken** | Pointer to [**NativeToken**](NativeToken.md) |  | [optional] 
**Extension** | Pointer to **[]string** | List of extensions for parser to understand feature set. This may be empty, in which case the token is interpreted as just a 721 token. | [optional] 
**Id** | **int32** | Token number in a set. Redundant field which makes no sense for tokens without a total-order. | 
**Name** | **string** | Display name for token. | 
**Image** | **string** | Image URL without source redundancy. | 

## Methods

### NewExtended721Token

`func NewExtended721Token(id int32, name string, image string, ) *Extended721Token`

NewExtended721Token instantiates a new Extended721Token object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExtended721TokenWithDefaults

`func NewExtended721TokenWithDefaults() *Extended721Token`

NewExtended721TokenWithDefaults instantiates a new Extended721Token object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNativeToken

`func (o *Extended721Token) GetNativeToken() NativeToken`

GetNativeToken returns the NativeToken field if non-nil, zero value otherwise.

### GetNativeTokenOk

`func (o *Extended721Token) GetNativeTokenOk() (*NativeToken, bool)`

GetNativeTokenOk returns a tuple with the NativeToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeToken

`func (o *Extended721Token) SetNativeToken(v NativeToken)`

SetNativeToken sets NativeToken field to given value.

### HasNativeToken

`func (o *Extended721Token) HasNativeToken() bool`

HasNativeToken returns a boolean if a field has been set.

### GetExtension

`func (o *Extended721Token) GetExtension() []string`

GetExtension returns the Extension field if non-nil, zero value otherwise.

### GetExtensionOk

`func (o *Extended721Token) GetExtensionOk() (*[]string, bool)`

GetExtensionOk returns a tuple with the Extension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtension

`func (o *Extended721Token) SetExtension(v []string)`

SetExtension sets Extension field to given value.

### HasExtension

`func (o *Extended721Token) HasExtension() bool`

HasExtension returns a boolean if a field has been set.

### GetId

`func (o *Extended721Token) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Extended721Token) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Extended721Token) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *Extended721Token) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Extended721Token) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Extended721Token) SetName(v string)`

SetName sets Name field to given value.


### GetImage

`func (o *Extended721Token) GetImage() string`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *Extended721Token) GetImageOk() (*string, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *Extended721Token) SetImage(v string)`

SetImage sets Image field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


