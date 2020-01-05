import { Module } from '@nestjs/common';
import { passportModule } from '../passport';
import { MulterModule } from '@nestjs/platform-express';
import { FilesController } from './files.controller';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { v4 as uuid } from 'uuid';
import fs from 'fs';

@Module({
  imports: [
    passportModule,
    MulterModule.register({
      storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
          const uploadPath = join(process.cwd(), '.', 'upload');

          if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
          }

          cb(null, uploadPath);
        },
        filename: (req: any, file: any, cb: any) => {
          cb(null, `${uuid()}${extname(file.originalname)}`);
        },
      }),
    }),
  ],
  providers: [],
  exports: [],
  controllers: [FilesController],
})
export class FilesModule {}
