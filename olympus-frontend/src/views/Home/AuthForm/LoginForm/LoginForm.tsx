import React from 'react';
import { IApplicationState } from '../../../../store';
import { RegularInput } from '../../../../components/RegularInput';
import { connect } from 'react-redux';
import { BaseForm } from '../BaseForm';
import { Spacer } from '../../../../components/Spacer';
import { withTranslation, WithTranslation } from 'react-i18next';
import { reduxForm, InjectedFormProps, Field, WrappedFieldProps } from 'redux-form';
import { RegularButton } from '../../../../components/RegularButton';
import { RegularButtonMode } from '../../../../components/RegularButton/RegularButton';
import { email, required } from '../../../../utils/validators';

const mapStateToProps = (state: IApplicationState) => ({
  errorMessage: state.login.errorMessage,
  isLoading: state.login.isLoading,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & InjectedFormProps & WithTranslation;

class LoginForm extends React.Component<TProps> {
  renderField = (props: WrappedFieldProps & { placeholder: string; type: string }) => {
    const { t } = this.props;
    const { type, placeholder, input, meta } = props;
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
        type={type}
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
          type={'password'}
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
const ConnectedLoginForm = connect(mapStateToProps)(LoginForm);

export default createReduxForm(translated(ConnectedLoginForm));
