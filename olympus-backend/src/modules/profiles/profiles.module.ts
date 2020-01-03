import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../../database/entities/Profile';
import { PersonalInfo } from '../../database/entities/PersonalInfo';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { User } from '../../database/entities/User';
import { UsersModule } from '../users/users.module';
import { passportModule } from '../passport';

@Module({
  imports: [passportModule, TypeOrmModule.forFeature([User, Profile, PersonalInfo]), UsersModule],
  providers: [ProfilesService],
  exports: [],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
