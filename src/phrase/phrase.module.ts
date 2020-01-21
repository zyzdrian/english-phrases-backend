import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseResolver } from './phrase.resolver';
import { PhraseService } from './phrase.service';
import { Phrase } from './phrase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Phrase])],
  providers: [PhraseResolver, PhraseService],
})
export class PhraseModule {}
