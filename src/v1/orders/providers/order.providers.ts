import { Connection } from 'mongoose'
import { OrderSchema } from '../schemas/order.schema'


export const OrderProviders = [
  {
    provide: 'ORDER_MODEL',
    useFactory: (connection: Connection): any => connection.model('orders', OrderSchema, 'orders'),
    inject: ['MONGODB_PROVIDER'],
  }
];