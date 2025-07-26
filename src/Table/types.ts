import { CSSProperties, ReactNode } from 'react';
import type { GetRowKey } from 'rc-table/lib/interface';
import {
  TableProps as TProps,
  VirtualTableProps as RCVirtualTableProps,
  ColumnType,
} from 'rc-table';
import { Key } from 'react';

export interface DataItem {
  key?: Key;
  [key: string]: unknown;
}

export interface TableProps<T extends DataItem = DataItem> extends TProps {
  data?: T[];
  columns: ColumnType<T>[];
  rowClassName?: string | ((record: T) => string);
  emptyText?: ReactNode;
  summary?: (data: readonly T[]) => ReactNode;
  style?: CSSProperties;
  virtualized?: boolean;
  border?: boolean;
  rowKey?: string | number | keyof T | GetRowKey<T>;
}

export interface VirtualTableProps<T extends DataItem = DataItem>
  extends RCVirtualTableProps<T> {
  data?: T[];
  columns: ColumnType<T>[];
  rowClassName?: string | ((record: T) => string);
  emptyText?: ReactNode;
  summary?: (data: readonly T[]) => ReactNode;
  style?: CSSProperties;
  rowKey?: string | number | keyof T | GetRowKey<T>;
}
