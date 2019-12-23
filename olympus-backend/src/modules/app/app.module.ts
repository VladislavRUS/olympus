import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
