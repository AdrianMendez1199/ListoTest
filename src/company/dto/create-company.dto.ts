import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class CompanyType {
    
  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly name: string;
  
  @Field(() => Int)
  readonly document: number;

  @Field({ nullable: true })
  readonly description: string;

  @Field()
  readonly phone: string;

  @Field()
  readonly email: string;
}