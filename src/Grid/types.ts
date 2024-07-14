export interface IndexProps {
  children?: React.ReactNode;
  rootClassName?: string;
  breakpoints?: {
    smMinWidth?: string;
    mdMinWidth?: string;
    lgMinWidth?: string;
    xlMinWidth?: string;
  };
}

export interface TemplateProps extends IndexProps {
  title: string;
}
