import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard())
  @Get('/current')
  async profile(@Request() req) {
    return await this.usersService.findById(req.user.id);
  }
}
