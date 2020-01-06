import { action, createAsyncAction } from 'typesafe-actions';
import { IProfile, ProfileActionTypes } from './types';

export const getProfile = (id: string) => action(ProfileActionTypes.GET_PROFILE, id);
export const fetchProfileAsync = createAsyncAction(
  ProfileActionTypes.GET_PROFILE_REQUEST,
  ProfileActionTypes.GET_PROFILE_SUCCESS,
  ProfileActionTypes.GET_PROFILE_ERROR,
)<undefined, IProfile, Error>();

export const updateProfile = (profile: IProfile) => action(ProfileActionTypes.UPDATE_PROFILE, profile);
export const updateProfileAsync = createAsyncAction(
  ProfileActionTypes.UPDATE_PROFILE_REQUEST,
  ProfileActionTypes.UPDATE_PROFILE_SUCCESS,
  ProfileActionTypes.UPDATE_PROFILE_ERROR,
)<undefined, IProfile, Error>();

export const updateProfileCover = (file: File) => action(ProfileActionTypes.UPDATE_PROFILE_COVER, file);
export const updateProfileAvatar = (file: File) => action(ProfileActionTypes.UPDATE_PROFILE_AVATAR, file);

export const openPersonalInfoEditModal = () => action(ProfileActionTypes.OPEN_PERSONAL_INFO_EDIT_MODAL);
export const openInterestsEditModal = () => action(ProfileActionTypes.OPEN_INTERESTS_EDIT_MODAL);
export const openEducationEditModal = () => action(ProfileActionTypes.OPEN_EDUCATION_EDIT_MODAL);
export const closeEditModals = () => action(ProfileActionTypes.CLOSE_EDIT_MODALS);
