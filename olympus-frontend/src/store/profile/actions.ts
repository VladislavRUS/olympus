import { action } from 'typesafe-actions';
import { IProfile, ProfileActionTypes } from './types';

export const getProfileRequest = (id: string) => action(ProfileActionTypes.GET_PROFILE_REQUEST, id);
export const getProfileSuccess = (profile: IProfile) => action(ProfileActionTypes.GET_PROFILE_SUCCESS, profile);
export const getProfileError = () => action(ProfileActionTypes.GET_PROFILE_ERROR);

export const updateProfileRequest = (profile: IProfile) => action(ProfileActionTypes.UPDATE_PROFILE_REQUEST, profile);
export const updateProfileSuccess = (profile: IProfile) => action(ProfileActionTypes.UPDATE_PROFILE_SUCCESS, profile);
export const updateProfileError = () => action(ProfileActionTypes.UPDATE_PROFILE_ERROR);
