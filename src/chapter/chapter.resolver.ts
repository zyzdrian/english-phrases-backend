import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ChapterService } from './chapter.service';
import { ChapterInput } from './chapter.input';
import { Chapter } from './chapter.entity';

@Resolver('Chapter')
export class ChapterResolver {
  constructor(private readonly chapterService: ChapterService) {}

  @Query(() => String)
  async chapters() {
    return this.chapterService.findAll();
  }

  @Mutation(() => Chapter)
  async createChapter(@Args('input') input: ChapterInput) {
    return await this.chapterService.create(input);
  }
}
