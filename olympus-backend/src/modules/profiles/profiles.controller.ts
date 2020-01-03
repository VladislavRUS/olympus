import {
  Controller,
  UseGuards,
  Get,
  Param,
  NotFoundException,
  Put,
  Body,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfilesService } from './profiles.service';
import { ProfileDto } from './dto/ProfileDto';
import { UsersService } from '../users/users.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService, private userService: UsersService) {}

  @UseGuards(AuthGuard())
  @Get('/:id')
  async getProfile(@Param('id') id) {
    const profile = await this.profileService.getById(id);

    if (!profile) {
      throw new NotFoundException();
    }

    return profile;
  }

  @UseGuards(AuthGuard())
  @Put('/:id')
  async updateProfile(@Param('id') id, @Body() profileDto: ProfileDto, @Request() req) {
    const user = await this.userService.findById(req.user.id);

    if (user.profileId !== +id) {
      throw new UnauthorizedException();
    }

    return await this.profileService.updateProfile(id, profileDto);
  }
}
