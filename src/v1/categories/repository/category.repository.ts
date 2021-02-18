import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Category } from '@/v1/categories/schemas/category.schema';
import { BaseRepository } from '@/core/repository';
import { LoggerHelper } from '@/core/helpers';

@Injectable()
export class CategoryRepository extends BaseRepository<Category> {
  constructor(
    @Inject('CATEGORY_MODEL') private readonly categoryModel: Model<Category>, logger: LoggerHelper) {
    super(categoryModel, logger);
  }
 ///other repository methods
}
