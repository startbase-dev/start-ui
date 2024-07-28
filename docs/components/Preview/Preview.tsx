import React from "react";
import s from "./Preview.module.css";

interface Props {
  children: React.ReactNode;
  height: string;
}

const Preview: React.FC<Props> = ({ children, height }) => {
  return (
    <div className={s.root} style={{ height: height }}>
      <div className={s.children}>{children}</div>
    </div>
  );
};

export default Preview;
