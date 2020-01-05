import { IProfile } from '../profile/types';

export interface IUserState {
  current: IUser | null;
  isLoading: boolean;
}

export interface IUser {
  id: number;
  email: string;
  profile: IProfile;
}

export enum UserActionTypes {
  GET_CURRENT_USER_REQUEST = '@@user/GET_CURRENT_USER_REQUEST',
  GET_CURRENT_USER_SUCCESS = '@@user/GET_CURRENT_USER_SUCCESS',
  GET_CURRENT_USER_ERROR = '@@user/GET_CURRENT_USER_ERROR',
  LOGOUT = '@@user/LOGOUT',
}
