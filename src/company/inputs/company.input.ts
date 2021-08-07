import {  InputType, Field, Int } from '@nestjs/graphql'

@InputType()
export class CompanyInput {
  
  @Field()
  readonly name: string;
  
  @Field(() => Int)
  readonly document: number;

  @Field()
  readonly description: string;

  @Field()
  readonly phone: string;

  @Field()
  readonly email: string;
}