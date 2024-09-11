import type { ReactElement } from "react";

export interface ContextMenuProps
  extends Omit<React.AllHTMLAttributes<HTMLDivElement>, "label"> {
  children: ReactElement | ReactElement[];
  component?: ReactElement;
  label?: ReactElement | ReactElement[] | string;
  className?: string;
  menuClassName?: string;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
}
