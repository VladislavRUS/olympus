import React from 'react';
import { InformationCard } from '../../../../../components/InformationCard';
import { withTranslation, WithTranslation } from 'react-i18next';
import { InfoBlock } from '../../../../../components/InfoBlock';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../../../store';
import { IPersonalInfo, TPersonalInfoKey } from '../../../../../store/profile/types';

const mapStateToProps = (state: IApplicationState) => {
  const stateProps: IStateProps = {
    personalInfo: state.profile.profile.personalInfo,
  };

  return stateProps;
};

interface IStateProps {
  personalInfo: IPersonalInfo;
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

class PersonalInfo extends React.Component<Props> {
  render() {
    const { t, personalInfo } = this.props;

    return (
      <InformationCard title={t('profile.about.personalInfo.title')}>
        {personalInfoFields.map(field => (
          <InfoBlock
            key={field.personalInfoKey}
            title={t(field.textTranslationKey)}
            value={personalInfo[field.personalInfoKey]}
            direction={'horizontal'}
          />
        ))}
      </InformationCard>
    );
  }
}

export default compose(withTranslation(), connect(mapStateToProps))(PersonalInfo);
