import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onToggle"> {
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
  color?: 'primary' | 'secondary' | 'destructive';
  variant?: 'default' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fluid?: boolean;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}
