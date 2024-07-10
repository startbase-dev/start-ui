import React from "react";
import s from "./Column.module.css";
import clsx from "clsx";

interface ColumnProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  classNames?: string[];
  span?: number;
  columns?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  smMinWidth?: string;
  mdMinWidth?: string;
  lgMinWidth?: string;
  xlMinWidth?: string;
  padding?: string;
};

function getWidth(span: number, columns: number) {
  return `${span / columns * 100}%`;
};

export default function Column({
  children,
  classNames = [],
  span = 12,
  columns = 12,
  sm,
  md,
  lg,
  xl,
  smMinWidth = "576px",
  mdMinWidth = "768px",
  lgMinWidth = "992px",
  xlMinWidth = "1200px",
  style = {},
  padding = "8px",
  ...rest
}: ColumnProps) {
  const baseWidth = getWidth(span, columns);
  const smWidth = sm ? getWidth(sm, columns) : baseWidth;
  const mdWidth = md ? getWidth(md, columns) : baseWidth;
  const lgWidth = lg ? getWidth(lg, columns) : baseWidth;
  const xlWidth = xl ? getWidth(xl, columns) : baseWidth;

  return (
    <div
      className={clsx([s.root, ...classNames])}
      style={{
        ...style,
        width: baseWidth,
        [`@media screen and (min-width: ${smMinWidth})`]: { width: smWidth },
        [`@media screen and (min-width: ${mdMinWidth})`]: { width: mdWidth },
        [`@media screen and (min-width: ${lgMinWidth})`]: { width: lgWidth },
        [`@media screen and (min-width: ${xlMinWidth})`]: { width: xlWidth },
        "--padding": padding,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};