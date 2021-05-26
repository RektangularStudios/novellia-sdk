import { 
  DefaultApi,
  GetProductsRequest,
} from './_generated/apis';
import {
  CardanoTip,
  CardanoTransaction,
  MinterInfo,
  Product,
  ProductsList,
  Status,
  Token,
  WorkflowInformation,
} from './_generated/models';
import { ConfigurationParameters } from './_generated';

export class NovelliaService {
  private _api: DefaultApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    this._api = new DefaultApi(configurationParameters);
  }

  async cardanoTip(): Promise<CardanoTip> {
    return this._api.getCardanoTip();
  }

  async listProductIDs(request: GetProductsRequest): Promise<ProductsList> {
    return this._api.getProducts(request);
  }

  async getProductsByID(productsList: ProductsList): Promise<Array<Product>> {
    return this._api.postProducts({
      productsList: productsList
    });
  }

  async status(): Promise<Status> {
    return this._api.getStatus();
  }

  async wallet(walletAddress: string): Promise<Array<Token>> {
    return this._api.getWallet({
      walletAddress: walletAddress,
    })
  }

  async submitCardanoTransaction(cardanoTransaction: CardanoTransaction) {
    return this._api.postCardanoTransaction({
      cardanoTransaction: cardanoTransaction,
    });
  }

  async mintNovellia(minterInfo: MinterInfo): Promise<CardanoTransaction> {
    return this._api.postWorkflowMinterNvla({
      minterInfo: minterInfo,
    })
  }

  async mintNovelliaConditions(): Promise<WorkflowInformation> {
    return this._api.getWorkflowMinterNvla();
  }
}