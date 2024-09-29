export interface CardProps {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  collapsible?: boolean;
  size?: 'small' | 'medium' | 'large';
  fluid?: boolean;
  className?: string;
  children: React.ReactNode;
}
