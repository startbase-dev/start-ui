import React, { useState, useEffect, useMemo, Key, forwardRef } from 'react';
import RCTable, { VirtualTable } from 'rc-table';
import cx from 'clsx';
import { ColumnType } from 'rc-table';
import { CellAttributes, DataItem, DataTableProps, SortOrder } from './types';
import Pagination from './ui/Pagination';
import Filter from './ui/Filter';
import Sorting from './ui/Sort';
import Checkbox from './ui/Checkbox';

// eslint-disable-next-line css-modules/no-unused-class
import styles from './DataTable.module.scss';

const DataTable = forwardRef<HTMLDivElement, DataTableProps>(
  (
    {
      data: initialData,
      columns: initialColumns,
      rowsPerPage = 5,
      pagination = false,
      rowsPerPageOptions = [5, 10, 20],
      border = true,
      rowSelect = false,
      rowSelectAction,
      checkboxAvailable = false,
      title,
      filter = false,
      sorting = false,
      virtualized = false,
      emptyText,
      rowClassName,
      maxHeight = 340,
      minHeight = 340,
    },
    ref
  ) => {
    const [data, setData] = useState<DataItem[]>(initialData);
    const [columns, setColumns] =
      useState<ColumnType<DataItem>[]>(initialColumns);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentRowsPerPage, setCurrentRowsPerPage] =
      useState<number>(rowsPerPage);
    const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
    const [highlightedRows, setHighlightedRows] = useState<(Key | undefined)[]>(
      []
    );
    const [filterValue, setFilterValue] = useState<string>('');
    const [filterOperator, setFilterOperator] = useState<string>('Operator');
    const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<SortOrder>(null);
    const [hoveredColumn, setHoveredColumn] = useState<string | null>(null);

    useEffect(() => {
      setData(initialData);
    }, [initialData]);

    useEffect(() => {
      setColumns(initialColumns);
    }, [initialColumns]);

    const applyFilter = (data: DataItem[]) => {
      if (!filter || selectedColumns.length === 0 || !filterOperator) {
        return data;
      }

      return data.filter((item) => {
        return selectedColumns.some((colKey) => {
          const columnValue =
            item[colKey]?.toString().toLowerCase().trim() ?? '';
          const searchValue = filterValue?.toLowerCase().trim();

          switch (filterOperator) {
            case 'contains':
              return columnValue.includes(searchValue);
            case 'does not contain':
              return !columnValue.includes(searchValue);
            case 'equals':
              return columnValue === searchValue;
            case 'does not equal':
              return columnValue !== searchValue;
            case 'starts with':
              return columnValue.startsWith(searchValue);
            case 'ends with':
              return columnValue.endsWith(searchValue);
            case 'is empty':
              return !columnValue;
            case 'is not empty':
              return !!columnValue;
            case 'is any of':
              return searchValue
                .split(',')
                .map((s) => s.trim())
                .includes(columnValue);
            default:
              return true;
          }
        });
      });
    };
    const sortData = (
      data: DataItem[],
      sortColumn: string | null,
      sortOrder: SortOrder
    ): DataItem[] => {
      if (!sortColumn || !sortOrder) return data;

      return [...data].sort((a, b) => {
        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (aValue == null || bValue == null) return 0;

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortOrder === 'ascend' ? aValue - bValue : bValue - aValue;
        }

        const aStr = aValue.toString();
        const bStr = bValue.toString();

        if (sortOrder === 'ascend') {
          return aStr.localeCompare(bStr);
        } else {
          return bStr.localeCompare(aStr);
        }
      });
    };

    const processedData = useMemo(() => {
      let tempData = applyFilter(data);

      if (sorting) {
        tempData = sortData(tempData, sortColumn, sortOrder);
      }

      return tempData;
    }, [
      data,
      filterValue,
      filterOperator,
      selectedColumns,
      sortColumn,
      sortOrder,
      sorting,
    ]);

    const totalItems = processedData.length;

    const paginatedData = useMemo(() => {
      if (!pagination) return processedData;

      const start = (currentPage - 1) * currentRowsPerPage;
      const end = start + currentRowsPerPage;
      return processedData.slice(start, end);
    }, [processedData, pagination, currentPage, currentRowsPerPage]);

    const handleRowSelect = (key: string | number) => {
      let updatedSelectedRows = [...selectedRows];
      if (selectedRows.includes(key)) {
        updatedSelectedRows = updatedSelectedRows.filter((i) => i !== key);
      } else {
        updatedSelectedRows.push(key);
      }
      setSelectedRows(updatedSelectedRows);
      rowSelectAction?.(updatedSelectedRows);
    };

    const handleSelectAll = () => {
      if (selectedRows.length === data.length) {
        setSelectedRows([]);
        rowSelectAction?.([]);
      } else {
        const allRowKeys = data.map((item) => item.key as string | number);
        setSelectedRows(allRowKeys);
        rowSelectAction?.(allRowKeys);
      }
    };

    const isAllSelected =
      data.length > 0 && selectedRows.length === data.length;
    const isIndeterminate =
      selectedRows.length > 0 && selectedRows.length < data.length;

    const enhancedColumns = useMemo(() => {
      return columns.map((col) => {
        const dataIndex = col.dataIndex as string;

        const titleWithSort = (
          <div
            className={styles.columnHeader}
            onMouseEnter={() => setHoveredColumn(dataIndex)}
            onMouseLeave={() => setHoveredColumn(null)}
          >
            <span>{col.title}</span>
            {sorting && (
              <Sorting
                column={col}
                sortColumn={sortColumn}
                setSortColumn={setSortColumn}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                showIcon={hoveredColumn === dataIndex}
              />
            )}
          </div>
        );
        const dataTitle =
          typeof col.title === 'string'
            ? col.title
            : typeof col.title === 'number'
              ? col.title.toString()
              : undefined;

        return {
          ...col,
          title: titleWithSort,
          onCell: (): CellAttributes => ({
            'data-title': dataTitle,
          }),
        };
      });
    }, [columns, sorting, sortColumn, sortOrder, hoveredColumn]);

    const modifiedColumns: ColumnType<DataItem>[] = checkboxAvailable
      ? [
          {
            title: (
              <Checkbox
                checked={isAllSelected}
                indeterminate={isIndeterminate}
                onChange={handleSelectAll}
              />
            ),
            key: 'checkbox',
            render: (_: unknown, record: DataItem) => (
              <Checkbox
                checked={selectedRows.includes(record.key as string | number)}
                onChange={() => handleRowSelect(record.key as string | number)}
              />
            ),
          },
          ...enhancedColumns,
        ]
      : enhancedColumns;

    const tableData = paginatedData.map((item, index) => ({
      ...item,
      key: item?.key ?? index,
    }));

    return (
      <div ref={ref}>
        <div
          className={cx(styles.tableTopContainer, {
            [styles.withoutTitle]: !title,
          })}
        >
          {title && (
            <div className={styles.tableTitleContainer}>
              {typeof title === 'string' ? (
                <span className={styles.tableTitle}>{title}</span>
              ) : (
                title
              )}
            </div>
          )}
          {filter && (
            <Filter
              columns={columns}
              data={data}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              filterOperator={filterOperator}
              setFilterOperator={setFilterOperator}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
              setHighlightedRows={setHighlightedRows}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>

        <div className={cx(styles.table, { [styles.withoutBorder]: !border })}>
          {virtualized ? (
            <VirtualTable
              data={tableData}
              columns={modifiedColumns}
              tableLayout="fixed"
              scroll={{ x: 400, y: maxHeight }}
              className={styles.tableContainer}
              rowClassName={(_record) =>
                cx(styles.row, styles.virtualized, {
                  [rowClassName as string]: rowClassName,
                  [styles.rowSelected]:
                    rowSelect &&
                    !checkboxAvailable &&
                    selectedRows.includes(_record.key as string | number),
                  [styles.rowHighlighted]: highlightedRows.includes(
                    _record.key
                  ),
                })
              }
              emptyText={emptyText}
              onRow={(record) => ({
                onClick: () => {
                  if (rowSelect && !checkboxAvailable) {
                    handleRowSelect(record.key as string | number);
                  }
                },
              })}
            />
          ) : (
            <RCTable
              data={tableData}
              columns={modifiedColumns}
              tableLayout="fixed"
              className={styles.tableContainer}
              scroll={{ y: maxHeight }}
              style={{ minHeight: minHeight }}
              rowClassName={(record) =>
                cx(styles.row, {
                  [rowClassName as string]: rowClassName,
                  [styles.rowSelected]:
                    rowSelect &&
                    !checkboxAvailable &&
                    selectedRows.includes(record.key as string | number),
                  [styles.rowHighlighted]: highlightedRows.includes(record.key),
                })
              }
              emptyText={emptyText}
              onRow={(record) => ({
                onClick: () => {
                  if (rowSelect && !checkboxAvailable) {
                    handleRowSelect(record.key as string | number);
                  }
                },
              })}
            />
          )}
        </div>

        {pagination && (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentRowsPerPage={currentRowsPerPage}
            setCurrentRowsPerPage={setCurrentRowsPerPage}
            rowsPerPageOptions={rowsPerPageOptions}
            dataLength={totalItems}
          />
        )}
      </div>
    );
  }
);

DataTable.displayName = 'DataTable';

export default DataTable;

export const DataTableGroup = { DataTable, Filter, Checkbox, Pagination };

export { type DataTableProps };
