import React, { forwardRef } from "react";
// eslint-disable-next-line css-modules/no-unused-class
import s from "./Chip.module.scss";
import clsx from "clsx";
import type { ChipProps } from "./types";

const Index = forwardRef<HTMLSpanElement, ChipProps>((props, ref) => {
  const { children, className = "", color = "primary", ...rest } = props;
  const rootClassNames = clsx(s.root, className, s[color]);

  return (
    <span className={rootClassNames} ref={ref} {...rest}>
      {children}
    </span>
  );
});

Index.displayName = "Chip";

export default Index;
