import React from 'react';
import DataTable from './index';
import { DataTableContextProps, DataItem } from './types';
import DataTableWrapper from './DataTableContext';
import Storybook from '../Storybook';

const dummyData: DataItem[] = [
  { key: 1, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
  { key: 2, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
  {
    key: 3,
    name: 'Alice Johnson',
    age: 45,
    email: 'alice.johnson@example.com',
  },
  { key: 4, name: 'Bob Brown', age: 52, email: 'bob.brown@example.com' },
  { key: 5, name: 'Clara Davis', age: 24, email: 'clara.davis@example.com' },
  { key: 6, name: 'Daniel Green', age: 38, email: 'daniel.green@example.com' },
  { key: 7, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
  { key: 8, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
  {
    key: 9,
    name: 'Alice Johnson',
    age: 45,
    email: 'alice.johnson@example.com',
  },
  { key: 10, name: 'Bob Brown', age: 52, email: 'bob.brown@example.com' },
  { key: 11, name: 'Clara Davis', age: 24, email: 'clara.davis@example.com' },
  { key: 12, name: 'Daniel Green', age: 38, email: 'daniel.green@example.com' },
];

const dummyColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const Template = (args: DataTableContextProps) => {
  return (
    <Storybook title="Table Component">
      <DataTableWrapper {...args}>
        <DataTable />
      </DataTableWrapper>
    </Storybook>
  );
};

export const TableWithBorder = Template.bind({});
TableWithBorder.args = {
  data: dummyData,
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'No data available',
};

export const VirtualTable = Template.bind({});
VirtualTable.args = {
  data: dummyData,
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'No data available',
  virtualized: true,
  filter: true,
  rowSelect: true,
  title: 'Virtual Table',
};

export const TableWithoutBorder = Template.bind({});
TableWithoutBorder.args = {
  data: dummyData,
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'No data available',
  border: false,
};

export const TableWithCustomEmptyText = Template.bind({});
TableWithCustomEmptyText.args = {
  data: [],
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'Here is an empty table.',
};

export const TableWithPagination = Template.bind({});
TableWithPagination.args = {
  data: dummyData,
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'No data available',
  pagination: true,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 15],
};

export const TableWithRowSelectHighlight = Template.bind({});
TableWithRowSelectHighlight.args = {
  data: dummyData,
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'No data available',
  rowSelect: true,
  rowSelectAction: (selectedRows: number[]) =>
    console.log('Selected rows (highlight):', selectedRows),
  pagination: false,
};

export const TableWithRowSelectCheckbox = Template.bind({});
TableWithRowSelectCheckbox.args = {
  data: dummyData,
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'No data available',
  rowSelect: true,
  checkboxAvailable: true,
  rowSelectAction: (selectedRows: number[]) =>
    console.log('Selected rows (checkbox):', selectedRows),
  pagination: false,
};

export const TableWithTitle = Template.bind({});
TableWithTitle.args = {
  data: dummyData,
  columns: dummyColumns,
  title: 'User Information',
  pagination: false,
};

export const TableWithFilter = Template.bind({});
TableWithFilter.args = {
  data: dummyData,
  columns: dummyColumns,
  filter: true,
  pagination: false,
};

const Component = {
  title: 'UI/DataTable',
  component: DataTable,
  argTypes: {
    data: { control: 'object' },
    columns: { control: 'object' },
    border: { control: 'boolean' },
    pagination: { control: 'boolean' },
    rowsPerPage: { control: 'number' },
    rowsPerPageOptions: { control: 'array' },
    rowSelect: { control: 'boolean' },
    checkboxAvailable: { control: 'boolean' },
    title: { control: 'text' },
    filter: { control: 'boolean' },
  },
};

export default Component;
