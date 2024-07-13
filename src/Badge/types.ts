type BadgeColor = "primary" | "secondary" | "success" | "error";

type BadgeVariant = "default" | "dot";

type VerticalPosition = "top" | "bottom";
type HorizontalPosition = "right" | "left";
type BadgePosition =
  | `${VerticalPosition}-${HorizontalPosition}`
  | VerticalPosition
  | HorizontalPosition;

export interface IndexProps {
  children: React.ReactNode;
  badgeContent: number;
  color?: BadgeColor;
  variant?: BadgeVariant;
  position?: BadgePosition;
  invisible?: boolean;
  showZero?: boolean;
  max?: number;
  classNames?: string[];
}

export interface TemplateProps extends IndexProps {
  title: string;
}
