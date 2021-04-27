/* tslint:disable */
/* eslint-disable */
/**
 * novellia-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.4.0
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
    NativeToken,
    NativeTokenFromJSON,
    NativeTokenFromJSONTyped,
    NativeTokenToJSON,
    OffChainResource,
    OffChainResourceFromJSON,
    OffChainResourceFromJSONTyped,
    OffChainResourceToJSON,
} from './';

/**
 * Novellia Token Standard on-chain metadata
 * @export
 * @interface NovelliaStandardToken
 */
export interface NovelliaStandardToken {
    /**
     * Attribution of rights.
     * @type {string}
     * @memberof NovelliaStandardToken
     */
    copyright: string;
    /**
     * List of publishers or entities involved in token creation. Useful for onlookers to determine token origin. These can be URLs.
     * @type {Array<string>}
     * @memberof NovelliaStandardToken
     */
    publisher: Array<string>;
    /**
     * Token version. May have future use such as for clients optionally using later metadata iterations.
     * @type {number}
     * @memberof NovelliaStandardToken
     */
    version: number;
    /**
     * List of extensions for parser to understand feature set. This may be empty, in which case the token is interpreted as just a 721 token.
     * @type {Array<string>}
     * @memberof NovelliaStandardToken
     */
    extension: Array<string>;
    /**
     * Token number in a set. Redundant field which makes no sense for tokens without a total-order.
     * @type {number}
     * @memberof NovelliaStandardToken
     */
    id: number;
    /**
     * Display name for token.
     * @type {string}
     * @memberof NovelliaStandardToken
     */
    name: string;
    /**
     * Image URL without source redundancy.
     * @type {string}
     * @memberof NovelliaStandardToken
     */
    image: string;
    /**
     * 
     * @type {DescriptionSet}
     * @memberof NovelliaStandardToken
     */
    description: DescriptionSet;
    /**
     * 
     * @type {Array<OffChainResource>}
     * @memberof NovelliaStandardToken
     */
    resource: Array<OffChainResource>;
    /**
     * 
     * @type {Array<Commission>}
     * @memberof NovelliaStandardToken
     */
    commission?: Array<Commission>;
    /**
     * 
     * @type {NativeToken}
     * @memberof NovelliaStandardToken
     */
    nativeToken: NativeToken;
    /**
     * Identifies the version of the specification in use.
     * @type {number}
     * @memberof NovelliaStandardToken
     */
    novelliaVersion: number;
    /**
     * Tags for sorting and filtering. "nsfw" indicates NSFW content
     * @type {Array<string>}
     * @memberof NovelliaStandardToken
     */
    tags: Array<string>;
}

export function NovelliaStandardTokenFromJSON(json: any): NovelliaStandardToken {
    return NovelliaStandardTokenFromJSONTyped(json, false);
}

export function NovelliaStandardTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): NovelliaStandardToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyright': json['copyright'],
        'publisher': json['publisher'],
        'version': json['version'],
        'extension': json['extension'],
        'id': json['id'],
        'name': json['name'],
        'image': json['image'],
        'description': DescriptionSetFromJSON(json['description']),
        'resource': ((json['resource'] as Array<any>).map(OffChainResourceFromJSON)),
        'commission': !exists(json, 'commission') ? undefined : ((json['commission'] as Array<any>).map(CommissionFromJSON)),
        'nativeToken': NativeTokenFromJSON(json['native_token']),
        'novelliaVersion': json['novellia_version'],
        'tags': json['tags'],
    };
}

export function NovelliaStandardTokenToJSON(value?: NovelliaStandardToken | null): any {
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
        'extension': value.extension,
        'id': value.id,
        'name': value.name,
        'image': value.image,
        'description': DescriptionSetToJSON(value.description),
        'resource': ((value.resource as Array<any>).map(OffChainResourceToJSON)),
        'commission': value.commission === undefined ? undefined : ((value.commission as Array<any>).map(CommissionToJSON)),
        'native_token': NativeTokenToJSON(value.nativeToken),
        'novellia_version': value.novelliaVersion,
        'tags': value.tags,
    };
}


