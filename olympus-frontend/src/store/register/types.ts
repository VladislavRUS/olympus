export interface IRegisterState {
  isLoading: boolean;
  errorMessage: string;
  credentials: IRegisterCredentials;
}

export interface IRegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: string;
  gender: TGender;
  isTermsAccepted: boolean;
}

export type TGender = 'male' | 'female' | null;

export enum RegisterActionTypes {
  CHANGE_FIRST_NAME = '@@register/CHANGE_FIRST_NAME',
  CHANGE_LAST_NAME = '@@register/CHANGE_LAST_NAME',
  CHANGE_EMAIL = '@@register/CHANGE_EMAIL',
  CHANGE_PASSWORD = '@@register/CHANGE_PASSWORD',
  CHANGE_BIRTHDAY = '@@register/CHANGE_BIRTHDAY',
  CHANGE_GENDER = '@@register/CHANGE_GENDER',
  TOGGLE_TERMS_ACCEPT = '@@register/TOGGLE_TERMS_ACCEPT',
  REGISTER_REQUEST = '@@register/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@register/REGISTER_SUCCESS',
  REGISTER_ERROR = '@@register/REGISTER_ERROR',
}
