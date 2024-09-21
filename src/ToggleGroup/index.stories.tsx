import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ToggleGroup } from '.';
import Storybook from '../Storybook';

export default {
  title: 'UI/ToggleGroup',
  component: ToggleGroup.ToggleWrapper,
  parameters: {
    controls: {
      include: ['value', 'onChange', 'direction'],
    },
  },
} as Meta<typeof ToggleGroup.ToggleWrapper>;

const Template: StoryFn<typeof ToggleGroup.ToggleWrapper> = (args) => (
  <ToggleGroup.ToggleWrapper {...args}>
    {args.children || (
      <>
        <ToggleGroup.ToggleItem
          value="option1"
          color="primary"
          variant="default"
        >
          Option 🛸
        </ToggleGroup.ToggleItem>
        <ToggleGroup.ToggleItem
          value="option2"
          color="secondary"
          variant="outline"
        >
          Option 🌈
        </ToggleGroup.ToggleItem>
        <ToggleGroup.ToggleItem
          value="option3"
          color="destructive"
          variant="default"
        >
          Option 🦄
        </ToggleGroup.ToggleItem>
      </>
    )}
  </ToggleGroup.ToggleWrapper>
);

export const DefaultToggleGroup = Template.bind({});
DefaultToggleGroup.args = {
  value: null,
};

export const DisabledToggleGroup = Template.bind({});
DisabledToggleGroup.args = {
  value: null,
  children: (
    <>
      <ToggleGroup.ToggleItem value="option1" color="primary" disabled>
        Option 🎉
      </ToggleGroup.ToggleItem>
      <ToggleGroup.ToggleItem value="option2" color="secondary">
        Option 🎧
      </ToggleGroup.ToggleItem>
      <ToggleGroup.ToggleItem value="option3" color="destructive" disabled>
        Option 🐱
      </ToggleGroup.ToggleItem>
    </>
  ),
};

export const OutlineStyleToggleGroup = Template.bind({});
OutlineStyleToggleGroup.args = {
  value: null,
  children: (
    <>
      <ToggleGroup.ToggleItem value="option1" color="primary" variant="outline">
        Option Killer 💡
      </ToggleGroup.ToggleItem>
      <ToggleGroup.ToggleItem
        value="option2"
        color="secondary"
        variant="outline"
      >
        Option 📚
      </ToggleGroup.ToggleItem>
      <ToggleGroup.ToggleItem
        value="option3"
        color="destructive"
        variant="outline"
      >
        Option 🚀
      </ToggleGroup.ToggleItem>
    </>
  ),
};

export const LargeSizeToggleGroup = Template.bind({});
LargeSizeToggleGroup.args = {
  value: null,
  children: (
    <>
      <ToggleGroup.ToggleItem value="option1" color="primary" size="large">
        Option 🕶️
      </ToggleGroup.ToggleItem>
      <ToggleGroup.ToggleItem value="option2" color="secondary" size="large">
        Option 🎸
      </ToggleGroup.ToggleItem>
      <ToggleGroup.ToggleItem value="option3" color="destructive" size="large">
        Option 🐘
      </ToggleGroup.ToggleItem>
    </>
  ),
};

const FullShowcaseTemplate: StoryFn<typeof ToggleGroup.ToggleWrapper> = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Storybook title="Toggle Group Showcase">
      <ToggleGroup.ToggleWrapper value={selected} onChange={setSelected}>
        <ToggleGroup.ToggleItem
          value="option1"
          color="primary"
          variant="default"
        >
          Option
        </ToggleGroup.ToggleItem>
        <ToggleGroup.ToggleItem
          value="option2"
          color="secondary"
          variant="outline"
        >
          Any Option
        </ToggleGroup.ToggleItem>
      </ToggleGroup.ToggleWrapper>
      <ToggleGroup.ToggleWrapper
        value={selected}
        onChange={setSelected}
        direction="vertical"
      >
        <ToggleGroup.ToggleItem
          value="option3"
          color="destructive"
          size="large"
        >
          Large Option
        </ToggleGroup.ToggleItem>
        <ToggleGroup.ToggleItem value="option4" color="primary" size="small">
          Small Option
        </ToggleGroup.ToggleItem>
        <ToggleGroup.ToggleItem value="option5" color="primary" disabled>
          Disabled Option
        </ToggleGroup.ToggleItem>
      </ToggleGroup.ToggleWrapper>
      <ToggleGroup.ToggleWrapper value={selected} onChange={setSelected}>
        <ToggleGroup.ToggleItem
          value="option1"
          color="primary"
          variant="default"
          size="small"
        >
          🚀
        </ToggleGroup.ToggleItem>
        <ToggleGroup.ToggleItem
          value="option2"
          color="secondary"
          variant="default"
          size="small"
        >
          🐘
        </ToggleGroup.ToggleItem>
        <ToggleGroup.ToggleItem
          value="option3"
          color="destructive"
          size="small"
        >
          🎧
        </ToggleGroup.ToggleItem>
      </ToggleGroup.ToggleWrapper>
    </Storybook>
  );
};

export const ToggleGroupShowcase = FullShowcaseTemplate.bind({});
