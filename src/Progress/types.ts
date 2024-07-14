export interface IndexProps {
  value?: number;
  max?: number;
  min?: number;
  size?: number;
  trackSize?: number;
  variant?: "linear" | "circular";
  progressLabel?: boolean;
  determinate?: boolean;
  rootClassName?: string;
  containerClassName?: string;
  trackClassName?: string;
  progressClassName?: string;
  labelClassName?: string;
}

export interface TemplateProps extends IndexProps {
  title: string;
}
