import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  isDisabled: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  width: 100%;
  height: 52px;
  line-height: 52px;
  text-align: center;
  background-color: #7c5ac2;
  border-radius: 4px;
  transition: opacity 0.2s ease;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.28px;
  cursor: pointer;

  ${props =>
    props.isDisabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  &:active {
    opacity: 0.8;
  }
`;
