import { Injectable, HttpStatus } from '@nestjs/common';
import { LoggerHelper } from "@/core/helpers";
import { ProductsRepository } from '@/v1/products/repository/products.repository';
import { Types } from 'mongoose';
import { message } from '../../../config/constant';
import { ParamDto } from '../dto/params.dto';

const FILE_NAME = 'products.service.ts';

@Injectable()
export class ProductsService {

    constructor(
        private productsRepository: ProductsRepository,
        private logger: LoggerHelper,
    ) { }

    async findAll(params: ParamDto): Promise<any> {
        try {
            const query = {
                active: true
            }
            if (params.catId && params.catId != "") {
                query['categoryId'] = Types.ObjectId(params.catId);
            }
            const data = await this.productsRepository.findAllByQuery(query);
            return {
                status: HttpStatus.OK,
                message: message.SUCCESS,
                result: data,
            };
        } catch (err) {
            this.logger.error({
                app_message: 'GET_PRODUCTS_ERROR',
                log_info: {
                    fileName: FILE_NAME,
                    errorMessage: err.message,
                    errorStack: err.stack,
                },
                metadata: {},
            });

            return err
        }
    }

}