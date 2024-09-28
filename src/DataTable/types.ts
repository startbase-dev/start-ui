import { Key } from 'react';
import { ColumnType } from 'rc-table';

export interface DataItem {
  key?: Key;
  [key: string]: unknown;
}

export interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
}

export interface DataTableProps {
  data: DataItem[];
  columns: ColumnType<DataItem>[];
  rowsPerPage?: number;
  pagination?: boolean;
  rowsPerPageOptions?: number[];
  border?: boolean;
  rowSelect?: boolean;
  rowSelectAction?: (selectedRows: (string | number)[]) => void;
  checkboxAvailable?: boolean;
  title?: React.ReactNode | string;
  filter?: boolean;
  virtualized?: boolean;
  emptyText?: React.ReactNode;
  rowClassName?: string;
  maxHeight?: number;
  minHeight?: number;
  sorting?: boolean;
}

export interface FilterProps {
  columns: ColumnType<DataItem>[];
  data: DataItem[];
  filterValue: string;
  setFilterValue: (value: string) => void;
  filterOperator: string;
  setFilterOperator: (value: string) => void;
  selectedColumns: string[];
  setSelectedColumns: React.Dispatch<React.SetStateAction<string[]>>;
  setHighlightedRows: (rows: (Key | undefined)[]) => void;
  setCurrentPage: (page: number) => void;
}

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  currentRowsPerPage: number;
  setCurrentRowsPerPage: (rowsPerPage: number) => void;
  rowsPerPageOptions: number[];
  dataLength: number;
}

export interface SortingProps {
  column: ColumnType<DataItem>;
  sortColumn: string | null;
  sortOrder: SortOrder;
  setSortColumn: (columnKey: string | null) => void;
  setSortOrder: (order: SortOrder) => void;
  showIcon: boolean;
}

export type SortOrder = 'ascend' | 'descend' | null;
