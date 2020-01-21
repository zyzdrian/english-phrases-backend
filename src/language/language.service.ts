import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import * as uuid from 'uuid';
import { Language } from './language.entity';
import { LanguageInput } from './language.input';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    private readonly languageRepository: MongoRepository<Language>,
  ) {}

  async findAll(): Promise<Language[]> {
    return this.languageRepository.find();
  }

  async findById(id: string): Promise<Language> {
    return this.languageRepository.findOne({ _id: id });
  }

  async create(input: LanguageInput): Promise<Language> {
    const language = new Language();
    language._id = uuid.v4();
    Object.assign(language, input);
    return this.languageRepository.save(language);
  }
}
