import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entities/User';
import { Profile } from '../../database/entities/Profile';
import { ProfileDto } from './dto/ProfileDto';
import { PersonalInfo } from '../../database/entities/PersonalInfo';
import { Interests } from '../../database/entities/Interests';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    @InjectRepository(PersonalInfo)
    private readonly personalInfoRepository: Repository<PersonalInfo>,
    @InjectRepository(Interests)
    private readonly interestsRepository: Repository<Interests>,
  ) {}

  async getById(id: number): Promise<Profile | null> {
    return this.profileRepository.findOne({ id }, { relations: ['personalInfo', 'interests'] });
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

  async updateInterests(interestsId: number, profileDto: ProfileDto) {
    const interests = await this.interestsRepository.findOne({ id: interestsId });

    interests.hobbies = profileDto.interests.hobbies;
    interests.tvShows = profileDto.interests.tvShows;
    interests.movies = profileDto.interests.movies;
    interests.games = profileDto.interests.games;
    interests.music = profileDto.interests.music;
    interests.books = profileDto.interests.books;
    interests.writers = profileDto.interests.writers;
    interests.other = profileDto.interests.other;

    await this.interestsRepository.save(interests);

    return interests;
  }

  async updateProfile(id: number, profileDto: ProfileDto): Promise<Profile | null> {
    const profile = await this.getById(id);

    profile.avatar = profileDto.avatar;
    profile.cover = profileDto.cover;
    await this.profileRepository.save(profile);

    profile.personalInfo = await this.updatePersonalInfo(profile.personalInfoId, profileDto);
    profile.interests = await this.updateInterests(profile.interestsId, profileDto);

    return profile;
  }
}
