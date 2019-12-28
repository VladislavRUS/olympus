import React from 'react';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { onChangeEmail, onChangePassword, onLoginRequest } from '../../../../store/login/actions';
import { IApplicationState } from '../../../../store';
import { RegularInput } from '../../../../components/RegularInput';
import { connect } from 'react-redux';
import { BaseForm } from '../BaseForm';
import { RegularButton } from '../../../../components/RegularButton';
import { Spacer } from '../../../../components/Spacer';
import { withTranslation, WithTranslation } from 'react-i18next';
import { ErrorMessage } from '../../../../components/ErrorMessage';
import validator from 'validator';
import { RegularButtonMode } from '../../../../components/RegularButton/RegularButton';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onChangeEmail,
      onChangePassword,
      onLoginRequest,
    },
    dispatch,
  );

interface IDispatchProps {
  onChangeEmail: typeof onChangeEmail;
  onChangePassword: typeof onChangePassword;
  onLoginRequest: typeof onLoginRequest;
}

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    email: state.login.credentials.email,
    password: state.login.credentials.password,
    errorMessage: state.login.errorMessage,
    isLoading: state.login.isLoading,
  };

  return stateProps;
};

interface IStateProps {
  email: string;
  password: string;
  errorMessage: string;
  isLoading: boolean;
}

type AllProps = IStateProps & IDispatchProps & WithTranslation;

class LoginForm extends React.Component<AllProps> {
  render() {
    const { isLoading, errorMessage, email, password, onChangeEmail, onChangePassword, onLoginRequest, t } = this.props;

    const isButtonDisabled = !email.trim() || !password.trim() || !validator.isEmail(email);

    return (
      <BaseForm title={t('home.login.title')} onSubmit={onLoginRequest}>
        <RegularInput
          value={email}
          onChangeText={onChangeEmail}
          placeholder={t('home.login.emailPlaceholder')}
          name={'email'}
          isValid={email ? validator.isEmail(email) : true}
        />
        <Spacer height={20} />
        <RegularInput
          value={password}
          onChangeText={onChangePassword}
          placeholder={t('home.login.passwordPlaceholder')}
          type={'password'}
          name={'password'}
        />
        <Spacer height={20} />
        <RegularButton
          type={'submit'}
          text={t('home.login.loginButtonTitle')}
          isDisabled={isButtonDisabled}
          isLoading={isLoading}
          mode={RegularButtonMode.PRIMARY}
        />
        <Spacer height={20} />
        <ErrorMessage message={errorMessage} />
      </BaseForm>
    );
  }
}

export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(LoginForm);
