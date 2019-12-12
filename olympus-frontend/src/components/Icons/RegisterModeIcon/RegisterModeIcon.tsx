import React from 'react';
import { IIconProps } from '../IIconProps';

const LoginModeIcon: React.FC<IIconProps> = ({ width = 23, height = 20, color = '#9a9fbf' }) => (
  <svg width={23} height={20}>
    <path
      fill={color}
      d="M15.28 4A7.96 7.96 0 0010 2a7.998 7.998 0 00-7.413 5H.469C1.74 2.939 5.53-.008 10.007-.008c3.27 0 6.165 1.578 7.988 4.008zM2 10c0 .34.028.671.07 1H.063a10.107 10.107 0 010-2h2.005C2.03 9.328 2 9.66 2 10zm8 8a7.96 7.96 0 005.28-2h2.703c-1.824 2.42-4.713 3.992-7.976 3.992-4.472 0-8.256-2.94-9.532-6.992h2.112A7.998 7.998 0 0010 18zM23 9v2h-3v3h-2v-3h-3V9h3V6h2v3z"
    />
    <path fill={color} d="M2 9v2H0V9z" />
  </svg>
);

export default LoginModeIcon;
