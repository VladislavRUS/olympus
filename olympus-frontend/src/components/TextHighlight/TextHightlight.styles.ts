import styled from 'styled-components';

interface IWrapperProps {
  color: string;
}

export const Wrapper = styled.span<IWrapperProps>`
  color: ${props => props.color};

  &:hover {
    text-decoration: underline;
  }
`;
