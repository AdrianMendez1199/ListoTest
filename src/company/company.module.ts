import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { CompanySchema } from './company.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema  }])],
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
