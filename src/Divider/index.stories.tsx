import React from 'react';
import Divider from './index';
import type { TemplateProps } from './types';

const Template: React.FC<TemplateProps> = (args) => {
  const { title, ...dividerProps } = args;

  const isVertical = args.orientation === 'vertical';

  return (
    <>
      <h2>{title}</h2>
      <div
        style={{
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'space-evenly',
          flexDirection: isVertical ? 'row' : 'column',
          height: '200px',
        }}
      >
        <span>Hello</span>
        <Divider {...dividerProps} />
        <span>World</span>
      </div>
    </>
  );
};

export const DividerComponent = Template.bind({});
DividerComponent.args = {
  title: 'Divider',
  children: '',
  variant: 'full',
  orientation: 'horizontal',
  align: 'center',
  color: 'var(--sui-border)',
  size: '1px',
  round: false,
};

export const DividerWithVariant = Template.bind({});
DividerWithVariant.args = {
  ...DividerComponent.args,
  title: 'Divider with variant',
  variant: 'center',
};

export const DividerWithChildren = Template.bind({});
DividerWithChildren.args = {
  ...DividerComponent.args,
  title: 'Divider with children',
  children: 'Hello World',
};

export const DividerWithAlign = Template.bind({});
DividerWithAlign.args = {
  ...DividerComponent.args,
  title: 'Divider with children',
  align: 'start',
  children: 'Hello World',
};

export const DividerVertical = Template.bind({});
DividerVertical.args = {
  ...DividerComponent.args,
  title: 'Divider (vertical)',
  orientation: 'vertical',
};

const Component = {
  title: 'UI/Divider',
  component: DividerComponent,
  argTypes: {
    variant: {
      options: ['full', 'start', 'center', 'end'],
      control: 'radio',
    },
    orientation: {
      options: ['horizontal', 'vertical'],
      control: 'radio',
    },
    align: {
      options: ['start', 'center', 'end'],
      control: 'radio',
    },
  },
};

export default Component;
