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
    y: '50%',
    transition: {
      ease: 'easeInOut',
      duration: 200,
    },
    applyAtEnd: {
      pointerEvents: 'none',
    },
  },
});

export const Wrapper = styled(PoseWrapper)<{ left: number; top: number }>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  width: ${props => props.width}px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 5px 15px -2px rgba(0, 0, 0, 0.3);
  border: 1px solid #e6ecf5;
  overflow: hidden;
`;
