import React, { forwardRef, useContext } from 'react';

import { useFloatingTree, useListItem, useMergeRefs } from '@floating-ui/react';

import MenuContext from '../FloatingMenuContext';

import styles from './FloatingMenuItem.module.scss';
import cx from 'clsx';

import type { FloatingMenuItemProps } from './types';

const FloatingMenuItem = forwardRef<HTMLDivElement, FloatingMenuItemProps>(
  ({ label, disabled, className, ...props }, forwardedRef) => {
    const menu = useContext(MenuContext);
    const item = useListItem({ label: disabled ? null : label });
    const tree = useFloatingTree();
    const isActive = item.index === menu.activeIndex;

    return (
      <div
        {...props}
        ref={useMergeRefs([item.ref, forwardedRef])}
        role="menuitem"
        className={cx(styles.menuItem, className && { [className]: true })}
        tabIndex={isActive ? 0 : -1}
        {...menu.getItemProps({
          onClick(event: React.MouseEvent<HTMLDivElement>) {
            props.onClick?.(event);
            tree?.events.emit('click');
          },
          onFocus(event: React.FocusEvent<HTMLDivElement>) {
            props.onFocus?.(event);
            menu.setHasFocusInside(true);
          },
        })}
      >
        {label}
      </div>
    );
  }
);

FloatingMenuItem.displayName = 'FloatingMenuItem';

export default FloatingMenuItem;
