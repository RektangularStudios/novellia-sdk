import { 
  DefaultApi,
  PostOrdersRequest,
} from './_generated/apis';
import {
  Order,
  OrderCreated,
  Status,
} from './_generated/models';
import { ConfigurationParameters } from './_generated';

export class OrderFulfillmentService {
  private _api: DefaultApi;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    this._api = new DefaultApi(configurationParameters);
  }

  async getOrder(orderId: string): Promise<Order> {
    return this._api.getOrders({
        orderId: orderId,
    });
  }

  async createOrder(request: PostOrdersRequest): Promise<OrderCreated> {
    return this._api.postOrders(request);
  }

  async status(): Promise<Status> {
    return this._api.getStatus();
  }
}
