import React, { useState, useEffect } from 'react';
import styles from './Filter.module.scss';
import Button from '../../Button/index';
import Dropdown from '../../floatings/Dropdown';
import { FilterProps } from '../types';
import clsx from 'clsx';
import FloatingMenuItem from '../../floatings/FloatingMenuItem';
import DownArrow from '../../icons/DownArrow';

const i18nDefaults = {
  reset: 'Reset',
  columns: 'Columns',
  contains: 'contains',
  doesNotContain: 'does not contain',
  doesNotEqual: 'does not equal',
  endsWith: 'ends with',
  equals: 'equals',
  isAnyOf: 'is any of',
  isEmpty: 'is empty',
  isNotEmpty: 'is not empty',
  notNeeded: 'Not needed',
  operator: 'Operator',
  selectOperator: 'Select operator',
  startsWith: 'starts with',
  typeValue: 'Type value',
};

const Filter = ({
  columns,
  data,
  filterValue,
  setFilterValue,
  filterOperator,
  setFilterOperator,
  selectedColumns,
  setSelectedColumns,
  setHighlightedRows,
  setCurrentPage,
  i18n = i18nDefaults,
}: FilterProps) => {
  const [isContainerOpen, setIsContainerOpen] = useState(false);
  const [debouncedFilterValue, setDebouncedFilterValue] = useState(filterValue);

  const dictionary = { ...i18nDefaults, ...i18n };

  const operatorsRequiringValue = [
    'contains',
    'does not contain',
    'equals',
    'does not equal',
    'starts with',
    'ends with',
    'is any of',
  ];

  useEffect(() => {
    if (
      filterOperator !== 'Operator' &&
      !operatorsRequiringValue.includes(filterOperator)
    ) {
      applyFilterOnClick();
    }
  }, [filterOperator]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (debouncedFilterValue !== filterValue) {
        setFilterValue(debouncedFilterValue);

        if (filterOperator !== 'Operator') {
          applyFilterOnClick();
        }
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [debouncedFilterValue]);

  const applyFilterOnClick = () => {
    if (filterOperator === 'Operator' || selectedColumns.length === 0) {
      setHighlightedRows([]);
      return;
    }

    const searchValue = debouncedFilterValue?.toLowerCase().trim();

    const filteredData = data.filter((item) => {
      return selectedColumns.some((colKey) => {
        const columnValue = item[colKey]?.toString().toLowerCase().trim() ?? '';

        switch (filterOperator) {
          case 'contains':
            if (!searchValue) return false;
            return columnValue.includes(searchValue);
          case 'does not contain':
            if (!searchValue) return false;
            return !columnValue.includes(searchValue);
          case 'equals':
            if (!searchValue) return false;
            return columnValue === searchValue;
          case 'does not equal':
            if (!searchValue) return false;
            return columnValue !== searchValue;
          case 'starts with':
            if (!searchValue) return false;
            return columnValue.startsWith(searchValue);
          case 'ends with':
            if (!searchValue) return false;
            return columnValue.endsWith(searchValue);
          case 'is empty':
            return !columnValue;
          case 'is not empty':
            return !!columnValue;
          case 'is any of':
            if (!searchValue) return false;
            return searchValue
              .split(',')
              .map((s) => s.trim())
              .includes(columnValue);
          default:
            return false;
        }
      });
    });

    if (filteredData.length > 0) {
      const highlightedRowKeys = filteredData.map((item) => item.key);
      setHighlightedRows(highlightedRowKeys);
    } else {
      setHighlightedRows([]);
    }
    setCurrentPage(1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedFilterValue(e.target.value);
  };

  const filterOperators = [
    dictionary.contains,
    dictionary.doesNotContain,
    dictionary.equals,
    dictionary.doesNotEqual,
    dictionary.startsWith,
    dictionary.endsWith,
    dictionary.isEmpty,
    dictionary.isNotEmpty,
    dictionary.isAnyOf,
  ];

  function toggleReset() {
    setFilterValue('');
    setDebouncedFilterValue('');
    setFilterOperator('Operator');
    setSelectedColumns([]);
  }

  console.log(filterOperator, selectedColumns, filterValue);

  return (
    <div className={styles.filterContainer}>
      <div
        className={clsx(
          styles.filterPanel,
          isContainerOpen ? styles.openPanel : styles.closePanel
        )}
      >
        {filterOperator !== 'Operator' ||
        selectedColumns.length > 0 ||
        filterValue ? (
          <Button
            size="small"
            color="secondary"
            variant="outline"
            onClick={toggleReset}
          >
            {dictionary.reset}
          </Button>
        ) : null}
        <Dropdown
          menuClassName={styles.menu}
          component={
            <Button
              size="small"
              color="secondary"
              variant="outline"
              fluid
              className={styles.dropButton}
            >
              {dictionary.columns} <DownArrow />
            </Button>
          }
        >
          {columns
            .filter((col) => col.filterable !== false)
            .map((col) => (
              <div key={col.key} className={styles.item}>
                <input
                  type="checkbox"
                  value={col.key?.toString()}
                  checked={selectedColumns.includes(col.key?.toString() ?? '')}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSelectedColumns((prev) =>
                      e.target.checked
                        ? [...prev, value]
                        : prev.filter((colKey) => colKey !== value)
                    );
                  }}
                />
                {col.title}
              </div>
            ))}
        </Dropdown>
        <Dropdown
          menuClassName={styles.menu}
          component={
            <Button
              variant="outline"
              color="secondary"
              size="small"
              className={styles.dropButton}
            >
              {filterOperator} <DownArrow />
            </Button>
          }
        >
          {filterOperators.map((operator) => (
            <FloatingMenuItem
              label={operator}
              key={operator}
              onClick={() => setFilterOperator(operator)}
            />
          ))}
        </Dropdown>

        <input
          type="text"
          value={debouncedFilterValue}
          onChange={handleInputChange}
          placeholder={
            filterOperator === 'Operator'
              ? dictionary.selectOperator
              : operatorsRequiringValue.includes(filterOperator)
                ? dictionary.typeValue
                : dictionary.notNeeded
          }
          className={styles.filterInput}
          disabled={
            !operatorsRequiringValue.includes(filterOperator) ||
            filterOperator === 'Operator'
          }
        />
      </div>

      <Button
        size="icon"
        color="secondary"
        variant="outline"
        onClick={() => setIsContainerOpen(!isContainerOpen)}
        className={styles.button}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M200,136a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,136Zm32-56H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-80,96H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z"></path>
        </svg>
      </Button>
    </div>
  );
};

export default Filter;
