import React from 'react';

import Tooltip from './index';

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
        <Tooltip />
      </div>
    </>
  );
};

export const TooltipComponent = Template.bind({});
TooltipComponent.args = { title: 'Tooltip' };

const Component = {
  title: 'UI/Tooltip',
  component: TooltipComponent,
};

export default Component;
