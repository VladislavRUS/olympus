import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 40px;
  bottom: 78px;
  width: 194px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Circle = styled.button<{ backgroundColor: string }>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  cursor: pointer;
  border: none;
`;
