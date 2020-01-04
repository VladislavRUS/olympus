import React from 'react';
import { Wrapper } from './PersonalInfoForm.styles';
import { reduxForm, InjectedFormProps, WrappedFieldProps, Field } from 'redux-form';
import { withTranslation, WithTranslation } from 'react-i18next';
import { RegularInput } from '../../../../../../components/RegularInput';
import { EditButtons } from '../../../../../../components/EditButtons';
import { Spacer } from '../../../../../../components/Spacer';
import { email } from '../../../../../../utils/validators';
import { Select } from '../../../../../../components/Select';
import { TextOption } from '../../../../../../components/Select/Options/TextOption';
import { DatePicker } from '../../../../../../components/DatePicker';

interface IPersonalInfoFormProps {
  onCancel: () => void;
}

type TProps = WithTranslation & InjectedFormProps<{}, IPersonalInfoFormProps> & IPersonalInfoFormProps;

class PersonalInfoForm extends React.Component<TProps> {
  genders = ['male', 'female'];

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

  renderSelect = (props: WrappedFieldProps & { placeholder: string }) => {
    const { t } = this.props;
    const { input } = props;
    const { onChange, value } = input;

    const selected = this.genders.find(gender => gender === value);

    return (
      <Select
        items={this.genders}
        placeholder={t('profile.personalInfo.gender.placeholder')}
        extractValue={item => t(`profile.personalInfo.gender.${item}`)}
        selectedItem={selected || ''}
        renderItem={item => <TextOption text={t(`profile.personalInfo.gender.${item}`)} />}
        onItemClick={item => onChange(item)}
      />
    );
  };

  renderDatePicker = (props: WrappedFieldProps & { placeholder: string }) => {
    const { t } = this.props;

    const { input, placeholder } = props;
    const { onChange, value } = input;

    const onChangeDate = (date: Date) => onChange(date.toISOString());

    const date = value ? new Date(value) : null;

    return (
      <DatePicker
        date={date}
        onChange={onChangeDate}
        showYearDropdown={true}
        placeholder={placeholder}
        dateFormat={t('profile.personalInfo.birthdayFormat')}
      />
    );
  };

  render() {
    const { t, handleSubmit, onCancel, invalid } = this.props;

    return (
      <Wrapper onSubmit={handleSubmit}>
        <Field name={'about'} component={this.renderField} placeholder={t('profile.personalInfo.about')} />

        <Spacer height={20} />

        <Field name={'birthday'} component={this.renderDatePicker} placeholder={t('profile.personalInfo.birthday')} />

        <Spacer height={20} />

        <Field name={'birthplace'} component={this.renderField} placeholder={t('profile.personalInfo.birthplace')} />

        <Spacer height={20} />

        <Field name={'occupation'} component={this.renderField} placeholder={t('profile.personalInfo.occupation')} />

        <Spacer height={20} />

        <Field name={'gender'} component={this.renderSelect} placeholder={t('profile.personalInfo.gender')} />

        <Spacer height={20} />

        <Field
          name={'email'}
          component={this.renderField}
          placeholder={t('profile.personalInfo.email')}
          validate={email}
        />

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

const createReduxForm = reduxForm<{}, IPersonalInfoFormProps>({ form: 'personalInfo' });
const translated = withTranslation();

export default createReduxForm(translated(PersonalInfoForm));
