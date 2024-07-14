import React, { forwardRef } from "react";
import s from "./Chip.module.scss";
import clsx from "clsx";
import type { IndexProps } from "./types";

const Index = forwardRef<HTMLSpanElement, IndexProps>((props, ref) => {
  const { classNames = [] } = props;

  return (
    <span className={clsx(s.root, ...classNames)} ref={ref} {...props}>
      {props.content}
    </span>
  );
});

Index.displayName = "Chip";

export default Index;
