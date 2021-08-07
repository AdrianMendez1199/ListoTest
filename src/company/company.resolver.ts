import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { CompanyType } from './dto/create-company.dto';
import { CompanyInput } from './inputs/company.input';

@Resolver()
export class CompanyResolver {

   constructor(
     private readonly companyService: CompanyService
    ) {}

  @Mutation(() => CompanyType)
  async createCompany(@Args('input') input: CompanyInput) {
    const company = this.companyService.create(input);
    return company;
  }

  @Query(() => [CompanyType], { nullable: 'items' })
  async companies() {
    return this.companyService.findAll();
  }

  @Query(() => CompanyType)
  async company(@Args('id') id: string) {
    return this.companyService.findById(id);
  }

  @Mutation(() => CompanyType)
  async deleteCompany(@Args('id') id: string) {
    return this.companyService.delete(id);
  }

}