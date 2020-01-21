import { Module } from '@nestjs/common';
import { CollectionResolver } from './collection.resolver';
import { CollectionService } from './collection.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collection } from './collection.entity';
import { LanguageModule } from '../language/language.module';
import { ChapterModule } from '../chapter/chapter.module';

@Module({
  imports: [TypeOrmModule.forFeature([Collection]), LanguageModule, ChapterModule],
  providers: [CollectionResolver, CollectionService],
})
export class CollectionModule {}
