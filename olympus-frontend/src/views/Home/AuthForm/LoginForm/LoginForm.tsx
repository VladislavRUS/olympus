import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { onChangeEmail, onChangePassword, onLoginRequest } from '../../../../store/login/actions';
import { IApplicationState } from '../../../../store';
import { RegularInput } from '../../../../components/RegularInput';
import { connect } from 'react-redux';
import { BaseForm } from '../BaseForm';
import { RegularButton } from '../../../../components/RegularButton';
import { Spacer } from '../../../../components/Spacer';
import { withTranslation, WithTranslation } from 'react-i18next';

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
  return {
    email: state.login.credentials.email,
    password: state.login.credentials.password,
    isLoading: state.login.isLoading,
  } as IStateProps;
};

interface IStateProps {
  email: string;
  password: string;
}

type AllProps = IStateProps & IDispatchProps & WithTranslation;

class LoginForm extends React.Component<AllProps> {
  render() {
    const { email, password, onChangeEmail, onChangePassword, onLoginRequest, t } = this.props;

    const isButtonDisabled = !email.trim() || !password.trim();

    return (
      <BaseForm title={t('home.login.title')}>
        <RegularInput
          value={email}
          onChangeText={onChangeEmail}
          placeholder={t('home.login.emailPlaceholder')}
          name={'email'}
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
        <RegularButton text={t('home.login.loginButtonTitle')} onClick={onLoginRequest} isDisabled={isButtonDisabled} />
      </BaseForm>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(LoginForm));
