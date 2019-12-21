import React from 'react';
import { Wrapper, Title, Subtitle, RegisterButton } from './InformationBlock.styles';
import { withTranslation, WithTranslation } from 'react-i18next';
import { setRegisterMode } from '../../../store/auth-form/actions';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

interface IDispatchProps {
  setRegisterMode: typeof setRegisterMode;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      setRegisterMode,
    },
    dispatch,
  );
};

type AllProps = IDispatchProps & WithTranslation;

const InformationBlock: React.FC<AllProps> = ({ setRegisterMode, t }) => (
  <Wrapper>
    <Title>{t('home.title')}</Title>
    <Subtitle>{t('home.subtitle')}</Subtitle>
    <RegisterButton onClick={setRegisterMode}>{t('home.registerNow')}</RegisterButton>
  </Wrapper>
);

export default connect(null, mapDispatchToProps)(withTranslation()(InformationBlock));
