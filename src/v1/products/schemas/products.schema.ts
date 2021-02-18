import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ autoCreate: true, timestamps: true })
export class Products extends Document {
  @Prop()
  _id: string;

  @Prop()
  bannerImage: string;

  @Prop()
  logoImage: string;

  @Prop()
  iconlogoimg: string;

}

export const ProductsSchema = SchemaFactory.createForClass(Products);