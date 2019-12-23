import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { PersonalInfo } from './PersonalInfo';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => PersonalInfo)
  @JoinColumn()
  personalInfo: PersonalInfo;
}
