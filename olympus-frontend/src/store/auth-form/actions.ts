import { action } from 'typesafe-actions';
import { AuthFormActionTypes } from './types';

export const setLoginMode = () => action(AuthFormActionTypes.SET_LOGIN_MODE);
export const setRegisterMode = () => action(AuthFormActionTypes.SET_REGISTER_MODE);
