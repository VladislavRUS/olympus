import React from 'react';
import { Wrapper, StyledLink } from './LeftNavigationBar.styles';
import { Routes } from '../../../constants/Routes';
import { FiUser, FiList } from 'react-icons/fi';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const links = [
  {
    to: Routes.PROFILE,
    icon: FiUser,
  },
  {
    to: Routes.FEED,
    icon: FiList,
  },
];

const LeftNavigationBar: React.FC<RouteComponentProps> = ({ location }) => (
  <Wrapper>
    {links.map(link => {
      const Icon = link.icon;

      return (
        <StyledLink to={link.to} key={link.to}>
          <Icon color={location.pathname.startsWith(link.to) ? '#ff5e3a' : '#9a9fbf'} size={24} />
        </StyledLink>
      );
    })}
  </Wrapper>
);

export default withRouter(LeftNavigationBar);
