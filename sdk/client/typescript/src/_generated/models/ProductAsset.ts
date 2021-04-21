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
 * Resources for detailed view asset with specific loader
 * @export
 * @interface ProductAsset
 */
export interface ProductAsset {
    /**
     * URLs pointing to detailed asset for detailed view. Each link should point to the same file.
     * @type {Array<string>}
     * @memberof ProductAsset
     */
    urls: Array<string>;
    /**
     * Asset loader for linked assets file
     * @type {string}
     * @memberof ProductAsset
     */
    loader: string;
}

export function ProductAssetFromJSON(json: any): ProductAsset {
    return ProductAssetFromJSONTyped(json, false);
}

export function ProductAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'urls': json['urls'],
        'loader': json['loader'],
    };
}

export function ProductAssetToJSON(value?: ProductAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'urls': value.urls,
        'loader': value.loader,
    };
}

