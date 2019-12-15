import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/User';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = this.userRepository.findOne({ email });

    return user ? user : null;
  }

  async findById(id: number): Promise<User | null> {
    const user = this.userRepository.findOne({ id });
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

  async create(user: User): Promise<void> {
    await this.userRepository.insert(user);
  }
}
