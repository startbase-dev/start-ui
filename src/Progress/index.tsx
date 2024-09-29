import React, { forwardRef } from 'react';
import type { ProgressProps } from './types';
import CircularProgress from './CircularProgress/CircularProgress';
import LinearProgress from './LinearProgress/LinearProgress';

const Progress = forwardRef<SVGSVGElement, ProgressProps>((props, ref) => {
  const { variant = 'circular', ...rest } = props;
  const isVariantCircular = variant === 'circular';

  return isVariantCircular ? (
    <CircularProgress ref={ref} {...rest} />
  ) : (
    <LinearProgress ref={ref} {...rest} />
  );
});

Progress.displayName = 'Progress';

export default Progress;
export { type ProgressProps };
