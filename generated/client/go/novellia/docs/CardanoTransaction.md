# CardanoTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Transaction** | **string** | text of transaction file | 
**FeeLovelace** | **int32** | Cost to submit TX in lovelace (1 ADA &#x3D; 1,000,000 lovelace) | 
**Signed** | **bool** | Indicates if the transaction is signed or raw | 

## Methods

### NewCardanoTransaction

`func NewCardanoTransaction(transaction string, feeLovelace int32, signed bool, ) *CardanoTransaction`

NewCardanoTransaction instantiates a new CardanoTransaction object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCardanoTransactionWithDefaults

`func NewCardanoTransactionWithDefaults() *CardanoTransaction`

NewCardanoTransactionWithDefaults instantiates a new CardanoTransaction object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransaction

`func (o *CardanoTransaction) GetTransaction() string`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *CardanoTransaction) GetTransactionOk() (*string, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *CardanoTransaction) SetTransaction(v string)`

SetTransaction sets Transaction field to given value.


### GetFeeLovelace

`func (o *CardanoTransaction) GetFeeLovelace() int32`

GetFeeLovelace returns the FeeLovelace field if non-nil, zero value otherwise.

### GetFeeLovelaceOk

`func (o *CardanoTransaction) GetFeeLovelaceOk() (*int32, bool)`

GetFeeLovelaceOk returns a tuple with the FeeLovelace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeLovelace

`func (o *CardanoTransaction) SetFeeLovelace(v int32)`

SetFeeLovelace sets FeeLovelace field to given value.


### GetSigned

`func (o *CardanoTransaction) GetSigned() bool`

GetSigned returns the Signed field if non-nil, zero value otherwise.

### GetSignedOk

`func (o *CardanoTransaction) GetSignedOk() (*bool, bool)`

GetSignedOk returns a tuple with the Signed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigned

`func (o *CardanoTransaction) SetSigned(v bool)`

SetSigned sets Signed field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


