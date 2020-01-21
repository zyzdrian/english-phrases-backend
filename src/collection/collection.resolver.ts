import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CollectionService } from './collection.service';
import { CollectionInput } from './collection.input';
import { Collection } from './collection.entity';

@Resolver('Collection')
export class CollectionResolver {
  constructor(private readonly collectionService: CollectionService) {}

  @Query(() => String)
  async collections() {
    return this.collectionService.findAll();
  }

  @Mutation(() => Collection)
  async createCollection(@Args('input') input: CollectionInput) {
    return await this.collectionService.create(input);
  }
}
