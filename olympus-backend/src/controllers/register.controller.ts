import { ConflictException, Controller, Post, Req } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Request } from 'express';

@Controller('/register')
export class RegisterController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(@Req() request: Request): Promise<string> {
    const { email } = request.body;

    const user = await this.userService.find(email);

    if (user) {
      throw new ConflictException('User already exists');
    } else {
      return 'OK';
    }
  }
}
