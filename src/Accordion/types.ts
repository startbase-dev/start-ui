export interface AccordionProps extends React.AllHTMLAttributes<HTMLDivElement> {
  head?: React.ReactNode;
  body?: React.ReactNode;
  foot?: React.ReactNode;
  headClassName?: string;
  bodyClassName?: string;
  footClassName?: string;
  expanded?: boolean;
  onExpand?: () => void;
  defaultExpanded?: boolean;
};

export interface AccordionTemplateProps extends AccordionProps {
  title: string;
};
