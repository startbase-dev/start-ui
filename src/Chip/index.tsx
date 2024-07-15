import React, { forwardRef } from "react";
import s from "./Chip.module.scss";
import clsx from "clsx";
import type { ChipProps } from "./types";

const Index = forwardRef<HTMLSpanElement, ChipProps>((props, ref) => {
  const { children, className = "", ...rest } = props;
  const rootClassNames = clsx(s.root, className);

  return (
    <span className={rootClassNames} ref={ref} {...rest}>
      {children}
    </span>
  );
});

Index.displayName = "Chip";

export default Index;
