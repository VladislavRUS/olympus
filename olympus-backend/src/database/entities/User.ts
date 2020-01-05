import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToOne, JoinColumn, RelationId } from 'typeorm';
import { Profile } from './Profile';

@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'email' })
  email: string;

  @Column({ select: false })
  passwordHash: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @RelationId((user: User) => user.profile)
  profileId: number;
}
