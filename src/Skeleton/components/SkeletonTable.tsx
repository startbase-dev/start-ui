import React from "react";
// eslint-disable-next-line css-modules/no-unused-class
import s from "../Skeleton.module.scss";
import { SkeletonTableProps } from "../types";

const SkeletonTable: React.FC<SkeletonTableProps> = ({
  rows = 5,
  columns = 3,
}) => {
  return (
    <div className={s.skeletonTable}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className={s.skeletonTableRow}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div key={colIndex} className={s.skeletonTableCell}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkeletonTable;
