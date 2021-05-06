/* tslint:disable */
/* eslint-disable */
/**
 * novellia-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
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
 * @interface StatusCardano
 */
export interface StatusCardano {
    /**
     * whether cardano-graphql is initialized
     * @type {boolean}
     * @memberof StatusCardano
     */
    initialized: boolean;
    /**
     * cardano-graphql sync percentage, used to gauge when APIs will be available
     * @type {number}
     * @memberof StatusCardano
     */
    syncPercentage: number;
}

export function StatusCardanoFromJSON(json: any): StatusCardano {
    return StatusCardanoFromJSONTyped(json, false);
}

export function StatusCardanoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatusCardano {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'initialized': json['initialized'],
        'syncPercentage': json['sync_percentage'],
    };
}

export function StatusCardanoToJSON(value?: StatusCardano | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'initialized': value.initialized,
        'sync_percentage': value.syncPercentage,
    };
}


