import { action } from 'typesafe-actions';
import { RegisterActionTypes } from './types';

export const onRegisterRequest = (values: any) => action(RegisterActionTypes.REGISTER_REQUEST, values);
export const onRegisterSuccess = () => action(RegisterActionTypes.REGISTER_SUCCESS);
export const onRegisterError = (errorMessage: string) => action(RegisterActionTypes.REGISTER_ERROR, errorMessage);
