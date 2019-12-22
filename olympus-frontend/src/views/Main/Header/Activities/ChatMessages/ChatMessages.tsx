import React from 'react';
import { Wrapper } from './ChatMessages.styles';
import { FiMessageSquare } from 'react-icons/fi';

const ChatMessages = () => (
  <Wrapper>
    <FiMessageSquare color={'#9a9fbf'} size={24} />
  </Wrapper>
);

export default ChatMessages;
