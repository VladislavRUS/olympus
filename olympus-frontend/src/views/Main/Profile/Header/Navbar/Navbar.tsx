import React from 'react';
import { Wrapper, StyledLink, LinkText } from './Navbar.styles';
import { Routes } from '../../../../../constants/Routes';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Spacer } from '../../../../../components/Spacer';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface ILink {
  to: string;
  textKey: string;
}

const links: ILink[] = [
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

const replaceLinkTo = (link: string, id: string) => {
  return link.replace(':id', id);
};

const Navbar: React.FC<Props> = ({ t, location, match }) => {
  const id = (match.params as any).id;

  const renderLinks = (links: ILink[]) =>
    links.map(link => {
      const to = replaceLinkTo(link.to, id);

      return (
        <StyledLink key={link.to} to={to}>
          <LinkText isActive={location.pathname === to}>{t(link.textKey)}</LinkText>
        </StyledLink>
      );
    });

  return (
    <Wrapper>
      {renderLinks(links.slice(0, 2))}
      <Spacer width={353} />
      {renderLinks(links.slice(2))}
    </Wrapper>
  );
};

export default compose(withTranslation(), withRouter)(Navbar);
