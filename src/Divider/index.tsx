import React, { forwardRef } from 'react';
import styles from './Divider.module.scss';
import clsx from 'clsx';
import type { DividerProps } from './types';

const Divider = forwardRef<HTMLDivElement, DividerProps>(({
  children,
  className,
  variant = "full",
  orientation = "horizontal",
  align = "center",
  color = "var(--sui-border)",
  size = "1px",
  round = false,
  style = {},
  ...props
}, ref) => {
  const rootClassNames = clsx(className, styles.root);

  return (
    <div
      className={rootClassNames}
      role='separator'
      aria-orientation={orientation}
      data-variant={variant}
      data-align={align}
      data-round={`${round}`}
      ref={ref}
      style={{
        "--sui-divider-color": color,
        "--sui-divider-size": size,
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
});

Divider.displayName = 'Divider';

export default Divider;
export { type DividerProps };
