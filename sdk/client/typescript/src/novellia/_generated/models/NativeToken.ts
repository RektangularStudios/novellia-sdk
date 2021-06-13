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
 * Definitions required to reference a native token
 * @export
 * @interface NativeToken
 */
export interface NativeToken {
    /**
     * On-chain policy-id
     * @type {string}
     * @memberof NativeToken
     */
    policyId: string;
    /**
     * On-chain asset-id
     * @type {string}
     * @memberof NativeToken
     */
    assetId: string;
}

export function NativeTokenFromJSON(json: any): NativeToken {
    return NativeTokenFromJSONTyped(json, false);
}

export function NativeTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): NativeToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policyId': json['policy_id'],
        'assetId': json['asset_id'],
    };
}

export function NativeTokenToJSON(value?: NativeToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'policy_id': value.policyId,
        'asset_id': value.assetId,
    };
}


