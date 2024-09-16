import React from "react";

export interface BentoItem {
  element: React.ReactNode;
  width: number;
  height: number;
}

export type BentoItems = BentoItem[];

export interface BentoGridProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  items: BentoItems;
  gridCols?: number;
  rowHeight?: number;
}
