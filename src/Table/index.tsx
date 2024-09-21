'use client';

import React from 'react';
import cx from 'clsx';
import RCTable from 'rc-table';

import styles from './Table.module.scss';
import { TableProps, DataItem } from './types';
import { ColumnType } from 'rc-table';
const Table: React.FC<TableProps> = ({
  data,
  columns,
  rowClassName,
  emptyText,
  ...rest
}) => {
  const modifiedColumns = columns.map((column) => ({
    ...column,
    onCell: () => ({
      'data-title': column.title as React.ReactNode,
    }),
  })) as ColumnType<DataItem>[];

  return (
    <div className={styles.table}>
      <RCTable
        data={data?.map((item, index) => ({
          ...item,
          key: item?.key ?? index,
        }))}
        columns={modifiedColumns}
        tableLayout="fixed"
        className={styles.tableContainer}
        rowClassName={cx(styles.row, {
          [rowClassName as string]: rowClassName,
        })}
        emptyText={emptyText}
        {...rest}
      />
    </div>
  );
};

export default Table;
