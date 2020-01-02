import { action } from 'typesafe-actions';
import { LoginActionTypes } from './types';

export const onLoginRequest = (values: any) => action(LoginActionTypes.LOGIN_REQUEST, values);
export const onLoginSuccess = () => action(LoginActionTypes.LOGIN_SUCCESS);
export const onLoginError = (errorMessage: string) => action(LoginActionTypes.LOGIN_ERROR, errorMessage);
