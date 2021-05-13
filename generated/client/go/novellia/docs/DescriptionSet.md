# DescriptionSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Short** | **string** | A short description makes a good header | 
**Long** | **string** | A long description makes a good paragraph body. Supports Markdown. | 

## Methods

### NewDescriptionSet

`func NewDescriptionSet(short string, long string, ) *DescriptionSet`

NewDescriptionSet instantiates a new DescriptionSet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDescriptionSetWithDefaults

`func NewDescriptionSetWithDefaults() *DescriptionSet`

NewDescriptionSetWithDefaults instantiates a new DescriptionSet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShort

`func (o *DescriptionSet) GetShort() string`

GetShort returns the Short field if non-nil, zero value otherwise.

### GetShortOk

`func (o *DescriptionSet) GetShortOk() (*string, bool)`

GetShortOk returns a tuple with the Short field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShort

`func (o *DescriptionSet) SetShort(v string)`

SetShort sets Short field to given value.


### GetLong

`func (o *DescriptionSet) GetLong() string`

GetLong returns the Long field if non-nil, zero value otherwise.

### GetLongOk

`func (o *DescriptionSet) GetLongOk() (*string, bool)`

GetLongOk returns a tuple with the Long field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLong

`func (o *DescriptionSet) SetLong(v string)`

SetLong sets Long field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


