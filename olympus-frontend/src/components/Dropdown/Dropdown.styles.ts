import styled from 'styled-components';
import posed from 'react-pose';

const PoseWrapper = posed.div({
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 200,
    },
    applyAtEnd: {
      pointerEvents: 'auto',
    },
  },
  hidden: {
    opacity: 0,
    y: '25%',
    transition: {
      ease: 'easeInOut',
      duration: 200,
    },
    applyAtEnd: {
      pointerEvents: 'none',
    },
  },
});

export const Wrapper = styled(PoseWrapper)<{
  left: number;
  top: number;
  zIndex: number;
  units: string;
}>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  width: ${props => props.width}px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 16px rgba(63, 66, 87, 0.08);
  border: 1px solid #e6ecf5;
  overflow: hidden;
  z-index: ${props => props.zIndex};
`;
