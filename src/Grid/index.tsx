import React, { forwardRef } from "react";
import s from "./Grid.module.scss";
import clsx from "clsx";
import type { IndexProps } from "./types";

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  const { children, classNames = [], breakpoints = {}, style, ...rest } = props;

  const {
    smMinWidth = "576px",
    mdMinWidth = "768px",
    lgMinWidth = "992px",
    xlMinWidth = "1200px",
  } = breakpoints;

  return (
    <div
      className={clsx([s.root, ...classNames])}
      ref={ref}
      {...rest}
      style={{
        ...style,
        "--sui-sm-min-width": smMinWidth,
        "--sui-md-min-width": mdMinWidth,
        "--sui-lg-min-width": lgMinWidth,
        "--sui-xl-min-width": xlMinWidth,
      }}
    >
      {children}
    </div>
  );
});

Index.displayName = "Grid";

export default Index;
