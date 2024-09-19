type BadgeColor = 'primary' | 'secondary' | 'success' | 'error';
type BadgeVariant = 'default' | 'dot';
type VerticalPosition = 'top' | 'bottom';
type HorizontalPosition = 'start' | 'end';
type BadgePosition =
  | `${VerticalPosition}-${HorizontalPosition}`
  | VerticalPosition
  | HorizontalPosition;

export interface BadgeProps
  extends Omit<React.AllHTMLAttributes<HTMLDivElement>, 'content'> {
  children: React.ReactNode;
  content: React.ReactNode;
  color?: BadgeColor;
  variant?: BadgeVariant;
  position?: BadgePosition;
  invisible?: boolean;
  containerClassName?: string;
}

export interface TemplateProps extends BadgeProps {
  title: string;
}
