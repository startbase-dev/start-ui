export interface AccordionProps
  extends Omit<React.AllHTMLAttributes<HTMLDivElement>, 'summary'> {
  children?: React.ReactNode;
  summary?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  summaryClassName?: string;
  actionsClassName?: string;
  containerClassName?: string;
  expanded?: boolean;
  onExpand?: () => void;
  defaultExpanded?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  unmountOnExit?: boolean;
  variant?: 'drawer' | 'individual';
}

export interface AccordionTemplateProps extends AccordionProps {
  title: string;
}
