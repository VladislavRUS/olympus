import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/User';
import { Profile } from '../../database/entities/Profile';
import { PersonalInfo } from '../../database/entities/PersonalInfo';
import { Interests } from '../../database/entities/Interests';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(PersonalInfo)
    private readonly personalInfoRepository: Repository<PersonalInfo>,
    @InjectRepository(Interests)
    private readonly interestsRepository: Repository<Interests>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = this.userRepository.findOne({ email });

    return user ? user : null;
  }

  async findById(id: number): Promise<User | null> {
    const user = this.userRepository.findOne({ id }, { relations: ['profile'] });
    return user ? user : null;
  }

  async findByEmailWithPasswordHash(email: string): Promise<User | null> {
    const user = this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.passwordHash')
      .where('user.email = :email', { email })
      .getOne();

    return user ? user : null;
  }

  async create(user: User, firstName: string, lastName: string): Promise<void> {
    const personalInfo = new PersonalInfo();
    await this.personalInfoRepository.save(personalInfo);

    const interests = new Interests();
    await this.interestsRepository.save(interests);

    const profile = new Profile(firstName, lastName);
    profile.personalInfo = personalInfo;
    profile.interests = interests;
    await this.profileRepository.save(profile);

    user.profile = profile;
    await this.userRepository.save(user);
  }
}
