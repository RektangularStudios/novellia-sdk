# WorkflowInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeeLovelace** | Pointer to **int32** | The lovelace cost to execute the workflow | [optional] 

## Methods

### NewWorkflowInformation

`func NewWorkflowInformation() *WorkflowInformation`

NewWorkflowInformation instantiates a new WorkflowInformation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkflowInformationWithDefaults

`func NewWorkflowInformationWithDefaults() *WorkflowInformation`

NewWorkflowInformationWithDefaults instantiates a new WorkflowInformation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFeeLovelace

`func (o *WorkflowInformation) GetFeeLovelace() int32`

GetFeeLovelace returns the FeeLovelace field if non-nil, zero value otherwise.

### GetFeeLovelaceOk

`func (o *WorkflowInformation) GetFeeLovelaceOk() (*int32, bool)`

GetFeeLovelaceOk returns a tuple with the FeeLovelace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeLovelace

`func (o *WorkflowInformation) SetFeeLovelace(v int32)`

SetFeeLovelace sets FeeLovelace field to given value.

### HasFeeLovelace

`func (o *WorkflowInformation) HasFeeLovelace() bool`

HasFeeLovelace returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


