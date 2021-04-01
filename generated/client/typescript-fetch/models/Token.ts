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
 * Generalizes the data required to describe a token in a Cardano wallet.
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * Token policy ID registered on Cardano
     * @type {string}
     * @memberof Token
     */
    policyId: string;
    /**
     * Amount of token held in Cardano wallet
     * @type {number}
     * @memberof Token
     */
    amount: number;
    /**
     * Ticker as interpreted by Novellia (e.g. NVLA, ADA)
     * @type {string}
     * @memberof Token
     */
    ticker?: string;
    /**
     * Short description of token as interpreted by Novellia
     * @type {string}
     * @memberof Token
     */
    description?: string;
}

export function TokenFromJSON(json: any): Token {
    return TokenFromJSONTyped(json, false);
}

export function TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Token {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'policyId': json['policy_id'],
        'amount': json['amount'],
        'ticker': !exists(json, 'ticker') ? undefined : json['ticker'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function TokenToJSON(value?: Token | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'policy_id': value.policyId,
        'amount': value.amount,
        'ticker': value.ticker,
        'description': value.description,
    };
}


