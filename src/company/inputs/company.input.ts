import {  InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class CompanyInput {
  
  @Field()
  readonly name: string;
  
  @Field(() => Int)
  readonly rnc: number;

  @Field()
  readonly description: string;
}