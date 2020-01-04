import React from 'react';
import { Divider, Wrapper } from './FormModeToggles.styles';
import { LoginModeIcon } from '../../../../components/Icons/LoginModeIcon';
import { RegisterModeIcon } from '../../../../components/Icons/RegisterModeIcon';
import { FormModeToggle } from './FormModeToggle';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../../store';
import { AuthFormModes } from '../../../../store/auth-form/types';
import { bindActionCreators, Dispatch } from 'redux';
import { setLoginMode, setRegisterMode } from '../../../../store/auth-form/actions';

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    mode: state.authForm.mode,
  };

  return stateProps;
};

interface IStateProps {
  mode: AuthFormModes;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setLoginMode,
      setRegisterMode,
    },
    dispatch,
  );

interface IDispatchToProps {
  setLoginMode: typeof setLoginMode;
  setRegisterMode: typeof setRegisterMode;
}

type TProps = IStateProps & IDispatchToProps;

const FormModeToggles: React.FC<TProps> = ({ mode, setLoginMode, setRegisterMode }) => (
  <Wrapper>
    <FormModeToggle icon={LoginModeIcon} onClick={setLoginMode} isActive={mode === AuthFormModes.LOGIN} />
    <Divider />
    <FormModeToggle icon={RegisterModeIcon} onClick={setRegisterMode} isActive={mode === AuthFormModes.REGISTER} />
  </Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(FormModeToggles);
