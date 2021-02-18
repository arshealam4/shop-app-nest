import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductsModule, OrdersModule, ConfigModule, CategoriesModule],
  providers: [],
  exports: []
})

export class V1Module { }
