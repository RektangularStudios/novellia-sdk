# StatusCardano

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Initialized** | **bool** | whether cardano-graphql is initialized | 
**SyncPercentage** | **float32** | cardano-graphql sync percentage, used to gauge when APIs will be available | 

## Methods

### NewStatusCardano

`func NewStatusCardano(initialized bool, syncPercentage float32, ) *StatusCardano`

NewStatusCardano instantiates a new StatusCardano object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatusCardanoWithDefaults

`func NewStatusCardanoWithDefaults() *StatusCardano`

NewStatusCardanoWithDefaults instantiates a new StatusCardano object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInitialized

`func (o *StatusCardano) GetInitialized() bool`

GetInitialized returns the Initialized field if non-nil, zero value otherwise.

### GetInitializedOk

`func (o *StatusCardano) GetInitializedOk() (*bool, bool)`

GetInitializedOk returns a tuple with the Initialized field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInitialized

`func (o *StatusCardano) SetInitialized(v bool)`

SetInitialized sets Initialized field to given value.


### GetSyncPercentage

`func (o *StatusCardano) GetSyncPercentage() float32`

GetSyncPercentage returns the SyncPercentage field if non-nil, zero value otherwise.

### GetSyncPercentageOk

`func (o *StatusCardano) GetSyncPercentageOk() (*float32, bool)`

GetSyncPercentageOk returns a tuple with the SyncPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncPercentage

`func (o *StatusCardano) SetSyncPercentage(v float32)`

SetSyncPercentage sets SyncPercentage field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


