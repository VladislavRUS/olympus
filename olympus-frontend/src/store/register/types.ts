export interface IRegisterState {
  isLoading: boolean;
  errorMessage: string;
}

export enum RegisterActionTypes {
  REGISTER_REQUEST = '@@register/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@register/REGISTER_SUCCESS',
  REGISTER_ERROR = '@@register/REGISTER_ERROR',
}
