import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Products } from '@/v1/products/schemas/products.schema';
import { BaseRepository } from '@/core/repository';
import { LoggerHelper } from '@/core/helpers';

@Injectable()
export class ProductsRepository extends BaseRepository<Products> {
  constructor(
    @Inject('PRODUCTS_MODEL') private readonly productModel: Model<Products>, logger: LoggerHelper) {
    super(productModel, logger);
  }
  ///other repository methods
}
