# MinterInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WalletAddress** | **string** | Wallet that pays transaction fee | 
**MinterDepositAddress** | **string** | Wallet that received minted tokens | 

## Methods

### NewMinterInfo

`func NewMinterInfo(walletAddress string, minterDepositAddress string, ) *MinterInfo`

NewMinterInfo instantiates a new MinterInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMinterInfoWithDefaults

`func NewMinterInfoWithDefaults() *MinterInfo`

NewMinterInfoWithDefaults instantiates a new MinterInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWalletAddress

`func (o *MinterInfo) GetWalletAddress() string`

GetWalletAddress returns the WalletAddress field if non-nil, zero value otherwise.

### GetWalletAddressOk

`func (o *MinterInfo) GetWalletAddressOk() (*string, bool)`

GetWalletAddressOk returns a tuple with the WalletAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWalletAddress

`func (o *MinterInfo) SetWalletAddress(v string)`

SetWalletAddress sets WalletAddress field to given value.


### GetMinterDepositAddress

`func (o *MinterInfo) GetMinterDepositAddress() string`

GetMinterDepositAddress returns the MinterDepositAddress field if non-nil, zero value otherwise.

### GetMinterDepositAddressOk

`func (o *MinterInfo) GetMinterDepositAddressOk() (*string, bool)`

GetMinterDepositAddressOk returns a tuple with the MinterDepositAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinterDepositAddress

`func (o *MinterInfo) SetMinterDepositAddress(v string)`

SetMinterDepositAddress sets MinterDepositAddress field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


