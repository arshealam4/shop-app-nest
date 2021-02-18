import { Connection } from 'mongoose'
import { CategorySchema } from '../schemas/category.schema'


export const CategoryProvider = [
  {
    provide: 'CATEGORY_MODEL',
    useFactory: (connection: Connection): any => connection.model('categories', CategorySchema, 'categories'),
    inject: ['MONGODB_PROVIDER']
  }
];