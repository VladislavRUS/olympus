import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  isDisabled: boolean;
  isLoading: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  position: relative;
  width: 100%;
  height: 52px;
  line-height: 52px;
  text-align: center;
  background-color: #7c5ac2;
  border-radius: 4px;
  transition: opacity 0.2s ease, box-shadow 0.2s ease;
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

  ${props =>
    props.isLoading &&
    css`
      pointer-events: none;
    `}

  &:hover {
    box-shadow: 0 7px 15px -1px rgba(124, 90, 194, 0.62);
  }

  &:active {
    opacity: 0.8;
  }
`;
