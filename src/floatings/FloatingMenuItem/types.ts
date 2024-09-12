import type { AllHTMLAttributes } from "react";

export interface FloatingMenuItemProps
  extends AllHTMLAttributes<HTMLDivElement> {
  label: string;
  className: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLDivElement>) => void;
}
