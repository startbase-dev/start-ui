import type { AllHTMLAttributes } from 'react';

export interface FloatingArrowProps extends AllHTMLAttributes<HTMLDivElement> {
  placement?:
    | 'top'
    | 'top-end'
    | 'top-start'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end';
  x?: number | null;
  y?: number | null;
}
