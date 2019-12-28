import styled, { css } from 'styled-components';

interface IWrapperProps {
  isActive: boolean;
}

export const Wrapper = styled.button.attrs({ type: 'button' })<IWrapperProps>`
  position: relative;
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: 1px solid #e6ecf5;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 3px;
    width: 3px;
    height: 7px;
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
    transform: rotate(45deg);
  }

  ${props =>
    props.isActive &&
    css`
      border: none;
      background-color: #ff5e3a;
    `}
`;
