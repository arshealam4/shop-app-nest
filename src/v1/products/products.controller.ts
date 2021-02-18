import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from '@/v1/products/services/products.services'
import { Products } from '@/v1/products/schemas/products.schema'
import { ParamDto } from './dto/params.dto';


@Controller('v1/products')
export class ProductsController {
  constructor(
    private productsService: ProductsService,
  ) { }

  @Get('/get-all-product')
  async products(@Query() params: ParamDto): Promise<Products[]> {
    return await this.productsService.findAll(params);
  }
}