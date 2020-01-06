import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../../database/entities/Profile';
import { PersonalInfo } from '../../database/entities/PersonalInfo';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { User } from '../../database/entities/User';
import { UsersModule } from '../users/users.module';
import { passportModule } from '../passport';
import { Interests } from '../../database/entities/Interests';

@Module({
  imports: [passportModule, TypeOrmModule.forFeature([User, Profile, PersonalInfo, Interests]), UsersModule],
  providers: [ProfilesService],
  exports: [],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
