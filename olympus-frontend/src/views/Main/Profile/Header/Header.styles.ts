import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 395px;
  flex-direction: column;
`;

export const Cover = styled.div<{ imageUrl: string | null }>`
  height: 300px;
  flex-shrink: 0;
  width: 100%;
  background-image: ${props =>
    props.imageUrl ? `url(${props.imageUrl})` : 'linear-gradient(to top, #c24328, #ff5e3a)'};
  background-size: cover;
`;
