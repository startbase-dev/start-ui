import React, { forwardRef } from "react";
import s from "./CircularProgress.module.scss";
import clsx from "clsx";
import type { IndexProps } from "../types";

const Index = forwardRef<SVGSVGElement, IndexProps>((props, ref) => {
  const {
    value,
    max = 1,
    min = 0,
    size = 100,
    trackSize = 10,
    progressLabel = false,
    className = "",
    ...rest
  } = props;
  const classnames = className.split(" ");

  const center = size * 0.5;
  const radius = size * 0.4;
  const circumference = 2 * Math.PI * radius;
  const normalizedValue = normalizeValue(value, max, min);
  const offset = circumference - circumference * normalizedValue;
  const percentage = toPercentage(normalizedValue);

  return (
    <svg
      className={clsx([...classnames])}
      ref={ref}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuetext={percentage}
      {...rest}
    >
      {progressLabel && <text
        className={s.label}
        x={"50%"}
        y={"50%"}
        dominantBaseline={"middle"}
        textAnchor={"middle"}
      >{percentage}</text>}
      <circle
        className={s.track}
        r={radius}
        cx={center}
        cy={center}
        fill="transparent"
        stroke="currentColor"
        strokeWidth={trackSize}
      ></circle>
      <circle
        className={s.progress}
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
  );
});

Index.displayName = "CircularProgress";

function toPercentage(value: number, max?: number, min?: number) {
  if (!max || !min) return `${Math.round(value * 100)}%`;

  if (max === min) {
    throw new Error('Max and min values cannot be the same.');
  };


  const percentage = ((value - min) / (max - min)) * 100;
  const roundedPercentage = Math.round(percentage);
  return `${roundedPercentage}%`;
};

function normalizeValue(value: number, max: number, min: number) {
  return (value - min) / (max - min);
};

export default Index;
