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
import { onLoginRequest } from '../../../store/login/actions';

interface IDispatchProps {
  onLoginRequest: typeof onLoginRequest;
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onLoginRequest,
    },
    dispatch,
  );

interface IStateProps {
  mode: AuthFormModes;
  isLoading: boolean;
}

const mapStateToProps = (state: IApplicationState): IStateProps => ({
  mode: state.authForm.mode,
  isLoading: state.login.isLoading || state.register.isLoading,
});

type Props = IStateProps & IDispatchProps;

class AuthForm extends React.Component<Props, any> {
  onLoginSubmit = (values: any) => {
    this.props.onLoginRequest(values);
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
                <RegisterForm />
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
