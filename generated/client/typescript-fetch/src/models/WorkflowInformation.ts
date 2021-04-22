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
 * Returns preconditions relevant to a user wanting to execute a workflow. I.e. costs.
 * @export
 * @interface WorkflowInformation
 */
export interface WorkflowInformation {
    /**
     * The lovelace cost to execute the workflow
     * @type {number}
     * @memberof WorkflowInformation
     */
    feeLovelace?: number;
}

export function WorkflowInformationFromJSON(json: any): WorkflowInformation {
    return WorkflowInformationFromJSONTyped(json, false);
}

export function WorkflowInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowInformation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'feeLovelace': !exists(json, 'fee_lovelace') ? undefined : json['fee_lovelace'],
    };
}

export function WorkflowInformationToJSON(value?: WorkflowInformation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fee_lovelace': value.feeLovelace,
    };
}

