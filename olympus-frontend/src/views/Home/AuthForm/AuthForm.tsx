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

interface IStateProps {
  mode: AuthFormModes;
  isLoading: boolean;
}

const mapStateToProps = (state: IApplicationState): IStateProps => ({
  mode: state.authForm.mode,
  isLoading: state.login.isLoading || state.register.isLoading,
});

type Props = IStateProps;

const AuthForm: React.FC<Props> = ({ mode, isLoading }) => (
  <Wrapper>
    <FormModeToggles />
    <FormContent>
      <PoseGroup>
        {mode === AuthFormModes.LOGIN ? (
          <FormWrapper key={'login'}>
            <LoginForm />
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

export default connect<IStateProps, {}, {}, IApplicationState>(mapStateToProps)(AuthForm);
