import styled from 'styled-components';

interface IWrapperProps {
  color: string;
}

export const Wrapper = styled.button.attrs({ type: 'button' })<IWrapperProps>`
  color: ${props => props.color};
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
