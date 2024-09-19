import React from 'react';
import s from './Preview.module.css';

interface Props {
  children: React.ReactNode;
  height: string;
  width: string;
}

const Preview: React.FC<Props> = ({ children, height, width }) => {
  return (
    <div className={s.root} style={{ height: height }}>
      <div className={s.children} style={{ width: width }}>
        {children}
      </div>
    </div>
  );
};

export default Preview;
