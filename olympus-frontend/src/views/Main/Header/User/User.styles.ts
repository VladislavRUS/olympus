import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 143px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Avatar = styled.div`
  margin-right: 8px;
`;

export const FullName = styled.div`
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`;
