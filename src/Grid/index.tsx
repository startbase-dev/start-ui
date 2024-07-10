import React, { forwardRef } from "react";
import s from "./index.module.css";
import clsx from "clsx";
import type { IndexProps } from "./types";

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  const {
    children,
    classNames = [],
    ...rest
  } = props;

  return (
    <div
      className={clsx([s.root, ...classNames])}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

Index.displayName = "Dropdown";

export default Index;
