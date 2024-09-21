import React from 'react';
// eslint-disable-next-line css-modules/no-unused-class
import styles from '../DataTable.module.scss';
import { useDataTableContext } from '../DataTableContext';
import Button from '../../Button/index';

const Pagination = () => {
  const {
    currentPage,
    setCurrentPage,
    currentRowsPerPage,
    setCurrentRowsPerPage,
    rowsPerPageOptions,
    data,
  } = useDataTableContext();

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / currentRowsPerPage);

  const startItem = (currentPage - 1) * currentRowsPerPage + 1;
  const endItem = Math.min(currentPage * currentRowsPerPage, totalItems);

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCurrentRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.paginationContent}>
        <div className={styles.pageInfo}>
          <div className={styles.rowsPerPage}>
            <label htmlFor="rowsPerPage">Rows:</label>
            <select
              id="rowsPerPage"
              value={currentRowsPerPage}
              onChange={handleRowsPerPageChange}
              className={styles.rowsPerPageSelect}
            >
              {rowsPerPageOptions?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.paginationInfo}>
            <span>
              {startItem}–{endItem} of {totalItems}
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
            Previous
          </Button>
          <Button
            size="small"
            variant="outline"
            color="secondary"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
