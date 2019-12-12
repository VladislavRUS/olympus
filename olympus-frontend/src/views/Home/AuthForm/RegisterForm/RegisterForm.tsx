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
  toggleTermsAccept,
} from '../../../../store/register/actions';
import { IRegisterCredentials } from '../../../../store/register/types';
import { CheckboxRow } from '../../../../components/CheckboxRow';
import { TextHighlight } from '../../../../components/TextHighlight';

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
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    ...state.register.credentials,
  };
};

type AllProps = IRegisterCredentials & IDispatchProps;

class RegisterForm extends React.Component<AllProps> {
  onHighlightClick = (event?: React.MouseEvent<HTMLElement>) => {
    event && event.stopPropagation();
    alert('TERMS AND CONDITIONS');
  };

  render() {
    const {
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
    } = this.props;

    const isButtonDisabled =
      !firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !isTermsAccepted;

    return (
      <BaseForm title={'Register to Olympus'}>
        <NamesWrapper>
          <RegularInput value={firstName} onChangeText={onChangeFirstName} placeholder={'First Name'} />
          <Spacer width={20} />
          <RegularInput value={lastName} onChangeText={onChangeLastName} placeholder={'Last Name'} />
        </NamesWrapper>
        <Spacer height={20} />
        <RegularInput value={email} onChangeText={onChangeEmail} placeholder={'Email'} />
        <Spacer height={20} />
        <RegularInput value={password} onChangeText={onChangePassword} placeholder={'Password'} type={'password'} />
        <Spacer height={20} />
        <CheckboxRow onClick={toggleTermsAccept} isActive={isTermsAccepted}>
          <TermsText>
            I accept the <TextHighlight onClick={this.onHighlightClick}>Terms and Conditions</TextHighlight> of the
            website
          </TermsText>
        </CheckboxRow>
        <Spacer height={20} />
        <RegularButton text={'Complete Registration!'} onClick={() => {}} isDisabled={isButtonDisabled} />
      </BaseForm>
    );
  }
}

export default connect<IRegisterCredentials, IDispatchProps, {}, IApplicationState>(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
