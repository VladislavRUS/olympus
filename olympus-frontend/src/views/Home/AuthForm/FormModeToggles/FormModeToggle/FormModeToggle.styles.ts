import styled from 'styled-components';

interface IWrapperProps {
  isActive: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  width: 68px;
  height: 309px;
  background-color: ${props => (props.isActive ? '#fff' : 'rgba(230, 236, 245, 0.2)')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;
