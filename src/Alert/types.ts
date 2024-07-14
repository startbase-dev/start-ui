export type AlertSeverity = "success" | "info" | "warning" | "error";
type AlertVariant = "default" | "filled" | "outlined";

export interface AlertProps {
  severity?: AlertSeverity;
  variant?: AlertVariant;
  color?: AlertSeverity | "inherit";
  action?: React.ReactNode;
  icon?: React.ReactNode;
  alertTitle?: string | boolean;
  open?: boolean;
  children?: React.ReactNode;
  rootClassName?: string;
  iconClassName?: string;
  bodyClassName?: string;
  titleClassName?: string;
  textClassName?: string;
}

export interface TemplateProps extends AlertProps {
  title: string;
}
