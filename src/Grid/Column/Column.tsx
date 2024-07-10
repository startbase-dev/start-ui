import React from "react";
import s from "./Column.module.css";
import clsx from "clsx";

interface ColumnProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  classNames?: string[];
  span?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  padding?: string;
};

function getWidth(span: number) {
  return `${span / 12 * 100}%`;
};

export default function Column({
  children,
  classNames = [],
  span = 12,
  sm,
  md,
  lg,
  xl,
  style = {},
  padding = "8px",
  ...rest
}: ColumnProps) {
  const baseWidth = getWidth(span);
  const smWidth = sm ? getWidth(sm) : baseWidth;
  const mdWidth = md ? getWidth(md) : baseWidth;
  const lgWidth = lg ? getWidth(lg) : baseWidth;
  const xlWidth = xl ? getWidth(xl) : baseWidth;

  return (
    <div
      className={clsx([s.root, ...classNames])}
      style={{
        ...style,
        "--width": baseWidth,
        "--width-sm": smWidth,
        "--width-md": mdWidth,
        "--width-lg": lgWidth,
        "--width-xl": xlWidth,
        "--padding": padding,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};