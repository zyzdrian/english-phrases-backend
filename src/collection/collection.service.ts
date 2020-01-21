import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import * as uuid from 'uuid';
import { Collection } from './collection.entity';
import { CollectionInput } from './collection.input';
import { LanguageService } from '../language/language.service';
import { ChapterService } from '../chapter/chapter.service';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: MongoRepository<Collection>,
    private readonly languageService: LanguageService,
    private readonly chapterService: ChapterService,
  ) {}

  async findAll(): Promise<Collection[]> {
    return this.collectionRepository.find();
  }

  async findById(id: string): Promise<Collection> {
    return this.collectionRepository.findOne({ _id: id });
  }

  async create(input: CollectionInput): Promise<Collection> {
    const collection = new Collection();
    collection._id = uuid.v4();
    collection.name = input.name;
    collection.phrases = [];
    collection.namesLanguage = await this.languageService.findById(input.namesLanguageId);
    collection.meaningsLanguage = await this.languageService.findById(input.meaningsLanguageId);
    collection.chapters = []; // await this.chapterService.createManyByName(input.chapters);
    return this.collectionRepository.save(collection);
  }
}
