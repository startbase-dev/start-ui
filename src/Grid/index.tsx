import React, { forwardRef } from 'react';
import styles from './Grid.module.scss';
import clsx from 'clsx';
import type { GridProps } from './types';

const Grid = forwardRef<HTMLDivElement, GridProps>(({
  children,
  className,
  style,
  container = false,
  span = 12,
  gap = 8,
  rowGap,
  columnGap,
}, ref) => {
  const rootClassNames = clsx(className, styles.root);
  const itemClassNames = clsx(className, styles.item);

  const gridGap = typeof gap === "number" ? gap : gap.base;

  let gapSM = gridGap;
  let gapMD = gridGap;
  let gapLG = gridGap;
  let gapXL = gridGap;
  let gapXXL = gridGap;

  if (typeof gap === "object") {
    gapSM = gap.sm ?? gap.base;
    gapMD = gap.md ?? gapSM;
    gapLG = gap.lg ?? gapMD;
    gapXL = gap.xl ?? gapLG;
    gapXXL = gap.xxl ?? gapXL;
  }

  if (!rowGap) rowGap = gap;

  const rowGapBase = typeof rowGap === "number" ? rowGap : rowGap.base;

  let rowGapSM = rowGapBase;
  let rowGapMD = rowGapBase;
  let rowGapLG = rowGapBase;
  let rowGapXL = rowGapBase;
  let rowGapXXL = rowGapBase;

  if (typeof rowGap === "object") {
    rowGapSM = rowGap.sm ?? rowGap.base;
    rowGapMD = rowGap.md ?? rowGapSM;
    rowGapLG = rowGap.lg ?? rowGapMD;
    rowGapXL = rowGap.xl ?? rowGapLG;
    rowGapXXL = rowGap.xxl ?? rowGapXL;
  }

  if (!columnGap) columnGap = gap;

  const columnGapBase = typeof columnGap === "number" ? columnGap : columnGap.base;

  let columnGapSM = columnGapBase;
  let columnGapMD = columnGapBase;
  let columnGapLG = columnGapBase;
  let columnGapXL = columnGapBase;
  let columnGapXXL = columnGapBase;

  if (typeof columnGap === "object") {
    columnGapSM = columnGap.sm ?? columnGap.base;
    columnGapMD = columnGap.md ?? columnGapSM;
    columnGapLG = columnGap.lg ?? columnGapMD;
    columnGapXL = columnGap.xl ?? columnGapLG;
    columnGapXXL = columnGap.xxl ?? columnGapXL;
  }

  // RETURN GRID CONTAINER
  if (container) return (
    <div ref={ref} className={rootClassNames} style={{
      ...style,
      "--sui-grid-gap-base": `${gridGap}px`,
      "--sui-grid-gap-sm": `${gapSM}px`,
      "--sui-grid-gap-md": `${gapMD}px`,
      "--sui-grid-gap-lg": `${gapLG}px`,
      "--sui-grid-gap-xl": `${gapXL}px`,
      "--sui-grid-gap-xxl": `${gapXXL}px`,
      "--sui-row-gap-base": `${rowGapBase}px`,
      "--sui-row-gap-sm": `${rowGapSM}px`,
      "--sui-row-gap-md": `${rowGapMD}px`,
      "--sui-row-gap-lg": `${rowGapLG}px`,
      "--sui-row-gap-xl": `${rowGapXL}px`,
      "--sui-row-gap-xxl": `${rowGapXXL}px`,
      "--sui-column-gap-base": `${columnGapBase}px`,
      "--sui-column-gap-sm": `${columnGapSM}px`,
      "--sui-column-gap-md": `${columnGapMD}px`,
      "--sui-column-gap-lg": `${columnGapLG}px`,
      "--sui-column-gap-xl": `${columnGapXL}px`,
      "--sui-column-gap-xxl": `${columnGapXXL}px`,
    }}>
      {children}
    </div>
  );

  const itemSpan = typeof span === "number" ? span : span.base;

  let spanSM = itemSpan;
  let spanMD = itemSpan;
  let spanLG = itemSpan;
  let spanXL = itemSpan;
  let spanXXL = itemSpan;

  if (typeof span === "object") {
    spanSM = span.sm ?? span.base;
    spanMD = span.md ?? spanSM;
    spanLG = span.lg ?? spanMD;
    spanXL = span.xl ?? spanLG;
    spanXXL = span.xxl ?? spanXL;
  }

  // RETURN GRID ITEM
  return (
    <div ref={ref} className={itemClassNames} style={{
      ...style,
      "--sui-grid-span-base": itemSpan,
      "--sui-grid-span-sm": spanSM,
      "--sui-grid-span-md": spanMD,
      "--sui-grid-span-lg": spanLG,
      "--sui-grid-span-xl": spanXL,
      "--sui-grid-span-xxl": spanXXL,
    }}>
      {children}
    </div>
  );
});

Grid.displayName = 'Grid';

export default Grid;
export { type GridProps };
