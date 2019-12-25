import React from 'react';
import { Wrapper, Title, Value } from './InfoBlock.styles';

interface IInfoBlock {
  title: string;
  value: string;
  direction: 'horizontal' | 'vertical';
}

const InfoBlock: React.FC<IInfoBlock> = ({ title, value, direction }) => {
  return (
    <Wrapper direction={direction}>
      <Title>{title}</Title>
      <Value>{value || '-'}</Value>
    </Wrapper>
  );
};

export default InfoBlock;
