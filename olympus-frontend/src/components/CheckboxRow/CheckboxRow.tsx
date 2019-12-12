import React from 'react';
import { Wrapper } from './CheckboxRow.styles';
import { Checkbox } from '../Checkbox';
import { Spacer } from '../Spacer';

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const CheckboxRow: React.FC<CheckboxProps> = ({ isActive, onClick, children }) => (
  <Wrapper onClick={onClick}>
    <Checkbox onClick={() => null} isActive={isActive} />
    <Spacer width={8} />
    {children}
  </Wrapper>
);

export default CheckboxRow;
