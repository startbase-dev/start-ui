export interface BreadcrumbReplace {
  find: string;
  replace: string;
}

export interface BreadcrumbsProps {
  separator?: string;
  breadcrumbReplace?: BreadcrumbReplace[];
}
