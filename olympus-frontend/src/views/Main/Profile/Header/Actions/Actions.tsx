import React from 'react';
import { Wrapper, Circle } from './Actions.styles';
import { FiUserPlus, FiMessageSquare, FiSettings } from 'react-icons/fi';

class Actions extends React.Component {
  render() {
    return (
      <Wrapper>
        <Circle backgroundColor={'#00b7ff'}>
          <FiUserPlus color={'#fff'} size={22} />
        </Circle>

        <Circle backgroundColor={'#916bdf'}>
          <FiMessageSquare color={'#fff'} size={22} />
        </Circle>

        <Circle backgroundColor={'#ff5e3a'}>
          <FiSettings color={'#fff'} size={22} />
        </Circle>
      </Wrapper>
    );
  }
}

export { Actions };
