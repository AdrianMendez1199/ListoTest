import { Document } from 'mongoose';

export interface Company extends Document {
   name: string;
   rnc: number;  
   description: string;
}