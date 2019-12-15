import { Body, ConflictException, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';
import { ErrorCodes } from '../../constants/ErrorCodes';
import { hashSync } from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { User } from '../../database/entities/User';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto): Promise<void> {
    const { firstName, lastName, email, password } = createUserDto;

    const existingUser = await this.usersService.findByEmail(email);

    if (existingUser) {
      throw new ConflictException(ErrorCodes.REGISTER_USERS_EXISTS);
    } else {
      const user = new User();
      user.email = email;
      user.lastName = lastName;
      user.firstName = firstName;
      user.passwordHash = hashSync(password, 8);

      await this.usersService.create(user);
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard())
  @Get('/profile')
  async profile(@Request() req) {
    return await this.usersService.findById(req.user.id);
  }
}
