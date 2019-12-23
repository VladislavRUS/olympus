import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/User';
import { Profile } from '../../database/entities/Profile';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByUserId(userId: number): Promise<Profile | null> {
    const user = await this.userRepository.findOne({ id: userId }, { relations: ['profile', 'profile.personalInfo'] });

    return user ? user.profile : null;
  }
}
