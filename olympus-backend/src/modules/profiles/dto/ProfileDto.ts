import { PersonalInfoDto } from './PersonalInfoDto';
import { InterestsDto } from './InterestsDto';
import { WorkPlaceDto } from './WorkPlaceDto';

export class ProfileDto {
  avatar: string;
  cover: string;
  personalInfo: PersonalInfoDto;
  interests: InterestsDto;
  workPlaces: WorkPlaceDto[];
}
