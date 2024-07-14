import React, { forwardRef } from "react";
import s from "./Chip.module.scss";
import clsx from "clsx";
import type { ChipProps } from "./types";

const Index = forwardRef<HTMLSpanElement, ChipProps>((props, ref) => {
  const { children, rootClassName = "", ...rest } = props;
  const rootClassNames = clsx(s.root, rootClassName);

  return (
    <span {...rest} className={rootClassNames} ref={ref}>
      {children}
    </span>
  );
});

Index.displayName = "Chip";

export default Index;
