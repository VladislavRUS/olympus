import React from 'react';
import { Wrapper, Cover } from './Header.styles';
import { User } from './User';
import { Navbar } from './Navbar';
import { Segment } from '../../../../components/Segment';

class Header extends React.Component<any, any> {
  render() {
    return (
      <Segment>
        <Wrapper>
          <Cover />
          <User />
          <Navbar />
        </Wrapper>
      </Segment>
    );
  }
}

export default Header;
