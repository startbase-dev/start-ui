import { Dispatch, Key, SetStateAction } from 'react';
import { ColumnType } from 'rc-table';

export interface DataItem {
  key?: Key;
  [key: string]: unknown;
}

export interface CellAttributes
  extends React.TdHTMLAttributes<HTMLElement>,
    Record<`data-${string}`, string | undefined> {}

export interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  indeterminate?: boolean;
}

interface DataTableI18N {
  pagination: {
    rows: string;
    of: string;
    previous: string;
    next: string;
  };
  filter: {
    columns: string;
    operator: string;
    selectOperator: string;
    typeValue: string;
    notNeeded: string;
    contains: string;
    doesNotContain: string;
    equals: string;
    doesNotEqual: string;
    startsWith: string;
    endsWith: string;
    isEmpty: string;
    isNotEmpty: string;
    isAnyOf: string;
  };
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
  i18n?: Partial<DataTableI18N>;
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
  i18n?: Partial<Pick<DataTableI18N, "filter">["filter"]>;
}

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  currentRowsPerPage: number;
  setCurrentRowsPerPage: (rowsPerPage: number) => void;
  rowsPerPageOptions: number[];
  dataLength: number;
  i18n?: Partial<Pick<DataTableI18N, "pagination">["pagination"]>;
}

export interface SortingProps {
  column: ColumnType<DataItem>;
  setSortColumn: (columnKey: string | null) => void;
  isSorted: boolean;
  sortOrder: SortOrder;
  setSortOrder: Dispatch<SetStateAction<SortOrder>>;
}

export type SortOrder = 'ascend' | 'descend' | null;
