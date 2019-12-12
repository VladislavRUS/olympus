import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { onChangeEmail, onChangePassword } from '../../../../store/login/actions';
import { IApplicationState } from '../../../../store';
import { RegularInput } from '../../../../components/RegularInput';
import { connect } from 'react-redux';
import { BaseForm } from '../BaseForm';
import { RegularButton } from '../../../../components/RegularButton';
import { Spacer } from '../../../../components/Spacer';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onChangeEmail,
      onChangePassword,
    },
    dispatch,
  );

interface IMapDispatchToProps {
  onChangeEmail: typeof onChangeEmail;
  onChangePassword: typeof onChangePassword;
}

const mapStateToProps = (state: IApplicationState) => {
  return {
    email: state.login.credentials.email,
    password: state.login.credentials.password,
  } as IMapStateToProps;
};

interface IMapStateToProps {
  email: string;
  password: string;
}

type AllProps = IMapStateToProps & IMapDispatchToProps;

class LoginForm extends React.Component<AllProps> {
  render() {
    const { email, password, onChangeEmail, onChangePassword } = this.props;

    const isButtonDisabled = !email.trim() || !password.trim();

    return (
      <BaseForm title={'Login to Olympus'}>
        <RegularInput value={email} onChangeText={onChangeEmail} placeholder={'Email'} name={'email'} />
        <Spacer height={20} />
        <RegularInput
          value={password}
          onChangeText={onChangePassword}
          placeholder={'Password'}
          type={'password'}
          name={'password'}
        />
        <Spacer height={20} />
        <RegularButton text={'Login'} onClick={() => {}} isDisabled={isButtonDisabled} />
      </BaseForm>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
