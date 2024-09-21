import React from 'react';
// eslint-disable-next-line css-modules/no-unused-class
import s from '../Skeleton.module.scss';
import { SkeletonImageProps } from '../types';

const SkeletonImage: React.FC<SkeletonImageProps> = ({
  width = '100%',
  height = '200px',
}) => {
  return <div className={s.skeletonImage} style={{ width, height }}></div>;
};

export default SkeletonImage;
