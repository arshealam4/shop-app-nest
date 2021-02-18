import { Module } from '@nestjs/common';
import { CoreModule } from '@/core/core.module';
import { ProvidersModule } from '@/providers/providers.module';
import { ProductsController } from './products.controller'
import { ProductsProvider } from '@/v1/products/providers/products.provider';
import { ProductsRepository } from '@/v1/products/repository/products.repository';
import { ProductsService } from '@/v1/products/services/products.services'


@Module({
  imports: [CoreModule, ProvidersModule],
  controllers: [ProductsController],
  providers: [...ProductsProvider, ProductsService, ProductsRepository],
  exports: [ProductsService]
})
export class ProductsModule { }
