export interface IndexProps extends React.AllHTMLAttributes<HTMLDivElement> {
  classNames?: string[];
  breakpoints?: {
    smMinWidth?: string;
    mdMinWidth?: string;
    lgMinWidth?: string;
    xlMinWidth?: string;
  };
};

export interface TemplateProps extends IndexProps {
  title: string;
};
