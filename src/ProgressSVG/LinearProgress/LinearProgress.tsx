import React, { forwardRef } from "react";
import s from "./LinearProgress.module.scss";
import clsx from "clsx";

interface IndexProps extends React.SVGAttributes<SVGSVGElement> {
  value: number;
  max?: number;
  min?: number;
  size?: number;
  trackSize?: number;
};

const Index = forwardRef<SVGSVGElement, IndexProps>((props, ref) => {
  const {
    value,
    max = 1,
    min = 0,
    size = 100,
    trackSize = 10,
    className = "",
    ...rest
  } = props;
  const classnames = className.split(" ");

  const normalizedValue = normalizeValue(value, max, min);
  const progress = size * normalizedValue;
  const percentage = toPercentage(normalizedValue);
  const borderRadius = trackSize * 0.5;

  return (
    <svg
      className={clsx([...classnames])}
      ref={ref}
      width={size}
      height={trackSize + 32}
      viewBox={`0 0 ${size} ${trackSize + 32}`}
      style={{
        "--track-size": `${trackSize}px`
      }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemax={max}
      aria-valuemin={min}
      aria-valuetext={percentage}
      {...rest}
    >
      <text
        className={s.label}
        dominantBaseline={"middle"}
        textAnchor={"middle"}
      >{percentage}</text>
      <rect
        className={s.track}
        width={size}
        height={trackSize}
        rx={borderRadius}
        fill="currentColor"
        stroke="transparent"
      ></rect>
      <rect
        className={s.progress}
        width={progress}
        height={trackSize}
        rx={borderRadius}
        fill="currentColor"
        stroke="transparent"
      ></rect>
    </svg>
  );
});

Index.displayName = "LinearProgress";

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
