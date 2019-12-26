import styled from 'styled-components';
import posed from 'react-pose';
import { ModalSize } from './Modal';

const PoseOverlay = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

export const Overlay = styled(PoseOverlay)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(43, 45, 59, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const PoseContent = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 200,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 200,
      ease: 'easeInOut',
    },
  },
});

export const Content = styled(PoseContent)<{ size: ModalSize }>`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  width: ${props => props.size}px;
`;

export const CloseIconWrapper = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  right: -25px;
  top: -25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Header = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.div`
  color: #515365;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
`;

export const Body = styled.div`
  padding: 20px;
`;
