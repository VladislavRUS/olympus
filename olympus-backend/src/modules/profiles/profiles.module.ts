import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../../database/entities/Profile';
import { PersonalInfo } from '../../database/entities/PersonalInfo';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { passportModule } from '../auth/auth.module';
import { User } from '../../database/entities/User';

@Module({
  imports: [passportModule, TypeOrmModule.forFeature([User, Profile, PersonalInfo])],
  providers: [ProfilesService],
  exports: [],
  controllers: [ProfilesController],
})
export class ProfilesModule {}
