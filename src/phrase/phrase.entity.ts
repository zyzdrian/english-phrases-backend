import { Entity, Column, ManyToOne, ObjectIdColumn } from 'typeorm';
import { Collection } from '../collection/collection.entity';
import { Chapter } from '../chapter/chapter.entity';

@Entity()
export class Phrase {
  @ObjectIdColumn()
  _id: string;

  @Column()
  names: string[];

  @Column()
  meanings: string[];

  @ManyToOne(type => Chapter, chapter => chapter.phrases)
  chapter?: Chapter;

  @ManyToOne(type => Collection, collection => collection.phrases)
  collection: Collection;
}
