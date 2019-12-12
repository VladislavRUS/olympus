import { Module } from '@nestjs/common';
import { RegisterController } from '../controllers/register.controller';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule],
  controllers: [RegisterController],
  providers: [],
})
export class RegisterModule {}
