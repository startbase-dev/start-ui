import React from "react";
// eslint-disable-next-line css-modules/no-unused-class
import s from "../index.module.css";
import { SkeletonParagraphProps } from "../types";

const SkeletonParagraph: React.FC<SkeletonParagraphProps> = ({ lines = 3 }) => {
  return (
    <div className={s.skeletonParagraph}>
      {Array.from({ length: lines }).map((_, index) => (
        <div key={index} className={s.skeletonLine}></div>
      ))}
    </div>
  );
};

export default SkeletonParagraph;
