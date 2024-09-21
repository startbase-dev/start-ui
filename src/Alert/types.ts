export type AlertSeverity = 'success' | 'info' | 'warning' | 'error';
type AlertVariant = 'default' | 'filled' | 'outlined';

export interface AlertProps extends React.AllHTMLAttributes<HTMLDivElement> {
  severity?: AlertSeverity;
  variant?: AlertVariant;
  color?: AlertSeverity | 'inherit';
  actionElement?: React.ReactNode;
  icon?: React.ReactNode;
  alertTitle?: string | boolean;
  open?: boolean;
  children?: React.ReactNode;
  iconClassName?: string;
  bodyClassName?: string;
  titleClassName?: string;
  textClassName?: string;
}

export interface TemplateProps extends AlertProps {
  title: string;
}
