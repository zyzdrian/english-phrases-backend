import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import * as uuid from 'uuid';
import { PhraseInput } from './phrase.input';
import { Phrase } from './phrase.entity';

@Injectable()
export class PhraseService {
  constructor(
    @InjectRepository(Phrase)
    private readonly phraseRepository: MongoRepository<Phrase>,
  ) {}

  async findAll(): Promise<Phrase[]> {
    return this.phraseRepository.find();
  }

  async create(input: PhraseInput): Promise<Phrase> {
    const phrase = new Phrase();
    phrase._id = uuid.v4();
    Object.assign(phrase, input);
    return this.phraseRepository.save(phrase);
  }
}
