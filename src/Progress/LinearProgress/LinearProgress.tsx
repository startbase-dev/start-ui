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
    rootClassName = "",
    containerClassName = "",
    trackClassName = "",
    progressClassName = "",
    labelClassName = "",
    ...rest
  } = props;

  const rootClassNames = clsx(s.root, rootClassName);
  const containerClassNames = clsx(s.container, containerClassName);
  const trackClassNames = clsx(s.track, trackClassName);
  const progressClassNames = clsx(s.progress, progressClassName);
  const labelClassNames = clsx(s.label, labelClassName);

  const normalizedValue = normalizeValue(value, max, min);
  const progress = size * normalizedValue;
  const percentage = toPercentage(normalizedValue);
  const borderRadius = trackSize * 0.5;
  const labelAndDeterminate = determinate && progressLabel;

  return (
    <div className={containerClassNames}>
      <svg
        {...rest}
        className={rootClassNames}
        ref={ref}
        width={size}
        height={trackSize}
        style={{
          "--border-radius": `${borderRadius}px`,
        }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuetext={percentage}
        data-determinate={determinate}
      >
        <line
          className={trackClassNames}
          x1={borderRadius}
          y1={borderRadius}
          x2={size - borderRadius}
          y2={borderRadius}
          height={trackSize}
          width={size}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={trackSize}
          strokeLinecap="round"
        ></line>
        <line
          className={progressClassNames}
          x1={borderRadius}
          y1={borderRadius}
          x2={size - borderRadius}
          y2={borderRadius}
          height={trackSize}
          width={size}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={trackSize}
          strokeDasharray={size}
          strokeDashoffset={size - progress}
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
