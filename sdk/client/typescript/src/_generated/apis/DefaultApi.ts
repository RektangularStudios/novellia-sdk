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


import * as runtime from '../runtime';
import {
    CardanoTip,
    CardanoTipFromJSON,
    CardanoTipToJSON,
    CardanoTransaction,
    CardanoTransactionFromJSON,
    CardanoTransactionToJSON,
    MinterInfo,
    MinterInfoFromJSON,
    MinterInfoToJSON,
    Order,
    OrderFromJSON,
    OrderToJSON,
    OrderCreated,
    OrderCreatedFromJSON,
    OrderCreatedToJSON,
    Product,
    ProductFromJSON,
    ProductToJSON,
    Status,
    StatusFromJSON,
    StatusToJSON,
    Token,
    TokenFromJSON,
    TokenToJSON,
    WorkflowInformation,
    WorkflowInformationFromJSON,
    WorkflowInformationToJSON,
} from '../models';
import { Configuration, ConfigurationParameters } from '../runtime';

export interface GetOrdersRequest {
    orderId: string;
}

export interface GetProductsRequest {
    marketId?: string;
    organizationId?: string;
    productId?: string;
}

export interface GetWalletRequest {
    walletAddress: string;
}

export interface PostCardanoTransactionRequest {
    cardanoTransaction?: CardanoTransaction;
}

export interface PostOrdersRequest {
    order?: Order;
}

export interface PostWorkflowMinterNvlaRequest {
    minterInfo?: MinterInfo;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {
    constructor(configurationParams: ConfigurationParameters = {}) {
        super(new Configuration(configurationParams));
    }
    
    /**
     * Returns Cardano\'s latest block and epoch
     * Your GET endpoint
     */
    async getCardanoTipRaw(): Promise<runtime.ApiResponse<CardanoTip>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/cardano/tip`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CardanoTipFromJSON(jsonValue));
    }

    /**
     * Returns Cardano\'s latest block and epoch
     * Your GET endpoint
     */
    async getCardanoTip(): Promise<CardanoTip> {
        const response = await this.getCardanoTipRaw();
        return await response.value();
    }

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
     * Returns a list of products to list
     * Your GET endpoint
     */
    async getProductsRaw(requestParameters: GetProductsRequest): Promise<runtime.ApiResponse<Array<Product>>> {
        const queryParameters: any = {};

        if (requestParameters.marketId !== undefined) {
            queryParameters['market_id'] = requestParameters.marketId;
        }

        if (requestParameters.organizationId !== undefined) {
            queryParameters['organization_id'] = requestParameters.organizationId;
        }

        if (requestParameters.productId !== undefined) {
            queryParameters['product_id'] = requestParameters.productId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProductFromJSON));
    }

    /**
     * Returns a list of products to list
     * Your GET endpoint
     */
    async getProducts(requestParameters: GetProductsRequest): Promise<Array<Product>> {
        const response = await this.getProductsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Information regarding availability of Novellia APIs
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
     * Information regarding availability of Novellia APIs
     * Your GET endpoint
     */
    async getStatus(): Promise<Status> {
        const response = await this.getStatusRaw();
        return await response.value();
    }

    /**
     * Returns the tokens held in a wallet address
     * Your GET endpoint
     */
    async getWalletRaw(requestParameters: GetWalletRequest): Promise<runtime.ApiResponse<Array<Token>>> {
        if (requestParameters.walletAddress === null || requestParameters.walletAddress === undefined) {
            throw new runtime.RequiredError('walletAddress','Required parameter requestParameters.walletAddress was null or undefined when calling getWallet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/wallet/{wallet_address}`.replace(`{${"wallet_address"}}`, encodeURIComponent(String(requestParameters.walletAddress))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TokenFromJSON));
    }

    /**
     * Returns the tokens held in a wallet address
     * Your GET endpoint
     */
    async getWallet(requestParameters: GetWalletRequest): Promise<Array<Token>> {
        const response = await this.getWalletRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns execution information such as transaction cost
     */
    async getWorkflowMinterNvlaRaw(): Promise<runtime.ApiResponse<WorkflowInformation>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/workflow/minter/nvla`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkflowInformationFromJSON(jsonValue));
    }

    /**
     * Returns execution information such as transaction cost
     */
    async getWorkflowMinterNvla(): Promise<WorkflowInformation> {
        const response = await this.getWorkflowMinterNvlaRaw();
        return await response.value();
    }

    /**
     * Submits a transaction to Cardano
     */
    async postCardanoTransactionRaw(requestParameters: PostCardanoTransactionRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/cardano/transaction`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CardanoTransactionToJSON(requestParameters.cardanoTransaction),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Submits a transaction to Cardano
     */
    async postCardanoTransaction(requestParameters: PostCardanoTransactionRequest): Promise<void> {
        await this.postCardanoTransactionRaw(requestParameters);
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

    /**
     * Returns a transaction to mint NVLA and deposit it to a specified address
     */
    async postWorkflowMinterNvlaRaw(requestParameters: PostWorkflowMinterNvlaRequest): Promise<runtime.ApiResponse<CardanoTransaction>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/workflow/minter/nvla`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MinterInfoToJSON(requestParameters.minterInfo),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CardanoTransactionFromJSON(jsonValue));
    }

    /**
     * Returns a transaction to mint NVLA and deposit it to a specified address
     */
    async postWorkflowMinterNvla(requestParameters: PostWorkflowMinterNvlaRequest): Promise<CardanoTransaction> {
        const response = await this.postWorkflowMinterNvlaRaw(requestParameters);
        return await response.value();
    }

}
