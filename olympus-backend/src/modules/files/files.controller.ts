import { Controller, UseGuards, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import config from '../../config.json';

@Controller('files')
export class FilesController {
  @UseGuards(AuthGuard())
  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async uploadFile(@UploadedFile() file) {
    const path = config.fileStorageUrl + file.filename;
    return { path };
  }
}
