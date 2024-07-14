import React from "react";
import s from "./Col.module.scss";
import clsx from "clsx";

interface ColumnProps {
  children?: React.ReactNode;
  rootClassName?: string;
  span?: number;
  columns?: number;
  spanSizes?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  padding?: string;
}

function getWidth(span: number, columns: number) {
  return `${(span / columns) * 100}%`;
}

export default function Column({
  children,
  rootClassName = "",
  span = 12,
  columns = 12,
  spanSizes = {},
  padding = "8px",
}: ColumnProps) {
  const rootClassNames = clsx(s.root, rootClassName);

  const { sm, md, lg, xl } = spanSizes;

  const baseWidth = getWidth(span, columns);
  const smWidth = sm ? getWidth(sm, columns) : baseWidth;
  const mdWidth = md ? getWidth(md, columns) : baseWidth;
  const lgWidth = lg ? getWidth(lg, columns) : baseWidth;
  const xlWidth = xl ? getWidth(xl, columns) : baseWidth;

  return (
    <div
      className={rootClassNames}
      style={{
        "--base-width": baseWidth,
        "--sm-width": smWidth,
        "--md-width": mdWidth,
        "--lg-width": lgWidth,
        "--xl-width": xlWidth,
        "--padding": padding,
      }}
    >
      {children}
    </div>
  );
}
