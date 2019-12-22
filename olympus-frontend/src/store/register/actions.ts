import { action } from 'typesafe-actions';
import { RegisterActionTypes, TGender } from './types';

export const onChangeFirstName = (firstName: string) => action(RegisterActionTypes.CHANGE_FIRST_NAME, firstName);
export const onChangeLastName = (lastName: string) => action(RegisterActionTypes.CHANGE_LAST_NAME, lastName);
export const onChangeEmail = (email: string) => action(RegisterActionTypes.CHANGE_EMAIL, email);
export const onChangePassword = (password: string) => action(RegisterActionTypes.CHANGE_PASSWORD, password);
export const onChangeBirthday = (birthday: string) => action(RegisterActionTypes.CHANGE_BIRTHDAY, birthday);
export const onChangeGender = (gender: TGender) => action(RegisterActionTypes.CHANGE_GENDER, gender);
export const toggleTermsAccept = () => action(RegisterActionTypes.TOGGLE_TERMS_ACCEPT);
export const onRegisterRequest = () => action(RegisterActionTypes.REGISTER_REQUEST);
export const onRegisterSuccess = () => action(RegisterActionTypes.REGISTER_SUCCESS);
export const onRegisterError = (errorMessage: string) => action(RegisterActionTypes.REGISTER_ERROR, errorMessage);
