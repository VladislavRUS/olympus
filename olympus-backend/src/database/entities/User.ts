import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './Profile';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ select: false })
  passwordHash: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
