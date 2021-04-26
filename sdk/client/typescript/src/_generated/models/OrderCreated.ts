/* tslint:disable */
/* eslint-disable */
/**
 * novellia-api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.4.0
 * Contact: contact@rektangularstudios.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Response after an order is made
 * @export
 * @interface OrderCreated
 */
export interface OrderCreated {
    /**
     * 
     * @type {string}
     * @memberof OrderCreated
     */
    orderId: string;
}

export function OrderCreatedFromJSON(json: any): OrderCreated {
    return OrderCreatedFromJSONTyped(json, false);
}

export function OrderCreatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderCreated {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderId': json['order_id'],
    };
}

export function OrderCreatedToJSON(value?: OrderCreated | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order_id': value.orderId,
    };
}


