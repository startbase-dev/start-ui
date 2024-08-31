import React from "react";

export type BentoItem = {
  element: React.ReactNode;
  width: number;
  height: number;
};

export type BentoItems = BentoItem[];

export type BentoGridProps = {
  items: BentoItems;
  gridCols?: number;
  rowHeight?: number;
};
