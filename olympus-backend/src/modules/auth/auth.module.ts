import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { config } from '../../config';
import { JwtStrategy } from './jwt.strategy';

export const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
  imports: [
    UsersModule,
    passportModule,
    JwtModule.register({
      secret: config.jwtSecret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
