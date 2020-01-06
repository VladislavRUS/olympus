import { PersonalInfoDto } from './PersonalInfoDto';
import { InterestsDto } from './InterestsDto';

export class ProfileDto {
  avatar: string;
  cover: string;
  personalInfo: PersonalInfoDto;
  interests: InterestsDto;
}
