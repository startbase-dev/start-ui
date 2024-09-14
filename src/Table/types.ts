import { CSSProperties, ReactNode } from "react";
import { Key } from "react";
import { ColumnType } from "rc-table";
export interface DataItem {
  key?: Key;
  [key: string]: unknown;
}

export interface TableProps
  extends Omit<
    React.AllHTMLAttributes<HTMLDivElement>,
    "data" | "summary" | "title"
  > {
  data?: DataItem[];
  columns: ColumnType<DataItem>[];
  rowClassName?: string;
  emptyText?: ReactNode;
  summary?: (data: readonly DataItem[]) => ReactNode;
  style?: CSSProperties;
}
