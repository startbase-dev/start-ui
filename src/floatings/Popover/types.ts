import type { ReactElement, AllHTMLAttributes } from "react";

export interface PopoverProps extends AllHTMLAttributes<HTMLElement> {
  popper: ReactElement;
  open?: boolean;
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end"
    | "right-start"
    | "right-end";
  trigger?: "click" | "hover";
  className?: string;
  spacing?: number;
  hideArrow?: boolean;
  openDelay?: boolean | number;
  closeDelay?: boolean | number;
  clickToClose?: boolean;
  children: ReactElement;
}
