import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LanguageService } from './language.service';
import { LanguageInput } from './language.input';
import { Language } from './language.entity';

@Resolver('Language')
export class LanguageResolver {
  constructor(private readonly languageService: LanguageService) {}

  @Query(() => String)
  async languages() {
    return this.languageService.findAll();
  }

  @Mutation(() => Language)
  async createLanguage(@Args('input') input: LanguageInput) {
    return await this.languageService.create(input);
  }
}
