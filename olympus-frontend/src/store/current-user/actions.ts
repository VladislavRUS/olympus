import { action } from 'typesafe-actions';
import { IUser, CurrentUserActionTypes } from './types';

export const getCurrentUserRequest = () => action(CurrentUserActionTypes.GET_CURRENT_USER_REQUEST);
export const getCurrentUserSuccess = (user: IUser) => action(CurrentUserActionTypes.GET_CURRENT_USER_SUCCESS, user);
export const getCurrentUserError = () => action(CurrentUserActionTypes.GET_CURRENT_USER_ERROR);

export const onLogout = () => action(CurrentUserActionTypes.LOGOUT);
