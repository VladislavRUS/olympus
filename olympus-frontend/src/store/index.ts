import { combineReducers } from 'redux';
import { loginReducer } from './login/reducer';
import { registerReducer } from './register/reducer';
import { authFormReducer } from './auth-form/reducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { ILoginState } from './login/types';
import { IAuthFormState } from './auth-form/types';
import { IRegisterState } from './register/types';

export interface IApplicationState {
  login: ILoginState;
  register: IRegisterState;
  authForm: IAuthFormState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    authForm: authFormReducer,
    login: loginReducer,
    register: registerReducer,
    router: connectRouter(history),
  });
