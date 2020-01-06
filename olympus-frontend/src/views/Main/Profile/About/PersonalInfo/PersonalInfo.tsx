import React from 'react';
import { InformationCard } from '../../../../../components/InformationCard';
import { withTranslation, WithTranslation } from 'react-i18next';
import { InfoBlock } from '../../../../../components/InfoBlock';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../../../store';
import { IProfile, TPersonalInfoKey } from '../../../../../store/profile/types';
import { Empty } from './PersonalInfo.styles';
import { PersonalInfoForm } from './PersonalInfoForm';
import { Modal } from '../../../../../components/Modal';
import { closeEditModals, openPersonalInfoEditModal, updateProfile } from '../../../../../store/profile/actions';
import { Loader } from '../../../../../components/Loader';
import { formatDate } from '../../../../../i18n';

interface IPersonalInfoField {
  personalInfoKey: TPersonalInfoKey;
  textTranslationKey: string;
}

const personalInfoFields: IPersonalInfoField[] = [
  {
    personalInfoKey: 'about',
    textTranslationKey: 'profile.personalInfo.about',
  },
  {
    personalInfoKey: 'birthday',
    textTranslationKey: 'profile.personalInfo.birthday',
  },
  {
    personalInfoKey: 'birthplace',
    textTranslationKey: 'profile.personalInfo.birthplace',
  },
  {
    personalInfoKey: 'occupation',
    textTranslationKey: 'profile.personalInfo.occupation',
  },
  {
    personalInfoKey: 'gender',
    textTranslationKey: 'profile.personalInfo.gender',
  },
  {
    personalInfoKey: 'email',
    textTranslationKey: 'profile.personalInfo.email',
  },
];

const mapStateToProps = (state: IApplicationState) => ({
  profile: state.profile.current,
  isUpdatingProfile: state.profile.isLoading,
  isModalOpened: state.profile.editModals.isPersonalInfoOpened,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateProfile,
      closeEditModals,
      openPersonalInfoEditModal,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps & WithTranslation;

class PersonalInfo extends React.Component<TProps> {
  onSubmit = (values: any) => {
    const { profile } = this.props;

    if (!profile) {
      return;
    }

    const updatedProfile: IProfile = {
      ...profile,
      personalInfo: values,
    };

    this.props.updateProfile(updatedProfile);
  };

  render() {
    const { t, profile, isUpdatingProfile } = this.props;

    if (!profile) {
      return null;
    }

    const { personalInfo } = profile;

    const hasFilledValues = personalInfoFields.map(field => personalInfo[field.personalInfoKey]).find(value => value);

    return (
      <InformationCard title={t('profile.about.personalInfo.title')} onEdit={this.props.openPersonalInfoEditModal}>
        {hasFilledValues ? (
          personalInfoFields.map(field => {
            let value = personalInfo[field.personalInfoKey];

            if (!value) {
              return null;
            }

            if (field.personalInfoKey === 'gender') {
              value = t(`profile.personalInfo.gender.${value}`);
            }

            if (field.personalInfoKey === 'birthday') {
              const dateFormat = t('profile.personalInfo.birthdayFormat');

              value = formatDate(new Date(value), dateFormat);
            }

            return (
              <InfoBlock
                key={field.personalInfoKey}
                title={t(field.textTranslationKey)}
                value={value}
                direction={'horizontal'}
              />
            );
          })
        ) : (
          <Empty>{t('profile.personalInfo.empty')}</Empty>
        )}

        <Modal isOpened={this.props.isModalOpened} onRequestClose={this.props.closeEditModals}>
          <PersonalInfoForm
            onSubmit={this.onSubmit}
            onCancel={this.props.closeEditModals}
            initialValues={personalInfo}
          />
          <Loader isVisible={isUpdatingProfile} />
        </Modal>
      </InformationCard>
    );
  }
}

export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(PersonalInfo);
