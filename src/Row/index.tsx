import React from "react";
import s from "./Row.module.scss";
import clsx from "clsx";

interface RowProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Row({
  children,
  className = "",
  ...rest
}: RowProps) {
  const rootClassNames = clsx(s.root, className);

  return (
    <div className={rootClassNames} {...rest}>
      {children}
    </div>
  );
}
