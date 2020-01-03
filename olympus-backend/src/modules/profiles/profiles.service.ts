import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/User';
import { Profile } from '../../database/entities/Profile';
import { ProfileDto } from './dto/ProfileDto';
import { PersonalInfo } from '../../database/entities/PersonalInfo';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(PersonalInfo)
    private readonly personalInfoRepository: Repository<PersonalInfo>,
  ) {}

  async getById(id: number): Promise<Profile | null> {
    return this.profileRepository.findOne({ id }, { relations: ['personalInfo'] });
  }

  async updatePersonalInfo(personalInfoId: number, profileDto: ProfileDto) {
    const personalInfo = await this.personalInfoRepository.findOne({ id: personalInfoId });

    personalInfo.gender = profileDto.personalInfo.gender;
    personalInfo.about = profileDto.personalInfo.about;
    personalInfo.birthday = profileDto.personalInfo.birthday;
    personalInfo.birthplace = profileDto.personalInfo.birthplace;
    personalInfo.email = profileDto.personalInfo.email;
    personalInfo.occupation = profileDto.personalInfo.occupation;

    await this.personalInfoRepository.save(personalInfo);

    return personalInfo;
  }

  async updateProfile(id: number, profileDto: ProfileDto): Promise<Profile | null> {
    const profile = await this.getById(id);

    profile.cover = profileDto.cover;
    await this.profileRepository.save(profile);

    profile.personalInfo = await this.updatePersonalInfo(profile.personalInfoId, profileDto);

    return profile;
  }
}
