import React from 'react';
import { InformationCard } from '../../../../../components/InformationCard';
import { withTranslation, WithTranslation } from 'react-i18next';

type Props = WithTranslation;

class Career extends React.Component<Props> {
  render() {
    const { t } = this.props;

    return <InformationCard title={t('profile.about.career.title')}>-</InformationCard>;
  }
}

export default withTranslation()(Career);
