import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, RelationId } from 'typeorm';
import { PersonalInfo } from './PersonalInfo';

@Entity()
export class Profile {
  constructor() {
    this.cover = '';
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cover: string;

  @OneToOne(() => PersonalInfo)
  @JoinColumn()
  personalInfo: PersonalInfo;

  @RelationId((profile: Profile) => profile.personalInfo)
  personalInfoId: number;
}
