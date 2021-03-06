import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import config from '../../config.json';
import { JwtStrategy } from './jwt.strategy';
import { passportModule } from '../passport';

@Module({
  imports: [
    passportModule,
    UsersModule,
    JwtModule.register({
      secret: config.jwtSecret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
