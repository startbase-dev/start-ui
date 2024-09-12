import type { ReactElement, AllHTMLAttributes } from "react";

export interface FloatingContextMenuProps
  extends Omit<AllHTMLAttributes<HTMLDivElement>, "label"> {
  children: ReactElement | ReactElement[];
  component?: ReactElement;
  label?: ReactElement | ReactElement[] | string;
  className?: string;
  menuClassName?: string;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
}
