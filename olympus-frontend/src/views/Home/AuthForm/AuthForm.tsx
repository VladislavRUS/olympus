import React from 'react';
import { FormWrapper, FormContent, Wrapper } from './AuthForm.styles';
import { IApplicationState } from '../../../store';
import { FormModeToggles } from './FormModeToggles';
import { AuthFormModes } from '../../../store/auth-form/types';
import { LoginForm } from './LoginForm';
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';
import RegisterForm from './RegisterForm/RegisterForm';
import { LoadingOverlay } from '../../../components/LoadingOverlay';
import { bindActionCreators, Dispatch } from 'redux';
import { onLogin } from '../../../store/login/actions';
import { onRegister } from '../../../store/register/actions';

const mapStateToProps = (state: IApplicationState): IStateProps => ({
  mode: state.authForm.mode,
  isLoading: state.login.isLoading || state.register.isLoading,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onLogin,
      onRegister,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

interface IStateProps {
  mode: AuthFormModes;
  isLoading: boolean;
}

type TProps = TStateProps & TDispatchProps;

class AuthForm extends React.Component<TProps> {
  onLoginSubmit = (values: any) => {
    this.props.onLogin(values);
  };

  onRegisterSubmit = (values: any) => {
    this.props.onRegister(values);
  };

  render() {
    const { mode, isLoading } = this.props;

    return (
      <Wrapper>
        <FormModeToggles />
        <FormContent>
          <PoseGroup>
            {mode === AuthFormModes.LOGIN ? (
              <FormWrapper key={'login'}>
                <LoginForm onSubmit={this.onLoginSubmit} />
              </FormWrapper>
            ) : (
              <FormWrapper key={'register'}>
                <RegisterForm onSubmit={this.onRegisterSubmit} />
              </FormWrapper>
            )}
          </PoseGroup>
        </FormContent>
        <LoadingOverlay isLoading={isLoading} />
      </Wrapper>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
