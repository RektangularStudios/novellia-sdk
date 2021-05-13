# Attribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorName** | **string** | Name to give attribution to | 
**Url** | **[]string** | URLs to portfolios, websites, etc. | 
**WorkAttributed** | **string** | Description of work attributed | 

## Methods

### NewAttribution

`func NewAttribution(authorName string, url []string, workAttributed string, ) *Attribution`

NewAttribution instantiates a new Attribution object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributionWithDefaults

`func NewAttributionWithDefaults() *Attribution`

NewAttributionWithDefaults instantiates a new Attribution object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorName

`func (o *Attribution) GetAuthorName() string`

GetAuthorName returns the AuthorName field if non-nil, zero value otherwise.

### GetAuthorNameOk

`func (o *Attribution) GetAuthorNameOk() (*string, bool)`

GetAuthorNameOk returns a tuple with the AuthorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorName

`func (o *Attribution) SetAuthorName(v string)`

SetAuthorName sets AuthorName field to given value.


### GetUrl

`func (o *Attribution) GetUrl() []string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *Attribution) GetUrlOk() (*[]string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *Attribution) SetUrl(v []string)`

SetUrl sets Url field to given value.


### GetWorkAttributed

`func (o *Attribution) GetWorkAttributed() string`

GetWorkAttributed returns the WorkAttributed field if non-nil, zero value otherwise.

### GetWorkAttributedOk

`func (o *Attribution) GetWorkAttributedOk() (*string, bool)`

GetWorkAttributedOk returns a tuple with the WorkAttributed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWorkAttributed

`func (o *Attribution) SetWorkAttributed(v string)`

SetWorkAttributed sets WorkAttributed field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


