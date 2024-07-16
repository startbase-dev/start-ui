export interface ChipProps extends React.AllHTMLAttributes<HTMLSpanElement> {
  children: string;
}

export interface TemplateProps extends ChipProps {
  title: string;
}
