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
 * A Cardano transaction to be signed and submitted.
 * @export
 * @interface CardanoTransaction
 */
export interface CardanoTransaction {
    /**
     * text of transaction file
     * @type {string}
     * @memberof CardanoTransaction
     */
    transaction: string;
    /**
     * Cost to submit TX in lovelace (1 ADA = 1,000,000 lovelace)
     * @type {number}
     * @memberof CardanoTransaction
     */
    feeLovelace: number;
    /**
     * Indicates if the transaction is signed or raw
     * @type {boolean}
     * @memberof CardanoTransaction
     */
    signed: boolean;
}

export function CardanoTransactionFromJSON(json: any): CardanoTransaction {
    return CardanoTransactionFromJSONTyped(json, false);
}

export function CardanoTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardanoTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transaction': json['transaction'],
        'feeLovelace': json['fee_lovelace'],
        'signed': json['signed'],
    };
}

export function CardanoTransactionToJSON(value?: CardanoTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transaction': value.transaction,
        'fee_lovelace': value.feeLovelace,
        'signed': value.signed,
    };
}


