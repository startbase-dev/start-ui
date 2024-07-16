import React, { forwardRef } from "react";
import s from "./LinearProgress.module.scss";
import clsx from "clsx";
import type { ProgressProps } from "../types";

const Index = forwardRef<SVGSVGElement, ProgressProps>((props, ref) => {
  const {
    value = 0,
    max = 1,
    min = 0,
    size = 100,
    trackSize = 10,
    progressLabel = false,
    determinate = true,
    className = "",
    containerClassName = "",
    trackClassName = "",
    progressClassName = "",
    labelClassName = "",
    style,
    ...rest
  } = props;

  const rootClassNames = clsx(s.root, className);
  const containerClassNames = clsx(s.container, containerClassName);
  const trackClassNames = clsx(s.track, trackClassName);
  const progressClassNames = clsx(s.progress, progressClassName);
  const labelClassNames = clsx(s.label, labelClassName);

  const intedeterminateValue = 0.75;
  const normalizedValue = determinate ? normalizeValue(value, max, min) : intedeterminateValue;
  const offset =size - size * normalizedValue;
  const percentage = toPercentage(normalizedValue);
  const borderRadius = trackSize * 0.5;
  const labelAndDeterminate = determinate && progressLabel;

  return (
    <div className={containerClassNames}>
      <svg
        className={rootClassNames}
        ref={ref}
        width={size}
        height={trackSize}
        style={{
          "--sui-border-radius": `${borderRadius}px`,
          ...style,
        }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuetext={percentage}
        data-determinate={determinate}
        {...rest}
      >
        <line
          className={trackClassNames}
          x1={0}
          y1={"50%"}
          x2={size}
          y2={"50%"}
          height={trackSize}
          width={size}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={trackSize}
          strokeLinecap="round"
        ></line>
        <line
          className={progressClassNames}
          x1={0}
          y1={"50%"}
          x2={size}
          y2={"50%"}
          height={trackSize}
          width={size}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={trackSize}
          strokeDasharray={size}
          strokeDashoffset={offset}
          strokeLinecap="round"
        ></line>
      </svg>
      {labelAndDeterminate && (
        <span className={labelClassNames}>{percentage}</span>
      )}
    </div>
  );
});

Index.displayName = "LinearProgress";

function toPercentage(value: number, max?: number, min?: number) {
  if (!max || !min) return `${Math.round(value * 100)}%`;

  if (max === min) {
    throw new Error("Max and min values cannot be the same.");
  }

  const percentage = ((value - min) / (max - min)) * 100;
  const roundedPercentage = Math.round(percentage);
  return `${roundedPercentage}%`;
}

function normalizeValue(value: number, max: number, min: number) {
  return (value - min) / (max - min);
}

export default Index;
