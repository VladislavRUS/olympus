export interface IProfileState {
  profile: IProfile;
  isLoading: boolean;
}

export interface IProfile {
  firstName: string;
  lastName: string;
}

export enum ProfileActionTypes {
  GET_PROFILE_REQUEST = '@@profile/GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS = '@@profile/GET_PROFILE_SUCCESS',
  GET_PROFILE_ERROR = '@@profile/GET_PROFILE_ERROR',
}
