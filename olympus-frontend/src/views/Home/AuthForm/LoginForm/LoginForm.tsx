import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { onLoginRequest } from '../../../../store/login/actions';
import { IApplicationState } from '../../../../store';
import { RegularInput } from '../../../../components/RegularInput';
import { connect } from 'react-redux';
import { BaseForm } from '../BaseForm';
import { Spacer } from '../../../../components/Spacer';
import { withTranslation, WithTranslation } from 'react-i18next';
import { reduxForm, InjectedFormProps, Field, WrappedFieldProps } from 'redux-form';
import { RegularButton } from '../../../../components/RegularButton';
import { RegularButtonMode } from '../../../../components/RegularButton/RegularButton';
import validator from 'validator';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onLoginRequest,
    },
    dispatch,
  );

interface IDispatchProps {
  onLoginRequest: typeof onLoginRequest;
}

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    errorMessage: state.login.errorMessage,
    isLoading: state.login.isLoading,
  };

  return stateProps;
};

interface IStateProps {
  errorMessage: string;
  isLoading: boolean;
}

type AllProps = IStateProps & IDispatchProps & InjectedFormProps & WithTranslation;

const email = (value?: string) => (value && validator.isEmail(value) ? undefined : 'form.errors.email');
const required = (value?: string) => (value ? undefined : 'form.errors.required');

class LoginForm extends React.Component<AllProps> {
  renderField = (props: WrappedFieldProps & { placeholder: string }) => {
    const { t } = this.props;
    const { placeholder, input, meta } = props;
    const { value, onChange, name, onFocus, onBlur } = input;

    return (
      <RegularInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        error={t(meta.error)}
        touched={meta.touched}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  };

  render() {
    const { handleSubmit, t, invalid, isLoading } = this.props;

    return (
      <BaseForm title={t('home.login.title')} onSubmit={handleSubmit}>
        <Field
          name={'email'}
          component={this.renderField}
          placeholder={t('home.login.emailPlaceholder')}
          validate={email}
        />

        <Spacer height={20} />

        <Field
          name={'password'}
          component={this.renderField}
          placeholder={t('home.login.passwordPlaceholder')}
          validate={required}
        />

        <Spacer height={20} />

        <RegularButton
          type={'submit'}
          text={t('home.login.loginButtonTitle')}
          isDisabled={invalid}
          isLoading={isLoading}
          mode={RegularButtonMode.PRIMARY}
        />
        <Spacer height={20} />
      </BaseForm>
    );
  }
}

const createReduxForm = reduxForm({ form: 'login' });
const translated = withTranslation();
const ConnectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default createReduxForm(translated(ConnectedLoginForm));
