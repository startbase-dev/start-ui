import React from 'react';

import Countdown from './index';

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
        <Countdown />
      </div>
    </>
  );
};

export const CountdownComponent = Template.bind({});
CountdownComponent.args = { title: 'Countdown' };

const Component = {
  title: 'UI/Countdown',
  component: CountdownComponent,
};

export default Component;
