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
/**
 * 
 * @export
 * @interface ProductMetadata
 */
export interface ProductMetadata {
    /**
     * 
     * @type {string}
     * @memberof ProductMetadata
     */
    dateListed: string;
    /**
     * 
     * @type {string}
     * @memberof ProductMetadata
     */
    dateAvailable: string;
}

export function ProductMetadataFromJSON(json: any): ProductMetadata {
    return ProductMetadataFromJSONTyped(json, false);
}

export function ProductMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateListed': json['date_listed'],
        'dateAvailable': json['date_available'],
    };
}

export function ProductMetadataToJSON(value?: ProductMetadata | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date_listed': value.dateListed,
        'date_available': value.dateAvailable,
    };
}


