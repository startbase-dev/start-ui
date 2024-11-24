import React from 'react';
import styles from './Pagination.module.scss';
import Button from '../../Button';
import { PaginationProps } from '../types';
import Dropdown from '../../floatings/Dropdown';
import FloatingMenuItem from '../../floatings/FloatingMenuItem';
import DownArrow from '../../icons/DownArrow';

const i18nDefaults = {
  next: 'Next',
  of: 'of',
  previous: 'Previous',
  rows: 'Rows',
};

const Pagination = ({
  currentPage,
  setCurrentPage,
  currentRowsPerPage,
  setCurrentRowsPerPage,
  rowsPerPageOptions,
  dataLength,
  i18n = i18nDefaults,
}: PaginationProps) => {
  const dictionary = { ...i18nDefaults, ...i18n };

  const totalPages = Math.ceil(dataLength / currentRowsPerPage);

  const startItem = (currentPage - 1) * currentRowsPerPage + 1;
  const endItem = Math.min(currentPage * currentRowsPerPage, dataLength);

  const handleNextPage = () => {
    setCurrentPage(Math.min(currentPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage(Math.max(currentPage - 1, 1));
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationContent}>
        <div className={styles.pageInfo}>
          <div className={styles.rowsPerPage}>
            <label htmlFor="rowsPerPage">{dictionary.rows}</label>
            <Dropdown
              menuClassName={styles.menu}
              component={
                <Button
                  variant="outline"
                  color="secondary"
                  size="small"
                  className={styles.rowsPerPageButton}
                >
                  {currentRowsPerPage} <DownArrow />
                </Button>
              }
            >
              {rowsPerPageOptions.map((option) => (
                <FloatingMenuItem
                  label={option}
                  key={option}
                  className={styles.item}
                  onClick={() => setCurrentRowsPerPage(Number(option))}
                />
              ))}
            </Dropdown>
          </div>
          <div className={styles.paginationInfo}>
            <span>
              {`${startItem}-${endItem} ${dictionary.of} ${dataLength}`}
            </span>
          </div>
        </div>
        <div className={styles.paginationButtons}>
          <Button
            size="small"
            variant="outline"
            color="secondary"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {dictionary.previous}
          </Button>
          <Button
            size="small"
            variant="outline"
            color="secondary"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {dictionary.next}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
