import React from 'react';

import Col from './index';

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
        <Col />
      </div>
    </>
  );
};

export const ColComponent = Template.bind({});
ColComponent.args = { title: 'Col' };

const Component = {
  title: 'UI/Col',
  component: ColComponent,
};

export default Component;
