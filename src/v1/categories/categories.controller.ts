import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '@/v1/categories/services/category.services'

@Controller('v1/categories')
export class CategoriesController {
  constructor(
    private categoryService: CategoryService,
  ) { }

  @Get('/get-all-category')
  async categories(): Promise<any> {
    return await this.categoryService.findAll();
  }
}