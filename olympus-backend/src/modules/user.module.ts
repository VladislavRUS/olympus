import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../db/entities/User';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
