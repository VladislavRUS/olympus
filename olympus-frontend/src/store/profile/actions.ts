import { action } from 'typesafe-actions';
import { IProfile, ProfileActionTypes } from './types';

export const getProfileRequest = (id: string) => action(ProfileActionTypes.GET_PROFILE_REQUEST, id);
export const getProfileSuccess = (profile: IProfile) => action(ProfileActionTypes.GET_PROFILE_SUCCESS, profile);
export const getProfileError = () => action(ProfileActionTypes.GET_PROFILE_ERROR);
