import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PhraseService } from './phrase.service';
import { PhraseInput } from './phrase.input';
import { Phrase } from './phrase.entity';

@Resolver('Phrase')
export class PhraseResolver {
  constructor(private readonly phraseService: PhraseService) {}

  @Query(() => String)
  async phrases() {
    return this.phraseService.findAll();
  }

  @Mutation(() => Phrase)
  async createPhrase(@Args('input') input: PhraseInput) {
    return await this.phraseService.create(input);
  }
}
