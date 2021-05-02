/* tslint:disable */
/* eslint-disable */
/**
 * novellia-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.6.0
 * Contact: contact@rektangularstudios.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Commission,
    CommissionFromJSON,
    CommissionFromJSONTyped,
    CommissionToJSON,
    DescriptionSet,
    DescriptionSetFromJSON,
    DescriptionSetFromJSONTyped,
    DescriptionSetToJSON,
    OffChainResource,
    OffChainResourceFromJSON,
    OffChainResourceFromJSONTyped,
    OffChainResourceToJSON,
} from './';

/**
 * Product listed on Novelia without a token
 * @export
 * @interface NovelliaProduct
 */
export interface NovelliaProduct {
    /**
     * Attribution of rights to product.
     * @type {string}
     * @memberof NovelliaProduct
     */
    copyright: string;
    /**
     * List of publishers or entities involved in token creation. Useful for onlookers to determine token origin.
     * @type {Array<string>}
     * @memberof NovelliaProduct
     */
    publisher: Array<string>;
    /**
     * Iteration in update sequence for product.
     * @type {number}
     * @memberof NovelliaProduct
     */
    version: number;
    /**
     * Display name for token.
     * @type {string}
     * @memberof NovelliaProduct
     */
    name: string;
    /**
     * Tags for sorting and filtering. "nsfw" indicates NSFW content
     * @type {Array<string>}
     * @memberof NovelliaProduct
     */
    tags: Array<string>;
    /**
     * 
     * @type {Array<Commission>}
     * @memberof NovelliaProduct
     */
    commission?: Array<Commission>;
    /**
     * 
     * @type {DescriptionSet}
     * @memberof NovelliaProduct
     */
    description: DescriptionSet;
    /**
     * 
     * @type {Array<OffChainResource>}
     * @memberof NovelliaProduct
     */
    resource: Array<OffChainResource>;
}

export function NovelliaProductFromJSON(json: any): NovelliaProduct {
    return NovelliaProductFromJSONTyped(json, false);
}

export function NovelliaProductFromJSONTyped(json: any, ignoreDiscriminator: boolean): NovelliaProduct {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyright': json['copyright'],
        'publisher': json['publisher'],
        'version': json['version'],
        'name': json['name'],
        'tags': json['tags'],
        'commission': !exists(json, 'commission') ? undefined : ((json['commission'] as Array<any>).map(CommissionFromJSON)),
        'description': DescriptionSetFromJSON(json['description']),
        'resource': ((json['resource'] as Array<any>).map(OffChainResourceFromJSON)),
    };
}

export function NovelliaProductToJSON(value?: NovelliaProduct | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyright': value.copyright,
        'publisher': value.publisher,
        'version': value.version,
        'name': value.name,
        'tags': value.tags,
        'commission': value.commission === undefined ? undefined : ((value.commission as Array<any>).map(CommissionToJSON)),
        'description': DescriptionSetToJSON(value.description),
        'resource': ((value.resource as Array<any>).map(OffChainResourceToJSON)),
    };
}


