# Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pricing** | [**ProductPricing**](Product_pricing.md) |  | 
**Organization** | [**ProductOrganization**](Product_organization.md) |  | 
**Market** | [**ProductMarket**](Product_market.md) |  | 
**Stock** | [**ProductStock**](Product_stock.md) |  | 
**Metadata** | [**ProductMetadata**](Product_metadata.md) |  | 
**Product** | [**ProductProduct**](Product_product.md) |  | 
**Attribution** | Pointer to [**[]Attribution**](Attribution.md) | List of entities to give attribution to for product | [optional] 

## Methods

### NewProduct

`func NewProduct(pricing ProductPricing, organization ProductOrganization, market ProductMarket, stock ProductStock, metadata ProductMetadata, product ProductProduct, ) *Product`

NewProduct instantiates a new Product object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductWithDefaults

`func NewProductWithDefaults() *Product`

NewProductWithDefaults instantiates a new Product object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPricing

`func (o *Product) GetPricing() ProductPricing`

GetPricing returns the Pricing field if non-nil, zero value otherwise.

### GetPricingOk

`func (o *Product) GetPricingOk() (*ProductPricing, bool)`

GetPricingOk returns a tuple with the Pricing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPricing

`func (o *Product) SetPricing(v ProductPricing)`

SetPricing sets Pricing field to given value.


### GetOrganization

`func (o *Product) GetOrganization() ProductOrganization`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *Product) GetOrganizationOk() (*ProductOrganization, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *Product) SetOrganization(v ProductOrganization)`

SetOrganization sets Organization field to given value.


### GetMarket

`func (o *Product) GetMarket() ProductMarket`

GetMarket returns the Market field if non-nil, zero value otherwise.

### GetMarketOk

`func (o *Product) GetMarketOk() (*ProductMarket, bool)`

GetMarketOk returns a tuple with the Market field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarket

`func (o *Product) SetMarket(v ProductMarket)`

SetMarket sets Market field to given value.


### GetStock

`func (o *Product) GetStock() ProductStock`

GetStock returns the Stock field if non-nil, zero value otherwise.

### GetStockOk

`func (o *Product) GetStockOk() (*ProductStock, bool)`

GetStockOk returns a tuple with the Stock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStock

`func (o *Product) SetStock(v ProductStock)`

SetStock sets Stock field to given value.


### GetMetadata

`func (o *Product) GetMetadata() ProductMetadata`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *Product) GetMetadataOk() (*ProductMetadata, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *Product) SetMetadata(v ProductMetadata)`

SetMetadata sets Metadata field to given value.


### GetProduct

`func (o *Product) GetProduct() ProductProduct`

GetProduct returns the Product field if non-nil, zero value otherwise.

### GetProductOk

`func (o *Product) GetProductOk() (*ProductProduct, bool)`

GetProductOk returns a tuple with the Product field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduct

`func (o *Product) SetProduct(v ProductProduct)`

SetProduct sets Product field to given value.


### GetAttribution

`func (o *Product) GetAttribution() []Attribution`

GetAttribution returns the Attribution field if non-nil, zero value otherwise.

### GetAttributionOk

`func (o *Product) GetAttributionOk() (*[]Attribution, bool)`

GetAttributionOk returns a tuple with the Attribution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribution

`func (o *Product) SetAttribution(v []Attribution)`

SetAttribution sets Attribution field to given value.

### HasAttribution

`func (o *Product) HasAttribution() bool`

HasAttribution returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


