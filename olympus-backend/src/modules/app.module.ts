import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { DatabaseModule } from '../db';
import { RegisterModule } from './register.module';
import { UserModule } from './user.module';

@Module({
  imports: [DatabaseModule, RegisterModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
