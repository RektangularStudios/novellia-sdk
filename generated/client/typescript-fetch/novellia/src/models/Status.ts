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
    StatusCardano,
    StatusCardanoFromJSON,
    StatusCardanoFromJSONTyped,
    StatusCardanoToJSON,
} from './';

/**
 * Status of microservice, indicating service availabilities
 * @export
 * @interface Status
 */
export interface Status {
    /**
     * 
     * @type {StatusCardano}
     * @memberof Status
     */
    cardano: StatusCardano;
    /**
     * kill-switch to tell users that the backend is not working correctly / is under maintenance
     * @type {boolean}
     * @memberof Status
     */
    maintenance: boolean;
    /**
     * Status string. "UP" if everything is fine.
     * @type {string}
     * @memberof Status
     */
    status: string;
    /**
     * List of errors for bad statuses
     * @type {Array<string>}
     * @memberof Status
     */
    errors?: Array<string>;
}

export function StatusFromJSON(json: any): Status {
    return StatusFromJSONTyped(json, false);
}

export function StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): Status {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardano': StatusCardanoFromJSON(json['cardano']),
        'maintenance': json['maintenance'],
        'status': json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function StatusToJSON(value?: Status | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cardano': StatusCardanoToJSON(value.cardano),
        'maintenance': value.maintenance,
        'status': value.status,
        'errors': value.errors,
    };
}


