/* tslint:disable */
/* eslint-disable */
/**
 * novellia
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.9.2
 * Contact: contact@rektangularstudios.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Set of descriptions
 * @export
 * @interface DescriptionSet
 */
export interface DescriptionSet {
    /**
     * A short description makes a good header
     * @type {string}
     * @memberof DescriptionSet
     */
    _short: string;
    /**
     * A long description makes a good paragraph body. Supports Markdown.
     * @type {string}
     * @memberof DescriptionSet
     */
    _long: string;
}

export function DescriptionSetFromJSON(json: any): DescriptionSet {
    return DescriptionSetFromJSONTyped(json, false);
}

export function DescriptionSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescriptionSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_short': json['short'],
        '_long': json['long'],
    };
}

export function DescriptionSetToJSON(value?: DescriptionSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'short': value._short,
        'long': value._long,
    };
}


