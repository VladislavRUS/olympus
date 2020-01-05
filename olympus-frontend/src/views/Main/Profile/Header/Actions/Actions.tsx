import React from 'react';
import { Wrapper, Circle } from './Actions.styles';
import { FiUserPlus, FiMessageSquare } from 'react-icons/fi';
import { Settings } from './Settings';

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

        <Settings />
      </Wrapper>
    );
  }
}

export { Actions };
