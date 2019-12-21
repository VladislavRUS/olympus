import { action } from 'typesafe-actions';
import { LoginActionTypes } from './types';

export const onChangeEmail = (email: string) => action(LoginActionTypes.CHANGE_EMAIL, email);
export const onChangePassword = (password: string) => action(LoginActionTypes.CHANGE_PASSWORD, password);

export const onLoginRequest = () => action(LoginActionTypes.LOGIN_REQUEST);
export const onLoginSuccess = () => action(LoginActionTypes.LOGIN_SUCCESS);
export const onLoginError = (errorMessage: string) => action(LoginActionTypes.LOGIN_ERROR, errorMessage);
