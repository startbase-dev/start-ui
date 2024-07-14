export interface GridProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rootClassName?: string;
  breakpoints?: {
    smMinWidth?: string;
    mdMinWidth?: string;
    lgMinWidth?: string;
    xlMinWidth?: string;
  };
}

export interface TemplateProps extends GridProps {
  title: string;
}
