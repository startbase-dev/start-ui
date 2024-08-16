export interface ChipProps extends React.AllHTMLAttributes<HTMLSpanElement> {
  children: string;
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error";
}

export interface TemplateProps extends ChipProps {
  title: string;
}
