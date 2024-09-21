import React from 'react';
import BentoGrid from './index';
import Storybook from '../Storybook';

interface TemplateProps {
  title: string;
  items: { element: React.ReactNode; width: number; height: number }[];
}

const Template: React.FC<TemplateProps> = (args) => {
  const { title, ...props } = args;

  return (
    <Storybook title={title}>
      <BentoGrid {...props} />
    </Storybook>
  );
};

export const BentoGridComponent = Template.bind({});
BentoGridComponent.args = {
  title: 'BentoGrid',
  gridCols: 4,
  items: [
    {
      element: (
        <div
          style={{
            backgroundColor: 'lightblue',
            width: 'auto',
            height: '-webkit-fill-available',
            borderRadius: '0.8rem',
            padding: '0.5rem',
          }}
        >
          Item 1
        </div>
      ),
      width: 1,
      height: 1,
    },
    {
      element: (
        <div
          style={{
            backgroundColor: 'lightgreen',
            width: 'auto',
            height: '-webkit-fill-available',
            borderRadius: '0.8rem',
            padding: '0.5rem',
          }}
        >
          Item 2
        </div>
      ),
      width: 1,
      height: 1,
    },
    {
      element: (
        <div
          style={{
            backgroundColor: 'lightcoral',
            width: 'auto',
            height: '-webkit-fill-available',
            borderRadius: '0.8rem',
            padding: '0.5rem',
          }}
        >
          Item 3
        </div>
      ),
      width: 1,
      height: 1,
    },
    {
      element: (
        <div
          style={{
            backgroundColor: 'lightgoldenrodyellow',
            width: 'auto',
            height: '-webkit-fill-available',
            borderRadius: '0.8rem',
            padding: '0.5rem',
          }}
        >
          Item 4
        </div>
      ),
      width: 1,
      height: 2,
    },
    {
      element: (
        <div
          style={{
            backgroundColor: 'lightcoral',
            width: 'auto',
            height: '-webkit-fill-available',
            borderRadius: '0.8rem',
            padding: '0.5rem',
          }}
        >
          Item 5
        </div>
      ),
      width: 3,
      height: 1,
    },
    {
      element: (
        <div
          style={{
            backgroundColor: 'lightblue',
            width: 'auto',
            height: '-webkit-fill-available',
            borderRadius: '0.8rem',
            padding: '0.5rem',
          }}
        >
          Item 6
        </div>
      ),
      width: 2,
      height: 1,
    },
    {
      element: (
        <div
          style={{
            backgroundColor: 'lightgreen',
            width: 'auto',
            height: '-webkit-fill-available',
            borderRadius: '0.8rem',
            padding: '0.5rem',
          }}
        >
          Item 7
        </div>
      ),
      width: 2,
      height: 1,
    },
  ],
};

const Component = {
  title: 'UI/BentoGrid',
  component: BentoGridComponent,
};

export default Component;
