import { Module } from '@nestjs/common';
import { ChapterResolver } from './chapter.resolver';
import { ChapterService } from './chapter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './chapter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
  providers: [ChapterResolver, ChapterService],
  exports: [ChapterService],
})
export class ChapterModule {}
