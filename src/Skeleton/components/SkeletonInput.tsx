import React from "react";
// eslint-disable-next-line css-modules/no-unused-class
import s from "../Skeleton.module.scss";
import { SkeletonInputProps } from "../types";

const SkeletonInput: React.FC<SkeletonInputProps> = ({
  width = "100%",
  height = "40px",
}) => {
  return <div className={s.skeletonInput} style={{ width, height }}></div>;
};

export default SkeletonInput;
