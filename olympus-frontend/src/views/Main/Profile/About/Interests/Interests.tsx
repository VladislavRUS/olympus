import React from 'react';
import { InformationCard } from '../../../../../components/InformationCard';
import { withTranslation, WithTranslation } from 'react-i18next';
import { IProfile, TInterestsKey } from '../../../../../store/profile/types';
import { IApplicationState } from '../../../../../store';
import { bindActionCreators, compose, Dispatch } from 'redux';
import { closeEditModals, openInterestsEditModal, updateProfile } from '../../../../../store/profile/actions';
import { InfoBlock } from '../../../../../components/InfoBlock';
import { Empty } from '../PersonalInfo/PersonalInfo.styles';
import { Loader } from '../../../../../components/Loader';
import { Modal } from '../../../../../components/Modal';
import { connect } from 'react-redux';
import { InterestsForm } from './InterestsForm';
import { BlocksWrapper } from './Interests.styles';

interface IInterestsField {
  interestsKey: TInterestsKey;
  textTranslationKey: string;
}

const interestsFields: IInterestsField[] = [
  {
    interestsKey: 'hobbies',
    textTranslationKey: 'profile.interests.hobbies',
  },
  {
    interestsKey: 'tvShows',
    textTranslationKey: 'profile.interests.tvShows',
  },
  {
    interestsKey: 'movies',
    textTranslationKey: 'profile.interests.movies',
  },
  {
    interestsKey: 'games',
    textTranslationKey: 'profile.interests.games',
  },
  {
    interestsKey: 'music',
    textTranslationKey: 'profile.interests.music',
  },
  {
    interestsKey: 'books',
    textTranslationKey: 'profile.interests.books',
  },
  {
    interestsKey: 'writers',
    textTranslationKey: 'profile.interests.writers',
  },
  {
    interestsKey: 'other',
    textTranslationKey: 'profile.interests.other',
  },
];

const mapStateToProps = (state: IApplicationState) => ({
  profile: state.profile.current,
  isUpdatingProfile: state.profile.isLoading,
  isModalOpened: state.profile.editModals.isInterestsOpened,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateProfile,
      closeEditModals,
      openInterestsEditModal,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

type TProps = TStateProps & TDispatchProps & WithTranslation;

class Interests extends React.Component<TProps> {
  onSubmit = (values: any) => {
    const { profile } = this.props;

    if (!profile) {
      return;
    }

    const updatedProfile: IProfile = {
      ...profile,
      interests: values,
    };

    this.props.updateProfile(updatedProfile);
  };

  render() {
    const { t, profile, isUpdatingProfile } = this.props;

    if (!profile) {
      return null;
    }

    const { interests } = profile;

    const hasFilledValues = interestsFields.map(field => interests[field.interestsKey]).find(value => value);

    return (
      <InformationCard title={t('profile.about.hobbies.title')} onEdit={this.props.openInterestsEditModal}>
        {hasFilledValues ? (
          <BlocksWrapper>
            {interestsFields.map(field => {
              const value = interests[field.interestsKey];

              if (!value) {
                return null;
              }

              return (
                <InfoBlock
                  key={field.interestsKey}
                  title={t(field.textTranslationKey)}
                  value={value}
                  direction={'vertical'}
                />
              );
            })}
          </BlocksWrapper>
        ) : (
          <Empty>{t('profile.personalInfo.empty')}</Empty>
        )}

        <Modal isOpened={this.props.isModalOpened} onRequestClose={this.props.closeEditModals}>
          <InterestsForm onSubmit={this.onSubmit} onCancel={this.props.closeEditModals} initialValues={interests} />
          <Loader isVisible={isUpdatingProfile} />
        </Modal>
      </InformationCard>
    );
  }
}

export default compose(withTranslation(), connect(mapStateToProps, mapDispatchToProps))(Interests);
