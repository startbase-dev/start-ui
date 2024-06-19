import React from 'react';

import Typography from './index';

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
        <Typography />
      </div>
    </>
  );
};

export const TypographyComponent = Template.bind({});
TypographyComponent.args = { title: 'Typography' };

const Component = {
  title: 'UI/Typography',
  component: TypographyComponent,
};

export default Component;
