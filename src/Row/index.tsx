import React from "react";
import s from "./Row.module.scss";
import clsx from "clsx";

interface RowProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rootClassName?: string;
}

export default function Row({ children, rootClassName = "", ...rest }: RowProps) {
  const rootClassNames = clsx(s.root, rootClassName);

  return (
    <div {...rest} className={rootClassNames}>
      {children}
    </div>
  );
}
