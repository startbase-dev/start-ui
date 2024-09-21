import { CSSProperties } from 'react';

type ScrollOrientation = 'vertical' | 'horizontal';

export interface ScrollAreaProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  orientation: ScrollOrientation;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export interface TemplateProps extends ScrollAreaProps {
  title: string;
}
