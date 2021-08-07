import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompanyInput } from './inputs/company.input';
import { Company } from './interface/company.interface';

@Injectable()
export class CompanyService {
  constructor(@InjectModel('Company') private readonly companyModel: Model<Company>) {}

   async create(createCompanyDto: CompanyInput): Promise<Company> {
     const company = new this.companyModel(createCompanyDto);
     return company.save();
   }

   async findAll(): Promise<Company[]> {
     return this.companyModel.find().exec();
   } 

   async findById(id: String): Promise<Company> {
     return this.companyModel.findById(id).exec();
   }

   async delete(id: String): Promise<Company> {
     return this.companyModel.findByIdAndDelete(id).exec();
   }
}
