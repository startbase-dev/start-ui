type Variant = "fullWidth" | "start" | "center" | "end";
type Orientation = "horizontal" | "vertical";
type ContentAlign = "start" | "center" | "end";
type Component = keyof JSX.IntrinsicElements;

export interface DividerProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: Variant;
  orientation?: Orientation;
  contentAlign?: ContentAlign;
  component?: Component;
  rootClassName?: string;
}

export interface TemplateProps extends DividerProps {
  title: string;
}
