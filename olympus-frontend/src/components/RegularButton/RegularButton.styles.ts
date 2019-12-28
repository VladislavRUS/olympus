import styled, { css } from 'styled-components';
import { RegularButtonMode } from './RegularButton';

interface IStyledButtonProps {
  disabled: boolean;
  isLoading: boolean;
  mode: RegularButtonMode;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  position: relative;
  width: 100%;
  height: 52px;
  line-height: 52px;
  text-align: center;
  border-radius: 4px;
  transition: opacity 0.2s ease, box-shadow 0.2s ease;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.28px;
  cursor: pointer;
  color: #fff;
  
  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}

  ${props =>
    props.isLoading &&
    css`
      pointer-events: none;
    `}

  ${props =>
    props.mode === RegularButtonMode.DEFAULT &&
    css`
      background-color: #9a9fbf;
    `};

  ${props =>
    props.mode === RegularButtonMode.PRIMARY &&
    css`
      background-color: #7c5ac2;
    `};
  
  ${props =>
    props.mode === RegularButtonMode.SUCCESS &&
    css`
      background-color: #ff5e3a;
    `};

  &:active {
    opacity: 0.8;
  }
`;
