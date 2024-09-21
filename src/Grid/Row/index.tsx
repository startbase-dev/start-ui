import React from 'react';
import s from './Row.module.scss';
import clsx from 'clsx';
import type { RowProps } from '../types';

export default function Row({
  children,
  className = '',
  ...rest
}: Readonly<RowProps>) {
  const rootClassNames = clsx(s.root, className);

  return (
    <div className={rootClassNames} {...rest}>
      {children}
    </div>
  );
}
