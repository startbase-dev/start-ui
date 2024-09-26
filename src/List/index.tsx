import React, { forwardRef } from 'react';
import cx from 'clsx';
import s from './List.module.scss';
import '../style/components/list.scss';
import type {
  ListProps,
  ListItemProps,
  ListItemButtonProps,
  ListItemIconProps,
  ListItemSubtitleProps,
  ListDividerProps,
  ListSubheaderProps,
} from './types';

export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ children, className = '' }, ref) => {
    return (
      <ul ref={ref} className={cx(s.list, className)}>
        {children}
      </ul>
    );
  }
);
List.displayName = 'List';

export const ListItem = ({ children, className = '' }: ListItemProps) => {
  return <li className={cx(s.listItem, className)}>{children}</li>;
};
ListItem.displayName = 'ListItem';

export const ListItemButton = ({
  children,
  onClick,
  className = '',
}: ListItemButtonProps) => {
  return (
    <button onClick={onClick} className={cx(s.listItemButton, className)}>
      {children}
    </button>
  );
};
ListItemButton.displayName = 'ListItemButton';

export const ListItemIcon = ({ icon, className = '' }: ListItemIconProps) => {
  return <span className={cx(s.listItemIcon, className)}>{icon}</span>;
};
ListItemIcon.displayName = 'ListItemIcon';

export const ListItemSubtitle = ({
  subtitle,
  className = '',
}: ListItemSubtitleProps) => {
  return <span className={cx(s.listItemSubtitle, className)}>{subtitle}</span>;
};
ListItemSubtitle.displayName = 'ListItemSubtitle';

export const ListDivider = ({ className = '' }: ListDividerProps) => {
  return <hr className={cx(s.listDivider, className)} />;
};
ListDivider.displayName = 'ListDivider';

export const ListSubheader = ({
  children,
  className = '',
}: ListSubheaderProps) => {
  return <div className={cx(s.listSubheader, className)}>{children}</div>;
};
ListSubheader.displayName = 'ListSubheader';

export {
  type ListProps,
  type ListItemProps,
  type ListItemButtonProps,
  type ListItemIconProps,
  type ListItemSubtitleProps,
  type ListDividerProps,
  type ListSubheaderProps,
};
