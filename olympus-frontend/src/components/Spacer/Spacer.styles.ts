import styled from 'styled-components';

interface IWrapperProps {
  width: number;
  height: number;
}

export const Wrapper = styled.div<IWrapperProps>`
  flex-shrink: 0;
  flex-grow: 0;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
