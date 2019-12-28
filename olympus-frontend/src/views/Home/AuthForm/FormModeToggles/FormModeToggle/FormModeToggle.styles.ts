import styled from 'styled-components';

interface IWrapperProps {
  isActive: boolean;
}

export const Wrapper = styled.button<IWrapperProps>`
  width: 68px;
  height: 309px;
  background-color: ${props => (props.isActive ? '#fff' : 'rgba(230, 236, 245, 0.2)')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;
  padding: 0;
  margin: 0;
`;
