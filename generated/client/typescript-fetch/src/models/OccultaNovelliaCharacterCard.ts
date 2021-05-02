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
/**
 * Metadata relating to card / distribution
 * @export
 * @interface OccultaNovelliaCharacterCard
 */
export interface OccultaNovelliaCharacterCard {
    /**
     * The character number
     * @type {number}
     * @memberof OccultaNovelliaCharacterCard
     */
    number: number;
    /**
     * The set this character was released in
     * @type {string}
     * @memberof OccultaNovelliaCharacterCard
     */
    releaseSet: string;
    /**
     * Rarity of card ("Rare", "Kinda Not", "Not That Rare")
     * @type {string}
     * @memberof OccultaNovelliaCharacterCard
     */
    rarity: string;
}

export function OccultaNovelliaCharacterCardFromJSON(json: any): OccultaNovelliaCharacterCard {
    return OccultaNovelliaCharacterCardFromJSONTyped(json, false);
}

export function OccultaNovelliaCharacterCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): OccultaNovelliaCharacterCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': json['number'],
        'releaseSet': json['release_set'],
        'rarity': json['rarity'],
    };
}

export function OccultaNovelliaCharacterCardToJSON(value?: OccultaNovelliaCharacterCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'number': value.number,
        'release_set': value.releaseSet,
        'rarity': value.rarity,
    };
}


