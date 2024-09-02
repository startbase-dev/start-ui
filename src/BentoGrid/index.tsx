import React, { forwardRef } from "react";
import s from "./BentoGrid.module.scss";
import { BentoGridProps, BentoItem } from "./types";

const Index = forwardRef<HTMLDivElement, BentoGridProps>(
  ({ items, gridCols = 4, rowHeight = 100, ...rest }, ref) => {
    return (
      <div
        className={s.bentoGrid}
        ref={ref}
        {...rest}
        style={{
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
          gridAutoRows: `${rowHeight}px`,
        }}
      >
        {items?.map((item: BentoItem, index: number) => (
          <div
            key={index}
            style={{
              gridColumn: `span ${item.width}`,
              gridRow: `span ${item.height}`,
            }}
          >
            {item.element}
          </div>
        ))}
      </div>
    );
  },
);

Index.displayName = "BentoGrid";

export default Index;
