type Variant = "circular" | "linear";
type Color = "primary" | "secondary" | "success" | "error";

export interface IndexProps extends React.AllHTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  min?: number;
  variant?: Variant;
  color?: Color;
  progressLabel?: boolean;
  determinate?: boolean;
  trackSize?: number;
  classNames?: string[];
}

export interface TemplateProps extends IndexProps {
  title: string;
}
