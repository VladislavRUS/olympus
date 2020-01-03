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
import { updateProfileRequest } from '../../../../../store/profile/actions';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateProfileRequest,
    },
    dispatch,
  );

interface IDispatchProps {
  updateProfileRequest: typeof updateProfileRequest;
}

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    profile: state.profile.currentProfile,
  };

  return stateProps;
};

interface IStateProps {
  profile: IProfile | null;
}

type TProps = WithTranslation & IStateProps & IDispatchProps;

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

type State = {
  isEditModalOpened: boolean;
};

class PersonalInfo extends React.Component<TProps, State> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      isEditModalOpened: false,
    };
  }

  onModalOpen = () => {
    this.setState({ isEditModalOpened: true });
  };

  onModalClose = () => {
    this.setState({ isEditModalOpened: false });
  };

  onSubmit = (values: any) => {
    const { profile } = this.props;

    if (!profile) {
      return;
    }

    const updatedProfile: IProfile = {
      ...profile,
      personalInfo: values,
    };

    this.props.updateProfileRequest(updatedProfile);
    this.onModalClose();
  };

  render() {
    const { t, profile } = this.props;

    if (!profile) {
      return null;
    }

    const { personalInfo } = profile;

    const hasFilledValues = personalInfoFields.map(field => personalInfo[field.personalInfoKey]).find(value => value);

    return (
      <InformationCard title={t('profile.about.personalInfo.title')} onEdit={this.onModalOpen}>
        {hasFilledValues ? (
          personalInfoFields.map(field => {
            const value = personalInfo[field.personalInfoKey];

            if (!value) {
              return null;
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

        <Modal isOpened={this.state.isEditModalOpened} onRequestClose={this.onModalClose}>
          <PersonalInfoForm onSubmit={this.onSubmit} onCancel={this.onModalClose} initialValues={personalInfo} />
        </Modal>
      </InformationCard>
    );
  }
}

export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(PersonalInfo);
