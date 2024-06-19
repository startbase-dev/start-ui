import React from 'react';

import Table from './index';

const Template = (args) => {
  return (
    <>
      <h2>{args.title}</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
        }}
      >
        <Table />
      </div>
    </>
  );
};

export const TableComponent = Template.bind({});
TableComponent.args = { title: 'Table' };

const Component = {
  title: 'UI/Table',
  component: TableComponent,
};

export default Component;
