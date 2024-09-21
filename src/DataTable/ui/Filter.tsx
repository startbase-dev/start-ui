import React, { useMemo, useState } from "react";
// eslint-disable-next-line css-modules/no-unused-class
import styles from "../DataTable.module.scss";
import Button from "../../Button/index";
import { useDataTableContext } from "../DataTableContext";
import Dropdown from "../../floatings/Dropdown/index";

const Filter = () => {
  const {
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

  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  const operatorsRequiringValue = [
    "contains",
    "does not contain",
    "equals",
    "does not equal",
    "starts with",
    "ends with",
    "is any of",
  ];

  const filteredData = useMemo(() => {
    if (
      !filter ||
      selectedColumns.length === 0 ||
      (operatorsRequiringValue.includes(filterOperator as string) &&
        !filterValue)
    ) {
      return [];
    }

    return data.filter((item) => {
      return selectedColumns.some((colKey) => {
        const columnValue = item[colKey]?.toString().toLowerCase().trim() ?? "";
        const searchValue = (filterValue ?? "").toLowerCase().trim();

        switch (filterOperator) {
          case "contains":
            return columnValue.includes(searchValue);
          case "does not contain":
            return !columnValue.includes(searchValue);
          case "equals":
            return columnValue === searchValue;
          case "does not equal":
            return columnValue !== searchValue;
          case "starts with":
            return columnValue.startsWith(searchValue);
          case "ends with":
            return columnValue.endsWith(searchValue);
          case "is empty":
            return !columnValue;
          case "is not empty":
            return !!columnValue;
          case "is any of":
            return searchValue
              .split(",")
              .map((s) => s.trim())
              .includes(columnValue);
          default:
            return true;
        }
      });
    });
  }, [data, filter, selectedColumns, filterValue, filterOperator]);

  const applyFilterOnClick = () => {
    if (filteredData.length > 0) {
      const highlightedRowIndices = filteredData.map((item) =>
        data.indexOf(item),
      );

      setHighlightedRows(highlightedRowIndices);
    } else {
      setHighlightedRows([]);
    }

    setCurrentPage(1);
  };

  const requiresValue = operatorsRequiringValue;

  return (
    <Dropdown
      label="Filter"
      className={styles.filterButton}
      placement="bottom-end"
    >
      <div className={styles.filterContentInner}>
        {/* Column Selection Checkboxes */}
        <Dropdown label="Columns" menuClassName={styles.columnSelect}>
          {columns.map((col) => (
            <label key={col.key}>
              <input
                type="checkbox"
                value={col.key?.toString()}
                checked={selectedColumns.includes(col.key?.toString() ?? "")}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectedColumns((prev) =>
                    e.target.checked
                      ? [...prev, value]
                      : prev.filter((colKey) => colKey !== value),
                  );
                }}
              />
              {col.title}
            </label>
          ))}
        </Dropdown>

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
          placeholder={
            requiresValue.includes(filterOperator as string)
              ? "Type value"
              : "Not needed"
          }
          className={styles.filterInput}
          disabled={!requiresValue.includes(filterOperator as string)}
        />
        <Button
          size="small"
          onClick={applyFilterOnClick}
          disabled={
            selectedColumns.length === 0 ||
            (requiresValue.includes(filterOperator as string) && !filterValue)
          }
        >
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
