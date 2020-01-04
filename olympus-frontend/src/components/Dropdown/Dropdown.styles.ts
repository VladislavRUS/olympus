import styled, { css } from 'styled-components';
import posed from 'react-pose';
import { TDropdownMode } from './Dropdown';

export const Wrapper = styled.div`
  display: inherit;
`;

const PoseBodyWrapper = posed.div({
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
    applyAtStart: {
      pointerEvents: 'none',
    },
  },
});

export const BodyWrapper = styled(PoseBodyWrapper)<{
  left: number;
  top: number;
  width: number;
}>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  width: ${props => props.width}px;
  padding-top: 8px;
  z-index: 1;
`;

export const Arrow = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  top: 2px;
  width: 12px;
  height: 12px;
  border-left: 1px solid #e6ecf5;
  border-top: 1px solid #e6ecf5;
  background-color: #fff;
  border-radius: 2px;
  z-index: 1;
`;

export const ContentWrapper = styled.div<{ mode: TDropdownMode }>`
  ${props =>
    props.mode === 'styled' &&
    css`
      padding: 8px 0;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 16px rgba(63, 66, 87, 0.08);
      border: 1px solid #e6ecf5;
      overflow: hidden;
    `}
`;
