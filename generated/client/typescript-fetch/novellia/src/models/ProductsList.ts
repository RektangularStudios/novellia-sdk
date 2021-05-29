/* tslint:disable */
/* eslint-disable */
/**
 * novellia
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.9.0
 * Contact: contact@rektangularstudios.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ProductListElement,
    ProductListElementFromJSON,
    ProductListElementFromJSONTyped,
    ProductListElementToJSON,
} from './';

/**
 * Light-weight list of products for further querying
 * @export
 * @interface ProductsList
 */
export interface ProductsList {
    /**
     * List of available products
     * @type {Array<ProductListElement>}
     * @memberof ProductsList
     */
    products: Array<ProductListElement>;
}

export function ProductsListFromJSON(json: any): ProductsList {
    return ProductsListFromJSONTyped(json, false);
}

export function ProductsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductsList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'products': ((json['products'] as Array<any>).map(ProductListElementFromJSON)),
    };
}

export function ProductsListToJSON(value?: ProductsList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'products': ((value.products as Array<any>).map(ProductListElementToJSON)),
    };
}


