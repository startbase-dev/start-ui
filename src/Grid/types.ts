import type { AllHTMLAttributes } from "react";

export interface GridProps extends AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  breakpoints?: {
    smMinWidth?: string;
    mdMinWidth?: string;
    lgMinWidth?: string;
    xlMinWidth?: string;
  };
}

export interface TemplateProps extends GridProps {
  title: string;
}

export interface RowProps extends AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface ColProps extends AllHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  span?: number;
  columns?: number;
  spanSizes?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  padding?: string;
}
