import * as React from 'react';
import { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function StorybookIcon({
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
      <path
        stroke="none"
        d="m16.71.243-.12 2.71a.18.18 0 0 0 .29.15l1.06-.8.9.7a.18.18 0 0 0 .28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 0 1 1.279 1.2v21.596a1.2 1.2 0 0 1-1.26 1.2l-16.096-.72a1.2 1.2 0 0 1-1.15-1.16l-.75-19.797a1.2 1.2 0 0 1 1.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"
      />
    </svg>
  );
}
