import { combineReducers } from 'redux';
import { loginReducer } from './login/reducer';
import { loginSaga } from './login/sagas';
import { registerReducer } from './register/reducer';
import { authFormReducer } from './auth-form/reducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { ILoginState } from './login/types';
import { IAuthFormState } from './auth-form/types';
import { IRegisterState } from './register/types';
import { all, fork } from 'redux-saga/effects';
import { registerSaga } from './register/sagas';
import { profileSaga } from './profile/sagas';
import { IProfileState } from './profile/types';
import { profileReducer } from './profile/reducer';

export interface IApplicationState {
  login: ILoginState;
  register: IRegisterState;
  authForm: IAuthFormState;
  profile: IProfileState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    authForm: authFormReducer,
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([fork(loginSaga), fork(registerSaga), fork(profileSaga)]);
}
