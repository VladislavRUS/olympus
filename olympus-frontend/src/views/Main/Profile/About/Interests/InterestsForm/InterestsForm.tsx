import React from 'react';
import { Wrapper } from './InterestsForm.styles';
import { reduxForm, InjectedFormProps, WrappedFieldProps, Field } from 'redux-form';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RegularInput } from '../../../../../../components/RegularInput';
import { EditButtons } from '../../../../../../components/EditButtons';
import { Spacer } from '../../../../../../components/Spacer';

interface IInterestsFormProps {
  onCancel: () => void;
}

type TProps = WithTranslation & InjectedFormProps<{}, IInterestsFormProps> & IInterestsFormProps;

class InterestsForm extends React.Component<TProps> {
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
    const { t, handleSubmit, onCancel, invalid } = this.props;

    return (
      <Wrapper onSubmit={handleSubmit}>
        <Field name={'hobbies'} component={this.renderField} placeholder={t('profile.interests.hobbies')} />

        <Spacer height={20} />

        <Field name={'tvShows'} component={this.renderField} placeholder={t('profile.interests.tvShows')} />

        <Spacer height={20} />

        <Field name={'movies'} component={this.renderField} placeholder={t('profile.interests.movies')} />

        <Spacer height={20} />

        <Field name={'games'} component={this.renderField} placeholder={t('profile.interests.games')} />

        <Spacer height={20} />

        <Field name={'music'} component={this.renderField} placeholder={t('profile.interests.music')} />

        <Spacer height={20} />

        <Field name={'books'} component={this.renderField} placeholder={t('profile.interests.books')} />

        <Spacer height={20} />

        <Field name={'writers'} component={this.renderField} placeholder={t('profile.interests.writers')} />

        <Spacer height={20} />

        <Field name={'other'} component={this.renderField} placeholder={t('profile.interests.other')} />

        <Spacer height={20} />

        <EditButtons
          leftButtonText={t('app.cancel')}
          leftButtonClick={onCancel}
          rightButtonText={t('app.save')}
          isRightButtonDisabled={invalid}
        />
      </Wrapper>
    );
  }
}

const createReduxForm = reduxForm<{}, IInterestsFormProps>({ form: 'interests' });
const translated = withTranslation();

export default createReduxForm(translated(InterestsForm));
