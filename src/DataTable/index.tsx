"use client";

import cx from "clsx";
import RCTable, { VirtualTable } from "rc-table";
// eslint-disable-next-line css-modules/no-unused-class
import styles from "./DataTable.module.scss";
import { DataItem, CheckboxProps } from "./types";
import { ColumnType } from "rc-table";
import { useDataTableContext } from "./DataTableContext";
import Pagination from "./ui/Pagination";
import Filter from "./ui/Filter";
import React from "react";
import Typography from "../Typography/index";
import ".././style/components/datatable.scss";

const DataTable = () => {
  const {
    data,
    currentPage,
    currentRowsPerPage,
    selectedRows,
    setSelectedRows,
    highlightedRows,
    setHighlightedRows,
    filterColumn,
    filterValue,
    filterOperator,
    filter,
    rowSelectAction,
    checkboxAvailable,
    columns,
    title,
    rowClassName,
    rowSelect,
    emptyText,
    border,
    pagination,
    virtualized,
  } = useDataTableContext();

  const applyFilter = (data: DataItem[]) => {
    return data.filter((item) => {
      const columnValue =
        item[filterColumn ?? ""]?.toString().toLowerCase() ?? "";

      const searchValue = filterValue?.toLowerCase() ?? "";

      switch (filterOperator) {
        case "contains":
          return columnValue?.includes(searchValue);
        case "does not contain":
          return !columnValue?.includes(searchValue);
        case "equals":
          return columnValue === searchValue;
        case "does not equal":
          return columnValue !== searchValue;
        case "starts with":
          return columnValue?.startsWith(searchValue);
        case "ends with":
          return columnValue?.endsWith(searchValue);
        case "is empty":
          return !columnValue;
        case "is not empty":
          return !!columnValue;
        case "is any of":
          return searchValue?.split(",").includes(columnValue);
        default:
          return true;
      }
    });
  };
  const getPaginatedData = () => {
    const start = (currentPage - 1) * currentRowsPerPage;
    const end = start + currentRowsPerPage;

    let filteredData = [...data];

    if (filter && filterColumn && filterValue) {
      filteredData = applyFilter(filteredData);

      const highlightedRowIndices = filteredData.map(
        (_item, index) => start + index,
      );
      console.log("Filtered Data:", filteredData);
      setHighlightedRows(highlightedRowIndices);
    }

    return filteredData.slice(start, end).map((item, index) => ({
      ...item,
      key: item?.key ?? start + index,
    }));
  };

  const handleRowSelect = (rowIndex: number) => {
    let updatedSelectedRows = [...selectedRows];
    if (selectedRows.includes(rowIndex)) {
      updatedSelectedRows = updatedSelectedRows.filter((i) => i !== rowIndex);
    } else {
      updatedSelectedRows.push(rowIndex);
    }
    setSelectedRows(updatedSelectedRows);
    rowSelectAction?.(updatedSelectedRows);
  };

  const handleCheckboxChange = (rowIndex: number) => {
    handleRowSelect(rowIndex);
  };

  type DataAttributes = Record<`data-${string}`, string | undefined>;

  type ExtendedTdHTMLAttributes = React.TdHTMLAttributes<HTMLTableCellElement> &
    DataAttributes;

  const modifiedColumns: ColumnType<DataItem>[] = checkboxAvailable
    ? [
        {
          title: "",
          key: "checkbox",
          render: (_: unknown, __: DataItem, rowIndex: number) => (
            <Checkbox
              checked={selectedRows.includes(rowIndex)}
              onChange={() => handleCheckboxChange(rowIndex)}
            />
          ),
          onCell: (): ExtendedTdHTMLAttributes => ({
            "data-title": "checkbox",
          }),
        },
        ...columns.map(
          (column): ColumnType<DataItem> => ({
            ...column,
            onCell: (): ExtendedTdHTMLAttributes => ({
              "data-title":
                typeof column.title === "string" ? column.title : undefined,
            }),
          }),
        ),
      ]
    : columns.map(
        (column): ColumnType<DataItem> => ({
          ...column,
          onCell: (): ExtendedTdHTMLAttributes => ({
            "data-title":
              typeof column.title === "string" ? column.title : undefined,
          }),
        }),
      );

  return (
    <>
      <div className={styles.tableTop}>
        {title && (
          <div className={styles.tableTitle}>
            {typeof title === "string" ? (
              <Typography variant="title" size="small">
                {title}
              </Typography>
            ) : (
              title
            )}
          </div>
        )}
        <div className={styles.filterContainer}>{filter && <Filter />}</div>
      </div>

      <div className={cx(styles.table, { [styles.withoutBorder]: !border })}>
        {virtualized ? (
          <VirtualTable
            data={pagination ? getPaginatedData() : data}
            columns={modifiedColumns}
            tableLayout="fixed"
            scroll={{ y: 300 }}
            className={styles.tableContainer}
            rowClassName={(_record, index) =>
              cx(styles.row, styles.virtualized, {
                [rowClassName as string]: rowClassName,
                [styles.rowSelected]:
                  rowSelect &&
                  !checkboxAvailable &&
                  selectedRows.includes(index),
                [styles.rowHighlighted]: highlightedRows.includes(index),
              })
            }
            emptyText={emptyText}
            onRow={(_record, rowIndex) => ({
              onClick: () => {
                if (rowSelect && !checkboxAvailable) {
                  handleRowSelect(rowIndex as number);
                }
              },
            })}
          />
        ) : (
          <RCTable
            data={pagination ? getPaginatedData() : data}
            columns={modifiedColumns}
            tableLayout="fixed"
            className={styles.tableContainer}
            rowClassName={(_record, index) =>
              cx(styles.row, {
                [rowClassName as string]: rowClassName,
                [styles.rowSelected]:
                  rowSelect &&
                  !checkboxAvailable &&
                  selectedRows.includes(index),
                [styles.rowHighlighted]: highlightedRows.includes(index),
              })
            }
            emptyText={emptyText}
            onRow={(_record, rowIndex) => ({
              onClick: () => {
                if (rowSelect && !checkboxAvailable) {
                  handleRowSelect(rowIndex as number);
                }
              },
            })}
          />
        )}

        {pagination && <Pagination />}
      </div>
    </>
  );
};

DataTable.displayName = "DataTable";

export default DataTable;

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={{ cursor: "pointer" }}
    />
  );
};
