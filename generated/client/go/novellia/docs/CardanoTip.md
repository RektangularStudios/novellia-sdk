# CardanoTip

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Block** | **int32** | Latest Cardano block | 
**Epoch** | **int32** | Latest Cardano epoch | 

## Methods

### NewCardanoTip

`func NewCardanoTip(block int32, epoch int32, ) *CardanoTip`

NewCardanoTip instantiates a new CardanoTip object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCardanoTipWithDefaults

`func NewCardanoTipWithDefaults() *CardanoTip`

NewCardanoTipWithDefaults instantiates a new CardanoTip object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlock

`func (o *CardanoTip) GetBlock() int32`

GetBlock returns the Block field if non-nil, zero value otherwise.

### GetBlockOk

`func (o *CardanoTip) GetBlockOk() (*int32, bool)`

GetBlockOk returns a tuple with the Block field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlock

`func (o *CardanoTip) SetBlock(v int32)`

SetBlock sets Block field to given value.


### GetEpoch

`func (o *CardanoTip) GetEpoch() int32`

GetEpoch returns the Epoch field if non-nil, zero value otherwise.

### GetEpochOk

`func (o *CardanoTip) GetEpochOk() (*int32, bool)`

GetEpochOk returns a tuple with the Epoch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEpoch

`func (o *CardanoTip) SetEpoch(v int32)`

SetEpoch sets Epoch field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


