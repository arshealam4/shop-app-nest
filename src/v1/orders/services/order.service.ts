import { Injectable, HttpStatus } from '@nestjs/common';
import { OrderRepository } from '@/v1/orders/repository/order.repository';
import { LoggerHelper } from '@/core/helpers';
import { OrderDto } from '../dto/order.dto';
import { message } from '../../../config/constant';

const FILE_NAME = 'orders.service.ts';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private logger: LoggerHelper,
  ) {
  }

  /**
   * create order
   * @param dto CreateOrderDto
   */
  async create(dto: OrderDto): Promise<any> {
    try {
      const order = await this.orderRepository.createPartial(dto)
      return {
        status: HttpStatus.CREATED,
        message: message.SUCCESS,
        result: order,
      };
    } catch (error) {
      this.logger.error({
        app_message: 'ORDER_CREATE_ERROR',
        log_info: {
          fileName: FILE_NAME,
          errorMessage: error.message,
          errorStack: error.stack,
        },
      });
      return error;
    }
  }

  /**
   * Get list of all orders
   */
  async findAll(): Promise<any> {
    try {
      const data = await this.orderRepository.findAllByQuery({});
      return {
        status: HttpStatus.OK,
        message: message.SUCCESS,
        result: data,
      };
    } catch (error) {
      this.logger.error({
        app_message: 'GET_ORDER_ERROR',
        log_info: {
          fileName: FILE_NAME,
          errorMessage: error.message,
          errorStack: error.stack,
        },
      });
    }
  }

}
