import React from "react";
// eslint-disable-next-line css-modules/no-unused-class
import s from "../index.module.css";
import { SkeletonButtonProps } from "../types";

const SkeletonButton: React.FC<SkeletonButtonProps> = ({
  width = "100px",
  height = "40px",
}) => {
  return <div className={s.skeletonButton} style={{ width, height }}></div>;
};

export default SkeletonButton;
