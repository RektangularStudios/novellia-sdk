# OccultaNovelliaCharacterStats

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Health** | **int32** | Damage sustained before dying | 
**Attack** | **int32** | Multiplier for damage dealt as defined by attribute moves | 
**Move** | **int32** | Action points cost per unit of movement | 
**Slots** | **int32** | Slots used by character when added to a squad | 

## Methods

### NewOccultaNovelliaCharacterStats

`func NewOccultaNovelliaCharacterStats(health int32, attack int32, move int32, slots int32, ) *OccultaNovelliaCharacterStats`

NewOccultaNovelliaCharacterStats instantiates a new OccultaNovelliaCharacterStats object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOccultaNovelliaCharacterStatsWithDefaults

`func NewOccultaNovelliaCharacterStatsWithDefaults() *OccultaNovelliaCharacterStats`

NewOccultaNovelliaCharacterStatsWithDefaults instantiates a new OccultaNovelliaCharacterStats object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHealth

`func (o *OccultaNovelliaCharacterStats) GetHealth() int32`

GetHealth returns the Health field if non-nil, zero value otherwise.

### GetHealthOk

`func (o *OccultaNovelliaCharacterStats) GetHealthOk() (*int32, bool)`

GetHealthOk returns a tuple with the Health field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealth

`func (o *OccultaNovelliaCharacterStats) SetHealth(v int32)`

SetHealth sets Health field to given value.


### GetAttack

`func (o *OccultaNovelliaCharacterStats) GetAttack() int32`

GetAttack returns the Attack field if non-nil, zero value otherwise.

### GetAttackOk

`func (o *OccultaNovelliaCharacterStats) GetAttackOk() (*int32, bool)`

GetAttackOk returns a tuple with the Attack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttack

`func (o *OccultaNovelliaCharacterStats) SetAttack(v int32)`

SetAttack sets Attack field to given value.


### GetMove

`func (o *OccultaNovelliaCharacterStats) GetMove() int32`

GetMove returns the Move field if non-nil, zero value otherwise.

### GetMoveOk

`func (o *OccultaNovelliaCharacterStats) GetMoveOk() (*int32, bool)`

GetMoveOk returns a tuple with the Move field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMove

`func (o *OccultaNovelliaCharacterStats) SetMove(v int32)`

SetMove sets Move field to given value.


### GetSlots

`func (o *OccultaNovelliaCharacterStats) GetSlots() int32`

GetSlots returns the Slots field if non-nil, zero value otherwise.

### GetSlotsOk

`func (o *OccultaNovelliaCharacterStats) GetSlotsOk() (*int32, bool)`

GetSlotsOk returns a tuple with the Slots field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlots

`func (o *OccultaNovelliaCharacterStats) SetSlots(v int32)`

SetSlots sets Slots field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


