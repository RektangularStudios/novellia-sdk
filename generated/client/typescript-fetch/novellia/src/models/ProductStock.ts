/* tslint:disable */
/* eslint-disable */
/**
 * novellia
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: contact@rektangularstudios.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProductStock
 */
export interface ProductStock {
    /**
     * 
     * @type {number}
     * @memberof ProductStock
     */
    available: number;
    /**
     * 
     * @type {number}
     * @memberof ProductStock
     */
    totalSupply: number;
}

export function ProductStockFromJSON(json: any): ProductStock {
    return ProductStockFromJSONTyped(json, false);
}

export function ProductStockFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductStock {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available': json['available'],
        'totalSupply': json['total_supply'],
    };
}

export function ProductStockToJSON(value?: ProductStock | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available': value.available,
        'total_supply': value.totalSupply,
    };
}

