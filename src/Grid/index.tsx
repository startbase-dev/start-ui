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
  columns = 12,
  padding = 0,
  gap = 8,
  rowGap,
  columnGap,
}, ref) => {
  const rootClassNames = clsx(className, styles.root);

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

  const columnsBase = typeof columns === "number" ? columns : columns.base;

  let columnsSM = columnsBase;
  let columnsMD = columnsBase;
  let columnsLG = columnsBase;
  let columnsXL = columnsBase;
  let columnsXXL = columnsBase;

  if (typeof columns === "object") {
    columnsSM = columns.sm ?? columns.base;
    columnsMD = columns.md ?? columnsSM;
    columnsLG = columns.lg ?? columnsMD;
    columnsXL = columns.xl ?? columnsLG;
    columnsXXL = columns.xxl ?? columnsXL;
  }

  const paddingBase = typeof padding === "number" ? padding : padding.base;

  let paddingSM = paddingBase;
  let paddingMD = paddingBase;
  let paddingLG = paddingBase;
  let paddingXL = paddingBase;
  let paddingXXL = paddingBase;

  if (typeof padding === "object") {
    paddingSM = padding.sm ?? padding.base;
    paddingMD = padding.md ?? paddingSM;
    paddingLG = padding.lg ?? paddingMD;
    paddingXL = padding.xl ?? paddingLG;
    paddingXXL = padding.xxl ?? paddingXL;
  }

  // RETURN GRID CONTAINER
  if (container) return (
    <div ref={ref} className={rootClassNames} style={{
      ...style,
      "--sui-grid-row-gap-base": `${rowGapBase}px`,
      "--sui-grid-row-gap-sm": `${rowGapSM}px`,
      "--sui-grid-row-gap-md": `${rowGapMD}px`,
      "--sui-grid-row-gap-lg": `${rowGapLG}px`,
      "--sui-grid-row-gap-xl": `${rowGapXL}px`,
      "--sui-grid-row-gap-xxl": `${rowGapXXL}px`,
      "--sui-grid-column-gap-base": `${columnGapBase}px`,
      "--sui-grid-column-gap-sm": `${columnGapSM}px`,
      "--sui-grid-column-gap-md": `${columnGapMD}px`,
      "--sui-grid-column-gap-lg": `${columnGapLG}px`,
      "--sui-grid-column-gap-xl": `${columnGapXL}px`,
      "--sui-grid-column-gap-xxl": `${columnGapXXL}px`,
      "--sui-grid-columns-base": columnsBase,
      "--sui-grid-columns-sm": columnsSM,
      "--sui-grid-columns-md": columnsMD,
      "--sui-grid-columns-lg": columnsLG,
      "--sui-grid-columns-xl": columnsXL,
      "--sui-grid-columns-xxl": columnsXXL,
      "--sui-grid-padding-base": `${paddingBase}px`,
      "--sui-grid-padding-sm": `${paddingSM}px`,
      "--sui-grid-padding-md": `${paddingMD}px`,
      "--sui-grid-padding-lg": `${paddingLG}px`,
      "--sui-grid-padding-xl": `${paddingXL}px`,
      "--sui-grid-padding-xxl": `${paddingXXL}px`,
    }}>
      {children}
    </div>
  );

  const itemClassNames = clsx(className, styles.item);

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
