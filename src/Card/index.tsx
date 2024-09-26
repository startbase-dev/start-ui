import React, { forwardRef } from 'react';
import cx from 'clsx';
// eslint-disable-next-line css-modules/no-unused-class
import s from './Card.module.scss';
import '../style/components/card.scss';
import type { CardProps } from './types';

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      description,
      collapsible = false,
      size = 'medium',
      fluid = false,
      className = '',
      children,
    },
    ref
  ) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const handleToggleCollapse = () => {
      if (collapsible) {
        setIsCollapsed(!isCollapsed);
      }
    };

    return (
      <div
        ref={ref}
        className={cx(s.card, s[size], { [s.fluid]: fluid }, className)}
      >
        {(title || description) && (
          <div className={s.header} onClick={handleToggleCollapse}>
            {title && <h3 className={s.title}>{title}</h3>}
            {description && <p className={s.description}>{description}</p>}
          </div>
        )}
        <div
          className={cx(s.body, {
            [s.collapsed]: collapsible && isCollapsed,
          })}
        >
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
export { type CardProps };
