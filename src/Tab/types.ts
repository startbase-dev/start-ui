export type TabType = {
  button: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  defaultOpen?: boolean;
};

export interface TabProps extends React.AllHTMLAttributes<HTMLDivElement> {
  tabs: TabType[];
  className?: string;
  buttonsClassName?: string;
  contentClassName?: string;
  variant?: "default" | "ghost";
}

export interface TemplateProps extends TabProps {
  title: string;
}
