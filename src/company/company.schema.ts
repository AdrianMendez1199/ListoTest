import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  document: number;

  @Prop({ required: true, default: true })
  status: boolean;

  @Prop()
  description: string;
  
  @Prop()
  phone: string;

  @Prop({ unique: true })
  email: string;

}

export const CompanySchema = SchemaFactory.createForClass(Company);