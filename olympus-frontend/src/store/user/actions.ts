import { action } from 'typesafe-actions';
import { IUser, UserActionTypes } from './types';

export const getCurrentUserRequest = () => action(UserActionTypes.GET_CURRENT_USER_REQUEST);
export const getCurrentUserSuccess = (user: IUser) => action(UserActionTypes.GET_CURRENT_USER_SUCCESS, user);
export const getCurrentUserError = () => action(UserActionTypes.GET_CURRENT_USER_ERROR);

export const onLogout = () => action(UserActionTypes.LOGOUT);
