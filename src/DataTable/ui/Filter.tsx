"use client";

import React from "react";
// eslint-disable-next-line css-modules/no-unused-class
import styles from "../DataTable.module.scss";
import Button from "../../Button/index";
import { useDataTableContext } from "../DataTableContext";
import { DataItem } from "../types";
import Dropdown from "../../floatings/Dropdown/index";

const Filter = () => {
  const {
    filterColumn,
    setFilterColumn,
    filterValue,
    setFilterValue,
    filterOperator,
    setFilterOperator,
    filter,
    columns,
    data,
    setHighlightedRows,
    setCurrentPage,
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
  const applyFilterOnClick = () => {
    if (filter && filterColumn && filterValue) {
      const filteredData = applyFilter(data);

      const highlightedRowIndices = filteredData.map((item) =>
        data.indexOf(item),
      );

      setHighlightedRows(highlightedRowIndices);
      setCurrentPage(1);
    }
  };

  return (
    <Dropdown
      label="Filter"
      className={styles.filterButton}
      placement="bottom-end"
    >
      <div className={styles.filterContentInner}>
        <select
          value={filterColumn}
          onChange={(e) => setFilterColumn?.(e.target.value)}
          className={styles.filterDropdown}
        >
          {columns.map((col) => (
            <option key={col.key} value={col.key?.toString()}>
              {col.title}
            </option>
          ))}
        </select>

        <select
          value={filterOperator}
          onChange={(e) => setFilterOperator?.(e.target.value)}
          className={styles.filterDropdown}
        >
          {filterOperators.map((operator) => (
            <option key={operator} value={operator}>
              {operator}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue?.(e.target.value)}
          placeholder="Filter value"
          className={styles.filterInput}
        />
        <Button size="small" onClick={applyFilterOnClick}>
          Apply
        </Button>
      </div>
    </Dropdown>
  );
};
export default Filter;

const filterOperators = [
  "contains",
  "does not contain",
  "equals",
  "does not equal",
  "starts with",
  "ends with",
  "is empty",
  "is not empty",
  "is any of",
];
