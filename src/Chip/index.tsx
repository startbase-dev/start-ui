import React, { forwardRef } from "react";
import s from "./index.module.css";
import clsx from "clsx";
import type { IndexProps } from "./types";

const Index = forwardRef<HTMLSpanElement, IndexProps>((props, ref) => {
  const { classnames = [] } = props;

  return (
    <span className={clsx(s.root, ...classnames)} ref={ref} {...props}>
      {props.content}
    </span>
  );
});

Index.displayName = "Chip";

export default Index;
