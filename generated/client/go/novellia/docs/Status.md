# Status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cardano** | [**StatusCardano**](Status_cardano.md) |  | 
**Maintenance** | **bool** | kill-switch to tell users that the backend is not working correctly / is under maintenance | 
**Status** | **string** | Status string. \&quot;UP\&quot; if everything is fine. | 

## Methods

### NewStatus

`func NewStatus(cardano StatusCardano, maintenance bool, status string, ) *Status`

NewStatus instantiates a new Status object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatusWithDefaults

`func NewStatusWithDefaults() *Status`

NewStatusWithDefaults instantiates a new Status object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardano

`func (o *Status) GetCardano() StatusCardano`

GetCardano returns the Cardano field if non-nil, zero value otherwise.

### GetCardanoOk

`func (o *Status) GetCardanoOk() (*StatusCardano, bool)`

GetCardanoOk returns a tuple with the Cardano field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardano

`func (o *Status) SetCardano(v StatusCardano)`

SetCardano sets Cardano field to given value.


### GetMaintenance

`func (o *Status) GetMaintenance() bool`

GetMaintenance returns the Maintenance field if non-nil, zero value otherwise.

### GetMaintenanceOk

`func (o *Status) GetMaintenanceOk() (*bool, bool)`

GetMaintenanceOk returns a tuple with the Maintenance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintenance

`func (o *Status) SetMaintenance(v bool)`

SetMaintenance sets Maintenance field to given value.


### GetStatus

`func (o *Status) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Status) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Status) SetStatus(v string)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


