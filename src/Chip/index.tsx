import React, { forwardRef } from "react";
import s from "./Chip.module.scss";
import clsx from "clsx";
import type { IndexProps } from "./types";

const Index = forwardRef<HTMLSpanElement, IndexProps>((props, ref) => {
  const { rootClassName = "" } = props;
  const rootClassNames = clsx(s.root, rootClassName);

  return (
    <span className={rootClassNames} ref={ref}>
      {props.children}
    </span>
  );
});

Index.displayName = "Chip";

export default Index;
