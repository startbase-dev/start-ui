import React, { forwardRef } from "react";
import s from "./index.module.css";
import clsx from "clsx";
import type { IndexProps } from "./types";

const Index = forwardRef<HTMLDivElement, IndexProps>((props, ref) => {
  const {
    value,
    max = 1,
    min = 0,
    variant = "circular",
    color = "primary",
    progressLabel = false,
    determinate = true,
    classNames = [],
    ...restProps
  } = props;

  function toPercentage(value: number, max: number, min: number) {
    if (max === min) {
      throw new Error('Max and min values cannot be the same.');
    };

    const percentage = ((value - min) / (max - min)) * 100;
    return `${percentage}%`;
  };

  const barValue = toPercentage(value, max, min);

  return (
    <div
      className={clsx(s.root, ...classNames)}
      ref={ref}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      style={{"--progress-bar-value": barValue}}
      {...restProps}
    >

    </div>
  );
});

Index.displayName = "Progress";

export default Index;
