import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, RelationId } from 'typeorm';
import { PersonalInfo } from './PersonalInfo';
import { Interests } from './Interests';

@Entity()
export class Profile {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = '';
    this.cover = '';
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  avatar: string;

  @Column()
  cover: string;

  @OneToOne(() => PersonalInfo)
  @JoinColumn()
  personalInfo: PersonalInfo;

  @RelationId((profile: Profile) => profile.personalInfo)
  personalInfoId: number;

  @OneToOne(() => Interests)
  @JoinColumn()
  interests: Interests;

  @RelationId((profile: Profile) => profile.interests)
  interestsId: number;
}
