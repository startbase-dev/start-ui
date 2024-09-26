import React from 'react';
import Table from './index';
import type { TableProps, DataItem } from './types';
import Storybook from '../Storybook';

// Dummy data
const dummyData: DataItem[] = [
  { key: 1, name: 'John Doe', age: 28, email: 'john.doe@example.com' },
  { key: 2, name: 'Jane Smith', age: 34, email: 'jane.smith@example.com' },
  {
    key: 3,
    name: 'Alice Johnson',
    age: 45,
    email: 'alice.johnson@example.com',
  },
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

const Template: React.FC<TableProps> = (args) => {
  return (
    <Storybook title="Table Component">
      <Table {...args} />
    </Storybook>
  );
};

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  data: dummyData,
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'No data available',
};

export const TableWithPaginationHidden = Template.bind({});
TableWithPaginationHidden.args = {
  data: dummyData,
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'No data available',
};

export const TableWithCustomEmptyText = Template.bind({});
TableWithCustomEmptyText.args = {
  data: [],
  columns: dummyColumns,
  rowClassName: '',
  emptyText: 'Custom empty text',
};

const Component = {
  title: 'UI/Table',
  component: Table,
  argTypes: {
    rowClassName: {
      control: 'text',
    },
    emptyText: {
      control: 'text',
    },
  },
};

export default Component;
