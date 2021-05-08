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
 * @interface ProductMarket
 */
export interface ProductMarket {
    /**
     * 
     * @type {string}
     * @memberof ProductMarket
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProductMarket
     */
    marketId: string;
    /**
     * Market description. This can be markdown.
     * @type {string}
     * @memberof ProductMarket
     */
    description: string;
}

export function ProductMarketFromJSON(json: any): ProductMarket {
    return ProductMarketFromJSONTyped(json, false);
}

export function ProductMarketFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMarket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'marketId': json['market_id'],
        'description': json['description'],
    };
}

export function ProductMarketToJSON(value?: ProductMarket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'market_id': value.marketId,
        'description': value.description,
    };
}


