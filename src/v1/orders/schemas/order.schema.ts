import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Item {
  @Prop()
  id: string;
  @Prop()
  price: number;
  @Prop()
  quantity: number;
  @Prop()
  title: string;
  @Prop()
  total: number;
}

@Schema({ autoCreate: true, timestamps: true })
export class Order extends Document {
  @Prop()
  email: string;

  @Prop()
  totalAmount: number;

  @Prop()
  items: [Item];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
