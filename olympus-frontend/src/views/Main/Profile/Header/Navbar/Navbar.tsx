import React from 'react';
import { Wrapper, StyledLink, LinkText } from './Navbar.styles';
import { Routes } from '../../../../../constants/Routes';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Spacer } from '../../../../../components/Spacer';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const links = [
  {
    to: Routes.PROFILE_ABOUT,
    textKey: 'profile.links.about',
  },
  {
    to: Routes.PROFILE_FRIENDS,
    textKey: 'profile.links.friends',
  },
  {
    to: Routes.PROFILE_PHOTOS,
    textKey: 'profile.links.photos',
  },
  {
    to: Routes.PROFILE_VIDEOS,
    textKey: 'profile.links.videos',
  },
];

type Props = WithTranslation & RouteComponentProps;

const Navbar: React.FC<Props> = ({ t, location }) => {
  return (
    <Wrapper>
      {links.slice(0, 2).map(link => (
        <StyledLink key={link.to} to={link.to}>
          <LinkText isActive={location.pathname === link.to}>{t(link.textKey)}</LinkText>
        </StyledLink>
      ))}
      <Spacer width={353} />
      {links.slice(2).map(link => (
        <StyledLink key={link.to} to={link.to}>
          <LinkText isActive={location.pathname === link.to}>{t(link.textKey)}</LinkText>
        </StyledLink>
      ))}
    </Wrapper>
  );
};

export default compose(withTranslation(), withRouter)(Navbar);
