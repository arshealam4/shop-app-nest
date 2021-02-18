import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ autoCreate: true, timestamps: true })
export class Category extends Document {
  @Prop()
  title: string;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  active: boolean;

}

export const CategorySchema = SchemaFactory.createForClass(Category);