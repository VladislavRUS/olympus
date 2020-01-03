export interface IProfileState {
  currentProfile: IProfile | null;
  isLoading: boolean;
}

export interface IProfile {
  avatar: string;
  cover: string;
  personalInfo: IPersonalInfo;
}

export interface IPersonalInfo {
  about: string;
  birthday: string;
  birthplace: string;
  occupation: string;
  gender: string;
  email: string;
}

export type TPersonalInfoKey = keyof IPersonalInfo;

export enum ProfileActionTypes {
  GET_PROFILE_REQUEST = '@@profile/GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS = '@@profile/GET_PROFILE_SUCCESS',
  GET_PROFILE_ERROR = '@@profile/GET_PROFILE_ERROR',
  UPDATE_PROFILE_REQUEST = '@@profile/UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS = '@@profile/UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_ERROR = '@@profile/UPDATE_PROFILE_ERROR',
}
