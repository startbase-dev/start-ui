type Variant = "fullWidth" | "left" | "middle" | "right";
type Orientation = "horizontal" | "vertical";
type ContentAlign = "left" | "middle" | "right"; // TODO: Change these to start, center, end
type Component = keyof JSX.IntrinsicElements;

export interface IndexProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: Variant;
  orientation?: Orientation;
  contentAlign?: ContentAlign;
  component?: Component;
};

export interface TemplateProps extends IndexProps {
  title: string;
};
