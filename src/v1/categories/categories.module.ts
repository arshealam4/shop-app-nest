import { Module } from '@nestjs/common';
import { CoreModule } from '@/core/core.module';
import { ProvidersModule } from '@/providers/providers.module';
import { CategoriesController }  from './categories.controller'
import { CategoryProvider } from '@/v1/categories/providers/category.provider';
import { CategoryRepository } from '@/v1/categories/repository/category.repository';
import { CategoryService } from '@/v1/categories/services/category.services'


@Module({
  imports: [CoreModule, ProvidersModule],
  controllers: [CategoriesController],
  providers: [...CategoryProvider, CategoryService, CategoryRepository],
  exports: [CategoryService]
})
export class CategoriesModule { }
