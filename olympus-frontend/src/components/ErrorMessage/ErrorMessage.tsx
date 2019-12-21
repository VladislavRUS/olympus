import React from 'react';
import { Wrapper, Text } from './ErrorMessage.styles';
import { PoseGroup } from 'react-pose';

interface IErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message = '' }) => (
  <PoseGroup>
    {message ? (
      <Wrapper key={'wrapper'}>
        <Text>{message}</Text>
      </Wrapper>
    ) : (
      <React.Fragment key={'fragment'} />
    )}
  </PoseGroup>
);

export default ErrorMessage;
