import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Profile } from './Profile';

@Entity()
export class WorkPlace {
  constructor() {
    this.title = '';
    this.description = '';
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  yearFrom: number;

  @Column({ nullable: true })
  yearTo: number;

  @Column()
  description: string;

  @ManyToOne(() => Profile, profile => profile.workPlaces)
  profile: Profile;
}
