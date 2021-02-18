import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Order } from '@/v1/orders/schemas/order.schema';
import { BaseRepository } from '@/core/repository';
import {LoggerHelper} from "@/core/helpers";

@Injectable()
export class OrderRepository extends BaseRepository<Order> {
  constructor(
    @Inject('ORDER_MODEL') private readonly orderModel: Model<Order>, logger: LoggerHelper
  ) {
    super(orderModel, logger);
  }
 ///other repository methods
}
