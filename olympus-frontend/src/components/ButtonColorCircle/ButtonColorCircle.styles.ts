import styled from 'styled-components';

export const Wrapper = styled.button<{ size: number; color: string }>`
  border: none;
  background-color: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
