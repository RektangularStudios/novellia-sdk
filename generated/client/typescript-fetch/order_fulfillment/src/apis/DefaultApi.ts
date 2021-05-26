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


import * as runtime from '../runtime';
import {
    Order,
    OrderFromJSON,
    OrderToJSON,
    OrderCreated,
    OrderCreatedFromJSON,
    OrderCreatedToJSON,
    Status,
    StatusFromJSON,
    StatusToJSON,
} from '../models';

export interface GetOrdersRequest {
    orderId: string;
}

export interface PostOrdersRequest {
    order?: Order;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Gets an order
     * Your GET endpoint
     */
    async getOrdersRaw(requestParameters: GetOrdersRequest): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling getOrders.');
        }

        const queryParameters: any = {};

        if (requestParameters.orderId !== undefined) {
            queryParameters['order_id'] = requestParameters.orderId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/orders`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderFromJSON(jsonValue));
    }

    /**
     * Gets an order
     * Your GET endpoint
     */
    async getOrders(requestParameters: GetOrdersRequest): Promise<Order> {
        const response = await this.getOrdersRaw(requestParameters);
        return await response.value();
    }

    /**
     * Information regarding status of microservice
     * Your GET endpoint
     */
    async getStatusRaw(): Promise<runtime.ApiResponse<Status>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StatusFromJSON(jsonValue));
    }

    /**
     * Information regarding status of microservice
     * Your GET endpoint
     */
    async getStatus(): Promise<Status> {
        const response = await this.getStatusRaw();
        return await response.value();
    }

    /**
     * Creates an order
     */
    async postOrdersRaw(requestParameters: PostOrdersRequest): Promise<runtime.ApiResponse<OrderCreated>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/orders`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrderToJSON(requestParameters.order),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => OrderCreatedFromJSON(jsonValue));
    }

    /**
     * Creates an order
     */
    async postOrders(requestParameters: PostOrdersRequest): Promise<OrderCreated> {
        const response = await this.postOrdersRaw(requestParameters);
        return await response.value();
    }

}