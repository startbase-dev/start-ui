import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function ArrowForwardIos({
  size,
  width,
  height,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0V0z" />
      <path stroke="none" d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
    </svg>
  );
}
