import React from 'react';
import { Wrapper, Circle } from './Actions.styles';
import { FiUserPlus, FiMessageSquare } from 'react-icons/fi';
import { Settings } from './Settings';
import { Spacer } from '../../../../../components/Spacer';

class Actions extends React.Component {
  render() {
    return (
      <Wrapper>
        <Circle backgroundColor={'#00b7ff'}>
          <FiUserPlus color={'#fff'} size={22} />
        </Circle>

        <Spacer width={20} />

        <Circle backgroundColor={'#916bdf'}>
          <FiMessageSquare color={'#fff'} size={22} />
        </Circle>

        <Spacer width={20} />

        <Settings />
      </Wrapper>
    );
  }
}

export { Actions };
