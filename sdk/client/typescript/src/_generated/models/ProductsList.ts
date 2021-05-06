/* tslint:disable */
/* eslint-disable */
/**
 * novellia-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: contact@rektangularstudios.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Light-weight list of products for further querying
 * @export
 * @interface ProductsList
 */
export interface ProductsList {
    /**
     * List of available products
     * @type {Array<string>}
     * @memberof ProductsList
     */
    productId: Array<string>;
}

export function ProductsListFromJSON(json: any): ProductsList {
    return ProductsListFromJSONTyped(json, false);
}

export function ProductsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductsList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'productId': json['product_id'],
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
        
        'product_id': value.productId,
    };
}

