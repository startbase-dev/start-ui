import React, { forwardRef, useEffect, useState } from "react";
import s from "./LinearProgress.module.scss";
import clsx from "clsx";
import type { IndexProps } from "../types";

const Index = forwardRef<SVGSVGElement, IndexProps>((props, ref) => {
  const {
    value = 0,
    max = 1,
    min = 0,
    size = 100,
    trackSize = 10,
    progressLabel = false,
    determinate = true,
    className = "",
    ...rest
  } = props;
  const classnames = className.split(" ");

  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    function animateProgress() {
      setAnimatedValue(num => (num + 0.01) % 1);
    };

    const interval = setInterval(animateProgress, 10);

    return () => clearInterval(interval);
  }, [determinate]);

  const normalizedValue = normalizeValue(value, max, min);
  const progress = determinate ? size * normalizedValue : size * animatedValue;
  const percentage = toPercentage(normalizedValue);
  const borderRadius = trackSize * 0.5;
  const labelAndDeterminate = determinate && progressLabel;
  const trackSizeWithText = labelAndDeterminate ? trackSize + 32 : trackSize;


  return (
    <svg
      className={clsx([...classnames])}
      ref={ref}
      width={size}
      height={trackSizeWithText}
      viewBox={`0 0 ${size} ${trackSizeWithText}`}
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
      {labelAndDeterminate && <text
        className={s.label}
        dominantBaseline={"middle"}
        textAnchor={"middle"}
      >{percentage}</text>}
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
