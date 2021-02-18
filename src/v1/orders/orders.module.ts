import { Module } from '@nestjs/common';
import { ProvidersModule } from '@/providers/providers.module';
import { OrdersController } from '@/v1/orders/orders.controller';
import { OrderService } from '@/v1/orders/services/order.service';
import { OrderProviders } from '@/v1/orders/providers/order.providers';
import { OrderRepository } from '@/v1/orders/repository/order.repository';
import { CoreModule } from '@/core/core.module';


@Module({
  imports: [
    ProvidersModule, 
    CoreModule
  ],
  controllers: [OrdersController],
  providers: [OrderService, OrderRepository, ...OrderProviders],
  exports: [...OrderProviders,OrderService,OrderRepository]
})
export class OrdersModule { }
