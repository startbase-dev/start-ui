import React from "react";
import s from "./Row.module.scss";
import clsx from "clsx";

interface RowProps {
  children?: React.ReactNode;
  rootClassName?: string;
}

export default function Row({ children, rootClassName = "" }: RowProps) {
  const rootClassNames = clsx(s.root, rootClassName);

  return (
    <div className={rootClassNames}>
      {children}
    </div>
  );
}
