import { Injectable, HttpStatus } from '@nestjs/common';
import { LoggerHelper } from "@/core/helpers";
import { CategoryRepository } from '@/v1/categories/repository/category.repository';
import { message } from '../../../config/constant';

const FILE_NAME = 'category.service.ts';

@Injectable()
export class CategoryService {

    constructor(
        private categoryRepository: CategoryRepository,
        private logger: LoggerHelper,
    ) { }

    async findAll(): Promise<any> {
        try {
            const categories = await this.categoryRepository.findAllByQuery({});
            return {
                status: HttpStatus.OK,
                message: message.SUCCESS,
                result: categories,
            };

        } catch (err) {
            this.logger.error({
                app_message: 'GET_CATEGORY_ERROR',
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