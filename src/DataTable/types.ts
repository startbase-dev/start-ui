import { CSSProperties, Dispatch, ReactNode, SetStateAction, Key } from "react";
import { ColumnType } from "rc-table";

export interface DataItem {
  key?: Key;
  [key: string]: unknown;
}

export interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DataTableContextProps {
  children: ReactNode;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentRowsPerPage: number;
  setCurrentRowsPerPage: Dispatch<SetStateAction<number>>;
  selectedRows: number[];
  setSelectedRows: Dispatch<SetStateAction<number[]>>;
  highlightedRows: number[];
  setHighlightedRows: Dispatch<SetStateAction<number[]>>;
  filterColumn?: string;
  setFilterColumn?: Dispatch<SetStateAction<string>>;
  filterOperator?: string;
  setFilterOperator?: Dispatch<SetStateAction<string>>;
  filterValue?: string;
  setFilterValue?: Dispatch<SetStateAction<string>>;
  rowsPerPageOptions?: number[];
  setRowsPerPageOptions?: (options: number[]) => void;
  data: DataItem[];
  setData: (data: DataItem[]) => void;
  border?: boolean;
  columns: ColumnType<DataItem>[];
  rowClassName?: string;
  emptyText?: string | ReactNode;
  summary?: (data: readonly DataItem[]) => ReactNode;
  style?: CSSProperties;
  pagination?: boolean;
  rowsPerPage?: number;
  totalItemCount?: boolean;
  rowSelect?: boolean;
  rowSelectAction?: (selectedRows: number[]) => void;
  checkboxAvailable?: boolean;
  title?: ReactNode | string;
  filter?: boolean;
  setColumns: Dispatch<SetStateAction<ColumnType<DataItem>[]>>;
  virtualized: boolean;
}
