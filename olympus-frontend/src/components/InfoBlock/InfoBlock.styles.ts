import styled, { css } from 'styled-components';

export const Title = styled.div`
  color: #515365;
  font-size: 13px;
  font-weight: 500;
  line-height: 22px;
  flex-shrink: 0;
`;

export const Wrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  ${props =>
    props.direction === 'horizontal' &&
    css`
      flex-direction: row;
      justify-content: space-between;

      ${Title} {
        width: 130px;
        margin-right: 30px;
        word-break: break-word;
      }
    `};

  ${props =>
    props.direction === 'vertical' &&
    css`
      flex-direction: column;
    `};
`;

export const Value = styled.div`
  color: #888da8;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  word-break: break-word;
  width: 100%;
`;
