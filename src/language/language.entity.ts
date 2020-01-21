import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { Collection } from '../collection/collection.entity';

@Entity()
export class Language {
  @ObjectIdColumn()
  _id: string;

  @Column()
  name: string;

  @Column()
  shortName?: string;

  @Column()
  imageUrl?: string;

  @OneToMany(type => Collection, collection => collection.namesLanguage)
  collectionNames: Collection[];

  @OneToMany(type => Collection, collection => collection.meaningsLanguage)
  collectionMeanings: Collection[];
}
