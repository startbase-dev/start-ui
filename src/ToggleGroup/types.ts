import React, { ReactNode } from "react";
import { ToggleProps } from "../Toggle/types";

interface ToggleWrapperProps
  extends Omit<React.AllHTMLAttributes<HTMLDivElement>, "value" | "onChange"> {
  children: ReactNode | ReactNode[];
  value: string | null;
  onChange: (value: string) => void;
  direction?: string;
}

interface ToggleItemProps extends ToggleProps {
  value: string;
}

export { ToggleWrapperProps, ToggleItemProps };
