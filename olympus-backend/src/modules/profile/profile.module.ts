import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../../database/entities/Profile';
import { PersonalInfo } from '../../database/entities/PersonalInfo';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { passportModule } from '../auth/auth.module';
import { User } from '../../database/entities/User';

@Module({
  imports: [passportModule, TypeOrmModule.forFeature([User, Profile, PersonalInfo])],
  providers: [ProfileService],
  exports: [],
  controllers: [ProfileController],
})
export class ProfileModule {}
