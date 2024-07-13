export interface IndexProps extends React.SVGAttributes<SVGSVGElement> {
  value?: number;
  max?: number;
  min?: number;
  size?: number;
  trackSize?: number;
  variant?: "linear" | "circular";
  progressLabel?: boolean;
  determinate?: boolean;
};

export interface TemplateProps extends IndexProps {
  title: string;
};
