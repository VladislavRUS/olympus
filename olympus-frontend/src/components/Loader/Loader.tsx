import React from 'react';
import { Wrapper } from './Loader.styles';
import { BeatLoader as Spinner } from 'react-spinners';

export type Overlay = 'visible' | 'hidden';

interface ILoaderProps {
  isVisible: boolean;
  overlay?: Overlay;
  color?: string;
}

const Loader: React.FC<ILoaderProps> = ({ isVisible, overlay = 'visible', color = '#000' }) => (
  <Wrapper overlay={overlay} key={'wrapper'} pose={isVisible ? 'visible' : 'hidden'}>
    <Spinner color={color} size={6} />
  </Wrapper>
);

export default Loader;
