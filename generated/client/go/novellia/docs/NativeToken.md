# NativeToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyId** | **string** | On-chain policy-id | 
**AssetId** | **string** | On-chain asset-id | 

## Methods

### NewNativeToken

`func NewNativeToken(policyId string, assetId string, ) *NativeToken`

NewNativeToken instantiates a new NativeToken object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNativeTokenWithDefaults

`func NewNativeTokenWithDefaults() *NativeToken`

NewNativeTokenWithDefaults instantiates a new NativeToken object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicyId

`func (o *NativeToken) GetPolicyId() string`

GetPolicyId returns the PolicyId field if non-nil, zero value otherwise.

### GetPolicyIdOk

`func (o *NativeToken) GetPolicyIdOk() (*string, bool)`

GetPolicyIdOk returns a tuple with the PolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyId

`func (o *NativeToken) SetPolicyId(v string)`

SetPolicyId sets PolicyId field to given value.


### GetAssetId

`func (o *NativeToken) GetAssetId() string`

GetAssetId returns the AssetId field if non-nil, zero value otherwise.

### GetAssetIdOk

`func (o *NativeToken) GetAssetIdOk() (*string, bool)`

GetAssetIdOk returns a tuple with the AssetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssetId

`func (o *NativeToken) SetAssetId(v string)`

SetAssetId sets AssetId field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


