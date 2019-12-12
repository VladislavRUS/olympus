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
  return {
    mode: state.authForm.mode,
  } as IMapStateToProps;
};

interface IMapStateToProps {
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

interface IMapDispatchToProps {
  setLoginMode: typeof setLoginMode;
  setRegisterMode: typeof setRegisterMode;
}

type AllProps = IMapStateToProps & IMapDispatchToProps;

const FormModeToggles: React.FC<AllProps> = ({ mode, setLoginMode, setRegisterMode }) => (
  <Wrapper>
    <FormModeToggle icon={LoginModeIcon} onClick={setLoginMode} isActive={mode === AuthFormModes.LOGIN} />
    <Divider />
    <FormModeToggle icon={RegisterModeIcon} onClick={setRegisterMode} isActive={mode === AuthFormModes.REGISTER} />
  </Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(FormModeToggles);
