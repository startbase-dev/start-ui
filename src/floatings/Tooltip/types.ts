import type { AllHTMLAttributes, ReactElement } from 'react';

export interface TooltipProps extends AllHTMLAttributes<HTMLElement> {
  text: string;
  open?: boolean;
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  trigger?: 'hover' | 'click';
  className?: string;
  spacing?: number;
  hideArrow?: boolean;
  openDelay?: boolean | number;
  closeDelay?: boolean;
  clickToClose?: boolean;
  children: ReactElement;
}
