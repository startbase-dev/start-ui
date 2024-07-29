type Tab = {
  button: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

export interface TabProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  className?: string;
}

export interface TemplateProps extends TabProps {
  title: string
}
