export interface SkeletonAvatarProps
  extends Omit<React.AllHTMLAttributes<HTMLDivElement>, 'size'> {
  size?: string;
}

export interface SkeletonButtonProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export interface SkeletonCardProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export interface SkeletonImageProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export interface SkeletonInputProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

export interface SkeletonListProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  itemCount?: number;
}

export interface SkeletonParagraphProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  lines?: number;
}

export interface SkeletonTableProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  rows?: number;
  columns?: number;
}
