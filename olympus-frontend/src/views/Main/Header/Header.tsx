import React from 'react';
import { Wrapper, Logo, PageTitle } from './Header.styles';
import { Activities } from './Activities';
import { Search } from './Search';
import { User } from './User';
import { Spacer } from '../../../components/Spacer';

class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <PageTitle>Profile page</PageTitle>
        <Search />
        <Activities />
        <Spacer width={37} />
        <User />
      </Wrapper>
    );
  }
}

export default Header;
