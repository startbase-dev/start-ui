import React from 'react';
import cx from 'clsx';
import RCTable, { VirtualTable } from 'rc-table';
import type { ColumnType } from 'rc-table';
import styles from './Table.module.scss';
import type { TableProps, DataItem } from './types';

const Table = <T extends DataItem>({
  data,
  columns,
  rowClassName,
  emptyText,
  virtualized = false,
  border = true,
  ...rest
}: TableProps<T>) => {
  const modifiedColumns = columns.map((column) => ({
    onCell: () => ({
      'data-title': typeof column.title === 'string' ? column.title : '',
    }),
    ...column,
  })) as ColumnType<T>[];

  const tableData = data?.map((item, index) => ({
    ...item,
    key: item?.key ?? index,
  }));

  return (
    <div
      className={cx(styles.table, {
        [styles.border]: border,
        [styles.empty]: data?.length === 0,
      })}
    >
      {virtualized ? (
        <VirtualTable<T>
          data={tableData}
          columns={modifiedColumns}
          tableLayout="fixed"
          className={styles.tableContainer}
          rowClassName={cx(styles.row, {
            [rowClassName as string]: rowClassName,
          })}
          emptyText={emptyText}
          {...rest}
        />
      ) : (
        <RCTable<T>
          data={tableData}
          columns={modifiedColumns}
          tableLayout="fixed"
          className={styles.tableContainer}
          rowClassName={cx(styles.row, {
            [rowClassName as string]: rowClassName,
          })}
          emptyText={emptyText}
          {...rest}
        />
      )}
    </div>
  );
};

export default Table;
export { type TableProps };
