/* tslint:disable */
/* eslint-disable */
/**
 * novellia
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.9.2
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
     * Token asset ID registered on Cardano
     * @type {string}
     * @memberof Token
     */
    nativeTokenId: string;
    /**
     * Amount of token held in Cardano wallet (in discrete units, i.e. lovelace)
     * @type {number}
     * @memberof Token
     */
    amount?: number;
    /**
     * Name or ticker as interpreted by Novellia (e.g. NVLA, ADA)
     * @type {string}
     * @memberof Token
     */
    name?: string;
    /**
     * Short description of token as interpreted by Novellia
     * @type {string}
     * @memberof Token
     */
    description?: string;
    /**
     * Onchain metadata attached to the initial mint TX
     * @type {string}
     * @memberof Token
     */
    initialMintTxMetadata?: string;
}

export function TokenFromJSON(json: any): Token {
    return TokenFromJSONTyped(json, false);
}

export function TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Token {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nativeTokenId': json['native_token_id'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'initialMintTxMetadata': !exists(json, 'initial_mint_tx_metadata') ? undefined : json['initial_mint_tx_metadata'],
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
        
        'native_token_id': value.nativeTokenId,
        'amount': value.amount,
        'name': value.name,
        'description': value.description,
        'initial_mint_tx_metadata': value.initialMintTxMetadata,
    };
}


