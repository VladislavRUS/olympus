import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { ProfilesModule } from '../profiles/profiles.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, ProfilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
