import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 143px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

export const Avatar = styled.div<{ avatarUrl: string }>`
  margin-right: 8px;
  width: 34px;
  height: 34px;
  background-color: #fff;
  background-image: ${props => `url(${props.avatarUrl})`};
  background-size: cover;
  border-radius: 50%;
`;

export const FullName = styled.div`
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
`;
