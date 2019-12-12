import React from 'react';
import { AnimatedFormWrapper, FormContent, Wrapper } from './AuthForm.styles';
import { IApplicationState } from '../../../store';
import { FormModeToggles } from './FormModeToggles';
import { AuthFormModes } from '../../../store/auth-form/types';
import { LoginForm } from './LoginForm';
import { connect } from 'react-redux';
import { PoseGroup } from 'react-pose';
import RegisterForm from './RegisterForm/RegisterForm';

interface IStateProps {
  mode: AuthFormModes;
}

const mapStateToProps = (state: IApplicationState): IStateProps => ({
  mode: state.authForm.mode,
});

type Props = IStateProps;

const AuthForm: React.FC<Props> = ({ mode }) => (
  <Wrapper>
    <FormModeToggles />
    <FormContent>
      <PoseGroup>
        {mode === AuthFormModes.LOGIN ? (
          <AnimatedFormWrapper key={'login'}>
            <LoginForm />
          </AnimatedFormWrapper>
        ) : (
          <AnimatedFormWrapper key={'register'}>
            <RegisterForm />
          </AnimatedFormWrapper>
        )}
      </PoseGroup>
    </FormContent>
  </Wrapper>
);

export default connect<IStateProps, {}, {}, IApplicationState>(mapStateToProps)(AuthForm);
