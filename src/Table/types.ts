import {
  HTMLAttributes,
  TdHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";
import { Key } from "react";

export interface DataItem {
  key?: Key;
  [key: string]: unknown;
}

export interface CustomColumnType {
  title: ReactNode;
  dataIndex?: string | number;
  key?: Key;
  render?: (value: unknown, record: DataItem, index: number) => React.ReactNode;
  onCell?: (
    record: DataItem,
    rowIndex: number,
  ) => HTMLAttributes<HTMLElement> & TdHTMLAttributes<HTMLElement>;
}

export interface TableProps
  extends Omit<
    React.AllHTMLAttributes<HTMLDivElement>,
    "data" | "summary" | "title"
  > {
  data?: DataItem[];
  columns: CustomColumnType[];
  hidePagination?: boolean;
  rowClassName?: string;
  emptyText?: ReactNode;
  summary?: (data: readonly DataItem[]) => ReactNode;
  style?: CSSProperties;
}
