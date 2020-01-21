import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne } from 'typeorm';
import { Phrase } from '../phrase/phrase.entity';
import { Chapter } from '../chapter/chapter.entity';
import { Language } from '../language/language.entity';

@Entity()
export class Collection {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @ManyToOne(type => Language, language => language.collectionNames)
  namesLanguage: Language;

  @ManyToOne(type => Language, language => language.collectionMeanings)
  meaningsLanguage: Language;

  @OneToMany(type => Phrase, phrase => phrase.collection)
  phrases: Phrase[];

  @OneToMany(type => Chapter, chapter => chapter.collection)
  chapters: Chapter[];
}
