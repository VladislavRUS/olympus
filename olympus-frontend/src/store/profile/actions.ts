import { action } from 'typesafe-actions';
import { IProfile, ProfileActionTypes } from './types';

export const getProfileRequest = () => action(ProfileActionTypes.GET_PROFILE_REQUEST);
export const getProfileSuccess = (profile: IProfile) => action(ProfileActionTypes.GET_PROFILE_SUCCESS, profile);
export const getProfileError = () => action(ProfileActionTypes.GET_PROFILE_ERROR);
