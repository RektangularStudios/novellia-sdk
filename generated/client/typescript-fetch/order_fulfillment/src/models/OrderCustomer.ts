/* tslint:disable */
/* eslint-disable */
/**
 * order-fulfillment
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
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
 * @interface OrderCustomer
 */
export interface OrderCustomer {
    /**
     * Address to deliver tokens to
     * @type {string}
     * @memberof OrderCustomer
     */
    deliveryAddress: string;
}

export function OrderCustomerFromJSON(json: any): OrderCustomer {
    return OrderCustomerFromJSONTyped(json, false);
}

export function OrderCustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderCustomer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliveryAddress': json['delivery_address'],
    };
}

export function OrderCustomerToJSON(value?: OrderCustomer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'delivery_address': value.deliveryAddress,
    };
}


