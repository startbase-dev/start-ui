type Tab = {
  button: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  defaultOpen?: boolean;
};

export interface TabProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  className?: string;
  buttonsClassName?: string;
  contentClassName?: string;
}

export interface TemplateProps extends TabProps {
  title: string;
}
