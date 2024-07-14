import React from "react";
import s from "./Row.module.scss";
import clsx from "clsx";

interface RowProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  classNames?: string[];
}

export default function Row({ children, classNames = [], ...rest }: RowProps) {
  return (
    <div className={clsx([s.root, ...classNames])} {...rest}>
      {children}
    </div>
  );
}
