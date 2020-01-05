import React from 'react';
import { StyledLink, Wrapper } from './LeftNavigationBar.styles';
import { Routes } from '../../../constants/Routes';
import { FiList, FiUser } from 'react-icons/fi';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { IApplicationState } from '../../../store';
import { connect } from 'react-redux';

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

const mapStateToProps = (state: IApplicationState) => ({
  user: state.user.current,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & RouteComponentProps;

const LeftNavigationBar: React.FC<TProps> = ({ location, user }) => {
  return (
    <Wrapper>
      {links.map(link => {
        const Icon = link.icon;

        const linkToStart = link.to
          .split('/')
          .slice(0, 3)
          .join('/');

        let to: string = link.to;

        if (to === Routes.PROFILE && user) {
          to = to.replace(':id', user.profile.id.toString());
        }

        return (
          <StyledLink to={to} key={link.to}>
            <Icon color={location.pathname.startsWith(linkToStart) ? '#ff5e3a' : '#9a9fbf'} size={24} />
          </StyledLink>
        );
      })}
    </Wrapper>
  );
};

export default withRouter(connect(mapStateToProps)(LeftNavigationBar));
