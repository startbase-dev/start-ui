import React from 'react';

import Container from './index';

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
        <Container />
      </div>
    </>
  );
};

export const ContainerComponent = Template.bind({});
ContainerComponent.args = { title: 'Container' };

const Component = {
  title: 'UI/Container',
  component: ContainerComponent,
};

export default Component;
