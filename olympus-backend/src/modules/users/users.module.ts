import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../database/entities/User';
import { Profile } from '../../database/entities/Profile';
import { PersonalInfo } from '../../database/entities/PersonalInfo';
import { UsersController } from './users.controller';
import { passportModule } from '../passport';

@Module({
  imports: [passportModule, TypeOrmModule.forFeature([User, Profile, PersonalInfo])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
