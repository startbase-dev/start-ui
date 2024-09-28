import React, { Fragment } from 'react';
import cx from 'clsx';
import s from './Breadcrumbs.module.scss';
import { BreadcrumbsProps } from './types';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  separator = '/',
  data = [],
  className = '',
  activeClassName = '',
  listClassName = '',
  itemClassName = '',
}) => {
  return (
    <ul className={cx(s.root, className)}>
      {data.map((item, index) => (
        <Fragment key={index}>
          <li
            className={cx(s.list, {
              [s.active]: index === data.length - 1,
              [activeClassName]: activeClassName && index === data.length - 1,
              [listClassName]: listClassName,
            })}
          >
            <a href={item.href} className={itemClassName}>
              {item.icon && <span className={s.icon}>{item.icon}</span>}
              <span>{item.label}</span>
            </a>
          </li>
          {index < data.length - 1 && (
            <span className={s.separator}>{separator}</span>
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
