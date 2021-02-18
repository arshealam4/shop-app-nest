import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from '@/v1/orders/services/order.service';
import { Order } from '@/v1/orders/schemas/order.schema';
import { OrderDto } from './dto/order.dto';

@Controller('v1/orders')
@ApiTags('orders')
export class OrdersController {
  constructor(
    private orderService: OrderService
  ) {
  }

  @Post('/place-order')
  async create(@Body() dto: OrderDto): Promise<OrderDto> {
    return this.orderService.create(dto);
  }

  @Get('/get-all-order')
  async findAll(): Promise<any> {
    return this.orderService.findAll();
  }

}
