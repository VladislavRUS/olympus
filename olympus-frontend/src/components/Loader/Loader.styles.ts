import styled, { css } from 'styled-components';
import posed from 'react-pose';
import { Overlay } from './Loader';

const PoseWrapper = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: 'flex',
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: 'none',
    },
  },
});

export const Wrapper = styled(PoseWrapper)<{ overlay: Overlay }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${props =>
    props.overlay === 'visible' &&
    css`
      background-color: rgba(255, 255, 255, 0.5);
    `}
`;
