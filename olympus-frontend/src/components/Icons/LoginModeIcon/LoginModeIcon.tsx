import React from 'react';
import { IIconProps } from '../IIconProps';

const LoginModeIcon: React.FC<IIconProps> = ({ width = 20, height = 22, color = '#9a9fbf' }) => (
  <svg width={width} height={height}>
    <path
      fill={color}
      d="M19.992 11.993c0-4.472-2.94-8.256-6.992-9.532v2.126A7.998 7.998 0 0118 12a7.998 7.998 0 01-5 7.413v2.112c4.052-1.277 6.992-5.06 6.992-9.532zM7 2.454C2.939 3.725-.008 7.514-.008 11.993c0 4.477 2.947 8.266 7.008 9.538v-2.118A7.998 7.998 0 012 12a7.998 7.998 0 015-7.413zM9 0h2v10H9zM9 20h2v2H9z"
    />
  </svg>
);

export default LoginModeIcon;
