import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 94px;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LinkText = styled.div<{ isActive: boolean }>`
  opacity: ${props => (props.isActive ? 1 : 0.6)};
  color: ${props => (props.isActive ? '#515365' : '#9a9fbf')};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
`;
