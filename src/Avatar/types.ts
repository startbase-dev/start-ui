import { ElementType } from 'react';

export interface AvatarProps
  extends Omit<React.AllHTMLAttributes<HTMLDivElement>, 'size'> {
  picture?: string;
  chars?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'circular' | 'square';
  defaultPicture?: string;
  className?: string;
  Component?: ElementType;
  componentProps?: Record<string, unknown>;
}
