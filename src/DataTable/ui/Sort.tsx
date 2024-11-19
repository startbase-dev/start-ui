import React from 'react';
import { SortingProps } from '../types';
import Button from '../../Button/index';
import DownArrow from '../../icons/DownArrow';

import styles from './Sort.module.scss';

const Sorting = ({
  column,
  isSorted,
  setSortColumn,
  sortOrder,
  setSortOrder,
}: SortingProps) => {
  function toggleSort() {
    setSortOrder((prev) => {
      if (!prev || !isSorted) return 'descend';
      if (prev === 'descend') return 'ascend';
      return null;
    });
    setSortColumn(column.dataIndex as string);
  }

  const sort = isSorted && sortOrder;

  return (
    <div className={styles.sortingContainer} data-sort={`${sort}`}>
      <Button
        className={styles.sortingButton}
        variant="link"
        size="icon"
        onClick={toggleSort}
      >
        <DownArrow />
      </Button>
    </div>
  );
};

export default Sorting;
