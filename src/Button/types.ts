export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  color?: 'primary' | 'secondary' | 'destructive';
  variant?: 'default' | 'link' | 'outline' | 'ghost';
  size?: 'icon' | 'small' | 'medium' | 'large';
  fluid?: boolean;
  type?: 'submit' | 'reset' | 'button';
}
