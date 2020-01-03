import { IsEmail } from 'class-validator';

export class PersonalInfoDto {
  @IsEmail()
  email: string;
  about: string;
  birthday: string;
  birthplace: string;
  occupation: string;
  gender: string;
}
