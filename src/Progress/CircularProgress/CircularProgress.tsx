import React, { forwardRef } from "react";
import s from "./CircularProgress.module.scss";
import clsx from "clsx";
import type { ProgressProps } from "../types";

const Index = forwardRef<SVGSVGElement, ProgressProps>((props, ref) => {
  const {
    value = 0,
    max = 1,
    min = 0,
    size = 100,
    trackSize = size * 0.1, // trackSize is 1/10 of size parameter by default
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

  const indeterminateValue = 0.25;
  const center = size * 0.5;
  const radius = size * 0.4;
  const circumference = 2 * Math.PI * radius;
  const normalizedValue = determinate
    ? normalizeValue(value, max, min)
    : indeterminateValue;
  const offset = circumference - circumference * normalizedValue;
  const percentage = toPercentage(normalizedValue);
  const labelAndDeterminate = determinate && progressLabel;

  return (
    <div className={containerClassNames}>
      <svg
        className={rootClassNames}
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuetext={percentage}
        data-determinate={determinate}
        {...rest}
      >
        <circle
          className={trackClassNames}
          r={radius}
          cx={center}
          cy={center}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={trackSize}
        ></circle>
        <circle
          className={progressClassNames}
          r={radius}
          cx={center}
          cy={center}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={trackSize}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        ></circle>
      </svg>
      {labelAndDeterminate && (
        <span className={labelClassNames}>{percentage}</span>
      )}
    </div>
  );
});

Index.displayName = "CircularProgress";

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
