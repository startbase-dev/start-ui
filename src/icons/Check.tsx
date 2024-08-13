import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
};

export default function Check({ size, width, height, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      stroke='currentColor'
      strokeWidth={0}
      viewBox='0 0 24 24'
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path stroke="none" d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
};
