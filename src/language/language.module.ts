import { Module } from '@nestjs/common';
import { LanguageResolver } from './language.resolver';
import { LanguageService } from './language.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './language.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  providers: [LanguageResolver, LanguageService],
  exports: [LanguageService],
})
export class LanguageModule {}
