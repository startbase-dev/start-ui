import React from "react";
// eslint-disable-next-line css-modules/no-unused-class
import s from "../index.module.scss";
import { SkeletonAvatarProps } from "../types";

const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({ size = "50px" }) => {
  return (
    <div
      className={s.skeletonAvatar}
      style={{ width: size, height: size }}
    ></div>
  );
};

export default SkeletonAvatar;
