export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "full" | "start" | "center" | "end";
  orientation?: "horizontal" | "vertical";
  align?: "start" | "center" | "end";
  color?: string;
  size?: `${string}px` | `${string}rem`;
  round?: boolean;
}

export interface TemplateProps extends DividerProps {
  title: string;
}
