import * as React from "react";
import { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const CheckCircleOutline = ({ size, width, height, ...props }: IconProps) => (
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
    <path fill="none" stroke="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
    <path
      stroke="none"
      d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    />
  </svg>
);

export default CheckCircleOutline;
