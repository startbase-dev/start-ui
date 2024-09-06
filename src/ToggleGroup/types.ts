import React, { ReactNode } from "react";
import { ToggleProps } from "../Toggle/types";

type RootBaseProps = {
  children: ReactNode | ReactNode[];
  value: string | null;
  onChange: (value: string) => void;
  direction?: string;
};

type RootProps = RootBaseProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof RootBaseProps>;

type ToggleGroupButtonProps = ToggleProps & {
  value: string;
};

export { RootProps, ToggleGroupButtonProps };
