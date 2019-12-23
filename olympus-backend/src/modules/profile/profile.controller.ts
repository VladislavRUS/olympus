import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @UseGuards(AuthGuard())
  @Get('/')
  async profile(@Request() req) {
    return await this.profileService.findByUserId(req.user.id);
  }
}
