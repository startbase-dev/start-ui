import React from 'react';

import ReactComponent from './Component.js';

const Template = () => {
  return (
    <>
      <h1>Component</h1>
      <ReactComponent />
    </>
  );
};

export const StoryComponent = Template.bind({});

const Component = {
  title: 'Component',
  component: ReactComponent,
};

export default Component;
