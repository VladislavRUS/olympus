import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Interests {
  constructor() {
    this.hobbies = '';
    this.tvShows = '';
    this.movies = '';
    this.games = '';
    this.music = '';
    this.books = '';
    this.writers = '';
    this.other = '';
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hobbies: string;

  @Column()
  tvShows: string;

  @Column()
  movies: string;

  @Column()
  games: string;

  @Column()
  music: string;

  @Column()
  books: string;

  @Column()
  writers: string;

  @Column()
  other: string;
}
