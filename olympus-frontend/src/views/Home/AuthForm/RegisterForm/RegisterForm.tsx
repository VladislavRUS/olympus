import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from '../../../../store';
import { RegularInput } from '../../../../components/RegularInput';
import { connect } from 'react-redux';
import { BaseForm } from '../BaseForm';
import { RegularButton } from '../../../../components/RegularButton';
import { Spacer } from '../../../../components/Spacer';
import { NamesWrapper, TermsText } from './RegisterForm.styles';
import {
  onChangeBirthday,
  onChangeEmail,
  onChangeFirstName,
  onChangeGender,
  onChangeLastName,
  onChangePassword,
  onRegisterRequest,
  toggleTermsAccept,
} from '../../../../store/register/actions';
import { IRegisterCredentials } from '../../../../store/register/types';
import { CheckboxRow } from '../../../../components/CheckboxRow';
import { TextHighlight } from '../../../../components/TextHighlight';
import { withTranslation, WithTranslation } from 'react-i18next';
import { ErrorMessage } from '../../../../components/ErrorMessage';
import { RegularButtonMode } from '../../../../components/RegularButton/RegularButton';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onChangeFirstName,
      onChangeLastName,
      onChangeEmail,
      onChangePassword,
      onChangeBirthday,
      onChangeGender,
      toggleTermsAccept,
      onRegisterRequest,
    },
    dispatch,
  );

interface IDispatchProps {
  onChangeEmail: typeof onChangeEmail;
  onChangePassword: typeof onChangePassword;
  onChangeFirstName: typeof onChangeFirstName;
  onChangeLastName: typeof onChangeLastName;
  onChangeBirthday: typeof onChangeBirthday;
  onChangeGender: typeof onChangeGender;
  toggleTermsAccept: typeof toggleTermsAccept;
  onRegisterRequest: typeof onRegisterRequest;
}

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    ...state.register.credentials,
    errorMessage: state.register.errorMessage,
    isLoading: state.register.isLoading,
  };

  return stateProps;
};

interface IStateProps extends IRegisterCredentials {
  errorMessage: string;
  isLoading: boolean;
}

type AllProps = IStateProps & IDispatchProps & WithTranslation;

class RegisterForm extends React.Component<AllProps> {
  onHighlightClick = (event?: React.MouseEvent<HTMLElement>) => {
    const { t } = this.props;

    event && event.stopPropagation();
    alert(t('home.register.termsAndConditions'));
  };

  render() {
    const {
      t,
      isLoading,
      errorMessage,
      firstName,
      lastName,
      email,
      password,
      isTermsAccepted,
      onChangeFirstName,
      onChangeLastName,
      onChangeEmail,
      onChangePassword,
      toggleTermsAccept,
      onRegisterRequest,
    } = this.props;

    const isButtonDisabled =
      !firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !isTermsAccepted;

    return (
      <BaseForm title={t('home.register.title')} onSubmit={onRegisterRequest}>
        <NamesWrapper>
          <RegularInput
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder={t('home.register.firstNamePlaceholder')}
          />
          <Spacer width={20} />
          <RegularInput
            value={lastName}
            onChangeText={onChangeLastName}
            placeholder={t('home.register.lastNamePlaceholder')}
          />
        </NamesWrapper>
        <Spacer height={20} />
        <RegularInput value={email} onChangeText={onChangeEmail} placeholder={t('home.register.emailPlaceholder')} />
        <Spacer height={20} />
        <RegularInput
          value={password}
          onChangeText={onChangePassword}
          placeholder={t('home.register.passwordPlaceholder')}
          type={'password'}
        />
        <Spacer height={20} />
        <CheckboxRow onClick={toggleTermsAccept} isActive={isTermsAccepted}>
          <TermsText>
            {t('home.register.accept')}{' '}
            <TextHighlight onClick={this.onHighlightClick}>
              {t('home.register.termsAndConditionsButtonTitle')}
            </TextHighlight>{' '}
            {t('home.register.website')}
          </TermsText>
        </CheckboxRow>
        <Spacer height={20} />
        <RegularButton
          type={'submit'}
          text={t('home.register.registerButtonTitle')}
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(RegisterForm));
