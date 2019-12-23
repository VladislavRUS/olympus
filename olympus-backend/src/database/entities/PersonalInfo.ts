import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonalInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  about: string;

  @Column({ default: '' })
  birthday: string;

  @Column({ default: '' })
  birthplace: string;

  @Column({ default: '' })
  occupation: string;

  @Column({ default: '' })
  gender: string;

  @Column({ default: '' })
  email: string;
}
