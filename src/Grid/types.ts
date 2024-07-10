export interface IndexProps extends React.AllHTMLAttributes<HTMLDivElement> {
  classNames?: string[];
};

export interface TemplateProps extends IndexProps {
  title: string;
};
