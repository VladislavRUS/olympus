import React from 'react';
import { PoseGroup } from 'react-pose';
import { Wrapper } from './Loader.styles';
import { BeatLoader as Spinner } from 'react-spinners';

export type Overlay = 'visible' | 'hidden';

interface ILoaderProps {
  isVisible: boolean;
  overlay?: Overlay;
  color?: string;
}

const Loader: React.FC<ILoaderProps> = ({ isVisible, overlay = 'visible', color = '#000' }) => (
  <PoseGroup>
    {isVisible ? (
      <Wrapper overlay={overlay} key={'wrapper'}>
        <Spinner color={color} size={6} />
      </Wrapper>
    ) : (
      <React.Fragment key={'fragment'} />
    )}
  </PoseGroup>
);

export default Loader;
