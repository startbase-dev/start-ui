import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  forwardRef,
  Ref,
} from 'react';
import { DataItem, DataTableContextProps } from './types';
import { ColumnType } from 'rc-table';

const DataTableContext = createContext<DataTableContextProps | undefined>(
  undefined
);

const DataTableWrapper = forwardRef<HTMLDivElement, DataTableContextProps>(
  (
    {
      children,
      rowsPerPage = 5,
      pagination = false,
      rowsPerPageOptions = [5, 10, 20],
      data: initialData,
      columns: initialColumns,
      border = true,
      rowSelect = false,
      rowSelectAction = (selectedRows: number[]) => console.log(selectedRows),
      checkboxAvailable = false,
      title = false,
      filter = false,
      virtualized = false,
      emptyText,
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentRowsPerPage, setCurrentRowsPerPage] = useState(rowsPerPage);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [highlightedRows, setHighlightedRows] = useState<number[]>([]);
    const [filterColumn, setFilterColumn] = useState('');
    const [filterValue, setFilterValue] = useState<string>('');
    const [filterOperator, setFilterOperator] = useState<string>('contains');
    const [data, setData] = useState<DataItem[]>(initialData);
    const [columns, setColumns] =
      useState<ColumnType<DataItem>[]>(initialColumns);

    useEffect(() => {
      setCurrentRowsPerPage(rowsPerPage);
    }, [rowsPerPage]);

    useEffect(() => {
      setData(initialData);
    }, [initialData]);

    useEffect(() => {
      setColumns(initialColumns);
    }, [initialColumns]);

    const contextValue: DataTableContextProps = {
      children,
      currentPage,
      setCurrentPage,
      currentRowsPerPage,
      setCurrentRowsPerPage,
      selectedRows,
      setSelectedRows,
      highlightedRows,
      setHighlightedRows,
      filterColumn,
      setFilterColumn,
      filterValue,
      setFilterValue,
      pagination,
      filterOperator,
      setFilterOperator,
      rowsPerPageOptions,
      data,
      setData,
      columns,
      setColumns,
      border,
      rowSelect,
      rowSelectAction,
      checkboxAvailable,
      title,
      filter,
      virtualized,
      emptyText,
    };

    return (
      <div ref={ref}>
        <DataTableContext.Provider value={contextValue}>
          {children}
        </DataTableContext.Provider>
      </div>
    );
  }
);

DataTableWrapper.displayName = 'DataTableWrapper';

export const useDataTableContext = () => {
  const context = useContext(DataTableContext);
  if (!context) {
    throw new Error(
      'useDataTableContext must be used within a DataTableWrapper'
    );
  }
  return context;
};

export default DataTableWrapper;
