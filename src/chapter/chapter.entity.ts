import { Entity, Column, ObjectIdColumn, OneToMany, ManyToOne } from 'typeorm';
import { Collection } from '../collection/collection.entity';
import { Phrase } from '../phrase/phrase.entity';

@Entity()
export class Chapter {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @ManyToOne(type => Collection, collection => collection.chapters)
  collection: Collection;

  @OneToMany(type => Phrase, phrase => phrase.chapter)
  phrases: Phrase[];
}
