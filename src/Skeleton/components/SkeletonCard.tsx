import React from "react";
// eslint-disable-next-line css-modules/no-unused-class
import s from "../Skeleton.module.scss";
import { SkeletonCardProps } from "../types";

const SkeletonCard: React.FC<SkeletonCardProps> = ({
  width = "100%",
  height = "200px",
}) => {
  return (
    <div className={s.skeletonCard} style={{ width, height }}>
      <div className={s.skeletonCardHeader}></div>
      <div className={s.skeletonCardBody}></div>
    </div>
  );
};

export default SkeletonCard;
