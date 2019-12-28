import { Controller, UseGuards, Request, Get, Param, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @UseGuards(AuthGuard())
  @Get('/:id')
  async profile(@Param('id') id, @Request() req) {
    if (req.user.id === +id) {
      return await this.profileService.findByUserId(req.user.id);
    }

    throw new UnauthorizedException();
  }
}
