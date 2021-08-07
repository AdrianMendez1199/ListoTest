import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { CompanyType } from './dto/create-company.dto';
import { CompanyInput } from './inputs/company.input';

@Resolver()
export class CompanyResolver {

   constructor(
     private readonly companyService: CompanyService
    ) {}

  @Query(() => String)
  async hello() {
    return 'Hello';
  }

  @Mutation(() => CompanyType)
  async createCompany(@Args('input') input: CompanyInput) {
    const company = this.companyService.create(input);
    return company;
  }

}