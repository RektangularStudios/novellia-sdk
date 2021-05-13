# OccultaNovelliaCharacter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OccultaNovelliaVersion** | **int32** | Specification version for parsing the resource | 
**Name** | **string** | Character name | 
**Card** | [**OccultaNovelliaCharacterCard**](OccultaNovelliaCharacter_card.md) |  | 
**Progression** | [**OccultaNovelliaCharacterProgression**](OccultaNovelliaCharacter_progression.md) |  | 
**Stats** | [**OccultaNovelliaCharacterStats**](OccultaNovelliaCharacter_stats.md) |  | 
**Attributes** | **[]string** | List of attribute strings relating to character abilities, faction, types, etc. | 
**Description** | **string** | Description of character | 

## Methods

### NewOccultaNovelliaCharacter

`func NewOccultaNovelliaCharacter(occultaNovelliaVersion int32, name string, card OccultaNovelliaCharacterCard, progression OccultaNovelliaCharacterProgression, stats OccultaNovelliaCharacterStats, attributes []string, description string, ) *OccultaNovelliaCharacter`

NewOccultaNovelliaCharacter instantiates a new OccultaNovelliaCharacter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOccultaNovelliaCharacterWithDefaults

`func NewOccultaNovelliaCharacterWithDefaults() *OccultaNovelliaCharacter`

NewOccultaNovelliaCharacterWithDefaults instantiates a new OccultaNovelliaCharacter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOccultaNovelliaVersion

`func (o *OccultaNovelliaCharacter) GetOccultaNovelliaVersion() int32`

GetOccultaNovelliaVersion returns the OccultaNovelliaVersion field if non-nil, zero value otherwise.

### GetOccultaNovelliaVersionOk

`func (o *OccultaNovelliaCharacter) GetOccultaNovelliaVersionOk() (*int32, bool)`

GetOccultaNovelliaVersionOk returns a tuple with the OccultaNovelliaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccultaNovelliaVersion

`func (o *OccultaNovelliaCharacter) SetOccultaNovelliaVersion(v int32)`

SetOccultaNovelliaVersion sets OccultaNovelliaVersion field to given value.


### GetName

`func (o *OccultaNovelliaCharacter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OccultaNovelliaCharacter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OccultaNovelliaCharacter) SetName(v string)`

SetName sets Name field to given value.


### GetCard

`func (o *OccultaNovelliaCharacter) GetCard() OccultaNovelliaCharacterCard`

GetCard returns the Card field if non-nil, zero value otherwise.

### GetCardOk

`func (o *OccultaNovelliaCharacter) GetCardOk() (*OccultaNovelliaCharacterCard, bool)`

GetCardOk returns a tuple with the Card field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCard

`func (o *OccultaNovelliaCharacter) SetCard(v OccultaNovelliaCharacterCard)`

SetCard sets Card field to given value.


### GetProgression

`func (o *OccultaNovelliaCharacter) GetProgression() OccultaNovelliaCharacterProgression`

GetProgression returns the Progression field if non-nil, zero value otherwise.

### GetProgressionOk

`func (o *OccultaNovelliaCharacter) GetProgressionOk() (*OccultaNovelliaCharacterProgression, bool)`

GetProgressionOk returns a tuple with the Progression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgression

`func (o *OccultaNovelliaCharacter) SetProgression(v OccultaNovelliaCharacterProgression)`

SetProgression sets Progression field to given value.


### GetStats

`func (o *OccultaNovelliaCharacter) GetStats() OccultaNovelliaCharacterStats`

GetStats returns the Stats field if non-nil, zero value otherwise.

### GetStatsOk

`func (o *OccultaNovelliaCharacter) GetStatsOk() (*OccultaNovelliaCharacterStats, bool)`

GetStatsOk returns a tuple with the Stats field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStats

`func (o *OccultaNovelliaCharacter) SetStats(v OccultaNovelliaCharacterStats)`

SetStats sets Stats field to given value.


### GetAttributes

`func (o *OccultaNovelliaCharacter) GetAttributes() []string`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *OccultaNovelliaCharacter) GetAttributesOk() (*[]string, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *OccultaNovelliaCharacter) SetAttributes(v []string)`

SetAttributes sets Attributes field to given value.


### GetDescription

`func (o *OccultaNovelliaCharacter) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *OccultaNovelliaCharacter) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *OccultaNovelliaCharacter) SetDescription(v string)`

SetDescription sets Description field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


