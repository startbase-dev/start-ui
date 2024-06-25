export type AlertSeverity = "success" | "info" | "warning" | "error";
type AlertVariant = "default" | "filled" | "outlined";

export interface IndexProps extends React.HTMLAttributes<HTMLDivElement> {
  severity?: AlertSeverity;
  variant?: AlertVariant;
  color?: AlertSeverity | "inherit";
  action?: React.ReactNode;
  icon?: React.ReactNode;
  alertTitle?: string | boolean;
  open?: boolean;
};

export interface TemplateProps extends IndexProps {
  title: string;
};
