import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class CompanyType {
    
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;
  
  @Field(() => Int)
  readonly rnc: number;

  @Field()
  readonly description: string;
}