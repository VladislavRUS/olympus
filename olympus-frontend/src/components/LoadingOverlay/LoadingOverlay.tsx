import React from 'react';
import { Wrapper } from './LoadingOverlay.styles';

interface ILoadingOverlayProps {
  isLoading: boolean;
  zIndex?: number;
}

const LoadingOverlay: React.FC<ILoadingOverlayProps> = ({ isLoading, zIndex = 1 }) =>
  isLoading ? <Wrapper zIndex={zIndex} /> : null;

export default LoadingOverlay;
