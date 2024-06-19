import React from 'react';

import Divider from './index';

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
        <Divider />
      </div>
    </>
  );
};

export const DividerComponent = Template.bind({});
DividerComponent.args = { title: 'Divider' };

const Component = {
  title: 'UI/Divider',
  component: DividerComponent,
};

export default Component;
