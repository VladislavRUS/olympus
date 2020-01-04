import React from 'react';
import { InformationCard } from '../../../../../components/InformationCard';
import { withTranslation, WithTranslation } from 'react-i18next';

type TProps = WithTranslation;

class Career extends React.Component<TProps> {
  render() {
    const { t } = this.props;

    return <InformationCard title={t('profile.about.career.title')}>-</InformationCard>;
  }
}

export default withTranslation()(Career);
