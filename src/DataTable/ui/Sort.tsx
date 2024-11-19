import React, { useState, useEffect, useRef } from 'react';
import { SortOrder, SortingProps } from '../types';
import Button from '../../Button/index';

import styles from './Sort.module.scss';

const Sorting = ({
  column,
  sortColumn,
  sortOrder,
  setSortColumn,
  setSortOrder,
  showIcon,
}: SortingProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const sortingRef = useRef<HTMLDivElement>(null);

  const handleSortOrderChange = (order: SortOrder) => {
    if (sortOrder === order && sortColumn === column.dataIndex) {
      setSortOrder(null);
      setSortColumn(null);
    } else {
      setSortOrder(order);
      setSortColumn(column.dataIndex as string);
    }
    setOpenDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sortingRef.current &&
        !sortingRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <div className={styles.sortingContainer} ref={sortingRef}>
      {(showIcon || openDropdown) && (
        <Button
          className={styles.sortingButton}
          variant="link"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            setOpenDropdown(!openDropdown);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </Button>
      )}
      {openDropdown && (
        <div className={styles.sortDropdown}>
          <button
            className={styles.sortOptionButton}
            onClick={() => handleSortOrderChange('ascend')}
          >
            Ascend
          </button>
          <button
            className={styles.sortOptionButton}
            onClick={() => handleSortOrderChange('descend')}
          >
            Descend
          </button>
        </div>
      )}
    </div>
  );
};

export default Sorting;
