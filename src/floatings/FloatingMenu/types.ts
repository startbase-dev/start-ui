import { ReactElement, AllHTMLAttributes } from 'react';

export interface FloatingMenuProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, 'label'> {
  children: ReactElement | ReactElement[];
  component?: ReactElement;
  label?: ReactElement | ReactElement[] | string;
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
