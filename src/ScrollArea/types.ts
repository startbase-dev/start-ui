import { CSSProperties } from "react";

type ScrollOrientation = "vertical" | "horizontal";

export interface ScrollAreaProps {
  orientation: ScrollOrientation;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export interface TemplateProps extends ScrollAreaProps {
  title: string;
}
