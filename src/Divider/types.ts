type Variant = "fullWidth" | "start" | "center" | "end";
type Orientation = "horizontal" | "vertical";
type ContentAlign = "start" | "center" | "end";
type Component = keyof JSX.IntrinsicElements;

export interface IndexProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: Variant;
  orientation?: Orientation;
  contentAlign?: ContentAlign;
  component?: Component;
  classNames?: string[];
}

export interface TemplateProps extends IndexProps {
  title: string;
}
