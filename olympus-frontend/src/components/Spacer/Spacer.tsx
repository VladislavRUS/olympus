import React from 'react';
import { Wrapper } from './Spacer.styles';

interface ISpacerProps {
  width?: number;
  height?: number;
}

const Spacer: React.FC<ISpacerProps> = ({ width = 0, height = 0 }) => <Wrapper width={width} height={height} />;

export default Spacer;
