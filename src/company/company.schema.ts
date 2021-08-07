import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rnc: number;

  @Prop({ required: true, default: true })
  status: boolean;

  @Prop()
  description: string;
  
}

export const CompanySchema = SchemaFactory.createForClass(Company);