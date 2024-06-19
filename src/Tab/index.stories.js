import React from 'react';

import Tab from './index';

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
        <Tab />
      </div>
    </>
  );
};

export const TabComponent = Template.bind({});
TabComponent.args = { title: 'Tab' };

const Component = {
  title: 'UI/Tab',
  component: TabComponent,
};

export default Component;
