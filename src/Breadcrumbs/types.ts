export interface BreadcrumbReplace {
  find: string;
  replace: string;
}

export interface BreadcrumbsProps {
  separator?: string;
  breadcrumbReplace?: BreadcrumbReplace[];
  className?: string;
  activeClassName?: string;
  listClassName?: string;
}
