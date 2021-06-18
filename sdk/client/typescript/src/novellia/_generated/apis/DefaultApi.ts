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
    Product,
    ProductFromJSON,
    ProductToJSON,
    ProductsList,
    ProductsListFromJSON,
    ProductsListToJSON,
    Status,
    StatusFromJSON,
    StatusToJSON,
    TokenList,
    TokenListFromJSON,
    TokenListToJSON,
    TokenSearch,
    TokenSearchFromJSON,
    TokenSearchToJSON,
    Wallet,
    WalletFromJSON,
    WalletToJSON,
    WorkflowInformation,
    WorkflowInformationFromJSON,
    WorkflowInformationToJSON,
} from '../models';
import { Configuration, ConfigurationParameters } from '../runtime';

export interface GetProductsRequest {
    marketId?: string;
    organizationId?: string;
}

export interface PostCardanoTransactionRequest {
    cardanoTransaction?: CardanoTransaction;
}

export interface PostProductsRequest {
    productsList?: ProductsList;
}

export interface PostTokensRequest {
    tokenSearch?: TokenSearch;
}

export interface PostWalletRequest {
    wallet?: Wallet;
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
     * Returns a list of product IDs
     * Your GET endpoint
     */
    async getProductsRaw(requestParameters: GetProductsRequest): Promise<runtime.ApiResponse<ProductsList>> {
        const queryParameters: any = {};

        if (requestParameters.marketId !== undefined) {
            queryParameters['market_id'] = requestParameters.marketId;
        }

        if (requestParameters.organizationId !== undefined) {
            queryParameters['organization_id'] = requestParameters.organizationId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/products`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProductsListFromJSON(jsonValue));
    }

    /**
     * Returns a list of product IDs
     * Your GET endpoint
     */
    async getProducts(requestParameters: GetProductsRequest): Promise<ProductsList> {
        const response = await this.getProductsRaw(requestParameters);
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
     * Returns product information for a specific list of products
     */
    async postProductsRaw(requestParameters: PostProductsRequest): Promise<runtime.ApiResponse<Array<Product>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/products`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductsListToJSON(requestParameters.productsList),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProductFromJSON));
    }

    /**
     * Returns product information for a specific list of products
     */
    async postProducts(requestParameters: PostProductsRequest): Promise<Array<Product>> {
        const response = await this.postProductsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns tokens based on search params
     */
    async postTokensRaw(requestParameters: PostTokensRequest): Promise<runtime.ApiResponse<TokenList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/tokens`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TokenSearchToJSON(requestParameters.tokenSearch),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenListFromJSON(jsonValue));
    }

    /**
     * Returns tokens based on search params
     */
    async postTokens(requestParameters: PostTokensRequest): Promise<TokenList> {
        const response = await this.postTokensRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns the tokens held in a wallet address
     * POST Wallet
     */
    async postWalletRaw(requestParameters: PostWalletRequest): Promise<runtime.ApiResponse<TokenList>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/wallet`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WalletToJSON(requestParameters.wallet),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenListFromJSON(jsonValue));
    }

    /**
     * Returns the tokens held in a wallet address
     * POST Wallet
     */
    async postWallet(requestParameters: PostWalletRequest): Promise<TokenList> {
        const response = await this.postWalletRaw(requestParameters);
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
