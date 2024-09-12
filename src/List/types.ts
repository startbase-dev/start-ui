export interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export interface ListItemButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface ListItemIconProps {
  icon: React.ReactNode;
  className?: string;
}

export interface ListItemSubtitleProps {
  subtitle: string;
  className?: string;
}

export interface ListDividerProps {
  className?: string;
}

export interface ListSubheaderProps {
  children: React.ReactNode;
  className?: string;
}
