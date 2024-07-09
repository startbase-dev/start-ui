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
    style = {},
    trackSize = 10,
    ...restProps
  } = props;

  function toPercentage(value: number, max: number, min: number) {
    if (max === min) {
      throw new Error("Max and min values cannot be the same.");
    }

    const percentage = ((value - min) / (max - min)) * 100;
    const roundedPercentage = Math.round(percentage);
    return `${roundedPercentage}%`;
  }

  const barValue = toPercentage(value, max, min);

  return (
    <div
      className={clsx(s.root, ...classNames)}
      ref={ref}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      data-color={color}
      data-determinate={determinate}
      data-variant={variant}
      style={{
        "--progress-bar-value": barValue,
        "--progress-track-size": `${trackSize}px`,
        ...style,
      }}
      {...restProps}
    >
      <div className={s.progressbar}></div>
      {progressLabel && <span className={s.label}>{barValue}</span>}
    </div>
  );
});

Index.displayName = "Progress";

export default Index;
