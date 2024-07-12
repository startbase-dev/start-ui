import { CSSProperties } from "react";

type ScrollOrientation = "vertical" | "horizontal";

export interface IndexProps {
  orientation: ScrollOrientation;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export interface TemplateProps extends IndexProps {
  title: string;
}
