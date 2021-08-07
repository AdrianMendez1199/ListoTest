import { Document } from 'mongoose';

export interface Company extends Document {
   name: string;
   document: number;  
   description: string;
   phone: string;
   email: string;
}