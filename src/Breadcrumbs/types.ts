export interface BreadcrumbData {
  label: string;
  icon?: React.ReactNode;
  href?: string;
}

export interface BreadcrumbsProps {
  data: BreadcrumbData[];
  separator?: string;
  className?: string;
  activeClassName?: string;
  listClassName?: string;
  itemClassName?: string;
}
