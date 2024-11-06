import type { ReactElement, AllHTMLAttributes } from 'react';

export interface DropdownProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'onFocus'> {
  children: ReactElement | ReactElement[];
  component?: ReactElement;
  label?: string;
  className?: string;
  menuClassName?: string;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
  icon?: ReactElement;
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
}
