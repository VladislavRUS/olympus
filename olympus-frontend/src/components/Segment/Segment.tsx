import React from 'react';
import { Wrapper } from './Segment.styles';

const Segment: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Segment;
