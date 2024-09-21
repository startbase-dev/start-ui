import React from 'react';
// eslint-disable-next-line css-modules/no-unused-class
import s from '../Skeleton.module.scss';
import { SkeletonListProps } from '../types';

const SkeletonList: React.FC<SkeletonListProps> = ({ itemCount = 5 }) => {
  return (
    <div className={s.skeletonList}>
      {Array.from({ length: itemCount }).map((_, index) => (
        <div key={index} className={s.skeletonListItem}></div>
      ))}
    </div>
  );
};

export default SkeletonList;
