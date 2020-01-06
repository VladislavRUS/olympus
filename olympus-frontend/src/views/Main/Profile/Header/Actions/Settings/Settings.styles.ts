import styled from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  width: 100%;
  height: 100%;

  &:hover {
    transform: rotate(45deg);
  }
`;
