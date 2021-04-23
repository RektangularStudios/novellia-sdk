/* tslint:disable */
/* eslint-disable */
/**
 * novellia-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: contact@rektangularstudios.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Market for the product, under the organization
 * @export
 * @interface ProductMarket
 */
export interface ProductMarket {
    /**
     * Readable name of market
     * @type {string}
     * @memberof ProductMarket
     */
    name: string;
    /**
     * Unique identifier of market
     * @type {number}
     * @memberof ProductMarket
     */
    marketId: number;
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
    };
}


