import styled from 'styled-components';

export const Wrapper = styled.div<{ zIndex: number }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${props => props.zIndex};
`;
