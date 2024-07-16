import React, { forwardRef } from "react";
import s from "./Grid.module.scss";
import clsx from "clsx";
import type { GridProps } from "./types";

const Index = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const { children, className = "", breakpoints = {}, style, ...rest } = props;
  const rootClassNames = clsx(s.root, className);

  const {
    smMinWidth = "576px",
    mdMinWidth = "768px",
    lgMinWidth = "992px",
    xlMinWidth = "1200px",
  } = breakpoints;

  return (
    <div
      className={rootClassNames}
      ref={ref}
      style={{
        "--sui-sm-min-width": smMinWidth,
        "--sui-md-min-width": mdMinWidth,
        "--sui-lg-min-width": lgMinWidth,
        "--sui-xl-min-width": xlMinWidth,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

Index.displayName = "Grid";

export default Index;
