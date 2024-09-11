import React, { ReactNode } from "react";
import { ToggleProps } from "../Toggle/types";

type RootBaseProps = {
  children: ReactNode | ReactNode[];
  value: string | null;
  onChange: (value: string) => void;
  direction?: string;
};

type ToggleWrapperProps = RootBaseProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof RootBaseProps>;

type ToggleItemProps = ToggleProps & {
  value: string;
};

export { ToggleWrapperProps, ToggleItemProps };
