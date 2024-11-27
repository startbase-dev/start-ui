import type { HTMLAttributes } from 'react';

interface ResponsiveGridValues {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  container?: boolean;
  span?: number | ResponsiveGridValues;
  columns?: number | ResponsiveGridValues;
  padding?: number | ResponsiveGridValues;
  gap?: number | ResponsiveGridValues;
  rowGap?: number | ResponsiveGridValues;
  columnGap?: number | ResponsiveGridValues;
}

export interface TemplateProps extends GridProps {
  title: string;
}
