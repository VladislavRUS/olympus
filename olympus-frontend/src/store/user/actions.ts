import { action, createAsyncAction } from 'typesafe-actions';
import { IUser, UserActionTypes } from './types';

export const fetchUserAsync = createAsyncAction(
  UserActionTypes.GET_CURRENT_USER_REQUEST,
  UserActionTypes.GET_CURRENT_USER_SUCCESS,
  UserActionTypes.GET_CURRENT_USER_ERROR,
)<undefined, IUser, undefined>();

export const getCurrentUser = () => action(UserActionTypes.GET_CURRENT_USER);

export const onLogout = () => action(UserActionTypes.LOGOUT);
