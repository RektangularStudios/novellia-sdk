/* tslint:disable */
/* eslint-disable */
/**
 * novellia
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: contact@rektangularstudios.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    OccultaNovelliaCharacterCard,
    OccultaNovelliaCharacterCardFromJSON,
    OccultaNovelliaCharacterCardFromJSONTyped,
    OccultaNovelliaCharacterCardToJSON,
    OccultaNovelliaCharacterProgression,
    OccultaNovelliaCharacterProgressionFromJSON,
    OccultaNovelliaCharacterProgressionFromJSONTyped,
    OccultaNovelliaCharacterProgressionToJSON,
    OccultaNovelliaCharacterStats,
    OccultaNovelliaCharacterStatsFromJSON,
    OccultaNovelliaCharacterStatsFromJSONTyped,
    OccultaNovelliaCharacterStatsToJSON,
} from './';

/**
 * Model for an Occulta Novellia character
 * @export
 * @interface OccultaNovelliaCharacter
 */
export interface OccultaNovelliaCharacter {
    /**
     * Specification version for parsing the resource
     * @type {number}
     * @memberof OccultaNovelliaCharacter
     */
    occultaNovelliaVersion: number;
    /**
     * Character name
     * @type {string}
     * @memberof OccultaNovelliaCharacter
     */
    name: string;
    /**
     * 
     * @type {OccultaNovelliaCharacterCard}
     * @memberof OccultaNovelliaCharacter
     */
    card: OccultaNovelliaCharacterCard;
    /**
     * 
     * @type {OccultaNovelliaCharacterProgression}
     * @memberof OccultaNovelliaCharacter
     */
    progression: OccultaNovelliaCharacterProgression;
    /**
     * 
     * @type {OccultaNovelliaCharacterStats}
     * @memberof OccultaNovelliaCharacter
     */
    stats: OccultaNovelliaCharacterStats;
    /**
     * List of attribute strings relating to character abilities, faction, types, etc.
     * @type {Array<string>}
     * @memberof OccultaNovelliaCharacter
     */
    attributes: Array<string>;
    /**
     * Description of character
     * @type {string}
     * @memberof OccultaNovelliaCharacter
     */
    description: string;
}

export function OccultaNovelliaCharacterFromJSON(json: any): OccultaNovelliaCharacter {
    return OccultaNovelliaCharacterFromJSONTyped(json, false);
}

export function OccultaNovelliaCharacterFromJSONTyped(json: any, ignoreDiscriminator: boolean): OccultaNovelliaCharacter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'occultaNovelliaVersion': json['occulta_novellia_version'],
        'name': json['name'],
        'card': OccultaNovelliaCharacterCardFromJSON(json['card']),
        'progression': OccultaNovelliaCharacterProgressionFromJSON(json['progression']),
        'stats': OccultaNovelliaCharacterStatsFromJSON(json['stats']),
        'attributes': json['attributes'],
        'description': json['description'],
    };
}

export function OccultaNovelliaCharacterToJSON(value?: OccultaNovelliaCharacter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'occulta_novellia_version': value.occultaNovelliaVersion,
        'name': value.name,
        'card': OccultaNovelliaCharacterCardToJSON(value.card),
        'progression': OccultaNovelliaCharacterProgressionToJSON(value.progression),
        'stats': OccultaNovelliaCharacterStatsToJSON(value.stats),
        'attributes': value.attributes,
        'description': value.description,
    };
}

