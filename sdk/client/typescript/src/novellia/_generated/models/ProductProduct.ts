/* tslint:disable */
/* eslint-disable */
/**
 * novellia
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.9.1
 * Contact: contact@rektangularstudios.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Extended721Token,
    Extended721TokenFromJSON,
    Extended721TokenFromJSONTyped,
    Extended721TokenToJSON,
    NativeToken,
    NativeTokenFromJSON,
    NativeTokenFromJSONTyped,
    NativeTokenToJSON,
    NovelliaProduct,
    NovelliaProductFromJSON,
    NovelliaProductFromJSONTyped,
    NovelliaProductToJSON,
    NovelliaStandardToken,
    NovelliaStandardTokenFromJSON,
    NovelliaStandardTokenFromJSONTyped,
    NovelliaStandardTokenToJSON,
} from './';

/**
 * Immutable 
 * @export
 * @interface ProductProduct
 */
export interface ProductProduct {
    /**
     * 
     * @type {Extended721Token}
     * @memberof ProductProduct
     */
    extended721Token?: Extended721Token;
    /**
     * 
     * @type {NovelliaStandardToken}
     * @memberof ProductProduct
     */
    novelliaStandardToken?: NovelliaStandardToken;
    /**
     * 
     * @type {NativeToken}
     * @memberof ProductProduct
     */
    nativeToken?: NativeToken;
    /**
     * 
     * @type {NovelliaProduct}
     * @memberof ProductProduct
     */
    novelliaProduct?: NovelliaProduct;
    /**
     * Unique identifier of product
     * @type {string}
     * @memberof ProductProduct
     */
    productId?: string;
}

export function ProductProductFromJSON(json: any): ProductProduct {
    return ProductProductFromJSONTyped(json, false);
}

export function ProductProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extended721Token': !exists(json, 'extended_721_token') ? undefined : Extended721TokenFromJSON(json['extended_721_token']),
        'novelliaStandardToken': !exists(json, 'novellia_standard_token') ? undefined : NovelliaStandardTokenFromJSON(json['novellia_standard_token']),
        'nativeToken': !exists(json, 'native_token') ? undefined : NativeTokenFromJSON(json['native_token']),
        'novelliaProduct': !exists(json, 'novellia_product') ? undefined : NovelliaProductFromJSON(json['novellia_product']),
        'productId': !exists(json, 'product_id') ? undefined : json['product_id'],
    };
}

export function ProductProductToJSON(value?: ProductProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extended_721_token': Extended721TokenToJSON(value.extended721Token),
        'novellia_standard_token': NovelliaStandardTokenToJSON(value.novelliaStandardToken),
        'native_token': NativeTokenToJSON(value.nativeToken),
        'novellia_product': NovelliaProductToJSON(value.novelliaProduct),
        'product_id': value.productId,
    };
}


