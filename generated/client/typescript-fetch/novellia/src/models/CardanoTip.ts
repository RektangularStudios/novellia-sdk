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
 * Cardano chain tip information
 * @export
 * @interface CardanoTip
 */
export interface CardanoTip {
    /**
     * Latest Cardano block
     * @type {number}
     * @memberof CardanoTip
     */
    block: number;
    /**
     * Latest Cardano epoch
     * @type {number}
     * @memberof CardanoTip
     */
    epoch: number;
}

export function CardanoTipFromJSON(json: any): CardanoTip {
    return CardanoTipFromJSONTyped(json, false);
}

export function CardanoTipFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardanoTip {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'block': json['block'],
        'epoch': json['epoch'],
    };
}

export function CardanoTipToJSON(value?: CardanoTip | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'block': value.block,
        'epoch': value.epoch,
    };
}


