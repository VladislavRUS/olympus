import { Module } from '@nestjs/common';
import { passportModule } from '../passport';
import { MulterModule } from '@nestjs/platform-express';
import { FilesController } from './files.controller';

@Module({
  imports: [passportModule, MulterModule.register({ dest: './upload' })],
  providers: [],
  exports: [],
  controllers: [FilesController],
})
export class FilesModule {}
