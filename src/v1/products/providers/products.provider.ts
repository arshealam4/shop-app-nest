import { Connection } from 'mongoose'
import { ProductsSchema } from '../schemas/products.schema'


export const ProductsProvider = [
  {
    provide: 'PRODUCTS_MODEL',
    useFactory: (connection: Connection): any => connection.model('products', ProductsSchema, 'products'),
    inject: ['MONGODB_PROVIDER']
  }
];