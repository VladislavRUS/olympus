import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonalInfo {
  constructor() {
    this.about = '';
    this.birthday = '';
    this.birthplace = '';
    this.occupation = '';
    this.gender = '';
    this.email = '';
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  about: string;

  @Column()
  birthday: string;

  @Column()
  birthplace: string;

  @Column()
  occupation: string;

  @Column()
  gender: string;

  @Column()
  email: string;
}
