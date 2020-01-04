import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { IApplicationState } from '../../../../store';
import { RegularInput } from '../../../../components/RegularInput';
import { connect } from 'react-redux';
import { BaseForm } from '../BaseForm';
import { RegularButton } from '../../../../components/RegularButton';
import { Spacer } from '../../../../components/Spacer';
import { NamesWrapper, TermsText } from './RegisterForm.styles';
import { onRegisterRequest } from '../../../../store/register/actions';
import { CheckboxRow } from '../../../../components/CheckboxRow';
import { TextHighlight } from '../../../../components/TextHighlight';
import { withTranslation, WithTranslation } from 'react-i18next';
import { ErrorMessage } from '../../../../components/ErrorMessage';
import { RegularButtonMode } from '../../../../components/RegularButton/RegularButton';
import { Field, reduxForm, WrappedFieldProps, InjectedFormProps } from 'redux-form';
import { email, required } from '../../../../utils/validators';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onRegisterRequest,
    },
    dispatch,
  );

interface IDispatchProps {
  onRegisterRequest: typeof onRegisterRequest;
}

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    errorMessage: state.register.errorMessage,
    isLoading: state.register.isLoading,
  };

  return stateProps;
};

interface IStateProps {
  errorMessage: string;
  isLoading: boolean;
}

type TProps = IStateProps & IDispatchProps & WithTranslation & InjectedFormProps;

type TState = {
  termsAccepted: boolean;
};

class RegisterForm extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      termsAccepted: false,
    };
  }

  get isButtonDisabled() {
    return this.props.invalid || !this.state.termsAccepted;
  }

  onToggleAcceptTerms = () => {
    this.setState({ termsAccepted: !this.state.termsAccepted });
  };

  onHighlightClick = (event?: React.MouseEvent<HTMLElement>) => {
    const { t } = this.props;

    event && event.stopPropagation();
    alert(t('home.register.termsAndConditions'));
  };

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
    const { t, isLoading, errorMessage, handleSubmit } = this.props;

    return (
      <BaseForm title={t('home.register.title')} onSubmit={handleSubmit}>
        <NamesWrapper>
          <Field
            name={'firstName'}
            component={this.renderField}
            placeholder={t('home.register.firstNamePlaceholder')}
          />

          <Spacer width={20} />

          <Field name={'lastName'} component={this.renderField} placeholder={t('home.register.lastNamePlaceholder')} />
        </NamesWrapper>
        <Spacer height={20} />
        <Field
          name={'email'}
          component={this.renderField}
          placeholder={t('home.register.emailPlaceholder')}
          validate={email}
        />

        <Spacer height={20} />
        <Field
          name={'password'}
          component={this.renderField}
          placeholder={t('home.register.passwordPlaceholder')}
          validate={required}
        />

        <Spacer height={20} />

        <CheckboxRow onClick={this.onToggleAcceptTerms} isActive={this.state.termsAccepted}>
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
          isDisabled={this.isButtonDisabled}
          isLoading={isLoading}
          mode={RegularButtonMode.PRIMARY}
        />
        <Spacer height={20} />
        <ErrorMessage message={errorMessage} />
      </BaseForm>
    );
  }
}

const createReduxForm = reduxForm({ form: 'register' });
const translated = withTranslation();
const ConnectedRegisterForm = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

export default createReduxForm(translated(ConnectedRegisterForm));
