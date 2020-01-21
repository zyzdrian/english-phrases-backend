import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import * as uuid from 'uuid';
import { Chapter } from './chapter.entity';
import { ChapterInput } from './chapter.input';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly chapterRepository: MongoRepository<Chapter>,
  ) {}

  async findAll(): Promise<Chapter[]> {
    return this.chapterRepository.find();
  }

  async create(input: ChapterInput): Promise<Chapter> {
    const chapter = new Chapter();
    chapter._id = uuid.v4();
    Object.assign(chapter, input);
    return this.chapterRepository.save(chapter);
  }

  async createManyByName(names: string[]): Promise<Chapter[]> {
    const chapters = names.map(name => {
      const chapter = new Chapter();
      chapter._id = uuid.v4();
      chapter.name = name;
      return chapter;
    });
    return await this.chapterRepository.save(chapters);
  }
}
