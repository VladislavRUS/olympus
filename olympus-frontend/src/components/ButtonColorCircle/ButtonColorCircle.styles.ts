import styled from 'styled-components';

export const Wrapper = styled.button<{ size: number; color: string }>`
  margin: 0;
  padding: 0;
  border: none;
  background-color: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  overflow: hidden;
`;
