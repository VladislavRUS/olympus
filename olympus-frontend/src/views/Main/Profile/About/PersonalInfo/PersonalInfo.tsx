import React from 'react';
import { InformationCard } from '../../../../../components/InformationCard';
import { withTranslation, WithTranslation } from 'react-i18next';
import { InfoBlock } from '../../../../../components/InfoBlock';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../../../store';
import { IPersonalInfo, TPersonalInfoKey } from '../../../../../store/profile/types';
import { EditModal } from '../../../../../components/EditModal';
import { Empty } from './PersonalInfo.styles';
import { getPersonalInfoState } from '../../../../../store/profile/selectors';

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    personalInfo: getPersonalInfoState(state),
  };

  return stateProps;
};

interface IStateProps {
  personalInfo: IPersonalInfo | null;
}

type Props = WithTranslation & IStateProps;

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

class PersonalInfo extends React.Component<Props, State> {
  constructor(props: Props) {
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

  render() {
    const { t, personalInfo } = this.props;

    if (!personalInfo) {
      return null;
    }

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

        <EditModal
          isOpened={this.state.isEditModalOpened}
          onRequestClose={this.onModalClose}
          onSave={this.onModalClose}
          onCancel={this.onModalClose}
          cancelButtonText={'Cancel'}
          saveButtonText={'Save'}
          isLoading={true}
        />
      </InformationCard>
    );
  }
}

export default compose(withTranslation(), connect(mapStateToProps))(PersonalInfo);