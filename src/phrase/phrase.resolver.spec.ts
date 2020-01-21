import { Test, TestingModule } from '@nestjs/testing';
import { PhraseResolver } from './phrase.resolver';

describe('PhraseResolver', () => {
  let resolver: PhraseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhraseResolver],
    }).compile();

    resolver = module.get<PhraseResolver>(PhraseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
