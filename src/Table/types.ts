import { CSSProperties, ReactNode } from 'react';
import { TableProps as TProps, VirtualTableProps as VTProps } from 'rc-table';
import { Key } from 'react';
import { ColumnType } from 'rc-table';
export interface DataItem {
  key?: Key;
  [key: string]: unknown;
}

export interface TableProps extends TProps {
  data?: DataItem[];
  columns: ColumnType<DataItem>[];
  rowClassName?: string | ((record: any) => string);
  emptyText?: ReactNode;
  summary?: (data: readonly DataItem[]) => ReactNode;
  style?: CSSProperties;
  virtualized?: boolean;
  border?: boolean;
}

export interface VirtualTableProps extends VTProps<DataItem> {
  data?: DataItem[];
  columns: ColumnType<DataItem>[];
  rowClassName?: string | ((record: any) => string);
  emptyText?: ReactNode;
  summary?: (data: readonly DataItem[]) => ReactNode;
  style?: CSSProperties;
}
